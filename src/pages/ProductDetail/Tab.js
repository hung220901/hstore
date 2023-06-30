import { faCircleCheck, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 
import { useState } from 'react'
import ListReview from '../../components/Review/ListReview' 
import styles from './gallery.module.css'  
import { useSelector } from 'react-redux'
export default function Tab({product}) { 
    const  review = useSelector(state=>state.reviews.items)
    const [active , setActive ] =useState(1)
    const handleChange = (i)=>{
         setActive(i)
    }
  return (
    <div className='my-5'>
        <div  className="flex border-solid border-b-[1px] border-[#e7e7e7]">
            <div className={`p-4 uppercase font-bold cursor-pointer ${active===1 ? styles.tabActive:''} `}  onClick={()=> handleChange(1)}>
                details
            </div>
            <div className={`p-4 uppercase font-bold cursor-pointer ${active===2 ? styles.tabActive:''} `} onClick={()=> handleChange(2)}>
                reviews
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
                { review && 
                    (
                        <>
                            <h3 className='uppercase text-lg'>All review about <span className='font-bold'>{product.name}</span> </h3>
                            <ListReview product={product} />
                        </>
                    )
                } 
            </div> 
        </div>  
    </div>
  )
}
