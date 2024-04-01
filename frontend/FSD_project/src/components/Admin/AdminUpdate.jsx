/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../storage/auth";
import {toast} from 'react-toastify';
import axios from 'axios';

export default function AdminUpdate() {
    const { userid } = useParams();
    const { TokenAuthorization } = useAuth(); // Use the custom hook
    const [singleUser, setSingleUser] = useState({
        username:'',
        email:'',
        phone:''
    });
    const Navigate = useNavigate();

    useEffect(() => {
        // Fetch user data based on the ID from the backend
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://defendanddetect-production.up.railway.app/api/admin/users/${userid}`, {
              headers: {
                Authorization: TokenAuthorization,
              },
            });
    
            if (response.status === 200) {
              const data = response.data;
              // Set the fetched user data to the state
              setSingleUser({
                ...singleUser,
                username: data.username,
                email: data.email,
                phone: data.phone,
              });
            }
          } catch (error) {
            console.log("Error in fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    

    const handleInput = (e) => {
      const { name, value } = e.target;
  
      // Update the singleUser state based on the previous state
      setSingleUser({
        ...singleUser,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://defendanddetect-production.up.railway.app/api/admin/users/update/${userid}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: TokenAuthorization,
          },
          body: JSON.stringify(singleUser),
        });
  
        if (response.ok) {
          toast.success("Updated successfully....");
        }
      } catch (error) {
        toast.error("Not updated...");
      }
    };
  
  return (
    <div style={{
      minWidth: "150vh",
      minHeight: "90vh",
      border: '5px solid gray',  // Adding a border with a blue color
      borderRadius: '10px',         // Adding rounded corners
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Adding a subtle box shadow
      display: 'flex',              // Using flex for layout
      alignItems: 'center',         // Centering content vertically
      justifyContent: 'center',     // Centering content horizontally
      background: '#ffffff',        // Setting a white background color
      color: '#333',                // Setting text color
      }}>
    <div className="bg-white h-full  flex items-center justify-center">     <section className="section-blog py-10">
        <form className="mt-8" onSubmit={handleSubmit}>
         
          <div className="relative mt-2 w-full">
            <input
              type="text"
              name="username"
              value={singleUser.username}
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              onChange={handleInput}
            />
            <label
              htmlFor="text"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Enter Your Name
            </label>
          </div>
          <div className="relative mt-2 w-full">
         
          <input
              type="text"
              name="email"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              value={singleUser.email }
              onChange={handleInput}
            />
            <label
              htmlFor="text"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Enter Your email
            </label>
          </div>
          <div className="relative mt-2 w-full">
         
          <input
              type="text"
              name="phone"
              value={singleUser.phone }
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              onChange={handleInput}
            />
            <label
              htmlFor="text"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Enter Your phone
            </label>
          </div>

          <input
            className="mt-4 mb-2 w-full cursor-pointer rounded-lg bg-cyan-700 pt-3 pb-3 text-white shadow-lg hover:bg-cyan-600"
            type="submit"
            value="Update account"
            onClick={()=>{
              setTimeout(()=>{
                Navigate('/admin/users')
              },2000);
            }}
          />
        </form>
      </section>
    </div>
    </div>
  );
}