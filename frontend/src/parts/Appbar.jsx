import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Apppbar() {
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
    <Link className='text-slate-400 hover:text-slate-500 py-2 ps-7 px-5' to='/adminhome'>HOME</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 ps-7 px-5' to='/adminstudents'>Students</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 px-5' to='/adminteachers'>Teachers</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 px-5' to='/adminalumni'>Alumni</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 px-5' to='/adminmagazine'>Magazine</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 px-5' to='/admin/newquiz'>Createquiz</Link>
    <Link className='text-slate-400 hover:text-slate-500 py-2 px-5' to='/admin/newevent'>CreateEvent</Link>

    <div></div>
    </div>
    <div className='flex pr-4'>
        <div className='text-white text-2xl'>HELLO,</div>
        <div className='text-white text-2xl pe-4'>Admin</div>
        <button onClick={logout} className='bg-slate-300 hover:bg-slate-500 rounded-lg font-mono'>LOGOUT</button>
    </div>
   </div>
   </div>
   
  
   </>
  )
}