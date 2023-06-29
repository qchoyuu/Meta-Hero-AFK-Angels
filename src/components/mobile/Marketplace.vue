<template>
  <div class="mark-main" id="mark-main">
    <div class="">
      <div
        @click="chooseNav(index)"
        :style="{
          background: index === state ? '#27D1D1' : '',
          width: index === 1 ? '9.8125rem' : '',
        }"
        class="nav-button"
        :class="index !== 0 ? 'lesat' : ''"
        v-for="(item, index) in topNav"
        :key="index"
      >
        <img
          class="tab-img"
          :src="
            index === 0
              ? require('../../assets/mplace/pic_nft@2x.png')
              : require('../../assets/mplace/pic_Equipment@2x.png')
          "
          alt=""
        />
        {{ item }}
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import bus from "../../utils/bus";
export default {
  name: "Marketplace",
  data() {
    return {
      topNav: [
        "NFT",
        "Equipment",
        // "Pledge"
      ],
      state: 0,
    };
  },
  mounted() {
    var scrollDiv = document.getElementById("mark-main");
    scrollDiv.addEventListener("scroll", this.scroll);
  },
  methods: {
    chooseNav(index) {
      this.state = index;
      switch (index) {
        case 0:
          this.$router.push("./Market");
          break;
        case 1:
          this.$router.push("./Equipment");
          break;
        // case 2:
        //   this.$router.push("./Pledge");
        //   break;
        default:
          this.$router.push("./Market");
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
.mark-main {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #040923;
  //   border: 1px solid #fff;
  * {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 2.5rem;
    margin-top: 6.5rem;
    position: fixed;
  }
  .nav-button {
    display: flex;
    flex-direction: row;
    width: 7.5rem;
    height: 2.2rem;
    background: rgba(39, 209, 209, 0.24);
    color: #fff;
    border-radius: 0.3rem;
    line-height: 2.2rem;
    text-align: center;
    cursor: pointer;
    transition: 0.5s ease;
    font-size: 1rem;
  }
  .nav-button:hover {
    background: rgba(39, 209, 209, 1);
  }
  .lesat {
    margin-left: 1rem;
  }
  .tab-img {
    height: 3.75rem;
    margin-top: -1.55rem;
  }
}
</style>
