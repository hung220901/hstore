import React, { useCallback, useEffect } from 'react';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {  privateRoutes, publicRoutes} from './routes/index'
import DefaultLayout from './components/Layout/DefaultLayout'; 
import PrivateLayout from './components/Layout/PrivateLayout';  
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; 
import { useDispatch } from 'react-redux';
import * as request from './services/authServices'
import {getCurrentUser} from './redux/authSlice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch()
  const checkCurrentUser = useCallback(async()=>{
    try {
      const token = localStorage.getItem("token")
      const res = await request.checkCurrentUser(token)
      dispatch(getCurrentUser(res.data.user))
    } catch (error) {
      console.log(error);
    }
  },[dispatch])
  useEffect(()=>{
    checkCurrentUser()
  },[checkCurrentUser])

  return ( 
    <Router>
      <ScrollToTop/>
      <ToastContainer />
        <Routes>
          {
            publicRoutes.map((route,index)=>{
              const Layout = route.layout === null ? <> </> : DefaultLayout
              const Page = route.component 
              return <Route key={index} path={route.path} element={<Layout> <Page/></Layout>} />
            })
          }
          {
            privateRoutes.map((route,index)=>{
              const Layout = route.layout === null ? <> </> : PrivateLayout
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
            })
          }
        </Routes>
    </Router>
  );
}

export default App;
