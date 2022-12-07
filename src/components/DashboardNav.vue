<template>
  <nav class="body-menu">
    <div class="lottery-logo">
      <img src="@/assets/lottery-logo.svg" alt="">
    </div>
    <div class="font-inter routerLinks">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="routerLink"
      >
        <i :class="link.icon"></i> 
        {{ link.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>

import { ref } from "vue";

const links = ref([
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: "bi bi-grid-1x2-fill",
  },
  {
    name: "Usage report",
    to: "/dashboard/usage-report",
    icon: "bi bi-puzzle-fill",
  },
  {
    name: "Operators",
    to: "/dashboard/operators",
    icon: "bi bi-dice-5-fill",
  },
  {
    name: "Earnings",
    to: "/dashboard/earnings",
    icon: "bi bi-cash-stack",
  },
  {
    name: "Settings",
    to: "/dashboard/settings",
    icon: "bi bi-gear-fill",
  },
  {
    name: "User management",
    to: "/dashboard/manageuser",
    icon: "bi bi-person-fill-gear",
  },
  {
    name: "Support",
    to: "/dashboard/support",
    icon: "bi bi-exclamation-circle-fill",
  },
]);
</script>


<style  scoped>

  @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
  *{
    font-family: 'Inter';
  }
a{
  font-weight: 700;
  font-size: 13px;
  padding: 13px;
  text-decoration: none;
  color: #111111a6;
  height: 40px;
  margin-bottom: 5px;
}
a.router-link-exact-active {
  
  color: #FFFFFF;
  background: #0024f6;
  border-radius: 5px;
}
.body-menu{
  width: 205px;
  height: 100vh;
  background: rgba(17, 17, 17, 0.02);
  padding: 16px;
}
.lottery-logo{
  width: 100%;
  padding: 10px;
  text-align: center;
  margin: 10px 0px;
}
.lottery-logo img{
  width: 60%;
}
.routerLinks{
  display: flex;
  flex-direction: column;
}
.routerLink i{
  margin-right: 6px;
}
</style>
