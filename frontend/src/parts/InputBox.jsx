import React from 'react'

export default function InputBox({label,placeholder,onChange,type}) {
  return (
    <>
    <div className='text-sm text-black font-medium text-left py-2'>{label}</div>
    <input onChange={onChange} placeholder={placeholder} type={type} className="rounded-md w-full px-2 py-1 border  border-slate-200"/>
    </>
  )
}
