import React from 'react'
import { faAngleRight, faArrowRight, faSliders, faHomeAlt, faArrowUpShortWide, faArrowDownShortWide, faShoppingBag, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'  
import { faHeart, faStar  } from '@fortawesome/free-regular-svg-icons'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { useState } from 'react' 
import '../Categories/categories.scss'   
import { useLocation } from 'react-router-dom'
export default function Search() {
    const [ascending, setAscending] = useState(true);
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const searchValue = searchParams.get('q');
    const [show, setShow] = useState({
        price:false,
        color:false,
        size:false,
    });  
  return (
    <div className='px-5 py-5'>
      <div className='navigate py-5'>
        <span>Home</span>  <span> <FontAwesomeIcon icon={faAngleRight} size="xs" /> </span>SEARCH RESULT FOR: {searchValue} <span></span>
      </div>
      <div className='py-5'>
        <span className='text-[#ff7272] text-xl font-bold leading-[44px]'>Search result for: "{searchValue}"</span>
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
            <h2>CATEGORIES</h2>
            <div className="categories-item text-[#777777] ">
              <div>Brushes</div>
              <div>Eyes</div>
              <div>Face</div>
              <div>Fashion</div>
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
              <div className="show-price py-2">
                <div className="slider h-[5px] rounded-[5px] bg-[#ddd] relative">
                  <div className="progress h-[5px] left-1/4 right-1/4 absolute rounded-[5px] bg-[#301B24]"></div>
                </div>
                <div className='field'> 
                  <input type="range" defaultValue={0} min={0} max={1000}  step={1}/> 
                  <input type="range" defaultValue={5000} min={500} max={1000}  step={1}/> 
                </div> 
                <div className='text-[#777777]'><span >$39.00  </span> - <span>$1,699.00</span></div>
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
            {/* { 
              product.map((prod, index)=>(
                <div key={index} className="product-item m-2  p-1">
                  <div className='relative group'>
                    <img className='w-[200px] h-auto' src={prod.image.url} alt="" />
                    <button className="absolute top-1 right-1
                      rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#301b24] hover:text-white
                      m-2 invisible group-hover:visible
                      transition-all ease-in duration-200
                      opacity-50
                      group-hover:opacity-100
                      ">
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <div className="bg-[#301b24]
                        text-white absolute
                        bottom-0  left-0  right-0
                        text-center group
                        opacity-90
                        w-full h-auto indent-0
                        transition-all duration-[0.25em]  ease-in
                        invisible group-hover:visible group-hover:delay-100
                        group-hover:py-2 cursor-pointer">
                      QUICK REVIEW
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="prod-name">{prod.name}</div>
                    <div className="wishlist"> <FontAwesomeIcon icon={faHeart}/></div>
                  </div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                  </div>
                  <div className="prod-price">
                    {prod.price}
                  </div>
                </div>  
              ))
            } */}
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
            <div className="pagination flex gap-5 items-center cursor-pointer">
              <div className="pagination-item border-solid border-[#e7e7e7] border-[1px] px-2 py-1">1</div>
              <div className="pagination-item border-solid border-black border-[1px] px-2 py-1">2</div>
              <div className="pagination-item border-solid border-black border-[1px] px-2 py-1">3</div>
              <div className="pagination-item border-solid border-black border-[1px] px-2 py-1">Next</div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
