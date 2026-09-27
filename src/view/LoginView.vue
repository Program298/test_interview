<template>
<body>

<div class="login-view  fixed inset-0 ">
<div class="circle-top-left z-0"></div>
<div class="circle-bottom-right z-0"></div>  
<LoginContainer />

</div>
</body>
</template>

<script setup>

import LoginContainer from '@/components/login_container.vue';



</script>

<style scoped>
 body {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    background-color: var(--color-bg);
  }
/* .circle-top-left{
    position: absolute;
    z-index: -1;
    width: 471px;
    height: 510px;
    background-color: #F3F6FF;
    border-radius: 0px 0px 200% 0px;
}
.circle-bottom-right{
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 307px;
    height: 244px;
    background-color: #F3F6FF;
    border-radius: 150% 0px 0px 0px;
} */ 
</style>