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

const JobDetails = () => {
    const job = useLoaderData();
    const {
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
                        <a
                            href={`mailto:${hr_email}`}
                            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
                        >
                            Apply Now →
                        </a>
                        <button className="w-full flex justify-center items-center gap-2 bg-gray-100 text-gray-700 border border-gray-300 py-2 rounded-full hover:bg-gray-200 transition">
                            <FaBookmark />
                            Add Bookmark
                        </button>
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
                        <p>Create engaging user interfaces and improve user experience for our applications.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Requirements
                    </div>
                    <div className="collapse-content">
                        <ul className="list-disc ml-5">
                            <li>Figma</li>
                            <li>Adobe XD</li>
                            <li>HTML</li>
                            <li>CSS</li>
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
                            <li>Design prototypes</li>
                            <li>Conduct user research</li>
                            <li>Collaborate with developers</li>
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
