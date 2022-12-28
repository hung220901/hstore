import React from 'react'
import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <>
        <div className="heading-login bg-[#f4f4f4] text-[#777777] text-sm leading-6 py-[60px] text-center">
            <span className='text-[#212529] text-2xl font-bold leading-10'>CUSTOMER LOGIN</span>
        </div>
        <div className='flex flex-wrap justify-center'> 
            <div className="basis-1/2 text-left py-24">
                <h1 className='text-[#222529] text-xl font-bold -tracking-[0.22px] leading-6'>Registered Customers</h1>
                <p className='text-[#777777] text-sm leading-6 py-4'>If you have an account, sign in with your email address.</p>
                <form>
                    <h3>Email <span className='text-red-500'>*</span></h3>
                    <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' />
                    <h3>Password <span className='text-red-500'>*</span></h3>
                    <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full'/>
                    <Link to="/login" className='text-[#222529] inline text-sm font-medium leading-6'>Forgot Your Password?</Link>
                    <button className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full my-2'>SIGN IN</button>
                    <button className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full my-2'>CREATE AN ACCOUNT</button>
                    <p className='text-red-500 text-sm'>*Required Field</p>
                </form>
            </div>
        </div>
    </>
  )
}
