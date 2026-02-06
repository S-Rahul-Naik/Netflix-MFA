import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../firebase';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [step, setStep] = useState(1); // 1: signup, 2: MFA setup, 3: verify MFA
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.signup(formData.email, formData.password);
      
      if (response.success) {
        toast.success('Account created successfully!');
        setCurrentUser(response.user);
        setStep(2);
      }
    } catch (error) {
      console.error('Signup error:', error);
      const message = error.response?.data?.message || 'Failed to create account';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSetupMFA = async () => {
    setLoading(true);
    try {
      const response = await authAPI.setupMFA();
      
      if (response.success) {
        setQrCode(response.qrCode);
        setSecret(response.secret);
        toast.success('Scan QR code with your authenticator app');
        setStep(3);
      }
    } catch (error) {
      console.error('MFA setup error:', error);
      const message = error.response?.data?.message || 'Failed to setup MFA';
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
      const response = await authAPI.verifyMFASetup(verificationCode);
      
      if (response.success) {
        toast.success('MFA enabled successfully! You can now sign in.');
        setTimeout(() => navigate('/browse'), 2000);
      }
    } catch (error) {
      console.error('MFA verification error:', error);
      const message = error.response?.data?.message || 'Invalid verification code';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const skipMFA = () => {
    toast.info('You can enable MFA later in settings');
    navigate('/browse');
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
          {step === 1 && (
            <form onSubmit={handleSignUp} className="auth-form">
              <h2>Sign Up</h2>
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
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
              <div className="auth-footer">
                Already have an account? <Link to="/signin">Sign In</Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="auth-form">
              <h2>Setup Multi-Factor Authentication</h2>
              <p className="info-text">
                Add an extra layer of security by enabling MFA with an authenticator app
                like Google Authenticator or Microsoft Authenticator.
              </p>
              <div className="mfa-options">
                <div className="mfa-option">
                  <h4>📱 Recommended Apps:</h4>
                  <ul>
                    <li>Google Authenticator</li>
                    <li>Microsoft Authenticator</li>
                    <li>Authy</li>
                    <li>1Password</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={handleSetupMFA} 
                className="auth-button"
                disabled={loading}
              >
                {loading ? 'Setting Up...' : 'Setup MFA'}
              </button>
              <button 
                onClick={skipMFA} 
                className="auth-button secondary"
              >
                Skip for Now (Not Recommended)
              </button>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleVerifyMFA} className="auth-form">
              <h2>Scan QR Code</h2>
              <p className="info-text">
                Open your authenticator app and scan this QR code
              </p>
              
              {qrCode && (
                <div className="qr-code-container">
                  <img src={qrCode} alt="MFA QR Code" className="qr-code" />
                </div>
              )}
              
              <div className="secret-key">
                <p className="info-text">
                  <strong>Or enter this key manually:</strong>
                </p>
                <div className="secret-code">{secret}</div>
              </div>

              <p className="info-text" style={{ marginTop: '20px' }}>
                Enter the 6-digit code from your authenticator app:
              </p>
              
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
                {loading ? 'Verifying...' : 'Verify & Complete'}
              </button>
              
              <button 
                type="button"
                onClick={skipMFA} 
                className="auth-button secondary"
              >
                Skip for Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
