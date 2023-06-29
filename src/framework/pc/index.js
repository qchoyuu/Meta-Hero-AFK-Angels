// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "../../router/pc/index";
import "../../utils/rem.js";
import Router from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Web3 from "../../utils/web3";
import VideoPlayer from "vue-video-player";
import store from "../../store";
import Storage from "vue-ls";
import config from "./defaultSettings";
import Message from "element-ui";
import axios from "axios";
import qs from "qs";
Vue.prototype.$qs = qs;
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(Storage, config.storageOptions);
Vue.use(VideoPlayer);
import "@/assets/style/font.css";
// Vue.prototype.Web3 = Web3
window.Web3 = Web3;
Object.defineProperty(window, "Web3", {
  writable: false
});
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.use(Message);
Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
