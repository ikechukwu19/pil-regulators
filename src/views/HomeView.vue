<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main>
    <h1>hello from vue</h1>
    <router-link to="/Signup" class="text-[#0024f6]">Sign in</router-link>
  </main>
</template>
