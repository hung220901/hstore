import React, { useEffect, useMemo, useState } from 'react'
import ReviewItem from './ReviewItem'
import * as request from '../../utils/request'
import {useDispatch, useSelector} from 'react-redux'
import {getAllReview} from '../../redux/reviewSlice' 
import Rating from '../Filter/Rating'
export default function ListReview({product}) {
  const reviews = useSelector(state=>state.reviews.items) 
  const [filter, setFilter ] = useState(0)
  const dispatch = useDispatch() 
 
  const review = useMemo(() => { 
    if(filter === 0){
      return reviews.filter((rv) => rv.productId.slug === product.slug); 
    }
    else{
      return reviews.filter((rv) => { 
        return rv.productId.slug === product.slug && parseInt(rv.rating) === filter
      }  ); 
    }
  }, [reviews, product.slug, filter]);  
  



  // Call API get all review 
  useEffect(()=>{
    const fetchAllReview = async()=>{
      const res = await request.get('/review')
      dispatch(getAllReview(res.data))
    }
    fetchAllReview()
  },[dispatch])  
  return (
    <div>  
      <div className='bg-[#fffbf8] w-full h-20 flex justify-between px-10 py-5 items-center '>
        <div className='text-[#ff7272] flex flex-col '>
          <div className=''>
            <span className='text-[1.675rem] mr-1'>{product.averageRating}</span>
            <span> trên 5</span>
          </div> 
          <div> 
            <Rating status={false}/>
          </div>
        </div>
        <div className='flex gap-5 text-base cursor-pointer'>
          <div className={`bg-white px-5 py-1 border-solid border-[1px] ${filter === 0 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'} `}   onClick={()=>setFilter(0)}>All</div>
          <div className={`bg-white px-5 py-1 border-solid border-[1px] ${filter === 5 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'}`}  onClick={()=>setFilter(5)} >5 Star</div>
          <div className={`bg-white px-5 py-1 border-solid  border-[1px] ${filter === 4 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'}`}  onClick={()=>setFilter(4)}>4 Star</div>
          <div className={`bg-white px-5 py-1 border-solid border-[1px]  ${filter === 3 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'}`}  onClick={()=>setFilter(3)}>3 Star</div>
          <div className={`bg-white px-5 py-1 border-solid border-[1px]  ${filter === 2 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'}`}  onClick={()=>setFilter(2)}>2 Star</div>
          <div className={`bg-white px-5 py-1 border-solid border-[1px]  ${filter === 1 ? 'border-[#ff7272] text-[#ff7272]' : 'border-[rbga(0_0_0_0.9)]'}`}  onClick={()=>setFilter(1)}>1 Star</div>
        </div>
      </div>
      {review.length > 0 ?  
        (review.map((review, i)=>
            <ReviewItem  key={i} review={review} />  
        ))
        :
        (
          <div className=''>
            <div className='py-20 flex flex-col justify-center items-center'>
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/eac95a8ac896158642c2761a9e9cd52e.png" alt="" />
              <h1 className='mt-5'>There are no review yet</h1>
            </div>
          </div>
        ) 
      }
 
    </div>
  )
}
