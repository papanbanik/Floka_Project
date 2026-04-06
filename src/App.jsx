import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import PostHero from './Components/PostHero';
import Card from './Components/Card'
import Portfolio from './Components/Portfolio';
import Brand from './Components/Brand';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PostHero/>
      <Card/>
      <Portfolio/>
      <Brand/>
      <Contact/>
    </div>
  );
};

export default App;