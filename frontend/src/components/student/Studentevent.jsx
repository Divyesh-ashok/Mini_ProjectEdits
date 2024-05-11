import React, {useState} from 'react'
import Cards from '../../parts/Cards'
import { useEffect } from 'react';
import axios from 'axios'
import Stunav from './Stunav';
const Studentevent = () => {
  const [image,setImage]=useState([]);
  const [content,setContent]=useState([]);
  useEffect(()=>{
  const getimage=async()=>{
    console.log("hi");
    try{
      const result=await axios.get("http://localhost:7777/getposters")
      setImage(result.data)
      setContent(result.data.content)
      console.log(result.data)
    }
    catch(error){
      console.log(error)
    }
}
getimage();
},[])
  return (
    <>
    <Stunav/>
    <div className='pt-24'>
        <div className='bg-white mx-28 my-6 px-4 py-4 rounded-lg border-2 mt-12 shadow-2xl flex flex-wrap justify-center gap-8 w-196 h-full'>
          {image.map((image)=>(
          <div >
              <div class=" w-96 shadow-2xl rounded-lg bg-white border-2 my-4">
                  <a href="#">
                       <img class="rounded-t-lg" src={`http://localhost:7777/posters/${image.poster}`} alt="HI" /> 
                  </a>
                  <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{image.content.substring(0,40)}</p>
                      <button>
                      <a href={`${image.link}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          JOIN
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                      </button>
                  </div>
              </div>
          </div>

          ))}
        </div>
        </div>
    </>
  )
}


export default Studentevent