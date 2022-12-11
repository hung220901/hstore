import routesConfig from '../config/routes'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/ProductDetail/index'


const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home
    },
    {
        path: routesConfig.productDetail,
        component: ProductDetail
    },
    {
        path: routesConfig.cart,
        component: ProductDetail
    },
]
const privateRoutes = [
 
]

export { publicRoutes, privateRoutes}