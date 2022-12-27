import { faAngleUp, faArrowRight, faBasketShopping, faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState }  from 'react'

export default function Cart() {
    const showItem = false;
    const [quantity, setQuantity] = useState(1)
    const [shippingTaxForm, setShippingTaxForm] = useState(false); 
    const handleDecrease = () =>{
        if(quantity > 0)
            setQuantity(quantity - 1)
    }
    const handleIncrease = () =>{ 
        setQuantity(quantity + 1)
    }


  return (
    <div className='text-[#777777] text-sm p-5'>
        <div className='py-8'>
            <span className="text-[#ff7272] text-xl font-bold -tracking-[0.6px] leading-10">
                Shopping Cart
            </span>
        </div>

        {
            showItem &&
            <div className="no-item text-center mb-20">
                <FontAwesomeIcon icon={faBasketShopping} size='8x' color='#d3d3d4' />
                <h3 className='py-5'>You have no items in your shopping cart.</h3>
                <button className="bg-black text-white font-bold px-6 py-4">CONTINUE SHOPPING</button>
            </div>
        }
 
        <div className='mx-5 flex'>
            <div className='flex-[3]'>
                <table className="list-product text-left ">
                 <thead>
                        <tr className='text-[#212529] text-left border-b-[1px] border-solid border-[#e7e7e7]'>
                            <th className='w-[500px] p-2'>ITEM</th>
                            <th className='p-2 w-[200px]'>PRICE</th>
                            <th className='w-[200px] p-2'>QTY</th>
                            <th className='text-right p-2'>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='relative border-b-[1px] border-solid border-[#e7e7e7]'>
                            <td className='flex justify-start gap-5 px-2 py-5'>
                                <div><img src="./images/product1.jpeg" alt="" /></div>
                                <div className='flex flex-col justify-between'>
                                    <span className='font-medium text-[#222529] text-sm -tracking-[0.14px] leading-5'>Shirt Male</span>
                                    <h3 className='font-bold'>Color: <span className='font-normal'>Brown</span></h3>
                                    <h3 className='font-bold'>Size: <span className='font-normal'>XS</span></h3>
                                </div>
                            </td>
                            <td>
                                39.00$
                            </td>
                            <td >
                                <div className='flex justify-start items-center text-sm text-[#777777] '>
                                    <div 
                                      className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4
                                       text-[#222529] cursor-pointer hover:text-[#ff7272]'
                                      onClick={handleDecrease}
                                    >-</div>
                                    <input type="number" className='outline-none w-10 border-solid border-[#e7e7e7] border-[1px] px-3 py-4 text-center text-[#222529] font-bold' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                                    <div className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4 
                                    text-[#222529] cursor-pointer hover:text-[#ff7272]' 
                                    onClick={handleIncrease}
                                    >+</div>
                                </div>
                            </td>
                            <td className='text-right font-semibold text-[#222529] leading-4'><span>1000$</span></td>
                            <div className="absolute w-5 h-5 top-0 right-0 translate-x-2 translate-y-1 rounded-full flex justify-center items-center bg-white shadow-md cursor-pointer">
                                <FontAwesomeIcon icon={faMultiply} />
                            </div>
                        </tr>
                    </tbody>
                </table> 
                <div className='discount flex my-2 gap-5'>
                    <input 
                        type="text" 
                        className='border-[1px] border-solid border-[#e7e7e7] outline-none px-3 py-2 w-80' 
                        placeholder='Enter discount code'
                        />
                    <button className='py-3 px-6 bg-[#f4f4f4] font-bold text-[13px] hover:bg-[#ff7272] hover:text-white'>APPLY DISCOUNT</button>
                </div>
            </div>
            <div className='flex-[1] border-2 border-solid border-[#e7e7e7] py-6 px-8'>
                <h3 className='font-bold text-[#222529] -tracking-[0.16px] leading-5 mb-5 text-[20px]'> <strong>SUMMARY</strong> </h3>
                <div className='flex justify-between  border-t-[1px] border-solid border-[#e7e7e7] py-2' onClick={()=>setShippingTaxForm(!shippingTaxForm)}>
                    <h3 className='cursor-pointer'>Estimate Shipping and Tax</h3> 
                    <FontAwesomeIcon icon={faAngleUp} rotation={shippingTaxForm? 180: 0}/>
                </div>
                { shippingTaxForm && 
                    <div className='form text-[#777777]  py-5 px-2'>
                        <label htmlFor="country" className='w-full px-3 py-2'>Country</label>
                        <select name="country" className='w-full px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none bg-[#ffffff]' >
                            <option value="" selected></option>
                            <option value="vn">Viet Nam</option>
                            <option value="us">Unites State</option>
                        </select>
                        <h3 className='w-full px-3 py-2'>State/Province</h3>
                        <input type="text" className='w-full px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none bg-[#ffffff]'/>
                        <h3 className='w-full px-3 py-2'>Zip/Postal Code</h3>
                        <input type="text" className='w-full px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none bg-[#ffffff]'/>
                    </div>}
                <div className='subtotal flex justify-between border-t-[1px] border-solid border-[#e7e7e7]'> 
                    <h3 className='py-1'>Subtotal</h3>
                    <span>$190.00</span>
                </div>
                <div className='Tax flex justify-between border-b-[1px] border-solid border-[#e7e7e7] '> 
                    <h3 className='py-1'>Tax</h3>
                    <span>$00</span>
                </div>
                <div className="orderTotal flex justify-between font-extrabold text-[#222529] text-xl py-2">
                    <h3>Order Total:</h3>
                    <span>$190.00</span>
                </div>
                <div className="checkout-btn text-white bg-black text-center px-4 py-2 text-[15px] font-bold cursor-pointer">GO TO CHECKOUT <FontAwesomeIcon icon={faArrowRight} size="1x" /> </div>
                <div className="text-[#ff7272] text-[14px] leading-6 text-center py-2 cursor-pointer">
                    Check Out with Multiple Address
                </div>
            </div> 
        </div>
    </div>
  )
}
