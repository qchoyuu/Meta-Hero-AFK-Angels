<template>
  <div class="box">
    <div v-show="isShowModal" class="modal" @click="isShowModal = false">
      <div class="salebg">
        <div class="top-title">Probability:Ten thousandth ratio</div>
        <table class="table" border="1" cellspacing="0">
          <tr class="head">
            <td class="tdstyle">Quality</td>
            <td class="tdstyle">N</td>
            <td class="tdstyle">R</td>
              <td class="tdstyle">SR</td>
            <td class="tdstyle">SSR</td>
            <td class="tdstyle">UR</td>
            <td class="tdstyle">EXP</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Ordinary</td>
            <td class="tdstyle">{{Quala[0]}}</td>
            <td class="tdstyle">{{Quala[1]}}</td>
              <td class="tdstyle">{{Quala[2]}}</td>
            <td class="tdstyle">{{Quala[3]}}</td>
            <td class="tdstyle">{{Quala[4]}}</td>
            <td class="tdstyle">{{Quala[5]}}</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Rare</td>
            <td class="tdstyle">{{Qualb[0]}}</td>
            <td class="tdstyle">{{Qualb[1]}}</td>
             <td class="tdstyle">{{Qualb[2]}}</td>
            <td class="tdstyle">{{Qualb[3]}}</td>
            <td class="tdstyle">{{Qualb[4]}}</td>
            <td class="tdstyle">{{Qualb[5]}}</td>
          </tr>
          <tr class="bd">
            <td class="tdstyle">Epic</td>
            <td class="tdstyle">{{Qualc[0]}}</td>
            <td class="tdstyle">{{Qualc[1]}}</td>
             <td class="tdstyle">{{Qualc[2]}}</td>
            <td class="tdstyle">{{Qualc[3]}}</td>
            <td class="tdstyle">{{Qualc[4]}}</td>
            <td class="tdstyle">{{Qualc[5]}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div v-show="isShowGold" class="modal" @click="isShowGold = false">
      <div v-if="!buySuccess" class="buy-gold" @click.stop>
        <img
          src="../../../assets/newimg/Logo_Binance@2x.png"
          class="buy-price"
          alt=""
        />
        <div class="item-price">{{ msgG }}</div>
        <div class="may-price">$200,000</div>
        <div class="modal-bt" @click.stop="buyFunc">Buy Now</div>
        <div class="modal-bottom">
          <div class="bt-left" @click="play()">Buy BNB</div>
          <div class="bt-right">Balance: {{ balancc }}</div>
        </div>
      </div>

      <div v-else class="buy-gold" @click.stop>
        <div class="success-title">Success</div>
        <img
          src="../../../assets/newimg/Pre Sale1@2x.png"
          class="success-box"
          alt=""
        />
        <div class="modal-bt1" @click.stop="openBox">Open Now</div>
      </div>
    </div>

    <!-- toptip -->
    <div class="topqus" @click="proba()">
      <div class="rightqus">
        <div class="question">?</div>
        <div>Probability</div>
      </div>
    </div>
    <!-- contents -->
    <div class="contents-box">
      <div class="box-item1 icon-cards__item">
        <div class="img-bg1">
          <video
            loop
            autoplay
            class="box-img"
          >
            <source src="../../../assets/time/Ordinary.mp4" type="video/mp4" />
          </video>

          <img
            src="../../../assets/time/frame_Ordinary.png"
            alt=""
            class="lan1"
          />
        </div>
        <div class="space-bt">
          <!-- <div class="btname">Ordinary</div> -->
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>{{ this.Price.ordinary }}</div>
          </div>
          <div class="space-buy" @click="fn()">Buy Now</div>
        </div>
      </div>
      <div class="box-item icon-cards__item">
        <div class="img-bg2">
          <!-- <img
            src="../../../assets/newimg/Pre Sale2@2x.png"
            class="box-img"
            alt=""
          /> -->

             <video
            loop
            autoplay
            class="box-img"
          >
            <source src="../../../assets/time/Rare.mp4" type="video/mp4" />
          </video>
      
          <img src="../../../assets/time/frame_Rare.png" alt="" class="lan2" />
        </div>
        <div class="space-bt">
          <!-- <div class="btname">Rare</div> -->
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>{{ this.Price.rare }}</div>
          </div>
          <div class="space-buy" @click="fn2()">Buy Now</div>
        </div>
      </div>
      <div class="box-item3 icon-cards__item">
        <div class="img-bg3">
          <!-- <img
            src="../../../assets/newimg/Pre Sale3@2x.png"
            class="box-img"
            alt=""
          /> -->

          <video
            loop
            autoplay
            class="box-img"
          >
            <source src="../../../assets/time/Epic.mp4" type="video/mp4" />
          </video>
      

          <img src="../../../assets/time/frame_Epic.png" alt="" class="lan3" />
        </div>
        <div class="space-bt">
          <!-- <div class="btname">Epic</div> -->
          <div class="bt-price">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="gold-img"
              alt=""
            />
            <div>{{ this.Price.epic }}</div>
          </div>
          <div class="space-buy" @click="fn5()">Buy Now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { number } from "echarts";
import sdk from "../../../utils/chanjssdk";
import { askFun } from "../../../utils/askFun";
import { get } from '../../../request/http';

export default {
  name: "Box",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess: false,
      msgG: "",
      Price: {
        ordinary: "",
        rare: "",
        epic: "",
      },
      Pbin: "",
      balan: {
        a: "",
        b: "",
        c: "",
      },
      balancc: "",
      buyboxher: number,
      butoken: "",
      getAccot: "",
      tokenid: "",
      resultt: {},
      Qualabc:[],
      Quala:"",
      Qualb:"",
      Qualc:""
    };
  },

  mounted() {
    // askFun('client/api/blindBox/getBlindBoxProbabiliy','get').then(ok=>{
    //   console.log('post',ok)
    // });
    //盲盒价格,
    //盲和列表
    sdk.chainWeb3.connectMetamask();
    setTimeout(() => {
      let P2 = sdk.HeroLogic.getHeroBoxPrice();
      P2.then((res) => {
        this.Price.ordinary = res[0];
        this.Price.rare = res[1];
        this.Price.epic = res[2];
        this.Pbin = res;
        let P = sdk.HeroLogic.getHeroBoxLimit();
        P.then((res) => {
          this.balan.a = res[0];
          this.balan.b = res[1];
          this.balan.c = res[2];
        });
      });
    }, 50);
  },
  methods: {
     play() {
      window.location.href = "https://pancakeswap.finance/swap"
    },
    async buyFunc() {
      sdk.chainWeb3.connectMetamask();
      //购买盲盒
      let buyboxx = await sdk.HeroLogic.buyHeroBox(this.buyboxher);
      this.tokenid = buyboxx;
      this.buySuccess = true;
      //破译
      let resu = await sdk.HeroLogic.decodeEventBuyHero(this.tokenid);
      this.tokenid = resu.tokenid;
      console.log(this.tokenid);

      //获取acc值
      // let res = await sdk.chainWeb3.getAccount();
      // this.getAccot = res;
      // console.log(this.getAccot)

      //获取所有tokenid
      // let ress = await sdk.Hero721.getTokens("0x066f8f91970e600035791f6f8522cf04820c75e3")
      // this.tokenid = ress;
      // console.log(this.tokenid)
    },

    //开盲盒
    async openBox() {
      let result = await sdk.HeroLogic.openHero(this.tokenid);
      this.resultt = result;
      console.log("打开箱子-----", this.resultt);
      let rrs = await sdk.HeroLogic.decodeEventOpenHero(this.resultt);
      console.log(rrs, "rrs---------------");
    },
    async fn() {
      this.isShowGold = true;
      this.msgG = this.Price.ordinary;
      this.balancc = this.balan.a;
      this.buyboxher = 1;
    },
    async fn2() {
      this.isShowGold = true;
      this.msgG = this.Price.rare;
      this.balancc = this.balan.b;
      this.buyboxher = 2;
    },
    async fn5() {
      this.isShowGold = true;
      this.msgG = this.Price.epic;
      this.balancc = this.balan.c;
      this.buyboxher = 3;
    },

    proba() {
        this.isShowModal = true
      //   let aa = this.axios({
      //   methods:"get",
      //   url:"http://192.168.167.14:8080/client/api/blindBox/getBlindBoxProbability"
      // })
      // aa.then((res) => {
      //   this.Qualabc = res.data.data
      //   this.Quala = this.Qualabc[0].probability
      //   let a = this.Quala.split(",")
      //   this.Quala = a;
      //   console.log(this.Quala)

      //   this.Qualb = this.Qualabc[1].probability
      //   let b = this.Qualb.split(",")
      //   this.Qualb = b;
      //   console.log(this.Qualb)

      //   this.Qualc = this.Qualabc[2].probability
      //   let c = this.Qualc.split(",")
      //   this.Qualc = c;
      //   console.log(this.Qualc)
      // })

      get(
        "795976/pet/findByStatus",
        {
          status:"3"
        }
      ).then((res) =>{
        console.log(res)
      })

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-image: url("../../../assets/time/bg_blind box_common.jpg");
  background-size: cover;
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
    height: 0.75rem;
    width: 0.75rem;
    font-size: 0.75rem;
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
    color: #a0a0a0;
    font-size: 1rem;
    border-radius: 4px;
    font-family: "avbook";
  }
  .img-bg1 {
    // background-image: linear-gradient(#1b2144, #040923);

    background: linear-gradient(#4a468f, #000000);
    height: 32.1rem;
    width: 22.45rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 4rem;
  }
  .img-bg2 {
    // background-image: linear-gradient(#1b2144, #040923);

    background: linear-gradient(#5d4475, #000000);
    height: 32.1rem;
    width: 22.45rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 4rem;
  }
  .img-bg3 {
    // background-image: linear-gradient(#1b2144, #040923);

    background: linear-gradient(#625a33, #000000);
    height: 32.1rem;
    width: 22.45rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 4rem;
  }

  .box-img {
    height: 32.1rem;
  }
  .gold-img {
    height: 1.5rem;
    padding-right: 0.5rem;
  }
  .space-bt {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 35.5rem;
  }
  .space-buy {
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.7rem;
    width: 15rem;
    line-height: 2.7rem;
    margin-top: 1.5rem;
    border-radius: 5px;
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
    background-size: 100% 100%;
    animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .box-item3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 3rem;
    background-size: 100% 100%;
    animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .box-item1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 100% 100%;
    animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
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
    height: 20.5rem;
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
    color: #27d1d1;
    text-decoration: underline;
  }
  .bt-right {
    padding-right: 2rem;
    color: #999999;
  }
  .success-title {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.6rem;
  }
  .success-box {
    height: 12rem;
    margin-top: 1rem;
  }
}

.lan1 {
  width: 23.3rem;
  height: 33.1rem;
  position: absolute;
  left: 22.7rem;
}
.lan2 {
  width: 23.3rem;
  height: 33.1rem;
  position: absolute;
  left: 48.1rem;
}
.lan3 {
  width: 23.3rem;
  height: 33.1rem;
  position: absolute;
  left: 73.6rem;
}
</style>
