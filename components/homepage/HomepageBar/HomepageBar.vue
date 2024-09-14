<script setup lang="ts">
import HomepageBarSelect from "~/components/homepage/HomepageBar/HomepageBarSelect.vue";
import HomepageBarLink from "~/components/homepage/HomepageBar/HomepageBarLink.vue";
</script>

<template>
<section class="homepage-bar group grid
                lg:grid-cols-4
                sm:grid-cols-2
                grid-cols-1 ">
  <HomepageBarSelect title="Дом"/>
  <HomepageBarSelect title="Комнатность"/>
  <HomepageBarSelect title="Площадь"/>
  <HomepageBarLink title="20 Квартир"/>
</section>
</template>

<style scoped>

</style>