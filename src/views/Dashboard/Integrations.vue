<template>
  <section class="w-full height">
    <Topbar
      @action="showModal = true"
      text="7,500 / 10,000 units"
      buttonText="Buy units"
    />
    <main class="flex h-full w-full font-inter">
      <div class="border-r-[1px] w-4/5 px-4 border-[#E7E7E7]">
        <h1 class="font-semibold text-sm text-[#111111] mt-[11px]">
          Integrations
        </h1>
        <div class="h-[180px] w-[204px] rounded-lg shadow-md p-4 mt-4 bg-white">
          <div
            class="h-8 w-8 bg-emerald-50 grid place-content-center rounded-lg mb-[10px]"
          >
            <i class="bi bi-shield-fill-check text-[#0FB177] opacity-100"></i>
          </div>
          <h1 class="font-bold text-sm text-[#333] mb-[10px]">KYC</h1>
          <p class="text-xs text-[#333] mb-[10px]">
            Verify the identity of your users with ease.
          </p>
          <button class="text-xs border text-[#56586D] w-[144px] h-8">
            Start integration
          </button>
        </div>
      </div>
      <div class="w-1/5"></div>
    </main>
    <Modal v-if="showModal" @close="showModal = false" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Topbar from "@/components/Topbar.vue";
import Modal from "@/components/Modal.vue";
const showModal = ref(false);
</script>

<style>
.height {
  height: calc(100vh - 48px);
}
</style>
