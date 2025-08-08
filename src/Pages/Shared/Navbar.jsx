import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaBriefcase } from 'react-icons/fa';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navItemClass = 'hover:text-green-500 transition-colors font-medium text-gray-700';
  const activeClass = 'text-green-600 font-semibold underline';

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : navItemClass}>
          Home
        </NavLink>
      </li>

      <li tabIndex={0}>
        <details>
          <summary className="cursor-pointer font-semibold hover:text-green-600">Jobs</summary>
          <ul className="p-2 bg-base-100 z-50">
            <li><NavLink to="/jobs/category" className={({ isActive }) => isActive ? activeClass : navItemClass}>By Category</NavLink></li>
            <li><NavLink to="/jobs/location" className={({ isActive }) => isActive ? activeClass : navItemClass}>By Location</NavLink></li>
            <li><NavLink to="/jobs/remote" className={({ isActive }) => isActive ? activeClass : navItemClass}>Remote Jobs</NavLink></li>
          </ul>
        </details>
      </li>

      <li tabIndex={0}>
        <details>
          <summary className="cursor-pointer font-semibold  hover:text-green-600 ">Companies</summary>
          <ul className="p-2 bg-base-100 z-50">
            <li><NavLink to="/companies/top" className={({ isActive }) => isActive ? activeClass : navItemClass}>Top Rated</NavLink></li>
            <li><NavLink to="/companies/startups" className={({ isActive }) => isActive ? activeClass : navItemClass}>Startups</NavLink></li>
            <li><NavLink to="/companies/enterprise" className={({ isActive }) => isActive ? activeClass : navItemClass}>Enterprises</NavLink></li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink to="/resources" className={({ isActive }) => isActive ? activeClass : navItemClass}>
          Resources
        </NavLink>
        </li>
      <li>
        <NavLink to="/myapplications" className={({ isActive }) => isActive ? activeClass : navItemClass}>
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink to="/addjob" className={({ isActive }) => isActive ? activeClass : navItemClass}>
          Add Job
        </NavLink>
      </li>
    </>
  );

  const authSection = (
    <>
      {!user ? (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `btn btn-md btn-success ${isActive ? 'text-white' : 'btn-outline'}`
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `btn btn-md btn-success ${isActive ? 'text-white' : 'btn-outline'}`
            }
          >
            Register
          </NavLink>
        </>
      ) : (
        <>
          <span className="text-sm font-medium text-green-600">
            Hi, {user.displayName || 'User'}
          </span>
          <button onClick={logOut} className="btn  btn-outline border-green-600">
            Logout
          </button>
        </>
      )}
    </>
  );

  return (
    <header className="sticky p-3 top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar min-h-[4rem] flex justify-between items-center">

          {/* Logo */}
          <div className="flex flex-col leading-none">
            <Link to="/" className="flex items-center text-2xl font-bold text-gray-800">
              <FaBriefcase className="text-green-600 text-3xl mr-1 mb-2" />
              Job<span className="text-green-600">Sphere</span>
            </Link>
            <span className="text-[10px]  text-green-600 tracking-widest font-medium ml-8 mt-[-4px]">
              B e s t &nbsp; J o b &nbsp; P l a t f o r m s
            </span>
          </div>

         



          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navLinks}
            </ul>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {authSection}
          </div>

          {/* Mobile Dropdown */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <FiMenu className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-white rounded-box w-56 space-y-2"
            >
              {navLinks}
              <hr className="my-2" />
              {authSection}
            </ul>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
