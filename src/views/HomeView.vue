<template>
  <div class="heroContainer" :class="theme">
    <HeroSection />
  </div>
  <ProjectsOverviewSection />

  <MyProfile />

  <FeatureDisplay />

  <Footer />
</template>

<script>
import { useThemeStore } from "../Store/ThemeStore";
import HeroSection from "../components/mchq/HeroSection.vue";
import ProjectsOverviewSection from "../components/mchq/ProjectsOverviewSection.vue";
import FeatureDisplay from "../components/mchq/FeatureDisplay.vue";
import MyProfile from "../components/mchq/MyProfile.vue";
import Footer from "../components/mchq/Footer.vue";
import { ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";

// @ is an alias to /src

export default {
  components: {
    HeroSection,
    ProjectsOverviewSection,
    Footer,
    FeatureDisplay,
    MyProfile,
  },
  setup() {
    const store = useThemeStore();
    const storeRefs = storeToRefs(store);
    const themeBG = ref("");
    const theme = storeRefs.theme.value;
    themeBG.value = storeRefs.themeBG.value;
    return { storeRefs, theme };
  },
  computed: {},
};
</script>

<style></style>
