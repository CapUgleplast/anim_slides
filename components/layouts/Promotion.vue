<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";

const props = defineProps({
  button: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

</script>

<template>
<div class="bg-light flex items-center justify-between md:px-10 p-2.5">
  <span class="md:block hidden" />
  <div class="flex gap-x-5">
    <Button size="sm">
      {{ button }}
    </Button>

    <NuxtLink to="#" class="button-underlined --reversed md:inline hidden">
      {{ title }}
    </NuxtLink>
  </div>

  <NuxtLink to="#" class="button-underlined --reversed text-xs md:hidden">
    {{ title }}
  </NuxtLink>

  <CloseIcon class="cursor-pointer"
             @click="close"/>
</div>
</template>

<style scoped>

</style>