import React from 'react'

const Pagination = ({ limit , total, paginate, pre, next, current})=>{
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(total / limit ); i++){
        pageNumber.push(i);
    }
    
    return ( 
    <ul className='flex items-center justify-center'>
        <button className='border-solid border-black border-[1px] px-2 py-1'  onClick={pre} >Pre</button> 
        {pageNumber.map(number =>( 
            <li key={number}  className= { number === current ?  'border-solid border-[#ff7272] border-2 px-2 py-1': ' border-solid border-black border-[1px] px-2 py-1' } onClick={()=>paginate(number)}>{number}</li> 
        ))} 
        <button className='border-solid border-black border-[1px] px-2 py-1' onClick={next}>Next</button> 
    </ul> 

    )
} 
export default  Pagination