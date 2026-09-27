<template>
  <div class="conainer bg-white/50  w-auto h-full mr-[20px] p-[24px] gap-6 rounded-2xl">
    <div class="gap-6 ">
      <div class="gap-5 flex flex-col ">
        <div class="head flex flex-row justify-between w-full">
          <span class="text-(--color-primary) font-bold  text-[24px] ">รายการ X-ray ที่นำเข้า</span>


        </div>
        <div class="flex space-x-8 border-b border-gray-200  ">
          <div class="relative pb-3 cursor-pointer text-(--color-primary) font-semibold flex items-center gap-2">
            <span>รายการ X-ray สมอง</span>

            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-900"></div>
          </div>
          <div class="relative pb-3 cursor-pointer text-[#636363]  flex items-center gap-2">
            <span>รายการ X-ray ทรวงอก</span>

          </div>

          <div class="ml-auto flex gap-2  flex-row items-center ">
            <img :src="info" class="">
            <span class="text-[#636363] ">
              ข้อมูลอัพเดท 18/04/2567
            </span>
            <div class=" h-10 w-31.25 border-[1.5px] border-(--color-primary) flex flex-row mb-1
           items-center rounded-4xl px-6 py-2 justify-between ">

              <img :src="upload_2" class="w-4 h-4" />
              <span class="text-[16px] text-(--color-primary)">Export</span>
            </div>
          </div>

        </div>
        <div class="bg-white w-full h-[357px] rounded-[12px] p-4 gap-6">

          <div class="flex flex-row justify-between">
            <span class="text-[#464646] font-semibold text-[18px]">
              สถิติการนัดหมาย X-ray
            </span>
            <div class="flex flex-row gap-2 px-5 py-2">
              <img :src="calendar" class="w-4 h-5">
              <span class="text-(--color-primary) underline">ดูทั้งหมด</span>
            </div>
          </div>

          <div class="bg-[#FEFAFA] w-full h-[97px] flex flex-row mt-6 p-4 gap-4">
            <button
              class=" w-[450px] border-(--color-primary)   rounded-2xl   h-18 p-4 flex flex-row gap-4 coursur-pointer">
              <img :src="dash_img1" class="w-10 h-10">
              <div class="flex flex-row w-full justify-between items-center">
                <div class="flex flex-col gap-1.5 text-left">
                  <span class=" text-[14px] font-medium">จำนวนเคสประจำเดือน</span>
                  <span class="text-(--color-primary) text-[18px] ">มีนาคม 2567</span>
                </div>

                <div class="flex flex-row  justify-between gap-1  items-center">
                  <span class="text-[#016DB6] font-bold text-[40px]">100</span>
                  <span class="text-[#636363] font-normal text-[16px]">เคส</span>
                </div>
              </div>
            </button>

            <button
              class=" w-[450px] border-(--color-primary) bg-white   rounded-2xl   h-18 p-4 flex flex-row gap-4 coursur-pointer">
              <img :src="dash_img2" class="w-10 h-10">
              <div class="flex flex-row w-full justify-between items-center">

                <span class="text-[#636363] text-[16px] ">เคสด่วน</span>


                <div class="flex flex-row  justify-between gap-1  items-center">
                  <span class="text-[#FE4543] font-bold text-[32px]">20</span>
                  <span class="text-[#FE4543] font-normal text-[16px]">เคส</span>
                </div>
              </div>
            </button>


            <button
              class=" w-[450px] border-(--color-primary) bg-white   rounded-2xl   h-18 p-4 flex flex-row gap-4 coursur-pointer">
              <img :src="dash_img3" class="w-10 h-10">
              <div class="flex flex-row w-full justify-between items-center">

                <span class="text-[#636363] text-[16px] ">เคสปกติ</span>


                <div class="flex flex-row  justify-between gap-1  items-center">
                  <span class="text-[#37C976] font-bold text-[20px]">80</span>
                  <span class="text-[#37C976] font-normal text-[16px]">เคส</span>
                </div>
              </div>
            </button>
          </div>
          <div class="flex flex-row w-full gap-4 mt-6">
            <div
              class="bg-[#F3F6FF] w-[320px] h-full mb-2 p-4 flex flex-col rounded-[12px] shadow-[0px_0.5px_2px_0px_#60617029,_0px_0px_1px_0px_#28293D14]">
              <div class="flex flex-row justify-between">
                <span class="text-(--color-primary) font-bold w-[115px] text-[16px]">TODAY</span>
                <span class="text-black font-bold w-[115px] text-[14px] p-0">27 มีนาคม 2567</span>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#FE4543] h-5.5  items-center">
                <span>เคสด่วน</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">3</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#37C976] h-5.5  items-center">
                <span>เคสปกติ</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">1</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>

            </div>

            <div
              class="bg-whtie w-[320px]  h-full mb-2 p-4 flex flex-col rounded-[12px] shadow-[0px_0.5px_2px_0px_#60617029,_0px_0px_1px_0px_#28293D14]">
              <div class="flex flex-row justify-between">

                <span class="text-[#464646] font-bold w-[115px] text-[14px] p-0">28 มีนาคม 2567</span>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#FE4543] h-5.5  items-center">
                <span>เคสด่วน</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">5</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#37C976] h-5.5  items-center">
                <span>เคสปกติ</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">12</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>


              </div>

            </div>
            <div
              class="bg-whtie w-[320px] h-full mb-2 p-4 flex flex-col rounded-[12px] shadow-[0px_0.5px_2px_0px_#60617029,_0px_0px_1px_0px_#28293D14]">
              <div class="flex flex-row justify-between">
                <span class="text-[#464646] font-bold w-[115px] text-[14px] p-0">27 มีนาคม 2567</span>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#FE4543] h-5.5  items-center">
                <span>เคสด่วน</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">8</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>
              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-none border-[#37C976] h-5.5  items-center">
                <span></span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]"></span>
                  <span class="text-[16px] text-[#464646]"></span>

                </div>
              </div>




            </div>
            <div
              class="bg-whtie w-[320px] h-full mb-2 p-4 flex flex-col rounded-[12px] shadow-[0px_0.5px_2px_0px_#60617029,_0px_0px_1px_0px_#28293D14] opacity-60">
              <div class="flex flex-row justify-between">
                <span class="text-[#464646] font-bold w-[115px] text-[14px] p-0">3 เมษายน 2567</span>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#FE4543] h-5.5  items-center">
                <span>เคสด่วน</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">3</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>

              <div
                class="flex flex-row justify-between my-4 px-2  text-[#464646] border-l border-[#37C976] h-5.5  items-center">
                <span>เคสปกติ</span>
                <div class="flex flex-row gap-0.5">
                  <span class="text-[16px] text-[#464646]">1</span>
                  <span class="text-[16px] text-[#464646]">เคส</span>

                </div>
              </div>

            </div>
          </div>

          <div class="flex flex-col w-full">
            <div class="flex flex-row w-full gap-4 mt-2 ">
              <div class="bar-statistics bg-white w-[650px] p-4 gap-6 rounded-2xl">
                <span class="text-[#464646] font-semibold text-[18px]">สถิติประเภทของการขอ Consult</span>
                <img :src="chart_x" class="pt-5" />

              </div>
              <div class=" bg-white w-[650px] flex flex-row  p-4 gap-6 rounded-2xl">
                <div class="flex flex-col">
                  <span class="text-[#464646] font-semibold text-[18px]">สถิติรูปแบบการ Consult</span>
                  <img :src="chart_cale" class="pt-5" />
                </div>

                <div class="flex flex-col  gap-4 justify-center">
                  <div
                    class="w-[300px] h-[58px] bg-[#FEF6F6] flex flex-row  items-center p-12px justify-between rounded-xl">
                    <div class="text-[#464646] font-semibold text-[18px] pl-2">
                      <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#F19494]  "></span>
                      ส่งต่อเคส
                    </div>

                    <div class="flex  gap-2 items-center pr-2">
                      <span class="text-[#32315F] text-[24px] font-semibold">800</span>
                      <span class="text-[#464646] text-[14px]">เคส</span>

                    </div>
                  </div>
                  <div
                    class="w-[300px] h-[58px] bg-[#FEF6F6] flex flex-row  items-center p-12px justify-between rounded-xl">
                    <div class="text-[#464646] font-semibold text-[18px] pl-2">
                      <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#F19494]  "></span>
                      Tele Consult
                    </div>

                    <div class="flex  gap-2 items-center pr-2">
                      <span class="text-[#32315F] text-[24px] font-semibold">200</span>
                      <span class="text-[#464646] text-[14px]">เคส</span>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="bg-white w-full mt-5 p-5 rounded-2xl gap-3"> 
              <img :src="chart_3" class="w-full">
              <div class="flex flex-row w-full  justify-around">
                <spen class="text-[#636363] text-[16px]">สมอง</spen>
                                <spen class="text-[#636363] text-[16px]">ทรวงอก</spen>

                                                <spen class="text-[#636363] text-[16px]">ดวงตา</spen>

              </div>
          </div>
              <div class="mt-5 w-full rounded-2xl bg-white p-5">
                <h2 class="text-[18px] font-semibold text-[#464646]">การนัด Consult</h2>
                <div class="mt-4 flex flex-row flex-wrap gap-4">
                  <div class="flex h-35 w-83.25 items-center gap-3 rounded-xl bg-[#F5F7FF] p-3">
                    <div class="flex w-16 shrink-0 flex-col items-center justify-center gap-2">
                      <img :src="brain" class="h-9 w-9 object-contain">
                      <span class="text-[14px] font-semibold text-[#464646]">สมอง</span>
                    </div>
                    <div class="flex min-w-0 flex-1 flex-col gap-2">
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">Consult สำเร็จ</span>
                        <span class="text-[22px] font-bold text-[#3EC5AF]">50</span>
                      </div>
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">ขาดการติดต่อ</span>
                        <span class="text-[22px] font-bold text-[#FF6679]">0</span>
                      </div>
                    </div>
                  </div>

                           <div class="flex h-35 w-83.25 items-center gap-3 rounded-xl bg-[#F5F7FF] p-3">
                    <div class="flex w-16 shrink-0 flex-col items-center justify-center gap-2">
                      <img :src="breast" class="h-9 w-9 object-contain">
                      <span class="text-[14px] font-semibold text-[#464646]">mทรวงอก</span>
                    </div>
                    <div class="flex min-w-0 flex-1 flex-col gap-2">
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">Consult สำเร็จ</span>
                        <span class="text-[22px] font-bold text-[#3EC5AF]">44</span>
                      </div>
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">ขาดการติดต่อ</span>
                        <span class="text-[22px] font-bold text-[#FF6679]">0</span>
                      </div>
                    </div>
                  </div>
                           <div class="flex h-35 w-83.25 items-center gap-3 rounded-xl bg-[#F5F7FF] p-3">
                    <div class="flex w-16 shrink-0 flex-col items-center justify-center gap-2">
                      <img :src="icon_eye" class="h-9 w-9 object-contain">
                      <span class="text-[14px] font-semibold text-[#464646]">ดวงตา</span>
                    </div>
                    <div class="flex min-w-0 flex-1 flex-col gap-2">
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">Consult สำเร็จ</span>
                        <span class="text-[22px] font-bold text-[#3EC5AF]">5</span>
                      </div>
                      <div class="flex h-12 items-center justify-between rounded-xl bg-white px-3">
                        <span class="text-[14px] text-[#636363]">ขาดการติดต่อ</span>
                        <span class="text-[22px] font-bold text-[#FF6679]">0</span>
                      </div>
                    </div>
                  </div>
                </div>


                
                
          </div>
        </div>



      </div>

    </div>

  </div>
</template>
<script setup>

import info from '@/assets/info.png'
import upload_2 from '@/assets/upload_2.png'
import calendar from '@/assets/calendar.png'
import dash_img1 from '@/assets/dash_img1.png'
import dash_img2 from '@/assets/dash_img2.png'
import dash_img3 from '@/assets/dash_img3.png'
import chart_x from '@/assets/chart_x.png'
import chart_cale from '@/assets/chart_cale.png'
import chart_3 from '@/assets/chart_3.png'
import brain from '@/assets/brain.png'
import icon_eye from '@/assets/icon_eye.png'
import breast from '@/assets/breast.png'





</script>


<style scoped>
.list {
  height: 568px;
  overflow-y: auto;
}

.case-table td {
  height: 52px;
  padding: 0 16px;
}

.case-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
}



.empty-state {
  text-align: center;
}
</style>