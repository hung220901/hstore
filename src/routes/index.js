import routesConfig from '../config/routes'
import AboutUs from '../pages/About/AboutUs'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Cart from '../pages/Cart/Cart'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Categories from '../pages/Categories/Categories'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import Wishlist from '../pages/Account/Wishlist'
import Checkout from '../pages/Checkout/Checkout'
import Profile from '../pages/Account/Profile'
import Order from '../pages/Account/Order'
import OrderTracking from '../pages/Account/OrderTracking'
import DashBoard from '../pages/Admin/Dashboard/Dashboard'
import Product from '../pages/Admin/Product/Product'
import Search from '../pages/Search/Search'
import PaymentResult from '../pages/Order/PaymentResult'
import Category from '../pages/Admin/Category/Category'
import User from '../pages/Admin/User/User'
import OrderAdmin from '../pages/Admin/Order/Order'
import ReviewAdmin from '../pages/Admin/Review/Review'
import Brand from '../pages/Admin/Brand/Brand'
import Image from '../pages/Admin/Image/Image'


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
    {
        path: routesConfig.about,
        component: AboutUs
    },
    {
        path: routesConfig.contact,
        component: Contact
    },
    {
        path: routesConfig.wishlist,
        component: Wishlist
    },
    {
        path: routesConfig.categories,
        component: Categories
    },
    {
        path: routesConfig.checkout,
        component: Checkout
    },
    {
        path: routesConfig.profile,
        component: Profile
    },
    {
        path: routesConfig.order,
        component: Order
    },
    {
        path:routesConfig.paymentVNPay,
        component:PaymentResult
    },
    {
        path: routesConfig.orderTracking,
        component: OrderTracking
    },
    {
        path: routesConfig.searchCatalog,
        component: Search
    },
]
const privateRoutes = [
    {
        path: routesConfig.dashBoard,
        component: DashBoard
    },
    {
        path: routesConfig.productManager,
        component: Product
    },
    {
        path: routesConfig.categoryManager,
        component: Category
    },
    {
        path: routesConfig.userManager,
        component: User
    },
    {
        path: routesConfig.orderManager,
        component: OrderAdmin
    },
    {
        path: routesConfig.brandManager,
        component: Brand
    },
    {
        path: routesConfig.reviewManager,
        component: ReviewAdmin
    },
    {
        path: routesConfig.imageManager,
        component: Image
    },
]

export { publicRoutes, privateRoutes}