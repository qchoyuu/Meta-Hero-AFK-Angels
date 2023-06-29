<template>
  <div class="hellofouh" ref="hellofouh">
    <!-- fourthpage -->
    <div class="fourth-style" id="mining">
      <div class="gm-feature">GAME FEATURES</div>
      <div class="feature-content">
        <div class="feature-left">
          <div v-if="showFirst">
            <div class="feature-title tit-1">RECRUIT TO PLAY</div>
            <div class="feature-item tit-1">
              With billions of possible gene combinations, each Angel has her
              own unique advantages and disadvantages!
            </div>
            <div class="feature-item tit-1">
              Choose the right angel, match the right skills and select the
              right equipment.
            </div>
            <div class="feature-item tit-1">
              Come up with your own strategy to build your Invincible angel
              team!
            </div>
          </div>
        </div>
        <div class="feature-center">
          <div v-if="showFirst">
            <div class="feature-title tit-1">AFK BATTLE TO WIN</div>
            <div class="feature-item tit-1">
              Your angels will fight automatically even if you’re not online. In
              this way, you can get massive equipment and gems easily.
            </div>
            <div class="feature-item tit-1">
              In the unique battle mode, lead your team through adventures and
              win super rare rewards.
            </div>
          </div>
        </div>
        <div class="feature-right">
          <div v-if="showFirst">
            <div class="feature-title tit-1">WIN TO EARN</div>
            <div class="feature-item tit-1">
              Idle Angels is a new type of game, partially owned and operated by
              its players.
            </div>
            <div class="feature-item tit-1">
              Earn MHA token by playing and use them to decide the future of the
              game!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/bus";
export default {
  name: "FourthPage",
  data() {
    return {
      showFirst: false,
    };
  },
  props: {
    fourthState: {
      type: Number,
      require: true,
      default: null,
    },
  },
  watch: {
    fourthState: function () {
      if (this.fourthState === 3) {
        setTimeout(() => {
          this.showFirst = true;
        }, 300);
      } else {
        setTimeout(() => {
          this.showFirst = false;
        }, 300);
      }
    },
  },
  mounted() {
    bus.$on("ismargin", (e) => {
      if (e > 0.2 && e < 0.25) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 0) {
          this.showFirst = true;
        }
      } else if (e > 0.25 && e < 0.3) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 50) {
          this.showFirst = true;
        }
      } else if (e > 0.3 && e < 0.35) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 100) {
          this.showFirst = true;
        }
      } else if (e > 0.35 && e < 0.4) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 220) {
          this.showFirst = true;
        }
      } else if (e > 0.4 && e < 0.45) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 320) {
          this.showFirst = true;
        }
      } else if (e > 0.45 && e < 0.5) {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 400) {
          this.showFirst = true;
        }
      } else {
        if (this.$refs.hellofouh.getBoundingClientRect().top < 450) {
          this.showFirst = true;
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hellofouh {
  width: 100%;
  height: 61rem;
  overflow: hidden;
  position: relative;

  .fourth-style {
    height: 61rem;
    width: 100%;
    background-image: url("../../../assets/homebg/huaban4.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
  .gm-feature {
    font-family: "osb";
    color: #fff;
    font-weight: bold;
    font-size: 1.875rem;
    padding-top: 8rem;
  }
  .feature-content {
    width: 66%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40rem;
    margin-top: 2rem;
  }
  .feature-left {
    background-image: url("../../../assets/img/bg_game feature1@2x.png");
    background-size: cover;
    height: 35.25rem;
    width: 24rem;
    margin-top: 2rem;
    width: 24rem;
    transition-duration: 800ms;
  }
  .feature-center {
    background-image: url("../../../assets/img/bg_game feature2@2x.png");
    background-size: cover;
    height: 35.25rem;
    width: 24rem;
    margin-top: 2rem;
    transition-duration: 800ms;
  }
  .feature-right {
    background-image: url("../../../assets/img/bg_game feature3@2x.png");
    background-size: cover;
    height: 35.25rem;
    width: 24rem;
    margin-top: 2rem;
    transition-duration: 800ms;
  }
  .feature-left:hover {
    margin-top: -5px;
    transition-duration: 800ms;
  }
  .feature-center:hover {
    margin-top: -5px;
    transition-duration: 800ms;
  }
  .feature-right:hover {
    margin-top: -5px;
    transition-duration: 800ms;
  }
  .feature-title {
    font-family: "osb";
    color: #fff;
    font-size: 1.75rem;
    font-weight: bold;
    width: 100%;
    text-align: start;
    padding-left: 2.9rem;
    padding-top: 3.2rem;
  }
  .feature-item {
    font-family: "avbook";
    color: #fff;
    width: 17.25rem;
    margin-left: 3rem;
    text-align: start;
    padding-top: 2rem;
    font-size: 1rem;
    animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .tit-1 {
    animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .tit-2 {
    animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .tit-3 {
    animation: fadeInRight 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-3rem);
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
  @keyframes fadeInCenter {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    // 50%{
    //   opacity: 0.5;
    //   transform: translateX(-50px);
    // }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
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
}
</style>
