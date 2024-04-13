<template>
  <div class="flex flex-col flex-1 overflow-y-auto md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div
      style="height: calc(100vh - 66px); overflow-y: auto; padding: 20px 140px 20px 40px"
    >
      <div class="flex flex-row justify-between pb-2 items-center">
        <h1 class="text-2xl font-bold">Graph</h1>
        <!-- <img class="w-6 h-6" src="/shuffle.svg" alt="Jese image" /> -->
      </div>
      <div class="mb-8 flex flex-row items-center">
        <Listbox v-model="selectedSensor">
          <div class="relative">
            <ListboxButton
              class="border h-[42px] w-[85px] mr-4 border-stroke-grey text-sm rounded-md block relative cursor-default text-white bg-primary-green pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <!-- drop-shadow  -->
              <span class="block truncate">{{ selectedSensor.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <img src="/angle-down-white.svg" class="cursor-pointer h-6 w-6" />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="z-10 absolute mt-1 max-h-60 w-[85px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="person in sensorArr"
                  :key="person.name"
                  :value="person"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-[#E5F3FD] text-[#005D9B]' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-5 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ person.name }}</span
                    >
                    <!-- <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                            >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span> -->
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <div class="text-2md font-normal text-oxford-black">Sensor F1-71</div>
      </div>

      <div class="grid gap-4 md:grid-rows-1 sm:grid-rows-5 lg:grid-cols-5 mb-5">
        <div class="border-2 px-3 py-2 rounded-lg h-[80px]">
          <h5 class="text-[#0F2744] text-12size mb-2">Last Strength</h5>
          <hr />
          <div class="font-bold text-3md py-1 text-primary-green">2,263.99 psi</div>
        </div>
        <div class="border-2 px-3 py-2 rounded-lg h-[80px]">
          <h5 class="text-[#0F2744] text-12size mb-2">Last Temperature</h5>
          <hr />
          <div class="font-semibold text-3md py-1 text-oxford-black">
            26.01<sup>o</sup>C
          </div>
        </div>
        <div class="border-2 px-3 py-2 rounded-lg h-[80px]">
          <h5 class="text-[#0F2744] text-12size mb-2">Minimum Temperature</h5>
          <hr />
          <div class="font-semibold text-3md py-1 text-oxford-black">
            26.01<sup>o</sup>C
          </div>
        </div>
        <div class="border-2 px-3 py-2 rounded-lg h-[80px]">
          <h5 class="text-[#0F2744] text-12size mb-2">Maximum Temperature</h5>
          <hr />
          <div class="font-semibold text-3md py-1 text-oxford-black">
            26.01<sup>o</sup>C
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex gap-6">
          <div class="">
            <div
              class="w-[392px] h-[370px] flex-initial border border-1 rounded-lg bg-white text-center"
            >
              <p
                class="py-2 px-4 mb-2 border-b-2 font-medium text-[16px] flex flex-row items-center text-left"
              >
                Sensor Information
                <img src="/angle-down.svg" class="cursor-pointer h-6 w-6" />
              </p>
              <div class="px-4">
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Sensor Name
                  </div>
                  <div style="text-align: left; flex: 6 0 0">Sensor F1-71|G-271</div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Enginner Id
                  </div>
                  <div style="text-align: left; flex: 6 0 0">
                    Rahul Gupta
                    <span class="text-8size">(Technincal Director Enginner)</span>
                  </div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Threshold
                  </div>
                  <div style="text-align: left; flex: 6 0 0">No</div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Time Created
                  </div>
                  <div style="text-align: left; flex: 6 0 0">
                    2023-12-01 12:02:30 <span class="text-[10px]">(56 days ago)</span>
                  </div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Pouring Date
                  </div>
                  <div style="text-align: left; flex: 6 0 0">
                    2023-12-01 12:02:30<span class="text-[10px]">(56 days ago)</span>
                  </div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Last Date Updated
                  </div>
                  <div style="text-align: left; flex: 6 0 0">
                    2023-12-01 12:02:30<span class="text-[10px]">(56 days ago)</span>
                  </div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Location
                  </div>
                  <div style="text-align: left; flex: 6 0 0">
                    A-01, Sector-32, Vasant Vihar Thane West, Maharastra 400610
                  </div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Log Interval
                  </div>
                  <div style="text-align: left; flex: 6 0 0">38 Minutes</div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Last Maturity Index
                  </div>
                  <div style="text-align: left; flex: 6 0 0">2452</div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Last Temperature
                  </div>
                  <div style="text-align: left; flex: 6 0 0">2452</div>
                </div>
                <div class="py-1 flex flex-row text-12size text-oxford-black gap-8">
                  <div
                    class="text-oxford-black text-right font-semibold"
                    style="flex: 5 0 0"
                  >
                    Last Strength
                  </div>
                  <div style="text-align: left; flex: 6 0 0">2452</div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <button
                type="button"
                class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
              >
                Export File
                <img src="/download-white.svg" class="w-4 h-4 mx-2" />
              </button>
            </div>
          </div>
          <div
            class="w-[662px] flex-initial border border-1 rounded-lg bg-white text-center"
          >
            <p
              class="py-2 px-4 mb-2 border-b-2 font-medium text-[16px] flex flex-row items-center text-left"
            >
              Graph
              <img src="/angle-down.svg" class="cursor-pointer h-6 w-6" />
            </p>
            <div>
              <div class="inline-flex rounded-md mt-2" role="group">
                <button
                  @click="showGraph('ms')"
                  type="button"
                  :class="selectedTab == 'ms' ? 'bg-white border' : ''"
                  class="px-4 py-2 h-[35px] items-center flex text-sm font-medium text-grey-text bg-[#F3F5F9] hover:bg-gray-100 focus:outline-none focus:text-oxford-black focus:bg-white focus:border"
                >
                  Maturity-Strength
                </button>
                <button
                  @click="showGraph('tp')"
                  :class="selectedTab == 'tp' ? 'bg-white border' : ''"
                  type="button"
                  class="px-4 py-2 h-[35px] items-center flex text-sm font-medium text-grey-text bg-[#F3F5F9] hover:bg-gray-100 focus:outline-none focus:text-oxford-black focus:bg-white focus:border"
                >
                  Temperature
                </button>
                <button
                  @click="showGraph('mt')"
                  type="button"
                  :class="selectedTab == 'mt' ? 'bg-white border' : ''"
                  class="px-4 py-2 h-[35px] items-center flex text-sm font-medium text-grey-text bg-[#F3F5F9] hover:bg-gray-100 focus:outline-none focus:text-oxford-black focus:bg-white focus:border"
                >
                  Maturity
                </button>
                <button
                  @click="showGraph('st')"
                  type="button"
                  :class="selectedTab == 'st' ? 'bg-white border' : ''"
                  class="px-4 py-2 h-[35px] items-center flex text-sm font-medium text-grey-text bg-[#F3F5F9] hover:bg-gray-100 focus:outline-none focus:text-oxford-black focus:bg-white focus:border"
                >
                  Strength
                </button>
              </div>
              <div class="p-7">
                <canvas id="myChart" ref="temperature" width="400" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initAccordions } from "flowbite";
import { ref, nextTick } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import Chart from "chart.js/auto";
const sensorArr = [
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
];
const selectedSensor = ref(sensorArr[0]);
const temperature: any = ref(null);
const selectedTab = ref("ms");
const chart: any = ref(null);

function showGraph(name: any) {
  temperature.value = null;
  selectedTab.value = name;
  setTimeout(() => {
    generateGraph(name);
  }, 500);
}
function generateGraph(name: any) {
  let dataSet: any = [];
  if (name == "mt") {
    dataSet = [10, 75, 76, 65, 12, 43, 33, 21];
  }
  if (name == "ms") {
    dataSet = [5, 6, 3, 87, 45, 43, 33, 33];
  }
  if (name == "tp") {
    dataSet = [5, 33, 3, 10, 20, 43, 33, 33];
  }
  if (name == "st") {
    dataSet = [65, 59, 80, 81, 56, 55, 40, 45];
  }
  const config: any = {
    type: "line",
    data: {
      labels: ["12 Dec", "16 Dev", "20 Dec", "24 Dec", "20 Dec", "20 Dec"],
      datasets: [
        {
          label: "",
          data: dataSet,
          borderColor: "green",
          fill: false,
          pointRadius: 1,
          borderWidth: 1,
          pointStyle: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      elements: {
        // line:{
        //     tension: 0.4
        // }
        point: {
          borderWidth: 1,
          radius: 10,
          backgroundColor: "red",
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          //   text: "GeeksforGeeks Chart", // Chart title
          color: "#2773FF",
          font: {
            weight: "bold",
            size: 24,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time", // Name of x-axis
          },
          beginAtZero: true,
        },
        y: {
          title: {
            display: true,
            text: "Temperature(oC)", // Name of y-axis
          },
          beginAtZero: true,
        },
      },
    },
  };
  const ctx = temperature.value.getContext("2d");
  console.log(ctx);
  // chart.value = new Chart(temperature.value, config);
  if (chart.value) {
    chart.value.destroy();
  }
  // Create new chart
  chart.value = new Chart(temperature.value, config);
}
onMounted(() => {
  initAccordions();
  generateGraph("mt");
});
</script>
