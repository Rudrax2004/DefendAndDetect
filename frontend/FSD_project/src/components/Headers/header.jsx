/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-children-prop */
// /* eslint-disable no-unused-vars */

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { useAuth } from '/src/components/storage/auth.jsx';
// import DropDownMenu from './example';

// export default function Header() {
//   const { user, isLoggedIn } = useAuth();

//   return (
//     <header>
//       <nav className="z-50 relative px-4 lg:px-8 py-3 rounded-lg bg-transparent backdrop-blur-sm backdrop-brightness-90">
//         <div className="flex items-center justify-between mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img
//               src="/photos/logo.png"
//               className="h-16"
//               alt="Logo"
//             />
//             <p className="text-lg text-gray-400 font-semibold ml-3 mr-3">DEFEND & DETECT</p>
//           </Link>

//           <div className="hidden lg:flex items-center lg:order-1">
//             <ul className="flex flex-col px-2 py-2 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) => `
//                     block py-2 pr-4 pl-3 duration-200 
//                     ${isActive ? 'text-cyan-600' : 'text-gray-500'}
//                     border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
//                   `}
//                 >
//                   Home
//                 </NavLink>
//               </li>

//               <li className="pl-2 w-18  h-3">
//                 <DropDownMenu />
//               </li>
              
//               <li>
//                 <NavLink
//                   to="/blog"
//                   className={({ isActive }) => `
//                     block py-2 pr-4 pl-3 duration-200 
//                     ${isActive ? 'text-cyan-600' : 'text-gray-500'}
//                     border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
//                   `}
//                 >
//                   Blogs
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) => `
//                     block py-2 pr-4 pl-3 duration-200 
//                     ${isActive ? 'text-cyan-600' : 'text-gray-500'}
//                     border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
//                   `}
//                 >
//                   About
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) => `
//                     block py-2 pr-4 pl-3 duration-200 
//                     ${isActive ? 'text-cyan-600' : 'text-gray-500'}
//                     border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
//                   `}
//                 >
//                   Contact
//                 </NavLink>
//               </li>

//               {user.isAdmin ? (
//                 <li>
//                   <NavLink
//                     to="/admin"
//                     className={({ isActive }) => `
//                       block py-2 pr-4 pl-3 duration-200 
//                       ${isActive ? 'text-cyan-600' : 'text-gray-500'}
//                       border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
//                     `}
//                   >
//                     Admin Panel
//                   </NavLink>
//                 </li>
//               ) : (
//                 <></>
//               )}
//             </ul>
//           </div>

//           <div className="flex items-center lg:order-4">
//   {isLoggedIn ? (
//     <Link
//       to="/logout"
//       className="ml-2 text-white bg-cyan-700 hover:bg-cyan-800 hover:text-gray-400 focus:ring-4 focus:ring-grey-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
//     >
//       Log out
//     </Link>
//   ) : (
//     <>
//       <Link
//         to="/login"
//         className="text-gray-200 hover:ring-2 hover:text-cyan-200 focus:ring-3 focus:ring-green-200 font-medium rounded-lg text-md px-3 ml-2  md:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
//       >
//         Login
//       </Link>
//       <Link
//         to="/register"
//         className="ml-2 text-white hover:text-white bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
//       >
//         Get started
//       </Link>
//     </>
//   )}
// </div>

//         </div>
//       </nav>
//     </header>
//   );
// }
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '/src/components/storage/auth.jsx';
import DropDownMenu from './example';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const { user, isLoggedIn } = useAuth();
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

  useEffect(() => {
    const handleResize = () => {
      setIsNavShowing(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    }
  };

  return (
    <div className='mb-20 container nav_container'>
    <nav className="z-100 rounded-lg bg-transparent backdrop-blur-sm backdrop-brightness-90">
      <div className="flex justify-between mx-auto max-w-screen-xl">
        <Link to="/" className="nav_logo">
          <img
            src="/photos/logo.png"
            className="h-16"
            alt="Logo"
          />
        </Link>
          <p className="text-lg  text-gray-400 font-semibold ml-3 mt-5 ">DEFEND & DETECT</p>

        <div className="hidden lg:flex items-center ">
          <ul className="flex flex-col px-6 py-2 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                  block py-2 pr-4 pl-3 duration-200 
                  ${isActive ? 'text-cyan-600' : 'text-gray-500'}
                  border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
                `}
              >
                Home
              </NavLink>
            </li>

            <li className="pl-2 w-18  h-3">
              <DropDownMenu />
            </li>
            
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => `
                  block py-2 pr-4 pl-3 duration-200 
                  ${isActive ? 'text-cyan-600' : 'text-gray-500'}
                  border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
                `}
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `
                  block py-2 pr-4 pl-3 duration-200 
                  ${isActive ? 'text-cyan-600' : 'text-gray-500'}
                  border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
                `}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  block py-2 pr-4 pl-3 duration-200 
                  ${isActive ? 'text-cyan-600' : 'text-gray-500'}
                  border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
                `}
              >
                Contact
              </NavLink>
            </li>

            {user.isAdmin ? (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) => `
                    block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? 'text-cyan-600' : 'text-gray-500'}
                    border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0
                  `}
                >
                  Admin Panel
                </NavLink>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>

        <div className="flex items-center lg:order-4">
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="ml-2 text-white bg-cyan-700 hover:bg-cyan-800 hover:text-gray-400 focus:ring-4 focus:ring-grey-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Log out
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-200 hover:ring-2 hover:text-cyan-200 focus:ring-3 focus:ring-green-200 font-medium rounded-lg text-md px-3 ml-2  md:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="nav_toggle-button ml-2 text-white hover:text-white bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
}
