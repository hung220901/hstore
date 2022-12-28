import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

export default function ForgotPassword() {
    const [verify, setVerify] = useState({isVerify: false})
    function onChange() {
        setVerify({isVerify: true}) 
    }
       
  return (
    <>
        <div className="heading-login bg-[#f4f4f4] text-[#777777] text-sm leading-6 py-[60px] text-center">
            <span className='text-[#212529] text-2xl font-bold leading-10'>Forgot Your Password?</span>
        </div>
        <div className='flex flex-wrap justify-center'> 
            <div className="basis-1/2 text-left py-24"> 
                <p className='text-[#777777] text-sm leading-6 py-4'>Please enter your email address below to receive a password reset link.</p>
                <form>
                    <h3>Email <span className='text-red-500'>*</span></h3>
                    <input type="email" className='border-solid border-[1px] border-[#e7e7e7] outline-none py-2 px-3 inline-block text-sm text-[#777777] leading-8 w-full' required />
                    <ReCAPTCHA
                        sitekey="6LebJrMjAAAAANnsWAsbY8QiYr5yaZwEpKFVwaCR"
                        onChange={onChange}
                        className="py-2"
                    />
                    <button className='block bg-[#222529] text-white font-bold -tracking-[0.24px] leading-[22px] text-center px-[14px] py-4 w-full my-2 disabled:bg-gray-400'
                    disabled={!verify.isVerify}
                    >RESET MY PASSWORD</button>
                </form>
            </div>
        </div>
    </>
  )
}
