import { faAngleRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import Tab from './Tab'
import ThumbsGallery from './ThumbsGallery'
import * as request from '../../services/productServices'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart, getProductsSuccess } from '../../redux/productSlice'

export default function ProductDetail() { 
  const params = useParams(); 
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.products) 
  console.log(product);
  useEffect(()=>{
    const fetchOneProduct = async () =>{
      dispatch(getProductsStart()) 
      const res = await request.getProductBySlug(params.slug)  
      if(res){ 
        dispatch(getProductsSuccess(res)) 
      }
    }
    fetchOneProduct()
  },[])


  return (
    <>
      <div className="mx-6 p-2.5 uppercase">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse}  />
        </Link>  
        <FontAwesomeIcon icon={faAngleRight} className='mx-2'/>
        {product.name}
      </div>
      <div className='mx-10'>
        <ThumbsGallery /> 
        <Tab/>
        <RelatedProduct/>
      </div>
    </>
  )
}
