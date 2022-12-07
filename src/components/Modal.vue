<template>
  <div class="box">
    <img src="@/assets/lottery-logo.svg" width="100" alt="">
    <p>
      You have successfully added <br>
A & B incorporated Nigeria Limited - Easybet
    </p>
    <p>An invitation will be sent to them via email</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>

<style scoped>
  .box{
    width: 440px;
    height: 311px;
    background: #FFFFFF;
    box-shadow: 0px 4px 50px #56586d1a;
    border-radius: 8px;
    text-align: center;
    padding: 50px;
  }
  .box img{
    border-radius: 100px;
    margin-bottom: 10px;
    background: #e7e7e7;
  }
  p{
    font-size: 12px;
    line-height: 1.5;
    color: #121826;
    font-family: 'Inter';
  }
</style>
