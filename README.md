# AWT
AWT repo includes all the application like react, nodeJS, etc which are been executed in Advanced Web Technologies Lab



//git commands
$git init
$git remote add origin https://github.com/virfvnn/AWT.git
$git add .
$git commit -m "Student management System"
$git status
$git remote -v(for link of github)


 // App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import StudentDashboard from './components/dashboard/StudentDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import StudentProfile from './components/profile/StudentProfile';
import TeacherProfile from './components/profile/TeacherProfile';
import AdminProfile from './components/profile/AdminProfile';
import CourseCatalog from './components/courses/CourseCatalog';
import Grades from './components/courses/Grades';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/registration" component={RegistrationPage} />
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/registration" component={Registration} />
                <Route exact path="/dashboard/student" component={StudentDashboard} />
                <Route exact path="/dashboard/teacher" component={TeacherDashboard} />
                <Route exact path="/dashboard/admin" component={AdminDashboard} />
                <Route exact path="/profile/student" component={StudentProfile} />
                <Route exact path="/profile/teacher" component={TeacherProfile} />
                <Route exact path="/profile/admin" component={AdminProfile} />
                <Route exact path="/courses/catalog" component={CourseCatalog} />
                <Route exact path="/courses/grades" component={Grades} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
[02/05, 10:27 am] sadhana j: // Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Student Management System</h1>
        </header>
    );
};

export default Header;

// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>© 2024 Student Management System</p>
        </footer>
    );
};

export default Footer;

// Login.js
import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            {/* Add login form */}
        </div>
    );
};

export default Login;

// Registration.js
import React from 'react';

const Registration = () => {
    return (
        <div>
            <h2>Registration</h2>
            {/* Add registration form */}
        </div>
    );
};

export default Registration;

// StudentDashboard.js
import React from 'react';

const StudentDashboard = () => {
    return (
        <div>
            <h2>Student Dashboard</h2>
            {/* Add student dashboard content */}
        </div>
    );
};

export default StudentDashboard;

// TeacherDashboard.js
import React from 'react';

const TeacherDashboard = () => {
    return (
        <div>
            <h2>Teacher Dashboard</h2>
            {/* Add teacher dashboard content */}
        </div>
    );
};

export default TeacherDashboard;

// AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            {/* Add admin dashboard content */}
        </div>
    );
};

export default AdminDashboard;

// StudentProfile.js
import React from 'react';

const StudentProfile = () => {
    return (
        <div>
            <h2>Student Profile</h2>
            {/* Add student profile content */}
        </div>
    );
};

export default StudentProfile;

// TeacherProfile.js
import React from 'react';

const TeacherProfile = () => {
    return (
        <div>
            <h2>Teacher Profile</h2>
            {/* Add teacher profile content */}
        </div>
    );
};

export default TeacherProfile;

// AdminProfile.js
import React from 'react';

const AdminProfile = () => {
    return (
        <div>
            <h2>Admin Profile</h2>
            {/* Add admin profile content */}
        </div>
    );
};

export default AdminProfile;

// CourseCatalog.js
import React from 'react';

const CourseCatalog = () => {
    return (
        <div>
            <h2>Course Catalog</h2>
            {/* Add course catalog content */}
        </div>
    );
};

export default CourseCatalog;

// Grades.js
import React from 'react';

const Grades = () => {
    return (
        <div>
            <h2>Grades</h2>
            {/* Add grades content */}
        </div>
    );
};

export default Grades;
