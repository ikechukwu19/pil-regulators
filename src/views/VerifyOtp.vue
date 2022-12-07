<template>
  <div class="body">
    <div class="main" v-if="show">
      <div
        class="left-side "
      >
        <h1 class="">Confirm it is really you</h1>
        <span class=""></span>
        <p class="">
          We have sent a one-time password (OTP) to your email.
        </p>
      </div>
      <div class="right-side otp">
        <p class="instruction">
          Enter OTP that was sent to
          <span class="user-detail bold">abc@xyz.com</span> to verify your email
          address
        </p>
        <form @submit.prevent="submit">
          <div class="full">
            <label for="otp" class="">OTP</label>
            <input
              type="number"
              id="otp"
              v-model="EmailOtp"
              class=""
            />
          </div>

          <div class="sign otp">
            <button class="sign">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const EmailOtp = ref(null);
const PhoneOtp = ref(null);
const show = ref(true);
function submit() {
  show.value = false;
}
</script>

<style></style>
