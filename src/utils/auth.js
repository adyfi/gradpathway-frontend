import { userLogin } from "../api/api";

// Hardcoded credentials
const credentials = {
  admin: { username: 'admin2@mail.com', password: '123', role: 'admin' },
  user: { username: 'user', password: 'user123', role: 'user' },
};

export const login = async (email, password) => {
  try {
    const response = await userLogin(email, password);
    const { tokens, role } = response;
    console.log('token', tokens);
    if (tokens) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('gradpathway_email_gsratyhn', response.email);
      localStorage.setItem('role', role || 'user');
      localStorage.setItem('refreshToken', tokens.refresh);
      localStorage.setItem('accessToken', tokens.access);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login failed', error);
    return false; // Explicitly return false in case of error
  }
};

export const logout = () => { 
  localStorage.removeItem('auth'); 
  localStorage.removeItem('role'); 
  localStorage.removeItem('refreshToken'); 
  localStorage.removeItem('accessToken'); 
  localStorage.removeItem('gradpathway_email_gsratyhn'); 
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

export const getUserDetails = () =>{
  return localStorage.getItem('gradpathway_email_gsratyhn');
}