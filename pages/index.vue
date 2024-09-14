<script setup lang="ts">
import SlidesCover from "~/components/homepage/SlidesCover/SlidesCover.vue";
import HomepageBar from "~/components/homepage/HomepageBar/HomepageBar.vue";
import ContentService from "~/services/content.service";
import type CoverModel from "~/models/cover.model";

type CoversRef = {
  value: CoverModel[]
}

const covers = reactive<CoversRef>({value: []})

await new ContentService()
    .covers()
    .then((res) => {
      covers.value = res
    })

const mainCover = computed(() => {
  return covers.value?.at(-1)?.src
})

</script>

<template>
<div class="top flex justify-center flex-col">
  <section class="relative">
    <SlidesCover :value="covers.value"
                 title-path="/images/title.png"
                 :main-bg-path="mainCover"
                 class="w-full h-screen"
    />
  </section>
  <section class="relative mx-auto sm:bottom-12 bottom-16 max-w-[1400px] w-full px-10
                  xl:px-10 md:px-24">
    <HomepageBar class="z-20 relative shadow w-full" />
  </section>
</div>
</template>

<style scoped>

</style>