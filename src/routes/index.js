import routesConfig from '../config/routes'
import Cart from '../pages/Cart/Cart'
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
        component: Cart
    },
]
const privateRoutes = [
 
]

export { publicRoutes, privateRoutes}