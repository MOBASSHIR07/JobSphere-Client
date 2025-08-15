import React from "react";
import { MdWork, MdLink, MdDescription } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const ApplyForm = () => {
    const { id } = useParams();
    const { title, company } = useLocation().state || {};
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedinUrl = form.linkedinUrl.value;
        const githubUrl = form.githubUrl.value;
        const resumeUrl = form.resumeUrl.value;

        const applicationData = {
            jobId: id,
            title,
            company,
            applicantEmail: user?.email,
            applicantName: user?.displayName,
            linkedinUrl,
            githubUrl,
            resumeUrl,
            createdAt: new Date().toISOString(),
        };
        console.log(applicationData);

        try {
            // const response = await fetch('http://localhost:3000/post-job-application', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(applicationData)
            // });

            // const data = await response.json();



       const {data} = await axios.post('http://localhost:3000/post-job-application', applicationData, { withCredentials: true })
            
            // If backend returns success
            if (data?.acknowledged || data?.success) {
                toast.success("Application submitted successfully!");
                form.reset();
                navigate('/myapplications');
            } else {
                toast.error(data?.message || "Failed to submit application.");
            }
        } catch (err) {
            console.error("Apply error:", err.response?.data || err);
            toast.error(err.response?.data?.message || "Server error while applying.");
        };
    }

        return (
            <div className="max-w-2xl mb-6 mx-auto p-8 bg-white rounded-2xl shadow-xl mt-10 border border-gray-100">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-t-2xl p-6 -mx-8 -mt-8 mb-6">
                    <div className="flex items-center justify-center space-x-3">
                        <MdWork className="text-3xl text-white" />
                        <h2 className="text-2xl font-bold text-white text-center">
                            Apply for {title}
                        </h2>
                    </div>
                    <p className="text-green-100 text-center mt-2">
                        {company}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* LinkedIn Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLinkedin className="text-green-600 text-xl" />
                        </div>
                        <input
                            type="url"
                            name="linkedinUrl"
                            placeholder="LinkedIn Profile URL"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* GitHub Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaGithub className="text-green-600 text-xl" />
                        </div>
                        <input
                            type="url"
                            name="githubUrl"
                            placeholder="GitHub Profile URL"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Resume Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MdDescription className="text-green-600 text-xl" />
                        </div>
                        <input
                            type="url"
                            name="resumeUrl"
                            placeholder="Resume/CV URL (PDF preferred)"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Footer note */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    <p>Your application will be reviewed by {company}'s hiring team</p>
                </div>
            </div>
        );
    };

    export default ApplyForm;