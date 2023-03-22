import React, { useEffect } from 'react' 

export default function Loading() {  
  useEffect(()=>{ 
    document.body.style.overflow ='hidden'  
    return ()=>{
      document.body.style.overflow ='visible' 
    }  
  },[])
  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50'> 
        <div className='fixed top-1/2 left-1/2'>
            <div className="loader"></div>
        </div>
    </div>
  )
}
