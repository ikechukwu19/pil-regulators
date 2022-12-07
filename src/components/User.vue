<template>
  <main class="user-root">
    <div class="container">
      <div
        v-if="!show"
        class="user-display">
        <div class="identity">
          <span
            class="dp">AA</span
          >
          <span>
            <h2 class="">
              Akin Adebayo
            </h2>
            <p class="">Admin</p>
          </span>
        </div>
        <button class="" @click="$emit('manageUser')">
          Settings
        </button>
      </div>
      <div
        v-if="!show"
        class="user-display">
        <div class="identity">
          <span
            class="dp">AA</span
          >
          <span>
            <h2 class="">
              Akin Adebayo
            </h2>
            <p class="">Admin</p>
          </span>
        </div>
        <button class="" @click="$emit('manageUser')">
          Settings
        </button>
      </div>
      <div class="user" v-else>
        <div class="full wide">
          <label for="user" class="label">Select a user to add</label>

        <input
          type="email"
          placeholder="Enter email address"
          id="user"
          class="" />
        </div>
        <div class="sign">
          <button class="sign" >
          Proceed
        </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  show: {
    type: Boolean,
  },
});
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
.height {
  height: calc(100vh - 48px);
}
.user-display{
  display: flex;
  width: 544px;
  justify-content: space-between;
  background: #FFFFFF;
  border: 1px solid #11111114;
  border-radius: 8px;
  padding: 25px;
  align-items: center;
  margin: 20px auto;
}
.identity{
  display: flex;
  align-items: center;
}
.dp{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #11111156;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  color: #FFFFFF;
  margin-right: 15px;
  font-family: 'Inter', sans-serif;
}
h2{
  font-size: 12px;
  font-family: 'Manrope', sans-serif;
}
p{
  font-size: 10px;
  font-family: 'Manrope', sans-serif;
}
button{
  border: 1px solid #11111129;
  border-radius: 5px;
  padding: 0px 24px;
  font-size: 10px;
  height: 32px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  background: transparent;
}
.container{
  margin-top: 70px;
  width: 544px;
  margin: 0px auto;
}
.user input{
  width: 358px;
  margin-bottom: 25px;
}
.user{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 358px;
  margin-top: 50px;
}
.full.wide{
  width: 358px;
}
</style>
