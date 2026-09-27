<template>
    <div class="login-container flex justify-center items-center h-screen">
        <div class="login-form-container  z-10 bg-white grid grid-cols-2 grid-flow-col overflow-hidden rounded-lg">
            <div class="login-form-img ">
                <div class="circle-top-logo z-11">
                    <img :src="logo_manage" alt="Logo" class="w-full h-full" />
                </div>
                <div class="img-center flex justify-center items-center h-full">
                    <img :src="img_login" alt="Login Image" class="w-[377px] h-[371px] absolute" />
                    <img :src="img_login_bg" alt="Login Background" class="w-[468px] h-[412px]  mix-blend-screen" />
                </div>

            </div>
            <div class="w-[430px] h-[592px] flex justify-center  items-center h-full  gap-6 flex-col">
                <img :src="logo_life" class="w-72.5 h-16.5" />
                <div class="login_content flex flex-col gap-6 w-70.25 ">

                    <div class="flex flex-row justify-content items-center  text-[#9A9A9A] gap-1.5" >
                        <span class="text-[14px] font-normal">เข้าสู่ระบบด้วยบัญชี</span>
                        <img :src="img_provider" class="w-28.25 h-12.5 " />
                        <span class="text-[14px] font-normal">ของคุณ</span>
                    </div>
                    <div class="button-login_from flex flex-col justify-center items-center gap-4 ">
                        <button type="button" @click="router.push({ name: 'Systems' })" class="button-login cursor-pointer w-72.5 h-10 bg-(--color-primary) text-white rounded-[20px] 
            flex justify-center items-center gap-2 px-2 py-5">
                            <span class="font-medium text-[16px] ">ลงชื่อเข้าใช้</span>

                        </button>
                        <button type="button" @click="router.push({ name: 'Systems' })" class="button-register cursor-pointer w-72.5 h-10 bg-white text-[--color-primary] rounded-[20px] 
            flex justify-center items-center gap-2 px-2 py-5 border-2 border-(--color-primary)">
                            <span class="font-semibold text-[16px] text-(--color-primary)">ลงทะเบียน</span>
                        </button>
                    </div>
                 <div class="flex flex-row justify-center items-center gap-1.5">
                   <div class="flex-1 border-t border-[#F2F2F2]"></div>
                     <span class="text-[#9A9A9A]">หรือ</span>
                      <div class="flex-1 border-t border-[#F2F2F2]"></div>
                 </div>
             <button
  type="button"
  @click="router.push({ name: 'Systems' })"
  class="button-one-id flex flex-row justify-center items-center gap-3 px-2 py-4 rounded-[20px] bg-white cursor-pointer"
>
  <img :src="img_one" class="w-[47.2px] h-5" />
  <span class="text-(--color-primary) text-[16px]">เข้าสู่ระบบด้วย ONE ID</span>
</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import logo_manage from '@/assets/logo_manage.png';
import img_login from '@/assets/img_login.png';
import img_login_bg from '@/assets/img_login_bg.png';
import logo_life from '@/assets/logo_life.png';
import img_provider from '@/assets/img_provider.png';
import img_one from '@/assets/img_one.png';
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style scoped>
span {
    
    font-style: normal;
    line-height: 140%;
    letter-spacing: 0%;

}

.button-login {
    box-shadow: 0px 2px 4px 0px #60617029;
    

}

.login-form-container {
  box-shadow: 0px 16px 24px 0px #60617029;


.button-one-id{
   box-shadow: 0px 0.5px 2px 0px #60617029;




}

}
</style>
