import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";
import banner1 from '../../assets/Image/banner1.jpg'
import banner2 from '../../assets/Image/banner2.avif'


const Banner = () => {
  const texts = ["Best Carrier", "Best Solution"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f4f5fc] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">

        {/* ✅ Left: Text Content (2/3) */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Our Excellent Find Job <br />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, color: '#2CDB30' }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-gray-900 inline-block"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-gray-500 text-base mb-6 max-w-lg">
            There are many variations passages of Lorem Ipsum Fasts by injected humour, or randomised words which...
          </p>

          {/* Job Type Radio Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="jobType" className="radio radio-success" defaultChecked />
              <span className="text-green-600 font-medium">Full Time</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="jobType" className="radio" />
              <span className="text-gray-600">Part Time</span>
            </label>
          </div>

          {/* Search Form */}
          <form className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-2xl flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Job Title"
              className="input w-full rounded-none md:rounded-l-xl border-none focus:outline-none"
            />
            <select className="select w-full border-none rounded-none focus:outline-none">
              <option>All category</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <button type="submit" className="btn bg-green-500 text-white rounded-none md:rounded-r-xl">
              <FiSearch className="mr-2" />
              Search
            </button>
          </form>
        </div>

        {/* ✅ Right: Image with Animation (1/3) */}
        <div className="w-full overflow-hidden sm:overflow-visible lg:w-1/3 ...">
          {/* Y-axis animation */}
          <motion.div
            animate={{ y: [100, 50, 100] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src={banner1}
              alt="Animated 1"
              className="w-[320px] rounded-t-[40px] rounded-br-[40px] shadow-lg border-l-[6px] border-b-[6px] border-green-400"
            />
          </motion.div>

          {/* X-axis animation */}
          <motion.div
            animate={{ x: [90, 120, 90] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src={banner2}
              alt="Animated 2"
              className="w-[320px] ml-10 rounded-t-[40px] rounded-bl-[40px] shadow-lg border-r-[6px] border-b-[6px] border-green-400"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
