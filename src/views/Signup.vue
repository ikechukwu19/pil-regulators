<template>
  <div class="body">
    <div class="main">
      <div class="left-side">
        <h1 class="">Create your account</h1>
        <span class=""></span>
        <p class="">
          If you already have an acccount, log in instead.
        </p>
      </div>
      <div class="right-side">
        <p class="instruction">
          Enter your details to create an account.
        </p>
        <form @submit.prevent="submit">
          <div class="names">
            <span class="">
              <label for="firstname" class="label">First name</label>
              <input
                type="text"
                id="firstname"
                v-model="userDetails.firstname"
                class=""/>
            </span>
            <span class="">
              <label for="lastname" class="label">Last name</label
              >
              <input
                type="text"
                id="lastname"
                v-model="userDetails.lastname"
                class=""/>
            </span>
          </div>
          <div class="full">
            <label for="email" class="">Email address</label>
            <input
              type="email"
              id="email"
              v-model="userDetails.email"
              class=""/>
          </div>
          <div class="full">
            <label for="tel" class="">Phone number</label>
            <input
              type="tel"
              id="tel"
              v-model="userDetails.tel"
              class=""/>
          </div>
          <div class="full">
            <label for="password" class="">Password</label>
            <input
              type="password"
              id="password"
              v-model="userDetails.password"
              class=""/>
          </div>
          <div class="check">
            <input type="checkbox" id="terms" required />
            <label for="terms" class="">I accept terms and conditions</label>
          </div>
          <div class="sign">
            <button
              class="sign">
              Sign up
            </button>
            <p class="signin">
              Have an account?
              <router-link to="/signin" class="">Sign in</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
  .body{
    background-color: #D3EBF8;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
    width: 656px;
    height: fit-content;
    display: flex;    
    font-family: 'Inter';
  }
  .left-side{
    border-radius: 8px 0px 0px 8px;
    background-color: #0024F6;
    width: 256px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
    box-shadow: 0px 4px 50px rgba(86, 88, 109, 0.1);
  }
  h1{
    font-size: 24px;
    color: #fff;
    line-height: 29.05px;
    font-weight: normal;
  }
  .left-side span{
    border: 1px solid #fff;
    width: 64px;
    margin: 15px 0px;
  }
  .left-side p{
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    color: #fff;
  }
  .right-side{
    background-color: #fff;
    border-radius: 0px 8px 8px 0px;
    box-shadow: -4px 4px 16px rgba(17, 17, 17, 0.16);
    padding: 50px;
  }
  p.instruction, label{
    color: #56586D;
    font-size: 14px;
    line-height: 24px;
  }
  form{
    width: 305px;
    margin-top: 20px;
  }
  .names{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 17px;
  }
  .names input{
    height: 40px;
    width: 144px;
    border: 1px solid #E7E7E7;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 0px 10px;
  }
  input:focus{
    outline: 1px solid #0024F6;
    border: none;
  }
  .full{
    display: flex;
    flex-direction: column;
    width: 305px;
  }
  .full input{
    height: 40px;
    border: 1px solid #E7E7E7;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 0px 10px;
  }
  label{
    font-size: 14px;
    font-family: 'Inter';
    font-weight: 300;
    margin: 13px 0px 7px 0px;
  }
  .names span input{
    margin-top: 7px;
  }
  .check{
    margin-top: 13px;
    display: flex;
    align-items: center;
  }
  .check label{
    padding-bottom: 7px;
    margin-left: 7px;
  }
  #terms:focus{
    outline: none;
  }
  div.sign{
    text-align: center;
  }
  button.sign{
    width: 240px;
    height: 40px;
    background-color: #0024F6;
    border: none;
    border-radius: 5px;
    color: #fff;
  }
  .signin{
    margin: 20px 0px;
    font-size: 14px;
    font-family: Ubuntu;
  }
</style>



<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userDetails = ref({
  firstname: "",
  lastname: "",
  tel: "",
  email: "",
  password: "",
});

function submit() {
  router.push("/verify");
  console.log(userDetails.value);
}
</script>
