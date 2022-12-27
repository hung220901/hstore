import React, { useState }  from 'react'
import {Link} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass,faBagShopping, faX} from '@fortawesome/free-solid-svg-icons'




export default function Header() {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
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

  return (
    <header className='flex items-center justify-between m-5 font-black '>
        <div>
            <ul>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/#">HOME</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full group '>
                <Link to="/#">CATEGORY</Link>
                <ul className='hidden absolute w-[300px] px-4 group-hover:grid z-10 bg-white grid-cols-2 mt-2 p'>
                  <li> <Link to='/a'> Adidass</Link></li>
                  <li> <Link to='/b'>Nike</Link> </li>
                  <li> <Link to='/c'>Adidass</Link></li>
                  <li> <Link to='/d'>Adidass</Link></li>
                  <li> <Link to='/e'>Adidass</Link> </li>
                  <li> <Link to='/f'>Adidass</Link> </li>
                </ul>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/#">PRODUCTS</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/#">PAGES</Link>
              </li>
              <li className='inline-block py-3 px-2 h-full'>
                <Link to="/#">FEATURES</Link>
              </li>
            </ul>
        </div>
        <div>
          <img className='w-[111px] h-[43px]' src="https://www.portotheme.com/magento2/porto/pub/media/logo/stores/17/logo_ecomblack_lg.png" alt="" />
        </div>
        <div className="py-[25px] w-[30%] flex justify-end items-center gap-10 text-base">
          <div>
          <FontAwesomeIcon icon={faUser} size='xl'/>
          </div>
          <div>
          <FontAwesomeIcon icon={faHeart} size='xl' />
          </div>
          <div onClick={()=>setShow(!show)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
          </div>
          <div className={`text-sm hidden bg-gray-300 border-solid border-gray-300 border-8 absolute rounded-3xl w-[400px] h-auto z-10 top-24 right-10 ${show? '!flex':'' }`}>
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
          <div onClick={()=>setActive(!active)}>
            <FontAwesomeIcon icon={faBagShopping} size='xl'/>
            <span className='absolute bg-[#ff5b5b] w-4 h-4 rounded-full z-10 translate-x-[-8px] text-white'>
              <span className='text-s absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{products.length}</span>
            </span> 
          </div>
          { active &&
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
