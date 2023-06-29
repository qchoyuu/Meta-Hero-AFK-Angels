<template>
  <div id="loading" class="loading">
    <div class="center-style">
      <img class="lef" src="../../assets/loading/pic_line1@2x.png" alt="" />
      <div class="center-item">
        <img class="circ" src="../../assets/loading/pic_bg@2x.png" alt="" />
        <img
          class="chib"
          src="../../assets/loading/pic_angle wing@2x.png"
          alt=""
        />
      </div>
      <img class="lef" src="../../assets/loading/pic_line2@2x.png" alt="" />
    </div>
    <div class="loading-text">loading<span class="shadow_dot"></span></div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.loading {
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#151323, #242269);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .center-style {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center-item {
    display: flex;
    height: 12.3rem;
    width: 12.3rem;
    align-items: center;
    justify-content: center;
  }
  .lef {
    height: 0.825rem;
  }
  .circ {
    position: absolute;
    height: 12.3rem;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 10s;
    -webkit-animation: rotate 10s linear infinite;
    -moz-animation: rotate 10s linear infinite;
    -o-animation: rotate 10s linear infinite;
    animation: rotate 10s linear infinite;
  }
  .chib {
    height: 2.68rem;
  }
  .loading-text {
    color: #fff;
    font-size: 1rem;
    font-weight: "avbook";
  }
  .shadow_dot {
    display: inline-block;
    min-width: 2px;
    min-height: 2px;
    box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;
    -webkit-animation: shadow_dot 4s infinite step-start both;
    animation: shadow_dot 1.5s infinite step-start both;
  }
  .shadow_dot:before {
    content: "...";
  } /* IE8 */
  .shadow_dot::before {
    content: "";
  }
  :root .shadow_dot {
    margin-right: 8px;
  } /* IE9+,FF,CH,OP,SF */

  @-webkit-keyframes shadow_dot {
    25% {
      box-shadow: none;
    }
    50% {
      box-shadow: 2px 0 currentColor;
    }
    75% {
      box-shadow: 2px 0 currentColor, 6px 0 currentColor;
    }
  }
  @keyframes shadow_dot {
    25% {
      box-shadow: none;
    }
    50% {
      box-shadow: 2px 0 currentColor;
    }
    75% {
      box-shadow: 2px 0 currentColor, 6px 0 currentColor;
    }
  }
}
</style>


