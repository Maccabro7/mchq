<template>
  <div class="defaults" :class="theme">Testing</div>
  <button @click="change('red')">Change to Red</button>
  <button @click="change('green')">Change to Green</button>
  <button @click="debugTheme">Debug THeme</button>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let theme = ref("");

    const change = (color) => {
      if (color == "red") {
        theme.value = "red";
      } else {
        theme.value = "green";
      }
    };

    const debugTheme = () => {
      console.log(theme.value);
    };
    return { theme, change, debugTheme };
  },
};
</script>

<style>
.defaults {
  width: 100%;
  height: 80%;
  background-color: aqua;
  transition: 1s;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
