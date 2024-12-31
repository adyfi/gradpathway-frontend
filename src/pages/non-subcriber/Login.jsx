import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [retryTimer, setRetryTimer] = useState(0);

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("username" + "password");
    console.log(username);
    console.log(password);
    setLoading(true); // Prevent duplicate submissions
    setError(''); // Clear previous errors

    try {
      const isAuthenticated = await login(username, password); // Await the login response
      console.log("success", isAuthenticated);
      if (isAuthenticated) {
        navigate('/dashboard'); // Navigate to the dashboard upon success
      } else {
        setError('Invalid username or password');
        startRetryTimer();
      }
    } catch (error) {
      setError(error.message || 'Login failed');
      startRetryTimer();
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const startRetryTimer = () => {
    setRetryTimer(10);
  };

  // Handle timer countdown
  useEffect(() => {
    if (retryTimer > 0) {
      const interval = setInterval(() => {
        setRetryTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [retryTimer]);

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
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed">
      <div
        className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <a href="./index.html" className="text-nowrap logo-img text-center d-block py-2 w-100">
                    <img src="./grandpathway-logo.svg" width="260" alt="" />
                  </a>
                  <p className="text-center">Your Job Companion</p>
                  {error && <p className='text-danger mt-1'>{error}</p>}
                  {retryTimer > 0 && (
                    <p className='text-warning'>
                      Please wait {retryTimer} seconds before retrying.
                    </p>
                  )}
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Username</label>
                      <input type="email" className="form-control" onChange={(e) => setUsername(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                    </div>
                    {/* <a href="./index.html" className="btn btn-primary w-100 py-8 mb-4 rounded-2">{loading ? 'Logging In...' : 'Log In'}</a> */}

                    <button disabled={retryTimer > 0 || loading || !username || !password} className="btn btn-primary w-100 py-8 mb-2 rounded-2" type="submit" onClick={handleLogin} >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="form-check">
                        {/* <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label text-dark small" for="flexCheckChecked">
                          Remeber this Device
                        </label> */}
                      </div>
                      <a className="text-primary fw-bold small" href="./index.html">Forgot Password ?</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="mb-0 fw-bold small">New to GradPathway?</p>
                      <a className="text-primary fw-bold ms-2 small" href="./authentication-register.html">Create an account</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
