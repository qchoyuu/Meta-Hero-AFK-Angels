<template>
  <div class="wallet-main" id="wallet-main">
    <div class="w-content">
      <div class="left-nav">
        <div
          @click="chooseNav(index)"
          :style="{ 'border-top-left-radius': index === 0 ? '.5rem' : '' }"
          :class="state === index ? 'item-navs' : 'item-nav'"
          v-for="(item, index) in leftNav"
          :key="index"
        >
          {{ item }}
        </div>
        <div class="last-line"></div>
      </div>
      <div class="r-content">
        <router-view />
      </div>
    </div>

    <div v-show="isShowGold" class="modal" @click="isShowGold = false">
      <div v-if="!buySuccess" class="buy-gold" @click.stop>
        <div class="may-price">Bind confirmation</div>
        <div>
          <img
            src="../../assets/email/pic_Bind confirmation.png"
            alt=""
            class="em-img"
          />
          <p class="em-p1">Are you sure to bind your wallet and email</p>
          <p class="em-p2">It cannot be changed after binding</p>
        </div>
        <div>
          <div class="btn-1">Cancle</div>
          <div class="btn-2" @click="conem()">Confirm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../utils/bus";
export default {
  name: "Wallet",
  data() {
    return {
      leftNav: ["Asset", "NFT", "Claim $MHA", "Link Account "],
      state: 0,
      nftCount: 5,
      isShowGold: false,
    };
  },
  mounted() {
    var scrollDiv = document.getElementById("wallet-main");
    scrollDiv.addEventListener("scroll", this.scroll);
  },

  created() {
    bus.$on("eclick", (str) => {
      this.isShowGold = str;
    });
  },

  methods: {
    chooseNav(index) {
      this.state = index;
      switch (index) {
        case 0:
          this.$router.push("./asset");
          break;
        case 1:
          this.$router.push("./nft");
          break;
        case 2:
          this.$router.push("./claim");
          break;
        case 3:
          this.$router.push("./email");
          break;
        default:
          this.$router.push("./asset");
          break;
      }
    },
    scroll(e) {
      bus.$emit("val", e.target.scrollTop);
    },
    conem() {
      bus.$emit("clear", true);
      this.isShowGold = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.wallet-main {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #040923;
  // .wallet-main::-webkit-scrollbar {display:none}
  .top-head {
    display: flex;
    // align-items: center;
    margin-top: 6.375rem;
    margin-left: 4rem;
    .head-img {
      height: 3.375rem;
      width: 3.375rem;
      border-radius: 50%;
      background: #fff;
    }
    .copys {
      height: 1.2rem;
      margin-left: 0.75rem;
      cursor: pointer;
    }
    .user-info {
      height: 3.375rem;
      text-align: start;
      padding-left: 0.5rem;
    }
    .u-name {
      display: flex;
      color: #fff;
      font-size: 1.5rem;
      font-family: "avbook";
    }
    .u-addr-c {
      display: flex;
      width: 35rem;
      flex-direction: row;
      align-items: flex-start;
    }
    .u-addr {
      color: #27d1d1;
      font-size: 1rem;
      font-family: "avbook";
    }
  }
  .w-content {
    display: flex;
    flex-direction: row;
    margin-top: 6.4rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }
  .left-nav {
    height: 54.5rem;
    width: 21.4375rem;
    background: #00021a;
    border: 1px solid #36374b;
    // border-right: none;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }
  .item-nav {
    height: 4.375rem;
    line-height: 4.375rem;
    color: #fff;
    font-family: "mdem";
    cursor: pointer;
    // border-right: 1px solid #36374b;
  }
  .item-nav:hover {
    background: #040923;
  }
  .item-navs {
    height: 4.375rem;
    line-height: 4.375rem;
    color: #fff;
    font-family: "mdem";
    background: #040923;
    border-bottom: 1px solid #36374b;
    border-top: 1px solid #36374b;
  }
  .last-line {
    height: 29.5rem;
    border-right: 1px solid #36374b;
    border-right: 0px;
  }
  .r-content {
    border: 1px solid #36374b;
    border-left: none;
    width: 91.5rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
}
.wallet-main::-webkit-scrollbar {
  display: none;
}

.modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.buy-gold {
  width: 30rem;
  height: 22.63rem;
  background: #2c2c2c;
  border-radius: 0.69rem 0.69rem 0.69rem 0.69rem;
  opacity: 0.95;
}

.buy-price {
  height: 4rem;
  margin-top: 3rem;
}

.may-price {
  width: 29.25rem;
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
  margin-top: 3rem;
}

.em-img {
  width: 18rem;
  height: 4rem;
  margin-top: 2rem;
}

.em-p1 {
  font-size: 1rem;
  font-family: Avenir Next-Medium, Avenir Next;
  font-weight: 500;
  color: #ffffff;
  line-height: 0rem;
  margin-top: 3rem;
}

.em-p2 {
  font-size: 1rem;
  font-family: Avenir Next-Medium, Avenir Next;
  font-weight: 500;
  color: #ffffff;
  line-height: 0rem;
  margin-top: 1.5rem;
}

.btn-1 {
  display: inline-block;
  width: 12rem;
  height: 2.69rem;
  border-radius: 0.38rem 0.38rem 0.38rem 0.38rem;
  opacity: 1;
  border: 0.06rem solid #27d1d1;
  margin-top: 2rem;
  font-size: 1rem;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #27d1d1;
  line-height: 2.69rem;
  cursor: pointer;
}
.btn-2 {
  display: inline-block;
  width: 12rem;
  height: 2.69rem;
  background: #27d1d1;
  border-radius: 0.38rem 0.38rem 0.38rem 0.38rem;
  opacity: 1;
  margin-top: 2rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #ffffff;
  line-height: 2.69rem;
  cursor: pointer;
}
</style>
