import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl mb-4 text-center">Login</h3>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="text"
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
            Login
          </button>
          <p className="text-sm">
            Not registered?{" "}
            <Link
              to={"/signup"}
              className="underline text-blue-500 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default Login;
