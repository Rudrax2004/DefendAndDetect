/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './style.css'
import { FaHome, FaSearch } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';
function Button() {
  const Navigate=useNavigate();
  return (
    <AwesomeButton
      onPress={()=>{Navigate('/lab1')}} // Add onClick event
      type="primary"
      className='aws-btn'
    >
      Start SQL Lab
    </AwesomeButton>
  );
}
export const homeButton=()=>{
  
  return (
    <AwesomeButton
    type="primary"
    className='aws-search'
    >
    <FaSearch className="mr-2" />
      Search
    </AwesomeButton>
  );
}
export const labButton=()=>{
  
  return (
    <AwesomeButton
    onPress={()=>{Navigate('/learn')}} // Add onClick event
    type="primary"
    className='aws-btn'
    >
    <FaHome className="mr-2" />
    <AiOutlineSearch className="mr-2" />
         
      Labs
    </AwesomeButton>
  );
}
export const pButton=()=>{
  
  return (
    <AwesomeButton
    onPress={()=>{Navigate('/phishing')}} // Add onClick event
    type="primary"
    className='aws-btn'
    >
    <FaHome className="mr-2" />
    <AiOutlineSearch className="mr-2" />
         
      start Phishing Lab
    </AwesomeButton>
  );
}


export default Button;
