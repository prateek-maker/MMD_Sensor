<template>
  <Listbox v-model="selectedPerson">
    <div class="relative ">
      <ListboxButton
        class="border h-[42px] w-36 mr-4 border-stroke-grey text-sm rounded-md block relative cursor-default bg-white  pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
      <!-- drop-shadow  -->
        <span class="block truncate">{{ selectedPerson.name }}</span>
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
          class="z-10 absolute mt-1 max-h-60 w-36 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="person in props.list"
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
                :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']"
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
</template>

<script setup lang="ts">
const props = defineProps(["list"]);
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

// const people = [
//   { name: "Wade Cooper" },
//   { name: "Arlene Mccoy" },
//   { name: "Devon Webb" },
//   { name: "Tom Cook" },
//   { name: "Tanya Fox" },
//   { name: "Hellen Schmidt" },
// ];
const selectedPerson = ref(props.list[0]);
</script>
