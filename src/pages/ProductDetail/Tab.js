import React from 'react' 
import { useState } from 'react'
export default function Tab() { 
    const [active , setActive ] =useState(1)
    const handleChange = (i)=>{
         setActive(i)
    }
  return (
    <div className='my-5'>
        <div  className="flex">
            <div className={`p-4 uppercase border-solid border-b-[1px] border-[#e7e7e7] font-bold  ${active===1 ? 'tab-active':''} `}  onClick={()=> handleChange(1)}>
                details
            </div>
            <div className={`p-4 uppercase border-solid border-b-[1px] border-[#e7e7e7] font-bold  ${active===2 ? 'tab-active':''} `} onClick={()=> handleChange(2)}>
                reviews
            </div>
            <div className={`p-4 uppercase border-solid border-b-[1px] border-[#e7e7e7] font-bold  ${active===3 ? 'tab-active':''} `} onClick={()=> handleChange(3)}>
                custom tab
            </div>
        </div>   
    </div>
  )
}
