import './Main.css';
import React,  {useState}from 'react';

function MainPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="header-container">
      <div className="header-item">
        <div className="header-logo"/>
      </div>
      <div className="header-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <div className="dropdown-container">
            <li onClick={toggleDropdown}>Services</li>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
