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

    <div v-show="isShowGold" class="modal" @click.stop="test()">
      <div v-if="buySuccess == '1'" class="buy-gold" @click.stop>
        <div class="Gbxx" @click="Gbxx">
          ×
        </div>
        <img
          src="../../../assets/people/Logo_Binance@2x.png"
          class="buy-price"
          alt=""
        />
        <div class="item-price">{{ msgG }}</div>
        <div class="may-price">≈${{ mayVal }}</div>
        <div class="modal-bt" @click.stop="buyFunc">Buy Now</div>
        <div class="modal-bottom">
          <div class="bt-left" @click="play()">Buy BNB</div>
          <div class="bt-right">Balance: {{ balancc }}</div>
        </div>
      </div>


        <!-- 打开箱子弹出框 -->
      <!-- <div v-else-if="buySuccess == '2'" class="buy-gold" @click.stop>
        <div class="success-title">Success</div>
        <img :src="imgSrc" class="success-box" alt="" />
        <div class="modal-bt1" @click.stop="openBox">Open Now</div>
      </div> -->

      <!-- 打开箱子抖一抖弹出框 -->
      <!-- <div v-else-if="buySuccess == '3'" class="buy-gold2" @click.stop>
        <div class="success-title2" @click="gbfn()">
          NFT Blind Box Opening...
          <img src="" alt="" />
        </div>

        <video loop autoplay muted class="success-box2">
          <source :src="imgSrc2" type="video/mp4" />
        </video>
      </div> -->


      <div v-else-if="buySuccess == '4'" class="buy-gold3" @click.stop>
        <div class="success-title2">
          <!-- <div class="card-num">#{{ tokenid }}</div> -->
           <!-- :src="require('../../../assets/2x/' + appear + '@2x.jpg')" -->
          <img :src="require('../../../assets/equip/zhuangbei_005.png')" class="Nftimg"/>
          <!-- <div class="cd-name">{{nickname}}</div>
          <img class="lev-img" :src="getLevel(level)" alt="" /> -->

        </div>
        <div class="modal-btt" @click="NTFbutcli()">Click to Reveal</div>
      </div>
    </div>

    <!-- <div class="bianimg">
      <img
        src="../../../assets/time/ino_bgline1.png"
        alt=""
        class="bianbox"
        @click="fnnn()"
      />
    </div>

    <div>
      <img src="../../../assets/time/ino_bgline2.png" alt="" class="ceming" />
    </div> -->

    <!-- toptip -->
    <div class="topqus" @click="proba()">
      <div class="rightqus"></div>
    </div>
    <!-- contents -->
    <div class="contents-box">
      <div class="box-item1 icon-cards__item">
        <div class="img-bg1">
          <video loop autoplay muted class="box-img">
            <source src="../../../assets/time/Ordinary.mp4" type="video/mp4" />
          </video>

          <img
            src="../../../assets/time/frame_Ordinary.png"
            alt=""
            class="lan1"
          />
        </div>
        <div class="space-bt">
          <div class="bt-price">
            <img
              src="../../../assets/people/Logo_Binance@2x.png"
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
          <video loop autoplay muted class="box-img">
            <source src="../../../assets/time/Rare.mp4" type="video/mp4" />
          </video>

          <img src="../../../assets/time/frame_Rare.png" alt="" class="lan2" />
        </div>
        <div class="space-bt">
          <div class="bt-price">
            <img
              src="../../../assets/people/Logo_Binance@2x.png"
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
          <video loop autoplay muted class="box-img">
            <source src="../../../assets/time/Epic.mp4" type="video/mp4" />
          </video>
          <img src="../../../assets/time/frame_Epic.png" alt="" class="lan3" />
        </div>
        <div class="space-bt">
          <div class="bt-price">
            <img
              src="../../../assets/people/Logo_Binance@2x.png"
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
import blue from "../../../assets/time/lanse.mp4";
import pink from "../../../assets/time/fense.mp4";
import yellow from "../../../assets/time/huangse.mp4";
import { get,post } from '../../../request/http';
import bus from '../../../utils/bus';


export default {
  name: "Box",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess: "",
      isShowww: false,
      isOpennow: "",
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
      isCLickBuy: false,
      imgSrc2: "",
      imgSrc: "",
      isShowww: false,
      appear: "11011",
      nickid:"",
      nickname:"",
      level:"1",
      job:"",
      owner:"",
      skill1:"",
      skill2:"",
      mayVal:"",
      boxmay:"",

      NFTstr:{
        IDs:"",
        tokenIDs:"",
        imgS:"",
        Gra:""
      }
    };
  },

  async mounted() {

    //bnb转换美元接口
     get(
        "https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=YourApiKeyToken"
      ).then((res)=>{   
        this.boxmay = res.data.result.ethusd
      })


    //钱包加载调用
    sdk.chainWeb3.connectMetamask(); 
    setTimeout(() => {

      //盲盒价格,
      let P2 = sdk.EquipLogic.getEquipBoxPrice(); 
      P2.then((res) => {
        this.Price.ordinary = res[0];
        this.Price.rare = res[1];
        this.Price.epic = res[2];
      });
    }, 50);
  },


  methods: {

    //点击跳转购买币
    play() {
      window.location.href = "https://pancakeswap.finance/swap"; 
    },

    //购买盲盒
    async buyFunc() { 

      //购买不能多次提交
      if (this.isCLickBuy) return;  
      this.isCLickBuy = true;

     //购买盲盒成功后返回
    let ress = await sdk.EquipLogic.buyEquipBox(this.buyboxher);
    console.log("EquipLogic.buyEquipBox", ress);

    let r = await sdk.EquipLogic.decodeEventBuyEquip(ress)
    console.log("EquipLogic.buyEquipBox event ", r);   

      //获取acc值
      let res = await sdk.chainWeb3.getAccount();          
      this.getAccot = res;

      //后台添加购买盲盒接口
      post(
        "client/api/blindBox/buyEquipBlindBox",
        {
          type:this.buyboxher,
          price:this.msgG,
          equipId:this.tokenid,
          holder:this.getAccot
        }).then((res) => {
          console.log(res,"------------添加购买盲盒记录")
          this.isShowGold = true;
          this.buySuccess = "4";   
        })

      
      //跳转开盲盒弹框
    },

    async fn() {
      this.isShowGold = true;
      this.buySuccess = "1";
      this.imgSrc = require("../../../assets/box/1.png");
      this.msgG = this.Price.ordinary;
      this.mayVal = (this.boxmay * this.Price.ordinary).toFixed(3)
      this.balancc = this.balan.a;
      this.buyboxher = 1;
    },
    async fn2() {
      this.isShowGold = true;
      this.buySuccess = "1";
      this.imgSrc = require("../../../assets/box/2.png");
      this.msgG = this.Price.rare;
      this.mayVal = (this.boxmay * this.Price.rare).toFixed(3)
      this.balancc = this.balan.b;
      this.buyboxher = 2;
    },
    async fn5() {
      this.isShowGold = true;
      this.buySuccess = "1";
      this.imgSrc = require("../../../assets/box/3.png");
      this.msgG = this.Price.epic;
      this.mayVal = (this.boxmay * this.Price.epic).toFixed(3)
      this.balancc = this.balan.c;
      this.buyboxher = 3;
    },
    NTFbutcli() {
      bus.$emit("NewNFTonj",this.NFTstr)
      this.$router.push("../Wallet/nft");
    },
    test() {
      this.isCLickBuy = this.isShowGold = true;
    },
    Gbxx(){
      this.isCLickBuy = this.isShowGold = false
    },

    gbfn() {
      this.isShowGold = false;
    },
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: #040923;
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
    // margin-top: 64.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 38em;
  }
  .space-buy {
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.7rem;
    width: 15rem;
    line-height: 2.7rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    font-family: "demibold";
    cursor: pointer;
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
    position: relative;
  }
  .buy-gold2 {
    background: #050a24;
    height: 22rem;
    width: 22rem;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .buy-gold3 {
    background: #2b2b2b;
    width: 28.69rem;
    height: 31.19rem;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor:pointer;
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
    font-family: "demibold";
    cursor: pointer;
  }
  .modal-btt {
    color: #fff;
    background: url("../../../assets/box/BTN_LOGIN@2x.png");
    background-size: cover;
    height: 2.5rem;
    width: 18rem;
    line-height: 2.6rem;
    margin-top: 23rem;
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
    cursor: pointer;
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

  .success-title2 {
    margin-top: 2rem;
    color: #fff;
    font-size: 12px;
    z-index: 999;
  }

  .success-box {
    height: 12rem;
    margin-top: 1rem;
    width: 12rem;
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

.bianbox {
  width: 2rem;
  height: 41.5rem;
  position: absolute;
  left: 0rem;
  top: 74rem;
}

.ceming {
  width: 53rem;
  height: 4rem;
  position: absolute;
  // top: 114.8rem;
  left: 0rem;
  bottom: -65rem;
}

.buy-boxx {
  width: 216px;
  height: 25px;
  font-size: 18px;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #ffffff;
  line-height: 0px;
  margin-top: 4rem;
}

.success-box2 {
  height: 22rem;
  position: absolute;
  top: 0;
}

.Nftimg {
  width: 18.31rem;
  height: 18.31rem;
  position: absolute;
  left: 5rem;
  top: 4rem;
  border-radius: 0.5rem;
}

.el-row {
  position: absolute;
  top: 37rem;
}

.card-num {
  position: absolute;
  color: #fff;
  transform: rotate(90deg);
  font-size: 0.75rem;
  font-family: "osb";
  margin-top: 3rem;
  text-align: center;
  z-index: 99;
  left: 5rem;
}

  .cd-name {
    position: absolute;
    color: #fff;
    font-family: "osb";
    font-size: 1.2rem;
    margin-top: 15rem;
    width: 40%;
    left: 8.5rem;
    text-shadow: 0px 0px 6px #070707;
  }

 .lev-img {
    height: 3.56rem;
    position: absolute;
    margin-left: 4.1rem;
    margin-top: 2rem;
  }

  .Gbxx{
    color: #ffff;
    font-size: 2.5rem;
    position: absolute;
    right: 1.5rem;
    cursor:pointer;
  }
</style>
