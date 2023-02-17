import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faSkype} from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  return (
    <>
      <div className='px-5 py-5'>
        <iframe title='gg-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.0823754221854!2d106.73656784742766!3d10.63238450736941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753a128b8a73b9%3A0x6a01fd490229e9ee!2zUGhhbiBWxINuIELhuqN5LCBIaeG7h3AgUGjGsOG7m2MsIE5ow6AgQsOoLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1673611633544!5m2!1svi!2s" width="100%" height="300"  style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
