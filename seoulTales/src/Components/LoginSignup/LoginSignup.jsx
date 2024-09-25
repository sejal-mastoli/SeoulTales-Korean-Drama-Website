import React, {useState} from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

  return (
    <div className="login-signup-container">
    {isLogin ? (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email or Phone Number</label>
            <input type="text" placeholder="Enter your email or phone" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
          <p onClick={toggleForm}>Don't have an account? Sign Up</p>
        </form>
      </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email or Phone Number</label>
              <input type="text" placeholder="Enter your email or phone" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <button type="submit">Sign Up</button>
            <p onClick={toggleForm}>Already have an account? Login</p>
          </form>
        </div>
      )}
    </div>
  );
};
    

export default LoginSignup;
