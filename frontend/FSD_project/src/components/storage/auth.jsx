/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [singleUser, setSingleUser] = useState("");
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState('');
  const [blog, setBlog] = useState("");
  const TokenAuthorization = `Bearer ${token}`;

  const storeTokenInLocal = (serverToken) => {
    setToken(serverToken);
    console.log("token by server:", serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    window.localStorage.clear();
  };

  const getSingleData = async () => {
    try {
      const Response = await fetch(`https://defendanddetect-production.up.railway.app/api/admin/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: TokenAuthorization,
        },
      });

      if (Response.ok) {
        console.log('single user id', userId);
        const data = await Response.json();
        setSingleUser(data);
        console.log('single user data : ', data);
      }
    } catch (error) {
      console.log("Error in fetching data");
    }
  }
  
  const useAuthentication = async () => {
    try {
      const Response = await fetch("https://defendanddetect-production.up.railway.app/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: TokenAuthorization,
        },
      });

      if (Response.ok) {
        const data = await Response.json();
        setUser(data.userData);
        console.log('user Data from auth  : ', data.userData);
      }
    } catch (error) {
      console.log("Error in fetching data");
    }
  }

  const getBlogs = async () => {
    try {
      const Response = await fetch("https://defendanddetect-production.up.railway.app/api/auth/blog", {
        method: "GET",
      });

      if (Response.ok) {
        const data = await Response.json();
        setBlog(data.Blogs);
        console.log('user Data from blog  : ', data.Blogs);
      }
    } catch (error) {
      console.log("Error in fetching data from blog");
    }
  }

  useEffect(() => {
    getBlogs();
    useAuthentication();

    // Delay the execution of getSingleData by 6000 milliseconds (6 seconds) and make it dependent on userId
    const delay = setTimeout(() => {
      getSingleData();
    }, 1000);

    // Clear the timeout to avoid unintended side effects
    return () => clearTimeout(delay);
  }, [userId]);

  return (
    <AuthContext.Provider value={{ setSingleUser,singleUser, userId, setUserId, TokenAuthorization, blog, user, isLoggedIn, storeTokenInLocal, logoutUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider..");
  }
  return authContextValue;
};
