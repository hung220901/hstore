import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faSkype} from '@fortawesome/free-brands-svg-icons';
import Map from '../../components/GoogleMap/Map'
export default function Contact() {
  return (
    <>
      <div className='px-5 py-5'>
        <div className='w-full h-[50vh]'><Map/> </div>
        <div className="content text-[#777777] md:flex md:justify-start gap-5 ">
          <div className="send-msg md:flex md:justify-between md:basis-3/4">
            <div className='md:flex-1 md:mr-5'>
              <h2 className='text-xl'>Write <span className='font-bold text-xl'>Us</span></h2>
              <div className="label-name">Name <span className="text-red-500">*</span></div>
              <input type="text" className='border-[1px] border-solid border-[#ccc] w-full outline-none px-3 py-2' name="Name" id="" />
              <div className="label-name">Email <span className="text-red-500">*</span></div>
              <input type="text" className='border-[1px] border-solid border-[#ccc] w-full outline-none px-3 py-2' name="Email" id="" />
              <div className="label-name">Phone Number <span className="text-red-500">*</span></div>
              <input type="text" className='border-[1px] border-solid border-[#ccc] w-full outline-none px-3 py-2' name="Phone" id="" />
              <div className="text-white bg-[#ff7272] px-4 py-2 my-2 w-full hidden md:inline-block text-center">SUBMIT</div>
            </div>
            <div className=''>
              <div className="label-name">What's on your mind? <span className="text-red-500">*</span></div>
              <textarea name="" id="" cols="30" rows="10" className='border-[1px] border-solid border-[#ccc] w-full outline-none px-3 py-2'></textarea>
              <div className="text-white bg-[#ff7272] px-4 py-2 my-2 w-full md:hidden text-center">SUBMIT</div>
            </div>
          </div>
          <div className="contact-info">
            <h2 className='text-xl'>Contact <span className='font-bold text-xl'>Details</span></h2>
            <div className='info-box flex gap-5 mb-5'>
              <div className="w-[40px] h-[40px] rounded-lg bg-[#ff7272] flex justify-center items-center text-white">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              <span> 035232323232</span>
            </div>
            <div className='info-box flex gap-5 mb-5'>
              <div className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-[#ff7272] relative text-white">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              <span>035232323232</span>
            </div>
            <div className='info-box flex gap-5 mb-5'>
              <div className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-[#ff7272] relative text-white">
                <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
              </div>
              <div className='flex-col'>
                <span className='block'> 035232323232</span> 
                <span className='block'> 035232323232</span> 
              </div>
            </div>
            <div className='info-box flex gap-5 mb-5'>
              <div className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-[#ff7272] relative text-white">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </div>
              <span> 035232323232</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
