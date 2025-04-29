import React, { useEffect, useState } from 'react';
import Login from './Login';

export const Navbar = () => {
 

  const navItems = (
    <>
      <li><a href='/'>Home</a></li>
      <li><a href='/cource'>Course</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/about'>About</a></li>
    </>
  );

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'synthwave'); 
    } else {
      document.documentElement.setAttribute('data-theme', 'light'); 
    }
  };
  

  const [stickey, setStickey] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {  
        setStickey(true);
      } else {
        setStickey(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50  ${stickey ? 'stickey-navbar shadow-md bg-base-250 duration-300 transition-all ease-in-out' : ''}`}>
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for small screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl font-bold cursor-pointer ml-2">o|o</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">

        {/* Search Input */}
        <div className="hidden md:block">
          <label className="input input-bordered flex items-center gap-2">
            <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
        </div>

        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleThemeToggle} />

          {/* Sun Icon */}
          <svg className="swap-on fill-current w-5.5 h-5.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </g>
          </svg>

          {/* Moon Icon */}
          <svg className="swap-off fill-current w-5.5 h-5.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {/* Login Button */}
          <a className="btn btn-primary" onClick={()=>{
          document.getElementById('my_modal_3').showModal()}
          }>Login</a>
          <Login/>

      </div>

    </div>
  );
};
