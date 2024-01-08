import './Header.css';
import React,  {useState}from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <li onClick={toggleDropdown} class = {isDropdownOpen ? `active` : ''}>Services</li>
            {isDropdownOpen && (
              <ul class="dropdown-menu">
                <li>Towing</li>
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
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

