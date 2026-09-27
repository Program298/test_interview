<template>
    <div class="bar-container inset-0  w-full gap-10">
        <div class="sidebar_container fixed inset-y-5 w-[228px] mt-[20px] ml-[20px] ">
            <div class="sidebar_img absolute z--1 h-full w-full bg-cover  bg-no-repeat  rounded-[20px] opacity-50"
                :style="{ backgroundImage: `url(${sidebarImg})` }">

            </div>
            <div class="relative z-2  py-6 gap-10">
                <div class="flex flex-row w-57 justify-between items-center px-4 py-2.5">
                    <img :src="menu" class="w-4.5 h-3 " />
                    <img :src="logo_life" class="w-[155px] h-[35.15px] " />
                </div>
                <div class="drop-down flex flex-col w-57 px-2.5  mt-10">

                    <button type="button" @click="isDropdownOpenDash = !isDropdownOpenDash"
                        class="dash_drop flex flex-row justify-between items-center w-[208px] h-[48px] bg-white/75 px-[16px] py-[12px]   rounded-t-[12px]  rounded-b-[12px] mt-4 cursor-pointer"
                        :class="{ 'rounded-b-none': isDropdownOpen }">

                        <div class="dash_drop_area flex flex-row gap-2 ">
                            <img :src="dashboard_icon" class="dash_icon w-4.5 h-4.5 " />
                            <span class="dash_drop_text ">Dashboard</span>
                        </div>
                        <div class="arrow_area " :class="{ 'rotate-180': isDropdownOpenDash }">
                            <img :src="arrow" class="dash_icon w-[9.31px] h-[5.49px] ml-[5.34px] mr-[5.34px] " />
                        </div>

                    </button>
                    <div v-if="isDropdownOpenDash"
                        class="drop_area relative flex flex-col bg-white/75 w-full h-auto p-[8px] gap-[8px] rounded-b-[12px] ">
                        <RouterLink :to="{ name: 'Dashboard' }"
                            class="flex w-[196px] h-[48px] items-center justify-center rounded-[12px] bg-white/75"
                            @click="activebutton = 'systems'" :class="{ 'is-active': activebutton === 'systems' }">
                            <span class="text-[#464646] text-[14px]">ภาพรวมโรงพยาบาล</span>
                        </RouterLink>

                        <RouterLink :to="{ name: 'Dashboard' }" @click="activebutton = 'systems1'"
                            class="bg-white/75 w-[196px] h-[48px] rounded-[12px] flex items-center justify-center"
                            :class="{ 'is-active': activebutton === 'systems1' }">
                            <span class="text-[#464646] text-[14px]">ภาพรวมการนัดหมาย</span>
                        </RouterLink>

                         <RouterLink :to="{ name: 'Dashboard' }" @click="activebutton = 'systems2'"
                            class="bg-white/75 w-[196px] h-[48px] rounded-[12px] flex items-center justify-center"
                            :class="{ 'is-active': activebutton === 'systems2' }">
                            <span class="text-[#464646] text-[14px]">สถิติแพทย์รังสี</span>
                        </RouterLink>
                    </div>
                    <div type="button" @click="isDropdownOpenlist = !isDropdownOpenlist"
                        class="list_drop flex flex-row justify-between items-center w-[208px] h-[48px] bg-white/75 px-[16px] py-[12px] gap-[8px] rounded-[12px] mt-4"
                        :class="{ 'rounded-b-none': isDropdownOpenlist }">
                        <div class="list_drop_area flex flex-row gap-2">
                            <img :src="list_icon" class="dash_icon w-4.5 h-4.5 " />
                            <span class="list_drop_text ">รายการ X-ray</span>
                        </div>
                        <div class="arrow_area ">
                            <img :src="arrow" class="dash_icon w-[9.31px] h-[5.49px] ml-[5.34px] mr-[5.34px]"
                                :class="{ 'rotate-180': isDropdownOpenlist }" />
                        </div>

                    </div>
                    <div v-if="isDropdownOpenlist"
                        class="relative flex flex-col bg-white/75 w-full h-auto p-[8px] gap-[8px] rounded-b-[12px] ">
                        <RouterLink :to="{ name: 'Systems' }"
                            class="flex w-[196px] h-[48px] justify-center items-center bg-white/75 rounded-[12px]"
                            @click="activebutton = 'list1'" :class="{ 'is-active': activebutton === 'list1' }">
                            <span class="text-[#464646] text-[14px]">
                                รายการ X-ray ที่นำเข้า
                            </span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Systems' }"
                            class="flex w-[196px] h-[48px] justify-center items-center bg-white/75 rounded-[12px]"
                            @click="activebutton = 'list2'" :class="{ 'is-active': activebutton === 'list2' }">
                            <span class="text-[#464646] text-[14px]">
                                รายการ รอ X-ray
                            </span>
                        </RouterLink>
                    </div>
                </div>


            </div>

        </div>

        <div
            class="nav-bar fixed top-5 left-70 right-5  z-2 bg-white/50  h-17.5  rounded-xl flex flex-row items-center px-6 py-2 justify-between">
            <div class="start-nav  justify-start flex flex-row gap-2 h-10 w-77 ">
                <img :src="icon_pointer" class="w-10 h-8 " />
                <div
                    class=" h-10 w-77 border-[1.5px] border-[#E6E6E6] flex flex-row items-center rounded-4xl px-6 py-2 justify-between">
                    <span>หน่วยบริการ A</span>
                    <img :src="arrow_bar" class="w-[9.31px] h-[5.49px] " />

                </div>


            </div>
            <div class="end-nav class='w-68.75 h-13.5 gap-2' flex flex-row items-center">
                <img :src="notication" class="w-11 h-11 p-" />
                <div class="flex flex-row px-1.5 py-3 gap-3 items-center">
                    <img :src="profile" class="w-11 h-11 " />

                    <div class="flex flex-col gap-1">
                        <span class="text-[14px] text-[#20409C] font-semibold">นายพัธรนัส จิตภักดี</span>
                        <span class="text-[14px] text-[#636363] font-normal">เจ้าหน้าที่รังสี</span>

                    </div>
                    <img :src="arrow" class="w-3 h-3 " />

                </div>

            </div>
        </div>
    </div>

</template>
<script setup>
import sidebarImg from '@/assets/sidebar_img.png';
import menu from '@/assets/menu.svg'
import logo_life from '@/assets/logo_life.png';
import dashboard_icon from '@/assets/Dashboard_icon.svg';
import list_icon from '@/assets/list_icon.svg';
import arrow from '@/assets/arrow.svg';
import { ref } from 'vue'
import icon_pointer from '@/assets/icon_pointer.png'
import arrow_bar from '@/assets/arrow_bar.png'
import notication from '@/assets/notication.png'
import profile from '@/assets/profile.png'




const isDropdownOpenDash = ref(false);
const isDropdownOpenlist = ref(false);
const activebutton = ref(null);


</script>
<style scoped>
.sidebar_container {
    top: 0;
    left: 0;

}

.dash_drop_text,
.list_drop_text {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    color: #464646;
}

.dash_drop.rounded-b-none .dash_drop_text {
    color: var(--color-primary);
}

.list_drop.rounded-b-none .list_drop_text {
    color: var(--color-primary);
}


.is-active {
    background-color: var(--color-primary);
}

.is-active span {
    color: white;
}

.nav-bar {
    backdrop-filter: blur(10px)
}
</style>
