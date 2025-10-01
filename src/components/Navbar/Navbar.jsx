import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      
      {/* Toggle button for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Program</Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Campus</Link>
        </li>
        <li>
          <Link to="testimonals" smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Testimonals</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={() => setMenuOpen(false)}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
