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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <div class="dropdown-container">
            <li onClick={toggleDropdown} class = {isDropdownOpen ? `active` : ''}>Services</li>
            {isDropdownOpen && (
              <ul class="dropdown-menu">
                <li><a href='/services/towing'>Towing</a></li>
                <li><a href='/services/storage'>Storage</a></li>
                <li><a href='/services/tire-change'>Tire Change</a></li>
                <li><a href='/services/mechanical-works'>Mechanical Works</a></li>
                <li><a href='/services/collision-repair'>Collision Repair</a></li>
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <div class="dropdown-container-mobile">
            <li onClick={toggleDropdown}>Services</li>
            {isDropdownOpen && (
              <ul class="dropdown-menu-mobile">
                <li><a href='/services/towing'>Towing</a></li>
                <li><a href='/services/storage'>Storage</a></li>
                <li><a href='/services/tire-change'>Tire Change</a></li>
                <li><a href='/services/mechanical-works'>Mechanical Works</a></li>
                <li><a href='/services/collision-repair'>Collision Repair</a></li>
              </ul>
            )}
          </div>
        </ul>
      </div>
      )}
    </div>
  );
}

