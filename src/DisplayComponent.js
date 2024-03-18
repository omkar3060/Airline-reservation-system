// src/DisplayComponent.js
import React from 'react';

const DisplayComponent = ({ submissions }) => {
  return (
    <div>
      <h2>Submitted Values</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <strong>{submission.firstName} {submission.lastName}</strong><br></br>
            Date of Birth: {submission.dateOfBirth}<br></br> Gender: {submission.gender}<br></br> 
            Source: {submission.source}<br></br> Destination: {submission.destination}<br></br>
            Travel Class: {submission.travelClass}<br></br> Passengers: {submission.passengers}<br></br> 
            Total Fare: Rs.{submission.totalFare}<br></br><br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayComponent;
