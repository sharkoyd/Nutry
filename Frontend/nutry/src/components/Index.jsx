import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import AuthenticatedHome from './pages/home/AuthenticatedHome';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './shared/NavBar';
import { ProgressSpinner } from 'primereact/progressspinner';
function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:80/api/auth/checkAuth.php', {
        credentials: 'include',
      });
      const data = await response.json();

      setIsAuthenticated(data.isAuthenticated);

      setIsAdmin(data.isAdmin);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    //server on maintenance, please wait ... 
    //spinner
    return(
      <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:"100vh"}}>
        <p>If this Takes so long the server may be on maintenance, please wait ...</p>
        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />

      </div>
    )
     
  }

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={isAuthenticated ? <AuthenticatedHome /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default Index;