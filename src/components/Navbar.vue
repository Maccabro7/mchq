<template>
  <nav class="m1_nav-box">
    <div class="m1_nav m1_nav-container">
      <CircleProgressVue />
      <div class="m1_nav m1_nav-items">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link
          class="m1_nav-hash"
          :to="{ name: 'home', hash: '#projects' }"
          >Projects</router-link
        >
        <router-link to="about-me">About</router-link>
      </div>
      <div class="m1_nav m1_nav-contact">
        <router-link to="contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import CircleProgressVue from "./CircleProgress.vue";

export default {
  components: { CircleProgressVue },
};
</script>

<style>
/* Links / Anchor tags are in App.vue */

.m1_nav {
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
}

.m1_nav-container {
  max-width: 1100px;
  padding: 1rem 0;
  margin: 0 auto;
}

.m1_nav-box {
  background: linear-gradient(#000000, #00000060 70%, #00000020 88%, #00000000);
}

.m1_nav-items {
  gap: 3rem;
  padding: 7px 0;
}

/* Links / Anchor tags are in App.vue */
</style>
