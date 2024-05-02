import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default RegistrationPage;
