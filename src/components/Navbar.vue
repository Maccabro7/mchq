<template>
  <nav class="nav-box">
    <div class="nav nav-container">
      <CircleProgressVue />
      <div class="nav nav-items">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link class="nav-hash" :to="{ name: 'home', hash: '#projects' }"
          >Projects</router-link
        >
        <router-link to="about">About</router-link>
      </div>
      <div class="nav nav-contact">
        <router-link to="contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useThemeStore } from "@/Store/ThemeStore";
import CircleProgressVue from "./CircleProgress.vue";
import { storeToRefs } from "pinia";
export default {
  components: { CircleProgressVue },
  setup() {
    const store = useThemeStore();
    const { themeAccent, themeLow } = storeToRefs(store);

    return {
      store,
      themeAccent,
      themeLow,
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  max-width: 1100px;
  padding: 1rem 0;
  margin: 0 auto;
}

.nav-box {
  /* width: 100vw; */

  background: linear-gradient(#000000, #00000060 70%, #00000020 88%, #00000000);
}

.nav-items {
  gap: 3rem;
  padding: 7px 0;
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
  opacity: 100;
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
</style>
