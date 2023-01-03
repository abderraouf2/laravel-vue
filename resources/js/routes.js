import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ClientsPage from './pages/ClientsPage'
import CheckOut from './pages/CheckOut'
export default [
    {path: '/', component:HomePage},
    {path: '/products', component:ProductPage},
    {path: '/clients', component:ClientsPage},
    {path: '/checkout', component:CheckOut}
]