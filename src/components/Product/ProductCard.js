import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag , faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'; 
import Rating from '../Filter/Rating'
import QuickView from '../QuickViewProduct/QuickView';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function ProductCard({product, onAddWishlist, favorite}) { 
    const [showQuickView, setShowQuickView] = useState(false)  
    const [slugQV, setSlugQV] = useState('')   
    const user = useSelector(state =>state.auth.users) 
    const dispatch = useDispatch()
    const navigate = useNavigate() 


    const handleToggleWishlist  = (e)=>{
        onAddWishlist(e,product)
    }

    const handleAddToCart = (e,prod) =>{
        e.preventDefault()
        if(!user){
          navigate('/login')
          toast.warning('Please login to use cart!')
        }
        dispatch(addToCart(prod))
      }
    
       
    const handleShow =(e, slug) =>{  
        e.preventDefault()  
        setShowQuickView(!showQuickView)
        setSlugQV(slug)
      } 

  return (
    <>
        <div className="px-5 py-10">
            <div className='relative group'>
                <img className='w-[200px] h-auto' src={product.image.url} alt="" />   
                <button className="absolute top-1 right-1
                    rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white
                    m-2 invisible group-hover:visible
                    transition-all ease-in duration-200
                    opacity-50
                    group-hover:opacity-100
                    " 
                    onClick={(e) => handleAddToCart(e,product)}
                >
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
                    group-hover:py-2 cursor-pointer"
                    onClick={(e)=>handleShow(e, product.slug)}
                >
                QUICK REVIEW
                </div> 
            </div> 
            <div className="cart-bottom flex justify-between pt-1">
                <div className="item-left">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="text-gray-300">
                    <Rating data={product.averageRating} size='1x'/>
                </div>
                <div className="product-price">${product.price}</div>
                </div>
                <div className="add-to-wishlist p-3" onClick={handleToggleWishlist}>
                <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} color={favorite ? 'red':'black'} />
                </div>
            </div> 
        </div>  
        {showQuickView && <QuickView slug={slugQV} show={showQuickView} onClose={()=>setShowQuickView(false)}  />} 
    </>
  )
}
