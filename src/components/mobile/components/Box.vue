<template>
  <div class="box">
    <div v-show="isShowModal" class="modal" @click="isShowModal = false">
      <div class="salebg">
        <div class="top-title">Probability</div>
        <table class="table" border="1" cellspacing="0">
          <tr class="head">
            <td class="tdstyle">Quality</td>
            <td class="tdstyle">Drop</td>
            <td class="tdstyle">Probability</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Ordinary</td>
            <td class="tdstyle">Ordinary</td>
            <td class="tdstyle">Ordinary</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Rare</td>
            <td class="tdstyle">Rare</td>
            <td class="tdstyle">Rare</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Epic</td>
            <td class="tdstyle">Epic</td>
            <td class="tdstyle">Epic</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-show="isShowGold" class="modal" @click="isShowGold = false">
      <div v-if="!buySuccess" class="buy-gold"  @click.stop>
        <img
          src="../../../assets/newimg/Logo_Binance@2x.png"
          class="buy-price"
          alt=""
        />
        <div class="item-price">20</div>
        <div class="may-price">≈2000,00</div>
        <div class="modal-bt" @click.stop="buyFunc">Buy Now</div>
        <div class="modal-bottom">
          <div class="bt-left">Buy BNB</div>
          <div class="bt-right">Balance: 15</div>
        </div>
      </div>
      <div v-else class="buy-gold"  @click.stop>
        <div class="success-title">Success</div>
        <img src="../../../assets/newimg/Pre Sale1@2x.png" class="success-box" alt="">
        <div class="modal-bt1" @click.stop="openBox">Open Now</div>
      </div>
    </div>
    <!-- toptip -->
    <div class="topqus" @click="isShowModal = true">
      <div class="rightqus">
        <div class="question">?</div>
        <div>Probability</div>
      </div>
    </div>
    <!-- contents -->
    <div class="contents-box">
      <div class="box-item1">
        <div class="img-bg">
          <img src="../../../assets/newimg/Pre Sale1@2x.png" class="box-img" alt="" />
        </div>
        <div class="space-bt">
          <div class="btname">Ordinary</div>
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>10</div>
          </div>
          <div class="space-buy" @click="isShowGold = true">Buy Now</div>
        </div>
      </div>
      <div class="box-item">
        <div class="img-bg">
          <img src="../../../assets/newimg/Pre Sale2@2x.png" class="box-img" alt="" />
        </div>
        <div class="space-bt">
          <div class="btname">Ordinary</div>
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>10</div>
          </div>
          <div class="space-buy">Buy Now</div>
        </div>
      </div>
      <div class="box-item">
        <div class="img-bg">
          <img src="../../../assets/newimg/Pre Sale3@2x.png" class="box-img" alt="" />
        </div>
        <div class="space-bt">
          <div class="btname">Ordinary</div>
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>10</div>
          </div>
          <div class="space-buy">Buy Now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess:false
    };
  },
  mounted() {},
  methods: {
    buyFunc(){
      this.buySuccess = true
      console.log('购买成功');
    },
    openBox(){
      console.log("打开箱子");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  min-height: 100vh;
  background: #040923;
  flex-direction: column;
  align-items: center;
  .topqus {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10rem;
    width: 87rem;
    justify-content: end;
    cursor: pointer;
  }
  .question {
    border: 1px solid #999999;
    border-radius: 100%;
    height: .75rem;
    width: .75rem;
    font-size: .75rem;
    margin-top: -0.2rem;
    margin-right: 0.2rem;
    line-height: 1rem;
  }
  .rightqus {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: linear-gradient(#1b2144, #040923);
    height: 2.1rem;
    width: 7.5rem;
    justify-content: center;
    color: #A0A0A0;
    font-size: 1rem;
    border-radius: 4px;
    font-family: "avbook";
  }
  .img-bg {
    background-image: linear-gradient(#1b2144, #040923);
    height: 23.7rem;
    width: 23.7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 4rem;
  }
  .box-img {
    height: 17.25rem;
  }
  .gold-img {
    height: 1.5rem;
    padding-right: .5rem;
  }
  .space-bt {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  .space-buy {
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.7rem;
    width: 19.125rem;
    line-height: 2.7rem;
    margin-top: 1.5rem;
  }
  .btname {
    font-size: 1.5rem;
  }
  .bt-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    font-size: 1.375rem;
  }
  .contents-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .box-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 3rem;
  }
  .box-item1 {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .salebg {
    background: rgba(44, 44, 44, 0.95);
    height: 20rem;
    width: 42rem;
    border-radius: 11px;
  }
  .top-title {
    color: #fff;
    display: flex;
    padding-left: 1.5rem;
    padding-top: 2rem;
    font-size: 1rem;
  }
  .table {
    width: 39rem;
    border: 1px solid #000;
    margin-left: 1.5rem;
    margin-top: 1rem;
  }
  .head {
    border: 1px solid #000;
    color: #999999;
    font-size: 1.1rem;
  }
  .bd {
    color: #fff;
  }
  .tdstyle {
    height: 3rem;
  }
  .buy-gold {
    background: #2b2b2b;
    height: 22rem;
    width: 22rem;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buy-price {
    height: 4rem;
    margin-top: 3rem;
  }
  .item-price {
    color: #fff;
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .may-price {
    font-size: 1rem;
    color: #a0a0a0;
    margin-top: 0.5rem;
  }
  .modal-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.5rem;
  }
  .modal-bt {
    color: #fff;
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.5rem;
    width: 18rem;
    line-height: 2.6rem;
    margin-top: 3rem;
  }
    .modal-bt1 {
    color: #fff;
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.5rem;
    width: 18rem;
    line-height: 2.6rem;
    margin-top: 1rem;
  }
  .bt-left {
    padding-left: 2rem;
    color: #27D1D1;
    text-decoration:underline;
  }
  .bt-right {
    padding-right: 2rem;
    color: #999999;
  }
  .success-title{
    margin-top: 2rem;
    color: #fff;
    font-size: 1.6rem;
  }
  .success-box{
    height: 12rem;
    margin-top: 1rem;
  }
}
</style>
