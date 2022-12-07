<template>
  <section>
    <Topbar text="Support" :showButton="false" />
    <SupportComponent />
  </section>
</template>

<script setup>
import Topbar from "@/components/Topbar.vue";
import SupportComponent from "@/components/SupportComponent.vue";
</script>

<style></style>
