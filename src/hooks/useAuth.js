import { useState } from 'react';
import { login } from '../api';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await login();
      setToken(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { token, loading, error, handleLogin };
};

export default useAuth;
