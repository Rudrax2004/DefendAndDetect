/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../Headers/header";
import Footer from "../Footers/footer";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import { motion } from "framer-motion";

const NewHome = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const videoSection = document.getElementById("video-section");
            
            if (videoSection && scrollPosition > videoSection.offsetTop) {
                setShowVideo(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Header/>
            <div className=" relative">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                        className="flex items-center"
                    >
                        <h1 className="main-heading text-8xl font-bold text-center mt-60">
                            <span className="bg-gradient-to-r from-blue-600 to-green-400 text-transparent bg-clip-text">
                                Cyber Security 
                            </span>
                        </h1>
                    </motion.div>
                    <h6 className="text-3xl font-bold mt-8 text-justify">
                        <span className="bg-gradient-to-r from-white to-slate-600 text-transparent bg-clip-text">
                            Protecting Your Digital World Against Cyber Threats
                        </span>
                    </h6>
                </div>
                <MatrixRainCode />
            </div>
            <section id="video-section" className="bg-black mt-60 h-screen flex items-center text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-cyan-500 tracking-loose">CyberSec Expo</h1>
                        <h2 className="text-3xl md:text-5xl text-white leading-relaxed md:leading-snug mb-2">Guardians of Digital Frontiers</h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            Dive into the world of cybersecurity events and register now to showcase your expertise and win exciting awards.
                        </p>
                        <a href="/learn" className="bg-transparent hover:bg-cyan-300 text-cyan-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent">
                            Explore Now
                        </a>
                    </div>
                    <div className="p-8 mr-4 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                        {showVideo && (
                            <div className="flex space-x-4">
                                <video autoPlay muted loop className="w-full h-full object-cover">
                                    <source src="/photos/home.mp4" type="video/mp4" />
                                </video> 
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewHome;
