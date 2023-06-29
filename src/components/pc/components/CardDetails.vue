<template>
  <div class="detail">
    <div class="back" @click="goBack">
      <img class="back-img" src="../../../assets/mplace/btn_@2x.png" alt="" />
      Back
    </div>
    <div class="contents">
      <!-- leftcard -->
      <div class="leftcontent">
        <div class="left-box">
          <img
            :src="require('../../../assets/hero/' + imgUrl + '_y.png')"
            class="imgitem"
            alt=""
          />
          <div class="card-num">#{{ num }}</div>
          <img class="lev-img" :src="getLevel(level)" alt="" />
          <div class="cd-name">{{ name }}</div>
          <div class="bt-gold">
            <img
              src="../../../assets/newimg/Logo_Binance@2x.png"
              class="cd-gold"
              alt=""
            />
            <div>{{ price }}</div>
          </div>
          <div class="may-val">≈${{ mayVal }}</div>
        </div>
        <div class="bottombt">
          <div class="storeinfo" v-if="status === 0"></div>
          <div class="storeinfo" v-if="status === 2">
            <div>
              <div class="on-sale">
                <div class="on-sale-text">On Sale</div>
                <img
                  src="../../../assets/skills/组 76@2x.png"
                  class="gold"
                  alt=""
                />
                <div class="on-sale-value">0.128</div>
              </div>
              <div class="cancle-bt">Cancel Sale</div>
            </div>
          </div>
        </div>
      </div>
      <!-- rightcontent -->
      <div class="rightcontent">
        <div class="right-top">
          <div class="t-right-l">
            <div class="t-num">#{{ num }}</div>
            <div class="t-name-price">
              <div class="t-name">{{ name }}</div>
              <div class="t-price">
                <img
                  src="../../../assets/skills/组 76@2x.png"
                  class="golds"
                  alt=""
                />{{ price }}
              </div>
              <div class="BuyNowntf" @click="purchase()">Buy Now</div>
            </div>
          </div>
          <div class="sale" v-if="status === 1">Buy Now</div>
        </div>
        <div class="r-title">ABOUT</div>
        <div class="topaddress">
          <div class="ab-content">
            <div class="ab-item">
              <div class="owner">CLASS</div>
              <div class="ab-img">
                <img
                  src="../../../assets/market/组 23@2x.png"
                  class="cls"
                  alt=""
                /><span>{{ profession }}</span>
              </div>
            </div>
            <div class="ab-item paritys">
              <div class="owner">RARITY</div>
              <div class="ab-img">
                <img :src="getLevel(level)" class="t-level" alt="" /><span>{{
                  hreoity
                }}</span>
              </div>
            </div>
          </div>
          <div class="bt-owner">
            <div class="owner">Owner</div>
            <div class="address">{{ address }}</div>
          </div>
        </div>

        <div class="r-title">STATS</div>
        <div class="states">
          <div class="allstates">
            <div
              v-for="(item, index) in stateList"
              :key="index"
              class="state-item"
            >
              <div class="state-name">{{ item.name }}</div>
              <div class="state-bt">
                <img class="state-img" :src="item.img" alt="" />
                <div class="state-value">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="r-title">SKILL</div>
        <div class="skills">
          <div class="allstates">
            <div
              v-for="(item, index) in skills"
              :key="index"
              class="state-item-skill"
            >
              <img
                class="state-img-skill"
                :src="require('../../../assets/skill/' + item.image + '.png')"
                alt=""
              />
              <div class="state-bt-skill">
                <div class="state-name-skill">{{ item.name }}</div>
                <div class="state-value-skill">
                  {{ item.explain }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="r-title">HISTORY</div>
        <div class="his-tit">
          <div class="event">Event</div>
          <div class="hash">Tx hash</div>
          <div class="prices">Price</div>
        </div>
        <div class="history">
          <div class="left-line"></div>
          <div class="right-content">
            <div class="r-top">
              <div class="e-list"></div>
              <div class="e-hash"></div>
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="golde"
                alt=""
              />
              <span></span>
              <img src="../../../assets/skills/arr.png" class="last" alt="" />
            </div>
            <div class="r-form">
              <div class="form-content">
                <div class="formtit">From</div>
                <div class="from-addr"></div>
              </div>
              <div class="from-times"></div>
            </div>
          </div>
        </div>
        <div class="s-history">
          <div class="s-left-line"></div>
          <div class="right-content">
            <div class="s-r-top">
              <div class="e-list"></div>
              <div class="e-hash"></div>
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="golde"
                alt=""
              />
              <span></span>
              <img
                src="../../../assets/skills/btn_arrow.png"
                class="last"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sdk from "../../../utils/chanjssdk";
import { get, post } from "../../../request/http";
export default {
  name: "CardDetails",
  data() {
    return {
      address: "",
      imgUrl: "",
      name: "",
      num: "",
      price: "",
      status: 0,
      isShowGold: false,
      stateList: [
        {
          name: "HP",
          img: require("../../../assets/img/组 26@2x.png"),
          value: 644,
        },
        {
          name: "Physical Attack",
          img: require("../../../assets/img/组 22@2x.png"),
          value: 89,
        },
        {
          name: "Physical Defense",
          img: require("../../../assets/img/组 23@2x.png"),
          value: 61,
        },
        {
          name: "Magic Attack",
          img: require("../../../assets/img/组 24@2x.png"),
          value: 6,
        },
        {
          name: "Magic Defence",
          img: require("../../../assets/img/组 25@2x.png"),
          value: 41,
        },
        {
          name: "Accuracy",
          img: require("../../../assets/img/组 27@2x.png"),
          value: "0.1%",
        },
        {
          name: "Evasion",
          img: require("../../../assets/img/组 28@2x.png"),
          value: "6.1%",
        },
        {
          name: "Crit",
          img: require("../../../assets/img/组 30@2x.png"),
          value: "10.1%",
        },
        {
          name: "Crit Resist",
          img: require("../../../assets/img/组 29@2x.png"),
          value: "100.1%",
        },
      ],
      skills: [],
      isShowModal: false,
      mayVal: "",
      level: null,
      hreoity: "",
      heroname: "",
      hts: "",
      holder: "",
      profession: "",
      user: "",
    };
  },
  mounted() {
    this.imgUrl = this.$route.query.obj.appearanceCode; //形象appearanceCode
    this.status = this.$route.query.from;
    this.name = this.$route.query.obj.type; //英雄名
    this.num = this.$route.query.obj.number;
    this.price = this.$route.query.obj.hpr;
    this.mayVal = this.$route.query.obj.dollar;
    this.level = this.$route.query.obj.heroQuality; //稀有度
    this.jobb = this.$route.query.obj.job;
    this.address = this.$route.query.obj.address;
    this.heroname = this.$route.query.obj.name;
    this.skill1 = this.$route.query.obj.skill1;
    this.skill2 = this.$route.query.obj.skill2;
    this.skill3 = this.$route.query.obj.skill3;
    this.hts = this.$route.query.obj.hts;
    this.address = this.$route.query.obj.address;
    this.appearance = this.$route.query.obj.appearance;

    if (this.level == "1") {
      this.hreoity = "R";
    } else if (this.level == "2") {
      this.hreoity = "S";
    } else if (this.level == "3") {
      this.hreoity = "SR";
    } else if (this.level == "4") {
      this.hreoity = "SSR";
    } else if (this.level == "5") {
      this.hreoity = "UR";
    } else {
      this.hreoity = "EXR";
    }

    post("/client/api/hero/getHeroInfo", {
      heroId: this.num,
      quality: this.level,
      profession: this.jobb,
      appearance: this.appearance,
      name: this.heroname,
      heroSkill1: this.skill1,
      heroSkill2: this.skill2,
      heroSkill: this.skill3,
      hts: this.hts,
      holder: this.address,
    }).then((res) => {
      this.datasx = res.data.data.heroBaseAttributes;
      this.stateList[0].value = this.datasx.hp;
      this.stateList[1].value = this.datasx.physicalAttack;
      this.stateList[2].value = this.datasx.physicalDefense;
      this.stateList[3].value = this.datasx.magicAttack;
      this.stateList[4].value = this.datasx.magicDefence;
      this.stateList[5].value = this.datasx.accuracy;
      this.stateList[6].value = this.datasx.evasion;
      this.stateList[7].value = this.datasx.crit;
      this.stateList[8].value = this.datasx.critResist;
      this.profession = res.data.data.profession;
      console.log(res);
      if (res.data.data.heroSkillList2 != null) {
        this.skills.push(
          res.data.data.heroSkillList,
          res.data.data.heroSkillList1,
          res.data.data.heroSkillList2
        );
      } else {
        this.skills.push(
          res.data.data.heroSkillList,
          res.data.data.heroSkillList1
        );
      }
    });
  },
  methods: {
    getLevel(lev) {
      return lev === "1"
        ? require("../../../assets/newimg/r@2x.png")
        : lev === "2"
        ? require("../../../assets/newimg/s@2x.png")
        : lev === "3"
        ? require("../../../assets/newimg/sr@2x.png")
        : lev === "4"
        ? require("../../../assets/newimg/ssr@2x.png")
        : lev === "5"
        ? require("../../../assets/newimg/ur@2x.png")
        : require("../../../assets/newimg/exr@2x.png");
    },
    goBack() {
      history.back();
    },
    showModal() {
      this.isShowModal = true;
    },
    async purchase() {
      sdk.chainWeb3.connectMetamask();

      this.user = sdk.chainWeb3.getAccount(); //查自己

      let result = await sdk.Hero721.isApprovedForAll(sdk.HeroMarket.address);
      console.log(result);

      if (result == false) {
        await sdk.Hero721.setApprovalForAll(sdk.HeroMarket.address, true);
        console.log("Hero721.setApprovalForAll");
      }
      let ress = await sdk.HeroMarket.buy(this.num);
      console.log(ress, "-----------------购买合约调用");

      post("client/api/market/buyHero", {
        heroId: this.num,
        price: this.price,
        buyer: this.user,
        fromAddress: this.address,
        toAddress: this.user,
      }).then((res) => {
        console.log(res, "-----------hou");
      });

      history.back();
      this.$router("/Marketplace/market");
    },
  },
};
</script>

<style scoped lang="less">
.detail {
  height: 51.2rem;
  width: 98.5%;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: #040923;
  margin-top: 1rem;
  //   z-index: 99999;
  position: relative;
  .back {
    background: #13162b;
    width: 7.5rem;
    height: 2.2rem;
    line-height: 3rem;
    text-align: center;
    color: #999;
    margin-left: 22rem;
    margin-top: 2rem;
    cursor: pointer;
    border-radius: 0.45rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-family: "mdem";
    border: 1px solid #36374b;
    position: fixed;
    top: 12rem;
    left: 8.4rem;
  }
  .back-img {
    height: 1.5rem;
    padding-right: 0.3rem;
  }
  .back:hover {
    background: #1b2144;
  }
  .contents {
    width: 115.6rem;
    height: 51rem;
    display: flex;
    margin-top: -1rem;
    margin-left: 2.2rem;
    border: 1px solid #36374b;
    border-top: 0px;
    border-radius: 0px 0px 12px 12px;
    background-color: #03071c;
  }
  .leftcontent {
    margin-left: 28rem;
    position: fixed;
    margin-top: 6.75rem;
    .left-box {
      height: 22.3rem;
      width: 22.3rem;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .imgitem {
      height: 22.3rem;
      position: absolute;
      border-radius: 8px;
    }
    .card-num {
      position: absolute;
      color: #fff;
      transform: rotate(90deg);
      font-size: 1rem;
      font-family: "osb";
      margin-top: 1.2rem;
      text-align: center;
    }
    .lev-img {
      height: 4.3rem;
      position: absolute;
      margin-left: 16rem;
      margin-top: 0.1rem;
    }
    .cd-name {
      position: absolute;
      color: #fff;
      font-family: "osb";
      font-size: 1.5rem;
      margin-top: 16rem;
      width: 100%;
      text-shadow: 0px 0px 6px #070707;
    }
    .bt-gold {
      position: absolute;
      display: flex;
      margin-top: 18.6rem;
      color: #fff;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      text-shadow: 0px 0px 3px #000000;
      font-size: 1rem;
    }
    .cd-gold {
      height: 1.25rem;
      margin-right: 0.5rem;
    }
    .may-val {
      position: absolute;
      color: #fff;
      margin-top: 19.9rem;
      width: 100%;
      text-align: center;
      font-size: 0.75rem;
      text-shadow: 0px 0px 3px #000000;
    }
    .bottombt {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .storeinfo {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    .sale {
      width: 22.18rem;
      height: 2.6785rem;
      text-align: center;
      line-height: 2.7rem;
      border-radius: 0.3rem;
      cursor: pointer;
      background: #27d1d1;
      font-family: "mdem";
    }
    .order {
      background: #b102ff;
      width: 22.18rem;
      height: 2.6785rem;
      text-align: center;
      line-height: 2.7rem;
      border-radius: 0.3rem;
      cursor: pointer;
      margin-top: 1.5rem;
      font-family: "mdem";
    }
    .sale:hover {
      background: rgba(39, 209, 209, 0.5);
    }
    .order:hover {
      background: rgba(177, 2, 255, 0.5);
    }
  }
  .rightcontent {
    margin-left: 58rem;
    width: 38.75rem;
    margin-top: 6.3rem;
    overflow: scroll;
    .right-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .t-right-l {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .t-name-price {
      display: flex;
      margin-top: 0.6rem;
      font-family: "demibold";
    }
    .t-name {
      color: #fff;
      font-size: 1.5rem;
      font-family: "demibold";
      border-right: 1px solid #36374b;
      padding-right: 2rem;
    }
    .t-num {
      background: rgba(39, 209, 209, 1);
      height: 1.3rem;
      width: 4rem;
      border-radius: 0.25rem;
      font-size: 0.8rem;
      font-family: "avbook";
      line-height: 1.6rem;
      text-align: center;
    }
    .t-price {
      margin-left: 2rem;
      margin-top: -0.5rem;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
    }
    .sale {
      width: 9.1rem;
      height: 2.6785rem;
      text-align: center;
      background: #27d1d1;
      border-radius: 0.4rem;
      line-height: 2.7rem;
      cursor: pointer;
    }
    .sale:hover {
      background: rgba(39, 209, 209, 0.5);
    }
    .topaddress {
      border: 1px solid #36374b;
      background: rgba(19, 22, 43, 1);
      height: 8.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 2rem;
      font-size: 1.6rem;
      border-radius: 0.75rem;
      margin-top: 0.5rem;
    }
    .owner {
      color: #a0a0a0;
      font-size: 1rem;
      font-family: "avmed";
    }
    .bt-owner {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .ab-img {
      font-size: 1rem;
      font-family: "mdem";
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
    }
    .ab-content {
      display: flex;
    }
    .cls {
      height: 1.1rem;
      padding-right: 0.5rem;
    }
    .ab-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1rem;
    }
    .t-level {
      height: 1.5rem;
      margin-top: -0.5rem;
    }
    .paritys {
      margin-left: 8.43rem;
    }
    .address {
      padding-top: 0.2rem;
      font-size: 1rem;
      font-family: "mdem";
    }
    .states {
      background: #13162b;
      border-radius: 0.75rem;
      border: 1px solid #36374b;
      height: 19.1rem;
      margin-top: 0.5rem;
    }
    .stats {
      color: #fff;
      font-size: 1.5rem;
      display: flex;
      padding-left: 3.5rem;
      padding-top: 2.3rem;
    }
    .stats-skill {
      color: #fff;
      font-size: 1.5rem;
      display: flex;
      padding-left: 3.5rem;
      padding-top: 2.3rem;
    }
    .allstates {
      width: 33rem;
      padding-left: 3.5rem;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }
    .state-item {
      display: flex;
      flex-direction: column;
      width: 33%;
      text-align: start;
      margin-top: 2rem;
    }
    .state-item-skill {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      margin-top: 1rem;
    }
    .state-bt {
      display: flex;
      margin-top: 0.6rem;
    }
    .state-bt-skill {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      text-align: start;
      margin-left: 1.5rem;
    }
    .state-img {
      height: 1.6rem;
    }
    .state-img-skill {
      height: 2.5rem;
      margin-top: 0.8rem;
    }
    .state-value {
      padding-left: 1rem;
    }
    .state-name {
      font-size: 1rem;
      color: #a0a0a0;
      font-family: "mreg";
    }
    .state-name-skill {
      display: flex;
      justify-content: start;
      font-family: "mreg";
    }
    .state-value-skill {
      display: flex;
      justify-content: start;
      color: #27d1d1;
      font-size: 8px;
    }
    .skills {
      background: #13162b;
      border-radius: 0.75rem;
      border: 1px solid #36374b;
      margin-top: 0.5rem;
      height: 18rem;
    }
    .history {
      background: #13162b;
      border-radius: 0.75rem;
      border: 1px solid #36374b;
      margin-top: 0.5rem;
      height: 8rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .s-history {
      background: #13162b;
      border-radius: 0.75rem;
      border: 1px solid #36374b;
      margin-top: 0.75rem;
      height: 4rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2rem;
    }
    .s-left-line {
      height: 3rem;
      width: 0.31rem;
      background: #27d1d1;
      border-radius: 3px;
      margin-left: 0.5rem;
    }
    .left-line {
      height: 6.8rem;
      width: 0.31rem;
      background: #27d1d1;
      border-radius: 3px;
      margin-left: 0.5rem;
    }
    .his-tit {
      display: flex;
      flex-direction: row;
      justify-content: start;
      margin-top: 1rem;
    }
    .event {
      color: #27d1d1;
      padding-left: 1.875rem;
      font-size: 0.9rem;
      font-family: "avmed";
      width: 2.25rem;
    }
    .hash {
      color: #27d1d1;
      padding-left: 3.75rem;
      font-size: 0.9rem;
      font-family: "avmed";
      width: 10.75rem;
      text-align: start;
    }
    .prices {
      color: #27d1d1;
      padding-left: 6rem;
      font-size: 0.9rem;
      font-family: "avmed";
    }
    .topsale {
      border: 1px solid #36374b;
      border-radius: 6px;
      width: 80%;
      margin-left: 10%;
      background: #020021;
      margin-top: 2rem;
      padding-top: 1rem;
    }
    .goald {
      height: 1.5rem;
    }
    .t-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      align-items: center;
    }
    .l-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .lt-text {
      font-size: 1.25rem;
      padding-left: 1rem;
    }
    .r-content {
      color: #999999;
    }
    .bt-content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .bt-left {
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 1rem;
      width: 40%;
    }
    .bt-right {
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 1rem;
      width: 40%;
    }
    .text-style {
      color: #999999;
    }
    .bt-addr {
      padding-top: 0.6rem;
    }
    .right-content {
      font-size: 0.9rem;
      width: 31.56rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
    }
    .r-top {
      width: 100%;
      border-bottom: 1px solid #36374b;
      margin-left: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      line-height: 3rem;
    }
    .s-r-top {
      width: 100%;
      margin-left: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      height: 100%;
      line-height: 4.5rem;
    }
    .e-list {
      font-size: 0.9rem;
      font-family: "mdem";
      width: 2.25rem;
      text-align: start;
    }
    .e-hash {
      font-size: 0.9rem;
      font-family: "mdem";
      padding-left: 3.75rem;
      width: 10.75rem;
    }
    .last {
      height: 0.5rem;
      margin-left: 4rem;
    }
    .r-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-left: 1rem;
      width: 100%;
      padding-top: 0.5rem;
    }
    .form-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 0.5rem;
    }
    .formtit {
      font-size: 0.75rem;
      color: #27d1d1;
      font-family: "mdem";
    }
    .from-addr {
      font-size: 0.9rem;
      font-family: "mdem";
      padding-top: 0.2rem;
    }
    .from-times {
      color: #a0a0a0;
      font-family: "mdem";
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding-top: 1.5rem;
    }
  }
  .gold {
    height: 1.6rem;
    padding-left: 1rem;
  }
  .golds {
    height: 1.6rem;
    padding-left: 1rem;
    padding-right: 0.6rem;
  }
  .golde {
    height: 1.1rem;
    padding-left: 6rem;
    padding-right: 0.5rem;
  }
  .on-sale {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .on-sale-text {
    color: #fff;
    font-size: 1rem;
  }
  .on-sale-value {
    color: #fff;
    font-size: 1.375rem;
    padding-left: 1rem;
  }
  .cancle-bt {
    border: 1px solid #27d1d1;
    border-radius: 6px;
    height: 2.69rem;
    width: 22.18rem;
    line-height: 2.69rem;
    text-align: center;
    margin-top: 1.5rem;
    color: #27d1d1;
    cursor: pointer;
    font-family: "mdem";
  }
  .cancle-bt:hover {
    background: rgba(39, 209, 209, 0.6);
    color: #fff;
  }
  .modal {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0px;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .salebg {
    height: 32.5rem;
    width: 32rem;
    background: #2b2b2b;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-style {
    height: 15.4rem;
    margin-top: 4rem;
  }
  .sale-input {
    width: 19.125rem;
    margin-top: 2rem;
  }
  .modal /deep/ .el-input__inner {
    background: rgba(0, 0, 0, 0.4);
    border: none;
    height: 2.69rem;
    font-size: 0.9rem;
    color: #999999;
  }
  .aggbt {
    height: 2.69rem;
    width: 19.125rem;
    background: rgba(39, 209, 209, 0.5);
    border-radius: 4px;
    margin-top: 2rem;
    line-height: 2.69rem;
    cursor: pointer;
    color: #a0a0a0;
    font-family: "avpro";
  }
  .aggbt:hover {
    background: rgba(39, 209, 209, 0.2);
  }
  .bt-spain {
    margin-top: 1rem;
    font-size: 0.75rem;
    font-family: "avbook";
    color: #a0a0a0;
  }
  .r-title {
    color: #fff;
    font-size: 1rem;
    font-family: "demibold";
    display: flex;
    padding-top: 4rem;
  }
}

.BuyNowntf {
  width: 9.06rem;
  height: 2.68rem;
  background: #27d1d1;
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  font-size: 16px;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 2.68rem;
  margin-left: 10rem;
  cursor: pointer;
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

.rightcontent::-webkit-scrollbar {
  display: none;
}
</style>
