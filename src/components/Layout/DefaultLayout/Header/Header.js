import React, { useEffect, useRef, useState }  from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass,faBagShopping, faX, faBars, faAngleDown, faAngleUp, faAngleRight, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {useDebounce} from '../../../../hook' 
import * as catReq from '../../../../services/categoryServices'
import * as prodReq from '../../../../services/productServices'
import * as cartReq from '../../../../services/cartServices'
import Loading from '../../../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import {getCategoriesSuccess} from '../../../../redux/categorySlice'
import {getProductsSuccess} from '../../../../redux/productSlice'
import {getCartsSuccess, removeFromCart } from '../../../../redux/cartSlice'
import { getCurrentUser } from '../../../../redux/authSlice'

export default function Header() {
  const [show, setShow] = useState({
    search:false,
    cart:false,
    menu:false,
    categoryMenu:false,
  }) 
  const dispatch = useDispatch()  
  const user = useSelector(state => state.auth.users)
  const [searchValue, setSearchValue] = useState('') 
  const debounced = useDebounce(searchValue, 1500) 
  const products = useSelector((state) =>state.products.products) 
  const cartItem =  useSelector(state=>state.carts.items)  
  const cartTotalPrice = useSelector(state=>state.carts.total)  
  const categories = useSelector((state) =>state.categories.categories) 
  const email = useSelector(state=>state.auth.users?.email)
  const [loading, setLoading] = useState(false)
  const searchResult =products && products?.length >= 0 && products?.filter((prod)=>prod.name.toLowerCase().includes(searchValue)) 
  const headerRef = useRef(null) 
  const navigate = useNavigate() 

  
  const handleSignOut = (e)=>{
    e.stopPropagation()
    localStorage.removeItem("token")
    dispatch(getCurrentUser(null))
    navigate('/login')
  } 
  const handleRedirect = (e)=>{
    e.stopPropagation()
    navigate('/')
  }
 


// Call API Search
  useEffect(()=>{
    if(!debounced.trim()){
      setSearchValue('')
      return;
    }
    const fetchApi = async()=>{ 
      const res = await prodReq.getAllProduct() 
      dispatch(getProductsSuccess(res)) 
    }
    searchValue && fetchApi()
  },[debounced])

  // API CART
  useEffect(()=>{
    const fetchCartByEmail = async()=>{ 
      const res = await cartReq.getAllCartByEmail(email)
      dispatch(getCartsSuccess(res.data))  
    }
    email && fetchCartByEmail()
  },[email])

  // API CATEGORY
  useEffect(()=>{  
    const fetchCategoryApi = async()=>{
      const resCate = await catReq.getAllCategory()  
      dispatch(getCategoriesSuccess(resCate.categories))
      setLoading(true)
    }
    fetchCategoryApi()   
  },[])



  // Cart
  const handleRemoveItem = (e,id) =>{
    e.preventDefault()
    e.stopPropagation()
    dispatch(removeFromCart(id))
  }
 
// Handle Scroll Sticky
  useEffect(()=>{
    window.addEventListener('scroll',function(){  
      if(document.documentElement.scrollTop > 90){ 
        headerRef.current?.classList.add('bg-white')  
      }
      else{
        headerRef.current?.classList.remove('bg-white') 
      }
    }) 
  },[])

  return (
    <header className={` flex items-center justify-between bg-none font-black px-5 top-0 right-0 left-0 z-30 ${window.location.pathname === '/' ? 'fixed' :'sticky'} transition-all duration-300`} ref={headerRef}>
      {!loading && <Loading/>}  
        <div className='hidden lg:block'>
            <ul>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/">HOME</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full group '>
                <Link to="/categories">CATEGORY <FontAwesomeIcon icon={faAngleDown} size='sm' /> </Link>
                <div className='hidden absolute w-[650px] px-4 py-5 group-hover:block z-10 bg-white grid-cols-3 mt-2 shadow-2xl'>
                  <div className='w-full flex justify-between'>
                    <ul className='w-full flex text-[#777] text-xs tracking-[0.33px]'>  
                      <li className='w-full h-full'> 
                        <ul>
                          <li className='px-3 py-2 text-[#222529] pointer-events-none font-bold'>CLOTHES</li>
                          { 
                            categories && categories.map((cat,i)=>(
                              <li key={i} className='px-3 py-2 hover:underline uppercase'><Link to={`/categories?q=${cat.name}`}>{cat.name}</Link></li> 
                            ))
                          }
 
                        </ul>
                      </li>
                      <li className='w-full h-full'> 
                        <ul>
                          <li className='px-3 py-2 text-[#222529] pointer-events-none font-bold'>ACCESSORIES</li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>HANDBAG</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>WATCH</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>BELT</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>HAT</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>EYES GLASS</Link></li> 
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>CRAVAT</Link></li> 
                        </ul>
                      </li>
                    </ul> 
                    <div className='h-auto bg-cover bg-right' onClick={handleRedirect}> 
                        <div className='w-[210px] h-[230px]' style={{backgroundImage:'url("https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/megamenu/menu-banner.jpg")'}}>
                        </div>  
                    </div> 
                  </div>
                </div>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/categories">PRODUCTS</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/about-us">ABOUT</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
        </div>
        <div className=' w-[111px] h-[43px] bg-cover '>  
          <Link to="/"><img className='w-full h-full' src="https://www.portotheme.com/magento2/porto/pub/media/logo/stores/17/logo_ecomblack_lg.png" alt="" /></Link>
        </div> 
        <div className="flex justify-end items-center gap-10 text-base">
          <div className='lg:hidden' 
          onClick={()=>setShow({cart:false,search:false,menu:!show.menu})}
          >
            <FontAwesomeIcon icon={faBars} /> 
          </div>  
          {
            show.menu &&
            <div className='fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg z-10 lg:hidden 
            '>
              <ul> 
                <li className='w-full h-full border-solid border-[1px] border-[#e7e7e7] flex justify-between'>
                  <div className='py-3 px-3'>
                    MENU 
                  </div>
                  <div className='border-solid border-l-[1px] border-[#e7e7e7] w-[50px] flex items-center justify-center cursor-pointer' 
                  onClick={()=>setShow({menu:false, search:show.search, cart:show.cart})}
                  >
                    X
                  </div>
                </li>
                <li className='w-full py-3 px-3 h-full border-solid border-[1px] border-[#e7e7e7]'>
                  <Link to="/">HOME</Link>
                </li>
                <li className='w-full py-3 px-3 h-full border-solid border-[1px] border-[#e7e7e7] flex justify-between items-center'
                onClick={()=> setShow({categoryMenu:!show.categoryMenu,menu:true, search:false, cart:false})}
                >
                  <Link to="/">CATEGORY</Link>
                  {show.categoryMenu ? (
                    <FontAwesomeIcon icon={faAngleUp} /> 
                  ):(
                    <FontAwesomeIcon icon={faAngleDown} /> 
                  )}
                </li>
                { show.categoryMenu &&
                <li className='pl-5'>
                  <ul className='w-full text-[#777] text-xs tracking-[0.33px]'>
                      <li className='w-full h-full'> 
                        <ul>
                          <li className='px-3 py-2 text-[#222529] pointer-events-none font-bold'><FontAwesomeIcon icon={faAngleRight} /> CLOTHES</li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> SHIRT</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> T-SHIRT</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> DRESS</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> SHOES</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> JEAN</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> COAT</Link></li>
                        </ul>
                      </li>
                      <li className='w-full h-full'>
                        <ul>
                          <li className='px-3 py-2 text-[#222529] pointer-events-none font-bold'><FontAwesomeIcon icon={faAngleRight} /> ACCESSORIES</li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> HANDBAG</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> WATCH</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> BELT</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> HAT</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> EYES GLASS</Link></li>
                          <li className='pl-5 px-3 py-2 hover:underline'><FontAwesomeIcon icon={faAngleRight} /><Link to='/categories'> CRAVAT</Link></li>
                        </ul>
                      </li>
                  </ul>
                </li>
                }
                <li className='w-full py-3 px-3 h-full border-solid border-[1px] border-[#e7e7e7]'>
                  <Link to="/categories">PRODUCTS</Link>
                </li>
                <li className='w-full py-3 px-3 h-full border-solid border-[1px] border-[#e7e7e7]'>
                  <Link to="/about-us">ABOUT</Link>
                </li>
                <li className='w-full py-3 px-3 h-full border-solid border-[1px] border-[#e7e7e7]'>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          }
          <div className='py-3 px-2 group relative cursor-pointer'>  
            {user?.userName ? 
              (
                <>
                  <div className='w-6 h-6'>
                    {
                      user.avatar.url ?
                      ( 
                        <img src={user.avatar.url} alt="" className='w-full h-full rounded-full' />
                      ) 
                      :
                      (
                        <FontAwesomeIcon icon={faCircleUser} size='xl'/>
                      ) 
                    } 
                  </div> 
                  <div className='hidden absolute w-52 px-4 py-5 group-hover:block z-10 bg-white mt-2 shadow-2xl text-[#777777]'>
                    <ul >
                    <li className='uppercase text-xs hover:underline px-1 py-2'><Link to="/profile">Account Information</Link></li>
                    <li className='uppercase text-xs hover:underline px-1 py-2' onClick={handleSignOut}> Sign Out</li>
                    </ul>
                  </div> 
                </>
              ) 
              :
              ( 
                <Link to='/login'> 
                  <FontAwesomeIcon icon={faUser} size='xl'/>
                </Link>
              )
            } 

          </div>
          <div>
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} size='xl' />
          </Link>
          </div>
          <div 
          onClick={()=>setShow({menu:false,cart:false,search:!show.search})}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
          </div>
          <div className={`text-sm hidden bg-gray-300 border-solid border-gray-300 border-8 absolute rounded-3xl w-[400px] h-auto z-10 top-24 right-10 ${show.search ? '!flex':'' }`}>
            {/* Search */}
            <input 
              className='rounded-lg outline-none border-none w-full py-1 px-4 relative h-12'
              type="text" 
              id='search' 
              autoComplete='off' 
              placeholder='Search...'
              onChange={(e)=>setSearchValue(e.target.value)}
            /> 
            <div className="absolute top-0 right-12">
              <select name="category" className='h-12 border-solid border-x-[1px] border-gray-300 outline-none'>
                <option defaultValue='All Category'>All Category</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="absolute right-0 top-0 block my-0 mx-auto py-4 px-3">
              <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
            </div>
          <div className="absolute z-10  bg-white top-16 w-full rounded ">
              <ul className='list-none'>
                {searchResult && searchValue?.length > 0 && searchResult.map((prod, index)=>(
                  <li className='px-5 py-3' key={index}>{prod.name }</li>
                ))}
              </ul>
            </div>
          </div>
          <div 
          onClick={()=>setShow({menu:false,cart:!show.cart,search:false})}
          >
            <FontAwesomeIcon icon={faBagShopping} size='xl'/>
            <span className='absolute bg-[#ff5b5b] w-4 h-4 rounded-full z-10 translate-x-[-8px] text-white'>
              <span className='text-s absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{cartItem?.length}</span>
            </span> 
          </div>

          {/* CART */}
          { show.cart &&
            <div className="absolute text-base w-[350px] height-auto px-6 py-2 font-normal bg-white shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] top-20 block z-10 right-10">
              <div className="flex justify-between items-center border-b-2 border-solid border-black mb-5">
                <span>{cartItem?.length} ITEM</span>
                <Link to="/cart"  >VIEW CART</Link>
              </div>
              <div className="flex flex-col items-center">
                {cartItem?.length > 0 ? 
                  cartItem?.map((item,i)=>(
                  <div key={i} className="flex justify-center items-center px-2 py-2">
                      <div className="flex justify-end flex-col mr-3">
                        <div className="block overflow-ellipsis w-40 overflow-hidden whitespace-nowrap break-words">
                            {item.product.name}
                        </div>
                        <span>Price: ${item.product.price}</span>
                        <span>Quantity: {item.quantity}</span>
                      </div>
                      <div className="relative">
                        <img className='min-w-[70px] h-[100px]' src={item.product.image.url} alt="" />
                        <div className='absolute flex justify-center items-center top-0 right-0 w-5 h-5 rounded-full bg-white shadow translate-x-1/2 -translate-y-1/2 text-[8px]'
                        onClick={(e)=>handleRemoveItem(e,item.product._id)}
                        >
                          <FontAwesomeIcon icon={faX} size='xl'/>
                        </div>
                      </div>
                  </div>     
                  ))
                :(
                  <span className='py-4 font-[400] text-[#222529]'>
                  You have no items in your shopping cart
                </span>
                )
              }
              </div>
              <div className="flex justify-between items-center font-black my-1">
                <span>SUBTOTAL:</span>
                <span>${cartTotalPrice}</span>  
              </div>
              <div className="w-full bg-black text-white text-center font-bold py-2">
                <Link to="/checkout">GO TO CHECKOUT</Link>
              </div>
            </div>              
          } 

        </div>
    </header>
  )
}
