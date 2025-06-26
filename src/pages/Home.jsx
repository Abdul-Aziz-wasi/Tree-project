import React from 'react';
import Hero from '../components/Hero';
import NewPlant from '../components/NewPlant';
import Benefit from '../components/Benefit';
import PlantCareTips from '../components/PlantCareTips/PlantCareTips';
import FeaturedPlants from '../components/FeaturedPlants/FeaturedPlants';
import Testimonials from '../components/Testimonials/Testimonials';


const Home = () => {
    return (
      <div>
        
        <Hero></Hero>
        <NewPlant></NewPlant>
        {/* <Benefit></Benefit> */}
        <PlantCareTips></PlantCareTips>
        <FeaturedPlants></FeaturedPlants>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;