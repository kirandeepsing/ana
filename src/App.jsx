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
import Admin from './components/Admin.jsx';
import Cart from './components/Cart.jsx';
import Create from './components/Create.jsx';
import Change from './components/Change.jsx';
import Delete from './components/Delete.jsx';
import Web from './components/Web.jsx';
import Mobile from './components/Mobile.jsx';
import Wordpress from './components/Wordpress.jsx';
import Design from './components/Design.jsx';
import Digital from './components/Digital.jsx';
import Ecommerce from './components/Ecommerce.jsx';
import Twilio from './components/Twilio.jsx';
import Python from './components/Python.jsx';
import Aws from './components/Aws.jsx';

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
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/create" element={<Create />} />
      <Route path="/change/:id" element={<Change />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/Web" element={<Web />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/wordpress" element={<Wordpress />} />
      <Route path="/design" element={<Design />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/twilio" element={<Twilio />} />
      <Route path="/python" element={<Python />} />
      <Route path="/Aws" element={<Aws />} />
    </Routes>
    <Footer/>
    </Router>
   
  );
}

export default App;
