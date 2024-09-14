<script setup lang="ts">
import Phone from "~/assets/icons/phone.svg?raw"
</script>

<template>
<button class="p-2">
  <span class="animate-ping absolute inset-0 m-auto rounded-full bg-primary opacity-20"/>
  <div class="bg-primary p-3 rounded-[50%]">
    <span class="text-dark h-5 w-5"
          v-html="Phone"/>
  </div>
</button>
</template>

<style scoped>

</style>