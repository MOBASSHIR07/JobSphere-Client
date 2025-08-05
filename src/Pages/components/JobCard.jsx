import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const JobCard = ({ job }) => {
    const {
        title,
        company,
        company_logo,
        location,
        jobType,
        category,
        salaryRange
    } = job;

    return (
        <div className="border border-gray-300 rounded-md bg-white  ">
            {/* Top Section */}
            <div className="flex  justify-between items-center   border-b  border-gray-300">
                {/* Left: Logo and Info */}
                <div className='border-r px-20 border-gray-300 p-10 '>
                    <div className="flex items-center gap-4 border-gray-300 ">
                        {/* Logo */}
                        <div className="w-[72px] h-[72px] border border-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                                src={company_logo}
                                alt={company}
                                className="object-contain w-14 h-14 rounded-full"
                            />
                        </div>


                        {/* Title and Company */}
                        <div>
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="text-gray-600">{company}</p>

                            {/* Category tag */}
                            {category && (
                                <div className="mt-2">
                                    <span className="bg-gray-200 text-sm text-gray-800 hover:bg-green-500 px-2 py-1 rounded">
                                        {category}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                {/* Right: Apply Button */}
                <div className='  p-12'>
                    <NavLink
                        to="/apply"
                        className="border border-gray-300 px-5 py-2 rounded hover:bg-green-500 transition"
                    >
                        Apply
                    </NavLink>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-wrap gap-6 items-center text-gray-500 text-sm px-4 py-3">
                {/* Location */}
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </div>

                <span className="text-xl font-light">•</span>

                {/* Salary */}
                <div className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    <span>
                        {salaryRange.currency} {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()}
                    </span>
                </div>

                <span className="text-xl font-light">•</span>

                {/* Job Type */}
                <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{jobType}</span>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
