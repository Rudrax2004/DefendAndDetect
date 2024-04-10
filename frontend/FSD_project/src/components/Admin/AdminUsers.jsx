/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../storage/auth";
import { NavLink } from 'react-router-dom';

export const AdminUsers = () => {
    const { TokenAuthorization } = useAuth();

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10); // Change this value to adjust items per page

    const getAllUserData = async () => {
        try {
            const Response = await fetch('https://defendanddetect-production.up.railway.app/api/admin/users', {
                method: "GET",
                headers: {
                    "Authorization": TokenAuthorization,
                },
            });

            const data = await Response.json();
            setUsers(data);
            console.log(`users ${data}`);
        } catch (error) {
            console.log("not get data for admin");
        }
    }

    const deleteUser = async (id) => {
        try {
            console.log(`user id :${id}`);
            const Response = await fetch(`https://defendanddetect-production.up.railway.app/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": TokenAuthorization,
                },
            });
            if (Response.ok) {
                console.log("response received...");
                const deletedUser = await Response.json();
                setUsers(prevUsers => prevUsers.filter(user => user._id !== deletedUser._id));
                console.log(`User with id ${id} deleted successfully`);
            } else {
                console.log('Delete operation failed');
            }
        } catch (error) {
            console.log("Error during delete operation:", error);
        }
    };

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset pagination to first page when searching
    };

    // Logic to calculate pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(indexOfFirstUser, indexOfLastUser);

    useEffect(() => {
        getAllUserData();
    }, []);

    return (
        <>
            <div className="px-5 flex flex-co">
                {/* Search bar */}
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border-2 rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                            {/* Search input */}
                            <div className="py-3 px-4">
                                <div className="relative max-w-xs">
                                    <label htmlFor="hs-table-with-pagination-search" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        id="hs-table-with-pagination-search"
                                        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="Search Users"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                        <svg
                                            className="h-4 w-4 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Table */}
                            <div className="login border-2 rounded-lg  overflow-hidden">
                                <table className="min-w-full  divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-0  pe-0">
                                                NAME
                                            </th>
                                            <th scope="col" className=" text-center  uppercase">
                                                EMAIL
                                            </th>

                                            <th scope="col" className=" text-center  uppercase">
                                                MOBILE NO
                                            </th>
                                            <th scope="col" className="text-center uppercase">
                                                update
                                            </th>
                                            <th scope="col" className=" text-center uppercase">
                                                delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {currentUsers.map((currUser, index) => (
                                            <tr key={index} className={index % 2 === 0 ? ' text-slate-500 bg-gray-200' : 'text-slate-700 bg-gray-300'}>
                                                <td className="py-2 px-4 border-b">{currUser.username}</td>
                                                <td className="py-2 px-4 border-b">{currUser.email}</td>
                                                <td className="py-2 px-4 border-b">{currUser.phone}</td>
                                                <td className="py-2 px-4 border-b">
                                                    <NavLink
                                                        to={`/update/${currUser._id}`}
                                                        className="bg-green-600 text-white py-1 px-2 rounded focus:outline-double focus:shadow-md transition duration-300 hover:bg-green-700"
                                                    >
                                                        Edit
                                                    </NavLink>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <button
                                                        onClick={() => deleteUser(currUser._id)}
                                                        className="bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300 hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination controls */}
                            <div className="flex justify-end p-4">
                                <button
                                    className="text-white flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                                    onClick={() => handleChangePage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button
                                    className="text-white flex items-center space-x-2 py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                                    onClick={() => handleChangePage(currentPage + 1)}
                                    disabled={indexOfLastUser >= users.length}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
