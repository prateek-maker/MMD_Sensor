<template>
  <div class="flex flex-col flex-1 overflow-y-auto md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div
      style="height: calc(100vh - 66px); overflow-y: auto; padding: 20px 140px 20px 40px"
    >
      <h1 class="text-2xl font-bold">User Details</h1>
      <div
        class="flex justify-between flex-row gap-20 mt-3 md:flex-col sm:flex-col lg:flex-row align-middle"
      >
        <div class="flex">
          <div class="mr-4">
            <Popover v-slot="{ open }" class="relative">
              <PopoverButton
                class="border h-[42px] border-stroke-grey group inline-flex items-center rounded-md text-sm px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <span>Location</span>
                <ChevronDownIcon
                  class="ml-2 h-5 w-5 transition duration-150 ease-in-out"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel
                class="absolute bg-[#F9FDFF] left-0 origin-top-left z-10 mt-1 transform sm:px-0 lg:max-w-3xl"
              >
                <div class="z-10 bg-white rounded-lg shadow w-60">
                  <div class="p-3">
                    <label for="input-group-search" class="sr-only">Select Area</label>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 end-0 flex items-center pr-2 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="input-group-search"
                        class="border-stroke-grey text-gray-900 text-sm rounded-lg focus:ring-0 block w-full p-2.5"
                        placeholder="Search user"
                      />
                    </div>
                  </div>
                  <ul
                    class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownSearchButton"
                  >
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-11"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                        />
                        <label
                          for="checkbox-item-11"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Bonnie Green</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          checked
                          id="checkbox-item-12"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-12"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Jese Leos</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-13"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-13"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Michael Gough</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-14"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-14"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Robert Wall</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-15"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-15"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Joseph Mcfall</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-16"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-16"
                          class="w-full ms-2 text-sm font-normal rounded text-black"
                          >Leslie Livingston</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded">
                        <input
                          id="checkbox-item-17"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          for="checkbox-item-17"
                          class="w-full ms-2 text-sm font-normal text-black rounded"
                          >Roberta Casas</label
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
          <div class="relative block">
            <span
              class="absolute inset-y-0 left-0 flex h-full items-center pl-2"
              style="z-index: 1"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              id="first_name"
              class="border-stroke-grey text-sm rounded-md block w-96 p-2.5 pl-8 focus:outline-none"
              placeholder="Search in by name / email id"
              required
            />
            <!-- drop-shadow -->
          </div>
        </div>
        <div class="flex justify-end">
          <div class="w-56 text-right">
            <Dropdown :arrayData="sortArry" />
          </div>
          <img src="/menu-vertical.svg" height="20" width="20" class="" />
        </div>
      </div>
      <div class="mt-5 flex">
        <div
          class="bg-green-tint flex w-fit mr-3 text-primary-green text-xs font-medium px-5 p-2 rounded-full"
        >
          <span class="m-auto pr-2">Mumbai</span>
          <img src="/cross-round.svg" height="10" width="10" />
        </div>
        <div
          class="border-stroke-grey border flex w-fit text-primary-green text-xs font-medium px-5 p-2 rounded-full"
        >
          <span class="m-auto pr-2 text-grey-text">Mumbai</span>
        </div>
      </div>
      <div class="mt-5">
        <div class="relative overflow-x-none border border-stroke-grey sm:rounded-lg">
          <div class="flex flex-row justify-between py-3 px-3 items-center">
            <div class="flex items-center bg-gray-back rounded-sm p-1 h-fit">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 focus:outline-none"
              />
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              <img src="/angle-down.svg" height="20" width="20" class="" />
            </div>
            <div class="text-primary-blue text-xs font-bold flex flex-row">
              <button @click="openModal"
                type="button"
                class="text-white bg-primary-blue hover:bg-[#1da1f2]/90 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center"
              >
                <img src="/plus.svg" class="w-4 h-4 mr-2 ml-0" />
                Create New ID
              </button>
            </div>
          </div>
          <div class="table-wrp block">
            <table
              class="table-fixed w-full text-sm text-left rtl:text-right text-gray-900"
            >
              <thead
                style="position: sticky; top: 0"
                class="text-md text-gray-700 bg-gray-50 dark:bg-gray-700 "
              >
                <tr class="">
                  <th scope="col" class="border-r border-white px-3 py-3 font-normal">
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3 border-r border-white font-normal">
                    Designation
                  </th>
                  <th scope="col" class="px-3 py-3 border-r border-white font-normal">
                    Email
                  </th>
                  <th scope="col" class="px-3 py-3 border-r border-white font-normal">
                    Contact Number
                  </th>
                  <th scope="col" class="px-3 py-3 border-r border-white font-normal">
                    Password
                  </th>
                  <th scope="col" class="px-3 py-3 font-normal">User Types</th>
                </tr>
              </thead>
              <tbody
                v-for="(user, index) in users"
                :key="index"
                class="border-b border-stroke-grey"
              >
                <tr class="bg-white hover:bg-gray-50 text-gray-500" style="height: 20px">
                  <td class="w-4 p-4 border-r border-stroke-grey">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">{{
                        user.name
                      }}</label>
                      <span class="pl-2 font-semibold">{{ user.name }}</span>
                    </div>
                  </td>
                  <th scope="row" class="px-3 py-4 text-gray-900 whitespace-nowrap">
                    <div class="text-sm font-normal text-gray-500">
                      {{ user.designation }}
                    </div>
                  </th>
                  <td class="px-3 py-4 border-r border-stroke-grey">
                    <div class="text-sm font-normal text-gray-500">
                      {{ user.email }}
                    </div>
                  </td>
                  <td class="px-3 py-4 border-r border-stroke-grey text-sm">
                    {{ user.contact_no }}
                  </td>
                  <td class="px-3 py-4 border-r border-stroke-grey">
                    <div class="flex flex-row justify-between items-center">
                      <div>
                        <label
                          :for="index"
                          class="block text-sm font-medium text-gray-900 dark:text-white"
                        ></label>
                        <input
                          :type="!user.showPassword ? 'password' : 'text'"
                          :id="index"
                          class="bg-transparent border-0 border-gray-300 pointer-events-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5"
                          v-model="user.password"
                        />
                      </div>
                      <div
                        class="cursor-pointer"
                        @click.stop="user.showPassword = !user.showPassword"
                      >
                        <img
                          :src="
                            !user.showPassword ? '/eye-blue.svg' : '/eye-off-grey.svg'
                          "
                          class="w-[16px] h-[16px]"
                        />
                      </div>
                    </div>
                  </td>
                  <td class="px-3 py-2">
                    <div class="flex flex-row gap-2 items-center">
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      {{ user.userType }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            class="py-3 px-3 flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span
              class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto"
              >Showing <span class="font-semibold text-gray-900">1-10</span> of
              <span class="font-semibold text-gray-900">1000</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100"
                  >Previous</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <Dialog as="div" :open="isOpen" @close="closeModal" class="relative z-10">
      <div class="fixed inset-0 bg-black/30 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
            <DialogPanel
              class="w-[788px] h-[550px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-3md font-medium text-center pb-3 leading-6 text-oxford-black"
              >
                Create a New User account
              </DialogTitle>
              <div class="mt-2 ">
                <form>
                    <div class="grid gap-6 grid-cols-2 p-4">
                        <div>
                            <label for="first_name" class="block mb-2 text-[16px] text-[#555555] font-medium ">First name</label>
                            <input type="text" id="first_name"  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-[16px] text-[#555555] font-medium ">Last name</label>
                            <input type="text" id="last_name"  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                        </div>
                        <div>
                          <label for="email" class="block mb-2 text-[16px] text-[#555555] font-medium ">Email address</label>
                          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                        </div> 
                        <div>
                            <label for="phone" class="block mb-2 text-[16px] text-[#555555] font-medium ">Phone number</label>
                            <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-[16px] text-[#555555]  font-medium ">Password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                        </div> 
                        <div>
                            <label for="confirm_password" class="block mb-2 text-[16px] text-[#555555] font-medium ">Confirm password</label>
                            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                        </div> 
                        <div>
                            <label for="company" class="block mb-2 text-[16px] text-[#555555] font-medium ">Company</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Flowbite" required />
                        </div> 
                        <div>
                            <label for="company" class="block mb-2 text-[16px] text-[#555555] font-medium ">Designation</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Flowbite" required />
                        </div> 
                    </div>
                </form>
              </div>

              <div class="mt-4 px-4">
                <button
                  type="button"
                  class="inline-flex mr-3 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                 Submit
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                 Cancel
                </button>
              </div>
            </DialogPanel>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Dropdown from "../common/dropdown.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
const users: any = ref([
  {
    id: 1,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123asdasd",
    showPassword: false,
  },
  {
    id: 2,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 3,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 4,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 5,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 6,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 7,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 8,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 9,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
  {
    id: 10,
    name: "Rahul Gupta",
    designation: "Technincal Director",
    email: "rahul@gmail.com",
    contact_no: "7004607728",
    userType: "Engineer",
    image: "Active",
    password: "Welcome@123",
    showPassword: false,
  },
]);
const sortArry = ref(["Date Modified", "Date Created", "Ascending", "Descending", "Tag"]);
const openModel = ref(false)
const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
<style>
.open-details {
  animation-name: openDetails;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  animation-fill-mode: forwards;
}
.close-details {
  animation-name: closeDetails;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  animation-fill-mode: forwards;
}
.table-wrp {
  /* max-height: 53vh; */
  max-height: calc(100vh - 51px);
  overflow-y: auto;
  display: block;
}
td {
  border: 1px solid rgb(224, 223, 223);
}
[type="text"],[type="password"],[type="email"]:focus {
  --tw-ring-color: unset !important;
  --tw-ring-offset-shadow: unset !important;
  --tw-ring-shadow: unset !important;
  border-color: rgb(227 232 240 / var(--tw-border-opacity)) !important;
}
</style>
