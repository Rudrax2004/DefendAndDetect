// Logout.jsx

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */

import { useEffect } from "react";
import { Navigate} from "react-router-dom";
import { useAuth } from '../storage/auth.jsx';
function Logout(){  
  const { logoutUser ,isLoggedIn} = useAuth();
  useEffect(() => {
    console.log("Logout useEffect - Before logoutUser");
    console.log(isLoggedIn);
    logoutUser();
    console.log("Logout useEffect - After logoutUser");
  }, [logoutUser]);

  return  <Navigate to="/"/>;
}

export default Logout;
