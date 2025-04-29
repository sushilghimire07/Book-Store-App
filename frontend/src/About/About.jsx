import React from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            About Our Bookstore
          </h2>

          <p className="text-lg text-black dark:text-white mb-6">
            Welcome to <Link to={'/'} className="font-semibold text-blue-600 cursor-pointer">o|o</Link> – a project built with love and a deep appreciation for books and technology. I'm a Computer Science student and a passionate developer, and I created this online bookstore to combine two things I truly enjoy: reading and building meaningful web applications.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            My Mission
          </h3>
          <p className="text-lg text-black dark:text-white mb-6">
            My goal is simple: to build a platform where book lovers can easily explore, discover, and enjoy their favorite reads. This bookstore app was designed to be user-friendly, responsive, and functional—serving both physical and digital readers.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Why Choose This App?
          </h3>
          <ul className="list-disc pl-5 text-lg text-black dark:text-white mb-6">
            <li>📚 Handpicked collection with diverse genres for all readers.</li>
            <li>💡 Built with modern technologies like React, Tailwind CSS, and responsive design principles.</li>
            <li>🌙 Fully compatible with light and dark mode for comfortable reading.</li>
            <li>⚡ Smooth navigation and quick page loads for a great user experience.</li>
            <li>🔒 Built with user privacy and data security in mind.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            The Story Behind It
          </h3>
          <p className="text-lg text-black dark:text-white mb-6">
            I built this bookstore as part of my journey in web development. It started as a simple idea in my college dorm and has grown into a full-featured project that I'm proud of. This app is still evolving, and I plan to keep adding more features like user accounts, personalized recommendations, and more.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Let’s Grow Together
          </h3>
          <p className="text-lg text-black dark:text-white mb-6">
            I truly appreciate your time here. If you’re someone who loves books, tech, or just want to support indie developers, this app is for you. Feel free to explore the collection, send your feedback, or even contribute ideas if you’re into development too!
          </p>

          <div className="text-center">
            <Link
              to={"/cource"}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
