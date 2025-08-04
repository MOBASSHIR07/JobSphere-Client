import React, { Suspense, lazy } from 'react';
import Banner from './components/Banner';

const JobHeroSection = lazy(()=> import('./components/JobHeroSection'));

const Categories = lazy(() => import('./components/Categories'));

const Home = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <Suspense fallback={<div>Loading job hero section...</div>}>
        <JobHeroSection />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading categories...</div>}>
          <Categories />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
