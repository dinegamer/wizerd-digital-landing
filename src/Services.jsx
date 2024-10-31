// ServicesCard.jsx


// Services.jsx
import ServicesCard from "./Components/ServicesCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Basic Website",
      price: {
        amount: "150.000",
        currency: "FCFA",
        usd: "250",
        aed: "920",
        yen: "29,000"
      },
      features: [
        "Responsive Design",
        "5 Pages",
        "Basic Animations",
        "Basic SEO",
        "1 Week Free Support",
        "WhatsApp Support"
      ],
      isPopular: false
    },
    {
      id: 2,
      title: "Professional Site",
      price: {
        amount: "250.000",
        currency: "FCFA",
        usd: "420",
        aed: "1,540",
        yen: "49,000"
      },
      features: [
        "Responsive Design",
        "Up to 10 Pages",
        "Advanced Animations",
        "Optimized SEO",
        "Basic Database",
        "2 Weeks Free Support",
        "24/7 WhatsApp Support"
      ],
      isPopular: true
    },
    {
      id: 3,
      title: "Premium Solution",
      price: {
        amount: "400.000",
        currency: "FCFA",
        usd: "670",
        aed: "2,460",
        yen: "78,000"
      },
      features: [
        "Custom Design",
        "Unlimited Pages",
        "3D Experience",
        "Premium SEO",
        "E-commerce/Database",
        "1 Month Free Support",
        "Priority Support",
        "Free Training Session"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="servicesSection">
      <div className="services-wrapper">
        <div className="services-header">
          <h2 className="services-main-title">Our Services</h2>
          <p className="services-subtitle">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="services-container">
          {services.map((service) => (
            <ServicesCard key={service.id} {...service} />
          ))}
        </div>

        <div className="services-footer">
          <p>All plans include: Free consultation • Client training • WhatsApp support</p>
        </div>
      </div>
    </section>
  );
};

export default Services;