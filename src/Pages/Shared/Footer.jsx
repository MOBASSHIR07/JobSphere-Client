import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
  FaApple,
  FaGooglePlay,
  FaWindows,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaSmile,
  FaBriefcase,
  FaFileAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerImg from '../../assets/Image/footerImg.png'
import { useLocation } from 'react-router-dom';

// === Animated Counter Component ===
const AnimatedStat = ({ value, label, icon: Icon }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2 });
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
        animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 1 }}
      >
        {rounded}
      </motion.div>
      <div className="flex justify-center items-center gap-2 mt-1 text-gray-400">
        <Icon className="text-green-500" />
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};

// === Footer ===
const Footer = () => {
    const location = useLocation();
  return (
    <>
      {location.pathname === '/' && (
        <img src={footerImg} alt="Home Banner" />
      )}
      <footer className="bg-gray-900 text-gray-300 pt-10">
        {/* Newsletter + Stats */}
        <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:items-center pb-10 border-b border-gray-700">
          {/* Newsletter */}
          <div className="flex flex-col md:w-1/2 mb-6 md:mb-0">
            <label className="mb-2 font-medium text-white">Subscribe for job updates</label>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Please"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="flex justify-center md:justify-end space-x-10 text-sm text-gray-400 mt-6 md:mt-0">
            <AnimatedStat value={145} label="Happy Clients" icon={FaSmile} />
            <AnimatedStat value={215} label="Job Listings" icon={FaBriefcase} />
            <AnimatedStat value={745} label="Resumes Posted" icon={FaFileAlt} />
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
          {/* Branding */}
          <div>
            <Link to="/" className="flex items-center mb-2 text-2xl font-bold text-white">
              <span className="bg-green-500 text-white px-2 py-1 mr-2 rounded">JS</span>
              Job <span className="text-green-500">Sphere</span>
            </Link>
            <span className="text-green-400 tracking-widest text-xs block mb-4">
              b e s t &nbsp; j o b &nbsp; p l a t f o r m s
            </span>
            <p className="text-sm text-gray-400">
              Empowering your career journey with top opportunities and trusted companies.
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              <FaFacebookF className="hover:text-green-500 cursor-pointer" />
              <FaPinterestP className="hover:text-green-500 cursor-pointer" />
              <FaTwitter className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/jobs">Browse Jobs</Link></li>
              <li><Link to="/candidates">Candidates</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="text-white font-semibold mb-4">Download</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><FaApple className="mr-2" /> App Store</li>
              <li className="flex items-center"><FaGooglePlay className="mr-2" /> Google Play</li>
              <li className="flex items-center"><FaWindows className="mr-2" /> Windows</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><FaPhoneAlt className="mr-2" /> (+1) 260-235-0551</li>
              <li className="flex items-center"><FaEnvelope className="mr-2" /> example@mail.com</li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-2">Payments</h4>
            <div className="flex space-x-4 text-xl text-white">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-500 py-5">
          © {new Date().getFullYear()} JobSphere. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
