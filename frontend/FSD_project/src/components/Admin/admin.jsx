/* eslint-disable no-unused-vars */
import { FaHome, FaRegListAlt, FaUser } from 'react-icons/fa';
import { NavLink,Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footers/footer';
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode'
import { useEffect, useState } from 'react';
export const Admin = () => {
    
    const [initialLoad, setInitialLoad] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Redirect to /admin/users only if it's the initial load and the current route is /admin
        if (initialLoad && location.pathname === '/admin') {
            navigate('/admin/users');
            setInitialLoad(false); // Set initialLoad to false after redirection
        }
    }, [initialLoad, location.pathname, navigate]);

    return (
        <div className="w-full h-screen">
            <div >
                <div className=" container flex h-screen bg-slate-700 rounded-lg">
            <div className="w-64 bg-gradient-to-b from-gray-500 to-gray-900 rounded-lg p-4 shadow-md h-full">
                <div className="text-white rounded-lg  bg-gray-600 pb-1 text-center font-extrabold text-2xl mb-4"
                >Admin Panel</div>
                <ul className="flex flex-col font-medium space-y-4">
                    <li>
                        <NavLink to={"/admin/users"} className=" text-white flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaUser className="text-xl" /> <span>Users</span>
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to={"/"} className="text-white flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaHome className="text-xl" /> <span>Home</span>
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to={"contacts"} className="text-white flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <FaHome className="text-xl" /> <span>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1  bg-gray-400 bg-opacity-75 rounded-lg p-4 h-full">
                <Outlet />
            </div>
        </div>
        </div>
        </div>
    );
};
