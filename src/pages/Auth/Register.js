import React, { useState } from 'react' 
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import * as request from '../../services/authServices'
import LGoogle from '../../components/GoogleAuth/LoginGoogle'




export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()  

    const handleRegister = async ()=>{
        try {
            const newUserData = {
                'name':firstName+' '+lastName,
                email,
                password,
            } 
            const res = await request.register(newUserData) 
            const {token, userName } = res.data;
            localStorage.setItem("token",res.accessToken)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
     

  return (
    <>
        <div className="heading-login bg-[#f4f4f4] text-[#777777] text-sm leading-6 py-[60px] text-center">
            <span className='text-[#212529] text-2xl font-bold leading-10'>Create New Customer Account</span>
        </div>
        <div className='flex justify-evenly items-start mx-20 mt-20'> 
            <div className="basis-1/2 mx-10 text-[#777777]"> 
                <h1 className='text-[#222529] text-xl font-bold -tracking-[0.22px] leading-6'>Personal Information</h1> 
                <h3 className='py-2'>First Name <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' onChange={e=>setFirstName(e.target.value)}/>
                <h3 className='py-2'>Last Name <span className='text-red-500'>*</span></h3>
                <input type="text" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' onChange={e=>setLastName(e.target.value)}/>
                <button className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full mt-[122px]' onClick={handleRegister}>CREATE AN ACCOUNT</button>  
            </div>
            <div className="basis-1/2 mx-10 text-[#777777]">
                <h1 className='text-[#222529] text-xl font-bold -tracking-[0.22px] leading-6'>Sign-in Information</h1> 
                <h3 className='py-2'>Email <span className='text-red-500'>*</span></h3>
                <input type="email" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' onChange={e=>setEmail(e.target.value)} />
                <h3 className='py-2'>Password <span className='text-red-500'>*</span></h3>
                <input type="password" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' />
                <h3 className='checkPassword'>Password Strength: <span>No Password</span></h3>
                <h3 className='py-2'>Confirm Password <span className='text-red-500'>*</span></h3>
                <input type="password" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' onChange={e=>setPassword(e.target.value)}/> 
                <Link to="/login" className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full my-2'>ALREADY HAVE AN ACCOUNT</Link>
            </div>
            
        </div>
        <div className='flex justify-center items-center py-5'>
            <hr className='text-center w-full mx-60 leading-6' />
        </div>
        <div className='py-2 flex justify-center items-center mx-60 mb-20'>
            <LGoogle />
        </div>
               
    
    </>
  )
}
