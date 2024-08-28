import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-500 to-white text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0"></div>
    <div className="container mx-auto max-w-4xl px-4">
      <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-navy-900 text-black p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Passionate Creator</h2>
          <p className="text-xl mb-8">
            I'm driven by the desire to build captivating and functional websites that leave a lasting impact.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-lg">
                I approach every project with a focus on understanding user needs and finding innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Collaborative Spirit</h3>
              <p className="text-lg">
                I thrive in collaborative environments and enjoy working closely with clients to bring their visions to life.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="Classroom.png"
            alt="classroom illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        </div>
        </div>
        </div>
      </div>

  );
};

export default About;