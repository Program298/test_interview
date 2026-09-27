<template>
  <div class="conainer bg-white/50  w-auto h-full mr-[20px] p-[24px] gap-6 rounded-2xl">
    <div class="gap-6 ">
      <div class="gap-5 flex flex-col ">
        <div class="head flex flex-row justify-between w-full">
          <span class="text-(--color-primary) font-bold  text-[24px] ">รายการ X-ray ที่นำเข้า</span>
          <div
            class="bg-(--color-primary) w-56 h-10  rounded-[20px] py-2 px-4 flex flex-row items-center gap-2 cursor-pointer">
            <img :src="upload" class="w-6 h-4">
            <span class="font-medium text-[16px] text-white">อัปโหลดฟิล์ม X-ray</span>
            <img :src="arrow_white" class="w-[11.18px] h-[6.59px]">

          </div>

        </div>
        <div class="flex space-x-8 border-b border-gray-200">
          <div class="relative pb-3 cursor-pointer text-(--color-primary) font-semibold flex items-center gap-2">
            <span>รายการ X-ray สมอง</span>
            <span class="px-2 py-0.5  text-(--color-primary) bg-[#DEE7FE]  text-xs rounded-full">85</span>
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-900"></div>
          </div>
          <div class="relative pb-3 cursor-pointer text-[#636363]  flex items-center gap-2">
            <span>รายการ X-ray ทรวงอก</span>
            <span
              class="px-2 py-0.5 gap-2.5 bg-[#F2F2F2]  text-#636363 text-xs rounded-2xl justify-center items-center">120</span>
          </div>

          <div class="relative pb-3 cursor-pointer text-[#636363]  flex items-center gap-2">
            <span>รายการ X-ray ดวงตา</span>
            <span
              class="px-2 py-0.5 gap-2.5 bg-[#F2F2F2]  text-#636363 text-xs rounded-2xl justify-center items-center">25</span>
          </div>
        </div>

        <div class="flex flex-row gap-4 w-full">
          <button type="button" @click="activebutton = 'item1'"
            class="bg-white w-[450px] border-(--color-primary)   rounded-2xl   h-18 p-4 flex flex-row gap-4 shadow-[0px_2px_4px_0px_#60617029] coursur-pointer"
            :class="activebutton === 'item1' ? 'border-[var(--color-primary)] border-1 bg-[#F5F7FF] ' : 'border-[#E6E6E6]'">
            <img :src="icon_1" class="w-10 h-10">
            <div class="flex flex-row w-full justify-between items-center">
              <span class=" text-[16px] font-bold"
                :class="activebutton === 'item1' ? 'text-[#016DB6]' : 'text-[#333333]'">รายการทั้งหมด</span>
              <div class="flex flex-row  justify-between gap-1  items-center">
                <span class="text-[#016DB6] font-bold text-[20px]">85</span>
                <span class="text-[#636363] font-normal text-[16px]">เคส</span>
              </div>
            </div>
          </button>
          <button type="button" @click="activebutton = 'item2'"
            class="bg-white w-[450px] border-(--color-primary)   rounded-2xl   h-18 p-4 flex flex-row gap-4 shadow-[0px_2px_4px_0px_#60617029] coursur-pointer"
            :class="activebutton === 'item2' ? 'border-[var(--color-primary)] border-1 bg-[#F5F7FF] ' : 'border-[#E6E6E6]'">
            <img :src="icon_2" class="w-10 h-10">
            <div class="flex flex-row w-full justify-between items-center">
              <span class="text-[16px] font-bold"
                :class="activebutton === 'item2' ? 'text-[#016DB6]' : 'text-[#333333]'">รายการทั้งหมด</span>
              <div class="flex flex-row  justify-between gap-1  items-center">
                <span class="text-[#FEA53F] font-bold text-[20px]">40</span>
                <span class="text-[#636363] font-normal text-[16px]">เคส</span>
              </div>
            </div>
          </button>

          <button type="button" @click="activebutton = 'item3'"
            class="bg-white w-[450px] border-(--color-primary)   rounded-2xl   h-18 p-4 flex flex-row gap-4 shadow-[0px_2px_4px_0px_#60617029] coursur-pointer"
            :class="activebutton === 'item3' ? 'border-[var(--color-primary)] border-1 bg-[#F5F7FF] ' : 'border-[#E6E6E6]'">
            <img :src="icon_3" class="w-10 h-10">
            <div class="flex flex-row w-full justify-between items-center">
              <span class="text-[16px] font-bold"
                :class="activebutton === 'item3' ? 'text-[#016DB6]' : 'text-[#333333]'">รายการทั้งหมด</span>
              <div class="flex flex-row  justify-between gap-1  items-center">
                <span class="text-[#37C976] font-bold text-[20px]">45</span>
                <span class="text-[#636363] font-normal text-[16px]">เคส</span>
              </div>
            </div>
          </button>




        </div>
        <div class="flex flex-row gap-4 w-full justify-between items-center">
          <div class="flex flex-row gap-4 justify-start items-center">
            <div
              class=" h-10 w-67 border-[1.5px] border-[#E6E6E6] flex flex-row items-center rounded-4xl px-6 py-2 justify-between">
              <span class="text-[#C4C4C4] text-[16px]">ค้นหา</span>
              <img :src="search" class="w-[14.21px] h-[14.22px] " />

            </div>
            <span class="text-[16px]">ความเร่งด่วนของเคส :</span>

            <div
              class=" h-10 w-39.5 border-[1.5px] border-[#E6E6E6] flex flex-row items-center rounded-4xl px-6 py-2 justify-between">
              <span class="text-[16px]">ทั้งหมด</span>
              <img :src="search" class="w-[14.21px] h-[14.22px]" />

            </div>
            <div class="flex flex-row gap-2 ">
              <img :src="filter" class="w-[15.91px] h-[16px]" />
              <span class="text-[16px] text-(--color-primary) underline">ตัวกรองขั้นสูง</span>
            </div>

          </div>
          <div class="justify-end">
            <div class=" h-10 w-31.25 border-[1.5px] border-(--color-primary) flex flex-row 
           items-center rounded-4xl px-6 py-2 justify-between ">

              <img :src="upload_2" class="w-4 h-4" />
              <span class="text-[16px] text-(--color-primary)">Export</span>
            </div>
          </div>
        </div>
        <div class="list">
          <table class="case-table">
            <thead>
              <tr class="bg-[#f8f8f8]">
                <th>
                  <div class="flex flex-row  gap-2 w-[122px] h-12 ">
                    <span class="text-[#464646] font-semiBold w-[155px] h-[48px]  ">เลขที่รายการ</span>
                    <img :src="info" class="w-4 h-4 mt-1.5">
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[155px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-full h-[48px] ">ชื่อผู้ป่วย</span>
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[148px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-full h-[48px] ">H/N</span>
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[140px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-full h-[48px] ">ประเภท X-ray</span>
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[130px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-[155px] h-[48px] ">สถานะรายการ</span>
                  </div>
                </th>
                <th>
                  <div class="flex flex-row  gap-2 w-[120px] h-12 ">
                    <span class="text-[#464646] font-semiBold w-full h-[48px]  ">ผลลัพธ์</span>
                    <img :src="info" class="w-4 h-4 mt-1.5">
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[145px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-full h-[48px] ">วันที่ X-ray</span>
                  </div>
                </th>
                <th>
                  <div class="flex flex-row px-2 py-2.5 gap-2.5 w-[150px] h-12    items-center">
                    <span class="text-[#464646] font-semiBold w-full h-[48px] ">จัดการ</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(caseItem, index) in xrayCases" v-show="index < 10" :key="caseItem.id"
                class="hover:bg-[#FFFAFA] cursor-pointer text-[14px] font-normal">
                <td class="px-2 py-2.5 w-[122px]">
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#37C976]  "></span>
                  {{ caseItem.id }}
                </td>
                <td class="w-[155px] px-2 py-2.5">
                  <span class="block w-full overflow-hidden whitespace-nowrap" :title="caseItem.patientName">
                    {{ caseItem.patientName.length > 15
                      ? caseItem.patientName.slice(0, 15) + '..'
                      : caseItem.patientName }}
                  </span>
                </td>
                <td class="px-2 py-2.5 w-[148px]">{{ caseItem.hn }}</td>
                <td class="px-2 py-2.5 w-[140px]">{{ caseItem.xrayType }}</td>
                <td class="px-2 py-2.5 w-[130px]">
                  <span class="px-2 py-1 rounded-full text-xs font-semiBold flex items-center gap-1" :class="{
                    'bg-[#FFFAF5] text-[#FEA53F] w-[113px] h-[30px]': caseItem.status === 'รอยืนยันผล',
                    'bg-[##F7FDF9] text-[#37C976]': caseItem.status === 'ยืนยันผลแล้ว',
                  }">
                    <img v-if="caseItem.status === 'รอยืนยันผล'" src="@/assets/comfirm.png" class="w-4 h-4" />
                    <img v-if="caseItem.status === 'ยืนยันผลแล้ว'" src="@/assets/time_2.png" class="w-4 h-4" />
                    {{ caseItem.status }}
                  </span>
                </td>
                <td class="px-2 py-2.5 w-[120px] items-center">
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#37C976]  "></span>
                  <span class="text-[#37C976]"> {{ caseItem.result }}</span>
                </td>
                <td class="px-2 py-2.5 w-[145px] truncate">{{ caseItem.xrayDate }}</td>
                <td class="px-2 py-2.5 w-[150px]">
                  <div class="flex flex-row gap-2 items-center">
                    <button @click="viewCase(caseItem.id)" class="text-blue-500 hover:underline">
                      <div
                        class="bg-whtie p-2 w-7 h-7 rounded-xl shadow-[0px_0.5px_2px_0px_#60617029,_0px_0px_1px_0px_#28293D14]">
                        <img :src="eye">
                      </div>
                    </button>
                    <button @click="editCase(caseItem.id)"
                      class="text-(--color-primary) hover:underline underline cursor-pointer">
                      <span>รายละเอียด</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr v-if="xrayCases.length === 0">
                <td colspan="8" class="empty-state text-center py-6 text-[#8C8C8C]">
                  ยังไม่มีรายการ X-ray
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center gap-2 ">
            <span>แสดงทั้งหมด</span>
            <div
              class=" h-10 w-32 border-[1.5px] border-[#E6E6E6] flex flex-row items-center rounded-4xl px-6 py-2  gap-3">
              <span class="text-black text-[14px] font-normal ">10 / page </span>
              <img :src="arrow_black" class="w-[4.94px] h-[5.53px] " />

            </div>
          </div>

          <div class="flex flex-row gap-1 text-[14px]">
            <button class="bg-white">
            <span  class="bg-white text-[#CCCCCC] font-semiboid">Prev</span>
          </button>
           <button class="bg-(--color-primary) rounded-full">
            <span  class=" text-white font-semiboid px-2.5 pt-3">1</span>
          </button>
           <button class=" rounded-full">
            <span  class= "text-black  font-semiboid px-2.5 pt-3">2</span>
          </button>
          <button class=" rounded-full">
            <span  class= "text-black  font-semiboid px-2.5 pt-3">Next</span>
          </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>
import upload from '@/assets/upload.png'
import arrow_black from '@/assets/arrow_black.png'
import icon_1 from '@/assets/icon_1.png'
import icon_2 from '@/assets/icon_2.png'
import icon_3 from '@/assets/icon_3.png'
import { ref } from 'vue'
import search from '@/assets/search.png'
import filter from '@/assets/filter.png'
import upload_2 from '@/assets/upload_2.png'
import info from '@/assets/info.png'
import eye from '@/assets/eye.png'


const activebutton = ref('item1')


const xrayCases = ref([
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  },
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'MRI , 3D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  },
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'CT Sacn , 3D',
    status: 'ยืนยันผลแล้ว',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'CT Sacn , 2D',
    status: 'ยืนยันผลแล้ว',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'MRI , 3D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'ยืนยันผลแล้ว',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'MRI , 3D',
    status: 'ยืนยันผลแล้ว',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'รอยืนยันผล',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
  ,
  {
    id: 'A123456',
    patientName: 'THANYANATTHA THANYANATTHA',
    hn: 'H/N',
    xrayType: 'X-ray , 2D',
    status: 'ยืนยันผลแล้ว',
    result: 'ไม่พบโรค',
    xrayDate: '04/03/2567 10.00 น.'
  }
])



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