<template>
  <div class="footer-container">
    <div class="footer-bar-top"></div>
    <div class="footer-box">
      <div class="dev">
        <p>Developed with <a href="https://vuejs.org">VueJS</a></p>

        <p>-</p>
        <p>{{ yearNow }}</p>
      </div>
      <div class="name"><p>Vlad Palamariu @Maccabro</p></div>
    </div>
    <div class="footer-bar-bot"></div>
  </div>
</template>

<script>
import { useThemeStore } from "@/Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeAccent, themeLow } = storeToRefs(storeTheme);
    const yearNow = new Date().getFullYear();

    return { yearNow, themeAccent, themeLow };
  },
};
</script>

<style scoped>
.footer-container {
  color: white;
  background-color: #000;
}
.footer-bar-top {
  width: 13%;
  margin: 0 auto;
  height: 2px;
  background-color: v-bind(themeAccent);
  transition: 1s ease-out;
}
.footer-bar-bot {
  width: 100%;
  margin: 0 auto;
  height: 5px;
  background-color: v-bind(themeAccent);
  transition: 1s ease-out;
}

.footer-box {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100vw;
  margin: 0 auto;
  align-items: center;
}

.dev {
  display: flex;
  gap: 16px;
  align-items: center;
}

.dev a {
  text-decoration: none;
  color: #41b883;
  font-weight: 600;
}

/* .dev a:hover {

} */
</style>
