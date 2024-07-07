import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
export default function Tenav() {
    const navigate=useNavigate()
    function logout(){
        axios.get("http://localhost:7777/logout").then(r=>{
            console.log('logout r=',r)
            if(r.data===1)  
              {
                localStorage.clear()
                navigate('/')
              }
              else{
                alert('Cannot logout')
              }
            })

    }
  return (
  <>
   <div className='bg-black shadow-lg fixed w-full'>
   <div className='flex justify-between py-4'>
    <div className='flex'>
    <div className='text-white pl-4 font-semibold text-3xl  mx-2'>Nexus</div>
    {/* <Link className='text-slate-400 hover:text-slate-500 py-2 ps-7 px-5' to='/studentmagazine'>magazine upload</Link> */}
    <Link className='text-white hover:text-black py-2 px-5 hover:bg-white rounded-lg' to='/teachhome'>HOME</Link>
    <Link className='text-white hover:text-black py-2 px-5 hover:bg-white rounded-lg' to='/teacherstudymaterials'>uploadstudymaterial</Link>
    

    <div></div>
    </div>
    <div className='flex pr-4'>
        <div className='text-white text-xl pt-1'>HELLO,</div>
        <div className='text-white text-xl pt-1 pe-4'>{localStorage.getItem("firstname")}</div>
        <button onClick={logout} className='bg-slate-300 hover:bg-slate-500 rounded-lg font-mono px-4 font-thin'>LOGOUT</button>
    </div>
   </div>
   </div>
  
  </>
  )
}
