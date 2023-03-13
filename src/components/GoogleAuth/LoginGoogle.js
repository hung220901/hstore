import {useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {GoogleLoginButton}  from 'react-social-login-buttons'  

 export default function LoginGoogle() {
 
 
  const login = useGoogleLogin({
    onSuccess: async codeResponse =>{ 
      try { 
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
              "Authorization": `Bearer ${codeResponse.access_token}`
          }
        }) 
        console.log(res.data)
      } catch (error) {
        
      }
    }, 
  }); 
  
   return (
     <div className='w-full'> 
      <GoogleLoginButton    
        text='Login with Google' 
        onClick={()=>login()}
      />
     </div>
   )
 } 