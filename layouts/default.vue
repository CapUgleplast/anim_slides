<script setup lang="ts">

import Promotion from "~/components/layouts/Promotion.vue";
import DefaultHeader from "~/components/layouts/DefaultHeader.vue";
import ContentService from "~/services/content.service";
import type PromotionModel from "~/models/promotion.model";
import PhoneButton from "~/components/layouts/PhoneButton.vue";

type PromotionRef = {
  value: PromotionModel
}

const promotion = reactive<PromotionRef>({
  value: {
    title: '',
    button: '',
    link: '#'
  }
})

await new ContentService()
    .promotion()
    .then((res) => {
        promotion.value = res
    })

const showPromotion = ref(!!(promotion.value.button || promotion.value.title || promotion.value.link))

</script>

<template>
<div>
  <div class="header fixed top-0 w-full z-20">
      <div v-if="showPromotion"
           class="">
        <Promotion :value="promotion.value"
                   @close="() => showPromotion = false" />
      </div>
      <DefaultHeader />
  </div>
  <slot />
  <PhoneButton class="z-20 fixed bottom-4 xs:right-0 lg:right-5 xl:right-10"/>
</div>
</template>

<style scoped>

</style>