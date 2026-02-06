import axios from 'axios';

// API base URL - uses proxy in development
const API_URL = '/api/auth';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  // Sign up
  signup: async (email, password) => {
    const response = await api.post('/signup', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Sign in
  signin: async (email, password) => {
    const response = await api.post('/signin', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Setup MFA - Get QR code
  setupMFA: async () => {
    const response = await api.post('/setup-mfa');
    return response.data;
  },

  // Verify MFA setup
  verifyMFASetup: async (token) => {
    const response = await api.post('/verify-mfa-setup', { token });
    return response.data;
  },

  // Verify MFA during signin
  verifyMFA: async (tempToken, token) => {
    const response = await api.post('/verify-mfa', { tempToken, token });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get('/me');
    return response.data;
  },

  // Disable MFA
  disableMFA: async () => {
    const response = await api.post('/disable-mfa');
    return response.data;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
  }
};

export default authAPI;
