import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Student Management System</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/auth/login">Login (Auth)</Link></li>
        <li><Link to="/auth/registration">Registration (Auth)</Link></li>
        <li><Link to="/dashboard/student">Student Dashboard</Link></li>
        <li><Link to="/dashboard/teacher">Teacher Dashboard</Link></li>
        <li><Link to="/dashboard/admin">Admin Dashboard</Link></li>
        <li><Link to="/profile/student">Student Profile</Link></li>
        <li><Link to="/profile/teacher">Teacher Profile</Link></li>
        <li><Link to="/profile/admin">Admin Profile</Link></li>
        <li><Link to="/courses/catalog">Course Catalog</Link></li>
        <li><Link to="/courses/grades">Grades</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
