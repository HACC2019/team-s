//import Landing from './pages/Landing.vue'
import Account from './pages/Account.vue'
import Landing from './pages/Landing.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
export default [
    { path:'/account', component: Account},
    { path:'/', component: Landing},
    {path:'/login', component: Login},
    {path:'/register', component: Register}
]