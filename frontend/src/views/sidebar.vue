<script setup lang="ts"></script>
<template>
  <div class="hidden md:flex h-md flex-col w-65 pt-8 pl-5 pr-3 bg-[#ede9e9]">
    <button
      @click="$router.push('overview')"
      type="button"
      class="h-[50px] text-grey bg-[#ffffff] hover:shadow-lg shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <!-- <svg
        class="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fill-rule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clip-rule="evenodd"
        />
      </svg> -->
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/menu.svg" class="w-6" />
      </span>
      Overview
    </button>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/folder.svg" class="w-6" />
      </span>
      Project
    </button>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/graph.svg" class="w-6" />
      </span>
      Sensors
    </button>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/graph.svg" class="w-6" />
      </span>
      Graph
    </button>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/stack.svg" class="w-6" />
      </span>
      File Export
    </button>

    <h5 class="mt-10 font-bold mb-6">Account Page</h5>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <span class="me-4 bg-primary-blue p-1 rounded-lg">
        <img src="/user.svg" class="w-6" />
      </span>
      Morphedo Technologies
    </button>
    <button
      type="button"
      class="h-[50px] text-grey hover:shadow-lg hover:bg-[#ffffff] shadow-cyan-500/50 focus:outline-none focus:font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 mb-2"
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
