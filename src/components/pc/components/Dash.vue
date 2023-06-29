<template>
  <div class="box-1">
    <div class="box-2">
      <div class="box-3">
        <div class="tabTop">
          <table class="tab-box">
            <tr class="trTop">
              <td>Total</td>
              <td>Last 24h</td>
              <td>7 days</td>
              <td>30 days</td>
            </tr>
          </table>
        </div>

        <div class="right-top">
          <div class="rt-item">
            <img
              class="rt-img1"
              src="../../../assets/market/组 143@2x.png"
              alt=""
            />
            <div class="rt-content">
              <div class="rt-title">Total Sale</div>
              <div class="rt-count">
                <div class="val">{{ 0 }}</div>
                <div class="val-money"></div>
              </div>
            </div>
          </div>
          <div class="rt-item">
            <img
              class="rt-img2"
              src="../../../assets/market/zu43@2x.png"
              alt=""
            />
            <div class="rt-content">
              <div class="rt-title">Total Volume (BNB)</div>
              <div class="rt-count">
                <div class="val">{{ 0 }}</div>
                <div class="val-money">≈$0</div>
              </div>
            </div>
          </div>
          <div class="rt-item">
            <img
              class="rt-img1"
              src="../../../assets/market/组 144@2x.png"
              alt=""
            />
            <div class="rt-content">
              <div class="rt-title">Hightest Price (BNB)</div>
              <div class="rt-count">
                <div class="val">{{ 0 }}</div>
                <div class="val-money">≈$0</div>
              </div>
            </div>
          </div>
        </div>

        <div class="big-box">
          <p class="Averagesty">Average price of last 10 tradings</p>
          <div class="AverBOX">
            <div class="AverBOX-1">
              <p class="angspan">Angle</p>
              <img
                src="../../../assets/skills/组 76@2x.png"
                alt=""
                class="angleimg"
              />

              <div class="snbox">
                <span class="sn1"> &ensp;0</span>
                <span class="sn2"> ≈ $0</span>
              </div>
            </div>

            <div class="AverBOX-2">
              <p class="angspan">Equipment</p>
              <img
                src="../../../assets/skills/组 76@2x.png"
                alt=""
                class="angleimg"
              />

              <div class="snbox">
                <span class="sn1"> &ensp;0</span>
                <span class="sn2"> ≈ $0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-4">
        <p class="box4p">Total</p>
        <p class="boxMore">Show More</p>
        <div class="all-angles">
          <div
            class="angle-item"
            v-for="(item, index) in angleList"
            :key="index"
            :style="{ marginLeft: index % 4 == 0 ? '0' : '' }"
          >
            <div class="right-lines"></div>
            <div class="top-lines"></div>
            <div class="left-lines"></div>
            <div class="bottom-lines"></div>
            <img
              @click="toDetail(item)"
              :src="item.url"
              class="angle-bg"
              alt=""
            />
            <div class="card-num">#{{ item.num }}</div>
            <img class="lev-img" :src="getLevel(item.level)" alt="" />
            <div class="cd-name">{{ item.name }}</div>
            <div class="bt-gold">
              <img
                src="../../../assets/newimg/Logo_Binance@2x.png"
                class="cd-gold"
                alt=""
              />
              <div>{{ item.val }}</div>
            </div>
            <div class="may-val">≈{{ item.mayVal }}</div>
          </div>
        </div>
      </div>

      <div class="end-box">
        <p class="sold-p">Recently Sold</p>
        <div class="record-box" v-for="(item, index) in endlist" :key="index">
          <div class="soldimg-box">
            <img :src="item.url" alt="" class="soldimgs" />
          </div>

          <div class="transaction-box">
            <p class="transactionp">TAKASHA</p>
            &ensp;
            <span class="transactionsp"> #0084</span>
            <div class="bubox">
              <P class="bupp"
                >Buyer
                <span style="color: #a0a0a0" class="accpn">0x9079…cf3a</span>
              </P>
              <P class="sepp"
                >Seller
                <span style="color: #a0a0a0" class="accpn">0x9079…cf3a</span>
              </P>
            </div>
          </div>

          <div class="Price-box">
            <div class="prbox2">
              <img
                src="../../../assets/skills/组 76@2x.png"
                alt=""
                class="primg"
              />
              <p class="jgcs">
                <span class="ntfjg">0.128</span>
                <span class="yuedeng">≈ $13,3</span>
              </p>
              <p class="timegao">1 hour ago</p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/style/font.css";
export default {
  data() {
    return {
      activeName: "second",
      val: "Latest Sale",
      angleList: [
        {
          id: 0,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 5,
          url: require("../../../assets/newimg/Angle1@2x.png"),
        },
        {
          id: 1,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 6,
          url: require("../../../assets/newimg/Angle2@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
      ],
      endlist: [
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 2,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getLevel(lev) {
      return lev === 1
        ? require("../../../assets/newimg/r@2x.png")
        : lev === 2
        ? require("../../../assets/newimg/s@2x.png")
        : lev === 3
        ? require("../../../assets/newimg/sr@2x.png")
        : lev === 4
        ? require("../../../assets/newimg/ssr@2x.png")
        : lev === 5
        ? require("../../../assets/newimg/ur@2x.png")
        : require("../../../assets/newimg/exr@2x.png");
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.box-1 {
  width: 100%;
  height: 58rem;
  position: fixed;
  background: #040923;
  border-radius: 0px 0px 0px 0px;
  padding-top: 6rem;
}

.box-2 {
  width: 115rem;
  height: 54rem;
  background: #03071c;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  border: 1px solid #36374b;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  overflow: scroll;
}

.box-2::-webkit-scrollbar {
  display: none;
}

.box-3 {
  width: 62.75rem;
  height: 23.375rem;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  border: 1px solid #36374b;
  margin-left: 25.6rem;
  margin-top: 2.75rem;
}

.box-4 {
  width: 62.75rem;
  height: 25rem;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  border: 1px solid #36374b;
  margin-left: 25.6rem;
  margin-top: 2rem;
  position: relative;
}

.tabTop {
  height: 5rem;
  width: 62.75rem;
  border-bottom: 1px solid #36374b;
}

.trTop {
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: normal;
  color: #a0a0a0;
  line-height: 0rem;
  width: 50rem;
  /* margin-top: 2rem; */
}

td {
  width: 7rem;
  height: 4.5rem;
  border-bottom: 3px solid #27d1d1;
  cursor: pointer;
}

.tab-box {
  display: flex;
}

.right-top {
  width: 60.5rem;
  height: 9.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #36374b;
  margin-left: 1rem;
}
.rt-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.rt-img2 {
  height: 3.25rem;
  width: 3.25rem;
}
.rt-img1 {
  height: 2.2rem;
  width: 3rem;
}

.rt-content {
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.rt-title {
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  font-family: "demibold";
}

.rt-count {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: start;
  width: 100%;
}

.val {
  font-size: 1.875rem;
  color: #7fffd8;
}

.val-money {
  padding-left: 1.5rem;
  margin-bottom: 0.3rem;
  color: #8a8a8a;
}

.Averagesty {
  width: 22rem;
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
  margin-top: 2.5rem;
}

.AverBOX {
  display: flex;
  margin-bottom: 2rem;
  position: absolute;
  top: 1.5rem;
}

.AverBOX-1 {
  width: 26.56rem;
  height: 2.81rem;
  background: #13162b;
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-left: 2rem;
  line-height: 2.5rem;
  position: relative;
}

.AverBOX-2 {
  width: 26.56rem;
  height: 2.81rem;
  background: #13162b;
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-left: 5rem;
  line-height: 2.8rem;
  position: relative;
}
.big-box {
  position: relative;
}

.angspan {
  width: 2.75rem;
  height: 1.38rem;
  font-size: 1rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 0.4rem;
  padding-right: 9rem;
  display: inline-block;
  position: absolute;
  left: 3rem;
  top: 0.2rem;
}

.angleimg {
  height: 1.5rem;
  margin-left: 2rem;
  margin-top: 0.6rem;
}

.sn1 {
  width: 2.69rem;
  height: 1.38rem;
  font-size: 1rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
}

.sn2 {
  width: 5.44rem;
  height: 1.13rem;
  font-size: 0.81rem;
  font-family: "mreg";
  font-weight: 400;
  color: #8a8a8a;
  line-height: 0rem;
}

.snbox {
  display: inline-block;
  position: absolute;
  top: 0.1rem;
}

.box4p {
  width: 2.5rem;
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
  margin-left: 2rem;
  margin-top: 2rem;
}

.all-angles {
  margin-left: 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.angle-item {
  height: 18.3rem;
  width: 18.3rem;
  display: flex;
  flex-direction: row;
  margin-left: 1.5rem;
  position: relative;
}

.angle-item:hover .bottom-lines {
  border-top: 1px solid rgba(127, 255, 216, 1);
  width: 100%;
}
.angle-item:hover .top-lines {
  border-top: 1px solid rgba(127, 255, 216, 1);
  width: 100%;
}
.angle-item:hover .left-lines {
  border-top: 1px solid rgba(127, 255, 216, 1);
  height: 100%;
}
.angle-item:hover .right-lines {
  border-top: 1px solid rgba(127, 255, 216, 1);
  height: 100%;
}

.right-lines {
  width: 1px;
  height: 0px;
  border-radius: 5px;
  background-color: #a5fcda;
  top: 0px;
  right: 0px;
  transition: height 0.2s linear;
  position: absolute;
}

.top-lines {
  width: 0px;
  background-color: #a5fcda;
  right: 0px;
  top: -1px;
  transition: width 0.2s linear;
  position: absolute;
}

.left-lines {
  width: 1px;
  height: 0px;
  background-color: #a5fcda;
  left: 0px;
  bottom: 0px;
  position: absolute;
  transition: height 0.2s linear;
}

.bottom-lines {
  width: 0px;

  bottom: -1px;
  left: 0px;
  transition: width 0.3s linear;
  position: absolute;
}
.angle-bg {
  height: 18.3rem;
  border-radius: 8px;
}

.card-num {
  position: absolute;
  color: #fff;
  transform: rotate(90deg);
  font-size: 0.75rem;
  font-family: "osb";
  margin-top: 1rem;
  text-align: center;
}

.lev-img {
  height: 3.56rem;
  position: absolute;
  margin-left: 13rem;
  margin-top: 0.1rem;
}

.cd-name {
  position: absolute;
  color: #fff;
  font-family: "osb";
  font-size: 1.2rem;
  margin-top: 13rem;
  width: 100%;
  text-shadow: 0px 0px 6px #070707;
}

.bt-gold {
  position: absolute;
  display: flex;
  margin-top: 15.4rem;
  color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  text-shadow: 0px 0px 3px #000000;
}

.cd-gold {
  height: 1.25rem;
  margin-right: 0.3rem;
}

.may-val {
  position: absolute;
  color: #fff;
  margin-top: 16.7rem;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  text-shadow: 0px 0px 3px #000000;
}

.boxMore {
  width: 6.31rem;
  height: 1.88rem;
  background: rgba(19, 22, 43, 1);
  border-radius: 0.38rem 0.38rem 0.38rem 0.38rem;
  opacity: 1;
  position: absolute;
  top: 0.2rem;
  right: 3rem;
  font-size: 1rem;
  font-family: "avbook";
  font-weight: normal;
  color: #8a8a8a;
  line-height: 1.88rem;
}

.end-box {
  width: 62.75rem;
  height: 51.31rem;
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-left: 25.6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: scroll;
}

.end-box::-webkit-scrollbar {
  display: none;
}

.sold-p {
  width: 10rem;
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 1.56rem;
}
.record-box {
  width: 58.63rem;
  height: 7.81rem;
  background: #13162b;
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.soldimg-box {
  width: 5.13rem;
  height: 5.13rem;
  margin-left: 0.9rem;
}

.soldimgs {
  width: 5.13rem;
  height: 5.13rem;
}

.transaction-box {
  width: 21.13rem;
  height: 5.13rem;
  margin-left: 3rem;
  position: relative;
}

.Price-box {
  width: 10.13rem;
  height: 5.13rem;
  margin-left: 16.5rem;
}

.transactionp {
  width: 5.19rem;
  height: 1.56rem;
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
}

.transactionsp {
  font-size: 1.13rem;
  font-family: "mreg";
  font-weight: 400;
  color: #a0a0a0;
  line-height: 0rem;
  position: absolute;
  top: 1.1rem;
  left: 6rem;
}

.bubox {
  display: flex;
  position: absolute;
  top: 2rem;
}

.bupp {
  width: 10.4rem;
  height: 2.19rem;
  font-size: 0.88rem;
  font-family: "mreg";
  font-weight: 400;
  color: #81e23e;
  line-height: 2.19rem;
  margin: 0;
}

.sepp {
  width: 10.4rem;
  height: 2.19rem;
  font-size: 0.88rem;
  font-family: "mreg";
  font-weight: 400;
  color: #e23e3e;
  line-height: 2.19rem;
  margin: 0;
}

.accpn {
  display: inline-block;
  height: 2.19rem;
  width: 7rem;
}

.prbox2 {
  width: 8.5rem;
  display: flex;
  position: relative;
}
.primg {
  width: 1.1rem;
  height: 1.1rem;
  position: absolute;
  top: 1.1rem;
}
.jgcs {
  position: absolute;
  right: 0rem;
}

.ntfjg {
  font-size: 1.13rem;
  font-family: "demibold";
  font-weight: bold;
  color: #ffffff;
}

.timegao {
  font-size: 0.88rem;
  font-family: "mreg";
  font-weight: 400;
  color: #a0a0a0;
  line-height: 0rem;
  position: absolute;
  top: 3rem;
  right: 0;
}

.yuedeng {
  color: #8a8a8a;
  font-size: 0.81rem;
}
</style>