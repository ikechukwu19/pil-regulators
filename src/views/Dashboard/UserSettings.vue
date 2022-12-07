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
        <div>
          <h2>
            User privileges
          </h2>
          <span>
            <p>Can add user</p>
          </span>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import Topbar from "@/components/Topbar.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  // .settings-wrapper {

  // }
}
</style>
