<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
const people = [
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
];
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const selectedPerson = ref(people[0]);
</script>
<template>
  <div class="flex flex-col flex-1 overflow-y-auto md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div style="padding: 20px 20px 0 40px">
      <div class="grid gap-4 md:grid-rows-1 sm:grid-rows-4 lg:grid-cols-4 mb-5">
        <!-- Ongoing project -->
        <div class="border-2 p-5 rounded-lg">
          <div class="flex flex-row justify-between">
            <div class="">
              <h5 class="text-[#728095]">Ongoing project</h5>
              <span class="font-bold text-3xl">40</span>
            </div>
            <div class="">
              <div
                class="bg-[#E1EBEE] p-2 w-[40px] rounded-full mt-3 justify-center items-center flex"
              >
                <img src="/folder_blue.svg" class="object-center" />
              </div>
            </div>
          </div>
        </div>
        <!-- end Ongoing project -->

        <div class="border-2 p-5 rounded-lg">
          <div class="flex flex-row justify-between">
            <div class="">
              <h5 class="text-[#728095]">No of sites</h5>
              <span class="font-bold text-3xl">20</span>
            </div>
            <div class="">
              <div
                class="bg-[#E1EBEE] p-2 w-[40px] rounded-full mt-3 justify-center items-center flex"
              >
                <img src="/folder_blue.svg" class="object-center" />
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 p-5 rounded-lg">
          <div class="flex flex-row justify-between">
            <div class="">
              <h5 class="text-[#728095]">Total Clients</h5>
              <span class="font-bold text-3xl">12</span>
            </div>
            <div class="">
              <div
                class="bg-[#E1EBEE] p-2 w-[40px] rounded-full mt-3 justify-center items-center flex"
              >
                <img src="/folder_blue.svg" class="object-center" />
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 p-5 rounded-lg">
          <div class="flex flex-row justify-between">
            <div class="">
              <h5 class="text-[#728095]">Total Sensors</h5>
              <span class="font-bold text-3xl">40</span>
            </div>
            <div class="">
              <div
                class="bg-[#E1EBEE] p-2 w-[40px] rounded-full mt-3 justify-center items-center flex"
              >
                <img src="/folder_blue.svg" class="object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- graph -->
      <div class="flex flex-row gap-4">
        <!-- Ongoing project -->
        <div class="w-3/5 border-0 p-5 rounded-lg drop-shadow-md bg-white">
          <div class="flex flex-row justify-between">
            <div class="">
              <!-- <h5 class="text-[#00000] text-lg pb-5">Maturity Sensor Graph</h5> -->
              <Listbox v-model="selectedPerson">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative font-bold text-base cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[orange-300]"
                  >
                    <span class="block truncate">{{ selectedPerson.name }}</span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute mt-1 max-h-60 text-base font-bold overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                      <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="person in people"
                        :key="person.name"
                        :value="person"
                        as="template"
                      >
                        <li
                          :class="[
                            active ? 'bg-[#d3f2f7] text-[amber-900]' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4',
                          ]"
                        >
                          <span
                            :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]"
                            >{{ person.name }}</span
                          >
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#000000]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
            <div class="">
              <div class="p-2 w-[40px] rounded-full justify-center items-center flex">
                <img src="/download.svg" class="object-center" />
              </div>
            </div>
          </div>
          <hr />
          <div class="flex flex-row justify-between mt-4 px-12">
            <div class="flex flex-row">
              <!-- <h5 class="text-[#00000] text-lg pb-5">Maturity Sensor Graph</h5> -->
              <span class="inline-block pr-4 font-semibold text-2xl">A = </span>
              <input
                type="text"
                class="border p-2 rounded-[8px] w-[90px] font-[400] focus:outline-none"
                placeholder="87.6"
              />
            </div>
            <div class="flex flex-row">
              <!-- <h5 class="text-[#00000] text-lg pb-5">Maturity Sensor Graph</h5> -->
              <span class="inline-block pr-4 font-semibold text-2xl">B = </span>
              <input
                type="text"
                class="border p-2 rounded-[8px] w-[90px] font-[400] focus:outline-none"
                placeholder="37.00"
              />
            </div>
            
          </div>
          <div>
              <Line :data="data" :options="options" />
            </div>
        </div>
        <div class="w-2/5 border-0 p-5 rounded-lg drop-shadow-md bg-white">
          <div class="flex flex-row justify-between">
            <div class="">
              <h5 class="text-[#728095]">Ongoing project</h5>
              <span class="font-bold text-3xl">40</span>
            </div>
            <div class="">
              <!-- <div
                class="bg-[#E1EBEE] p-2 w-[40px] rounded-full mt-3 justify-center items-center flex"
              >
                <img src="/folder_blue.svg" class="object-center" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
