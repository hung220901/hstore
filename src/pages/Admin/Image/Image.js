import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom' 
import  * as request from '../../../utils/request' 


export default function Image() {
  const dispatch = useDispatch() 
  const [image,setImage] = useState([])

  useEffect(()=>{
    const fetchApi = async ()=>{
      try { 
        const result = await request.get('/images');    
        setImage(result.data); 
      } catch (error) { 
        console.log(error);
      } 
    }  
    fetchApi()
  },[dispatch])


  return (
    <div className="mt-[85px] px-[1.5rem] py-[2rem] min-h-[calc(100vh - 90px)] ml-[70px] -mb-[5%]">
    <div className="mb-[2%]">
      <Link className='bg-blue-500 px-[1rem] py-[0.5rem] rounded-[10px] text-white' to={"/admin/news/create"} >
        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
      </Link>
    </div>
    <table className="w-full border-collapse">
  <thead>
    <tr>
      <th className="px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white">STT</th>
      <th className="px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white">Name</th> 
      <th className="px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white">Picture</th> 
      <th className="px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white">Action</th>
    </tr>
  </thead>
  <tbody>
    {/* Lặp qua danh sách hình ảnh */}
    {image.map((image, index) => (
      <tr key={index}>
        <td className="pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3">{index + 1}</td>
        <td className="pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3">
          {image.public_id} 
        </td> 
        <td className="pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3">
          <img src={image.url}   className="w-32 h-auto" />
        </td> 
        <td className="pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3">
          <button className="bg-green-500 py-1 px-2 rounded text-white mr-2">
            Edit
          </button>
          <button className="bg-red-500 py-1 px-2 rounded text-white">
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
  )
}

