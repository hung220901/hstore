import React from 'react'; 
import {Pie, Line} from 'react-chartjs-2';  
import 'chart.js/auto'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faCheck, faRotate, faTruck} from '@fortawesome/free-solid-svg-icons'
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Product',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ], 
      borderWidth: 2,
      borderColor: '#fff',
      data: [65, 59, 80, 81, 56]
    }, 
  ]
}

export default function DashBoard() { 
  return (
    <div className='px-20 pb-[50px] pt-[100px] bg-[#f9fafb]'>   
      <h2 className='py-5 font-bold'>Dashboard Overview</h2>
      <div className='flex w-full justify-evenly gap-2'>
        <div className="item flex gap-5 py-10 px-4 bg-white w-full justify-center">
          <div className='w-[50px] h-[50px] rounded-full flex items-center bg-red-100 justify-center text-red-600'>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className='content'>
            <h2>Total Order</h2>
            <span className='font-bold text-lg'>258</span>
          </div>
        </div>
        <div className="item flex gap-5 py-10 px-4 bg-white w-full justify-center">
          <div className='w-[50px] h-[50px] rounded-full flex items-center bg-blue-100 justify-center text-blue-600'>
            <FontAwesomeIcon icon={faRotate} />
          </div>
          <div className='content'>
            <h2>Order Pending</h2>
            <span className='font-bold text-lg'>38</span>
          </div>
        </div>
        <div className="item flex gap-5 py-10 px-4 bg-white w-full justify-center">
          <div className='w-[50px] h-[50px] rounded-full flex items-center bg-yellow-100 justify-center text-yellow-600'>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div className='content'>
            <h2>Order Processing</h2>
            <span className='font-bold text-lg'>32</span>
          </div>
        </div>
        <div className="item flex gap-5 py-10 px-4 bg-white w-full justify-center">
          <div className='w-[50px] h-[50px] rounded-full flex items-center bg-green-100 justify-center text-green-600'>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className='content'>
            <h2>Order Delivered</h2>
            <span className='font-bold text-lg'>188</span>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-2 mt-2 w-full'>
        <div className='p-4 bg-white w-full'>
          <h2 className='font-bold'>Weekly Sale </h2>
          <div className='flex justify-center w-full'>
            <div  className='w-[442px] h-[220px]'>
              <Line
                data={{
                  labels: ['January', 'February', 'March','April', 'May'],
                  datasets: [
                    {
                      label: 'Sale',
                      backgroundColor: [
                        '#6800B4'
                      ],
                      // borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 2,
                      borderColor: '#fff',
                      data: [65]
                    },
                  ]
                }}
                options={{
                  responsive: true,
                  title:{
                    display:true,
                    text:'Average sale per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  },
                  scales:{
                    x:{
                      min: 0,
                      max: 100,
                    },
                    y: {
                      min: 0,
                      max: 100,
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className='bg-white p-4 w-full'>
          <h2 className='font-bold'>Best Salling Products</h2>
          <div className='flex justify-center w-full'>
            <div className='w-[320px] h-[320px]'>
              <Pie 
                data={state}
                options={{
                  responsive: true,
                  title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 my-2'>
        <h2 className='font-bold mb-2'>Recent Order</h2>
        <div className='rounded-lg'>
          <table className='w-full text-left bg-white border-collapse'>
            <thead className='bg-gray-100'>
              <tr className='text-gray-500 border-gray-200 border-[1px] border-solid'>
                <th className='px-4 py-3'>Order Time</th>
                <th className='px-4 py-3'>DELIVERY ADDRESS</th>
                <th className='px-4 py-3'>PHONE</th>
                <th className='px-4 py-3'>PAYMENT METHOD</th>
                <th className='px-4 py-3'>ORDER AMOUNT</th>
                <th className='px-4 py-3'>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-gray-200 border-[1px] border-solid'>
                <td className='px-4 py-3'>Feb 26, 2023</td>
                <td className='px-4 py-3'>Nha Be</td>
                <td className='px-4 py-3'>0376573434</td>
                <td className='px-4 py-3 font-bold'>COD</td>
                <td className='px-4 py-3 font-bold'>$75.00</td>
                <td className='px-4 py-3'><span className='rounded-full bg-yellow-100 text-yellow-500'>Pending</span></td>
              </tr>
              <tr className='border-gray-200 border-[1px] border-solid'>
                <td className='px-4 py-3'>Feb 26, 2023</td>
                <td className='px-4 py-3'>Nha Be</td>
                <td className='px-4 py-3'>0376573434</td>
                <td className='px-4 py-3 font-bold'>COD</td>
                <td className='px-4 py-3 font-bold'>$75.00</td>
                <td className='px-4 py-3'><span className='rounded-full bg-green-100 text-green-500'>Delivered</span></td>
              </tr>
              <tr className='border-gray-200 border-[1px] border-solid'>
                <td className='px-4 py-3'>Feb 26, 2023</td>
                <td className='px-4 py-3'>Nha Be</td>
                <td className='px-4 py-3'>0376573434</td>
                <td className='px-4 py-3 font-bold'>COD</td>
                <td className='px-4 py-3 font-bold'>$75.00</td>
                <td className='px-4 py-3'><span className='rounded-full bg-blue-100 text-blue-500'>Processing</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}