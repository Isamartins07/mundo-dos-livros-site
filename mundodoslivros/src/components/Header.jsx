import React, { useState } from 'react';
import './Header.css';

const Header = ({ onGenreClick, onHomeClick, titleColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="App-header">
      <div className="header-title">
        <h1 style={{ color: titleColor }}>Mundo Dos Livros</h1>
      </div>
      <div className="header-content">
        <button className="home-button" onClick={onHomeClick}>Home</button>
        <div className="dropdown">
          <button className="genre-button" onClick={handleDropdownToggle}>
            Gêneros
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => onGenreClick('Ficção')}>Ficção</li>
              <li onClick={() => onGenreClick('Fantasia')}>Fantasia</li>
              <li onClick={() => onGenreClick('Mistério')}>Mistério</li>
              <li onClick={() => onGenreClick('Romance')}>Romance</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
