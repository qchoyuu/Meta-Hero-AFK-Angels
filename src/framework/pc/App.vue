<template>
  <div id="app">
    <div v-show="!showmain">
      <div
        v-show="show"
        class="top-nav"
        :class="showAnothStyle ? 'bgstyles' : ''"
      >
        <img
          :class="showAnothStyle ? 'a-topleft-log' : 'topleft-log'"
          src="../../assets/img/logoimg@2x.png"
          @click="scrollToAnchor(0)"
        />
        <img
          :class="showAnothStyle ? 'a-logo-text' : 'logo-text'"
          src="../../assets/img/updlogo.png"
          alt=""
          @click="scrollToAnchor(0)"
        />
        <div
          :style="{ 'margin-left': showAnothStyle ? '4rem' : '8.2rem' }"
          class="nav-bar"
        >
          <div
            v-show="!showAnothStyle"
            class="navtitle"
            :class="showAnothStyle ? 'a-bt1' : 'bt1'"
          >
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 0 ? '#a5fcda' : '' }"
              @click="scrollToAnchor(0)"
            >
              Gameplay
            </div>
            <div class="lines"></div>
          </div>

          <div
            class="navtitle"
            :class="showAnothStyle ? 'a-bt2' : 'bt2'"
            v-show="sible"
          >
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 7 ? '#a5fcda' : '' }"
              @click="scrollTo()"
            >
              Dashboard
            </div>
            <div class="lines"></div>
          </div>

          <div class="navtitle" :class="showAnothStyle ? 'a-bt2' : 'bt2'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 1 ? '#a5fcda' : '' }"
              @click="scrollToAnchor(1)"
            >
              Marketplace
            </div>
            <div class="lines"></div>
          </div>

          <div class="navtitle" :class="showAnothStyle ? 'a-bt3' : 'bt3'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state == 8 ? '#a5fcda' : '' }"
              @click="scrollToAnchor(8)"
              v-show="presale"
            >
              <div class="p-sale">
                <img
                  class="sale-img"
                  src="../../assets/img/icon_Pre Sale@2x.png"
                  alt=""
                />Pre Sale
              </div>
            </div>
            <div class="lines"></div>
          </div>

          <div class="navtitle" :class="showAnothStyle ? 'a-bt4' : 'bt4'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 3 ? '#a5fcda' : '' }"
              @click="scrollToAnchor(3)"
            >
              {{ !showAnothStyle ? "NFT Gallery" : "Staking" }}
            </div>
            <div class="lines"></div>
          </div>

          <!-- <div class="navtitle" :class="showAnothStyle ? 'a-bt3' : 'bt3'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 2 ? '#a5fcda' : '' }"
              @click="tonf()"
            >
              <div class="p-sale" >
                Wiki
              </div>
            </div>
            <div class="lines"></div>
          </div> -->

          <div class="navtitle" :class="showAnothStyle ? 'a-bt4' : 'bt4'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 3 ? '#a5fcda' : '' }"
              @click="tonf()"
            >
              Wiki
            </div>
            <div class="lines"></div>
          </div>

          <div class="navtitle" :class="showAnothStyle ? 'a-bt5' : 'bt5'">
            <div
              :class="showAnothStyle ? 'a-textcolor' : 'textcolor'"
              :style="{ color: state === 4 ? '#a5fcda' : '' }"
              @click="scrollToAnchor(4)"
              style="display: flex; align-items: center"
            >
              {{ showMore ? "More" : mores }}
              <img
                src="../../assets/skills/btn_arrow.png"
                class="arrow"
                alt=""
              />
            </div>

            <div class="lines1"></div>
            <div
              class="top-last-tab"
              :style="{
                left: showAnothStyle ? '45rem' : '60rem',
                height: showAnothStyle
                  ? 'height: 10.125rem;'
                  : 'height: 3.125rem;',
              }"
            >
              <div>
                <div class="l-tab">Angels Star-up</div>
                <div class="l-tab" @click="toArm(0)">Equips Rank-up</div>
                <div class="l-tab1" @click="toArm(1)">Equips Burn-up</div>
              </div>
            </div>
          </div>
        </div>
        <div class="top-right">
          <div
            class="login-bt"
            :style="{ 'font-family': showAnothStyle ? 'avbook' : 'avnextmed' }"
            v-if="isLogin"
            @click="linkWallet(true)"
          >
            <span>Connect</span>
          </div>

          <div v-else class="uerinfo">
            <div
              :style="{ 'font-family': showAnothStyle ? 'avbook' : 'avmed' }"
              class="userhead"
              @mousemove="userdd()"
              @mouseout="usercc()"
            >
              <div class="a-center">
                <img
                  src="../../assets/skills/组 76@2x.png"
                  class="nav-gold"
                  alt=""
                />
                <div style="color: #f5c638; padding-top: 0.3rem">
                  {{ tostr }}
                </div>
              </div>
              <div class="nav-addr">
                <div style="padding-top: 0.6rem" id="foo">{{ acc }}</div>
                <img
                  src="../../assets/skills/复制 (1).png"
                  class="nav-copy"
                  alt="Copy to clipboard"
                  :data-clipboard-text="tokens"
                  @click="copyUrl()"
                />
              </div>
            </div>
            <div class="tranels" @click="toMywallet">My Wallet</div>

            <div
              class="outstyle"
              id="userheadd"
              @mousemove="styleee()"
              @mouseout="stylecc()"
              :style="{
                right: showAnothStyle ? '18.5rem' : '20rem',
                top: showAnothStyle ? '2rem' : '4rem',
              }"
            >
              <div class="triangle-up"></div>
              <div class="personal">
                <div class="user-addr" style="margin-top: 0.5rem">
                  <div class="us-tt">Wallet</div>
                  <div>
                    <img
                      class="copy-addr"
                      src="../../assets/skills/icon_Metamask@2x.png"
                      alt=""
                    />
                    <span class="img-addr">Metamask</span>
                  </div>
                </div>
                <div class="line-item"></div>
                <div class="user-addr" @click="toMywallet">
                  <div class="us-tt">Connected Network</div>
                  <div class="copy-bsc">
                    <div class="b-circle"></div>
                    <span>BSC</span>
                  </div>
                </div>
                <div class="disconnect" @click="GBlj()">Disconnect Wallet</div>
              </div>
            </div>
          </div>

          <div class="language">
            <div
              :style="{ 'font-family': showAnothStyle ? 'avbook' : 'avmed' }"
            >
              English
            </div>
            <div class="tranel"></div>
          </div>
        </div>
      </div>

      <div class="rt-view"><router-view /></div>
    </div>
    <Loading v-show="showmain" />
  </div>
</template>
<script>
import bus from "../../utils/bus";
import Loading from "./Loading.vue";
import { getCode, getbtc } from "../../api/api";
import Clipboard from "clipboard";
import sdk from "../../utils/chanjssdk";
import { post } from "../../request/http";
export default {
  name: "App",
  data() {
    return {
      state: 1,
      isLogin: true,
      isShowInfo: false,
      show: true,
      val: 0,
      showmain: true,
      acc: "",
      showAnothStyle: false,
      codes: "",
      balance: 0,
      mores: "",
      showMore: true,
      textt: "",
      tokens: "",
      tostr: "",
      sible: false,
      presale: true,
    };
  },
  watch: {
    $route: {
      handler(val, oldval) {
        if (!val.path.includes("Home") && !val.path.includes("PreSale")) {
          this.showAnothStyle = true;
        } else {
          this.showAnothStyle = false;
        }
        if (val.path.includes("Game")) {
          this.state = 4;
        } else if (val.path.includes("Marketplace")) {
          this.state = 1;
          this.showMore = true;
        } else if (val.path.includes("Mining")) {
          this.state = 2;
        } else if (val.path.includes("Wiki")) {
          this.state = 3;
        } else {
          this.state = 0;
        }
      },
      // 深度观察监听
      deep: true,
    },
    acc() {
      this.acc =
        this.acc.substr(0, 6) +
        "..." +
        this.acc.substr(this.acc.length - 4, this.acc.length - 1);
    },
  },
  components: {
    Loading,
  },
  mounted() {
    this.sible = false;
    let tim = setTimeout(() => {
      this.showmain = false;
      clearTimeout(tim);
    }, 4000);
    bus.$on("message", (e) => {
      this.show = e;
    });
    bus.$on("val", (e) => {
      this.val = e;
    });
  },
  methods: {
    scrollToAnchor(index) {
      // if(index == 0){
      //   this.state = 0
      //   this.$router.push("/");
      //   this.sible = false
      // }else if(index == 1){
      //   this.state = 1
      //   this.$router.push("/Marketplace");
      //   this.sible = true
      // }else if(index == 2){
      //   this.state = 2
      //   this.$router.push("/Time");
      //   this.sible = true
      // }

      this.state = index;
      switch (index) {
        case 0: //首页
          this.$router.push("/");
          this.sible = false;
          break;
        case 1: //市场
          this.$router.push("/Marketplace");
          this.sible = true;
          break;
        case 8:
          this.$router.push("/PreSale");
          this.sible = false;
          break;
        case 3:
          !this.showAnothStyle
            ? window.open("https://oncyber.io/metaafkgirls", "_blank")
            : this.$router.push("/Staking");
          break;
        case 4:
          this.$router.push("/Marketplace");
          break;
        default:
          break;
      }
    },
    toMywallet() {
      let param = {
        from: 1,
      };
      this.$router.push({ path: "/Wallet", query: { msg: this.textt } });
    },
    scrollTo() {
      this.state = 7;
      this.$router.push({ path: "/dash" });
    },
    async linkWallet(bool) {
      let that = this;
      //这里就是MetaMask钱包的地址
      if (typeof window.ethereum === "undefined") {
        this.$message({
          message: "No wallet detected, please install MetaMask",
          type: "warning",
          duration: 3000,
        });
      } else {
        ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
            that.acc = res[0];
            this.tokens = res[0];
            this.tokens = res[0];

            post("/client/api/wallet/connectWallet", {
              address: this.tokens,
            }).then((res) => {});

            ethereum
              .request({
                method: "eth_getBalance",
                params: [this.tokens],
                id: 1,
              })
              .then((res) => {
                let str = res;
                let nstr = Number(str);
                let nsttt = nstr / 1000000000000000000;
                this.tostr = nsttt.toFixed(4);
              });

            this.isLogin = false;
            that.$message({
              message: "Link Successfully",
              type: "success",
              offset: 80,
            });
            that.isShowInfo = true;
          })
          .catch((err) => {
            if (err.code === 4001) {
              that.$message({
                message: "User rejected the request!",
                type: "warning",
                offset: 80,
              });
            }
            that.isShowInfo = false;
          });

        //   if (bool) {
        //     getbtc().then((res) => {
        //     });
        //   } else {
        //     that.acc = "";
        //     accounts[0] = null;
        //     that.isLogin = true;
        //     that.isShowInfo = false;
        //     that.$message({
        //       message: "You are logged out",
        //       type: "success",
        //       offset: 80,
        //     });
        //      that.isShowInfo = false;
        //   }
      }
    },
    // tonf(){
    //     window.location.href = "https://afk-angels.gitbook.io/untitled/"
    // },
    toArm(index) {
      this.showMore = false;
      switch (index) {
        case 0:
          this.mores = "Equipment Merge";
          this.$router.push("/armupdate");

          break;
        case 1:
          this.mores = "Equipment Burn-up";
          this.$router.push("/armdecomposition");

          break;
        default:
          this.$router.push("/armupdate");

          break;
      }
    },
    disconnect() {
      ethereum.on("disconnect", (err) => {});
    },
    userdd() {
      document.getElementById("userheadd").style.display = "block";
    },
    usercc() {
      document.getElementById("userheadd").style.display = "none";
    },

    styleee() {
      document.getElementById("userheadd").style.display = "block";
    },
    stylecc() {
      document.getElementById("userheadd").style.display = "none";
    },
    copyUrl() {
      let _this = this;
      let clipboard = new Clipboard(".nav-copy"); // 这里括号里填写上面点击事件绑定的class名
      clipboard.on("success", (e) => {
        // 复制成功，提示根据自己项目实际使用的UI来写
        // this.$message.success("复制成功，快去分享吧~");
        this.$message({
          showClose: true,
          message: "Copy successfully, go and share it",
          type: "success",
          offset: 80,
        });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 不支持复制，提示根据自己项目实际使用的UI来写
        this.$message.error("copy failed");
        // 释放内存
        clipboard.destroy();
      });
    },
    GBlj() {
      this.isLogin = true;
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  // font-family: "avnextmed";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .top-nav {
    display: flex;
    position: absolute;
    z-index: 9999;
    width: 100%;
    align-items: center;
  }
  .topleft-log {
    cursor: pointer;
    margin-top: 1rem;
    height: 6.9rem;
    margin-left: 8rem;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 10s;
    -webkit-animation: rotate 10s linear infinite;
    -moz-animation: rotate 10s linear infinite;
    -o-animation: rotate 10s linear infinite;
    animation: rotate 10s linear infinite;
  }
  .a-topleft-log {
    cursor: pointer;
    margin-top: 1rem;
    height: 3.125rem;
    margin-left: 4rem;
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
    cursor: pointer;
    position: absolute;
    margin-top: 1rem;
    height: 4rem;
    // width: 12rem;
    margin-left: 5rem;
  }
  .a-logo-text {
    cursor: pointer;
    position: absolute;
    margin-top: 1rem;
    height: 2rem;
    // width: 12rem;
    margin-left: 3rem;
  }
  .bgstyles {
    background: #040923;
    position: fixed;
    top: 0;
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
    animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bt2 {
    animation: fadeInLeft 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bt3 {
    animation: fadeInLeft 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bt4 {
    animation: fadeInLeft 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bt5 {
    animation: fadeInLeft 2.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-duration: 500ms;
  }
  .a-bt1 {
    animation: fadeInL 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .a-bt2 {
    animation: fadeInL 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .a-bt3 {
    animation: fadeInL 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .a-bt4 {
    animation: fadeInL 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @keyframes fadeInL {
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
  .a-bt5 {
    animation: fadeInL 2.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-duration: 500ms;
  }
  .a-bt5:hover .arrow {
    // animation: rotates .2s linear infinite;
    // animation-iteration-count: 1;
    transform: rotate(180deg);
    transition-duration: 500ms;
  }
  .bt5:hover .arrow {
    // animation: rotates .2s linear infinite;
    // animation-iteration-count: 1;
    transform: rotate(180deg);
    transition-duration: 500ms;
  }
  @keyframes rotates {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
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
  .tranel {
    margin-top: 1.9rem;
    margin-left: 0.5rem;
    width: 0px;
    height: 0px;
    border-width: 0.4rem;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
  .nav-bar {
    display: flex;
    flex-direction: row;
    // width: 38rem;
    margin-left: 8.2rem;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    margin-top: 1rem;
    z-index: 999;
  }
  .navtitle {
    padding-left: 2.625rem;
    font-weight: bold;
    cursor: pointer;
    font-family: "avnextmed";
  }

  .navtitle:hover .lines {
    width: 100%;
    background: #a5fcda;
  }
  .navtitle:hover .lines1 {
    width: 65%;
    background: #a5fcda;
  }
  .lines1 {
    width: 0px;
    height: 1px;
    border-radius: 5px;
    background-color: #a5fcda;
    left: 0px;
    right: 0px;
    transition: width 0.2s linear;
  }
  .navtitle:hover .textcolor {
    width: 100%;
    color: #a5fcda;
  }
  .textcolor {
    font-family: "avmed";
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }
  .a-textcolor {
    color: #fff;
    font-size: 1rem;
    font-weight: 100;
    font-family: "avbook";
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .lines {
    width: 0px;
    height: 1px;
    border-radius: 5px;
    background-color: #a5fcda;
    left: 0px;
    right: 0px;
    transition: width 0.2s linear;
  }
  .top-right {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    // width: 35rem;
    font-weight: bold;
    font-size: 1.4rem;
    color: #fff;
    z-index: 999;
    height: 100%;
    position: absolute;
    right: 8rem;
    margin-top: 0.5rem;
  }

  .login-bt {
    font-size: 1rem;
    font-family: "avpro";
    margin-right: 2rem;
    height: 4rem;
    width: 8rem;
    text-align: center;
    line-height: 4.6rem;
    background-size: cover;
    cursor: pointer;
    background-image: url("../../assets/img/login-bg.png");
    transition-duration: 500ms;
  }
  .login-bt:hover {
    margin-top: -5px;
    transition-duration: 500ms;
  }
  .language {
    font-size: 1rem;
    font-family: "avmed";
    height: 4rem;
    text-align: center;
    line-height: 4.5rem;
    display: flex;
  }
  .uerinfo {
    display: flex;
    text-align: center;
    padding-right: 3rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .tranels {
    background: #27d1d1;
    color: #fff;
    border: 1px solid #27d1d1;
    border-radius: 0.45rem;
    height: 2.6785rem;
    width: 6.1rem;
    line-height: 2.7rem;
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  .userhead {
    height: 3.6875rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 999;
  }
  .personal {
    margin-top: -0.2rem;
    border: 1px solid #36374b;
    background: #000000;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 300;
    padding-bottom: 2rem;
    font-family: "avnextmed";
  }
  .user-addr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 21rem;
    margin-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    font-family: "mdem";
  }

  .line-item {
    border-bottom: 1px solid #36374b;
    width: 21rem;
    margin-left: 0.8rem;
    margin-top: 0.3rem;
  }

  .copy-addr {
    height: 1rem;
    display: inline-block;
  }
  .copy-bsc {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .b-circle {
    height: 0.5rem;
    width: 0.5rem;
    background: #27d1d1;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  .code-name {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    font-family: "avbook";
  }
  .code {
    height: 9rem;
    width: 9rem;
    background: #fff;
    border-radius: 12px;
    margin-left: 5.5rem;
    margin-top: 1rem;
  }
  .spain {
    font-size: 0.8rem;
    color: #999999;
  }
  .disconnect {
    border: 1px solid #ff5c5c;
    border-radius: 0.3rem;
    height: 2.6875rem;
    width: 19rem;
    margin-left: 1rem;
    margin-top: 2rem;
    line-height: 2.7rem;
    cursor: pointer;
    color: #ff5c5c;
  }
  .disconnect:hover {
    border: 1px solid #ff5c5c;
    background: #ff5c5c;
    color: #000;
  }
  .outstyle {
    position: fixed;
    width: 22rem;
    right: 18.5rem;
    top: 2rem;
    display: none;
    flex-direction: column;
  }

  .us-tt {
    padding-left: 0.8rem;
    font-family: "mdem";
  }
  .code-img {
    height: 10rem;
    width: 10rem;
  }
  .p-sale {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sale-img {
    height: 1.5rem;
    margin-top: -0.5rem;
    padding-right: 0.3rem;
  }
  .arrow {
    height: 0.45rem;
    margin-left: 0.5rem;
    margin-top: -0.4rem;
  }
  .a-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .top-last-tab {
    position: fixed;
    width: 12.4rem;
    background: #000000;
    border-radius: 0.75rem;
    border: 1px solid #36374b;
    left: 30rem;
    display: none;
    // margin-top: 2px;
    padding-top: 0.2rem;
  }
  .bt5:hover .top-last-tab {
    display: block;
  }
  .a-bt5:hover .top-last-tab {
    display: block;
  }
  .l-tab {
    width: 11rem;
    font-size: 1rem;
    font-family: "mdem";
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #36374b;
    height: 3.125rem;
    line-height: 3.2rem;
    margin-left: 1.5rem;
  }
  .l-tabs {
    width: 11rem;
    font-size: 1rem;
    font-family: "mdem";
    display: flex;
    align-items: flex-start;
    height: 3.125rem;
    line-height: 3.2rem;
    margin-left: 1.5rem;
  }
  .l-tab1 {
    width: 11rem;
    font-size: 1rem;
    font-family: "mdem";
    display: flex;
    align-items: flex-start;
    height: 3.125rem;
    line-height: 3.2rem;
    margin-left: 1.5rem;
  }
  .l-tab:hover {
    color: #8a8a8a;
  }
  .l-tab1:hover {
    color: #8a8a8a;
  }
  .nav-gold {
    height: 1rem;
    padding-right: 0.5rem;
  }
  .nav-copy {
    height: 1.5rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    cursor: pointer;
  }
  .nav-addr {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -0.3rem;
  }
  .triangle-up {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #000;
    position: relative;
    margin-left: 10rem;
    margin-top: 2rem;
  }
  .triangle-up:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    bottom: -9px;
    left: -8px;
    z-index: -1;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #36374b;
  }
}
</style>>


