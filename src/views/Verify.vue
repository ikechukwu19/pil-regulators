<template>
  <div class="body">
    <div class="main" v-if="show">
      <div class="left-side">
        <h1 class="">Verify your email address</h1>
        <span class=""></span>
        <p class="">
          We have sent a one-time password (OTP) to your email.
        </p>
      </div>
      <div class="right-side otp">
        <p class="instruction">
          Enter OTP that was sent to
          <span class="user-detail bold">abc@xyz.com</span> to verify your email address
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
              Verify email address
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="main" v-else>
      <div class="left-side otp">
        <h1 class="">Verify your phone number</h1>
        <span class=""></span>
        <p class="">
          We have sent a one-time password (OTP) to your phone number.
        </p>
      </div>
      <div class="right-side otp">
        <p class="instruction">
          Enter OTP that was sent to
          <span class="user-detail bold">0901234567</span> to verify your phone number
        </p>
        <form @submit.prevent="submit">
          <div class="full">
            <label for="otp" class="">OTP</label>
            <input
              type="number"
              id="otp"
              v-model="PhoneOtp"
              class=""
            />
          </div>

          <div class="sign otp">
            <button class="sign">
              Verify phone number
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

<style>
  .bold{
    font-weight: 700;
  }
  .right-side.otp{
    padding: 60px 50px;
    width: 400px;
  }
  .sign.otp{
    margin-top: 27px;
  }
</style>
