<template>
  <div class="horizontal-tab-container">
    <div
      class="horizontal-tab"
      @click="handleTabClick(1)"
      :class="{ horizontalTabColor: storeData.presentTab == 1 }"
    ></div>
    <div
      class="horizontal-tab"
      @click="handleTabClick(2)"
      :class="{ horizontalTabColor: storeData.presentTab == 2 }"
    ></div>
    <div
      class="horizontal-tab"
      @click="handleTabClick(3)"
      :class="{ horizontalTabColor: storeData.presentTab == 3 }"
    ></div>
  </div>
</template>

<script>
import { useThemeStore } from "../../Store/ThemeStore";
import { storeToRefs } from "pinia";
import { useDataStore } from "../../Store/DataStore";
export default {
  setup() {
    const storeData = useDataStore();
    const storeTheme = useThemeStore();
    const { themeAccent, themeLow } = storeToRefs(storeTheme);

    // const presentTab = ref(1);

    const handleTabClick = (tab) => {
      storeData.presentTab = tab;
    };
    return { handleTabClick, themeAccent, themeLow, storeData };
  },
};
</script>

<style>
.horizontal-tab-container {
  display: flex;
}

.horizontal-tab {
  width: calc(100% / 3);
  height: 8px;
  background-color: v-bind(themeLow);
  transition: 0.5s ease-out;
  cursor: pointer;
}

.horizontal-tab:hover {
  box-shadow: 0 0 16px 4px v-bind(themeLow);
  /* border-radius: 60px; */
}

.horizontal-tab:first-child {
  border-radius: 7px 0 0 7px;
}
.horizontal-tab:last-child {
  border-radius: 0 7px 7px 0;
}

.horizontalTabColor {
  background-color: v-bind(themeAccent);
}
</style>
