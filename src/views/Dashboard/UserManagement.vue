<template>
  <section>
    <Topbar text="Users" buttonText="Add User" @action="show = !show" />
    <User :show="show" @manageUser="manageUser"/>
  </section>
</template>

<script setup>
import Topbar from "@/components/Topbar.vue";
import User from "@/components/User.vue";
import {useRouter} from "vue-router"
const router = useRouter()
import { ref } from "vue";

const show = ref(false);
const manageUser = () => {
router.push("/dashboard/manageuser/12")
}
</script>

<style></style>
