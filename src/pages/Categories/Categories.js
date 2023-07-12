import { faAngleRight, faArrowRight, faSliders, faHomeAlt, faArrowUpShortWide, faArrowDownShortWide, faShoppingBag, faMinus, faPlus, faMultiply } from '@fortawesome/free-solid-svg-icons'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect }  from 'react' 
import { useState } from 'react' 
import './categories.css'   
import ProductCard from '../../components/Product/ProductCard'
import * as requestProduct from '../../services/productServices'
import * as request from '../../utils/request'
import { useDispatch, useSelector } from 'react-redux'  
import { getProductsFailure, getProductsStart, getProductsSuccess, setFilter, setFilteredProduct, clearFilter } from '../../redux/productSlice';
import { getAllBrand  } from '../../redux/brandSlice';
import { getCategoriesSuccess  } from '../../redux/categorySlice'; 
import Pagination from '../../components/Pagination/Pagination'
import { Link, useLocation } from 'react-router-dom'
import PriceRangeSlide from '../../components/Filter/PriceRange/PriceRangeSlide'

export default function Categories() { 
  const dispatch = useDispatch()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchValue = searchParams.get('q');
  const brand = useSelector((state)=> state.brands.items)
  const category = useSelector((state)=> state.categories.categories) 
  const filter = useSelector((state)=> state.products.filter) 
  const filteredProd = useSelector((state)=> state.products.filteredProduct) 
  const [products,setProducts] = useState([])
  const [show, setShow] = useState({
    price:false,
    color:false,
    size:false,
  });   
  const [currentPage,setCurrentPage] = useState(1)
  const [limit] = useState(4)
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const totalPage = Math.ceil(products.length / limit) 
  const size = [
    'S','M','L','XS','XL'
  ]
  const color = [
    '#32a852', '#000000', '#ff0008', '#0073ff'
  ]
 
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
 

 

  const handleToggleSort = () =>{ 
    if(filter.desc){
      const {desc, ...rest} = filter 
      dispatch(setFilter(rest))
      dispatch(setFilteredProduct([]))
    }
    else{
      dispatch(setFilter({...filter,desc:true})) 
    }
  }
  const handleToggleBrand = (data) => {
    if(filter.brand === data){
      const {brand, ...rest} = filter 
      dispatch(setFilter(rest))
      dispatch(setFilteredProduct([]))
    }
    else{
      dispatch(setFilter({...filter,brand:data}))
    } 
  }
  const handleToggleCategory = (data) => {
    if(filter.category === data){
      const {category, ...rest} = filter
      dispatch(setFilter(rest))
      dispatch(setFilteredProduct([]))
    }
    else{
      dispatch(setFilter({...filter,category:data}))
    }
  } 
  const handlePriceRangeChange = (newValues) => { 
    const [min, max] = newValues;  
    if (min === 0 && max === 1000) { 
      const { minPrice, maxPrice, ...updatedFilter } = filter;
      dispatch(setFilter(updatedFilter));
    } else { 
      dispatch(setFilter({ ...filter, minPrice: min, maxPrice: max }));
    }
  };  
  const hanndleToggleColor = (data) =>{
    if(filter.color === data){
      const {color, ...rest} = filter
      dispatch(setFilter(rest))
      dispatch(setFilteredProduct([]))
    }
    else{
      dispatch(setFilter({...filter,color:data}))
    }
  }
  const hanndleToggleSize = (data) =>{
    if(filter.size === data){
      const {size, ...rest} = filter
      dispatch(setFilter(rest))
      dispatch(setFilteredProduct([]))
    }
    else{
      dispatch(setFilter({...filter,size:data}))
    }
  }



  // Handle Product Filter  
  useEffect(()=>{
    let filtered = products
    if(filter.brand){
      filtered = filtered.filter(prod =>prod?.brand?.name?.toLowerCase() === filter.brand?.toLowerCase())  
    }
    if(filter.category){
      filtered = filtered.filter(prod =>
        prod?.category?.some(cat =>
          cat.name.toLowerCase() === filter.category.toLowerCase()
        )
      ); 
    }
    if(filter.minPrice || filter.maxPrice){
      filtered = filtered.filter(prod=> prod.price >= filter.minPrice && prod.price <= filter.maxPrice) 
    }
    if(filter.color){
      filtered = filtered.filter(prod => prod.color === filter.color) 
    }
    if(filter.size){
      filtered = filtered.filter(prod=> prod.size === filter.size)
    }



    if(filter.sortType === '2'){ 
      filtered = [...filtered];  
      filtered.sort((a, b) => 1 * a.name.localeCompare(b.name));
    }   
    if(filter.desc && filter.sortType === '2'){ 
      filtered = [...filtered];  
      filtered.sort((a, b) => -1 * a.name.localeCompare(b.name));
    }   
    if(filter.sortType === '3'){ 
      filtered = [...filtered];  
      filtered.sort((a, b) => 1 * a.price.localeCompare(b.price));
    }   
    if(filter.desc && filter.sortType === '3'){ 
      filtered = [...filtered];  
      filtered.sort((a, b) => -1 * a.price.localeCompare(b.price));
    }   
    dispatch(setFilteredProduct(filtered)) 
    console.log(filter);
  },[filter])
 
  // CALL API
  useEffect(()=>{
    const fetchALlProduct = async ()=>{
      try {
        dispatch(getProductsStart())
        const res = await requestProduct.getAllProduct();
        setProducts(res)
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
      <div className='navigate py-2'>
        <span><FontAwesomeIcon icon={faHomeAlt}/></span>  <span> <FontAwesomeIcon icon={faAngleRight} size="xs" /> </span> <span className='uppercase'>{searchValue ? 'SEARCH RESULT FOR: '+ searchValue : 'Category'}</span>
      </div>
      {searchValue &&
        <div>
          <span className='text-[#ff7272] text-xl font-bold leading-[44px]'>Search result for: "{searchValue}"</span>
        </div>      
      }
      <div className="action flex bg-[#f4f4f4] text-xs py-3 px-3 font-bold items-center justify-between">
        <div className='flex items-center'>
          <div className="filter flex items-center px-1 bg-white py-2">
            <FontAwesomeIcon icon={faSliders} className="mr-1"/>
            FILTER
          </div>
          <label htmlFor="sort" className='ml-10 px-1'>Sort By: </label>
          <select name="sort" className='outline-none px-1 bg-white py-2' onChange={(e)=> dispatch(setFilter({...filter,sortType:e.target.value}))}> 
            <option disabled value={''}>POSITION</option>
            <option value="2">NAME</option>
            <option value="3">PRICE</option>
          </select>
          <div className='asc-des px-2 bg-white py-2 ml-5 cursor-pointer' onClick={()=>handleToggleSort()}>
            { filter.desc ? 
              (
                <FontAwesomeIcon icon={faArrowDownShortWide} />
              )
              :
              (
                <FontAwesomeIcon icon={faArrowUpShortWide} />
              )
            }
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
        <div className="sidebar hidden lg:block basis-1/4   h-fit">
          <div className=" px-1 py-2 border-solid border-[#e7e7e7] border-[1px] categories">
            <h2>BRANDS</h2>
            <div className="categories-item text-[#777777] flex flex-wrap gap-4 ">
              {brand.length > 0 && brand.map((b,i)=>(
                <div className={filter.brand === b.name ? `capitalize cursor-pointer text-black`:`capitalize cursor-pointer`} key={i} onClick={()=>handleToggleBrand(b.name)}> {b.name}</div> 
              ))}
            </div>
          </div> 
          <div className=" px-1 py-2 border-solid border-[#e7e7e7] border-[1px] categories">
            <h2>CATEGORIES</h2>
            <div className="categories-item text-[#777777]  flex flex-wrap gap-4 ">
              {category.length > 0 && category.map((b,i)=>(
                <div className={filter.category === b.name ? `capitalize cursor-pointer text-black`:`capitalize cursor-pointer`} key={i} onClick={()=>handleToggleCategory(b.name)}> {b.name}</div> 
              ))} 
            </div>
          </div> 
          <div className="px-1 py-2 price border-solid border-[#e7e7e7] border-[1px]">
            <div className="flex items-center justify-between py-2" onClick={()=>setShow({...show,price: !show.price})} >
              <h2>PRICE</h2>
              {show.price ?
                <FontAwesomeIcon icon={faMinus} />  
                :
                <FontAwesomeIcon icon={faPlus} />   
              }
            </div>
            {show.price && 
              <div className="show-price p-5 mt-2 w-full">   
                <PriceRangeSlide min={filter.minPrice || 0} max={filter.maxPrice || 1000} onChange={handlePriceRangeChange} />
              </div>   
            }
          </div>
          <div className="px-1 py-2 color border-solid border-[#e7e7e7] border-[1px]">
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
                {
                  color.map((c,i) => (  
                    <div key={i} className={`color-item w-8 h-8 border-solid border-2 ${filter.color === c ? 'border-black' :'border-[#e9e9e9]'}`} style={{background:c}} onClick={()=>hanndleToggleColor(c)}></div> 
                  ))
                }
              </div> 
            }
          </div>
          <div className="px-1 py-2 border-solid border-[#e7e7e7] border-[1px]">
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
              { size.map((s,i)=>(
                <div key={i} className={`size-item border-solid border-[1px]  bg-[#fff] text-[#777] text-xs px-2 py-1 ${filter.size === s ? 'border-black':'border-[#e9e9e9]'}`} onClick={()=>hanndleToggleSize(s)}>{s}</div> 
              ))}
            </div> 
            } 
          </div> 
          { Object.keys(filter).length !== 0 &&
            <div className='px-1 py-2'>
              <button className='px-4 py-2 bg-gray-300 rounded-xl ' onClick={()=>dispatch(clearFilter())}><FontAwesomeIcon icon={faMultiply}/> Clear</button>
            </div>
          }
        </div>
        {/* LIST PRODUCT */}
        <div className='  px-2 w-full'>
          <div className="list-product flex flex-wrap items-center">
            { products.length !== 0 ? 
            // Co sp  
              Object.keys(filter).length !== 0 ? 
                // neu co filter thi lay filter , khong thi lay All
                Object.keys(filteredProd).length !== 0 ?
                // nếu filter có thì lấy ra khong thì để k có sp nào
                  filteredProd?.map((prod, index)=>(
                    <div key={index} className="product-item m-2  p-1">  
                      <Link to={`/product-detail/${prod.slug}`}> 
                        <ProductCard product={prod}/>  
                      </Link>
                    </div>  
                  )).slice(indexOfFirstItem,indexOfLastItem) 
                  :
                  <h1 className='flex justify-center items-center h-48 w-full'>Dont have any product!</h1>
                :  
                products?.map((prod, index)=>(
                  <div key={index} className="product-item m-2  p-1">  
                    <Link to={`/product-detail/${prod.slug}`}> 
                      <ProductCard product={prod}/>  
                    </Link>
                  </div>  
                ))
              :
              <h1 className='flex justify-center items-center h-48 w-full'>Dont have any product!</h1>
            }
          </div>
          {/* pagination */}
          { products.length > 5 &&
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
          }
        </div>
      </div>
    </div>
  )
}
