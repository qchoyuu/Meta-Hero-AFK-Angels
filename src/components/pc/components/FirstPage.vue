<template>
  <div class="hello">
    <!-- homepageinfo -->
    <div class="top-style" id="home">
      <div class="bg-style">
        <div class="tb-style"></div>
        <div class="center-content" v-if="showFirst"></div>
        <!-- <img :src="topUrl[firstState]" class="amt-peple" alt="" /> -->
        <div class="right-link">
          <div class="right-content">
            <div class="links">
              <img src="../../../assets/img/TELEGRAM@2x.png" class="link1" />
            </div>
            <div class="links">
              <img src="../../../assets/img/TWITTER@2x.png" class="link2" />
            </div>
            <div class="links">
              <img src="../../../assets/img/DISCODE@2x.png" class="link3" />
            </div>
            <div class="links">
              <img src="../../../assets/img/M@2x.png" class="link4" />
            </div>
          </div>
        </div>
        <div class="bottom-style">
          <div class="left-bt"></div>
          <div class="right-bt" @click="play()"></div>
        </div>
      </div>
      <video-player
        class="video-player vjs-custom-skin vd-play"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require("../../../assets/box/video_banner.mp4"), //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false, //当前时间和持续时间的分隔符
          durationDisplay: false, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: false, //全屏按钮
        },
      },
      data: {
        id: 1,
        name: "NATASHA",
        url: require("../../../assets/img/pic_token angle@2x.png"),
        HP: "644",
        PA: "89",
        PD: "61",
        MA: "6",
        MD: "41",
        Accuracy: "0.1%",
        Evasion: "6.1%",
        Crit: "10.1%",
        CR: "10.1%",
      },
      showFirst: true,
      firstState: 0,
    };
  },
  props: {
    changeLink: {
      type: Function,
      require: true,
      default: null,
    },
    firstStates: {
      type: Number,
      require: true,
      default: null,
    },
  },
  watch: {
    firstStates: function () {
      if (this.firstStates === 0) {
        setTimeout(() => {
          this.showFirst = true;
        }, 500);
      } else {
        setTimeout(() => {
          this.showFirst = false;
        }, 500);
      }
    },
    $route(to, from) {
      this.$refs.videoPlayer.player.play();
    },
  },
  mounted() {},
  destroyed() {},
  methods: {
    play() {
      window.location.href = "https://pancakeswap.finance/swap";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  height: 61rem;
  overflow: hidden;
  position: relative;
}
.top-style {
  width: 100%;
  height: 61rem;
  // background-image: url("../../../assets/first/banner_bg@2x.jpg");
  // background-size: cover;
  // animation: changeBiger 2s linear forwards;
  // animation-delay: 0.1s;
  // -webkit-animation-delay: 0.1s;
  // transform: scale(1);
  // position: absolute;
  // position: absolute;
}
.bg-style {
  height: 61rem;
  width: 100%;
  position: absolute;
  // border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 33;
}
.vd-play {
  z-index: 2;
  position: relative;
  height: 70rem;
  width: 124rem;
  right: 2rem;
}
.top-style /deep/ .video-js {
  // object-fit: fill;
  height: 67rem;
  margin-top: -3.5rem;
  background: rgba(0, 0, 0, 0);
  // margin-top: -12rem;
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
// .top-style /deep/  .vjs-tech {
//   object-fit: fill;
// }
// .top-style /deep/ .vjs-poster {
//   background-size: cover;
// }

@keyframes changeBiger {
  0% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

.tb-style {
  margin-top: 3.5rem;
  width: 100%;
  height: 60.7rem;
  background-image: url("../../../assets/first/banner_bg2@2x.png");
  background-size: cover;
  position: absolute;
  z-index: 3;
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
  background-image: url("../../../assets/img/social media@2x.png");
  background-size: cover;
  height: 16.3rem;
  width: 5.2rem;
  position: fixed;
  right: 0;
  margin-top: 22.1rem;
  // align-items: center;
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
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: center;
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
  // justify-content: space-around;
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
</style>
