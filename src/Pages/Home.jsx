import React from 'react';
import Banner from './components/Banner';
import JobHeroSection from './components/JobHeroSection';

const Home = () => {
    return (
        <>
        <div className=''>
          <Banner></Banner>
        </div>
        <div>
            <JobHeroSection></JobHeroSection>
        </div>
        </>
    );
};

export default Home;