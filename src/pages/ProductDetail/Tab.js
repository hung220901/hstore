import { faCircleCheck, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 
import { useState } from 'react'
export default function Tab() { 
    
    const [active , setActive ] =useState(1)
    const handleChange = (i)=>{
         setActive(i)
    }
  return (
    <div className='my-5'>
        <div  className="flex border-solid border-b-[1px] border-[#e7e7e7]">
            <div className={`p-4 uppercase font-bold cursor-pointer ${active===1 ? 'tab-active':''} `}  onClick={()=> handleChange(1)}>
                details
            </div>
            <div className={`p-4 uppercase font-bold cursor-pointer ${active===2 ? 'tab-active':''} `} onClick={()=> handleChange(2)}>
                reviews
            </div>
            <div className={`p-4 uppercase font-bold cursor-pointer ${active===3 ? 'tab-active':''} `} onClick={()=> handleChange(3)}>
                custom tab
            </div>
        </div> 
        <div className="my-5 text-sm font-normal tracking-[0.07px] text-[#777777] leading-[27px]">
            <div className={`detail ${active === 1 ? 'block' :'hidden'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                <ul className='mx-5 font-bold fa-ul'>
                    <li><FontAwesomeIcon icon={faCircleCheck} listItem size='1x' color='#21293c' /> Any Product types that You want - Simple, Configurable</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} listItem size='1x' color='#21293c' />  Downloadable/Digital Products, Virtual Products</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} listItem size='1x' color='#21293c' />  Inventory Management with Backordered items</li>
                </ul> 
                
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={`reviews ${active === 2 ? 'block' :'hidden'}`}>
                <h3 className='uppercase'>You're reviewing: <span>women casual bag spring</span> </h3>
                <div className="rating">
                    <h3>Your Rating <span className='text-red-500'>*</span></h3>
                    <div className="flex">
                        <FontAwesomeIcon icon={faStar} size='2xl'/>
                        <FontAwesomeIcon icon={faStar} size='2xl'/>
                        <FontAwesomeIcon icon={faStar} size='2xl'/>
                        <FontAwesomeIcon icon={faStar} size='2xl'/>
                        <FontAwesomeIcon icon={faStar} size='2xl'/>
                    </div>
                </div> 
                <h3>Nickname <span className='text-red-500'>*</span></h3>
                <input type="text" className='bg-white border-[#000000] border-solid border-[1px] text-[#777777] px-3 py-2 text-sm' />
                <h3>Summary <span className='text-red-500'>*</span></h3>
                <input type="text" className='bg-white border-[#000000] border-solid border-[1px] text-[#777777] px-3 py-2 text-sm' />
                <h3>Review <span className='text-red-500'>*</span></h3>
                <textarea type="text" className='block bg-white border-[#000000] border-solid border-[1px] text-[#777777] px-3 py-2 text-sm ' /> 
                <button type="submit" className='bg-[#0088cc] text-white text-sm font-bold leading-5 tracking-[0.14px] px-7 py-3 text-center my-4'>SUBMIT REVIEW</button>
            </div>
            <div className={`custom-tab ${active === 3 ? 'block' :'hidden'}`}>
                <table className="table w-full text-left">
                    <tbody>
                        <tr>
                            <th className='text-[#777777] inline text-sm font-bold leading-4  px-[7px] py-[11px] '>Clothing - Single Size Conversion (Continued)</th>
                        </tr> 
                        <tr className="border-solid border-t-[1px] border-[#e7e7e7] text-[#777777]">
                            <th  className='px-[7px] py-[11px]'>UK</th>
                            <th  className='px-[7px] py-[11px]'>18</th>
                            <th  className='px-[7px] py-[11px]'>20</th>
                            <th  className='px-[7px] py-[11px]'>22</th>
                            <th  className='px-[7px] py-[11px]'>24</th>
                            <th  className='px-[7px] py-[11px]'>26</th>
                        </tr>
                        <tr className="border-solid border-t-[1px] border-[#e7e7e7] text-[#777777]">
                            <th  className='px-[7px] py-[11px]'>European</th>
                            <th  className='px-[7px] py-[11px]'>46</th>
                            <th  className='px-[7px] py-[11px]'>48</th>
                            <th  className='px-[7px] py-[11px]'>50</th>
                            <th  className='px-[7px] py-[11px]'>52</th>
                            <th  className='px-[7px] py-[11px]'>54</th>
                        </tr>
                        <tr className="border-solid border-t-[1px] border-[#e7e7e7] text-[#777777]">
                            <th  className='px-[7px] py-[11px]'>US</th>
                            <th  className='px-[7px] py-[11px]'>14</th>
                            <th  className='px-[7px] py-[11px]'>16</th>
                            <th  className='px-[7px] py-[11px]'>18</th>
                            <th  className='px-[7px] py-[11px]'>20</th>
                            <th  className='px-[7px] py-[11px]'>22</th>
                        </tr>
                        <tr className="border-solid border-t-[1px] border-[#e7e7e7] text-[#777777]">
                            <th  className='px-[7px] py-[11px]'>Australia</th>
                            <th  className='px-[7px] py-[11px]'>8</th>
                            <th  className='px-[7px] py-[11px]'>10</th>
                            <th  className='px-[7px] py-[11px]'>12</th>
                            <th  className='px-[7px] py-[11px]'>14</th>
                            <th  className='px-[7px] py-[11px]'>16</th>
                        </tr> 
                    </tbody> 
                </table>
            </div>
        </div>  
    </div>
  )
}
