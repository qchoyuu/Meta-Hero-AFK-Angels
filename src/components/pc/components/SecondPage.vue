<template>
  <div class="hellosec" ref="hellosec">
    <!-- secondpage -->
    <div class="second-style" id="game">
      <div class="left-img"></div>
      <div class="right-img">
        <div class="contnt-title" v-if="showFirst">
          <div class="ct-tti">NFT PLAY TO EARN GAME</div>
          <div class="content1" v-if="showFirst">
            Idle Angels is the first Play to Earn AFK RPG, a blockchain game
            based on BSC network. Idle Angels built a virtual world, where all
            your angels will fight automatically even if you’re not online. In
            this way, players can get massive equipment and gems easily.
          </div>
          <div class="content1 mg-t1" v-if="showFirst">
            It is also an economy in which ownership is totally decided by
            players, allowing players to seamlessly sell and trade their game
            assets into cryptocurrency. Idle Angels leads the trend of GameFi
            and “Play To Earn”, allowing players to earn by playing games.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/bus";
export default {
  name: "SecondPage",
  data() {
    return {
      showFirst: false,
    };
  },
  props: {
    secondState: {
      type: Number,
      require: true,
      default: null,
    },
    sec: {
      type: Boolean,
      require: true,
      default: null,
    },
  },
  watch: {
    secondState: function () {
      if (this.secondState === 1) {
        setTimeout(() => {
          this.showFirst = true;
        }, 500);
      } else {
        setTimeout(() => {
          this.showFirst = false;
        }, 500);
      }
    },
  },
  mounted() {
    bus.$on("ismargin", (e) => {
      if (e > 0.2 && e < 0.25) {
        if (this.$refs.hellosec.getBoundingClientRect().top < 0) {
          this.showFirst = true;
        }
      }else if(e>0.25&&e<0.3){
        if (this.$refs.hellosec.getBoundingClientRect().top < 50) {
          this.showFirst = true;
        }
      }
      else if(e>0.3&&e<0.35){
        if (this.$refs.hellosec.getBoundingClientRect().top < 120) {
          this.showFirst = true;
        }
      }else if(e>0.35&&e<0.4){
        if (this.$refs.hellosec.getBoundingClientRect().top < 180) {
          this.showFirst = true;
        }
      }else if(e>0.4&&e<0.45){
        if (this.$refs.hellosec.getBoundingClientRect().top < 200) {
          this.showFirst = true;
        }
      }else if(e>0.45&&e<0.5){
        if (this.$refs.hellosec.getBoundingClientRect().top < 440) {
          this.showFirst = true;
        }
      }else {
        if (this.$refs.hellosec.getBoundingClientRect().top < 450) {
          this.showFirst = true;
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hellosec {
  width: 100%;
  height: 61rem;
  overflow: hidden;
  position: relative;

  .second-style {
    height: 61rem;
    width: 100%;
    background-image: url("../../../assets/homebg/huaban2.jpg");
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .left-img {
    background-image: url("../../../assets/img/PIC_GAME introduction@2x.png");
    background-size: cover;
    height: 43rem;
    width: 43rem;
    z-index: 999;
    position: absolute;
    margin-left: -52rem;
    margin-top: -2.5rem;
  }
  .right-img {
    color: #fff;
    background-image: url("../../../assets/img/BG_introduction@2x.png");
    background-size: cover;
    height: 32.125rem;
    width: 82.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ct-tti {
    padding-left: 8rem;
    font-size: 1.875rem;
  }
  .contnt-title {
    font-family: "osb";
    font-size: 2.6rem;
    font-weight: bold;
    padding-top: 8rem;
    // padding-left: 1rem;
    overflow: hidden;
    animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .content1 {
    font-family: "avbook";
    width: 37rem;
    line-height: 1.3rem;
    padding-left: 36rem;
    font-size: 0.875rem;
    font-weight: 100;
    text-align: start;
    padding-top: 3rem;
    animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .mg-t1 {
    padding-top: 1rem;
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
}
</style>
