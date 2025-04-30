import React from 'react';
import banner from '../assets/Banner.png';

export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4
       flex flex-col md:flex-row items-center min-h-[70vh] pt-24 mb-10">
        {/* notice pt-24 added ^^^ */}

        {/* Left Section */}
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <div className="space-y-8 mt-8 md:mt-20">
            <h1 className="text-3xl font-semibold">
              Hello everyone here to learn <span className="text-pink-500">
                something everyday..!!
              </span>
            </h1>
            <p className="text-lg">
            Books are windows to new worlds, expanding our knowledge and imagination.
             Every page turned brings us closer to understanding ourselves and the world around us.
            </p>
          </div>
          {/* <div className="mt-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Email" required className="grow" />
            </label>
          </div> */}
          {/* <button className="btn btn-secondary mt-4">Send</button> */}
        </div>

        {/* Right Section */}
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
          <img src={banner} alt="banner" className="w-[60%] h-auto" />
        </div>
      </div>
    </>
  );
};
