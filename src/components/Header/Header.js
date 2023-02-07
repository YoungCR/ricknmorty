import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../contexts/UserContext';
import { ThemeContext } from '../../contexts/ThemeContext';

function Header() {
  // extract values from global context
  // NOTE USE { } NOT []
  const { userName, setUserName } = useContext(UserContext);
  console.log(userName);
  // Extract theme values
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkMode(!darkMode);
    // save in local storage
    localStorage.setItem('darkMode', !darkMode);
  };
  return (
    <div
      className={darkMode ? 'header-container header-dark' : 'header-container'}
    >
      <div className="header-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="message">
        <p>Welcome {userName}!</p>
        <button onClick={handleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Header;
