<template>
  <div class="flex flex-col flex-1 overflow-y-auto md:ml-[0] sm:ml-[0] lg:ml-[280px]">
    <div style="height: calc(100vh - 66px);overflow-y: auto;padding: 20px 140px 20px 40px;">
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
          data-accordion="open"
          data-active-classes="bg-[#fff] text-blue-600"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              class="flex bg-blue-tint items-center justify-end w-full p-5 h-[48px] font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:outline-none"
              data-accordion-target="#accordion-color-body-1"
              aria-expanded="true"
              aria-controls="accordion-color-body-1"
            >
              <div class="flex">
                <div
                  class="bg-stroke-grey h-auto w-[1px] -mt-[12px] -mb-[12px] mr-4"
                ></div>
                <div
                  class="bg-green-tint w-fit mr-10 text-primary-green text-xs font-normal px-3 p-1 rounded-full"
                >
                  &#8226; Active
                </div>
              </div>
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
            <div class="p-5 border border-b-0 border-gray-200 px-14">
              <div>
                <div class="flex flex-row justify-end text-[10px] font-medium text-[#1076FB] mb-1" @click="goToPage('details')">
                  More details
                  <img src="/edit-3.svg" class="ml-2" style="width:16px;height:16px"/>
                </div>
                <div class="grid grid-cols-6 gap-2">
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Sensor G-71
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Temperature (<sup>o</sup>C)
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Maturity (<sup>o</sup>C-hrs)
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Strength (MPa)
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Day 0 <span class="text-8size">(within 15 min)</span>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <div class="flex min-w-0 gap-4">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                            <p class="text-sm font-medium text-stroke-grey truncate">
                              |
                            </p>
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              00
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              N/A
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Day 3 <span class="text-8size">(72 hours)</span>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <div class="flex min-w-0 gap-4">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                            <p class="text-sm font-medium text-stroke-grey truncate">
                              |
                            </p>
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              705
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              15
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Day 7 
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <div class="flex min-w-0 gap-4">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                            <p class="text-sm font-medium text-stroke-grey truncate">
                              |
                            </p>
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              00
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              N/A
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Day 14
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <div class="flex min-w-0 gap-4">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                            <p class="text-sm font-medium text-stroke-grey truncate">
                              |
                            </p>
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              00
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              N/A
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Day 21
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <div class="flex min-w-0 gap-4">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                            <p class="text-sm font-medium text-stroke-grey truncate">
                              |
                            </p>
                            <p class="text-sm font-medium text-oxford-black truncate">
                              25.1<sup>o</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              00
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="pb-3 pt-[3px] pl-[10px] h-[28px] ">
                        <div class="flex items-center text-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-normal text-oxford-black truncate">
                              N/A
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="flex flex-row justify-end text-[10px] font-medium text-[#1076FB] mb-1">
                  More details
                  <img src="/edit-3.svg" class="ml-2" style="width:16px;height:16px"/>
                </div>
                <div class="grid grid-cols-6 gap-2 ">
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Sensor G-71
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              1034
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              2056.55
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              class="flex items-center justify-between h-[48px] w-full p-5 font-medium rtl:text-right border border-gray-200 focus:outline-none"
              data-accordion-target="#accordion-color-body-2"
              aria-expanded="true"
              aria-controls="accordion-color-body-2"
            >
              <span class="text-grey-text font-normal">Ground-01</span>
              <div class="flex" >
                <div
                  class="bg-stroke-grey h-auto w-[1px] -mt-[12px] -mb-[12px] mr-4"
                ></div>
                <div
                  class="bg-[#FFE9E7] w-fit mr-10 text-[#DB3023] text-xs font-normal px-3 p-1 rounded-full"
                >
                  &#8226; Pending
                </div>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 mt-[5px] rotate-180 shrink-0"
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
              </div>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            class="hidden"
            aria-labelledby="accordion-color-heading-2"
          >
            <div class="p-5 border border-1 rounded-b-xl border-gray-200">
              
              <div class="mt-4">
                <div class="flex flex-row justify-end text-[10px] font-medium text-[#1076FB] mb-1">
                  More details
                  <img src="/edit-3.svg" class="ml-2" style="width:16px;height:16px"/>
                </div>
                <div class="grid grid-cols-6 gap-2 ">
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              Sensor G-73
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              1034
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#DB3023]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-white truncate">
                              2056.55
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="border">
                    <ul class="max-w-md divide-y divide-gray-200">
                      <li class="pb-3 pt-[7px] pl-[10px] h-[35px] bg-[#F3F5F9]">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-oxford-black truncate">
                              --
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useRouter } from "vue-router";
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute()
function goToPage(type:any){
  router.push({name:type})
}
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
onMounted(() => {
  initAccordions();
});
</script>
