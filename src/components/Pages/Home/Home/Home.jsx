import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Location from '../../Location/Location';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Location></Location>
        </div>
    );
};

export default Home;