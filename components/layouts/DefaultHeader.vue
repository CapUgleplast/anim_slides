<script setup lang="ts">

import EnterIcon from "~/components/icons/EnterIcon.vue";
import MenuBurger from "~/assets/icons/menuBurger.svg?raw"

</script>

<template>
  <header class="md:px-10 px-2.5 py-3 flex justify-between items-center
                 md:flex-row flex-row-reverse">
    <img src="/images/Logo.png" alt=""/>

    <div class="flex items-center gap-5">
      <button class="button-underlined text-white md:block hidden">
        Заказать звонок
      </button>

      <button class="gap-2 md:inline-flex hidden">
                <span class="button-underlined --reversed text-white">
                  Выбрать квартиру
                </span>
        <EnterIcon />
      </button>

      <button>
        <span v-html="MenuBurger"/>
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>