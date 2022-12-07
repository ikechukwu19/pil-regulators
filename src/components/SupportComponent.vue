<template>
  <main class="flex h-full w-full">
    <div
      class="border-r-[1px] w-4/5 px-4 border-[#E7E7E7] flex flex-col items-center height font-inter"
    >
      <div class="mt-5 flex flex-col" v-if="show">
        <h1 class="font-medium text-sm text-[#111]">Hello Akin</h1>
        <p class="text-xs text-[#111] mt-[5px]">
          How would you like us to assist you today?
        </p>
        <textarea
          cols="30"
          rows="10"
          class="mt-4 focus:outline-none border-[1px] border-[#11111130] rounded-lg p-4 text-[#111] text-sm w-[358px] h-[241px]"
          v-model="message"
        ></textarea>
        <button
          class="h-10 w-[182px] bg-[#0024F6] text-white text-xs rounded mt-4 mx-auto"
          @click="sendMessage"
        >
          Send message
        </button>
      </div>
      <div
        v-else
        class="mt-[70px] h-[230px] w-[328px] rounded-lg shadow-md flex flex-col items-center justify-center"
      >
        <span
          class="h-20 w-20 rounded-full bg-[#D9D9D9] mb-5 grid place-content-center"
        >
          <i class="bi bi-check2-circle text-4xl text-green-500"></i>
        </span>
        <h2 class="text-xs text-[#111] font-semibold mb-1">
          Your message has been sent
        </h2>
        <p class="text-xs text-[#121826] font-normal">
          A member of our support team will reach out to you.
        </p>
      </div>
    </div>
    <div class="w-1/ pl-4">
      <h3 class="font-medium text-sm text-[#111] mt-4">FAQs</h3>
      <p
        v-for="(faq, index) in faqs"
        :key="index"
        class="text-xs text-[#111] mt-5 cursor-pointer"
        @click="addFaq(faq.question)"
      >
        {{ faq.question }}
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
const show = ref(true);
const faqs = ref([
  {
    question: "How to buy units",
  },
  {
    question: "How to add a user",
  },
  {
    question: "How to remove a user",
  },
  {
    question: "How to edit user privileges",
  },
  {
    question: "How to reset my password",
  },
]);

function sendMessage() {
  show.value = false;
  console.log(message.value);
}
function addFaq(faq) {
  message.value = faq + " ?";
}
</script>

<style>
.height {
  height: calc(100vh - 48px);
}
</style>
