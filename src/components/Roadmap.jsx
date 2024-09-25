// Roadmap.jsx
import React from "react";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-white text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        My MERN Stack Roadmap
      </h1>
      <div className="flex flex-col items-center space-y-8">
        {/* HTML */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
            alt="HTML"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">HTML</h2>
            <p className="text-gray-600">
            HTML is the standard language for creating and structuring web content.
            </p>
          </div>
        </div>

        {/* CSS */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">React</h2>
            <p className="text-gray-600">
              CSS is a stylesheet language used to control the visual
              presentation and layout of web pages.
            </p>
          </div>
        </div>

        {/* Java Script */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://lh3.googleusercontent.com/proxy/tFxXWFyf9NpTnpA8NHLg8I3JNMj0C6Fs21_LUwILMuMxIrZCPifRqSq-Av4i5D27aLUWP8Fwc4C6z6uzDYZ7Eq69vkUVqM1bK9Ti_g-n-tvRKA"
            alt="Java Script"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">React</h2>
            <p className="text-gray-600">
              JavaScript adds interactivity and dynamic functionality to web
              pages..
            </p>
          </div>
        </div>

        {/* React */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // React icon URL
            alt="React"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">React</h2>
            <p className="text-gray-600">
              A JavaScript library for building user interfaces.
            </p>
          </div>
        </div>

        {/* Node.js */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Node.js</h2>
            <p className="text-gray-600">
              A JavaScript runtime built on Chrome's V8 JavaScript engine.
            </p>
          </div>
        </div>

        {/* Express.js */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Express.js</h2>
            <p className="text-gray-600">
              A minimalist web framework for Node.js.
            </p>
          </div>
        </div>

        {/* MongoDB */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" // MongoDB icon URL
            alt="MongoDB"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">MongoDB</h2>
            <p className="text-gray-600">
              A NoSQL database for high-performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;