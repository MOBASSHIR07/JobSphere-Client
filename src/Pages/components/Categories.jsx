import React, { Suspense, use } from 'react';
import { useEffect, useState } from 'react';

const CategoriesCard = React.lazy(() => import('./CategoriesCard')); // Lazy load CategoriesCard

const Categories = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {


    fetch('http://localhost:3000/getcategories') // Replace with your actual API endpoint
      .then(response => response.json())  
      .then(data => {
        setCategories(data);
      })
        .catch(error => console.error('Error fetching categories:', error));
    // Cleanup function to avoid memory leaks
        return () => {
            setCategories([]);
      };

  }, []);
        

    return (
        <div className='min-h-screen mx-auto  py-12 bg-teal-50'>
            <div className='text-center mb-12'>
                <h1 className='text-5xl font-bold text-center mb-8'>Job Categories</h1>
                <p className='text-center text-gray-600 mb-12'>Explore various job categories to find your perfect match.</p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
                {categories.map((category, index) => (
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                  <CategoriesCard key={index} category={category} />  
                  </Suspense>
                ))}
            
            </div>
            
        </div>
    );
};

export default Categories;