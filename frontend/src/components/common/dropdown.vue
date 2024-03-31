<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-mediumfocus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Sort
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>
    <MenuItems
      class="w-36 z-10 absolute right-4 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
    >
      <div class="px-1 py-1">
        <MenuItem v-for="(s, i) in props.arrayData" :key="i" as="sort" v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-[#E5F3FD] text-[#005D9B]' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]"
          >
            {{ s }}
          </button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const props = defineProps(['arrayData'])
</script>
