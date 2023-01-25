<template>
  <div class="profile-container">
    <div class="profile-box">
      <div class="profile-avatar"></div>
      <div class="profile-side">
        <div class="profile-text">
          <h1>Hi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aliquam eaque saepe asperiores! Sint ducimus soluta asperiores atque
            sed, nihil itaque ab fugit vel sequi reprehenderit eveniet
            dignissimos doloremque officiis?
          </p>
        </div>
        <div class="profile-actions">
          <router-link to="/about">View More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useThemeStore } from "@/Store/ThemeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const storeTheme = useThemeStore();
    const { themeLow, themeAccent } = storeToRefs(storeTheme);

    return { themeLow, themeAccent };
  },
};
</script>

<style>
.profile-container {
  width: 100%;
  background-color: #000;
  padding: 128px 0;
}

.profile-box {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
}

.profile-avatar {
  min-width: 256px;
  min-height: 256px;
  background-color: bisque;
  border-radius: 50%;
}

.profile-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.profile-text {
  text-align: start;
}

.profile-text h1 {
  color: v-bind(themeAccent);
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
