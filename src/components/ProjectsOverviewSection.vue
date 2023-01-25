<template>
  <div class="page-container">
    <div class="page-box">
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
.page-container {
  background-color: black;
  height: max-content;
  padding: 128px 0;
}
.page-box {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
