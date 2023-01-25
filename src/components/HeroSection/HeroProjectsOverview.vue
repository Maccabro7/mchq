<template>
  <div class="overview-container">
    <div class="overview-project">
      <div class="overview-circle"></div>
      <div class="overview-texts">
        <div class="overview-texts-title">Title Here</div>
        <div class="overview-texts-desc">Description Here</div>
      </div>
    </div>
    <div class="overview-project">
      <div class="overview-circle"></div>
      <div class="overview-texts">
        <div class="overview-texts-title">Title Here</div>
        <div class="overview-texts-desc">Description Here</div>
      </div>
    </div>
    <div class="overview-project">
      <div class="overview-circle"></div>
      <div class="overview-texts">
        <div class="overview-texts-title">Title Here</div>
        <div class="overview-texts-desc">Description Here</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overview-container {
  max-width: 1100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.overview-project {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.overview-circle {
  width: 75px;
  height: 75px;
  background: white;
  border-radius: 50%;
}
</style>
