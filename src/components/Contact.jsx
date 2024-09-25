import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    const mailtoLink = `mailto:Harsh.jsharma0304@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

    // Simulate sending the email
    window.location.href = mailtoLink;

    // Reset form and show confirmation
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Your message has been sent!');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-gradient-to-br from-blue-500 to-white text-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-lg text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-lg font-semibold text-white transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
