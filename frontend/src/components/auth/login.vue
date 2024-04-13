<script setup lang="ts"></script>

<template>
  <!-- <main> -->
  <!-- <div class="bg">
      <div class="overlay">
        <div class="contianer">
          <div class="child">
            <p>Login into your account</p>
          </div>
        </div>
      </div>
    </div> -->
  <div class="relative w-full h-screen bg-zinc-900/90">
    <img
      class="absolute w-full h-full object-cover mix-blend-overlay"
      src="/image-1820@2x.png"
    />
    <div class="flex justify-center items-center h-full float-right p-[50px]">
      <form class="max-w-[400px] w-full mx-auto bg-white p-8 rounded-[8px] float-right">
        <div class="relative inset-0 flex">
          <img class="m-auto" src="/Logo.svg" />
        </div>
        <p class="text-3md text-center text-oxford-black font-normal py-4">
          Login into your account
        </p>
        <div class="flex flex-col mb-6 relative">
          <label for="" class="text-[16px] font-[600] pb-3">Email Id</label>
          <div class="relative">
            <input
              type="text"
              class="border-0 bg-gray-100 p-2 h-[42px] rounded-[8px] font-normal pr-10 w-[100%] focus:ring-0"
              placeholder="abc@gmail.com"
            />
            <img
              src="/Mail-Button-icon.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
          </div>
        </div>
        <div class="flex flex-col relative">
          <label for="" class="text-[16px] font-[600] pb-3">Password</label>
          <div class="relative">
            <input
              type="text"
              class="border-0 bg-gray-100 p-2 h-[42px] rounded-[8px] font-normal pr-10 w-[100%] focus:ring-0"
              placeholder="Enter your password"
            />
            <img
              src="/password.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
          </div>
        </div>
        <p class="text-right py-3 mt-2 text-[#1076FB] text-[14px] relative">
          Forgot password?
        </p>
        <button
          @click="$router.replace('overview')"
          class="transition rounded-[4px] w-full py-3 mt-3 mb-8 bg-[#1076FB] hover:bg-[#5097f4] hover:shadow-3xl relative text-white"
        >
          Login now
        </button>
        <div class="border-t-[1px] border-solid border-[#E3E8F0] relative text-center">
          <span class="bg-[#fff] text-[14px] relative text-[#E3E8F0] top-[-14px] p-3"
            >OR</span
          >
        </div>
        <button
          @click="$router.push('signUp')"
          class="text-primary-blue transition border-[#1076FB] border-[1px] rounded-[4px] w-full py-3 mt-3 hover:bg-[#1076FB] hover:text-white hover:shadow-3xl relative"
        >
          Signup now
        </button>
      </form>
    </div>
  </div>
</template>
