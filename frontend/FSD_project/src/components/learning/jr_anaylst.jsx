/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
import Header from '../Headers/header';
import Footer from '../Footers/footer';
import ParticlesContainer from '../practice/lab1/particle';

const JuniorDataSecurityAnalyst = () => {
  return (
    <>
    <Header />
      <ParticlesContainer />
      <div className="relative mt-8 container bg-black mx-auto group rounded-2xl overflow-hidden border-4 border-gray-500">
        {/* <img className='-z-40 h-full w-full object-cover absolute top-0 left-0 right-0' src="photos/intro_bg.jpg" alt="Introduction Background" /> */}
        <div className="bg-opacity-70 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold text-yellow-600 mb-8">Junior Security Analyst</h1>

            <AccordionBasicExample index={2}/>
        </div>
      </div>
      <Footer />  </>
    );
};

export default JuniorDataSecurityAnalyst;
