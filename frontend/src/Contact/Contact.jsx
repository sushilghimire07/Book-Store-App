import React, { useState } from "react";
import { useForm } from "react-hook-form";
import  Navbar  from "../component/Navbar";
import { Footer } from "../component/Footer";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900 mt-10 mb-10">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Contact Us</h2>

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded 
            mb-6 text-center">
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-black dark:text-white">Full Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 
                text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-black dark:text-white">Email Address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700
                 text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 font-medium text-black dark:text-white">Subject</label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white 
                dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
                placeholder="Reason for contacting"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-black dark:text-white">Message</label>
              <textarea
                rows="5"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white 
                dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Date & Time (optional) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-black dark:text-white">Preferred Date (optional)</label>
                <input
                  type="date"
                  {...register("date")}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white
                   dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none
                    focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium text-black dark:text-white">Preferred Time (optional)</label>
                <input
                  type="time"
                  {...register("time")}
                  className="w-full border border-gray-300 dark:border-gray-600 
                  bg-white dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold
                 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
