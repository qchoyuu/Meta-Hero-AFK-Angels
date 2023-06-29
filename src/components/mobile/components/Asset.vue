<template>
  <div class="asset">
    <div class="top-content">
      <div>
        <div class="t-title">Total Asset</div>
        <div class="t-value">≈ $938,541,000</div>
      </div>
      <div class="im-box">
        <img
          src="../../../assets/skills/pic_Asset@2x.png"
          class="techo"
          alt=""
        />
      </div>
    </div>
    <div class="rs-content">
      <div class="m-content">
        <div class="bnb">
          <div class="b-left">
            <div class="b-gold">
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="bnb-img"
                alt=""
              />
            </div>
            <div class="b-content">
              <div class="b-title">BNB</div>
              <div class="b-val">12,434,00</div>
              <div class="b-time">5 hours ago</div>
            </div>
          </div>
          <div class="right-bts">
            <div class="b-right">Buy Now</div>
          </div>
        </div>
        <div class="bnb">
          <div class="b-left">
            <div class="b-gold">
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="bnb-img"
                alt=""
              />
            </div>
            <div class="b-content">
              <div class="b-title">$SMHA</div>
              <div class="b-val">0</div>
              <div class="b-time">5 hours ago</div>
            </div>
          </div>
          <div class="right-bts">
            <div class="b-right">Buy Now</div>
            <div class="b-right-bt">Staking</div>
          </div>
        </div>
      </div>
      <div style="margin-top:1.6rem" class="bnb">
          <div class="b-left">
            <div class="b-gold">
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="bnb-img"
                alt=""
              />
            </div>
            <div class="b-content">
              <div class="b-title">MHA</div>
              <div class="b-val">0</div>
              <div class="b-time">5 hours ago</div>
            </div>
          </div>
          <div class="right-bts">
            <div class="b-right">Buy Now</div>
            <div class="b-right-bt">Staking</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Asset",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess: false,
    };
  },
  mounted() {},
  methods: {
    buyFunc() {
      this.buySuccess = true;
      console.log("购买成功");
    },
    openBox() {
      console.log("打开箱子");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-content {
    width: 83.5rem;
    height: 11rem;
    background: #000415;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    margin-top: 4.375rem;
    display: flex;
    justify-content: space-between;
    .t-title {
      color: #fff;
      font-size: 1.5rem;
      font-family: "mdem";
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 2.875rem;
    }
    .t-value {
      color: #7fffd8;
      font-size: 1.875rem;
      font-family: "mdem";
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 1rem;
    }
    .im-box {
      margin-left: 1rem;
      width: 16rem;
    }
    .techo {
      height: 16rem;
      margin-top: -5rem;
    }
  }
  .rs-content {
    margin-top: 1.5rem;
    .bnb {
      height: 11rem;
      width: 40.875rem;
      border-radius: 1rem;
      border: 1px solid #36374b;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .m-content {
      display: flex;
      width: 83.5rem;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .b-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 2.5rem;
    }
    .bnb-img {
      height: 3.375rem;
    }
    .b-content {
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 1rem;
      .b-title {
        color: #fff;
        font-family: "mdem";
        font-size: 1rem;
      }
      .b-val {
        font-family: "avpro";
        padding-top: 0.5rem;
        color: #fff;
      }
      .b-time {
        color: #a0a0a0;
        font-family: "avbook";
        padding-top: 0.5rem;
      }
    }
    .right-bts{
      display: flex;
      flex-direction: column;
      margin-right: 3.2rem;
    }
    .b-right {
      color: #fff;
      border-radius: 0.45rem;
      border: 1px solid #36374b;
      width: 6.625rem;
      height: 2.4rem;
      line-height: 2.6rem;
      background-image: linear-gradient(#1b2144, #040923);
      font-family: "mdem";
      cursor: pointer;
    }
    .b-right:hover {
      background: rgba(4, 9, 35, 0.2);
    }
    .b-right-bt{
      width: 6.625rem;
      height: 2.4rem;
      line-height: 2.6rem;
      font-family: "mdem";
      color: #fff;
      border-radius: 0.45rem;
      background: #27D1D1;
      margin-top: .75rem;
      cursor: pointer;
    }
    .b-right-bt:hover{
      background: rgba(39, 209, 209,.8);
    }
  }
}
</style>
