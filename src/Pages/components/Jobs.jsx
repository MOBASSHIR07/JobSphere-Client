import React, { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const JobCard = React.lazy(() => import('./JobCard'));

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [type, setType] = useState([]);
    const [activeType, setActiveType] = useState('All');

    useEffect(() => {
        fetch('http://localhost:3000/getjobs')
            .then(response => response.json())
            .then(data => {
                setJobs(data);

                // Extract unique job types 
                const uniqueTypes = [...new Set(data.map(job => job.jobType))];
                setType(uniqueTypes);
            });
    }, []);

    const handleTypeFilter = (jobType) => {
        fetch(`http://localhost:3000/getjobs/${encodeURIComponent(jobType)}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                setActiveType(jobType);

            });
    };
    const handleAllJobs = () => {
        fetch('http://localhost:3000/getjobs')
            .then(response => response.json())
            .then(data => {
                setJobs(data);
                setActiveType('All');
            });
    }

    return (
        <div className="min-h-screen mx-auto py-12">
            <div className='text-center mb-12'>
                <h1 className='text-5xl font-bold mb-4'>Latest Jobs</h1>
                <p className='text-black'>Find your desired jobs here.</p>
            </div>

            {/* Job Type Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">



                <button onClick={handleAllJobs} className={`px-4 py-2 border rounded  ${activeType === "All" ? "bg-green-600 text-white" : ""
                    }`}>All</button>



                {type.map((t, i) => (
                    <button onClick={() => handleTypeFilter(t)} key={i} className={`px-4 py-2 border rounded ${activeType === t ? "bg-green-600 text-white" : ""
                        }`}>
                        {t}
                    </button>
                ))}
            </div>

            {/* Job Cards Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6 px-4'>
                {jobs.map((job, index) => (
                    <Suspense fallback={<div className="loading">Loading...</div>} key={index}>
                        <JobCard job={job} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
