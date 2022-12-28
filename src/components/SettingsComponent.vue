<template>
  <section class="">
    
    <div class="paage">
      <div class="root">
      <div class="">
      <h2 class="category">PROFILE SETTINGS</h2>
      <div class="">
        <p class="label">Profile picture</p>
        <div class="drag-file">
          <div class="select-display">
            SD
          </div>
          <p class="label">
            Drag an image to upload or
            <label for="profilePics" class="">click here</label>
            to browse
          </p>
        </div>
        <input type="file" id="profilePics" hidden />
      </div>
      <div class="full">
        <label for="name" class="label">Full name</label>
        <input
          type="text"
          id="name"
          class=""
        />
      </div>
      <div class="full">
        <label for="email" class="label">Email</label>
        <input
          type="email"
          id="email"
          class=""
        />
      </div>
      <div class="full">
        <label for="phone no" class="label">Phone number</label>
        <input
          type="tel"
          id="phone no"
          class=""
        />
      </div>
    </div>
    <hr>
    <div class="notification">
      <h2 class="category">LOGIN NOTIFICATION</h2>
      <div class="toggle-notification">
        <p class="label">Send log in notification</p>
        <div
          class="toggle-btn"
          :class="[active ? 'bg-active' : '']"
          @click="active = !active" >
          <div :class="{ 'active': active }"
          ></div>
        </div>
      </div>
    </div>
    <hr>
    <div class="root">
      <h2 class="category">PASSWORD SETTINGS</h2>
      <div class="full">
        <label for="name" class="label">Enter current password</label>
        <div class="full pas">
          <input
            :type="[showPassword ? 'text' : 'password']"
            id="password"
            v-model="password"
            class=""
          />
          <i
            class="bi bi-eye-fill pass"
            v-if="!showPassword"
            @click="showPassword = !showPassword"
          ></i>
          <i
            class="bi bi-eye-slash-fill pass"
            v-else
            @click="showPassword = !showPassword"
          ></i>
        </div>
      </div>
      <div class="full">
        <label for="name" class="label">Enter new password</label>
        <div class="full pas">
          <input
            :type="[showPassword ? 'text' : 'password']"
            id="password"
            v-model="password"
            class=""
          />
          <i
            class="bi bi-eye-fill pass"
            v-if="!showPassword"
            @click="showPassword = !showPassword"
          ></i>
          <i
            class="bi bi-eye-slash-fill pass"
            v-else
            @click="showPassword = !showPassword"
          ></i>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Topbar from "@/components/Topbar.vue";
const showPassword = ref(false);
const active = ref(false);

</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
  .root{
    width: 358px;
    margin: 0px auto;
    padding: 25px 0px;
  }
  .page{
    width: 100%;
  }
  .category{
    font-size: 10px;
    color: #656565;
    font-family: 'Inter';
    font-weight: 600;
    margin-bottom: 22px;
    letter-spacing: 1px;
  }
  .label{
    font-size: 12px;
    color: #111111;
    font-family: 'Inter';
    margin-bottom: 7px;
  }
  .drag-file{
    width: 358px;
    height: 64px;
    border: 1px dashed #11111129;
    background: #E7F3FF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 16px;
  }
  .select-display{
    width: 32px;
    height: 32px;
    background: #E9B358;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: 500;
    margin-right: 10px;
  }
  .root .full{
    width: 358px ;
  }
  hr{
    margin: 30px 0px;
    border: 1px solid #11111129;
  }
  .pass{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .pas{
    position: relative;
  }
  .pas input{
    padding-right: 30px;
  }
  .toggle-notification {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    position: relative;
    width: 20px;
    height: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    background-color: #0A8634;
    transition: all ease .5s;
    cursor: pointer;
    background-color: rgba(17, 17, 17, 0.5);
  }
  .toggle-btn div {
    width: 8px;
    height: 8px;
    background-color: #FFFFFF;
    position: absolute;
    left: 0.8px;
    border-radius: 50%;
    transition: all ease .5s;
  }
  .bg-active {
    background-color: #0A8634;
  }
  .active {
    transform: translateX(10px);
  }
</style>
