import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  * as req from '../../../utils/request'
import {getAllReview} from '../../../redux/reviewSlice' 
export default function Review() {
  const dispatch = useDispatch() 
  const review = useSelector(state=>state.reviews.items)   
 

  useEffect(()=>{
    const fetchApi = async ()=>{
      try { 
        const result = await req.get('/review');     
        dispatch(getAllReview(result.data)) 
      } catch (error) { 
        // dispatch(getOrdersFailure(error))
      } 
    }
    review?.length === 0 && fetchApi()
  },[dispatch])


  return (
    <div className="mt-[85px] px-[1.5rem] py-[2rem] min-h-[calc(100vh - 90px)] ml-[70px] -mb-[5%]">
    <div className="mb-[2%]">
      <Link className='bg-blue-500 px-[1rem] py-[0.5rem] rounded-[10px] text-white' to={"/admin/news/create"} >
        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
      </Link>
    </div>
    <table className="w-full border-collapse"> 
      <thead className='hidden lg:table-header-group w-full'> 
        <tr className='mb-[15px]  '>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>STT</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Content</th> 
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>User Name</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Rating</th>  
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Action</th>
        </tr>
      </thead>
      <tbody className='[&>*:nth-child(even)]:bg-[rgb(168_212_231)] block w-full lg:table-row-group '>  
      {review?.length > 0 && review.map((review,i)=>(
        <tr key={i} className='mb-[15px] block w-full lg:table-row'>
          <td className='pl-[50%] text-left relative block lg:w-[100px] lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3 
          ' data-label="STT">{++i} </td>
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Content"><p className='limit-text'>{review.content}</p></td> 
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="User Name"><p className='limit-text'>{review?.userId?.name}</p></td> 
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Rating"><p className='limit-text'>{review.rating}</p></td>  
          <td className='pl-[50%] text-left relative lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3 block  lg:w-[100px]
          ' data-label="Action" >
            <div className='my-[2%] flex lg:justify-around lg:items-start gap-2 w-full justify-start items-center '>
            <Link className="bg-green-500 py-[0.5rem] px-[1rem] rounded-[10px] text-white block" to={"/edit/"}>
              <FontAwesomeIcon icon={faPen} /> 
            </Link>
            <Link className="bg-red-500 py-[0.5rem] px-[1rem] rounded-[10px] text-white ml-[0.5rem] block" to={"/delete/"}>
              <FontAwesomeIcon icon={faTrash} />
            </Link>
          </div>
          </td>
        </tr>    
      ))}

      </tbody>
    </table>
  </div>
  )
}
