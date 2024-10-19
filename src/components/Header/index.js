import { useState } from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { LiaSearchSolid } from 'react-icons/lia';
import './index.css';
const count = 3;

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header>
      <div className="header">
        <div className="header-content">
          <span className="free-shipping">Free Shipping on orders above 999</span>
          <span className="call-info">Call us on: +91 9845325465</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-container d-none d-lg-flex justify-content-between mt-3">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dgaxscbrn/image/upload/v1729267847/easmithlogo_dfqibp.png"
            alt="logo"
            className="logo"
          />
          <h2 className="title">Chaperone</h2>
        </div>

        <nav className="navbar">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#plants" className="navbar-item">Plants & Pots</a>
          <a href="#tools" className="navbar-item">Tools</a>
          <a href="#services" className="navbar-item">Our Services</a>
          <a href="#blog" className="navbar-item">Blog</a>
          <a href="#story" className="navbar-item">Our Story</a>
          <a href="#faqs" className="navbar-item">FAQs</a>
        </nav>

        <div className="profile-card">
          <div className="text-center">
            <MdOutlineAccountCircle size={30} />
            <p>My Profile</p>
          </div>
          <div className="text-center position-relative">
            <IoCartOutline size={30} />
            <p>Cart</p>
            {count > 0 && <span className="badge">{count}</span>}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="navbar-mobile navbar navbar-expand-lg d-lg-none">
        <div className="container">
            <img
              src="https://res.cloudinary.com/dgaxscbrn/image/upload/v1729267847/easmithlogo_dfqibp.png"
              className="logo"
              alt="Logo"
            />
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}>
            <nav className="navbar-nav ml-auto">
              <a href="#home" className="nav-link">Home</a>
              <a href="#plants" className="nav-link">Plants & Pots</a>
              <a href="#tools" className="nav-link">Tools</a>
              <a href="#services" className="nav-link">Our Services</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#story" className="nav-link">Our Story</a>
              <a href="#faqs" className="nav-link">FAQs</a>
            </nav>
          </div>
        </div>
      </nav>

      <div className="search-container d-flex flex-row justify-content-center align-items-center mt-3 mb-3">
        <LiaSearchSolid size={25} className="search-icon" />
        <input type="search" placeholder="Search Plant" className="search-input" />
        <button className="leaf-button">
          <img
            src="https://res.cloudinary.com/dgaxscbrn/image/upload/v1729268869/image_91_2_d1gyh9.png"
            alt="leaf"
            className="leaf-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
