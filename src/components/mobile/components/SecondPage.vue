<template>
  <div class="hellosc">
    <!-- secondpage -->
    <div class="second-style" id="game">
      <div class="left-img"></div>
      <div class="right-img">
        <div class="contnt-title">
          <div class="toptitl">NFT PLAY TO EARN GAME</div>
          <div class="content1">
            Idle Angels is the first Play to Earn AFK RPG, a blockchain game
            based on BSC network. Idle Angels built a virtual world, where all
            your angels will fight automatically even if you’re not online. In
            this way, players can get massive equipment and gems easily. It is
            also an economy in which ownership is totally decided by players,
            allowing players to seamlessly sell and trade their game assets into
            cryptocurrency. Idle Angels leads the trend of GameFi and “Play To
            Earn”, allowing players to earn by playing games.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hellosc {
  height: 61rem;
  width: 100%;
  overflow: hidden;
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
  height: 56rem;
  width: 62rem;
  z-index: 999;
  position: absolute;
  margin-left: -70rem;
  margin-top: -6rem;
}
.right-img {
  color: #fff;
  background-image: url("../../../assets/img/BG_introduction@2x.png");
  background-size: cover;
  height: 39rem;
  width: 100rem;
  text-overflow: ellipsis;
  overflow: hidden;
}
.contnt-title {
  font-size: 1.6rem;
  font-weight: bold;
  padding-top: 8rem;
  padding-left: 10rem;
  overflow: hidden;
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.content1 {
  width: 65%;
  margin-left: 28rem;
  font-size: 0.5rem;
  font-weight: 100;
  text-align: start;
  padding-top: -6rem;
  animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow-y: scroll;
  height: 25rem;
  font-family: "avbook";
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
.toptitl {
  position: absolute;
  margin-top: -15rem;
  width: 100%;
  text-align: center;
  margin-left: -6rem;
}
}
</style>
