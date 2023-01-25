<template>
  <div class="title-container">
    <p class="title-sub">{{ themeSubTitle.toLowerCase() }}</p>
    <p class="title-box" :class="themeFeature">
      {{ theme.toUpperCase() }}
    </p>
  </div>
</template>

<script>
import { useThemeStore } from "@/Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeFont, theme, themeSubTitle, themeFeature } =
      storeToRefs(storeTheme);

    const themeFea2ture = "";

    return { themeFont, theme, themeSubTitle, themeFeature };
  },
};
</script>

<style>
/* .title-container {
  margin-bottom: 275px;
} */

.title-container {
  font-family: v-bind(themeFont);
  /* transition: 1s ease-out; */
}

.title-sub {
  color: #fff;
  font-size: 1rem;
}

.default-feature {
  padding: 16px 32px;
  font-size: 6rem;
  background-color: #00000050;
  width: max-content;
  margin: 0 auto;
  border-radius: 1px;
  backdrop-filter: blur(1px);
  color: #fff;
  /* transition: 1s ease-out; */
}

.vuejs-feature {
  padding: 32px 64px;
  font-size: 6rem;
  /* background-color: #00000050; */
  width: max-content;
  margin: 0 auto;
  border-radius: 1px;
  /* backdrop-filter: blur(1px); */
  background-image: url("@/assets/Features/Vue.js_Logo_2.svg");
  background-repeat: no-repeat;
  background-position: center;

  color: #fff;
  /* transition: 1s ease-out; */
}

.japan-feature {
  display: flex;
  align-items: center;
  /* text-align: center; */
  justify-content: center;
  /* padding: 84px 84px; */
  font-size: 6rem;
  background-color: #d7141495;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  border-radius: 50%;
  backdrop-filter: blur(1px);
  color: #fff;
  /* transition: 1s ease-out; */
}
</style>

<!-- 

Josefin-Sans, sans-serif
Unbounded, cursive
Yeon Sung, cursive


 -->
