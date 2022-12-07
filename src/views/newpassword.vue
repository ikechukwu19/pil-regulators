<template>
   <div class="body">
    <div class="main">
      <div class="left-side" style="padding-right: 70px;">
        <h1 class="">Reset Password</h1>
        <span class=""></span>
        <p class="">
          Let's help you reset your password.
        </p>
      </div>
      <div class="right-side otp">
        <p class="instruction">
        </p>
        <form @submit.prevent="submit">
          <div class="full">
            <label for="newpassword" class="">Enter new password</label>
            <div class="full">
              <input
              :type="[showPassword ? 'text' : 'password']"
              id="newpassword"
              v-model="newpassword"
              class="space"
            />
            <img src="../assets/eye.svg" class="icon eye" alt=""
            v-if="!showPassword" @click="showPassword = !showPassword" />
            <img src="../assets/eye2.svg" class="icon eye" alt=""
            v-else @click="showPassword = !showPassword" />
            </div>
          </div>

          <div class="sign otp">
            <button class="sign">
              Reset password
            </button>
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
  const newpassword = ref('');
  const showPassword = ref(false);
  function submit() {
    console.log(newpassword.value);
    router.push("/dashboard");
  }

</script>

<style>
  #newpassword{
    padding: 0px 35px 0px 15px ;
  }
</style>