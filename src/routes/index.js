import routesConfig from '../config/routes'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
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
    {
        path: routesConfig.login,
        component: Login
    },
    {
        path: routesConfig.register,
        component: Register
    },
    {
        path: routesConfig.resetPassWord,
        component: ForgotPassword
    },
]
const privateRoutes = [
 
]

export { publicRoutes, privateRoutes}