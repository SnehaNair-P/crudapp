import React, { useState } from 'react';
import './Nav.css';
import logo from './Images/logo.png';
import user from './Images/demo-user.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../UseContext/UseContext';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

function Navbar() {
  //  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/home">
        <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <div className="list">
          <a href="home">Home</a>
          <a href="#">About</a>
          <a href="contacts">Contact</a>
        </div>
        <div className="user-logo">
            <Link to="/contacts">
          <img src={user} alt="User Logo" />
          </Link>
        </div>
        <div className="logout">
          
          <button onClick={handleLogOut}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


