import { faAngleRight, faArrowRight, faSliders, faHomeAlt, faArrowUpShortWide, faArrowDownShortWide, faShoppingBag, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect }  from 'react' 
import { useState } from 'react' 
import './categories.scss'   
import ProductCard from '../../components/Product/ProductCard'
import * as requestProduct from '../../services/productServices'
import * as request from '../../utils/request'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFailure, getProductsStart, getProductsSuccess } from '../../redux/productSlice';
import { getAllBrand  } from '../../redux/brandSlice';
import { getCategoriesSuccess  } from '../../redux/categorySlice'; 
import Pagination from '../../components/Pagination/Pagination'

export default function Categories() {
  const [ascending, setAscending] = useState(true);
  const dispatch = useDispatch()
  const brand = useSelector((state)=> state.brands.items)
  const category = useSelector((state)=> state.categories.categories)
  const product = useSelector((state)=> state.products.products)
  const [show, setShow] = useState({
    price:false,
    color:false,
    size:false,
  });  
  const [filter, setFilter] = useState({price:1000}) 
  const [currentPage,setCurrentPage] = useState(1)
  const [limit] = useState(3)
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const totalPage = Math.ceil(product.length / limit)
  const currentItem = product.slice(indexOfFirstItem,indexOfLastItem)

  const paginate = pageNumber =>setCurrentPage(pageNumber)

  function pre() {
    if(currentPage > 1){
      setCurrentPage(Math.max(1 ,currentPage - 1));
    }else{
      setCurrentPage(1);
    }
  } 
  function next (){
    if(currentPage < totalPage){
      setCurrentPage(Math.min(limit - 1,currentPage + 1))
    }
  }


  // CALL API
  useEffect(()=>{
    const fetchALlProduct = async ()=>{
      try {
        dispatch(getProductsStart())
        const res = await requestProduct.getAllProduct();
        dispatch(getProductsSuccess(res))
      } catch (error) {
        dispatch(getProductsFailure(error))
      }
    }
    fetchALlProduct()
  },[dispatch])

  useEffect(()=>{
    const fetchAllBrand = async()=>{
      const res = await request.get('/brand') 
      dispatch(getAllBrand(res.brand))
    }
    fetchAllBrand()
  },[dispatch])

  useEffect(()=>{
    const fetchAllCategories = async()=>{
      const res = await request.get('/category')  
      dispatch(getCategoriesSuccess(res.categories))
    }
    fetchAllCategories()
  },[dispatch])

  return (
    <div className='px-5 py-5'>
      <div className='w-full h-auto relative cursor-pointer'> 
        <img src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1685118894/banner_categories_l5yj8b.jpg" alt="" className='lg:m-auto lg:w-full'/>
        <div className='absolute left-[10%] top-[10%]'> 
           <div className='font-segoe font-bold text-[1.5em] md:text-[2.5em] lg:text-[3em]'>New Hot Cosmetics</div>
           <div className='relative pl-[0.265em] text-[1.75em] font-bold sm:text-[2em] md:text-[2.5em] md:pl-[0.365em] lg:text-[3.5em] lg:pl-[0.565em] '><span className='-translate-y-1/2 text-[0.265em] -rotate-90 absolute -left-[1em] top-1/2 md:text-[0.365em] lg:text-[0.565em]'>UP TO</span> 50% OFF </div>
           <div className='lg:py-3 lg:text-[20px]'>SHOP NOW <FontAwesomeIcon icon={faArrowRight} /> </div>
        </div>
      </div>
      <div className='navigate py-5'>
        <span><FontAwesomeIcon icon={faHomeAlt}/></span>  <span> <FontAwesomeIcon icon={faAngleRight} size="xs" /> </span> <span>Home</span>
      </div>
      <div className="action flex bg-[#f4f4f4] text-xs py-3 px-3 font-bold items-center justify-between">
        <div className='flex items-center'>
          <div className="filter flex items-center px-1 bg-white py-2">
            <FontAwesomeIcon icon={faSliders} className="mr-1"/>
            FILTER
          </div>
          <label htmlFor="sort" className='ml-10 px-1'>Sort By: </label>
          <select name="sort" className='px-1 bg-white py-2'>
            <option value="position">POSITION</option>
            <option value="product Name">PRODUCT NAME</option>
            <option value="price">PRICE</option>
          </select>
          <div className='asc-des px-2 bg-white py-2 ml-5 cursor-pointer' onClick={()=>setAscending(!ascending)}>
            { ascending ? (
              <FontAwesomeIcon icon={faArrowUpShortWide} />
            ):(
              <FontAwesomeIcon icon={faArrowDownShortWide} />
            )}
          </div>
        </div>
        <div>
          <select name="numberShowing" className='px-1 bg-white py-2'>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>
      <div className='flex py-2 '>
        {/* SIDEBAR */}
        <div className="sidebar hidden lg:block basis-1/4 border-solid border-[#e7e7e7] border-[1px] h-fit">
          <div className=" px-1 py-2 border-solid border-[#e7e7e7] border-b-[1px] categories">
            <h2>BRANDS</h2>
            <div className="categories-item text-[#777777] flex flex-wrap gap-4 ">
              {brand.length > 0 && brand.map((b,i)=>(
                <div className={filter.brand === b.name ? `capitalize cursor-pointer text-black`:`capitalize cursor-pointer`} key={i} onClick={()=>setFilter({...filter,brand:b.name})}> {b.name}</div> 
              ))}
            </div>
          </div> 
          <div className=" px-1 py-2 border-solid border-[#e7e7e7] border-b-[1px] categories">
            <h2>CATEGORIES</h2>
            <div className="categories-item text-[#777777]  flex flex-wrap gap-4 ">
              {category.length > 0 && category.map((b,i)=>(
                <div className={filter.category === b.name ? `capitalize cursor-pointer text-black`:`capitalize cursor-pointer`} key={i} onClick={()=>setFilter({...filter,category:b.name})}> {b.name}</div> 
              ))} 
            </div>
          </div> 
          <div className="px-1 py-2 price border-solid border-[#e7e7e7] border-b-[1px]">
            <div className="flex items-center justify-between py-2" onClick={()=>setShow({...show,price: !show.price})} >
              <h2>PRICE</h2>
              {show.price ?
                <FontAwesomeIcon icon={faMinus} />  
                :
                <FontAwesomeIcon icon={faPlus} />   
              }
            </div>
            {show.price && 
              <div className="show-price py-2 w-full">  
                  <input className='w-full' type="range" value={filter.price} min={0} max={1000}  onChange={(e)=>setFilter({...filter,price:e.target.value})}/>   
                  <div className='text-[#777777] text-center'><span >${filter.price}  </span></div>
              </div>  

            }
          </div>
          <div className="px-1 py-2 color border-solid border-[#e7e7e7] border-b-[1px]">
            <div className="flex items-center justify-between py-2" onClick={()=>setShow({...show,color: !show.color})}>
              <h2>COLOR</h2>
              {show.color ?
                <FontAwesomeIcon icon={faMinus} />  
                :
                <FontAwesomeIcon icon={faPlus} />   
              }
            </div>
            { show.color && 
              <div className="flex gap-2">
                <div className="color-item w-8 h-8 bg-red-500"></div>
                <div className="color-item w-8 h-8 bg-black"></div>
                <div className="color-item w-8 h-8 bg-blue-500"></div>
                <div className="color-item w-8 h-8 bg-gray-500"></div>
              </div> 
            }
          </div>
          <div className="px-1 py-2 size">
            <div className="flex items-center justify-between py-2" onClick={()=>setShow({...show,size: !show.size})}>
              <h2>SIZE</h2>
              {show.size ?
                <FontAwesomeIcon icon={faMinus} />  
                :
                <FontAwesomeIcon icon={faPlus} />   
              }
            </div>
            { show.size &&
            <div className="list-size flex gap-2 cursor-pointer">
              <div className="size-item border-solid border-[1px] border-[#e9e9e9] bg-[#fff] text-[#777] text-xs px-2 py-1 ">XS</div>
              <div className="size-item border-solid border-[1px] border-[#e9e9e9] bg-[#fff] text-[#777] text-xs px-2 py-1 ">S</div>
              <div className="size-item border-solid border-[1px] border-[#e9e9e9] bg-[#fff] text-[#777] text-xs px-2 py-1 ">M</div>
              <div className="size-item border-solid border-[1px] border-[#e9e9e9] bg-[#fff] text-[#777] text-xs px-2 py-1 ">L</div>
              <div className="size-item border-solid border-[1px] border-[#e9e9e9] bg-[#fff] text-[#777] text-xs px-2 py-1 ">XL</div> 
            </div> 
            } 
          </div> 
        </div>
        {/* LIST PRODUCT */}
        <div className='  px-2 w-full'>
          <div className="list-product flex flex-wrap  ">
            { 
              currentItem && currentItem?.map((prod, index)=>(
                <div key={index} className="product-item m-2  p-1"> 
                  <div className='flex gap-5'>
                    <ProductCard product={prod}/> 
                  </div>
                </div>  
              ))
            }
          </div>
          {/* pagination */}
          <div className='flex justify-between'>
            <div>
              <label htmlFor="numberShowing">Show:</label>
              <select name="numberShowing" className='px-1 bg-white py-2 border-solid border-[#e7e7e7] border-[1px]'>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
            <Pagination limit={limit} total={4} paginate={paginate}  current={currentPage} pre={pre} next={next}/>
          </div> 
        </div>
      </div>
    </div>
  )
}
