// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './IndexPage';
import RegistrationForm from './RegistrationForm';
import DisplayComponent from './DisplayComponent';

const AirlineReservationSystem = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleRegistration = (newSubmission) => {
    setSubmissions([...submissions, newSubmission]);
  };

  return (
    <Router>
      <div className="airline-reservation-container">
        <Routes>
          <Route path="/register" element={<RegistrationForm onRegistration={handleRegistration} />} />
          <Route path="/display" element={<DisplayComponent submissions={submissions} />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AirlineReservationSystem;
