<template>
  <section class="w-full height">
    <Topbar
      @action="showModal = true"
      text=""
      buttonText="Buy units"
    />
    <main class="home">
      <div class="main">
        <div class="filter">
          <button>
            Last 7 days<i class="bi bi-chevron-down"></i>
          </button>
          <button>
            Operators<i class="bi bi-chevron-down"></i>
          </button>
        </div>
        <div class="sb">
        <Stats />
        <BarChart :width="100" :height="300" />
        <!-- <Modal v-if="showModal" @close="showModal = false" /> -->
        </div>
        <Table />
      </div>
      <div class="">
        <Notifications />
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Topbar from "@/components/Topbar.vue";
import Stats from "@/components/Stats.vue";
import Notifications from "@/components/Notifications.vue";
// import Modal from "@/components/Modal.vue";
import BarChart from "@/components/BarChart.vue";
import Table from "@/components/table.vue"
const showModal = ref(false);
</script>

<style scoped>
.height {
  height: calc(100vh - 48px);
}
.home{
  display: flex;
  overflow-y: scroll;
  height: 100%;
}
.main{
  padding-top: 20px;
  width: 80%;
  display: block;
  border-right: 1px solid #e7e7e7;
  height: 100%;
}
.sb {
  padding: 30px;
}
.filter{
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px;
}
.filter button{
  margin-left: 10px;
  font-size: 9px;
  height: 24px;
  padding: 0px 15px;
  background: #FFFFFF;
  border: 1px solid #11111120;
  color: #11111190;
  border-radius: 4px;
}
.filter i{
  margin-left: 6px;
}
</style>
