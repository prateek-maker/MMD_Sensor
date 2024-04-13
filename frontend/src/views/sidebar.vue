<script setup lang="ts">
import { useRouter } from "vue-router";
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute()
function goToPage(type:any){
  router.push({name:type})
}
const path = computed(() =>route.name)
</script>
<template>
    <div class="hidden md:flex h-md flex-col w-65 pb-8 pt-8 pl-5 pr-3 bg-[#ede9e9]" style="position: fixed;height: calc(100% - 65px);overflow-y: auto;">
    <button
      @click="goToPage('overview')"
      type="button"
      :class="path=='overview'?'bg-[#ffffff] shadow-md':''"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/menu.svg" class="w-6" />
      </span>
      Overview
    </button>
    <button @click="goToPage('project')"
      type="button"
      :class="path=='project'?'bg-[#ffffff] shadow-md':''"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/folder.svg" class="w-6" />
      </span>
      Project
    </button>
    <button @click="goToPage('sensor')"
      type="button"
      :class="path=='sensor'?'bg-[#ffffff] shadow-md':''"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/graph.svg" class="w-6" />
      </span>
      Sensors
    </button>
    <button @click="goToPage('graph')"
     :class="path=='graph'?'bg-[#ffffff] shadow-md':''"
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/graph.svg" class="w-6" />
      </span>
      Graph
    </button>

    <h5 class="mt-10 font-bold mb-6">Account Page</h5>
    <button disabled
      type="button"
      class="h-[50px] text-grey cursor-not-allowed opacity-50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/user.svg" class="w-6" />
      </span>
      Morphedo Technologies
    </button>
    <button
      type="button" @click="goToPage('users')"
      :class="path=='users'?'bg-[#ffffff] shadow-md':''"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-6"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/file.svg" class="w-6" />
      </span>

      User
    </button>
    <div class="bg-primary-blue rounded-lg p-3">
      <div class="me-4 bg-[#fff] rounded-lg w-[fit-content] p-1">
        <img src="/question.svg" class="w-5" />
      </div>
      <h6 class="text-white mt-5">Need Help?</h6>
      <button
        type="button"
        class="mt-3 text-center inline-flex items-center h-[50px] bg-[#fff] w-[100%] hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5  me-2 mb-2"
      >Click Now
      </button>
    </div>
  </div>
</template>
<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cecdcd;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #cecdcd;
}
</style>
