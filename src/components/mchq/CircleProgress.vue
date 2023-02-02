<template>
  <div class="box2">
    <circle-progress
      :percent="+themeTime * 10"
      :empty-color="themeLow"
      :fill-color="themeAccent"
      :size="+24"
      :border-width="+5"
      :border-bg-width="+5"
      class="circle"
      :transition="+800"
    />
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

import { useThemeStore } from "../../Store/ThemeStore";
import { storeToRefs } from "pinia";

export default {
  components: { CircleProgress },
  setup() {
    const store = useThemeStore();
    const { themeAccent, themeLow, themeTime } = storeToRefs(store);

    return { themeTime, themeAccent, themeLow };
  },
};
</script>

<style>
.vue3-circular-progressbar {
  transition: 1s;
}

.circle {
  transition: 1s;
}
</style>
