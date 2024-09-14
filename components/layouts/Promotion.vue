<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import type {PropType} from "vue";
import type PromotionModel from "~/models/promotion.model";

const props = defineProps({
  value: {
    type: Object as PropType<PromotionModel>,
    default: {}
  },
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

</script>

<template>
<div class="bg-light flex items-center justify-between md:px-10 p-2.5">
  <span class="md:block hidden" />
  <NuxtLink :to="value.link" class="flex gap-x-5">
    <Button size="sm">
      {{ value.button }}
    </Button>

    <p class="button-underlined --reversed md:inline hidden">
      {{ value.title }}
    </p>
  </NuxtLink>

  <NuxtLink to="#" class="button-underlined --reversed text-xs md:hidden">
    {{ value.title }}
  </NuxtLink>

  <CloseIcon class="cursor-pointer"
             @click="close"/>
</div>
</template>

<style scoped>

</style>