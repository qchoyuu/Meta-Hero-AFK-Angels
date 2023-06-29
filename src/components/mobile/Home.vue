<template>
  <div class="hellow">
    <div v-show="show" class="popup">
      <div class="nav-bar">
        <div class="bars">
          <div class="navtitle bt1">
            <div class="textcolor" @click="changeLinkHandle('home')">Home</div>
            <div class="lines"></div>
          </div>
          <div class="navtitle bt2">
            <div class="textcolor" @click="changeLinkHandle('game')">Game</div>
            <div class="lines"></div>
          </div>
          <div class="navtitle bt3">
            <div class="textcolor" @click="changeLinkHandle('marketplace')">
              Marketplace
            </div>
            <div class="lines"></div>
          </div>
          <div class="navtitle bt4">
            <div class="textcolor" @click="changeLinkHandle('mining')">
              Liquidity Mining
            </div>
            <div class="lines"></div>
          </div>
          <div class="navtitle bt5">
            <div class="textcolor" @click="changeLinkHandle('wiki')">
              Game Wiki
            </div>
            <div class="lines"></div>
          </div>
        </div>
        <div class="language-login">
          <div class="login-bt">Login</div>
          <div class="language">
            English
            <div class="tranel"></div>
          </div>
        </div>
      </div>
      <div @click="show = false" class="rightclose"></div>
    </div>
    <div ref="cardShow" id="carouse" class="carouse">
      <FirstPage id="home" :changeLinkHandle="changeLinkHandle" />
      <SecondPage id="game" style="margin-top: -0.5rem" />
      <ThirdPage id="marketsplace" />
      <FourthPage id="mining" />
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
      show: false,
    };
  },
  mounted() {},
  methods: {
    changeLinkHandle() {
      this.show = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.hellow {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.carouse {
  position: relative;
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
.popup {
  position: absolute;
  background: #fff;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
}
.nav-bar {
  display: flex;
  width: 40%;
  flex-direction: column;
  // width: 38rem;
  color: #fff;
  align-items: center;
  font-size: 1rem;
  z-index: 999;
  background: rgb(21, 21, 44);
}
.navtitle {
  padding-left: 2rem;
  cursor: pointer;
  font-family: "monospace";
}

.navtitle:hover .lines {
  width: 100%;
}

.textcolor {
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  display: flex;
}

.lines {
  width: 0px;
  height: 2px;
  border-radius: 5px;
  background-color: #fff;
  left: 0px;
  right: 0px;
  margin-top: 4px;
  transition: width 0.2s linear;
}
.login-bt {
  height: 18rem;
  width: 30rem;
  text-align: center;
  line-height: 18rem;
  background-size: cover;
  cursor: pointer;
  font-size: 5.5rem;
  font-weight: bold;
  background-image: url("../../assets/img/login-bg.png");
  margin-left: -6rem;
  font-family: "avpro";
}
.language {
  height: 4rem;
  text-align: center;
  line-height: 4.5rem;
  font-size: 5.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -2rem;
  margin-top: 8rem;
}

.tranel {
  margin-top: 2rem;
  margin-left: 0.8rem;
  width: 0px;
  height: 0px;
  border-width: 2rem;
  border-style: solid;
  border-color: white transparent transparent transparent;
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
.bt1 {
  margin-top: 15em;
  width: 12rem;
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bt2 {
  margin-top: 15em;
  width: 12rem;
  animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bt3 {
  margin-top: 15em;
  width: 24rem;
  animation: fadeInLeft 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bt4 {
  margin-top: 15em;
  width: 32rem;
  animation: fadeInLeft 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bt5 {
  margin-top: 15em;
  width: 28rem;
  animation: fadeInLeft 2.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bars {
  height: 40%;
}
.language-login {
  margin-top: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.rightclose {
  width: 60%;
}
</style>
