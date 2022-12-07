<template>
    <section>
      <Topbar
      @action="showModal = true"
      text="7,500 / 10,000 units"
      buttonText="Buy units"
    />
    <div class="set">
      <Settings />      
    </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import Settings from "@/components/SettingsComponent.vue";
import Topbar from "@/components/Topbar.vue";
</script>

<style scoped>
  div.set{
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }
</style>
