import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const alnav = () => {
    const navigate=useNavigate()
    function logout(){
      localStorage.clear()
      navigate('/')
    }
  return (
    <>
    <div className='bg-black shadow-lg fixed w-full'>
    <div className='flex justify-between py-4'>
     <div className='flex'>
     <div className='text-white pl-4 font-semibold text-3xl'>Nexus</div>
     <Link className='text-slate-400 hover:text-slate-500 py-2 ps-7 px-5' to='/alumnihome'>HOME</Link>
 
     <div></div>
     </div>
     <div className='flex pr-4'>
         <div className='text-white text-2xl'>HELLO,</div>
         <div className='text-white text-2xl pe-4'>ALUMNI</div>
         <button onClick={logout} className='bg-slate-300 hover:bg-slate-500 rounded-lg font-mono'>LOGOUT</button>
     </div>
    </div>
    </div>
    </>
   
  )
}

export default alnav