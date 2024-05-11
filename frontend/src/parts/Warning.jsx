import React from 'react'
import { Link } from 'react-router-dom'
export default function Warning({label,buttonText,to}) {
 return (
    <>
    <div className='py-2 text-sm text-slate-400'>{label}</div>
    <Link className='pointer underline pl-1 cursor-pointer text-slate-400 hover:text-slate-500' to={to}>
        {buttonText}
    </Link>
    </>
  )
}