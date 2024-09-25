import React from 'react';
import Hero from './Hero';
import About from './About';
import Roadmap from './Roadmap';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="home" >
       <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <div>
          <About />
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <div>
          <Roadmap />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
