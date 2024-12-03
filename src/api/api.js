import axios from 'axios';

export const login = async () => {
  const email = import.meta.env.VITE_REACT_APP_USER_EMAIL;
  const password = import.meta.env.VITE_REACT_APP_USER_PASSWORD;
  const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

  const data = JSON.stringify({ email, password });
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseURL}/users/login/`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    const accessToken = response.data.tokens.access
    console.log(JSON.stringify(response.data));
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBlogPosts = async () => {
  const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseURL}/blogs/`,
    headers: { 'Content-Type': 'application/json'}
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data
  } catch (error) {
    console.log(error.toString())
    console.error(error);
  }
};

export const fetchBlogPostById = async (blogId) => {
  const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseURL}/blogs/${blogId}`,
  };
  try { 
    const response = await axios.request(config); 
    console.log(JSON.stringify(response.data)); 
    return response.data
  } catch (error) {
    console.error(error); 
  }
};