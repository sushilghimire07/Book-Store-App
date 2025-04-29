import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // You can also close the modal here if needed
  };

  return (
    <>
      {/* Signup Modal */}
      <dialog className="modal" open>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl mb-4 text-center">Sign Up</h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">Password is required</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Signup
              </button>
              <p className="text-sm">
                Have an account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 hover:text-blue-700"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </dialog>
      <Login />
    </>
  );
}

export default Signup;
