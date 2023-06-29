<template>
  <div class="claim">
    <div class="top-content">
      <div class="tt-stle">
        <img
          src="../../../assets/mplace/zuanshii.png"
          class="zuanshis"
          alt=""
        />
        <div>
          <div class="t-title">Total Asset</div>
          <div class="t-value" style="color:#fff">0</div>
        </div>
      </div>
      <div>
        <div class="t-title">Extractable MHA ≈ $0</div>
        <div class="t-value">0</div>
      </div>
      <div class="im-box">
        <img src="../../../assets/skills/pic_mha@2x.png" class="techo" alt="" />
      </div>
    </div>
    <div class="od-list">Order List</div>
    <div v-if="list.length === 0" class="nodata">
      <img
        class="empty-data"
        src="../../../assets/skills/pic_no data@2x.png"
        alt=""
      />
      <div class="no-data">no data~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "claim",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess: false,
      list: [],
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
.claim {
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
      width: 16.5rem;
    }
    .techo {
      height: 16rem;
      margin-top: -5rem;
    }
      .tt-stle {
    display: flex;
    flex-direction: row;
  }
  .zuanshis {
    height: 2.75rem;
    margin-top: 4.12rem;
    margin-left: 2rem;
  }
  }
  .od-list {
    color: #fff;
    padding-top: 2rem;
    text-align: start;
    width: 83.5rem;
    font-size: 1.5rem;
    font-family: "mdem";
  }
  .nodata {
    color: #fff;
    width: 83.5rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .empty-data {
      height: 22.125rem;
    }
    .no-data {
      color: #8a8a8a;
      font-size: 1rem;
      font-family: "avbook";
      margin-top: -2.5rem;
    }
  }

}
</style>
