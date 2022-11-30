import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {  publicRoutes} from './routes/index'
import DefaultLayout from './components/Layout/DefaultLayout';
function App() {
  return (
    <Router>
        <Routes>
          {
            publicRoutes.map((route,index)=>{
              const Layout = route.layout === null ? <> </> : DefaultLayout
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
            })
          }
        </Routes>
    </Router>
  );
}

export default App;
