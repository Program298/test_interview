<script setup>
import Sidebar from '@/components/Sidebar_nav.vue';
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="main-content">
        <RouterView />

    </main>
  </div>
</template>


<style scoped>
.main-layout {
  min-height: 100vh;
  background-color: #F5F7FF;

}
.main-content {
  left: 280px;
  width: calc(100% - 280px);

  position: relative;
  top: 106px;
  right: 40px;

 
}
</style>