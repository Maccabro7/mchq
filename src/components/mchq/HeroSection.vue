<template>
  <div class="hero-container" :class="theme">
    <NavbarVue />
    <HeroThemeTitle />
    <HeroProjectsOverview />
  </div>
</template>

<script>
import NavbarVue from "./Navbar.vue";
import HeroThemeTitle from "../mchq/HeroThemeTitle.vue";
import HeroProjectsOverview from "../mchq/HeroProjectsOverview.vue";

import { useThemeStore } from "../../Store/ThemeStore";
import { storeToRefs } from "pinia";

export default {
  components: { NavbarVue, HeroThemeTitle, HeroProjectsOverview },
  setup() {
    const store = useThemeStore();
    let { theme } = storeToRefs(store);

    return { store, theme };
  },
};
</script>

<style>
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s ease-out;
  background-color: black;
  width: 100%;
  height: 90vh;
  min-height: 725px;
  max-height: 1100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-bottom: 128px;
}
</style>
