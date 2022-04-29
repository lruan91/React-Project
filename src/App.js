import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Phone from './components/phone/Phone';
import Testimonials from './components/testimonials/Testimonials';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Phone />
      {/* <Testimonials />
      <Card /> */}
      <Footer />
    </>
  );
}

export default App;
