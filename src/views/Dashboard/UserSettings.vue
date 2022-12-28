<template>
  <section>
    <Topbar
      text="Add user"
      buttonText="View users"
      @action="$router.push('/dashboard/manageuser')"
    />
    <main>
      <div class="settings-wrapper">
        <div class="avatar-container">
          <div class="avatar">A</div>
          <span>
            <h2>Akin Adebayo (You)</h2>
            <p>Admin</p>
          </span>
        </div>
        <div class="privileges">
          <h2>
            User privileges
          </h2>
          <span>
            <p>Can add user</p>
            <div
          class="toggle-btn"
          :class="[active ? 'bg-active' : '']"
          @click="active = !active"
        >
          <div
            
            :class="{ 'active': active }"
          ></div>
        </div>
          </span>
          <span>
            <p>Can buy tokens</p>
            <div
          class="toggle-btn"
          :class="[active2 ? 'bg-active' : '']"
          @click="active2 = !active2" >
          <div
            :class="{ 'active': active2 }"
          ></div>
        </div>
          </span>
          <span>
            <p>Can view transactions</p>
            <div
          class="toggle-btn"
          :class="[active3 ? 'bg-active' : '']"
          @click="active3 = !active3"
        >
          <div
            
            :class="{ 'active': active3 }"
          ></div>
        </div>
          </span>
          <span>
            <p>Can remove users</p>
            <div
          class="toggle-btn"
          :class="[active4 ? 'bg-active' : '']"
          @click="active4 = !active4"
        >
          <div
            
            :class="{ 'active': active4 }"
          ></div>
        </div>
          </span>
          <div>
        <button>Save settings</button>
        </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import Topbar from "@/components/Topbar.vue";
import {useRouter} from "vue-router"
const router = useRouter()
import { ref } from "vue";
const active = ref(false);
const active2 = ref(false);
const active3 = ref(false);
const active4 = ref(false);
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.toggle-notification {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggle-btn{
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
.toggle-btn div{
  width: 8px;
  height: 8px;
  background-color: #FFFFFF;
  position: absolute;
  left: 0.8px;
  border-radius: 50%;
  transition: all ease .5s;
}
.bg-active{
  background-color: #0A8634;
}
.active {
  transform: translateX(10px);
}
p{
  font-size: 11px;
}
.settings-wrapper{
  width: 356px;
  margin: 30px auto;
}
.avatar-container{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #11111114;
  padding: 10px 0px;
}
.avatar{
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #d1eaf7;
  margin-right: 10px;
}
.privileges span{
  display: flex;
  justify-content: space-between;
  padding: 11px 0px;
}
.privileges h2{
  padding: 13px 0px;
}
.privileges div{
  display: flex;
}
button{
  background: #0024F6;
  border-radius: 5px;
  color: #FFFFFF;
  width: 128px;
  height: 32px;
  margin: 20px auto;
}
</style>
