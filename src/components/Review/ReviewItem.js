import React from 'react'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Rating from '../Filter/Rating';
export default function ReviewItem({review}) {  
  dayjs.extend(utc);
  dayjs.extend(timezone);   
  const dateCreated = dayjs(review.createdAt).tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY HH:mm') 
  return (
    <div className='flex gap-5 border-solid border-t-[1px] border-[#e7e7e7] py-5 '>
      <div className='w-10 h-10 '>
        <img src={review.userId?.avatar?.url === undefined ? 'https://source.unsplash.com/random': review.userId.avatar.url   } className='w-full h-full rounded-full' alt="" />
      </div>
      <div>
        <div className='font-semibold'>{review.userId.name}</div>
        <div>
          <Rating data={parseInt(review.rating)} />
        </div>
        <div>{dateCreated}</div>
        <div className='text-black'>{review.content}</div>
      </div>
    </div>
  )
} 