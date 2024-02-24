import './Header.css';
import React,  {useState}from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/#testimonials">Testimonials</Link></li>
          <div class="dropdown-container">
            <li onClick={toggleDropdown} class = {isDropdownOpen ? `active` : ''}>Services</li>
            {isDropdownOpen && (
              <ul class="dropdown-menu">
                <li><Link to = "/services/towing">Towing</Link></li>
                <li>Storage</li>
                <li>Tire Change</li>
                <li>Mechanical Works</li>
                <li>Collison Repair</li>
              </ul>
            )}
          </div>
        </ul>
      </div>
      <div class="header-item">
        <a href="tel:7814851800">Emergency Call</a>
      </div>
      
      <div class ="hamburger header-item" onClick = {toggleMobile}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isMobileOpen && (
        <div class="mobile-menu">
          <ul class="mobile-menu-items">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/#testimonials">Testimonials</Link></li>
            <div class="dropdown-container-mobile">
              <li onClick={toggleDropdown}>Services</li>
              {isDropdownOpen && (
                <ul class="dropdown-menu-mobile">
                  <li><Link to = "/services/towing">Towing</Link></li>
                  <li>Storage</li>
                  <li>Tire Change</li>
                  <li>Mechanical Works</li>
                  <li>Collison Repair</li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

