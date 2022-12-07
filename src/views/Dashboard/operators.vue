<template>
  <section class="w-full height" >
    <Topbar
      @action="show = false" 
      text="19 Operators"
      buttonText="Add operator" v-if="show"
    />
    <main class="" v-if="show">
        <Table />
    </main>
    <main class="" v-else>
        <Topbar text="Add Operator" buttonText="View operators" @action="show = true"/>
        <div>
            <form @submit.prevent="submit" v-if="form">
            <label for="businessname" required>Business name</label>
            <input type="text" name="businessname" v-model="operatorDetails.businessname" id="" />
            <label for="tradingname" required>Trading name</label>
            <input type="text" name="tradingname" v-model="operatorDetails.tradingname" id="" />
            <label for="email" required>Email address</label>
            <input type="email" name="email" v-model="operatorDetails.email" id="" />
            <label for="tel" required>Phone number</label>
            <input type="tel" name="tel" v-model="operatorDetails.tel" id="" />
            <label for="contactNumber" required>Name of contact person</label>
            <input type="tel" name="contactNumber" v-model="operatorDetails.contactNumber" id="" />
            <input type="submit" @click="submit();" value="Add operator" />
        </form>
        <div class="moda" v-else>
            <Modal />
        </div>
        </div>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import Topbar from "@/components/Topbar.vue";
import Table from "@/components/table.vue";
import Modal from "@/components/Modal.vue";
const show = ref(true);
const form = ref(true);
const operatorDetails = ref({
  businessname: "",
  Tradingname: "",
  email: "",
  tel: "",
  contactNumber: "",
});
function submit() {
  console.log(operatorDetails.value);
//   router.push("/Dashboard/modal");
    form.value = !form;
}

</script>

<style scoped>
.height {
  height: calc(100vh - 48px);
}
form{
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-top: 50px;
    width: min-content;
}
input{
    width: 358px;
    height: 40px;
    border: 1px solid #e7e7e7;
    background: #f7f7f7;
    padding: 0px 15px;
    border-radius: 5px;
}
label{
    color: #111111;
    font-size: 12px;
    margin: 20px 0px 5px 0px;
}
input[type="submit"]{
    background: #0024F6;
    color: #FFFFFF;
    width: unset;
    margin: 30px auto;
    padding: 0px 50px;
    outline: none;
    cursor: pointer;
}
.moda{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
</style>
