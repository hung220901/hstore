import React, {   useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons'
 

export default function Rating({onRatingChange , data, status, size}) {  
  const [rating, setRating] = useState(null)
  const [hoveredStar, setHoveredStar] = useState(null)   
 
  useEffect(() => {
    setRating(data);
  }, [data]);



  const reviewStatus = useMemo(() => { 
    switch (rating || hoveredStar) {
      case 1:
        return 'Rất kém';
      case 2:
        return 'Kém';
      case 3:
        return 'Trung bình';
      case 4:
        return 'Tốt';
      case 5:
        return 'Xuất sắc';
      default:
        return '';
      }
    }, [rating,hoveredStar]);  
     

  const handleRatingChange = (value) => {  
    if(status){
      if(data){
        setRating(data)
      }
      setRating(value)
      if (onRatingChange) {
        onRatingChange(value);
      } 
    }
    else{
      return;
    }  
  };
  return ( 
    <>
    { status &&
      <h1 className={` mb-2 text-lg`}>{reviewStatus ? reviewStatus :'Vui lòng đánh giá'}</h1>
    }
    { [...Array(5)].map((star,i)=>{ 
      const ratingValue =  i + 1; 
      return (<FontAwesomeIcon  
        className={
          // (ratingValue <= rating || ( status && ratingValue <= hoveredStar))
          ratingValue <= (status ? (hoveredStar || rating) : rating)
            ? "text-yellow-400"
            : ""
        }
         key={i}
         icon={faStar} 
         size={size} 
         onClick={()=>handleRatingChange(ratingValue)}
         onMouseEnter={()=>setHoveredStar(ratingValue)}
         onMouseLeave={()=>setHoveredStar(null)}
         /> ) 
    })
    }
    </>
  )
}
