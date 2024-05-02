 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Switch from "react-switch";
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
              <Routes>
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
                 </Routes>
             </Switch>
             <Footer />
         </Router> 
     );
 };
 
 export default App;
 