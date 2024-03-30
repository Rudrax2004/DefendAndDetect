
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Headers/header";
import Footer  from "../Footers/footer";
import Example from "./example";
export default function Home() {
    const ex=Example
    return (
    <>n
        <Header />
        <div className="h-screen flex flex-row overflow-hidden justify-center items-center">    {/* <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="../../../public/photos/photo4.jpg" alt="image1" />
                </div>
            </aside> */}

            <img className="mt-2 absolute inset-0 w-full h-full object-cover object-center" src="https://www.teksystems.com/cdn-cgi/image/height=605,width=813,quality=95,format=webp/https://www.teksystems.com/-/media/teksystems/images/blogs/blog%20images/cybersecurity-talent-gap.png?iar=0&rev=2a71ae59b0d54472b5ad1648db59318b&hash=0A95F83DAE5694F9B6AE058E9C55E4C4" alt="image1" />

            <div className="container relative">
                <h1 
                value={ex}
                className="main-heading text-8xl font-bold text-center mb-20">
                
                    {/* <span
                    className="bg-gradient-to-r from-blue-600 to-green-400 text-transparent bg-clip-text">
                        Cyber Security
                    </span> */}
                </h1>
            </div>
        </div>
        <Footer/>
    </>
    );
}
