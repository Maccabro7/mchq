import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/styles/global.css";
import "./assets/styles/themeSpecific.css";

import "@fontsource/josefin-sans";
import "@fontsource/unbounded";
import "@fontsource/yeon-sung";
import "@fontsource/roboto";
import "@fontsource/irish-grover";
import "@fontsource/orbitron";
import "@fontsource/source-code-pro";

const store = createPinia();

createApp(App).use(store).use(router).mount("#app");
