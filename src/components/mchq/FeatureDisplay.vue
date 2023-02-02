<template>
  <div class="feature-container">
    <div class="image-placer" :class="themeFeatureItem"></div>
  </div>
</template>

<script>
import { useThemeStore } from "../../Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeFeatureItem } = storeToRefs(storeTheme);

    return { themeFeatureItem };
  },
};
</script>

<style>
.feature-container {
  background-color: #000;
  padding-bottom: 128px;
  width: 100%;
  padding: 128px 0;
}

.image-placer {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  transition: 0.7s ease-in;
  width: 700px;
  height: 700px;
}
</style>
