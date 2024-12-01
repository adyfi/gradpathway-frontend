import axios from 'axios';

export const login = async (email, password) => {
  const email = process.env.REACT_APP_USER_EMAIL;
  const password = process.env.REACT_APP_USER_PASSWORD;
  const baseURL = process.env.BACKEND_BASE_URL;

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

export const fetchBlogPosts = async (AUTH_TOKEN) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}/blogs/`,
    headers: { 'Content-Type': 'application/json', 'Authorization': AUTH_TOKEN }
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const fetchBlogPostById = async (AUTH_TOKEN, blogId) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}/blogs/${blogId}`,
    headers: { 'Authorization': AUTH_TOKEN },
  };
  try { 
    const response = await axios.request(config); 
    console.log(JSON.stringify(response.data)); 
    return response.data
  } catch (error) {
    console.error(error); 
  }
};