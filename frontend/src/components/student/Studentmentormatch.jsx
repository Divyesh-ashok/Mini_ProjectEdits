import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../parts/Button'
import Stunav from './Stunav'
export default function alumni() {
    const navigate=useNavigate()
     const [alumnis,setAlumnis]=useState([])
    const [filter,setFilter]=useState("")
    axios.defaults.withCredentials=true
     useEffect(()=>{
        axios.get("http://localhost:7777/studentverify").then(r=>{
            console.log('r=',r)
            if(r.data==1)
              {
                  axios.get("http://localhost:7777/alumniconnect?filter="+filter)
                    .then(response=>{setAlumnis(response.data.alumnis)})
                    console.log(filter)
              }
              else{
                navigate('/')
              }
            });
        
    },[filter])
  return (
    <>
    <Stunav/>
    <div className='pl-14 pt-20 font-bold text-2xl '>SEARCH ALUMINI WITH SPECIALIZATION</div>
    <div className="my-2 mx-14 flex">
            <input onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Search alumni..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            <button type="button" className="text-white bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 ml-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
        </div>
        <div className='pt-6 px-3'>
            {alumnis.map(alumnis => <Alumni alumnis={alumnis} />)}
        </div>
    </>
  )
}
function Alumni({alumnis}) {
  const navigate = useNavigate();
   console.log(alumnis)
  return <div className="flex justify-between bg-slate-400 my-3 rounded-md h-16">
      <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex pl-2 pb-2 justify-between mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl p-3">
               {alumnis.firstname[0]}
              </div>
          </div>
          <div className="flex flex-col justify-center h-full px-24">
              <div>
                  {alumnis.firstname}{" "}{alumnis.lastname}
              </div>
          </div>
          <div className="flex flex-col justify-center h-full pl-8 px-24">
              <div>
                  {alumnis.specialization}
              </div>
          </div>
          <div className="flex flex-col justify-center h-full pl-8 px-24">
              <div>
                contact  :
                  {alumnis.contactdetails}
              </div>
          </div>
      </div>

      <div className="flex flex-col justify-center h-full">
         
      </div>
      
  </div>
  
}
