/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../storage/auth";
export const AdminContacts = () => {
    const { TokenAuthorization } = useAuth();

    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(10); // Change this value to adjust items per page
    let isPagination=false;
    const getAllContactData = async () => {
        try {
            const Response = await fetch('https://defendanddetect-production.up.railway.app/api/admin/contacts', {
                method: "GET",
                headers: {
                    "Authorization": TokenAuthorization,
                },
            });

            const data = await Response.json();
            setContacts(data);
            console.log(`contacts ${data}`);
        } catch (error) {
            console.log("Unable to retrieve data for admin");
        }
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset pagination to first page when searching
    };

    // Logic to calculate pagination
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts.filter(contact =>
        contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(indexOfFirstContact, indexOfLastContact);

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        isPagination=true;
    };

    useEffect(() => {
        getAllContactData();
    }, []);

    return (
            <div className="login px-10 flex flex-co">
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
                                        placeholder="Search Contacts"
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

                            <div className="border-2 rounded-lg overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-0 pe-0">
                                                NAME
                                            </th>
                                            <th scope="col" className=" text-center uppercase">
                                                EMAIL
                                            </th>
                                            <th scope="col" className=" text-center uppercase">
                                                MOBILE NO
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {currentContacts.map((contact, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'text-slate-500 bg-gray-200' : 'text-slate-700 bg-gray-300'}>
                                                <td className="py-2 px-4 border-b">{contact.username}</td>
                                                <td className="py-2 px-4 border-b">{contact.email}</td>
                                                <td className="py-2 px-4 border-b">{contact.phone}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination controls */}
                            {isPagination ?
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
                                    disabled={indexOfLastContact >= contacts.length}
                                >
                                    Next
                                </button>
                            </div>:<></>}
                           
                        </div>
                    </div>
                </div>
            </div>
    );
};
