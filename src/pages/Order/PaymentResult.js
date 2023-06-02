import React, { useEffect, useState } from 'react' 
import { useLocation  } from 'react-router-dom'
import queryString from 'qs'
import * as request from '../../services/orderService'
import {clearCart, clearCartInDb} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
export default function PaymentResult() {
  const location = useLocation()  
  const [transaction, setTransaction] = useState({})
  const dispatch = useDispatch()
  // Handle render transaction status
  useEffect(() => {
    const { vnp_TransactionStatus,vnp_TxnRef,vnp_TransactionNo,vnp_BankCode,vnp_PayDate} = queryString.parse(location.search); 
    
    switch (vnp_TransactionStatus) {
      case "00":
        // Thanh toán thành công
        setTransaction({ status: "sucess", message: "Thanh toán thành công",orderId:vnp_TxnRef,bankCode:vnp_BankCode, transId:vnp_TransactionNo,transDate:vnp_PayDate}) 
        break;
      case "07": 
        setTransaction({ status: "error", message: "Trừ tiền thành công. Giao dịch bị nghi ngờ" });
        break;
      case "09": 
        setTransaction({ status: "error", message: "Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng" });
        break;
      case "10": 
        setTransaction({ status: "error", message: "Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần" });
        break;
      case "11": 
        setTransaction({ status: "error", message: "Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch." });
        break;
      case "12": 
        setTransaction({ status: "error", message: "Thẻ/Tài khoản của khách hàng bị khóa." });
        break;
      case "13": 
        setTransaction({ status: "error", message: "Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch."});
        break;
      case "24": 
        setTransaction({ status: "error", message: "Khách hàng hủy giao dịch" });
        break;
      case "51": 
        setTransaction({ status: "error", message: "Tài khoản của quý khách không đủ số dư để thực hiện giao dịch." });
        break;
      case "65": 
        setTransaction({ status: "error", message: "Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày." });
        break;
      case "75": 
        setTransaction({ status: "error", message: "Ngân hàng thanh toán đang bảo trì." });
        break;
      case "79": 
        setTransaction({ status: "error", message: "KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch" });
        break; 
      default:
        // Mã lỗi không xác định
        setTransaction({ status: "error", message: "Mã lỗi không xác định" });
        break;
    }
    return ()=>{
      
    }
  }, [location]);

  // Handle call api set payment status
  useEffect(()=>{
    const updatePaymentStatus = async()=>{
      await request.updateOrderPaymentStatus(transaction.orderId,{
        transId:transaction.transId,
        transDate:transaction.transDate,
        paymentStatus:'1',
        paymentMethod:transaction.bankCode
      }) 
    } 
    transaction.orderId && updatePaymentStatus()
    dispatch(clearCart()) 
    dispatch(clearCartInDb()) 
  },[transaction.orderId])

  return (
    <div className='w-full h-[450px] bg-[#efefef] text-[#222529] font-semibold '>
        <div className='text-center pt-40 leading-6'>
            <h1>{transaction && transaction.message}!</h1> 
        </div>
        <div className='flex justify-center items-center gap-5 p-5'>
          { transaction.status === "sucess" ?
            ( 
              <>
              <button className='bg-black text-white px-5 py-2' onClick={()=>window.location.replace(`/order-tracking?id=${transaction.orderId}`)}>Xem đơn hàng</button>
              <button className='border-solid border-2 border-black px-5 py-2'>Tiếp tục mua sắm</button> 
              </>
            )
            :
            (
              <button className='border-solid border-2 border-black px-5 py-2'>Trở về trang chủ</button> 
            )
          }
        </div>
    </div>
  )
}
