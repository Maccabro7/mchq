<template>
  <div class="m1_page-container">
    <div class="m1_page-box">
      <ProjectOverview />
      <HorizontalTabSlider />
    </div>
  </div>
</template>

<script>
import ProjectOverview from "./ProjectOverviewSection/ProjectOverview.vue";
import HorizontalTabSlider from "./ProjectOverviewSection/HorizontalTabSlider.vue";
export default {
  components: { ProjectOverview, HorizontalTabSlider },
};
</script>

<style scoped>
.m1_page-container {
  background-color: black;
  height: max-content;
  padding: 128px 0;
}
.m1_page-box {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
