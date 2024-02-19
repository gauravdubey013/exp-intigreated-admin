import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './SuccessPage.css'; // Import CSS file for styling

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <h2>Subscription Successful!</h2>
        <p>Thank you for subscribing. You are now a premium member and have full access to premium features.</p>
      </div>
      <div className="quote-container">
        {/* Directly reference the image from the public folder */}
        <img src="/assets/website/imgbk.webp" className="quote-image" />
        <p className="quote-text">"Reading is a passport to countless adventures."</p>
      </div>
    </div>
  );
};

export default SuccessPage;
