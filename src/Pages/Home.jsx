import React from 'react';
import Banner from './components/Banner';
import JobHeroSection from './components/JobHeroSection';
import Categories from './components/Categories';

const Home = () => {
    return (
        <>
        <div className=''>
          <Banner></Banner>
        </div>
        <div>
            <JobHeroSection></JobHeroSection>
        </div>
        <div>
            <Categories></Categories>
        </div>
        </>
    );
};

export default Home;