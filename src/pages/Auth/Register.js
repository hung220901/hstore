import React from 'react' 
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <>
        <div className="heading-login bg-[#f4f4f4] text-[#777777] text-sm leading-6 py-[60px] text-center">
            <span className='text-[#212529] text-2xl font-bold leading-10'>Create New Customer Account</span>
        </div>
        <div className='flex justify-evenly items-start m-20'> 
            <div className="basis-1/2 mx-10 text-[#777777]"> 
                <h1 className='text-[#222529] text-xl font-bold -tracking-[0.22px] leading-6'>Personal Information</h1> 
                <h3 className='py-2'>First Name <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' />
                <h3 className='py-2'>Last Name <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full'/>
                <button className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full mt-36'>CREATE AN ACCOUNT</button> 
            </div>
            <div className="basis-1/2 mx-10 text-[#777777]">
                <h1 className='text-[#222529] text-xl font-bold -tracking-[0.22px] leading-6'>Sign-in Information</h1> 
                <h3 className='py-2'>Email <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' />
                <h3 className='py-2'>Password <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full'/>
                <h3 className='checkPassword'>Password Strength: <span>No Password</span></h3>
                <h3 className='py-2'>Confirm Password <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full'/> 
                <Link to="/login" className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full my-2'>ALREADY HAVE AN ACCOUNT</Link>
            </div>
            
        </div>
               
    
    </>
  )
}
