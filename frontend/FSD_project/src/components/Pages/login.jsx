/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from '/src/components/storage/auth.jsx';
import {toast} from 'react-toastify';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import ParticlesContainer from "../practice/lab1/particle";
function Login(){

    const [flag,setFlag] = useState(false);
    const [name,setName] = useState();

    const [user,setUser] = useState({
        email : "" ,
        password : "",
    });

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,//dynamic data because we dont know user make changes in which field .....
        })
    }
   
   

    
    const navigate = useNavigate();
    // /handling the form submission

    const {storeTokenInLocal} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();//// Prevent the default form submission behavior
        // console.log(user);
        try {
                const Response = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
                const res_data = await Response.json();
                console.log("response:",res_data);
                
                if(Response.status==200){
                    //******stores data in local storage
                    //***localStorage.setItem('token',res_data.token);
                    
                    storeTokenInLocal(res_data.token);
                    
                    console.log(user);
                    setUser({email : "",password : ""});
                    toast.success("Login successfull....");  
                    navigate("/");
                }
                if(Response.status==401){
                    toast.error("Invalid Credentials.....");
                }
                else toast.error(res_data.extraDetails?res_data.extraDetails : res_data.message);
        } catch (error) {
                        
            console.log(error);
        }

        // alert(JSON.stringify(user, null, 2));
    };

    return(
         <div className="login">
          <section>
                <main> 
                    <div  className="flex items-center w-full justify-center">
                        <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
                            <div
                                className="m-5 w-full rounded-3xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"
                                style={{ backgroundImage: "url(http://shs02.bihar.gov.in/shsb/img/LoginLogo.gif)" }}
                            ></div>
                            <div className="w-full sm:w-3/4">
                                <div className="p-8">
                                    <h1 className="text-3xl font-black text-slate-700">Login</h1>
                                    <form className="mt-8" onSubmit={handleSubmit}>
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="text"
                                                name="email"
                                                autoComplete="current-password"
                                                value={user.email}
                                                onChange={handleInput}
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                            >
                                                {" "}
                                                Enter Your Email{" "}
                                            </label>
                                        </div>
                                        <div className="relative mt-2 w-full">
                                            <input
                                                type="password"
                                                name="password"
                                                value={user.password}
                                                onChange={handleInput}
                                                autoComplete="current-password"
                                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="password"
                                                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                            >
                                                {" "}
                                                Enter Your Password
                                            </label>
                                        </div>
                                        <input
                                            className="mt-4 w-full cursor-pointer rounded-lg bg-green-800 pt-3 pb-3 text-white shadow-lg hover:bg-green-600"
                                            type="submit"
                                            value="Login"
                                        />
                                    </form>
                                    <div className="mt-2">
                                          
                                         {/**this is google authentication....... */} 

                                            <GoogleLogin 
                                            onSuccess={(CredentialsResponse)=>{
                                                var decoded = jwtDecode(CredentialsResponse.credential);
                                                // console.log(CredentialsResponse);
                                                console.log(decoded);
                                                          
                                                toast.success("successfully verified...");
                                                navigate("/");  
                                            }
                                        }
                                        onchange={handleInput}
                                        onError={()=>{
                                                console.log("login failed....");
                                                toast.error("Not Verified...");
                                            }}
                                            />
                                      </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-gray-600">
                                            Don't have an account?{" "}
                                            <a href="http://localhost:5173/register" className="font-bold text-blue-600 no-underline hover:text-blue-400">
                                                Sign up
                                            </a>
                                        </p>
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

export default Login;