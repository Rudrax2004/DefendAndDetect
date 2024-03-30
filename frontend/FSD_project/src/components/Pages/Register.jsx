/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '/src/components/storage/auth.jsx';
import { toast } from 'react-toastify';
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
import ParticlesContainer from '../practice/lab1/particle';


function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    //handling the input values
    const handleInput = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const { storeTokenInLocal } = useAuth();

    // /handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const Response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await Response.json();

            if (Response.ok) {
                storeTokenInLocal(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                toast.success("Registration successful....");
                navigate("/login");
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }


        } catch (error) {
            console.log('register: ', error);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="login">
        
        <section>
              <main> 
                  <div  className="flex items-center w-full justify-center">
                      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
                    <div className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style={{ backgroundImage: "url(https://fanatic.co.uk/wp-content/uploads/2022/02/92812-business-presentation.gif)" }}></div>
                    <div className="w-full sm:w-3/5">
                        <div className="p-8">
                            <h1 className="text-3xl font-black text-slate-700">Registration</h1>
                            <form className="mt-8" onSubmit={handleSubmit}>
                                <div className="relative mt-2 w-full rounded-lg border-s-2 border-gray-600 ">
                                    <input
                                        type="text"
                                        name="username"
                                        value={user.username}
                                        onChange={handleInput}
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label htmlFor="text" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Name </label>
                                </div>

                                <div className="relative mt-2 w-full">
                                    <input
                                        type="text"
                                        name="email"

                                        value={user.email}
                                        onChange={handleInput}
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
                                </div>

                                <div className="relative mt-2 w-full">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleInput}
                                        autoComplete='current-phone'
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label htmlFor="number" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Phone Number </label>
                                </div>

                                <div className="relative mt-2 w-full">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                        autoComplete='current-password'
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
                                    <span className="absolute top-2 right-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                        {showPassword ? 'Hide' : 'Show'}
                                    </span>
                                </div>

                                <div className="relative mt-2 w-full">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"

                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        autoComplete='current-password'
                                    />
                                    <label
                                        htmlFor="confirmPassword" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Re-Enter Your Password</label>
                                    <span className="absolute top-2 right-3 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                    </span>
                                </div>

                                <input className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit" value="Create account" />
                            </form>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">Already have an account? <a href="http://localhost:5173/login" className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</main> 
       </section>
       <MatrixRainCode/>
       </div>
      
    );
}

export default Register;
