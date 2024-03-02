<script setup lang="ts">
import { ref } from "vue";

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

const toggleDetails = (index: any) => {
  console.log(index, "ASdasdsads");
  users.value[index].showDetails = !users.value[index].showDetails;
};
</script>
<template>
  <div class="flex flex-col flex-1 overflow-none md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div class="" style="padding: 60px 60px 0 60px">
      <h1 class="text-2xl font-bold">Projects</h1>
      <div
        class="flex justify-between flex-row gap-20 mt-3 md:flex-col sm:flex-col lg:flex-row"
      >
        <div class="flex">
          <select
            id="countries"
            class="border drop-shadow w-32 mr-5 border-stroke-grey text-sm rounded-md block p-2.5"
          >
            <option selected>Last 30 days</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="countries"
            class="border mr-5 drop-shadow border-stroke-grey text-sm rounded-md block w-32 p-2.5"
          >
            <option selected>Location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <div class="relative block">
            <span class="absolute inset-y-0 left-0 flex h-full items-center pl-2" style="z-index: 1;">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
            <input
              type="text"
              id="first_name"
              class="border border-stroke-grey drop-shadow text-sm rounded-md block w-96 p-2.5 focus:outline-none pl-8"
              placeholder="Search in users / project name"
              required
            />
          </div>
        </div>
        <div class="flex justify-end">
          <select id="countries" class="w-14 text-sm rounded-md block mr-5">
            <option selected>Sort</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
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
              <thead
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
                <tr class="bg-white hover:bg-gray-50 text-gray-500 " style="height:20px;">
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
                    class="flex items-center px-6 py-4 border-r border-stroke-grey text-gray-900 whitespace-nowrap"
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
                        class="table-fixed border w-full text-sm text-left rtl:text-right text-gray-900"
                      >
                        <thead class="text-md text-gray-700 bg-gray-50">
                          <tr class="">
                            <th scope="col" class="border-r border-stroke-grey px-6 py-3">
                              Sensor G - 71
                            </th>
                            <th scope="col" class="px-3 py-2 border-r border-stroke-grey">
                              Day 0 <span class="text-xs">(within 15 min)</span>
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Day 3 (72 hours)
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Day 7
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Day 14
                            </th>
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Day 21
                            </th>
                            <th scope="col" class="px-6 py-3">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="(user, index) in users"
                          :key="index"
                          class="border-b border-stroke-grey"
                        >
                          <tr class="bg-white hover:bg-gray-50 text-gray-500">
                            <th scope="col" class="px-6 py-3 border-r border-stroke-grey">
                              Temperature (0C)
                            </th>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row">
                                <div class="font-normal text-xs text-gray-500">
                                  25.1 | 25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row">
                                <div class="font-normal text-xs text-gray-500">
                                  25.1 | 25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row">
                                <div class="font-normal text-xs text-gray-500">
                                  25.1 | 25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row">
                                <div class="font-normal text-xs text-gray-500">
                                  25.1 | 25.6
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 border-r border-stroke-grey">
                              <div class="flex flex-row">
                                <div class="font-normal text-xs text-gray-500">
                                  25.1 | 25.6
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
thead{
  position:sticky;
  top:0
}
</style>
