import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MyPostedJob = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/getjobs?email=${user.email}`)
            .then(response => response.json())
            .then(data => setPostedJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));

        return () => setPostedJobs([]);
    }, [user?.email]);


    

    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Posted Jobs</h2>

            <table className="table w-full table-zebra shadow-xl rounded-lg bg-base-100 text-[16px] ">
                <thead className="bg-base-200 text-base font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Job Details</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Applications</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {postedJobs.map((job, index) => (
                        <tr key={job._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={job.company_logo || 'https://via.placeholder.com/150'}
                                                alt={job.company}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{job.title}</div>
                                        <div className="text-sm text-gray-500">{job.company}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{job.location}</td>
                            <td>
                                <span className="badge badge-primary badge-outline">{job.jobType}</span>
                            </td>
                            <td>
                                <p 
                                    
                                    className="font-bold text-blue-600 "
                                >
                                    {job.applicationCount || 0} applicants
                                </p>
                            </td>
                            <td>
                                <span className={`badge ${job.status === 'active' ? 'badge-success' : 'badge-error'}`}>
                                    {job.status}
                                </span>
                            </td>
                            <td className="flex flex-wrap gap-2">
                               
                                <Link
                                    to={`/showApplicants/${job._id}`}
                                    className="btn btn-sm btn-outline btn-primary"
                                >
                                    View Applicants
                                </Link>
                              
                            </td>
                        </tr>
                    ))}
                </tbody>

                {postedJobs.length > 0 && (
                    <tfoot className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Job Details</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Applications</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                )}
            </table>

            {postedJobs.length === 0 && (
                <div className="text-center text-gray-500 mt-10 text-lg">
                    No jobs posted yet. <Link to="/addjob" className="text-blue-600 hover:underline">Post a job</Link>
                </div>
            )}
        </div>
    );
};

export default MyPostedJob;