<script setup lang="ts">

import gsap from "gsap";
import type CoverModel from "~/models/cover.model";

const props = defineProps({
  value: {
    type: Array<CoverModel>,
    default: []
  },
  titlePath: {
    type: String,
    default: ''
  },
  mainBgPath: {
    type: String,
    default: ''
  },
})

onMounted(() => {
  gsap.to('.anim-img',
      {
        width: '100%',
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "sine.inOut"
      })
})



</script>

<template>
<div class="slides-cover">
  <div class="images">
    <div class="img-main w-full h-full absolute"
         v-if="mainBgPath"
    >
      <img class="object-cover w-full h-full"
           :src="mainBgPath"
           alt=""/>
    </div>
    <div class="anim-img w-0 h-full overflow-hidden left-0 top-0 absolute"
         v-for="item of value"
         :key="item.id">
      <img class="object-cover object-center w-screen h-full max-w-none"
           :src="item.src"
           alt=""/>
    </div>
    <div class="anim-img title w-0 overflow-hidden bottom-20
                absolute flex justify-center items-center"
         v-if="titlePath">
      <img class="object-cover object-center w-screen h-full px-5 max-w-[1360px]"
           :src="titlePath"
           alt=""/>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>