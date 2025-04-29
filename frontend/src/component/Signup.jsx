import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      {/* Modal-style Signup */}
      <dialog className="modal" open>
        <div className="modal-box">
          <form method="dialog">
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>

          <h3 className="font-bold text-xl mb-4 text-center">Sign Up</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <button className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition">
              Signup
            </button>
            <p className="text-sm">
              Have an account?{" "}
              <button
                className="underline text-blue-500 hover:text-blue-700"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>

          {/* Login Dialog */}
          <Login />
        </div>
      </dialog>
    </>
  );
}

export default Signup;
