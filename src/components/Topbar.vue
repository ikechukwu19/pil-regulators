<template>
  <div class="header">
    <span class="tp">
      <p class="" @click="$emit('action2');">
        {{ text }}
      </p>
      <button class="" @click="$emit('action'), add();" v-if="showButton">
        {{ buttonText }}
      </button>
    </span>
    <span class="right">
      <img src="@/assets/notify.svg" alt="">
      <div class="userId">
        <i class="bi bi-person-circle"></i>
        <span>
          <h3 class="">
            Joseph Benjamin
          </h3>
        </span>
      </div>
    </span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  buttonText: String,
  showButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
  .header{
    height: 48px;
    width: 100%;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E7E7E7;
    font-family: 'Manrope', sans-serif;
  }
  .userId{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  h3{
    color: #111111;
    font-size: 10px;
  }
  i{
    color: #111111a6;
    margin-right: 6px;
  }
  .right{
    display: flex;
  }
  .notify{
    color: #0024F6;
  }
  .tp{
    display: flex;
    align-items: center;
    margin-left: -20px;
  }
  .tp p{
    font-size: 12px;
    color: #333333;
    margin-right: 10px;
  }
  .tp button{
    color: #0024F6;
    font-size: 10px;
    background: #E7F3FF;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
