import React from 'react'

export default function Loading() { 
  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50'> 
        <div className='fixed top-1/2 left-1/2'>
            <div className="loader"></div>
        </div>
    </div>
  )
}
