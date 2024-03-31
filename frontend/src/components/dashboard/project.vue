<script setup lang="ts">
import { ref } from "vue";
import Dropdown from "../common/dropdown.vue"
import ListBox from "../common/listBox.vue";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'
const users: any = ref([
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "Active",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "Pending",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
  {
    project_id: "G-271",
    enginner_id: { name: "Rahul Gupta", address: "Technincal Director" },
    location: { name: "Vasant Vihar", state: "Maharastra" },
    floor_sensor: "F1-02 | G-01",
    date: { date: "12/09/2023", updated: "2 Hours ago" },
    status: "In progress",
    showDetails: false,
  },
]);
const activeIndex = ref(null);
const sortArry = ref([
  'Date Modified',
  'Date Created',
  'Ascending',
  'Descending',
  'Tag'
]);
const daysArray = ref([
    { name: 'Last 30 days' },
    { name: 'Last 3 days' },
    { name: 'Last 10 days' },
    { name: 'Last 40 days' },
    { name: 'Last 20 days' },
    { name: 'Last 5 days' },
  ]);

const locationArray = ref([
  { name: 'Location' },
  { name: 'United States' },
  { name: 'Canada' },
  { name: 'France' },
  { name: 'Germany' },
]);


const toggleDetails = (index: any) => {
  console.log(index, "ASdasdsads");
  users.value[index].showDetails = !users.value[index].showDetails;
};
</script>
<template>
  <div class="flex flex-col flex-1 overflow-none md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div class="" style="padding: 20px 140px 0px 60px">
      <h1 class="text-2xl font-bold">Projects</h1>
      <div
        class="flex justify-between flex-row gap-20 mt-3 md:flex-col sm:flex-col lg:flex-row align-middle"
      >
        <div class="flex">
          <!-- <select
            id="countries"
            class="border drop-shadow w-32 mr-5 border-stroke-grey text-sm rounded-md block p-2.5"
          >
            <option selected>Last 30 days</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> -->
          <div class="">
            <ListBox :list="daysArray"/>
          </div>
          <!-- <select
            id="countries"
            class="border mr-5 drop-shadow border-stroke-grey text-sm rounded-md block w-32 p-2.5"
          >
            <option selected>Location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> -->
          <div class="mr-4">
            <Popover v-slot="{ open }" class="relative">
              <PopoverButton
                class="border h-[42px]  border-stroke-grey group inline-flex items-center rounded-md text-sm  px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <span>Location</span>
                <ChevronDownIcon
                  class="ml-2 h-5 w-5 transition duration-150 ease-in-out "
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel
                class="absolute  bg-[#F9FDFF] left-0 origin-top-left z-10 mt-1  transform  sm:px-0 lg:max-w-3xl"
              >
              <div  class="z-10  bg-white rounded-lg shadow w-60 ">
                <div class="p-3 ">
                  <label for="input-group-search" class="sr-only">Select Area</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center pr-2 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                    <input type="text" id="input-group-search" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" placeholder="Search user">
                  </div>
                </div>
                <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                  <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-11" class="w-full ms-2 text-sm font-normal text-black rounded ">Bonnie Green</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded">
                        <input checked id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-12" class="w-full ms-2 text-sm font-normal text-black rounded">Jese Leos</label>
                      </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-13" class="w-full ms-2 text-sm font-normal text-black rounded">Michael Gough</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-14" class="w-full ms-2 text-sm font-normal text-black rounded ">Robert Wall</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-15" class="w-full ms-2 text-sm font-normal text-black rounded ">Joseph Mcfall</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-16" class="w-full ms-2 text-sm font-normal rounded text-black">Leslie Livingston</label>
                    </div>
                  </li>
                        <li>
                    <div class="flex items-center p-2 rounded">
                      <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-item-17" class="w-full ms-2 text-sm font-normal text-black rounded">Roberta Casas</label>
                    </div>
                  </li>
                </ul>
                  <!-- <a href="#" class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50    dark:text-red-500 ">
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z"/>
                  </svg>
                    Delete user
                  </a> -->
              </div>
              </PopoverPanel>
            </Popover>
          </div>
          <div class="relative block">
            <span class="absolute inset-y-0 left-0 flex h-full items-center pl-2" style="z-index: 1;">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
            </span>
            <input
              type="text"
              id="first_name"
              class="border border-stroke-grey  text-sm rounded-md block w-96 p-2.5 focus:outline-none pl-8"
              placeholder="Search in users / project name"
              required
            />
            <!-- drop-shadow -->
          </div>
        </div>
        <div class="flex justify-end">
          <div class="w-56 text-right">
            <Dropdown :arrayData="sortArry"/>
          </div>
          <img src="/menu-vertical.svg" height="20" width="20" class=""/>
        </div>
      </div>
      <div class="mt-5 flex">
        <div class="bg-green-tint flex w-fit mr-3 text-primary-green text-xs font-medium px-5 p-2 rounded-full ">
          <span class="m-auto pr-2">Mumbai</span>
          <img src="/cross-round.svg" height="10" width="10"/>
        </div>
        <div class="border-stroke-grey border  flex w-fit text-primary-green text-xs font-medium px-5 p-2 rounded-full ">
          <span class="m-auto pr-2 text-grey-text">Mumbai</span>
        </div>
      </div>
      <div class="mt-5 ">
        <div class="relative overflow-x-none border border-stroke-grey sm:rounded-lg" >
          <div class="flex flex-row justify-between py-3 px-3">
            <div class="flex items-center bg-gray-back rounded-sm p-1">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              <img src="/angle-down.svg" height="20" width="20" class=""/>
            </div>
            <div class="text-primary-blue text-xs font-bold flex">
              <span class="m-auto pr-2">Save</span>
              <img src="/stack.svg" height="20" width="20"/>
            </div>
          </div>
          <div class="table-wrp block">
            <table
              class="table-fixed w-full text-sm text-left rtl:text-right text-gray-900"
            >
              <thead style="position:sticky;top:0"
                class="text-md text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white"
              >
                <tr class="">
                  <th scope="col" class="border-r border-white px-6 py-3">Project Id</th>
                  <th scope="col" class="w-[300px]  px-6 py-3 border-r border-white">
                    Enginner ID
                  </th>
                  <th scope="col" class="px-6 py-3 border-r border-white">Location</th>
                  <th scope="col" class="px-6 py-3 border-r border-white">Floor-Sensors</th>
                  <th scope="col" class="px-6 py-3 border-r border-white">Pouring Date</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody
                v-for="(user, index) in users"
                :key="index"
                class="border-b border-stroke-grey"
              >
                <tr class="bg-white hover:bg-gray-50 text-gray-500 "  style="height:20px;">
                  <td class="w-4 p-4 border-r border-stroke-grey">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">{{
                        user.project_id
                      }}</label>
                      <span class="pl-2">{{ user.project_id }}</span>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4  text-gray-900 whitespace-nowrap"
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold text-gray-500">
                        {{ user.enginner_id.name }}
                      </div>
                      <div class="font-normal text-gray-500 text-xs">
                        {{ user.enginner_id.address }}
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4 border-r border-stroke-grey">
                    <div class="">
                      <div class="text-base font-semibold text-gray-500">
                        {{ user.location.name }}
                      </div>
                      <div class="font-normal text-gray-500 text-xs">
                        {{ user.location.state }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 border-r border-stroke-grey text-base">
                    {{ user.floor_sensor }}
                  </td>
                  <td class="px-6 py-4 border-r border-stroke-grey">
                    <div class="">
                      <div class="text-base font-semibold text-gray-500">
                        {{ user.date.date }}
                      </div>
                      <div class="font-normal text-xs text-gray-500">
                        {{ user.date.status }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-row justify-between">
                      <!-- <span
                        class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
                        >{{ user.status }}</span
                      > -->
                      <div class="bg-green-tint flex w-fit mr-3 text-primary-green text-xs font-medium px-3 p-1 rounded-full ">
                        <span class="">{{ user.status }}</span>
                      </div>
                      <div class="font-normal text-xs text-gray-500">
                        <!-- <button @click="toggleDetails(index)">
                          {{ user.showDetails ? "Hide Details" : "Show Details" }}
                        </button> -->
                        <img src="/angle-down.svg"  @click="toggleDetails(index)" class="cursor-pointer" height="25" width="25"/>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="6"
                    style=""
                    v-if="user.showDetails"
                    :class="{
                      'open-details': user.showDetails,
                      'close-details': !user.showDetails,
                    }"
                  >
                    <div class="p-8">
                      <table
                        class="border w-full text-sm text-left rtl:text-right text-gray-900"
                      >
                        <thead class="text-md text-gray-700 bg-gray-50">
                          <tr class="">
                            <th scope="col" class="border-r border-b border-stroke-grey px-6 py-3 w-[200px]">
                              Sensor G - 71
                            </th>
                            <th scope="col" class="px-3 py-2 border-r border-b border-stroke-grey w-[140px]">
                              Day 0 <span class="text-[10px]">(within 15 min)</span>
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-b border-stroke-grey w-[140px]">
                              Day 3 <span class="text-[10px]">(72 hours)</span>
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-b border-stroke-grey w-[140px]">
                              Day 7
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-b border-stroke-grey w-[140px]" >
                              Day 14
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-b border-stroke-grey w-[140px]">
                              Day 21
                            </th>
                            <th scope="col" class="px-6 py-3 border-b border-stroke-grey w-[140px]">
                              <div class="flex flex-row justify-between">
                                Action
                                <img src="/angle.svg" class="cursor-pointer" height="16" width="18"/>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          class="border-b border-stroke-grey text-gray-700"
                        >
                          <tr class="bg-white hover:bg-gray-50">
                            <th scope="col" class="px-6 py-3 border-r border-b border-stroke-grey">
                              Temperature (<sup>0</sup>C)
                            </th>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="font-bold text-[14px]">
                                  25.1
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  |
                                </div>
                                <div class="font-bold text-[14px]">
                                  25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="font-bold text-[14px]">
                                  25.1
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  |
                                </div>
                                <div class="font-bold text-[14px]">
                                  25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="font-bold text-[14px]">
                                  25.1
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  |
                                </div>
                                <div class="font-bold text-[14px]">
                                  25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="font-bold text-[14px]">
                                  25.1
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  |
                                </div>
                                <div class="font-bold text-[14px]">
                                  25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="font-bold text-[14px]">
                                  25.1
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  |
                                </div>
                                <div class="font-bold text-[14px]">
                                  25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="ali">
                                  <img src="/edit-3.svg" style="width:16px;height:16px"/>
                                </div>
                                <div class="font-bold text-[14px] text-gray-200">
                                  <img src="/bell.svg" style="width:16px;height:16px"/>
                                </div>
                                <div class="font-bold text-[14px]">
                                  <img src="/delete.svg" style="width:16px;height:16px"/>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="bg-white hover:bg-gray-50 text">
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Maturity (<sup>0</sup>C-hrs)
                            </th>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="text-center">
                                <div class="font-normal text-[14px]">
                                  25.1
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="text-center">
                                <div class="font-normal text-[14px]">
                                  25.1
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="text-center">
                                <div class="font-normal text-[14px]">
                                  25.1
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="text-center">
                                <div class="font-normal text-[14px]">
                                  25.1
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="text-center">
                                <div class="font-normal text-[14px]">
                                  25.1
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row justify-between">
                                <div class="ali">
                                  <img src="/edit-3.svg" style="width:16px;height:16px"/>
                                </div>
                                <div class="font-normal text-[14px] text-gray-200">
                                  <img src="/bell.svg" style="width:16px;height:16px"/>
                                </div>
                                <div class="font-normal text-[14px]">
                                  <img src="/delete.svg" style="width:16px;height:16px"/>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
              class="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto"
              >Showing
              <span class="font-semibold text-gray-900 ">1-10</span> of
              <span class="font-semibold text-gray-900 ">1000</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 "
                  >Previous</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
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
  </div>
</template>
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
.table-wrp  {
  max-height: 53vh;
  overflow-y: auto;
  display:block;
}
td {
  border: 1px solid rgb(224, 223, 223);
}
</style>
