import React from 'react'
import Apppbar from '../../parts/Appbar'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Adminquiz() {
    const [buttonCount, setButtonCount] = useState(0);
    const [buttons, setButtons] = useState([]);
  
    const handleAddButton = () => {
      setButtonCount(buttonCount + 1);
      setButtons([...buttons, buttonCount]);
    };
  
    return (
    <>
    <div>
    <Apppbar/>
    </div>
      <div className='py-48 flex justify-center'>
        
        <button className='bg-black rounded-full text-white size-32'onClick={handleAddButton}><b>Add quiz</b>
        <img className='bg-white size-10 mx-10' src="https://www.svgrepo.com/show/327597/add.svg" alt="" /></button>
        {buttons.map((buttonNumber) => (
          <button className='bg-black mx-2 w-32 rounded-md text-white' key={buttonNumber}>
          <Link to='/admin/newquiz'> quiz {buttonNumber}</Link>
          </button>
        ))}
      </div>
      </>
    );
  };

