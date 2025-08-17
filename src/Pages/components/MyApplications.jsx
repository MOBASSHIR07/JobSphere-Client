import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import UseAxios from '../../Hooks/UseAxios';
import Spinner from '../Shared/Spinner/Spinner';

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true); // 🔹 local loading state
    const axiosSecure = UseAxios();

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true); // 🔹 start spinner before fetching

        axiosSecure
            .get(`post-job-applications?email=${user.email}`)
            .then(res => setApplications(res.data))
            .catch(err => {
                console.error(err);
                toast.error("Failed to fetch applications");
            })
            .finally(() => setLoading(false)); // 🔹 stop spinner always

        return () => setApplications([]);
    }, [user]);

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this application?");
        if (!confirm) return;

        try {
            const res = await fetch(
                `https://job-portal-server-ten-beta.vercel.app/delete-job-application/${id}`,
                { method: "DELETE" }
            );

            if (res.ok) {
                toast.success("Application deleted");
                setApplications(applications.filter(app => app._id !== id));
            } else {
                toast.error("Failed to delete");
            }
        } catch (err) {
            console.error(err);
            toast.error("Server error");
        }
    };

    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Applications</h2>

            {/* 🔹 Show spinner if loading */}
            {loading ? <Spinner></Spinner>
               
             : (
                <>
                    <table className="table w-full table-zebra shadow-xl rounded-lg bg-base-100 text-[16px]">
                        <thead className="bg-base-200 text-base font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Job Info</th>
                                <th>Company</th>
                                <th>Job Type</th>
                                <th>Applied</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={app._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={app.company_logo || 'https://via.placeholder.com/150'}
                                                        alt={app.company}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{app.title}</div>
                                                <div className="text-sm text-gray-500">{app.jobId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-medium">{app.company}</td>
                                    <td>
                                        <span className="badge badge-primary badge-outline">{app.jobType}</span>
                                    </td>
                                    <td>
                                        <span className="text-sm text-gray-600">
                                            {app.createdAt
                                                ? new Date(app.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })
                                                : 'N/A'}
                                        </span>
                                    </td>
                                    <td className="flex flex-wrap gap-2">
                                        <Link to={`/getjob/${app.jobId}`} className="btn btn-sm btn-outline btn-info">
                                            Details
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(app._id)}
                                            className="btn btn-sm btn-outline btn-error"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {applications.length > 0 && (
                            <tfoot className="bg-base-200">
                                <tr>
                                    <th>#</th>
                                    <th>Job Info</th>
                                    <th>Company</th>
                                    <th>Job Type</th>
                                    <th>Applied</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        )}
                    </table>

                    {applications.length === 0 && !loading && (
                        <div className="text-center text-gray-500 mt-10 text-lg">
                            No applications found.
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MyApplications;
