// src/RegistrationForm.js
import React, { useState } from 'react';
import './App.css';
const RegistrationForm = ({ onRegistration }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    source: '',
    destination: '',
    travelClass: '',
    passengers: 1,
  });

  const [formErrors, setFormErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.source.trim()) {
      errors.source = 'Source is required';
    }

    if (!formData.destination.trim()) {
      errors.destination = 'Destination is required';
    }

    if (!formData.travelClass) {
      errors.travelClass = 'Please select a travel class';
    }

    if (Object.keys(errors).length === 0) {
      return true; // Validation passed
    } else {
      setFormErrors(errors);
      return false; // Validation failed
    }
  };

  const calculateFare = () => {
    // Example fare calculation (replace with your actual logic)
    const baseFares = {
      Economic: 1000,
      Business: 2000,
    };

    return baseFares[formData.travelClass] * formData.passengers;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const fare = calculateFare();
      const newSubmission = {
        ...formData,
        totalFare: fare,
      };

      onRegistration(newSubmission);
      setRegistrationSuccess(true);
    } else {
      setRegistrationSuccess(false);
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
      </label>

      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </label>

      <label>
        Gender:
        <div>
          <span>Male</span>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Female</span>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
        </div>
        {formErrors.gender && <span className="error">{formErrors.gender}</span>}
      </label>
      <label>
        Source:
        <select name="source" value={formData.source} onChange={handleChange}>
          <option value="">Select Source</option>
          <option value="CityA">City A</option>
          <option value="CityB">City B</option>
        </select>
        {formErrors.source && <span className="error">{formErrors.source}</span>}
      </label>

      <label>
        Destination:
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">Select Destination</option>
          <option value="CityX">City X</option>
          <option value="CityY">City Y</option>
        </select>
        {formErrors.destination && <span className="error">{formErrors.destination}</span>}
      </label>

      <label>
        Travel Class:
        <div>
          <span>Economic</span>
          <input
            type="radio"
            name="travelClass"
            value="Economic"
            checked={formData.travelClass === 'Economic'}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Business</span>
          <input
            type="radio"
            name="travelClass"
            value="Business"
            checked={formData.travelClass === 'Business'}
            onChange={handleChange}
          />
        </div>
        {formErrors.travelClass && <span className="error">{formErrors.travelClass}</span>}
      </label>

      <label>
        Number of Passengers:
        <input type="number" name="passengers" min="1" value={formData.passengers} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );

  const renderSuccessMessage = () => (
    <div className="success-message">
      Registration done successfully!
    </div>
  );

  return (
    <div>
      <h2>Registration Form</h2>
      {registrationSuccess ? renderSuccessMessage() : renderForm()}
    </div>
  );
};

export default RegistrationForm;
