// src/IndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css'; // Create this file for styling

const IndexPage = () => {
  return (
    <div className="index-page-container">
      <h1> Welcome to Airline Reservation System</h1>
      <div className="navigation-links">
        <Link to="/register">Register</Link>
        <Link to="/display">Display</Link>
      </div>
    </div>
  );
};

export default IndexPage;
