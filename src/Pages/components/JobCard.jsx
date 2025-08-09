import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const JobCard = ({ job }) => {
    const {
        _id,
        title,
        company,
        company_logo,
        location,
        jobType,
        category,
        salaryRange
    } = job;

    return (
        <div className="border border-gray-300 rounded-md bg-white overflow-hidden"> {/* Added overflow-hidden */}
            {/* Top Section - Made responsive */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 p-4 sm:p-0">
                {/* Left: Logo and Info */}
                <div className='w-full sm:w-auto sm:border-r border-gray-300 sm:px-6 p-4 sm:p-6 flex-1'>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {/* Logo */}
                        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] border border-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                                src={company_logo}
                                alt={company}
                                className="object-contain w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                            />
                        </div>

                        {/* Title and Company */}
                        <div className="flex-1 min-w-0"> {/* Prevents text overflow */}
                            <h3 className="text-lg font-bold truncate">{title}</h3>
                            <p className="text-gray-600 truncate">{company}</p>

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

                {/* Right: Apply Button - Now properly aligned */}
                <div className='w-full sm:w-auto p-4 sm:p-6 self-center sm:self-auto'>
                    <NavLink
                        to={`/getjob/${_id}`}
                        className="block w-full sm:w-auto text-center border border-gray-300 px-5 py-2 rounded hover:bg-green-500 transition whitespace-nowrap"
                    >
                        Apply
                    </NavLink>
                </div>
            </div>

            {/* Bottom Section - Improved spacing */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 text-gray-500 text-sm px-4 py-3">
                {/* Location */}
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span className="truncate max-w-[120px] sm:max-w-none">{location}</span>
                </div>

                <span className="hidden sm:inline text-xl font-light">•</span>

                {/* Salary */}
                <div className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    <span className="truncate">
                        {salaryRange.currency} {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()}
                    </span>
                </div>

                <span className="hidden sm:inline text-xl font-light">•</span>

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