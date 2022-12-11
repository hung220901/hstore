import { faAngleRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import Tab from './Tab'
import ThumbsGallery from './ThumbsGallery'


export default function index() { 
  return (
    <>
      <div className="mx-6 p-2.5">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse}  />
        </Link>  
        <FontAwesomeIcon icon={faAngleRight} className='mx-2'/>
        WOMEN CASUAL BAG SPRING
      </div>
      <div className='mx-10'>
        <ThumbsGallery/> 
        <Tab/>
        <RelatedProduct/>
      </div>
    </>
  )
}
