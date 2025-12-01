import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-red-600" />,
      title: "Email",
      content: "support@eshop.com",
    },
    {
      icon: <FaPhone className="text-2xl text-red-600" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: "Address",
      content: "123 E-Shop Street, NY 10001",
    },
    {
      icon: <FaClock className="text-2xl text-red-600" />,
      title: "Hours",
      content: "Mon-Fri: 9AM - 6PM",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-red-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Quick Support</h3>
              <p className="text-sm text-gray-600">
                For urgent matters, use our live chat feature or call our
                support hotline.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="What is this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
