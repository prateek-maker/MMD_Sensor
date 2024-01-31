<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
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
      <form class="max-w-[400px] w-full mx-auto bg-white p-8 rounded-[8px] float-right ">
        <div class="relative inset-0 flex">
          <img class="m-auto " src="/Logo.svg" />
        </div>
        <p class="text-2md text-center py-4">Login into your account</p>
        <!-- <div class="flex justify-between">
          <p>asdasd</p>
          <p>asdasd</p>
        </div> -->
        <!-- <div class="flex flex-col mb-6 ">
          <label for="" class="text-[16px] font-[600] pb-3">Email Id</label>
          <input type="text" class="border relative bg-gray-100 p-2 rounded-[8px] font-[400]" placeholder="abc@gmail.com" />
        </div> -->
        <div class="flex flex-col mb-6 relative">
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
        <div class="flex flex-col relative">
          <label for="" class="text-[16px] font-[600] pb-3">Password</label>
          <div class="relative">
            <input
              type="text"
              class="border bg-gray-100 p-2 rounded-[8px] font-[400] pr-10 w-[100%] focus:outline-none"
              placeholder="Enter your password"
            />
            <img
              src="/password.svg"
              alt="Image"
              class="absolute right-0 top-[-1px] h-11 w-[2.55rem]"
            />
          </div>
        </div>
        <p class="text-right py-3 mt-2 text-[#1076FB] text-[14px] relative">Forgot password?</p>
        <button
          class="transition rounded-[4px] w-full py-3 mt-3 mb-8 bg-[#1076FB] hover:bg-[#5097f4] hover:shadow-3xl relative text-white"
        >
          Login now
        </button>
        <!-- <p class="flex items-center mt-2">
          <input type="checkbox" name="" id="" class="mr-2" />Remeber Me
        </p>
        <p class="text-center mt-8">Not a mmen</p> -->
        <!-- <div class="py-4 flex ">
          <p class="bg-[#E3E8F0] w-[160px] h-[1px] relative"></p>
          <p>OR</p>
          <p></p>
        </div> -->
        <div class="border-t-[1px] border-solid border-[#E3E8F0] relative text-center">
        <span class="bg-[#fff] text-[14px] relative text-[#E3E8F0] top-[-14px] p-3">OR</span></div>
        <button @click="$router.push('SignUp')"
          class="text-[#2773FF] transition border-[#1076FB] border-[1px] rounded-[4px] w-full py-3 mt-3 hover:bg-[#1076FB] hover:text-white hover:shadow-3xl relative"
        >
        
          Signup now
        </button>
      </form>
    </div>
  </div>
  <!-- </main> -->
</template>

<style>
.contianer {
  /* margin: 0 auto;
  float: inline-end;
  width: 415px;
  background: #fff;
  border-radius: 10px;
  /* overflow: hidden; */
  /* display: flex; */
  /* align-items: stretch; */
  /* box-shadow: 0 0 20px 6px #090b6f85;  */
  /* background-color: #4caf50; */
  height: 100vh;
  width: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 34px;
}
.child {
  height: 200px;
  width: 415px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  /* left: 50%;
  top: 0;
  transform: translate(-50%, 50%);
  position: absolute; */
}
/* .bg {
  background-image: url("/image-1820@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
} */
.overlay {
  background: transparent;
  height: 100%;
}
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/public/image-1820@2x.png") center/cover no-repeat;
  margin: 0;
}

.container {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.container h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
