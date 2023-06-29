<template>
  <div class="wallet-main" id="wallet-main">
    <div class="top-head">
      <div class="head-img"></div>
      <div class="user-info">
        <div class="u-name">User name</div>
        <div class="u-addr-c">
          <div class="u-addr">0x90792ce00ef36e6e2c483ab965298f5a32aacf3a</div>
          <img src="../../assets/skills/copy1.png" class="copys" alt="" />
        </div>
      </div>
    </div>
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
  </div>
</template>

<script>
import bus from "../../utils/bus";
export default {
  name: "Wallet",
  data() {
    return {
      leftNav: ["Asset", "NFT", "Claim MHA", "Binding"],
      state: 0,
      nftCount: 5,
    };
  },
  mounted() {
    var scrollDiv = document.getElementById("wallet-main");
    scrollDiv.addEventListener("scroll", this.scroll);
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
          this.$router.push("./binding");
          break;
        default:
          this.$router.push("./asset");
          break;
      }
    },
    scroll(e) {
      bus.$emit("val", e.target.scrollTop);
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
    margin-top: 2.4rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }
  .left-nav {
    height: 47rem;
    width: 21.4375rem;
    background: #00021a;
    border: 1px solid #36374b;
    border-right: none;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }
  .item-nav {
    height: 4.375rem;
    line-height: 4.375rem;
    color: #fff;
    font-family: "mdem";
    cursor: pointer;
    border-right: 1px solid #36374b;
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
  }
  .last-line {
    height: 29.5rem;
    border-right: 1px solid #36374b;
  }
  .r-content {
    border: 1px solid #36374b;
    border-left: none;
    width: 91.5rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
}
</style>
