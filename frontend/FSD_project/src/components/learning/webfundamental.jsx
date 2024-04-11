/* eslint-disable no-unused-vars */
// WebFundamentalsPage.jsx
import React from 'react';
import Footer from '../Footers/footer';
import Header from '../Headers/header';
import ParticlesContainer from "../practice/lab1/particle";
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
const WebFundamentals = () => {
  return (
    <div >
      <Header />
      <ParticlesContainer />
      <div className="relative mt-8 container bg-black mx-auto group rounded-2xl overflow-hidden border-4 border-gray-500">
        {/* <img className='-z-40 h-full w-full object-cover absolute top-0 left-0 right-0' src="photos/intro_bg.jpg" alt="Introduction Background" /> */}
        <div className="bg-opacity-70 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold text-yellow-600 mb-8">Web Fundamentals</h1>

            <AccordionBasicExample index={3}/>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default WebFundamentals;

