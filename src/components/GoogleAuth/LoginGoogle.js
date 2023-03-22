import {useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'; 
import {GoogleLoginButton}  from 'react-social-login-buttons'  
import { useNavigate } from 'react-router-dom';
import * as request from '../../services/authServices'
 export default function LoginGoogle() {
  const navigate = useNavigate()
  
  const login = useGoogleLogin({
    onSuccess: async codeResponse =>{ 
      try { 
        const responseGoogle = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
              "Authorization": `Bearer ${codeResponse.access_token}`
          }
        })  
        if(responseGoogle.data.email_verified){
          const res = await request.login({
            'name':responseGoogle.data.name,
            'email':responseGoogle.data.email,
            'password':responseGoogle.data.sub
          })
          localStorage.setItem('token',res.data.token)
          console.log(res);
          navigate('/')
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