import Home from '../pages/Home/index'
import ProductDetail from '../pages/ProductDetail/index'
const publicRoutes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/product-detail',
        component: ProductDetail
    },
]
const privateRoutes = [
 
]

export { publicRoutes, privateRoutes}