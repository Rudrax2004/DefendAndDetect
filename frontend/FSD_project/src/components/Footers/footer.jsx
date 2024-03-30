// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="  text-gray-400">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col items-center justify-center backdrop-blur-md text-white">
        <div className=" text-black mb-6">
          <Link to="/" className="nav_logo1 justify-center flex items-center">
            <img src="/photos/logo.png" className="mr-3 h-20 w-30" alt="Logo" />
            <p className="text-lg font-semibold uppercase text-gray-400">Defend & Detect</p>
          </Link>
        </div>
            <ul className=" justify-center font-medium">
                <Link to="/" className="text-gray-500 hover:text-cyan-500 mr-4">Home</Link>
                <Link to="/about" className="text-gray-500 hover:text-cyan-500 mr-4">About</Link>
                <Link to="/contact" className="text-gray-500 hover:text-cyan-500 mr-4">Contact</Link>
                <Link to="/blog" className="text-gray-500 hover:text-cyan-500 mr-4">Blog</Link>
            </ul>
        <hr className="my-3 border-gray-400 w-full" />
        <div className="flex items-center">
          <p className="text-sm py-3">&copy; {new Date().getFullYear()} Defend & Detect</p>
         </div>
            </div>
        </footer>
    );
}
