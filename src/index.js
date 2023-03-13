import React  from 'react';
import ReactDOM from 'react-dom/client';  
import GlobalStyles from './components/GlobalStyles' 
import { Provider } from 'react-redux';
import App from './App'
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <GlobalStyles>
      <GoogleOAuthProvider clientId="211781487401-iha3t3o5g3jb5ape663rera19dsq07ma.apps.googleusercontent.com" >
        <Provider store={store}> 
            <App />   
        </Provider>  
      </GoogleOAuthProvider>
    </GlobalStyles>  
);

 
 
