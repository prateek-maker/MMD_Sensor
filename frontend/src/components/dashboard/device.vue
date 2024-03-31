<template>
  <div class="flex flex-col flex-1 overflow-y-auto md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div style="padding: 20px 140px 0 40px">
      <div class="flex flex-row justify-between pb-2 items-center">
        <h1 class="text-2xl font-bold">Sensor Details</h1>
        <img class="w-6 h-6" src="/shuffle.svg" alt="Jese image" />
      </div>
      <div class="mb-8">
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
                <img src="/angle-down.svg" class="cursor-pointer h-6 w-6" />
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
      </div>

      <div class="grid gap-4 md:grid-rows-1 sm:grid-rows-5 lg:grid-cols-5 mb-5">
        <!-- Ongoing project -->
        <div class="border-2 p-2 rounded-lg flex flex-row items-center h-[80px]">
          <div class="mx-2">
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="Jese image"
            />
          </div>
          <div class="ml-2">
            <div class="">
              <h5 class="text-[#0F2744] text-12size py-1">Enginner ID</h5>
              <hr />
              <div class="font-medium text-2md pt-2 text-[#0F2744]">Rahul Gupta</div>
              <div class="font-normal text-8size text-[#ABB8CA]">
                Technincal Director Enginner
              </div>
            </div>
          </div>
        </div>
        <!-- end Ongoing project -->

        <div class="border-2 p-2 rounded-lg h-[80px]">
          <div class="">
            <div class="ml-2">
              <div class="">
                <h5 class="text-[#0F2744] text-12size pb-1 flex flex-row -mt-1">
                  Location
                  <span><img class="w-4 h-4" src="/location.svg" alt="" /></span>
                </h5>
                <hr />
                <div class="font-medium text-2md pt-2 text-[#0F2744]">Vasant Vihar</div>
                <div class="font-normal text-8size text-[#babcc0]">
                  Thane West, Maharastra 400610
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 p-2 rounded-lg h-[80px]">
          <div class="">
            <div class="ml-2">
              <div class="">
                <h5 class="text-[#0F2744] text-12size pb-1 flex flex-row -mt-1">
                  Date of Pouring
                  <span><img class="w-4 h-4 ml-1" src="/recording.svg" alt="" /></span>
                </h5>
                <hr />
                <div class="font-medium text-2md pt-2 text-[#0F2744]">12/01/2024</div>
                <div class="font-normal text-8size text-[#babcc0]">
                  Last Updated - 2 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 p-2 rounded-lg h-[80px]">
          <div class="">
            <div class="ml-2">
              <div class="">
                <h5 class="text-[#0F2744] text-12size pb-1 -mt-1">Last Strength</h5>
                <hr />
                <div class="font-bold text-3md pt-2 text-primary-green">2,263.99 psi</div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 p-2 rounded-lg h-[80px]">
          <div class="">
            <div class="ml-2">
              <div class="">
                <h5 class="text-[#0F2744] text-12size pb-1 -mt-1">Last Temperature</h5>
                <hr />
                <div class="font-bold text-3md pt-2 text-oxford-black">
                  26.01<sup>0</sup>C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-blue-100 text-blue-600"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:outline-none hover:bg-blue-100"
              data-accordion-target="#accordion-color-body-1"
              aria-expanded="true"
              aria-controls="accordion-color-body-1"
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-1"
            class="hidden"
            aria-labelledby="accordion-color-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top
                of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to
                <a
                  href="/docs/getting-started/introduction/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                  >get started</a
                >
                and start developing websites even faster with components on top of
                Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-gray-200 focus:outline-none hover:bg-blue-100"
              data-accordion-target="#accordion-color-body-2"
              aria-expanded="false"
              aria-controls="accordion-color-body-2"
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            class="hidden"
            aria-labelledby="accordion-color-heading-2"
          >
            <div class="p-5 border border-b-1 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so
                everything you see in the library has a design equivalent in our Figma
                file.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                  >Figma design system</a
                >
                based on the utility classes from Tailwind CSS and components from
                Flowbite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const people = [
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
  { name: "Sensor F1-71|G-271" },
];
const sensorArr = [
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
  { name: "G-271" },
];

const selectedSensor = ref(sensorArr[0]);
</script>
