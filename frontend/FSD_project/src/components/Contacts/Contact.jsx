/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars*/
import React from "react";
import Header from "../Headers/header";
import Footer  from "../Footers/footer";
import { useState } from "react";
import { useAuth } from "../storage/auth";
import { toast } from "react-toastify";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import ParticlesContainer from "../practice/lab1/particle";
export default function Contact() {
    
    
    const [contact,setContact] = useState({
        username:"",
        email : "" ,
        phone : "",
        message : "",
    });
    
    const {user} = useAuth(); 
    console.log("user data in contact : " , user);

    const [userData,setUserData] = useState(true);
    
    if(user && userData){
        setContact({//this is default
             username : user.username,
             email : user.email,
             message : "",
             phone : "" 
        });
        setUserData(false);//this is user data
    }

    const handleInput =  (e)=>{
        const { name, value } = e.target;
    
        setContact((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    
    }
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        e.persist();
        // console.log(user);
        // alert(JSON.stringify(us er, null, 2));
        try {
            const Response = await fetch('https://defendanddetect-production.up.railway.app/api/form/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if(Response.ok){
                const res_data = await Response.json();
                //********stores data in local storage
                        //************** *    localStorage.setItem('token',res_data.token);
               
            toast("msg send successfully....");
             console.log("data from contact: ", res_data);
               // storetokenInLocal(res_data.token);
                setContact({ 
                    username: " ",
                    email : " ",
                    message : " ",
                    phone : " ",
            });
            }
        } catch (error) {
            console.log('register: ', error);
        }
    };
    
    return (
        <><Header/>
        <ParticlesContainer/>
        <div className="mt-6 relative flex items-top justify-center min-h-[700px] backdrop-blur-sm backdrop-brightness-90  sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                    <div className="md:5/12  ">
                        <img className="mr-2 ml-20 cover-center  lg:w-8/12"
                             src="/photos/contact.png"
                            alt="image" />
                    </div>
                        <div className="p-6 mr-5 bg-white sm:rounded-lg">

                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-10 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 4 1 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-41">
                                   DDU University , Nadiad - 395071
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    defendanddetect@gmail.org
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 p-6 mr-5 bg-white sm:rounded-lg">

                        <form className="mt-8" onSubmit={handleSubmit}>
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="username"
                                                value={contact.username}
                                                onChange={handleInput}
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="text" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Name </label>
                                        </div>

                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="email"
                                                
                                                value={contact.email}
                                                onChange={handleInput}
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
                                        </div>
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="message"
                                                
                                                value={contact.message}
                                                onChange={handleInput}
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Message </label>
                                        </div>

                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="phone"
                                                value={contact.phone}
                                                onChange={handleInput}
                                                autoComplete='current-phone'
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="number" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Phone Number </label>
                                        </div>

                                        
                                        <input className="mt-4 mb-2 w-full cursor-pointer rounded-lg bg-cyan-700 pt-3 pb-3 text-white shadow-lg hover:bg-cyan-600" type="submit" value="send message" />
                                    </form>
                                </div>
                    </div>
                </div>
            </div>
        </div><Footer/></>
    );
}
