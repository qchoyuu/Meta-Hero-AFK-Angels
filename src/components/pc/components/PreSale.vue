<template>
  <div class="hello">
    <!-- homepageinfo -->
    <div class="top-style" id="home">
      <div class="bg-style">
        <div class="top-nav"></div>
        <div class="tb-style">
          <div>
            <img
              src="../../../assets/time/pic_ino_all.png"
              alt=""
              class="tb-imss"
              @click="Heroentrance()"
            />
            <p class="p-tex" @click="Equipmententrance()">
              SIT TIGHT FOR THE LAUNCH ON JUNE 1ST!
            </p>

            <div class="Boxtime">
              <ul class="box-ul">
                <li class="bor-box" id="dayy">{{ timeS.dayy }}</li>
                <li class="bor-box" id="hours">{{ timeS.hours }}</li>
                <li class="bor-box" id="minutes">{{ timeS.minutes }}</li>
                <li class="bor-box" id="seconds">{{ timeS.seconds }}</li>
              </ul>
              <p class="bor2-box , bor2-box1">DAYS</p>
              <p class="bor2-box , bor2-box2">HOURS</p>
              <p class="bor2-box , bor2-box3">MINUTES</p>
              <p class="bor2-box , bor2-box4">SECONDS</p>
            </div>
          </div>
        </div>
      </div>
      <video-player
        class="video-player vjs-custom-skin vd-play"
        ref="videoPlayer"
        :playsinline="true"
      ></video-player>
    </div>
  </div>
</template>

<script>
import diftime from "../../../utils/difftime";
export default {
  name: "Time",
  data() {
    return {
      cltime: "",
      timeS: {
        dayy: "",
        hours: "",
        minutes: "",
        seconds: "",
      },
    };
  },
  mounted() {
    this.timefn();
    setInterval(() => {
      this.timefn();
    }, 1000);
  },
  methods: {
    Heroentrance() {
      this.$router.push("/ino");
    },
    Equipmententrance() {
      this.$router.push({ path: "/Equipmentblindbox" });
    },
    timefn() {
      let time = new Date(2022, 5, 1, 0, 0, 0);
      var time2 = new Date();
      var diff = diftime(time, time2);

      this.timeS.dayy = diff.day;
      this.timeS.hours = diff.hours;
      this.timeS.minutes = diff.minutes;
      this.timeS.seconds = diff.seconds;

      if (diff.day < 10) {
        this.timeS.dayy = "0" + diff.day;
      }
      if (diff.hours < 10) {
        this.timeS.hours = "0" + diff.hours;
      }
      if (diff.minutes < 10) {
        this.timeS.minutes = "0" + diff.minutes;
      }
      if (diff.seconds < 10) {
        this.timeS.seconds = "0" + diff.seconds;
      }
    },
  },
};
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}
.top-style {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.bg-style {
  width: 100%;
  position: absolute;
  z-index: 33;
  background: rgba(0, 0, 0, 0);
}
.vd-play {
  position: relative;
}
.top-style /deep/ .video-js {
  height: 67rem;
  margin-top: -3.5rem;
  background-color: #000000;
}
.top-style /deep/ .vjs-custom-skin > .video-js .vjs-control {
  display: none;
}
.top-style /deep/ .vjs-has-started .vjs-control-bar {
  display: none;
}
.top-style /deep/.vjs-big-play-button {
  display: none;
}

@keyframes changeBiger {
  0% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

.tb-imss {
  width: 52.375rem;
  height: 6.5rem;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  position: absolute;
  top: 40rem;
  right: 31rem;
}

.tb-style {
  margin-top: 3.5rem;
  width: 100%;
  height: 64rem;
  background-image: url("../../../assets/time/bg_ino_countdown.jpg");
  vertical-align: middle;
  background-size: cover;
  position: absolute;
  z-index: 3;
  position: relative;
}
.wap-nav {
  z-index: 9999;
  color: #fff;
  height: 10rem;
  position: absolute;
  right: 0rem;
  margin-top: 2rem;
}
.center-content {
  position: absolute;
  background-image: url("../../../assets/img/SLOGAN@2x.png");
  background-size: cover;
  width: 42.5rem;
  height: 7.2rem;
  margin-left: 7rem;
  margin-top: 21rem;
  animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.right-link {
  background-size: cover;
  height: 16.3rem;
  width: 5.2rem;
  position: fixed;
  right: 0;
  margin-top: 22.1rem;
  z-index: 999;
}

.link1 {
  height: 2.44rem;
  margin-left: 1rem;
  transition-duration: 500ms;
}
.link2 {
  height: 2.44rem;
  margin-left: 1rem;
  transition-duration: 500ms;
}
.link3 {
  height: 2.44rem;
  margin-left: 1rem;
  transition-duration: 500ms;
}
.link4 {
  height: 2.44rem;
  margin-left: 1rem;
  transition-duration: 500ms;
}
.links {
  height: 2.5rem;
  margin-top: 0.75rem;
}

.link1:hover {
  margin-top: -5px;
  transition-duration: 500ms;
}
.link2:hover {
  margin-top: -5px;
  transition-duration: 500ms;
}
.link3:hover {
  margin-top: -5px;
  transition-duration: 500ms;
}
.link4:hover {
  margin-top: -5px;
  transition-duration: 500ms;
}
.right-content {
  height: 14rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
}
.bottom-style {
  width: 100%;
  margin-top: 45rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 999;
}
.left-bt {
  background-image: url("../../../assets/img/btn_download@2x.png");
  background-size: cover;
  height: 10.3rem;
  width: 20rem;
  cursor: pointer;
  z-index: 999;
  transition-duration: 300ms;
}
.left-bt:hover {
  margin-top: -5px;
  transition-duration: 500ms;
  background-image: url("../../../assets/img/btn_play2@2x.png");
  width: 20rem;
  height: 10rem;
}
.right-bt:hover {
  margin-top: -5px;
  width: 20rem;
  height: 10rem;
  transition-duration: 500ms;
  background-image: url("../../../assets/img/btn_buy2@2x.png");
}
.right-bt {
  background-image: url("../../../assets/img/btn_buy tokens@2x.png");
  background-size: cover;
  height: 10.3rem;
  width: 20rem;
  cursor: pointer;
  z-index: 999;
  transition-duration: 300ms;
}
.top-nav {
  display: flex;
  z-index: 99999;
  position: absolute;
  width: 100%;
  margin-top: 3rem;
}
.topleft-log {
  background-size: cover;
  width: 9rem;
  height: 9rem;
  margin-left: 5rem;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 10s;
  -webkit-animation: rotate 10s linear infinite;
  -moz-animation: rotate 10s linear infinite;
  -o-animation: rotate 10s linear infinite;
  animation: rotate 10s linear infinite;
}
.logo-text {
  position: absolute;
  height: 4rem;
  width: 12rem;
  margin-top: 2.5rem;
  margin-left: 3.5rem;
}

.p-tex {
  width: 35.875rem;
  height: 1.0625rem;
  font-size: 14px;
  opacity: 0.89;
  font-family: Arial-Bold, Arial;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  left: 37%;
  top: 47.5rem;
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
//动画效果
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
.bt1 {
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
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
    transform: translate3d(1px, 0, 0);
  }
  90% {
    transform: translate3d(1px, 0, 0);
  }
  100% {
    opacity: 1;
    z-index: 999;
  }
}
.amt-peple {
  height: 66rem;
  width: 66rem;
  position: absolute;
  margin-left: -5rem;
  margin-top: 3rem;
  transform: rotate(-10deg);
}

.box-ul {
  display: flex;
}

.bor-box {
  width: 4.375rem;
  height: 4.56rem;
  background: #000000;
  border-radius: 6px 6px 6px 6px;
  // opacity: 0.31;
  border: 1px solid rgba(127, 255, 216, 0.24);

  margin-left: 3rem;
  color: rgba(255, 255, 255, 0.89);
  background: rgba(0, 0, 0, 0.24);
  list-style: none;
  line-height: 4.56rem;
  font-family: Arial-Bold, Arial;
  font-weight: bold;
  font-size: 18px;
}

.box2-ul {
  display: flex;
  margin-left: 6rem;
}

.bor2-box {
  width: 3.68rem;
  height: 0.875rem;
  font-size: 12px;
  font-family: Arial-Bold, Arial;
  font-weight: bold;
  color: #ffffff;
  line-height: 0px;
  list-style-type: none;
  opacity: 0.8;
}

.Boxtime {
  position: absolute;
  bottom: 2.6rem;
  left: 42.5rem;
}

.bor2-box {
  display: inline-block;
}

.bor2-box1 {
  position: relative;
  bottom: 0.8rem;
  left: -2rem;
}

.bor2-box2 {
  position: relative;
  bottom: 0.8rem;
  left: 1.5rem;
}
.bor2-box3 {
  position: relative;
  bottom: 0.8rem;
  left: 5rem;
}
.bor2-box4 {
  position: relative;
  bottom: 0.8rem;
  left: 8.1rem;
}
</style>
