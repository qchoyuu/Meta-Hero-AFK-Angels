<template>
  <div class="hello">
    <!-- fifthpage -->
    <div class="fifth-style" id="wiki">
      <div class="fif-bg">
        <div class="fif-title">TOKEN ALLOCATION</div>
        <div class="echarts-content">
          <img class="zuanshi" src="../../../assets/img/pic_token.png" />
        </div>
        <div class="people"></div>
      </div>
      <!-- bottompage -->
      <div class="botoom-style" id="botoom-style">
        <div class="bt-title">STRATEGIC COOPERATION</div>
        <div class="bt-content">
          <img
            src="../../../assets/img/logo_certik@2x.png"
            class="logo-img"
            alt=""
          />
          <img
            src="../../../assets/img/logo_coinmarketcap@2x.png"
            class="logo-img"
            alt=""
          />
          <img
            src="../../../assets/img/logo_binance@2x.png"
            class="logo-img"
            alt=""
          />
        </div>
        <div class="bt-logo">
          <img class="bottom-log" src="../../../assets/img/logoimg@2x.png" />
          <img
            src="../../../assets/img/updlogo.png"
            class="bottom-text"
            alt=""
          />
        </div>
        <div class="bt-num">©IRONFLAG 2022 All right reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "FifthPage",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  height: 95rem;
  width: 100%;
  overflow: hidden;
}
.fifth-style {
  height: 100%;
  width: 100%;
  background-image: url("../../../assets/homebg/huaban5.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.fif-bg {
  background-image: url("../../../assets/img/bg_token allocation@2x.png");
  background-size: cover;
  height: 39rem;
  width: 88rem;
  margin-top: 12rem;
  display: flex;
}
.charts {
  // background-image: url("../../../assets/img/pic_token@2x.png");
  // background-size: cover;
  height: 32rem;
  width: 43rem;
  margin-left: 56.5rem;
  // margin-top: 10rem;
  position: absolute;
}
.people {
  background-image: url("../../../assets/img/pic_token angle@2x.png");
  background-size: cover;
  height: 47rem;
  width: 45rem;
  position: absolute;
  right: 12rem;
  margin-top: -7rem;
}
.fif-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  margin-left: 24rem;
  margin-top: -8rem;
}
.botoom-style {
  color: #fff;
  margin-top: 15rem;
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bt-title {
  font-size: 2rem;
  font-weight: bold;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  text-align: center;
}
.bt-content {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.logo-img {
  height: 2.5rem;
  // margin-left: 6rem;
  margin-top: 3rem;
}
.web-logo {
  height: 4rem;
  width: 8rem;
  margin-top: 2rem;
}
.bt-num {
  font-size: 0.5rem;
  margin-top: 2rem;
  padding-bottom: 2.5rem;
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
  margin-top: 3.5rem;
  animation: fadeInCenter 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bottom-log {
  height: 6rem;
  position: absolute;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 10s;
  -webkit-animation: rotate 10s linear infinite;
  -moz-animation: rotate 10s linear infinite;
  -o-animation: rotate 10s linear infinite;
  animation: rotate 10s linear infinite;
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
  height: 4rem;
  // width: 6.3rem;
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
  -webkit-animation: bounce-down 1.5s linear infinite;
  animation: bounce-down 1.5s linear infinite;
}
.animate-bounce-up2 {
  -webkit-animation: bounce-down 1.5s linear infinite;
  animation: bounce-down 1.7s linear infinite;
}
.animate-bounce-up3 {
  -webkit-animation: bounce-down 1.5s linear infinite;
  animation: bounce-down 1.9s linear infinite;
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
  margin-left: 20rem;
  margin-top: -10rem;
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  animation: fadeInLeft 1.2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.right-data {
  position: absolute;
  text-align: end;
  margin-left: 86rem;
  width: 12rem;
  height: 20rem;
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
  width: 40rem;
  margin-left: -15rem;
}
.bd-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  margin-left: -15rem;
}
.bd-line2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -3rem;
}
.bd-line3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
}
.bd-line4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.5rem;
}
.percent {
  color: #fff;
  font-weight: bold;
}
.per-text {
  color: #e6e6e6;
  font-size: 0.8rem;
}

.zuanshi {
  position: absolute;
  height: 25rem;
  margin-top: 0.5rem;
  margin-left: 56.5rem;
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
