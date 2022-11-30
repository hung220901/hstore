import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
import './header.css';
import 'boxicons';
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
    <header id="header">
        <div className="header__navigation">
            <ul>
              <li>
                <Link to="/#">HOME</Link>
              </li>
              <li>
                <Link to="/#">CATEGORY</Link>
                <ul>
                  <li> <Link to='/a'> Adidass</Link></li>
                  <li> <Link to='/b'>Nike</Link> </li>
                  <li> <Link to='/c'>Adidass</Link></li>
                  <li> <Link to='/d'>Adidass</Link></li>
                  <li> <Link to='/e'>Adidass</Link> </li>
                  <li> <Link to='/f'>Adidass</Link> </li>
                </ul>
              </li>
              <li>
                <Link to="/#">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/#">PAGES</Link>
              </li>
              <li>
                <Link to="/#">FEATURES</Link>
              </li>
            </ul>
        </div>
        <div className="header__logo">
          <img src="https://www.portotheme.com/magento2/porto/pub/media/logo/stores/17/logo_ecomblack_lg.png" alt="" />
        </div>
        <div className="header__action">
          <div className="btn-user"><box-icon name='user' size='md'/></div>
          <div className="btn-wishlist"><box-icon name='heart' size='md'/> </div>
          <div className={`btn-show-search`} onClick={()=>setShow(!show)}>
            <box-icon name='search'size='md'/>
          </div>
          <div className={`search__box  ${show? 'show':'' }`}>
            <input 
              type="text" 
              id='search' 
              autoComplete='off' 
              placeholder='Search...'
              onChange={(e)=>setSearchValue(e.target.value)}
            />
            
            <div className="category__dropdown">
              <select name="category" id="category">
                <option defaultValue='All Category'>All Category</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="btn-search">
              <box-icon name='search'size='md'/>
            </div>
          <div className="search-result">
              <ul>
                {newProduct&& newProduct.map((prod,index)=>(
                  <li className='result-item' key={index}>{prod.name }</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="btn-cart" onClick={()=>setActive(!active)}>
            <box-icon size='md' name='shopping-bag'/>
            <span className='notify'>
              <span className='number-product'>{products.length}</span>
            </span> 
          </div>
          { active &&
            <div className="view-cart">
              <div className="cart-heading">
                <span>{products.length} ITEM</span>
                <span>VIEW CART</span>
              </div>
              <div className="cart-list-product">
                {products.length > 0 ? 
                  products.map((prod)=>(
                  <div key={prod.id} className="product-item">
                      <div className="product-info">
                        <div className="product-name">
                            {prod.name}
                        </div>
                        <span>See Detail</span>
                        <span>${prod.price}</span>
                        <span>Qty: 1</span>
                      </div>
                      <div className="product-image">
                        <img src={'./images/'+prod.image} alt="" />
                        <div className='remove-item' onClick={()=> handleDeleteProduct(prod.id)}>
                          <box-icon name='x'></box-icon>
                        </div>
                      </div>
                  </div>     
                  ))
                :(
                  <span className='cart-title'>
                  You have no items in your shopping cart
                </span>
                )
              }
              </div>
              <div className="subtotal">
                <span>SUBTOTAL:</span>
                <span>${total}</span>  
              </div>
              <div className="btn-checkout" onClick={() => addProduct()}>
              GO TO CHECKOUT
              </div>
            </div>              
          } 
        </div>
    </header>
  )
}
