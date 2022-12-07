import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'
import Verify from '../views/Verify.vue'
import Signin from '../views/Signin.vue'
import Verifyotp from '../views/VerifyOtp.vue'
import NewPassword from '../views/newpassword.vue'
import ForgotPassword from '../views/forgotpassword.vue'
import DashboardLayout from '../views/Dashboard/index.vue'
import Dashboard from '../views/Dashboard/dashboard.vue'
import Operators from '../views/Dashboard/operators.vue'
import Settings from '../views/Dashboard/Settings.vue'
import UserManagement from '../views/Dashboard/UserManagement.vue'
import UserSettings from '../views/Dashboard/UserSettings.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/VerifyOtp',
      name: 'verifyotp',
      component: Verifyotp
    },
    {
      path: '/newpassword',
      name: 'newpassword',
      component: NewPassword
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "operators",
          name: "operators",
          component: Operators,
        },
        {
          path: "settings",
          name: "settings",
          component: Settings,
        },
        {
          path: "manageuser",
          name: "manageuser",
          component: UserManagement
        },
        {
          path: "manageuser/:id",
          name: "user settings",
          component: UserSettings
        }
      ],
    },
    
  ],
})


export default router;
