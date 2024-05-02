import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/registration">Register here</Link></p>
    </div>
  );
}

export default LoginPage;
