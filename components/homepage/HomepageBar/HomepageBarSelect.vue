<script setup lang="ts">
import {ChevronDown} from "lucide-vue-next";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: Array<any>,
    default: []
  }
})

</script>

<template>
  <button class="select-big text-start">
    <p class="title text-sm text-gray-500">{{ title }}</p>
    <div class="dropdown flex items-center justify-between py-2 text-2xl">
      <p class="xl:text-2xl text-xl">Любой</p>
      <div class="--hover rounded border border-dark">
        <ChevronDown class="w-[21px] h-[21px]" />
      </div>
    </div>
  </button>
</template>

<style scoped>

</style>