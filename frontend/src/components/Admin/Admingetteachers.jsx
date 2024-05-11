import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
import Apppbar from '../../parts/Appbar'
export default function Admingetteachers() {
 
    const [teacher,setTeacher]=useState([])
    useEffect(() =>{
      console.log("hi")
       const fetchteachers=async()=>{  try {
         console.log("hey")
         const response=await axios.get("http://localhost:7777/teacher");
         setTeacher(response.data)
         console.log(response.data)
         console.log(response);
     } catch (error) {
       console.log(error);
    }}
    fetchteachers(); 
     
     },[])
     async function deleteteacher(id){
      const res=await axios.delete("http://localhost:7777/teacher/"+id);
 }
  return (
    <>
      <Apppbar/>
      <div className='py-24'>
        <div className=" border-black w-fit inline-flex gap-32">
                  <h1 className=' text-xl w-1/5'>{"Name:"}</h1>
                  <h1 className='text-xl w-1/5'>{"Email:"}</h1>
                  <h1 className='text-xl w-1/5'>{"Joindate:"}</h1>
                  <h1 className='text-xl w-1/5'>{"subject: "}</h1>
      </div>
    {
      teacher.map((teacher)=>(
            <div className="flex py-4 space-x-4 justify-center">
              <div className="bg-slate-200 w-full inline-flex gap-4">
                <h1 className='text-xl w-1/5'>{teacher.firstname+" "+teacher.lastname}</h1>
                <h1 className='text-xl w-1/5'>{teacher.email}</h1>
                <h1 className='text-xl w-1/5'>{teacher.joindate}</h1>
                <h1 className='text-xl w-1/5'>{teacher.subject}</h1>
                <div className="w-full py-2 flex justify-end">
                  <button label={"DELETE"} onClick={(e)=>{deleteteacher(teacher._id)}} className=' w-20 text-white bg-black hover:bg-slate-800 rounded-md py-1.5 mx-4 mb-2'>DELETE</button>
                </div>
              </div>

            </div>
       
      ))
    }
    </div>
    </>
  )
}
