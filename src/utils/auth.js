// Hardcoded credentials
const credentials = {
    admin: { username: 'admin', password: 'admin123', role: 'admin' },
    user: { username: 'user', password: 'user123', role: 'user' },
  };
  
  export const login = (username, password) => {
    const user = Object.values(credentials).find(
      (cred) => cred.username === username && cred.password === password
    );
  
    if (user) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', user.role);
      return true;
    } else {
      return false;
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
  };
  
  export const getRole = () => {
    return localStorage.getItem('role');
  };
  