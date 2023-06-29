<template>
  <div class="hellow">
    <div ref="cardShow" id="carouse" class="carouse">
      <FirstPage
        id="home"
        :changeLink="changeLinkHandle"
      />
      <SecondPage
        id="game"
        style="margin-top: -0.5rem"
        :sec="sec"
      />
      <ThirdPage id="marketsplace"  />
      <FourthPage id="mining"  />
      <FifthPage id="wiki" ref="childfive" />
    </div>
  </div>
</template>

<script>
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";
import ThirdPage from "./components/ThirdPage.vue";
import FourthPage from "./components/FourthPage.vue";
import FifthPage from "./components/FifthPage.vue";

import bus from "../../utils/bus";
export default {
  name: "Home",
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
  },
  data() {
    return {
      oldScrollTop: 0,
      navState: 0,
      navList: ["home", "game", "marketsplace", "mining", "wiki"],
      listen: false,
      sec: true,
      thr: false,
      four: false,
      fif: false,
      oldTime: 0,
      newTime: 0,
      // wh:document.body.clientWidth,
      // vh:document.body.clientHeight
    };
  },
  mounted() {
    // 监听页面滚动事件
    this.onResize();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    changeLinkHandle(anchorName) {
      if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    handleScroll() {
      let vh = document.documentElement.clientHeight;
      let wh = document.documentElement.clientWidth;
      let bl = vh / wh;
      bus.$emit("ismargin", bl);
    },
    // 滚动条回到顶部
    backTop() {
      if (this.scrollTop > 10) {
        document.documentElement.scrollTop = 0;
      }
    },
    onResize() {
      // let vh = document.documentElement.clientHeight;
      // let wh = document.documentElement.clientWidth;
      // if (vh / wh > 0.487) {
      //   bus.$emit("ismargin", true);
      // }
      // if (vh / wh > 1.041) {
      //   this.thr = true;
      // }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.hellow {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
}
.carouse {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
