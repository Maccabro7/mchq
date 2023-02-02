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
export default {};
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

/* Check App.vue
.profile-text h1 {
  color: v-bind(themeAccent);
}
*/
</style>
