<template>
  <div id="projects" class="overview-container">
    <div class="arrow" @click="handleArrow('left')">
      <span class="material-symbols-outlined"> chevron_left </span>
    </div>
    <div class="overview-image"></div>
    <div class="overview-texts">
      <h1>Project Title</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        labore harum debitis, rem itaque alias porro neque quos mollitia aut
        eos, laboriosam vel commodi quis placeat consequatur libero obcaecati
        ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        dolores dolorum illo, nostrum ex amet eligendi, voluptatum ut facere
        iure minus pariatur doloribus ab accusamus tempore ipsum. Omnis, debitis
        eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        nemo labore optio esse unde quis? Eos ut iusto officia impedit,
        laboriosam deleniti ullam est architecto nulla qui consequatur, error
        atque.
      </p>
      <div class="overview-buttons">
        <a href="#" class="btn-special">View Live</a>
        <a href="#">View on Github</a>
      </div>
    </div>
    <div class="arrow" @click="handleArrow('right')">
      <span class="material-symbols-outlined"> chevron_right </span>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "../../Store/DataStore";

export default {
  setup() {
    const storeData = useDataStore();

    const handleArrow = (sign) => {
      if (sign === "left") {
        storeData.setPresentTabLeft();
      }
      if (sign === "right") {
        storeData.setPresentTabRight();
      }
    };

    return { handleArrow, storeData };
  },
};
</script>

<style scoped>
.overview-container {
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
}

.overview-image {
  min-width: 512px;
  height: 512px;
  background-image: url("https://cdn.dribbble.com/users/1130556/screenshots/4739032/vendor-incoice.png?compress=1&resize=800x600&vertical=top");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.overview-texts {
  padding: 0 32px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.overview-buttons {
  display: flex;
  gap: 64px;
  align-items: center;
}

.arrow {
  display: flex;
  /* color: v-bind(themeLow); */
  transition: 0.5s ease-out;
  align-self: center;
  height: 100%;
  justify-content: center;
  border-radius: 3px;
  /* padding: 12px; */
  margin: 0 12px;
  cursor: pointer;
  /* background-color: v-bind(themeLow); */
}

/* .arrow:hover {
  color: v-bind(themeAccent);
  box-shadow: 0 0 16px 8px v-bind(themeLow);
} */

.arrow span {
  font-size: 48px;
  font-weight: 700;
}

.btn-special {
  /* background-color: v-bind(themeLow); */
  padding: 12px 24px;
  transition: 0.5s ease-out;
}

/* .btn-special:hover {
  background-color: v-bind(themeAccent);
  box-shadow: 0 0 16px 8px v-bind(themeLow);
  color: #fff;
} */

.btn-special::after {
  display: none;
}
</style>
