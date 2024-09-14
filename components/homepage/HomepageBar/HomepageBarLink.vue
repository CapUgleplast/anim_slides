<script setup lang="ts">

import EnterIcon from "~/components/icons/EnterIcon.vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: '#'
  }
})

</script>

<template>
<NuxtLink class="bg-dark flex items-center justify-center gap-2 p-8"
          :to="path">
  <p class="text-xl underline-offset-2 text-white button-underlined --reversed">
    {{ title }}
  </p>
  <EnterIcon />
</NuxtLink>
</template>

<style scoped>

</style>