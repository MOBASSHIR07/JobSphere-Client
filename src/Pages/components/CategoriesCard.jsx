import React from 'react';
import { FaLaptopCode, FaTruck, FaChartLine, FaHeadset, FaUserMd, FaGraduationCap, FaUniversity, FaTools } from 'react-icons/fa';
import { motion } from "framer-motion";

const iconMap = {
    "IT Software": <FaLaptopCode className="text-white text-xl" />,
    "Delivery Jobs": <FaTruck className="text-white text-xl" />,
    "Sales Market": <FaChartLine className="text-white text-xl" />,
    "Call Center": <FaHeadset className="text-white text-xl" />,
    "Healthcare": <FaUserMd className="text-white text-xl" />,
    "Education & Training": <FaGraduationCap className="text-white text-xl" />,
    "Finance & Banking": <FaUniversity className="text-white text-xl" />,
    "Construction": <FaTools className="text-white text-xl" />
};

const CategoriesCard = ({ category }) => {
    const { title, jobCount, photo } = category;
    const icon = iconMap[title] || <FaLaptopCode className="text-white text-xl" />;

    return (
        <motion.div
            className=" w-72  rounded-xl transition-all duration-300 "
            whileHover="hover"
            initial="rest"
        >
            {/* Image Section with Gradient Overlay */}
            <motion.div
                className="relative h-60 "
                variants={{
                    rest: { x: 0 },
                    hover: { x: -20 }
                }}
            >
                <img
                    src={photo || "https://via.placeholder.com/288x240"}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay (visible on hover) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                />
                {/* <div className="absolute -bottom-10 -left-30 bg-green-600 w-12 h-12 flex justify-center items-center rounded-tr-xl z-10">
                    {icon}
                </div> */}
            </motion.div>
            

            {/* Content Section */}
            <motion.div
                className=" relative p-6 min-h-[140px] bg-white"
                variants={{
                    rest: { x: 0 },
                    hover: { x: 20 }
                }}
            >
                 <div className="absolute bottom-10 left-30 -top-6 bg-green-600 w-12 h-12 flex justify-center items-center rounded-tr-xl z-10">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                    Posted Jobs:{" "}
                    <span className="bg-green-500 text-white px-2 py-0.5 rounded font-medium text-sm">
                        {jobCount}
                    </span>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default CategoriesCard;