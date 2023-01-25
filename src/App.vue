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
import themeControl from "@/composables/ThemeController";
import { useThemeStore } from "./Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeTime, themeEndTime, themeLow, themeAccent } =
      storeToRefs(storeTheme);

    // Select First Theme
    themeControl();

    // Initialise Timer
    // Max Time is defined on Store: themeEndTime

    const timer = () => {
      themeTime.value++;
      if (themeTime.value < themeEndTime.value) {
        // console.log(themeTime.value);
        setTimeout(timer, 1000);
      }
      if (themeTime.value == themeEndTime.value) {
        themeTime.value = -1;
        clearTimeout(timer);
        themeControl();
        timer();
      }
    };

    // Start timer - once
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.preload-fonts {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

.page {
  width: 100%;
  /* background-color: #42b983; */
}

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
  background: v-bind(themeAccent);
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
}

nav a.router-link-exact-active {
  color: #fff;
  font-weight: 600;
}

nav a.router-link-exact-active::after {
  content: "";
  width: 70%;
  background: v-bind(themeAccent);
  position: absolute;
  height: 2px;
  bottom: -3px;
  left: 18%;
}
</style>
