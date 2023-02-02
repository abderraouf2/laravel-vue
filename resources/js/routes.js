import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ClientsPage from './pages/ClientsPage'
import Providers from './pages/Providers'
import Transactions from './pages/Transactions'
export default [
    {path: '/', component:HomePage},
    {path: '/products', component:ProductPage},
    {path: '/clients', component:ClientsPage},
    {path: '/providers', component:Providers},
    {path: '/transactions', component:Transactions},
]