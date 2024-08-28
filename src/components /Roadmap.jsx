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
            src="data:image/png;base64,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" // React icon URL
            alt="HTML"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">React</h2>
            <p className="text-gray-600">
              HTML is the standard language used to create and structure content
              on the web..
            </p>
          </div>
        </div>

        {/* CSS */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
          <img
            src="data:image/png;base64,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"
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX////OqAv80yns7OzLowDz69bNpgDt7e/l3cbguRjLpQjzyiT80h780AD80iPNpQD94Xrt7/TawGn82E/x58jizYn81j/933LPqgD9/PXUszro1p/810b82lb93WXu8Pf+8cX+7rns37TTs0L++ODInQDYu1ro16b38eD69+rkvy/SrybYulDdxHT93F/94oP95ZT+663v477k0JH+88zp5dPwyjPYsyTrxCT967DhyoH+6J7SsC707NDdtxzcuC3l2rvh06ntyTvqyETgv0MDlMefAAAJCElEQVR4nO2d+1vaSBSGIcR4aUgENIC3qlAVQcXbduutrfX//5s2J0BmBhI4k4Ezdp/z/raukL7PhMzHN5NYKjEMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzDMX0x7zS7tlRvufHNt8m1n5YZrbtkm7trKDXuWDVd/lpYsG65esNTyLAp6LQLDPauGewSGZ1YNzwgM61YN6wSGu6FFw3CXwPDcquE5geGpoeFWAYThKYHhjtmEePmlAOmr3dWHtlLpwshw69LR50s6iO4FgWHP6CwtZPhPahj2CAzbRrOFqSFBLI1jG7nhv6mhRyFY6psMYiHDy4mh1ycxHFg0HJAYXpEbvk1e7V2RGBrFtkKG3yevJgltpdI+uWE/NdwnMbwzmfILGaavJglthrGtkKGINBShzbBtK2IYCcPVN21Am9pQiqUUoS2G+kojIk1II1gqa0yInowwDBbiJwTwy++T45E0bYBG2+bVJaDDGhtGMQcJjRGHCdcJR2OazWYjkMeQpGkDNNo2ryb4uhGODf0b7KGe/fjXN4lDm1bb1lqvpKwLw23soYZg+DM9SymaNkAjtpka3iSGk3cjCm1abZup4REYpu9GFNq02rYcwyb2UMmVRhjShDat2GZqGCmGRKFNq20zNUzmQ+rQprVIOmv4pmPY9tVYShTadIJpq5JpeIQ8Uq/qyE0bxQLwCPR86GWPYaBlSB9LNdo2U8MuGIoeqrxSKxl022Zq+JAYpu/WWamVDLptyzO8Rh7oBAypmzYAHdu8spnhD7iWiqbtaaVWMui2LcNwU8cw+Wohmrb7lVrJoNu2PMND+d2aVd+vToCvvVXxX45iSBXaNGIbynDbn19i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"
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
            src="data:image/png;base64,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" // MongoDB icon URL
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