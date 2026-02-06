import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../firebase';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [mfaStep, setMfaStep] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [tempToken, setTempToken] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser, setMfaRequired } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authAPI.signin(formData.email, formData.password);
      
      if (response.mfaRequired) {
        // MFA is enabled, need to verify
        setTempToken(response.tempToken);
        setMfaRequired(true);
        setMfaStep(true);
        toast.info('Please enter code from your authenticator app');
      } else if (response.success) {
        // No MFA, direct signin
        setCurrentUser(response.user);
        toast.success('Signed in successfully!');
        navigate('/browse');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      const message = error.response?.data?.message || 'Failed to sign in';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyMFA = async (e) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length !== 6) {
      toast.error('Please enter a valid 6-digit code');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.verifyMFA(tempToken, verificationCode);
      
      if (response.success) {
        setCurrentUser(response.user);
        setMfaRequired(false);
        toast.success('Signed in successfully!');
        navigate('/browse');
      }
    } catch (error) {
      console.error('MFA verification error:', error);
      const message = error.response?.data?.message || 'Invalid verification code';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <Link to="/">
          <h1 className="logo">NETFLIX</h1>
        </Link>
      </div>

      <div className="auth-content">
        <div className="auth-form-container">
          {!mfaStep ? (
            <form onSubmit={handleSignIn} className="auth-form">
              <h2>Sign In</h2>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
              <div className="auth-footer">
                New to Netflix? <Link to="/signup">Sign up now</Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyMFA} className="auth-form">
              <h2>Two-Factor Authentication</h2>
              <p className="info-text">
                Open your authenticator app and enter the 6-digit code
              </p>
              <div className="authenticator-icon">
                🔐
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  maxLength="6"
                  required
                  autoFocus
                  className="code-input"
                />
              </div>
              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Sign In'}
              </button>
              <button 
                type="button"
                onClick={() => {
                  setMfaStep(false);
                  setVerificationCode('');
                  setTempToken('');
                }}
                className="auth-button secondary"
              >
                Back to Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
