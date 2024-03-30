// export default MovieCenter;
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'tailwindcss/tailwind.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router-dom';
import ParticlesContainer from './particle';

const EmailSpoofing = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="text-gray-400 z-50 rounded-lg py-2 bg-black text-pretty container  p-4">      
    <p className='text-3xl font-medium text-red-500'>special thanks to mr.Madhan Maaz to build this tool...For educational and awareness-raising purposes only</p>
    <p className='container bg-gray-900 text-xl py-4 text-red-500'>Copyright (c) 2024 Madhanmaaz

All rights owned by Madhanmaaz.

The "white-spikes" tool is an educational resource designed for awareness-raising and ethical purposes only.
It is free to use, but any commercial distribution or sale is restricted.
The tool is intended to be used responsibly and with the explicit permission of the relevant network administrators or owners.
The creators and copyright owners of "white-spikes" are not liable for any misuse or unauthorized use of the tool.

For educational and awareness-raising purposes only. Unauthorized use is prohibited.</p>
        <div className="video-container z-10  mt-4 overflow-x-auto">
  <video className="object-cover" controls>
    <source src="/photos/emailspoofing.mp4" type="video/mp4" />
  </video>
  </div>
        {/* Iframes */}
        <section className="">
          <h2 className="text-xl font-bold text-yellow-600 mb-4">External Content</h2>
          <div className='mt-2 overflow-hidden w-full bg-gray-400 shadow-md rounded-md p-6' style={{ width: '100%', overflow: 'hidden',zIndex:'10' }}>
            <iframe
              src="http://localhost:3411"
              title="External Content"
              width="100%"
              height="700px"
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
        <p className='text-3xl py-2 font-medium text-red-500'>please , Dont miss use this tool...</p>
        </section>
        {/* Navigation buttons */}
        <div className="py-3 flex justify-center mt-4">
          <AwesomeButton onPress={() => { Navigate('/') }} type="primary" className='aws-btnxss'>
            <FaHome /> Home
          </AwesomeButton>
          <AwesomeButton onPress={() => { Navigate('/learn') }} type="primary" className='aws-btnxss'>
            <AiOutlineSearch className="mr-2" /> Labs
          </AwesomeButton>
        </div>
   
      </div>
      
      {/* Particle container */}
      <ParticlesContainer/>
    </>
  );
};

export default EmailSpoofing;
