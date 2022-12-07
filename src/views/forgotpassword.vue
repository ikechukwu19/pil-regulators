<template>
  <div class="body">
    <div class="main" v-if="show">
      <div class="left-side" style="padding-right: 70px;">
        <h1 class="">Reset Password</h1>
        <span class=""></span>
        <p class="">
          Let's help you reset your password.
        </p>
      </div>
      <div class="right-side otp">
        <p class="instruction">
          Enter your email to reset your password
        </p>
        <form @submit.prevent="submit">
          <div class="full">
            <label for="email" class="">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class=""
            />
          </div>

          <div class="sign otp">
            <button class="sign">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="main" v-else>
      <div class="left-side" style="padding-right: 70px;">
        <h1 class="">Reset Password</h1>
        <span class=""></span>
        <p class="">
          Let's help you reset your password.
        </p>
      </div>
      <div class="right-side otp reset">
        <p class="instruction reset">
          A link has been sent to your mail <br>
         <span> Check your mail and follow the steps to reset your password.</span>
        </p>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const email = ref('');
const show = ref(true);
function submit() {
  show.value = false;
}
</script>

<style>
  p.reset{
    text-align: center;
    font-weight: 600;
  }
  p.reset span{
    font-weight: 400;
    font-size: 12px;
  }
  div.right-side.reset{
    padding: 120px 50px 60px 50px;
  }
</style>
