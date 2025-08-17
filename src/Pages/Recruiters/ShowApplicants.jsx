import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiUser, FiPhone, FiCalendar } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaRegEnvelope, FaGoogleDrive } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import toast from 'react-hot-toast';
import axios from 'axios';
import UseAxios from '../../Hooks/UseAxios';

const ShowApplicants = () => {
    const applicantsData = useLoaderData();
    const [applicants, setApplicants] = useState(applicantsData);
    const axiosSecure = UseAxios();

    const handleStatus = (applicantId, newStatus) => {
        // empty for now — you will handle API call
        // fetch(`https://job-portal-server-ten-beta.vercel.app/update-applicant-status/${applicantId}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },

        //     body: JSON.stringify({ status: newStatus }),
        // })
        //     .then(response => response.json())
        axiosSecure.patch(`update-applicant-status/${applicantId}`,
            {
                
              status: newStatus 
            }
        )
        .then(res=>res.data)
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 || data.matchedCount > 0) {
                    toast.success('Status updated successfully');
                    setApplicants(applicants.map(applicant =>
                        applicant._id === applicantId ? { ...applicant, status: newStatus } : applicant
                    ));
                }


            })


    };

    if (!applicants || applicants.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="text-center p-8 max-w-md">
                    <FiUser className="mx-auto text-4xl text-gray-400 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">No Applicants Yet</h3>
                    <p className="text-gray-500">No one has applied for this position yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Applicants for {applicants[0]?.title}</h1>
                    <p className="text-gray-600">{applicants[0]?.company}</p>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {applicants.length} {applicants.length === 1 ? 'Applicant' : 'Applicants'}
                </span>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {/* Desktop Table */}
                <table className="hidden md:table w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Candidate</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Contact</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Profile</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Resume</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Applied</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {applicants.map((applicant) => (
                            <tr key={applicant._id} className="hover:bg-gray-50">
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                            <FiUser className="text-blue-600" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="font-medium text-gray-900">{applicant.applicantName}</div>
                                            <div className="text-sm text-gray-500">{applicant.applicantEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex flex-col space-y-1">
                                        <div className="flex items-center">
                                            {applicant.applicantEmail.includes('gmail') ? (
                                                <SiGmail className="text-red-500 mr-2" />
                                            ) : (
                                                <FaRegEnvelope className="text-blue-500 mr-2" />
                                            )}
                                            <a href={`mailto:${applicant.applicantEmail}`} className="text-blue-600 hover:underline text-sm">
                                                Email
                                            </a>
                                        </div>
                                        {applicant.phone && (
                                            <div className="flex items-center">
                                                <FiPhone className="text-gray-500 mr-2" />
                                                <span className="text-sm text-gray-500">{applicant.phone}</span>
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex space-x-3">
                                        {applicant.linkedinUrl && (
                                            <a href={applicant.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                                                <FaLinkedin className="text-xl" />
                                            </a>
                                        )}
                                        {applicant.githubUrl && (
                                            <a href={applicant.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                                                <FaGithub className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    {applicant.resumeUrl && (
                                        <a href={applicant.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-blue-700 hover:bg-blue-100 text-sm">
                                            <FaGoogleDrive className="mr-1" /> View Resume
                                        </a>
                                    )}
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <FiCalendar className="text-gray-400 mr-2" />
                                        {new Date(applicant.createdAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-right">
                                    <select
                                        onChange={(e) => handleStatus(applicant._id, e.target.value)}
                                        className="border rounded px-2 py-1 text-sm"
                                        defaultValue={applicant.status || 'change status'}
                                    >
                                        <option value="change status" disabled>Change Status</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4 p-4">
                    {applicants.map((applicant) => (
                        <div key={applicant._id} className="border rounded-lg p-4 hover:shadow-md">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <FiUser className="text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-medium text-gray-900">{applicant.applicantName}</h4>
                                    <div className="flex items-center mt-1">
                                        {applicant.applicantEmail.includes('gmail') ? (
                                            <SiGmail className="text-red-500 mr-1" />
                                        ) : (
                                            <FaRegEnvelope className="text-blue-500 mr-1" />
                                        )}
                                        <p className="text-sm text-gray-500 truncate">{applicant.applicantEmail}</p>
                                    </div>

                                    <div className="mt-3 flex items-center space-x-3">
                                        {applicant.linkedinUrl && (
                                            <a href={applicant.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700">
                                                <FaLinkedin />
                                            </a>
                                        )}
                                        {applicant.githubUrl && (
                                            <a href={applicant.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800">
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>

                                    <div className="mt-3">
                                        {applicant.resumeUrl && (
                                            <a href={applicant.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-blue-50 rounded text-blue-700 text-xs">
                                                <FaGoogleDrive className="mr-1" /> View Resume
                                            </a>
                                        )}
                                    </div>

                                    <div className="mt-3 flex justify-between items-center">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <FiCalendar className="mr-1" />
                                            {new Date(applicant.createdAt).toLocaleDateString()}
                                        </div>
                                        <select
                                            defaultValue={applicant.status || 'Pending'}
                                            onChange={(e) => handleStatus(applicant._id, e.target.value)}
                                            className="border rounded px-2 py-1 text-xs"
                                        >
                                            <option value="Hired">Hired</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowApplicants;
