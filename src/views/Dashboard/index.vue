<template>
  <div class="flex">
    <DashboardNav />
    <div class="view relative left-48">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import DashboardNav from "@/components/DashboardNav.vue";
</script>

<style>
.flex {
  display: flex;
}
.view {
  width: calc(100vw - 192px);
}
</style>
