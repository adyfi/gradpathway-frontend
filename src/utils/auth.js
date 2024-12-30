import { userLogin } from "../api/api";

// Hardcoded credentials
const credentials = {
  admin: { username: 'admin2@mail.com', password: '123', role: 'admin' },
  user: { username: 'user', password: 'user123', role: 'user' },
};

export const login = async (email, password) => {
  try {
    const response = await userLogin(email, password);
    // Assuming role is part of the response, if not include accordingly 
    const { tokens, role } = response;
    console.log('token', tokens);
    // Save tokens and role to localStorage 
    if (tokens) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', role ? role : 'user');
      localStorage.setItem('refreshToken', tokens.refresh);
      localStorage.setItem('accessToken', tokens.access);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Login failed', error);
    return false;
  }
};

export const logout = () => { 
  localStorage.removeItem('auth'); 
  localStorage.removeItem('role'); 
  localStorage.removeItem('refreshToken'); 
  localStorage.removeItem('accessToken'); 
};

export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

export const getRole = () => {
  return localStorage.getItem('role');
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};