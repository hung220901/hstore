import React  from 'react'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
export default function DeleteProduct({onClose , mount, product}) {  
  const handleOverlay = e =>{
      if(e.target === e.currentTarget){
          onClose()
      }
  }   
   
  return (
    <div className=' fixed bg-[rgba(68,70,69,0.8)]  !z-[99] left-0 top-0 right-0 bottom-0  w-full  h-full  overflow-hidden' onClick={handleOverlay}>
      <div className={` fixed left-[30%] top-[40%] bottom-[40%] right-[30%] bg-white shadow-lg z-[99]  overflow-y-auto 
          rounded-lg ${mount ? "transition-opacity duration-500 ease-linear" : "opacity-0"}`}> 
        <div className="flex flex-col justify-center items-center h-full text-center">   
          <h1 className='w-full'>Are you sure to delete {product.name}?</h1>  
          <div className=" mt-5 w-full flex gap-5 justify-center">
            <button type="submit" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onClose}>Cancel</button>
          </div> 
        </div> 

        <div className='absolute top-2 right-2 w-10 h-10 flex items-center justify-center  hover:bg-slate-300 rounded-full ' onClick={onClose}>
          <FontAwesomeIcon icon={faMultiply} />
        </div>        

    </div>
  </div>
  )
}
