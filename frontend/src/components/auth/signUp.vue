<script setup lang="ts">
</script>

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
      <form class="max-w-[788px]  w-[788px] mx-auto bg-white p-8 rounded-[8px] float-right">
        <div class="relative inset-0 flex">
          <img class="m-auto" src="/Logo.svg" />
        </div>
        <p class="text-2md text-center py-4">Create a new account</p>
        <!-- <div class="flex justify-between">
          <p>asdasd</p>
          <p>asdasd</p>
        </div> -->
        <!-- <div class="flex flex-col mb-6 ">
          <label for="" class="text-[16px] font-[600] pb-3">Email Id</label>
          <input type="text" class="border relative bg-gray-100 p-2 rounded-[8px] font-[400]" placeholder="abc@gmail.com" />
        </div> -->
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col  relative">
            <label for="" class="text-[16px] font-[600] pb-3">First Name</label>
            <div class="relative">
              <input
                type="text"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="Enter first name"
              />
            </div>
          </div>
          <div class="flex flex-col  relative">
            <label for="" class="text-[16px] font-[600] pb-3">Last Name</label>
            <div class="relative">
              <input
                type="text"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div class="flex flex-col relative">
            <label for="" class="text-[16px] font-[600] pb-3">Email Id</label>
            <div class="relative">
              <input
                type="text"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="abc@gmail.com"
              />
              <img
              src="/Mail-Button-icon.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
            </div>
          </div>
          <div class="flex flex-col  relative">
            <label for="" class="text-[16px] font-[600] pb-3">Mobile Number</label>
            <div class="relative">
              <select name="" id="" class=" bg-[#1076FB] text-[#fff] rounded-[8px] absolute left-0 top-[-1px] h-11 w-[15%] focus:outline-none">
              <option>+91</option>
              </select>
              <input
                type="text"
                class="border right-0 bg-gray-100 p-2 rounded-[8px] font-[400] pl-[60px] w-[100%] focus:outline-none"
                placeholder="1234567890"
              />
              <!-- <img
              src="/password.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            /> -->
            </div>
          </div>
          <div class="flex flex-col  relative">
            <label for="" class="text-[16px] font-[600] pb-3">Password</label>
            <div class="relative">
              <input
                type="password"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="Create New Password"
              />
              <img
              src="/password.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
            </div>
          </div>
          <div class="flex flex-col  relative">
            <label for="" class="text-[16px] font-[600] pb-3">Confirm Password</label>
            <div class="relative">
              <input
                type="password"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="Rewrite the password"
              />
              <img
              src="/password.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
            </div>
          </div>
          <div class="flex flex-col mb-6 relative">
            <label for="" class="text-[16px] font-[600] pb-3">Company Name</label>
            <div class="relative">
              <input
                type="text"
                class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
                placeholder="Enter Company Name"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
        <button
          class="transition rounded-[4px]  py-3 mt-3 bg-[#1076FB] hover:bg-[#5097f4] hover:shadow-3xl relative text-white"
        >
        Signup now
        </button>
      </div>
      </form>
    </div>
  </div>
  <!-- </main> -->
</template>
