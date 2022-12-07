<template>
  <div class="body">
    <div class="main">
      <div class="left-side">
        <h1 class="">Log in to your account</h1>
        <span class=""></span>
        <p class="">
          Create an account if you don't have one already.
        </p>
      </div>
      <div
        class="right-side">
        <p class="instruction">
          Enter your details to log in to your account
        </p>
        <form @submit.prevent="submit">
          <div class="full">
            <label for="email" class="">Email</label>
            <div class="full">
              <img src="../assets/mail.svg" class="icon mail" alt="">
              <input
                type="email"
                id="email"
                v-model="userDetails.email"
                class="space"/>
            </div>
          </div>
          <div class="full">
            <label for="password" class="">Password</label>
            <div class="full">
              <img src="../assets/password.svg" class="icon password" alt="">
              <input
                :type="[showPassword ? 'text' : 'password']"
                id="password"
                v-model="userDetails.password"
                class="space"
              />
              <img src="../assets/eye.svg" class="icon eye" alt="" v-if="!showPassword"
                @click="showPassword = !showPassword">
              <img src="../assets/eye2.svg" class="icon eye" v-else
                @click="showPassword = !showPassword" alt="">
            </div>
          </div>
          <div class="sign">
            <button
              class="sign otp"
            >
              Sign up
            </button>
            <br><br>
            <router-link
              to="/forgotpassword"
              class="signin link"
              >Forgot pasword</router-link
            >
            <p class="signin">
              Don't have an account?
              <router-link to="/signup" class="link">Sign up</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userDetails = ref({
  email: "",
  password: "",
});
const showPassword = ref(false);
function submit() {
  console.log(userDetails.value);
  router.push("/verifyOTP");
}
</script>

<style>
  .icon{
    width: 10px;
    position: absolute;
    margin: 15px;
  }
  .icon.password{
    margin: 12px;
  }
  input.space{
    padding: 0px 35px;
  }
  .eye{
    margin-left: 280px;
    cursor: pointer;
    width: 14px;
  }
  .link{
    text-decoration: none;
  }
</style>
