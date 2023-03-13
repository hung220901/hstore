import React from 'react';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {  privateRoutes, publicRoutes} from './routes/index'
import DefaultLayout from './components/Layout/DefaultLayout'; 
import PrivateLayout from './components/Layout/PrivateLayout';  
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; 
function App() {
  return ( 
    <Router>
      <ScrollToTop/>
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
