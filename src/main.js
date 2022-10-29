import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

import "./assets/style/main.css";

app.use(store);

app.mount("#app");
