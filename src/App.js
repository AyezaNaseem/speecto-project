import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowWeWork from "./components/howWeWork";
import GetStarted from "./components/getStarted";
import AboutHero from "./components/aboutus";
import ServicesHero from "./components/service"; 
import Footer from "./components/footer";
import ContactUs from './components/contactus';
import OurTeam from './components/ourteam'; // <-- OurTeam Component Import

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* 1. HOME PAGE */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <HowWeWork />
                <GetStarted />
              </>
            } 
          />

          {/* 2. ABOUT US PAGE */}
          <Route path="/about-us" element={<AboutHero />} />
          
          {/* 3. CONTACT PAGE */}
          <Route path="/contact" element={<ContactUs />} />
          
          {/* 4. SERVICES PAGE */}
          <Route path="/services" element={<ServicesHero />} />

          {/* 5. OUR TEAM PAGE */}
          <Route path="/team" element={<OurTeam />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;