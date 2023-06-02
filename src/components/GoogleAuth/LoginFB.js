import React  from 'react'; 
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons' 
import { getUserByEmail } from '../../services/userServices';
import * as request from '../../services/authServices'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../redux/authSlice';
import {toast} from 'react-toastify' 
export default function LoginFB() {
    const dispatch = useDispatch()
    const navigate = useNavigate()         
 
    const responseFacebook = async(response) => { 
        // 2 Trường hợp :  
        // 1 đã có email trong db => đăng nhập
        // check có email và tồn tại phương thức đăng nhập khác => thông báo vui lòng đăng nhập phương thức khác 
        // Ngược lại thì đăng nhập với phương thức hiện tại
        // 2 chưa có email => đăng ký 
      
        const existedAccount = await getUserByEmail(response.data.email); 

        if(existedAccount.length){  

          if(existedAccount[0].provider != 'facebook'){ 
            toast.error('Email existed! Please use another method login')
          } 
          else{ 
            const res = await request.login({ 
                'email':response.data.email,
                'avatar':{'url':response.data.picture.data.url},
                'facebookId':response.data.id,
                'provider':'facebook'
            })  
            localStorage.setItem('token',res.token) 
            dispatch(getCurrentUser({userName: res.userName,role: res.role,avatar:{url:response.data.picture.data.url}}))
            navigate('/')   
          }
        }
        else{  
          const res = await request.register({
            'name':response.data.name,
            'email':response.data.email,
            'avatar':{'url':response.data.picture.data.url},
            'facebookId':response.data.id
          })  
          localStorage.setItem('token',res.data.token) 
          dispatch(getCurrentUser({userName: res.data.userName,role: res.data.role,avatar:{url:response.data.picture.data.url}}))
          navigate('/') 
        } 
    }  
  return ( 
    <div className=''> 
      <LoginSocialFacebook
          appId="578254620751474"   
          onResolve={responseFacebook}
          onReject={(error) => {
            console.log(error);
          }}  
      >
        <FacebookLoginButton  className='facebook-btn'/> 
      </LoginSocialFacebook>      
    </div>
  )
}


 