import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      {/* use the public logo.png */}
      <img
        src={process.env.PUBLIC_URL + '/logo.png'}
        className="app-logo"
        alt="logo"
      />
      <h1 className="app-title">Group 1 Tree Tisualizer</h1>
    </header>
  );
};

export default Header;
