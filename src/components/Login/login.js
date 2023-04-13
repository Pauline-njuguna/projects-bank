import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    // e.g. send username and password to backend for authentication
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Handle password reset logic here
    // e.g. send newPassword to backend to update user's password
    alert("Password reset successful!");
    setResetPassword(false);
  };

  return (
    <div className="login">
      
        <h1 className="login-heading">Login</h1>
        {/* <div className="login"> */}
        <form className="login-form">
          <label className="login-label">Username:</label>
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label className="login-label">Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {resetPassword ? (
            <>
              <label className="login-label">New Password:</label>
              <input
                className="login-input"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <br />
              <label className="login-label">Confirm Password:</label>
              <input
                className="login-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br />
              <button
                className="login-button"
                type="button"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
              <br />
            </>
          ) : (
            <>
              <button
                className="login-button"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
              <br />
              <button
                className="login-button"
                type="button"
                onClick={() => setResetPassword(true)}
              >
                Reset Password
              </button>
              <br />
            </>
          )}
        </form>
      </div>
    // </div>
  );
};

export default Login;
