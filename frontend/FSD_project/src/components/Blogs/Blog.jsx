/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Headers/header';
import Footer from '../Footers/footer';
import { useAuth } from '../storage/auth';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
import ParticlesContainer from '../practice/lab1/particle';

function Blog() {
  const { blog } = useAuth();
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({ opacity: 1, x: 0 });
  };

  useEffect(() => {
    startAnimation(); // Trigger the animation when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Header />
      <section className="section-blog ">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="text-center"
            onMouseEnter={startAnimation}
            onTouchStart={startAnimation}
          >
            <h1 className="mb-5 main-heading text-8xl font-bold">
              <span className="bg-gradient-to-r from-gray-500 text-center to-white text-transparent bg-clip-text">
                Blogs
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="mt-8 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          {Array.isArray(blog) &&
            blog.map((prevElement, index) => (
              <div key={index} className="card bg-gradient-to-b from-cyan-600 to-green-700 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:rotate-0">
                <div className="card-img">
                  {/* Use the actual image URL if available, otherwise use a default */}
                  <img
                    src={prevElement.imageUrl}
                    alt="Card Image"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="card-content p-3">
                  <h2 className="text-xl font-semibold  text-white">
                    {prevElement.blog}
                  </h2>
                  <p className="text-gray-100">
                    {prevElement.description}
                  </p>
                  <div className="mt-3">
                    <label className='block font-bold text-gray-200'>Provider:</label>
                    <p className="text-gray-100">{prevElement.provider}</p>
                  </div>
                  <div className="mt-3">
                    <label className='block font-bold p-0 text-gray-200'>Date Published:</label>
                    <p className="text-gray-100">{new Date(prevElement.datePublished).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <ParticlesContainer />
      <Footer />
    </>
  );
}

export default Blog;
