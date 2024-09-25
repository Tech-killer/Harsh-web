import React from "react";

const Footer = () => {
  return(
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-white text-2xl font-bold">Harsh Sharma</h1>
            <p className="text-sm mt-2">
              Building innovative solutions one line of code at a time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 Made By: Harsh Sharma.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;