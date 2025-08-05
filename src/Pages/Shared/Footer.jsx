import React from 'react';
import { useEffect } from 'react';
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
import footerImg from '../../assets/Image/footerImg.png';
import { useLocation } from 'react-router-dom';
import CountUp from 'react-countup';
import { div } from 'motion/react-client';

// === Footer ===
const Footer = () => {
  const location = useLocation();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {location.pathname === '/' && (
        <div className=' mx-16 shadow-[0_4px_12px_rgba(0,0,0,0.1)] ... rounded-md bg-white mb-20'>
          <div className='flex justify-between items-center bg-white  border-gray-300  '>
            <div className='flex justify-center items-center gap-4 w-1/3 bg-green-500 '>
        
                   <h3 className='text-5xl text-white font-bold p-10'>Post Job Now</h3>
            </div>
            <div className=' flex w-2/3 -mx-3  justify-center items-center gap-10'>
               <p className='text-2xl text-gray-400 mx-10'>Start your free trial today, no credit card is required.</p>
            <div>
              <button className='bg-green-500  text-3xl text-white font-semibold p-4'>Post Job</button>
            </div>
            </div>

          </div>
            

        </div>
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

          {/* Placeholder for Stats / CountUp */}
          <div className="flex justify-center md:justify-end space-x-10 text-sm text-gray-400 mt-6 md:mt-0">
            {/* Replace these blocks with <CountUp /> later */}
            <div className="text-center">
              <div className="text-white font-bold text-xl">
                {mounted && (
                  <CountUp
                    start={0}
                    end={145}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUp>
                )}
              </div>
              <div className="flex justify-center items-center gap-2 mt-1 text-gray-400">
                <FaSmile className="text-green-500" />
                <span className="text-sm">Happy Clients</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">
                {mounted && (
                  <CountUp
                    start={0}
                    end={545}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUp>
                )}
              </div>
              <div className="flex justify-center items-center gap-2 mt-1 text-gray-400">
                <FaBriefcase className="text-green-500" />
                <span className="text-sm">Job Listings</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">
                {mounted && (
                  <CountUp
                    start={0}
                    end={745}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUp>
                )}
              </div>
              <div className="flex justify-center items-center gap-2 mt-1 text-gray-400">
                <FaFileAlt className="text-green-500" />
                <span className="text-sm">Resumes Posted</span>
              </div>
            </div>
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
