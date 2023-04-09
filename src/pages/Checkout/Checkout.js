import React, {useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faAngleDown, faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
import * as request from '../../utils/requestCountry'
import {useSelector} from 'react-redux' 
import StripeCheckout from 'react-stripe-checkout';


export default function Checkout() {
  const [showCart, setShowCart] = useState(false)
  const [countryList, setCountryList] = useState([])
  const [country, setCountry] = useState('')
  const [districtList, setDistrictList] = useState([])
  const [district, setDistrict] = useState('') 
  const [wardsList, setWardsList] = useState([]) 
  const [stripeToken, setStripeToken] = useState(null)
  const cartItem = useSelector(state=>state.carts)
  const KEY = process.env.REACT_APP_STRIPE_KEY; 
  const handleCheckOut = (e)=>{
    e.preventDefault()
  }
  const onToken = (token)=>{
    setStripeToken(token)
    console.log(token);
  }
  useEffect(()=>{
    const fetchCountry = async()=>{
      const res = await request.get('/p/')
      if(res.status === 200){
        setCountryList(res.data)  
      } 
    } 
    fetchCountry()
  },[])

  useEffect(() => {
    const fetchDistrict = async()=>{
      const resD = await request.get(`/p/${country}?depth=2`)
      if(resD.status === 200){
        setDistrictList(resD.data.districts)  
      }  
    } 
    country && fetchDistrict() 
  }, [country])
  
  useEffect(() => {
    const fetchWards = async()=>{
      const resW = await request.get(`/d/${district}?depth=2`)
      if(resW.status === 200){
        setWardsList(resW.data.wards)   
      } 
    } 
    district && fetchWards()  
  }, [district])

  return (
    <div className='px-5 pb-10 relative'>
        <div className='flex justify-between items-center border-solid border-t-[1px] border-b-[1px] border-[#e7e7e7] md:hidden  ' onClick={()=>setShowCart(!showCart)}>
          <div>
            <h2>Estimated Total</h2>
            <span className='text-[#0088cc]'>$220.80</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
        <div className="progress-bar py-5 hidden md:block">
          <ul className='flex px-5 w-[40%] pb-10'>
            <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#ff5501] before:rounded-lg'> 
              <div className='absolute rounded-full w-9 h-9 left-[40%] -top-3 bg-white border-solid border-[5px] border-[#ff5501] text-center'>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className='absolute w-full text-center top-8 whitespace-nowrap'>
                Shipping
              </div>
            </li>   
            <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] before:rounded-lg'> 
              <div className='absolute rounded-full w-9 h-9 left-[40%] -top-3 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold'>
                2
              </div>
              <div className='absolute w-full text-center top-8 whitespace-nowrap'>
                Review & payments
              </div>
            </li>  
          </ul>
        </div>
        <div className='flex justify-between gap-10'>
          <div className="checkout-form w-full md:w-2/3">
            <h2 className='py-2 text-[#222529] font-semibold leading-6 '>SHIPPING ADDRESS</h2>
            <div className="box-input">
              <h2>First Name <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <h2>Last Name  <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <h2>Street Address  <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <label htmlFor='city'>City <span className='text-red-500'>*</span></label>
              <select name="city" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' onChange={e=>setCountry(e.target.value)} defaultValue={''}>
                <option defaultValue={''}>Vui lòng chọn thành phố</option>
                { countryList && countryList?.map((c,i)=>( 
                  <option key={i} value={c.code}>{c.name}</option>
                ))
                } 
              </select>
            </div>
            <div className="box-input">
            <label htmlFor='District'>District <span className='text-red-500'>*</span></label>
              <select name="District" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' onChange={e=>setDistrict(e.target.value)} disabled={!districtList.length}  defaultValue={''}>
                <option  defaultValue={''}>Vui lòng chọn quận/huyện</option>
                { districtList && districtList?.map((c,i)=>( 
                      <option key={i} value={c.code}>{c.name}</option>
                    ))
                }
              </select>
            </div>
            <div className="box-input">
              <label htmlFor='village'>Sub-district/Village <span className='text-red-500'>*</span></label>
              <select name="village" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' disabled={!wardsList.length} defaultValue={''}>
                <option defaultValue={''}>Vui lòng chọn xã/thị trấn</option>
                { wardsList && wardsList?.map((c,i)=>( 
                    <option key={i} value={c.code}>{c.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="box-input">
              <h2>Phone number <span className='text-red-500'>*</span></h2>
              <input type="number" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="order-note my-2">
              <textarea className='border-solid border-[1px] border-[#e7e7e7] w-full outline-none' name="note" cols="30" rows="10"></textarea>
            </div>

            <StripeCheckout
              name="Three Comma Co."  
              description={`Your total is ${cartItem.total}`}
              image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"   
              stripeKey={KEY}
              locale="en" 
              shippingAddress
              billingAddress   
              token={onToken}    
              >
            <button className="bg-black text-white font-bold px-5 py-[5px] uppercase my-2 disabled:opacity-50"
              onClick={handleCheckOut}
            >
              Check out
            </button>
          </StripeCheckout>
          </div> 
          <div className={`cart ${showCart ? 'max-md:fixed' : 'hidden'} w-full h-full top-0 right-0 z-20 left-[20%] bg-white 
           md:!block lg:!block xl:!block md:w-1/3
          before:bg-[rgba(0,0,0,.5)] before:w-[20%] before:h-full before:content-[""] before:${showCart?'fixed':'hidden'} before:-z-10 before:left-0 before:top-0
          md:before:hidden lg:before:hidden xl:before:hidden
          `} onClick={()=>setShowCart(!showCart)}> 
            <div className='border-solid border-[1px] border-[#e7e7e7] px-5 py-5'>
              <h2>ORDER SUMMARY</h2>
              <div className='flex justify-between items-center'>
                <span> Items in Cart</span>
                <FontAwesomeIcon icon={showCart ? faAngleUp:faAngleDown} />
              </div>
              {/* LIST CART ITEM */}
              <div className={`list-prod-cart ${showCart ? 'block' :'hidden'} max-h-[400px] overflow-y-auto`}  >
                { cartItem && cartItem.items.map(prod=>( 
                    <div key={prod._id} className="prod-item flex gap-5 py-1">
                      <div className="prod-img">
                        <img className='w-[100px] h-[100px]' src={prod.image.url} alt="" />
                      </div>
                      <div className="prod-info">
                        <div className="prod-name">{prod.name}</div>
                        <div className="qty">Qty: {prod.quantity}</div>
                        <div className="price">{prod.price}$</div>
                        <div className="view-detail">View detail</div>
                        <div className='hidden'>
                          <div>Color: <span>Green</span></div>
                          <div>Size: <span>S</span></div>
                        </div>
                      </div>
                    </div>  
                  ))
                } 
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}
