import React, { useEffect, useRef, useState }  from 'react'
import {Link} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass,faBagShopping, faX, faBars, faAngleDown, faAngleUp, faAngleRight} from '@fortawesome/free-solid-svg-icons'




export default function Header() {
  const [show, setShow] = useState({
    search:false,
    cart:false,
    menu:false,
    categoryMenu:false,
  }) 
  const [searchValue, setSearchValue] = useState('') 
  const [products, setProducts] = useState([]) 
  const  name ='Porto White Girl Shirt'
  const price = 70;
  const  image ='product1.jpeg';

  const total = products.reduce((result,prod)=>result + prod.price,0)
  const newProduct = products.filter((prod)=>prod.name.toLowerCase().includes(searchValue)) 
  const addProduct = () =>{
    setProducts([
      ...products,{
      id:Math.floor(Math.random()*10),
      name,
      price,
      image        
      }])
  }
  const handleDeleteProduct = (id)=>{
    setProducts(products.filter((pro)=>pro.id !== id))
  } 
// Handle Scroll Sticky
  const headerRef = useRef(null) 
 
  useEffect(()=>{
    window.addEventListener('scroll',function(){ 
      if(this.window.scrollY > 90){ 
        headerRef.current?.classList.add('sticky')  
      }
      else{
        headerRef.current?.classList.remove('sticky') 
      }
    })
  },[])

  return (
    <header className='flex items-center justify-between font-black bg-white px-5 top-0 right-0 left-0 z-20 ' ref={headerRef}>
        <div className='hidden lg:block'>
            <ul>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/">HOME</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full group '>
                <Link to="/categories">CATEGORY <FontAwesomeIcon icon={faAngleDown} size='sm' /> </Link>
                <div className='hidden absolute w-[650px] px-4 py-5 group-hover:block  z-10 bg-white grid-cols-3 mt-2 shadow-2xl'>
                  <div className='w-full flex justify-between'>
                    <ul className='w-full flex text-[#777] text-xs tracking-[0.33px]'>  
                      <li className='w-full h-full'> 
                        <ul>
                          <li className='px-3 py-2 text-[#222529] pointer-events-none font-bold'>CLOTHES</li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>SHIRT</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>T-SHIRT</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>DRESS</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>SHOES</Link></li>
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>JEAN</Link></li> 
                          <li className='px-3 py-2 hover:underline'><Link to='/categories'>COAT</Link></li> 
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
                    <div className='h-auto bg-cover bg-right' >
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
          <img className='w-full h-full' src="https://www.portotheme.com/magento2/porto/pub/media/logo/stores/17/logo_ecomblack_lg.png" alt="" />
        </div> 
        <div className="py-[25px] flex justify-end items-center gap-10 text-base">
          <div className='lg:hidden' onClick={()=>setShow({cart:false,search:false,menu:!show.menu})}>
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
          <div>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} size='xl'/>
            </Link>
          </div>
          <div>
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} size='xl' />
          </Link>
          </div>
          <div onClick={()=>setShow({menu:false,cart:false,search:!show.search})}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
          </div>
          <div className={`text-sm hidden bg-gray-300 border-solid border-gray-300 border-8 absolute rounded-3xl w-[400px] h-auto z-10 top-24 right-10 ${show.search? '!flex':'' }`}>
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
                {newProduct&& newProduct.map((prod)=>(
                  <li className='px-5 py-3' key={prod.id}>{prod.name }</li>
                ))}
              </ul>
            </div>
          </div>
          <div onClick={()=>setShow({menu:false,cart:!show.cart,search:false})}>
            <FontAwesomeIcon icon={faBagShopping} size='xl'/>
            <span className='absolute bg-[#ff5b5b] w-4 h-4 rounded-full z-10 translate-x-[-8px] text-white'>
              <span className='text-s absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{products.length}</span>
            </span> 
          </div>
          { show.cart &&
            <div className="absolute text-base w-1/4 height-auto px-6 py-2 font-normal bg-white shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] top-20 block z-10 right-10">
              <div className="flex justify-between items-center border-b-2 border-solid border-black">
                <span>{products.length} ITEM</span>
                <Link to="/cart">VIEW CART</Link>
              </div>
              <div className="flex flex-col items-center">
                {products.length > 0 ? 
                  products.map((prod)=>(
                  <div key={prod.id} className="flex justify-center items-center px-2 py-2">
                      <div className="flex justify-end flex-col mr-3">
                        <div className="block overflow-ellipsis w-40 overflow-hidden whitespace-nowrap break-words">
                            {prod.name}
                        </div>
                        <span>See Detail</span>
                        <span>${prod.price}</span>
                        <span>Qty: 1</span>
                      </div>
                      <div className="relative">
                        <img src={'./images/'+prod.image} alt="" />
                        <div className='absolute flex justify-center items-center top-0 right-0 w-5 h-5 rounded-full bg-white shadow translate-x-1/2 -translate-y-1/2 text-[8px]' onClick={()=> handleDeleteProduct(prod.id)}>
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
                <span>${total}</span>  
              </div>
              <div className="w-full bg-black text-white text-center font-bold py-2" onClick={() => addProduct()}>
              GO TO CHECKOUT
              </div>
            </div>              
          } 

        </div>
    </header>
  )
}
