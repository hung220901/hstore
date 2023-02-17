import React from 'react'
import {Link} from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className='bg-[#222529] color-[#A8A8A8] px-5 py-[80px] text-[13px]' >
      <div className="flex flex-wrap gap-5">
          <div className="text-white w-full lg:w-[30%]">
              <h3 className='text-[15px] font-bold mb-1'>SUBSCRIBE NEWSLETTER</h3>
              <p>Get all latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
          </div>
          <div className='w-full sm:flex sm:gap-5 lg:w-[66%]'>
            <div className=" flex w-full lg: ">
              <input className='border-none outline-none rounded-tl-[20px] rounded-bl-[20px] px-[30px] py-[10px] w-full' type="text" placeholder='Email Address'/>
              <button className=' rounded-tr-[20px] rounded-br-[20px] bg-[#ff7272] text-white px-5 py-[10px]'> SUBSCRIBE</button>
            </div>
            <div className="flex justify-around items-center text-white sm:w-[180px]  ">
                <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#734638] border-solid border-[#313438] border-[1px]"><FontAwesomeIcon size='lg' icon={faInstagram} /> </div>
                <div className="w-12 h-12 mx-5 flex justify-center items-center rounded-full hover:bg-[#1b9ccf] border-solid border-[#313438] border-[1px]"><FontAwesomeIcon size='lg' icon={faTwitter} ></FontAwesomeIcon></div>
                <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#39558f] border-solid border-[#313438] border-[1px]"><FontAwesomeIcon size='lg' icon={faFacebook} ></FontAwesomeIcon></div>
            </div>
          </div>
      </div>
      <div className="mt-10 flex justify-around gap-5 flex-wrap">
        <div className="flex-grow-[1] flex-shrink-[1] text-white">
          <div>
            <h3 className='text-[15px] font-bold mb-1'>ADDRESS</h3>
            <span>123 Street Name, City</span>
          </div>
          <div>
            <h3 className='text-[15px] font-bold mb-1'>PHONE</h3>
            <span>Toll Free: 023212323232</span>
          </div>
          <div>
            <h3 className='text-[15px] font-bold mb-1'>Email</h3>
            <span>hung@gmail.com</span>
          </div>
        </div>  
        <div className="flex-grow-[5] flex-shrink-[1] text-white">
          <div className=" flex justify-between gap-5 flex-wrap ">
            <div className='text-white' >
              <h3 className='text-[15px] font-bold mb-1'>My Account</h3>
              <div className="flex justify-between gap-10">
                <div className="flex flex-col">
                    <Link to='/'>About us</Link>
                    <Link to='/'>Contact us</Link>
                    <Link to='/'>My Account</Link>
                </div>
                <div className="flex flex-col">
                    <Link to='/'>Order history</Link>
                    <Link to='/'>Advanced search</Link>
                    <Link to='/'>Login</Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[15px] font-bold mb-1'>MAIN FEATURES</h3>
              <div className="flex justify-between gap-10">
                <div className="flex flex-col">
                  <Link to='/'>Super Fast Wordpress</Link>
                  <Link to='/'>Theme</Link>
                  <Link to='/'>1st Fully working Ajax</Link>
                  <Link to='/'>Theme</Link>
                  <Link to='/'>36 Unique Shop Layouts</Link>
                </div>
                <div className="flex flex-col">
                  <Link to='/'>Powerful Admin Panel</Link>
                  <Link to='/'>Mobile & Retina</Link>
                  <Link to='/'>Optimized</Link>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h3 className='text-[15px] font-bold mb-1'>WORKING DAYS/HOURS</h3>
              <span>Mon - Sun / 9:00AM - 8:00OM</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-[10px] mt-5 border-solid border-[#313438] border-t-[1px] flex-wrap">
            <span>© Porto Magneto 2021. All Rights Reserved</span>
            <img src="./payment_logo.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
