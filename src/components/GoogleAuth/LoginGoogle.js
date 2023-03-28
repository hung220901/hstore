import {useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'; 
import {GoogleLoginButton}  from 'react-social-login-buttons'  
import { useNavigate } from 'react-router-dom';
import * as request from '../../services/authServices'
import { useDispatch } from 'react-redux';
import {getCurrentUser} from '../../redux/authSlice'
import {getUserByEmail} from '../../services/userServices'
 export default function LoginGoogle() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login = useGoogleLogin({
    onSuccess: async codeResponse =>{ 
      try { 
        const responseGoogle = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
              "Authorization": `Bearer ${codeResponse.access_token}`
          }
        })  
        if(responseGoogle.data.email_verified){
          // register
          // Check tk da co trong db  
          const existedAccount = await getUserByEmail(responseGoogle.data.email); 
          if(existedAccount.length){
            // login 
            const res = await request.login({
              'name':responseGoogle.data.name,
              'email':responseGoogle.data.email,
              'avatar':{'url':responseGoogle.data.picture},
              'password':responseGoogle.data.sub, 
            })  
            localStorage.setItem('token',res.token) 
            dispatch(getCurrentUser({userName: res.userName,role: res.role,avatar:{url:responseGoogle.data.picture}}))
            navigate('/') 
          }
          else{
            const register = await request.register({
              'name':responseGoogle.data.name,
              'email':responseGoogle.data.email,
              'avatar':{'url':responseGoogle.data.picture},
              'password':responseGoogle.data.sub, 
            })  
            localStorage.setItem('token',register.data.token) 
            dispatch(getCurrentUser({userName: register.data.userName,role: register.data.role,avatar:{url:responseGoogle.data.picture}}))
            navigate('/') 
          }
        }
        else{
          console.log('Your google account is not verified!');
        }

      } catch (error) {
        console.log(error);
      }
    }, 
  }); 
  
   return (
     <div className='w-full'> 
      <GoogleLoginButton    
        text='Login with Google' 
        onClick={()=>login()} 
        className='!flex justify-center'
      />
     </div>
   )
 } 