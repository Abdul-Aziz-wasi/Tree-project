import React from 'react';
import Hero from '../components/Hero';
import NewPlant from '../components/NewPlant';
import Benefit from '../components/Benefit';
import DarkMode from '../components/DarkMode';

const Home = () => {
    return (
      <div>
        <DarkMode></DarkMode>
        <Hero></Hero>
        <NewPlant></NewPlant>
        <Benefit></Benefit>
      </div>
    );
};

export default Home;