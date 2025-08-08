import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaClock,
    FaBookmark,
    FaBriefcase,
    FaCalendarAlt,
    FaBuilding
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div className="max-w-7xl mx-auto p-4 lg:p-8">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Image */}
                <div className="lg:w-2/3 w-full">
                    <img
                        src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg"
                        alt="Office"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </div>

                {/* Right: Job Overview */}
                <div className="lg:w-1/3 w-full bg-white border rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Job Overview</h2>

                    <div className="mb-4 flex items-center gap-4">
                        <img
                            src={company_logo}
                            alt={company}
                            className="w-14 h-14 rounded-full border"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{company}</h3>
                            <p className="text-sm text-gray-500">{category}</p>
                        </div>
                    </div>

                    {/* Job Info with Icons */}
                    <div className="space-y-3 text-sm text-gray-700">
                        <p className="flex items-center gap-2 font-semibold">
                            <FaBriefcase className="text-green-600" />
                            <span><strong>Title:</strong> {title}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaClock className="text-green-600" />
                            <span><strong>Type:</strong> {jobType}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-600" />
                            <span><strong>Location:</strong> {location}</span>
                        </p>
                        {salaryRange && (
                            <p className="flex items-center gap-2">
                                <FaMoneyBillWave className="text-green-600" />
                                <span><strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</span>
                            </p>
                        )}
                        <p className="flex items-center gap-2">
                            <FaCalendarAlt className="text-green-600" />
                            <span><strong>Deadline:</strong> {applicationDeadline}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaBuilding className="text-green-600" />
                            <span><strong>Status:</strong> {status}</span>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 space-y-3">
                       <Link to={`/apply/${_id}`} state={{title, company}}>
                       
                        <button
                            
                            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
                        >
                            Apply Now →
                        </button>
                       </Link>
                        <button className="w-full flex justify-center items-center gap-2 bg-gray-100 text-gray-700 border border-gray-300 py-2 rounded-full hover:bg-gray-200 transition">
                            <FaBookmark />
                            Add Bookmark
                        </button>

                        <a
                            href={`mailto:${hr_email}`}
                            className="block text-center w-full  bg-blue-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
                        >
                            Easy Apply
                            <span className="inline-block ml-2 align-middle animate-pulse ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 193">
                                    <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" />
                                    <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v99.91Z" />
                                    <path fill="#EA4335" d="m58.182 93.14-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 40.644L128 145.504z" />
                                    <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" />
                                </svg>
                            </span>
                        </a>


                    </div>
                     
                </div>
            </div>
            

            {/* Bottom Section */}
            <div className="space-y-4 my-12">
                <div className="collapse collapse-arrow bg-base-100 shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Job Description
                    </div>
                    <div className="collapse-content">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Requirements
                    </div>
                    <div className="collapse-content">
                        <ul className="list-disc ml-5">
                           {
                            requirements.map((req, index) => (
                                <li key={index}>{req}</li>      
                            ))
                           }
                        </ul>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Responsibilities
                    </div>
                    <div className="collapse-content">
                        <ul className="list-disc ml-5">
                           {
                            responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>      
                            ))  
                           }
                        </ul>
                    </div>
                </div>



                <div>
                    <h3 className="text-xl font-semibold mb-2">HR Contact</h3>
                    <p><span className="font-semibold">Name:</span> {hr_name}</p>
                    <p>
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${hr_email}`} className="text-blue-600 hover:underline">{hr_email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
