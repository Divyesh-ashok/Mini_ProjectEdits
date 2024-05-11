import React, { useState } from 'react'
//import github from '../images/github.jpg'

import { useEffect } from 'react';
import axios from 'axios'

const Cards = () => {
    const [image,setImage]=useState(null);
    useEffect(()=>{getimage()},[]);
    const getimage=async()=>{
        const result=await axios.get("http://localhost:7777/getposters")
        console.log(result.data)
    }
  return (
    <div >
        <div className=" w-96 shadow-2xl rounded-lg bg-white border-2 my-4 h-96">
            {image==null?"":image.map(data=>{
            return(
                <>
            <a href="#"> 
                {/* <img class="rounded-t-lg" src=`../../../backend/posters/${data.filename}` alt="HI" /> }
             */} </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Content:{data.content}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Register
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
                </>
                )
            })} 
        </div>
    </div>
  )
}

export default Cards