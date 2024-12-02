import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    // <div>
    //   <h2>Login Page</h2>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleLogin}>Login</button>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </div>
    <div className="inner-page-wrapper">
    <section className="login-wrapper">
            <div className="container">
                <div className="row">
                   <div className="col-md-5 m-auto login-content">
                    <h1>Login</h1>
                    <div className="contact-form">
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Jonh Doe" />
                          </div>
                          <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Email Id</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com" />
                          </div>
                          <div className="mb-5">
                            <label for="formGroupExampleInput2" className="form-label">Password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="9876543210" />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                          </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
        </div>
  );
};

export default Login;
