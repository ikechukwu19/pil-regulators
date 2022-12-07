import { createRouter, createWebHistory } from "vue-router";
import Signup from "@/views/Signup.vue";
import VerifyEmail from "@/views/Verify.vue";
import verifyOTP from "@/views/VerifyOtp.vue";
import Signin from "@/views/Signin.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import DashboardLayout from "@/views/dashboard/index.vue";
import Dashboard from "@/views/dashboard/dashboard.vue";
import Integrations from "@/views/dashboard/Integrations.vue";
import Settings from "@/views/dashboard/Settings.vue";
import UserManagement from "@/views/dashboard/UserManagement.vue";
import Support from "@/views/dashboard/Support.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/verify",
      name: "VerifyEmail",
      component: VerifyEmail,
    },
    {
      path: "/verifyOTP",
      name: "VerifyOTP",
      component: verifyOTP,
    },
    {
      path: "/login",
      name: "Login",
      component: Signin,
    },
    {
      path: "/forgotPassword",
      name: "Forgot Password",
      component: ForgotPassword,
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
          path: "integrations",
          name: "integrations",
          component: Integrations,
        },
        {
          path: "settings",
          name: "settings",
          component: Settings,
        },
        {
          path: "manageuser",
          name: "manageuser",
          component: UserManagement,
        },
        {
          path: "support",
          name: "support",
          component: Support,
        },
      ],
    },
    // {
    //
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
