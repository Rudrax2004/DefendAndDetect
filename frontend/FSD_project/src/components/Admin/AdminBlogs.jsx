/* eslint-disable no-unused-vars */
import React from 'react';
import {useAuth} from '../storage/auth';
export default function AdminBlog() {
const {blog} = useAuth();
  return (
    <>
      <section className="section-blog  py-10">
                         <form className="mt-8" >
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="username"
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="text" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Name </label>
                                        </div>

                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="email"
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
                                        </div>
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="message"
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Message </label>
                                        </div>

                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="phone"
                                                autoComplete='current-phone'
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label htmlFor="number" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Phone Number </label>
                                        </div>

                                        
                                        <input className="mt-4 mb-2 w-full cursor-pointer rounded-lg bg-cyan-700 pt-3 pb-3 text-white shadow-lg hover:bg-cyan-600" type="submit" value="Create account" />
                                    </form>
       </section>
    </>
  );
}

