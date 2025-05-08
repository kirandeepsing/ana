import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Job from './components/Job.jsx';
import Contact from './components/Contact.jsx';
import Products from './components/Products.jsx';



function App() {
  return (
    <Router>
      <Navbar/>
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/job" element={<Job />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer/>
    </Router>
   
  );
}

export default App;
