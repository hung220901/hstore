import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  * as productServices from '../../../services/productServices'
import {getProductsStart, getProductsSuccess, getProductsFailure} from '../../../redux/productSlice'
import Create from './CreateProduct'
import Edit from './EditProduct'
import DeleteProduct from './DeleteProduct'
export default function Product() {
  const dispatch = useDispatch() 
  const [show, setShow] = useState({edit:false,delete:false,create:false})
  const product = useSelector(state=>state.products.products)
  



  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        dispatch(getProductsStart())
        const result = await productServices.getAllProduct();   
        dispatch(getProductsSuccess(result)) 
      } catch (error) { 
        dispatch(getProductsFailure(error))
      } 
    }
    product?.length ===0&& fetchApi()
  },[dispatch]) 

  return (
    <div className="mt-[85px] px-[1.5rem] py-[2rem] min-h-[calc(100vh - 90px)] ml-[70px] -mb-[5%]">
    <div className="mb-[2%]">
      <button className='bg-blue-500 px-[1rem] py-[0.5rem] rounded-[10px] text-white' onClick={()=>setShow({...show,create:true})} >
        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
      </button>
    </div>
    <table className="w-full border-collapse"> 
      <thead className='hidden lg:table-header-group w-full'> 
        <tr className='mb-[15px]  '>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>STT</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Product Name</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Category</th> 
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Price</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Stock</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Published</th>
          <th className='px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] text-center text-base bg-black text-white'>Action</th>
        </tr>
      </thead>
      <tbody className='[&>*:nth-child(even)]:bg-[rgb(168_212_231)] block w-full lg:table-row-group '>  
      { product.map((prod,i)=>(
        <tr key={i} className='mb-[15px] block w-full lg:table-row'>
          <td className='pl-[50%] text-left relative block lg:w-[100px] lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3 
          ' data-label="STT">{++i} </td>
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Product Name"><p className='limit-text'>{prod.name}</p></td>
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Category"><p className='limit-text'>{prod?.category[0]?.name}</p></td> 
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Price"><p className='limit-text'>{prod.price}</p></td>
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Stock"><p className='limit-text'>{prod.stock}</p></td>
          <td className='pl-[50%] text-left relative block lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3
          ' data-label="Published"><p className='limit-text'>{prod.show.toString()}</p></td>
          <td className='pl-[50%] text-left relative lg:table-cell px-[15px] py-3 p-[1%] border-solid border-[1px] border-[#ddd] lg:text-center text-base
          before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:text-sm before:font-bold before:text-left lg:before:content-none lg:pl-3 block  lg:w-[100px]
          ' data-label="Action" >
            <div className='my-[2%] flex lg:justify-around lg:items-start gap-2 w-full justify-start items-center '>
            <button className="bg-green-500 py-[0.5rem] px-[1rem] rounded-[10px] text-white block" onClick={()=>setShow({...show,edit:true,editingProduct:prod})} >
              <FontAwesomeIcon icon={faPen} /> 
            </button>
            <button className="bg-red-500 py-[0.5rem] px-[1rem] rounded-[10px] text-white ml-[0.5rem] block" onClick={()=>setShow({...show,delete:true,deletingProduct:prod})}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          </td>
        </tr>    
      ))}

      </tbody>
    </table>
    {show.create && <Create onClose={()=>setShow({...show,create:false})} mount={show.create}/> }
    {show.delete && <DeleteProduct onClose={()=>setShow({...show,delete:false})} mount={show.delete} product={show.deletingProduct} /> }
    {show.edit && <Edit onClose={()=>setShow({...show,edit:false})} mount={show.edit} product={show.editingProduct} /> }
  </div>
  )
}
