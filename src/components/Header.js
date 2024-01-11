import './Header.css';
import React,  {useState}from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  }

  return (
    <div class="header-container">
      <div class="header-item">
        <div class="header-logo"/>
      </div>
      
      <div class="header-item">
        <ul class = "nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <div class="dropdown-container">
            <li onClick={toggleDropdown}>Services</li>
            {isDropdownOpen && (
              <ul class="dropdown-menu">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
          </div>
        </ul>
      </div>
      <div class="header-item">
        <a href="#">Contact Us</a>
      </div>
      
      <div class ="hamburger header-item" onClick = {toggleMobile}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isMobileOpen && (
        <div class="mobile-menu">
          <ul class="mobile-menu-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <div class="dropdown-container">
              <li onClick={toggleDropdown}>Services</li>
              {isDropdownOpen && (
                <ul class="dropdown-menu">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

