import React from 'react'

export default function Button({label,onClick}) {
 return (
    <>
    <button onClick={onClick} type="button" className="w-full text-white bg-black hover:bg-slate-800 rounded-md py-1.5 mb-2">{label}</button>
    </>
  )
}
