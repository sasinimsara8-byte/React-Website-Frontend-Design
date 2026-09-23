import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './header';
import About from './about';
import Home from './home'; 
import Services from './services'; 
import Contact from './contact';
import Cart from './cart';


function App() {
  return (
    <BrowserRouter>

      <header className="header">

        
        <div className="logo">
           Ayur Life
        </div>

        <div>
        <nav>
          <ul className="nav-links">

            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </nav>
        </div>

       

      </header>

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;