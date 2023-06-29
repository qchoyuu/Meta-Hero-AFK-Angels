<template>
  <div class="hellofif" ref="hellofif">
    <!-- fifthpage -->
    <div class="fifth-style" id="wiki">
      <div class="fif-bg">
        <div class="fif-title">TOKEN ALLOCATION</div>
        <div class="echarts-content">
          <div v-if="isShow" class="left-data">
            <div class="bd-line1">
              <div class="percent">15%</div>
              <div class="per-text">Ecosystem Fund</div>
              <div class="line"></div>
            </div>
            <div class="bd-line">
              <div class="percent">5%</div>
              <div class="per-text">NFT Mining</div>
              <div class="line"></div>
            </div>
            <div class="bd-line">
              <div class="percent">10%</div>
              <div class="per-text">Private Sale</div>
              <div class="line"></div>
            </div>
            <div class="bd-line">
              <div class="percent">25%</div>
              <div class="per-text">Play</div>
              <div class="line"></div>
            </div>
          </div>
          <img class="zuanshi" src="../../../assets/img/zhuanshibj.jpg" />
          <div class="charts" id="main"></div>
          <div v-if="isShow" class="right-data">
            <div class="bd-line2">
              <div class="percent">20%</div>
              <div class="per-text">Team</div>
              <div class="lines"></div>
            </div>
            <div class="bd-line3">
              <div class="percent">10%</div>
              <div class="per-text">Marketing</div>
              <div class="lines"></div>
            </div>
            <div class="bd-line4">
              <div class="percent">15%</div>
              <div class="per-text">Partners</div>
              <div class="lines"></div>
            </div>
          </div>
        </div>
        <div class="people"></div>
      </div>
      <!-- bottompage -->
      <div class="botoom-style" ref="botoomstyle" id="botoom-style">
        <div v-if="isShowBottom" class="bt-title">STRATEGIC COOPERATION</div>
        <div v-if="isShowBottom" class="bt-content">
          <img
            src="../../../assets/img/logo_certik@2x.png"
            class="logo-img animate-bounce-up1"
            alt=""
          />
          <img
            src="../../../assets/img/logo_coinmarketcap@2x.png"
            class="logo-img animate-bounce-up2"
            alt=""
          />
          <img
            src="../../../assets/img/logo_binance@2x.png"
            class="logo-img animate-bounce-up3"
            alt=""
          />
        </div>
        <div v-if="isShowBottom" class="bt-logo">
          <img class="bottom-log" src="../../../assets/img/logoimg@2x.png" />
          <img
            src="../../../assets/img/updlogo.png"
            class="bottom-text"
            alt=""
          />
        </div>
        <div v-if="isShowBottom" class="bt-num">
          <img src="../../../assets/img/F-logo.png" class="bottom-bq" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/bus";
import * as echarts from "echarts";
export default {
  name: "FifthPage",
  data() {
    return {
      isShow: true,
      isShowBottom: false,
      exit: false,
    };
  },
  props: {
    fifthState: {
      type: Number,
      require: true,
      default: null,
    },
  },
  mounted() {
    bus.$on("ismargin", (e) => {
      if (e > 0.2 && e < 0.25) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 0) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else if (e > 0.25 && e < 0.3) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 50) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else if (e > 0.3 && e < 0.35) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 100) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else if (e > 0.35 && e < 0.4) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 220) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else if (e > 0.4 && e < 0.45) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 320) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else if (e > 0.45 && e < 0.5) {
        if (this.$refs.hellofif.getBoundingClientRect().top < 400) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      } else {
        if (this.$refs.hellofif.getBoundingClientRect().top < 450) {
          this.isShow = true;
          setTimeout(() => {
            if (this.exit) {
              return;
            }
            this.getecharts();
          }, 300);
        }
      }

      // if (this.$refs.botoomstyle.getBoundingClientRect().top < 620) {
      //   this.isShowBottom = true;
      // }
      this.isShowBottom = true;
    });
  },
  methods: {
    getecharts() {
      this.exit = true;
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      option = {
        // tooltip: {
        //   trigger: "item",
        // },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["50%", "82%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 20,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 1, color: "#000" },
                      { offset: 0, color: "#47D7CE" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 10,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 1, color: "#000" },
                      { offset: 0, color: "#1CD347" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 15,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 1, color: "#000" },
                      { offset: 0, color: "#FFD223" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 25,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#000" },
                      { offset: 1, color: "#FF8224" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 10,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 1, color: "red" },
                      { offset: 0, color: "#000" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 5,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#9735ED" },
                      { offset: 1, color: "#000" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
              {
                value: 15,
                name: "Search Engine",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 1, color: "#000" },
                      { offset: 0, color: "#5E98E1" },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    toBottom() {
      let anchorElement = document.getElementById("botoom-style");
      anchorElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hellofif {
  height: 100.625rem;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.fifth-style {
  height: 100.625rem;
  width: 100%;
  background-image: url("../../../assets/homebg/huaban5.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
// .bg5{
//   height: 97.625rem;
//   position: absolute;
// }
.fif-bg {
  background-image: url("../../../assets/img/bg_token allocation@2x.png");
  background-size: cover;
  height: 35rem;
  width: 79rem;
  margin-top: 13.5rem;
  margin-left: 1rem;
  display: flex;
}
.charts {
  // background-image: url("../../../assets/img/pic_token@2x.png");
  // background-size: cover;
  height: 22rem;
  width: 43rem;
  margin-left: 49rem;
  margin-top: 0.5rem;
  position: absolute;
  z-index: 999;
}
.people {
  background-image: url("../../../assets/img/pic_token angle@2x.png");
  background-size: cover;
  height: 40rem;
  width: 40rem;
  position: absolute;
  right: 12rem;
  margin-top: -5rem;
  margin-right: 4.5rem;
}
.fif-title {
  font-family: "osb";
  color: #fff;
  font-size: 1.875rem;
  font-weight: bold;
  position: absolute;
  padding-left: 21rem;
  padding-top: 4rem;
}
.botoom-style {
  color: #fff;
  margin-top: 10rem;
  height: 20rem;
}
.bt-title {
  font-family: "osb";
  font-size: 1.875rem;
  font-weight: bold;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  padding-top: 8rem;
}
.bt-content {
  width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-top: 4rem;
}
.logo-img {
  // width: 12rem;
  // margin-left: 6rem;
  margin-top: 3rem;
}
.bt-num {
  font-size: 0.5rem;
  margin-top: 3rem;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
//动画效果
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    opacity: 1;
    z-index: 999;
  }
}
.bt-logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bottom-log {
  height: 7rem;
  position: absolute;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 10s;
  -webkit-animation: rotate 10s linear infinite;
  -moz-animation: rotate 10s linear infinite;
  -o-animation: rotate 10s linear infinite;
  animation: rotate 10s linear infinite;
  z-index: 2;
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(359deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.bottom-text {
  height: 3.8rem;
  z-index: 3;
  // width: 6.3rem;
}
.bottom-bq {
  height: 2rem;
  z-index: 3;
}
@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-3px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(3px);
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-3px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(3px);
  }
}

.animate-bounce-up1 {
  height: 3rem;
}
.animate-bounce-up2 {
  height: 2.375rem;
}
.animate-bounce-up3 {
  height: 3.5625rem;
}
.echarts-content {
  display: flex;
  align-items: center;
  text-align: start;
  color: #fff;
  justify-content: center;
}
.left-data {
  position: absolute;
  margin-left: 24rem;
  width: 12rem;
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15rem;
  animation: fadeInLeft 1.2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.right-data {
  position: absolute;
  text-align: end;
  margin-left: 76rem;
  width: 12rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeInRight 1.2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.line {
  background-image: linear-gradient(to right, #999999, #000);
  height: 1px;
}
.lines {
  background-image: linear-gradient(to left, #999999, #000);
  height: 1px;
}
.bd-line1 {
  margin-top: -2.5rem;
}
.bd-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bd-line2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -3.5rem;
}
.bd-line3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
}
.bd-line4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.5rem;
}
.percent {
  font-family: "avpro";
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
}
.per-text {
  font-family: "avbook";
  padding-top: 1px;
  padding-bottom: 1px;
  color: #e6e6e6;
  font-size: 1rem;
}

.zuanshi {
  position: absolute;
  height: 12rem;
  margin-top: 0.5rem;
  margin-left: 49rem;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInCenter {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
