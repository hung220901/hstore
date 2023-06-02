import { faAngleRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import Tab from './Tab'
import ThumbsGallery from './ThumbsGallery'
import * as request from '../../services/productServices'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart, getProductsSuccess } from '../../redux/productSlice'
import Loading from '../../components/Loading/Loading'
export default function ProductDetail() { 
  const params = useParams(); 
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)  
  const [product, setProduct] = useState({})


  useEffect(()=>{ 
    if(Object.keys(products).length === 0){ 
      const fetchOneProduct = async () =>{ 
        const res = await request.getAllProduct()  
        if(res){   
          setProduct(res.find(prod => prod.slug === params.slug))  
        }
      }
     fetchOneProduct()   
    }
    else{
      setProduct(products.find(prod => prod.slug === params.slug))  
    }
  },[params.slug]) 

  return (
    <>
      {  !product && <Loading />  }     
            <div className="mx-6 p-2.5 uppercase">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse}  />
              </Link>  
              <FontAwesomeIcon icon={faAngleRight} className='mx-2'/>
              {product.name}  
            </div>
            <div className='mx-10'>
              <ThumbsGallery product={product}/> 
              <Tab product={product}/>
              <RelatedProduct product={product}/>
            </div> 
  
    </> 
  )
}
