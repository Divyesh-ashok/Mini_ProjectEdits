import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
import Apppbar from '../../parts/Appbar'
import { useNavigate } from 'react-router-dom'
export default function Admingetalumni() {
  const [alumni,setAlumni]=useState([])
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
  useEffect(() =>{
    axios.get("http://localhost:7777/adminverify").then(r=>{
      console.log('r=',r)
      if(r.data===1)
        {
              console.log("hi")
              const fetchAlumnis=async()=>{  try {
                console.log("hey")
                const response=await axios.get("http://localhost:7777/alumni");
                setAlumni(response.data)
                console.log(response.data)
                console.log(response);
            } catch (error) {
              console.log(error);
            }}
            fetchAlumnis(); 
        }
        else{
          navigate('/')
        }
      });
   
   },[])
   async function deletealumni(id){
        const res=await axios.delete("http://localhost:7777/alumni/"+id);
   }
  return (
    <>
      <Apppbar/>
      <div className='py-24'>
              <div className="border-black w-fit inline-flex gap-32">
                <h1 className='text-xl w-1/5'>Name:</h1>
                <h1 className='text-xl w-1/5'>Email:</h1>
                <h1 className='text-xl w-1/5'>Specialization:</h1>
      </div>
    {
      alumni.map((alumni)=>(
           
             <div className='flex py-4 space-x-4 justify-center w-full'>
             <div className='bg-slate-200 w-full inline-flex gap-4'>
                <h1 className='text-xl w-1/5'>{alumni.firstname+" "+alumni.lastname}</h1>
                <h1 className='text-xl w-1/5'>{alumni.email}</h1>
                <h1 className='text-xl w-1/5'>{alumni.specialization}</h1>
               
                <div className="w-full py-2 flex justify-end">
                  <button label={"DELETE"} onClick={(e)=>{deletealumni(alumni._id)}} className='w-20 text-white bg-black hover:bg-slate-800 rounded-md py-1.5 mx-4 mb-2'>DELETE</button>
                </div>
                </div>
                </div>
       
      ))
      
    
    }
      </div>
    </>
  )
}