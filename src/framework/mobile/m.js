// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import router from "../../router/mobile/index";
import "../../utils/rem.js";
// import Web3 from "web3";
import VideoPlayer from "vue-video-player";
import Clipboard from "v-clipboard";
import Web3 from "../../utils/web3";

window.Web3 = Web3;
Object.defineProperty(window, "Web3", {
  writable: false
});

require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);
Vue.prototype.Web3 = Web3;
Vue.config.productionTip = false;
Vue.use(Clipboard);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // router,
  template: "<App/>",
  components: { App }
});
