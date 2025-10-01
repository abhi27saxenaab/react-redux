import React,  { useState } from 'react';
import { Link } from 'react-router-dom';




function Navbar() {

  const [activeNav, setActiveNav] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navStyle = {
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const navLinkStyle = {
    fontWeight: '500',
    margin: '0 8px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: '#667eea',
    color: 'white'
  };

  const dropdownStyle = {
    border: 'none',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    padding: '10px 0',
    marginTop: '10px'
  };

  const dropdownItemStyle = {
    padding: '8px 20px',
    transition: 'all 0.2s ease'
  };

  const mobileMenuStyle = {
    backgroundColor: 'white',
    borderTop: '2px solid #f8f9fa',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };
  return (
    <>

{/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={navStyle}>
        <div className="container">
          {/* Brand/Logo */}
          <a className="navbar-brand" href="#" style={brandStyle}>
            <i className="bi bi-building me-2"></i>
            CompanyPortal
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home */}
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === 'home' ? 'active' : ''}`} 
                style={activeNav === 'home' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => setActiveNav('home')}
                to="/">Home
                <i className="bi bi-speedometer2 me-1"></i>
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === 'about' ? 'active' : ''}`} 
                style={activeNav === 'about' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => setActiveNav('about')}
                to="/about">About
                <i className="bi bi-speedometer2 me-1"></i>
                </Link>
              </li>


              {/* User */}
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === 'user' ? 'active' : ''}`} 
                style={activeNav === 'user' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => setActiveNav('user')}
                to="/user">User
                <i className="bi bi-speedometer2 me-1"></i>
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`} 
                style={activeNav === 'contact' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => setActiveNav('contact')}
                to="/contact">Contact
                <i className="bi bi-speedometer2 me-1"></i>
                </Link>
              </li>


              {/* Calculator */}
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === 'calculator' ? 'active' : ''}`} 
                style={activeNav === 'calculator' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => setActiveNav('calculator')}
                to="/calculator">Calculator
                <i className="bi bi-speedometer2 me-1"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  );
}
export default Navbar;