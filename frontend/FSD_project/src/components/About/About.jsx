/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import Header from "../Headers/header";
import Footer from "../Footers/footer";
import { useAuth } from "../storage/auth";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import ParticlesContainer from "../practice/lab1/particle";

export default function About() {
  const { user } = useAuth();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    handleImageLoad(); // Trigger the image load when the component mounts
  }, []);

  return (
    <>
      <Header />
      <div className=" mt-2 py-16 bg-transparent backdrop-blur-lg relative">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 relative ">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12">
              <img
                ref={imageRef}
                src="/photos/about.png"
                alt="image"
                className={`w-full ${imageLoaded ? 'opacity-100' : 'opacity-0 filter grayscale blur-md'}`}
                onLoad={handleImageLoad}
                onError={() => setImageLoaded(false)} // Handle error event
              />
            </div>
            <div className="md:w-6/12">
              <h2 className="text-4xl text-gray-200 font-bold md:text-5xl">
                Hello ,
                <label className="text-4xl text-cyan-600 font-bold md:text-5xl"> {user.username} </label>
                <br />
                About CyberLearn
              </h2>
              <br />
              <h2 className="text-2xl text-gray-200 font-bold md:text-4xl">Empowering Minds, Defending Futures</h2>
              <p className="mt-6 text-gray-200">
                your go-to destination for learning and raising awareness about cybersecurity. In an age where digital threats loom large, knowledge is your best defense.
                At CyberLearn, we are on a mission to equip individuals with the skills and awareness needed to navigate the digital landscape securely.
              </p>
              <p className="mt-4 text-gray-200"></p>
            </div>
          </div>
        </div>
   <div className="flex justify-center">  
      <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
  <img className="inline-flex object-cover border-4 border-cyan-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-cyan-600/100 bg-indigo-50 text-cyan-600 h-24 w-24" 
  src="/photos/snehal.png" alt=""/>
  <h1 className="text-2xl text-gray-500 font-bold mt-2">
    Snehal Salodiya
  </h1>
  <h4 className="text-base md:text-xl text-gray-500 font">
    Frontend Developer
  </h4>
  <h4 className="text-base md:text-xl text-gray-500 font">
    Software Developer(student)
  </h4>
  <ul className="flex flex-row mt-2">
    <li className="mx-2">
      <a href="https://github.com/snehalsalodiya" target="_blank" aria-label="GitHub">
        <svg className="h-6 text-cyan-700 hover:text-cyan-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
          </path>
        </svg> </a>
    </li>

    <li className="mx-2">
      <a href="https://www.linkedin.com/in/salodiya-snehal-1b72b424a/" target="_blank" aria-label="LinkedIn">
        <svg className="h-6 text-cyan-700 hover:text-cyan-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
          </path>
        </svg> </a>
    </li>
  </ul>
  
</header>
<header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
  <img className="inline-flex object-cover border-4 border-cyan-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-cyan-600/100 bg-indigo-50 text-cyan-600 h-24 w-24" 
  src="/photos/rdx.png" alt=""/>
  <h1 className="text-2xl text-gray-500 font-bold mt-2">
    Rudrax Prajapati
  </h1>
  <h4 className="text-base md:text-xl text-gray-500 font">
    Cyber Security Enthusiast 
  </h4>
  <h4 className="text-base md:text-xl text-gray-500 font">
    Software Developer(student)
  </h4>
  <ul className="flex flex-row mt-2">
    <li className="mx-2">
      <a href="https://github.com/Rudrax2004" target="_blank" aria-label="GitHub">
        <svg className="h-6 text-cyan-700 hover:text-cyan-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
          </path>
        </svg> </a>
    </li>

    <li className="mx-2">
      <a href="https://www.linkedin.com/in/rudrax-prajapati-40b77a226/" target="_blank" aria-label="LinkedIn">
        <svg className="h-6 text-cyan-700 hover:text-cyan-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
          </path>
        </svg> </a>
    </li>
  </ul>
  
</header>
   
</div>
              </div>
      <ParticlesContainer className="-z-10"/>
      <Footer />
    </>
  );
}
