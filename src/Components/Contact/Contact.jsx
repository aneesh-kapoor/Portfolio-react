import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-5xl text-center mb-12 font-sans tracking-wider">
        CONTACT ME
      </h1>

      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-4">
          <i className="fas fa-map-marker-alt text-teal-400"></i>
          <div>
            <p className="text-gray-300">Address // 1571-1599 Market Street</p>
            <p className="text-gray-300">San Francisco, CA 94103</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <i className="fas fa-phone text-teal-400"></i>
          <p className="text-gray-300">Telephone nr // (650) 695-143236</p>
        </div>

        <div className="flex items-center space-x-4">
          <i className="fas fa-envelope text-teal-400"></i>
          <p className="text-gray-300">E-mail // your.email@example.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address*"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
        />

        <textarea
          name="message"
          placeholder="Type your message here.."
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
        />

        <button
          type="submit"
          className="float-right px-8 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors duration-300"
        >
          SEND!
        </button>
      </form>

      <div className="flex justify-center space-x-4 my-12">
        {[
          "myspace",
          "stumbleupon",
          "linkedin",
          "twitter",
          "facebook",
          "vimeo",
          "tumblr",
        ].map((platform) => (
          <a
            key={platform}
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            <i className={`fab fa-${platform}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
