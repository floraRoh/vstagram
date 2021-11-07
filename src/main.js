import { createApp } from "vue";
import App from "./App.vue";
import store from "./assets/store";
// import mitt from "mitt";
// let emitter = mitt();
let app = createApp(App);
// app.config.globalProperties.emitter = emitter;

app.use(store).mount("#app");
