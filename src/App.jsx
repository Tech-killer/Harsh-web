import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components /Home'
import Footer from './components /Footer'
import Navbar from './components /Navbar';
import About from './components /About';
import Roadmap from './components /Roadmap';
import Contact from './components /Contact';
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Router>
      <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About/>} />
      <Route path='/Roadmap' element={<Roadmap />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
};

export default App;