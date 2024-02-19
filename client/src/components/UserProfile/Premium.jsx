import React, { useEffect } from 'react';
import './Premium.css';
import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Re-enable the PropTypes import
import { useLocation } from 'react-router-dom'; // Import useLocation

const SubscriptionCard = ({ title, price, benefits, buttonText, paymentLink }) => {
  const redirectToStripe = () => {
    window.location.href = paymentLink;
  };

  return (
    <div className="subscription-card">
      <FaBookOpen size={50} style={{ margin: '0 auto' }} />
      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
      <ul className="card-benefits">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <button onClick={redirectToStripe} className="card-button">{buttonText}</button>
    </div>
  );
};

// PropTypes for SubscriptionCard
SubscriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  paymentLink: PropTypes.string.isRequired,
};

const Premium = () => {
  const monthlyBenefits = [
    "Font customization",
    "Comment to a book",
    "Unlock AudioBooks",
    "Priority customer support",
  ];

  const annualBenefits = [
    ...monthlyBenefits,
    "2 months free",
    "Unlock all features",
    "Pay once in a while and just Read",
  ];

  const location = useLocation(); // To access query params

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("canceled")) {
      alert("You terminated the subscription process.");
    }
  }, [location]);
  
  return (
    <div className="premium-container">
      <h2>Premium Subscriptions</h2>
      <div className="subscriptions">
        <SubscriptionCard
          title="Monthly Subscription"
          price="₹49/ month"
          benefits={monthlyBenefits}
          buttonText="Subscribe Now"
          paymentLink="https://buy.stripe.com/test_3cscNZ3DI4ZygaAcMN"
        />
        <SubscriptionCard
          title="Annual Subscription"
          price="₹500/ year"
          benefits={annualBenefits}
          buttonText="Subscribe Now"
          paymentLink="https://buy.stripe.com/test_bIYbJV4HMfEc5vW8ww"
        />
      </div>
    </div>
  );
};

export default Premium;
