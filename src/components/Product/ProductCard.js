import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'; 

export default function ProductCard({product}) {
  return (
    <div className="px-5 py-10">
        <div className='relative group'>
            <img className='w-full h-full' src={product.image.url} alt="" />   
            <button className="absolute top-1 right-1 
            rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white 
            m-2 invisible group-hover:visible transition-all ease-in duration-500
            opacity-50
            group-hover:opacity-100
            ">
                <FontAwesomeIcon  icon={faShoppingBag} />
            </button>
            <div className="bg-[#ff7272]
            text-white absolute 
            bottom-0  left-0  right-0 
            text-center group 
            opacity-90
            w-full h-auto indent-0
            transition-all duration-[0.25em]  ease-in 
            invisible group-hover:visible group-hover:delay-100
            group-hover:py-2 cursor-pointer
            ">
            QUICK REVIEW
            </div> 
        </div> 
        <div className="cart-bottom flex justify-between pt-1">
            <div className="item-left">
            <div className="product-name">
                {product.name}
            </div>
            <div className="text-gray-300">
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
            </div>
            <div className="product-price">${product.price}</div>
            </div>
            <div className="add-to-wishlist">
            <FontAwesomeIcon icon={faHeart} />
            </div>
        </div> 
    </div>  
  )
}
