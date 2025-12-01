import React from "react";
import {
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-red-600" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
    },
    {
      icon: <FaLock className="text-4xl text-red-600" />,
      title: "Secure Payment",
      description: "100% secure payment processing",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600" />,
      title: "24/7 Support",
      description: "Dedicated customer support team",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-red-600" />,
      title: "Money Back",
      description: "30-day money back guarantee",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About E-Shop</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Your trusted destination for quality products at affordable prices.
          We're committed to providing the best shopping experience for our
          customers.
        </p>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Founded in 2024, E-Shop started with a simple mission: to make
            quality products accessible to everyone. What began as a small
            online store has grown into a comprehensive e-commerce platform
            serving thousands of customers worldwide.
          </p>
          <p>
            We carefully curate our product selection to ensure that every item
            meets our high standards for quality, value, and style. From fashion
            to accessories and footwear, we offer a diverse range of products
            for men, women, and children.
          </p>
          <p>
            Our commitment to customer satisfaction drives everything we do. We
            believe in transparent pricing, fast shipping, and responsive
            customer service. Your trust is our most valuable asset.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-red-600">
              Quality First
            </h3>
            <p className="text-gray-700">
              We never compromise on quality. Every product is carefully
              selected and inspected to meet our rigorous standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-red-600">
              Customer Focus
            </h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We're here to provide excellent
              service and support throughout your shopping journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-red-600">
              Sustainability
            </h3>
            <p className="text-gray-700">
              We're committed to sustainable practices and partnering with
              eco-conscious brands to minimize our environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
