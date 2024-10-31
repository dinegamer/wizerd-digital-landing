import { Check } from "lucide-react";

const ServicesCard = ({ title, price, features, isPopular }) => {
    const handleGetStarted = () => {
        // Smooth scroll to contact section
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          
          // Pre-fill the contact form with the selected service
          const messageInput = document.getElementById('message');
          if (messageInput) {
            messageInput.value = `Hi, I'm interested in the ${title} package priced at ${price.amount} ${price.currency}.`;
          }
        }
      };
    
  return (
    
    <div className={`service-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && (
        <div className="popular-badge">
          <span>Most Popular</span>
        </div>
      )}
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        
        <div className="price-container">
          <span className="price-amount">{price.amount}</span>
          <span className="price-currency">{price.currency}</span>
        </div>
        
        <p className="international-price">
          USD ${price.usd} | AED {price.aed} | ¥{price.yen}
        </p>

        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <Check className="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="service-button" 
        onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;