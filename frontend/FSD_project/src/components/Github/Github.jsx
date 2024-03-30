/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import Header from "../Headers/header";
import Footer  from "../Footers/footer";
function GitHub() {
    // const {followers}= useLoaderData();    
//<-------this is traditional way of data fetching.....-------->
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[data])
    const { followers, error } = useLoaderData();

    if (error) {
      // Handle error
      return <div>Error loading GitHub data</div>;
    }
  
    return (
       <>
       <Header/>
        <div className="bg-gray-600 text-white text-center text-3xl p-4">
          Github followers:{followers}
        </div>
       <Footer/>
       </> 
    )
}
export default GitHub
export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}
