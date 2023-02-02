<template>
  <div class="preload-fonts">
    <p style="font-family: 'Source Code Pro'">Hi!</p>
    <p style="font-family: 'Yeon Sung'">How you doing?</p>
    <p style="font-family: 'Irish Grover'">You</p>
    <p style="font-family: 'Josefin-Sans'">Have</p>
    <p style="font-family: 'Orbitron'">a</p>
    <p style="font-family: 'Roboto'">Great</p>
    <p style="font-family: 'Unbounded'">Day!</p>
  </div>
  <div class="page">
    <router-view />
  </div>
</template>

<script>
// import "@fontsource/metropolis";
import themeControl from "./composables/ThemeController";
import { useThemeStore } from "./Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeTime, themeEndTime, themeLow, themeAccent } =
      storeToRefs(storeTheme);

    // Select First Theme
    themeControl();

    // Define Timer
    // Max Time is defined on DataStore.js: themeEndTime

    const timer = () => {
      themeTime.value++;
      if (themeTime.value < themeEndTime.value) {
        setTimeout(timer, 1000);
      }
      if (themeTime.value == themeEndTime.value) {
        themeTime.value = -1;
        clearTimeout(timer);
        themeControl();
        timer();
      }
    };
    timer();

    return {
      timer,
      themeTime,
      themeEndTime,
      themeLow,
      themeAccent,
    };
  },
};
</script>
<style global>
/* ************************************************************************************************ */
/* Design Presets ************************ Design Presets ************************ Design Presets * */
/* ************************************************************************************************ */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  transition: 1s;
  color: v-bind(themeAccent);
}

/* ************************ */
/* Hide Preloaded Fonts */
/* ************************ */

.preload-fonts {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

/* .page {
  width: 100%;
} */

/* ************************************************************************************************ */
/* <a>links</a> ************************ <a> ************************ <a> ************************ */
/* ************************************************************************************************ */

a {
  text-decoration: none;
  position: relative;
  color: rgb(217, 217, 217);
  font-weight: 500;
  font-size: 1rem;
  transition: 1s;
}

a:hover {
  color: v-bind(themeAccent);
}

a::after {
  text-decoration: none;
  content: "";
  width: 0;
  background: v-bind(themeAccent) !important;
  position: absolute;
  height: 2px;
  bottom: -3px;
  left: 50%;
  transition: 0.5s ease-out;
}

a:hover::after {
  width: 130%;
  left: -15%;
  box-shadow: 0 0 16px 8px v-bind(themeLow);
  opacity: 100;
}

a.router-link-exact-active {
  color: #fff;
  font-weight: 600;
}

a.router-link-exact-active::after {
  content: "";
  width: 70%;
  background: v-bind(themeAccent);
  position: absolute;
  height: 2px;
  bottom: -3px;
  left: 18%;
}

.nav-hash {
  color: rgb(217, 217, 217) !important;
  font-weight: 500 !important;
}

.nav-hash::after {
  text-decoration: none;
  content: "";
  width: 0;
  background: v-bind(themeAccent);
  position: absolute;
  height: 2px;
  bottom: -3px;
  left: 50%;
  transition: 0.5s ease-out;
  opacity: 0 !important;
}

.nav-hash:hover::after {
  opacity: 100 !important;
  width: 130%;
  left: -15%;
  box-shadow: 0 0 16px 8px v-bind(themeLow);
}

#footer-vue:hover {
  text-decoration: none;
  color: v-bind(themeAccent) !important;
  font-weight: 600;
  box-shadow: 0 0 16px 8px v-bind(themeLow);
}

/* ************************************************************************************************ */
/* ProjectOverview.vue ************* ProjectOverview.vue ************* ProjectOverview.vue ********* */
/* ProjectOverview.vue ************* ProjectOverview.vue ************* ProjectOverview.vue ********* */
/* ************************************************************************************************ */

.arrow {
  color: v-bind(themeLow);
  background-color: v-bind(themeLow);
}

.arrow:hover {
  color: v-bind(themeAccent);
  box-shadow: 0 0 16px 8px v-bind(themeLow);
}

.btn-special {
  background-color: v-bind(themeLow);
}

.btn-special:hover {
  background-color: v-bind(themeAccent);
  box-shadow: 0 0 16px 8px v-bind(themeLow);
  color: #fff;
}

/* ************************ */
/* HorizontalTabSlider.vue */
/* ************************ */

.horizontal-tab {
  background-color: v-bind(themeLow);
}

.horizontal-tab:hover {
  box-shadow: 0 0 16px 4px v-bind(themeLow);
}
.horizontalTabColor {
  background-color: v-bind(themeAccent);
}

/* ************************************************************************************************ */
/* MyProfile.vue ************************ MyProfile.vue ************************ MyProfile.vue **** */
/* MyProfile.vue ************************ MyProfile.vue ************************ MyProfile.vue **** */
/* ************************************************************************************************ */

.profile-text h1 {
  color: v-bind(themeAccent);
}

/* ************************************************************************************************ */
/* Footer.vue ************************ Footer.vue ************************ Footer.vue ************* */
/* Footer.vue ************************ Footer.vue ************************ Footer.vue ************* */
/* ************************************************************************************************ */

.footer-bar-top {
  background-color: v-bind(themeAccent);
}
.footer-bar-bot {
  background-color: v-bind(themeAccent);
}

/* ************************************************************************************************ */
/* Footer.vue ************************ Footer ************************ Footer ************************ */
/* ************************************************************************************************ */
</style>
