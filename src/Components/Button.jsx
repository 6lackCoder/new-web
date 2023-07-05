import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className=" w-32  h-10 bg-[#ff5a05] font-medium text-xm text-white border-slate-400 border-1">{children}</button>
    </div>
  )
}

export default Button