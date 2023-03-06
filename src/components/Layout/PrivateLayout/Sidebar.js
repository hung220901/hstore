import React, { useState } from 'react'  
import { NavLink} from 'react-router-dom'; 
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faBars ,faSearch, faBasketShopping, faList, faUserGroup, faCompass  } from '@fortawesome/free-solid-svg-icons';   
export default function Sidebar() {
    const [expand, setExpand] = useState(false) 
    const navArr = [
        {
            'name':'Dashboard',
            'icon':'house',
            'url':'/admin/dashboard'
        },
        {
            'name':'Products',
            'icon':'basket-shopping',
            'url':'/admin/product'
        },
        {
            'name':'Category',
            'icon':'list',
            'url':'/admin/category'
        },
        {
            'name':'Customers',
            'icon':'user-group',
            'url':'/admin/user'
        },
        {
            'name':'Orders',
            'icon':'compass',
            'url':'/admin/orders'
        },
    ] 
    library.add(faHouse, faBasketShopping, faList, faUserGroup, faCompass)
    const show = (e) =>{
        e.preventDefault()
        setExpand(!expand)
    }
  return (
    <div>
        <div className={`fixed top-0 h-full transition-all delay-50 bg-[#333] w-[70px] group side-bar
        !-left-full ${expand  && '!left-0 !w-[70px] hover:!w-[345px] z-50'} 
        `}>
            <div className="h-[90px] py-[1rem] pr-0 pl-[2rem] text-white">
                <h2 className={`text-center`}>
                    <span className='inline-block pr-[1rem]'>H</span>
                    <span className={`${expand && 'hidden'} inline-block pr-[1rem]`}>HSTORE</span>
                </h2>
            </div>
            <div className="mt-[1rem] ">
                <ul> 
                    {
                        navArr.map((item, index)=>(
                            <li className='w-full mb-[1.7rem] pl-[1rem] group' key={index}>
                                <NavLink to={item.url} className="pl-[1rem] text-[1.1rem] text-white
                                hover:bg-white hover:py-[1rem] hover:text-[#333] rounded-[30px_0_0_30px] flex items-center">
                                    <span className='text-[1.5rem] pr-[1rem] block'><FontAwesomeIcon icon={item.icon} /></span>
                                    <span className={`${expand && 'hidden group-hover:block'} `}>{item.name}</span>
                                </NavLink>
                            </li> 
                        ))
                    } 
                </ul>
            </div>
        </div>  
        <header className={`bg-white flex justify-between py-[1rem] px-[1.5rem] shadow-[2px_2px_5px_rgba(0,0,0,0.2)]
        fixed top-0 z-40 transition-[left] delay-[90ms] left-0 w-full  ${expand && '!w-[calc(100%-70px)] !left-[70px] '}
        `}>
            <h2 className='text-[#222]'>
                <label htmlFor="nav-toggle" onClick={show} className="bg-[#333] mr-[1rem] h-10 w-10 rounded-[50%] text-white
                    flex items-center justify-center
                ">
                    <span className='text-[1.7rem]'>
                        <FontAwesomeIcon icon={faBars} /> 
                    </span>
                </label>
            </h2>
            <div className="border-solid border-[#ccc] border-[1px] rounded-[30px] h-[50px] items-center overflow-x-hidden
            hidden md:flex
            ">
                <input type="search" placeholder="Type here" className='h-full p-[0.5rem] border-none outline-none'/>
                <span className='inline-block px-[1rem] text-[1.2rem]'><FontAwesomeIcon icon={faSearch} /></span>
            </div>
            <div className="flex items-center">
                <div> 
                    <div>
                        <h4> Hello,  </h4>
                        <p className='btn-admin'>Sign Out</p>
                    </div> 
                </div>
            </div>
        </header>
    </div> 
  )
}
