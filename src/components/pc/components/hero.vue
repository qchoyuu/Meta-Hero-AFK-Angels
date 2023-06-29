<template>
  <div class="market">
    <!-- left -->
    <div class="left-box">
      <!-- left-top -->
      <div class="left-t-style">
        <div class="filters">Filter</div>
        <div class="clean">Clear</div>
      </div>
      <!-- left-content -->
      <div class="left-content">
        <div class="left-search">
          <el-input
            v-model="angleId"
            size="mini"
            suffix-icon="el-icon-search"
            placeholder="Search by NFT ID"
            @change="search"
            @input="changeValue"
          ></el-input>
          <div class="serch-bt" @click.Enter="search"></div>
        </div>
        <!-- CLASSES -->
        <div>
          <div class="content-title">CLASS</div>
          <div class="clabox">
            <el-checkbox-group
              class="checkdemos"
              v-model="classList"
              @change="ckeckbox()"
            >
              <el-checkbox label="1" class="checkdemo firstcheck">
                <img
                  src="../../../assets/mplace/组 23@2x.png"
                  class="grading-imgss"
                  alt=""
                />
                Mage&nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="2" class="checkdemo firstcheck"
                ><img
                  src="../../../assets/mplace/路径 234@2x.png"
                  class="grading-imgs"
                  alt=""
                />Ranger&nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="3" class="checkdemo"
                ><img
                  src="../../../assets/mplace/组 26@2x.png"
                  class="grading-imgss"
                  alt=""
                />Warrior</el-checkbox
              >
              <el-checkbox label="4" class="checkdemo"
                ><img
                  src="../../../assets/mplace/组 27@2x.png"
                  class="grading-imgs"
                  alt=""
                />Assassin</el-checkbox
              >
              <el-checkbox label="5" class="checkdemo"
                ><img
                  src="../../../assets/mplace/组 29@2x.png"
                  class="grading-imgs"
                  alt=""
                />Priest&nbsp;&nbsp;</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
        <!-- PARITIES -->
        <div class="Parbox">
          <div class="content-title">RARITY</div>
          <div class="left-slider">
            <el-slider
              :show-tooltip="false"
              v-model="value2"
              :max="6"
              :marks="peMarks"
              input-size="small"
              @change="huadong()"
            >
            </el-slider>
          </div>
        </div>
        <!-- stars -->
        <div>
          <div class="content-title">STAR</div>
          <div class="slider-style">
            <el-slider
              input-size="small"
              v-model="sliderValue"
              range
              show-stops
              :max="10"
              :marks="marks"
            >
            </el-slider>
          </div>
        </div>
        <!-- STATUS -->
        <div>
          <div class="content-title">STATUS</div>
          <div>
            <el-checkbox-group class="checkdemos" v-model="classList">
              <el-checkbox label="sale" class="checkdemo firstcheck"
                >For Sale&nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="nosale" class="checkdemo firstcheck"
                >Not For Sale&nbsp;&nbsp;</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div style="height: 4rem"></div>
    </div>
    <!-- right -->
    <div class="right-box">
      <!-- righttop -->

      <!-- rightcontent -->
      <div class="right-content">
        <div class="content-top">
          <div class="angle-count">{{ angleCount }} Angles</div>
          <div class="right-search">
            <el-select :popper-append-to-body="false" v-model="val">
              <el-option label="Latest Sale" value="Latest Sale"
                >Latest Sale</el-option
              >
              <el-option label="Lowest Price" value="Lowest Price"
                >Lowest Price</el-option
              >
              <el-option label="Highest Price" value="Highest Price"
                >Highest Price</el-option
              >
            </el-select>
          </div>
        </div>
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
            <!-- :src="require('../../../assets/1x/'+item.appearance+'.png')" -->

            <img
              @click="toDetail(item)"
              :src="
                require('../../../assets/hero/' +
                  item.appearanceCode +
                  '_y.png')
              "
              class="angle-bg"
              alt=""
            />
            <div class="card-num">#{{ item.number }}</div>
            <img class="lev-img" :src="getLevel(item.heroQuality)" alt="" />
            <div class="cd-name">{{ item.type }}</div>
            <div class="bt-gold">
              <img
                src="../../../assets/newimg/Logo_Binance@2x.png"
                class="cd-gold"
                alt=""
              />
              <div>{{ item.hpr }}</div>
            </div>
            <div class="may-val">≈${{ item.dollar }}</div>
          </div>
        </div>

        <!-- 分页按钮 -->
        <div class="pageation">
          <div class="lastpage" @click="lastpage">←</div>
          <div class="pagename">Page</div>
          <div class="page">
            <el-input v-model="queryParams.pageNum"></el-input>
          </div>
          <div class="allpages">of {{ pages }}</div>
          <div class="nextpage" @click="nextpage">→</div>
        </div>
        <div class="bt-bt">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import sdk from "../../../utils/chanjssdk";
import { get, post } from "../../../request/http";
export default {
  name: "Market",
  data() {
    return {
      val: "Latest Sale",
      value2: 0,
      checkList: [],
      classList: [],
      sliderValue: [0, 1],
      peMarks: {
        0: {
          style: {
            color: "#fff",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "All"),
        },
        1: {
          style: {
            color: "#3188FF",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "R"),
        },
        2: {
          style: {
            color: "#3188FF",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "S"),
        },
        3: {
          style: {
            color: "#FF7600",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "SR"),
        },
        4: {
          style: {
            color: "#FFF03B",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "SSR"),
        },
        5: {
          style: {
            color: "#FF0000",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "UR"),
        },
        6: {
          style: {
            color: "#00FFCE",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "EXR"),
        },
      },
      marks: {
        0: {
          style: {
            color: "#fff",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "0"),
        },
        10: {
          style: {
            color: "#fff",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "10"),
        },
      },
      totalSale: 0,
      totalVol: 0,
      hightestPrice: 0,
      angleCount: "",
      angleId: null,
      angleList: [],
      tim: null,
      number: 0,
      tweenedNumber: 0,
      pages: 100,
      queryParams: {
        pageNum: 1,
        pageSize: 16,
      },
      pageIndex: 1,
      daole: "",
      mayVal: "",
    };
  },
  computed: {
    totalSales: function () {
      if (!this.totalSale) return "0.00";
      // 将数值截取，保留两位小数
      this.totalSale = this.totalSale.toFixed(0);
      // 获取整数部分
      const intPart = Math.trunc(this.totalSale);
      // 整数部分处理，增加,
      const intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      // 预定义小数部分
      let floatPart = ".00";
      // 将数值截取为小数部分和整数部分
      const valueArray = this.totalSale.toString().split(".");
      if (valueArray.length === 2) {
        // 有小数部分
        floatPart = valueArray[1].toString(); // 取得小数部分
        return intPartFormat;
        // + "." + floatPart;
      }
      return intPartFormat;
      // + floatPart;
    },
    totalVols: function () {
      if (!this.totalVol) return "0.00";
      // 将数值截取，保留两位小数
      this.totalVol = this.totalVol.toFixed(0);
      // 获取整数部分
      const intPart = Math.trunc(this.totalVol);
      // 整数部分处理，增加,
      const intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      // 预定义小数部分
      let floatPart = ".00";
      // 将数值截取为小数部分和整数部分
      const valueArray = this.totalVol.toString().split(".");
      if (valueArray.length === 2) {
        // 有小数部分
        floatPart = valueArray[1].toString(); // 取得小数部分
        return intPartFormat;
        // + "." + floatPart;
      }
      return intPartFormat;
      // + floatPart;
    },
    hightestPrices: function () {
      if (!this.hightestPrice) return "0.00";
      // 将数值截取，保留两位小数
      this.hightestPrice = this.hightestPrice.toFixed(0);
      // 获取整数部分
      const intPart = Math.trunc(this.hightestPrice);
      // 整数部分处理，增加,
      const intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      // 预定义小数部分
      let floatPart = ".00";
      // 将数值截取为小数部分和整数部分
      const valueArray = this.hightestPrice.toString().split(".");
      if (valueArray.length === 2) {
        // 有小数部分
        floatPart = valueArray[1].toString(); // 取得小数部分
        return intPartFormat;
        // + "." + floatPart;
      }
      return intPartFormat;
      // + floatPart;
    },
  },
  async mounted() {
    get(
      "https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=YourApiKeyToken"
    ).then((res) => {
      this.daole = res.data.result.ethusd;
    });
    setTimeout(() => {
      get("/client/api/market/getHeroList", {
        holder: "",
        price: "",
        quality: "",
        profession: "",
        star: 0,
        tradingHistory: "",
        tradingStatus: 0,
        type: 0,
      }).then((res) => {
        this.angleCount = res.data.rows.length;
      });

      get(`/client/api/market/getHeroList?pageNum=1&pageSize=16`, {
        holder: "",
        price: "",
        quality: "",
        profession: "",
        star: 0,
        tradingHistory: "",
        tradingStatus: 0,
        type: 0,
      }).then((res) => {
        console.log(res);
        res.data.rows.forEach((item, index) => {
          let a = (item.hpr * this.daole).toFixed(0);
          item.dollar = a;
          this.angleList.push(item);
        });
        for (let i = 0; i < this.angleList.length; i++) {
          get("/client/api/blindBox/getHeroName", {
            nick: this.angleList[i].name,
          }).then((res) => {
            this.angleList[i].type = res.data.msg;
          });
        }
      });
    }, 500);

    gsap.to(this.$data, { duration: 0.5, totalSale: 60361 });
    gsap.to(this.$data, { duration: 0.5, totalVol: 35497 });
    gsap.to(this.$data, { duration: 0.5, hightestPrice: 104 });
  },
  methods: {
    //根据英雄tokenID进行筛选
    search() {
      get("/client/api/market/getHeroList", {
        holder: "",
        price: "",
        profession: "",
        star: 0,
        number: this.angleId,
        tradingHistory: "",
        tradingStatus: 0,
        type: 0,
      }).then((res) => {
        this.angleList = [];
        res.data.rows.forEach((item, index) => {
          let a = (item.hpr * this.daole).toFixed(0);
          item.dollar = a;
          this.angleList.push(item);
        });
        for (let i = 0; i < this.angleList.length; i++) {
          get("/client/api/blindBox/getHeroName", {
            nick: this.angleList[i].name,
          }).then((res) => {
            this.angleList[i].type = res.data.msg;
          });
        }
      });
    },
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
    //input值改变
    changeValue(e) {},
    toDetail(item) {
      let param = {
        obj: item,
        from: 1,
      };
      console.log(item);
      this.$router.push({ path: "./cardDetails", query: param });
    },

    //根据英雄稀有度筛选
    huadong() {
      setTimeout(() => {
        if (this.value2 == 0) {
          get("/client/api/market/getHeroList", {
            holder: "",
            price: "",
            quality: "",
            profession: "",
            star: 0,
            tradingHistory: "",
            tradingStatus: 0,
            type: 0,
          }).then((res) => {
            this.angleList = [];
            res.data.rows.forEach((item, index) => {
              let a = (item.hpr * this.daole).toFixed(0);
              item.dollar = a;
              this.angleList.push(item);
            });
            for (let i = 0; i < this.angleList.length; i++) {
              get("/client/api/blindBox/getHeroName", {
                nick: this.angleList[i].name,
              }).then((res) => {
                this.angleList[i].type = res.data.msg;
              });
            }
          });
        } else {
          get("/client/api/market/getHeroList", {
            holder: "",
            price: "",
            heroQuality: this.value2,
            // quality:this.value2,
            profession: "",
            star: 0,
            tradingHistory: "",
            tradingStatus: 0,
            type: 0,
          }).then((res) => {
            if (res.data.rows.length == 0) {
              this.angleList = [];
            } else {
              this.angleList = [];
              res.data.rows.forEach((item, index) => {
                let a = (item.hpr * this.daole).toFixed(0);
                item.dollar = a;
                this.angleList.push(item);
              });
            }

            for (let i = 0; i < this.angleList.length; i++) {
              get("/client/api/blindBox/getHeroName", {
                nick: this.angleList[i].name,
              }).then((res) => {
                this.angleList[i].type = res.data.msg;
              });
            }
          });
        }
      }, 500);
    },

    //分页筛选
    lastpage() {
      if (this.queryParams.pageNum > 1) {
        this.queryParams.pageNum = this.queryParams.pageNum - 1;
        get(
          `/client/api/market/getHeroList?pageNum=${this.queryParams.pageNum}&pageSize=${this.queryParams.pageSize}`,
          {
            holder: "",
            price: "",
            profession: "",
            star: 0,
            tradingHistory: "",
            tradingStatus: 0,
            type: 0,
          }
        ).then((res) => {
          if (res.data.rows.length == 0) {
            this.angleList = [];
          } else {
            this.angleList = [];
            res.data.rows.forEach((item, index) => {
              let a = (item.hpr * this.daole).toFixed(0);
              item.dollar = a;
              this.angleList.push(item);
            });
          }

          for (let i = 0; i < this.angleList.length; i++) {
            get("/client/api/blindBox/getHeroName", {
              nick: this.angleList[i].name,
            }).then((res) => {
              this.angleList[i].type = res.data.msg;
            });
          }
        });
      } else {
        this.queryParams.pageNum = 1;
      }
    },
    nextpage() {
      let page = Math.ceil(this.angleCount / 16);
      if (this.queryParams.pageNum < page) {
        this.queryParams.pageNum = this.queryParams.pageNum + 1;
      }

      get(
        `/client/api/market/getHeroList?pageNum=${this.queryParams.pageNum}&pageSize=${this.queryParams.pageSize}`,
        {
          holder: "",
          price: "",
          profession: "",
          star: 0,
          tradingHistory: "",
          tradingStatus: 0,
          type: 0,
        }
      ).then((res) => {
        console.log(res, "-----------");
        console.log(res.data, "------------");
        if (res.data.rows.length == 0) {
          this.angleList = [];
        } else {
          this.angleList = [];
          res.data.rows.forEach((item, index) => {
            let a = (item.hpr * this.daole).toFixed(0);
            item.dollar = a;
            this.angleList.push(item);
          });
        }

        for (let i = 0; i < this.angleList.length; i++) {
          get("/client/api/blindBox/getHeroName", {
            nick: this.angleList[i].name,
          }).then((res) => {
            this.angleList[i].type = res.data.msg;
          });
        }
      });
    },

    //根据职业筛选
    ckeckbox() {
      // const myParam = param.season.map(_=>`tag=${_}`).join('&')
      // const myParam = this.classList.map((_) => `jobList=${_}`).join("&");
      // console.log(myParam);

      let params = {
        holder: "",
        price: "",
        profession: "",
        star: 0,
        tradingHistory: "",
        tradingStatus: 0,
        type: 0,
        // jobList: myParam,
      };
      // console.log(params);
      this.classList.forEach((item, index) => {
        console.log(item);

        params[`jobList`] = item;
      });
      console.log(params);
      get("/client/api/market/getHeroList", params).then((res) => {
        console.log(res.data, "------------");
        if (res.data.rows.length == 0) {
          this.angleList = [];
        } else {
          this.angleList = [];
          res.data.rows.forEach((item, index) => {
            let a = (item.hpr * this.daole).toFixed(0);
            item.dollar = a;
            this.angleList.push(item);
            console.log(this.angleList, "============");
          });
        }

        for (let i = 0; i < this.angleList.length; i++) {
          get("/client/api/blindBox/getHeroName", {
            nick: this.angleList[i].name,
          }).then((res) => {
            this.angleList[i].type = res.data.msg;
          });
        }
      });
    },
  },
};
</script>


<style scoped lang="less">
.market {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-left: 2.2rem;
  margin-top: -4rem;

  .left-box {
    color: #fff;
    border: 1px solid #36374b;
    border-top: 0px;
    border-radius: 0px 0px 0px 12px;
    width: 21rem;
    height: 53.6rem;
    margin-top: 4rem;
    // position: fixed;
    background-color: #03071c;
  }
  .right-box {
    margin-left: 20rem;
  }
  .left-t-style {
    height: 5.25rem;
    border-bottom: 1px solid #0f1227;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .filters {
    font-family: "demibold";
    font-size: 1.5rem;
    padding-left: 2rem;
    font-weight: 900;
  }
  .clean {
    font-family: "avmed";
    color: #a5fcda;
    padding-right: 2.875rem;
    font-size: 1rem;
  }
  .content-title {
    color: #808080;
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-left: 1.7rem;
    font-size: 1rem;
    font-family: "demibold";
  }
  .checkdemos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-left: 1.3rem;
    font-family: "avnextmed";
  }
  .checkdemo {
    font-size: 1rem;
    display: flex;
    width: 7rem;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 1.5rem;
    color: #ffffff;
  }
  .firstcheck {
    margin-top: 1rem;
  }
  .checkdemo /deep/ .el-checkbox__inner::after:hover {
    left: 0.45rem;
    top: 0.1rem;
  }

  .checkdemo /deep/ .el-checkbox__inner {
    height: 1.43rem;
    width: 1.43rem;
    background: #01000e;
    border: 1px solid #36374b;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .checkdemo /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
    background: #27d1d1;
    border: 1px solid #36374b;
    height: 1.43rem;
    width: 1.43rem;
    color: #000;
  }
  .checkdemo /deep/ .el-checkbox__inner::after {
    left: 0.45rem;
    height: 0.7rem;
    width: 0.28rem;
    top: 0.1rem;
    border: 2px solid #000;
    // 不覆盖下面的 会 导致对号变形
    box-sizing: content-box;
    content: "";
    border-left: 0;
    border-top: 0;
    position: absolute;
    //
    transform: rotate(40deg) scaleY(1);
  }
  .checkdemo /deep/.el-checkbox__label {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    font-family: "avnextmed";
  }
  .checkdemo /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "avnextmed";
  }
  .grading-img {
    height: 1.44rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
  }
  .grading-imgs {
    height: 1.8rem;
    margin-left: -0.3rem;
    margin-right: 0.5rem;
  }
  .grading-imgss {
    height: 2rem;
    margin-left: -0.3rem;
    margin-right: 0.5rem;
  }

  .left-slider {
    width: 80%;
    margin-left: 10%;
  }

  .left-slider /deep/ .el-slider__button {
    border: none;
    background: rgba(255, 255, 255, 1);
    height: 0.9rem;
    width: 0.9rem;
    background-clip: padding-box;
  }
  .left-slider /deep/ .el-slider__bar {
    background: #01000e;
  }
  .left-slider /deep/ .el-slider__runway {
    background: #01000e;
  }
  .left-slider/deep/ .el-slider__runway {
    border: 1px solid #36374b;
  }
  .left-slider /deep/ .el-slider__stop {
    background: #01000e;
    opacity: 0;
  }
  .slider-style {
    width: 80%;
    margin-left: 10%;
  }
  .slider-style /deep/ .el-slider__button {
    border: 3px solid rgba(127, 255, 216, 0.3);
    background: rgba(127, 255, 216, 1);
    height: 0.75rem;
    width: 0.75rem;
    background-clip: padding-box;
  }
  .slider-style /deep/ .el-slider__bar {
    background: #7fffd8;
  }
  .slider-style /deep/ .el-slider__runway {
    border: 1px solid #36374b;
    background: #01000e;
  }
  .slider-style /deep/ .el-slider__stop {
    background: #01000e;
    opacity: 0;
  }
  .bt-bt {
    opacity: 0;
  }
  .right-top {
    width: 91.5rem;
    height: 8.5rem;
    margin-top: 2.5rem;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #36374b;
    margin-left: 1rem;
  }
  .rt-img1 {
    height: 2.6rem;
  }
  .rt-img2 {
    height: 4.5rem;
  }
  .rt-item {
    display: flex;
    flex-direction: row;
    align-items: center;
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
  .right-content {
    background-color: #03071c;
    height: 53.8rem;
    width: 94.5rem;
    margin-top: 3.9rem;
    border-radius: 0px 0px 12px 0px;
    display: flex;
    flex-direction: column;
    border: 1px solid #36374b;
    margin-left: -20rem;
    border-left: 0px;
    position: relative;
  }
  .content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .angle-count {
    color: #fff;
    font-size: 1.5rem;
    padding-left: 3rem;
    padding-top: 2rem;
    font-family: "demibold";
  }
  .right-search {
    margin-right: 4rem;
    margin-top: 1.5rem;
    display: flex;
    width: 7.375rem;
  }
  .left-search {
    margin-top: 1.5rem;
    display: flex;
    width: 17.7rem;
    margin-left: 1.5rem;
    font-family: "mreg";
  }
  .left-search /deep/ .el-input--suffix .el-input__inner {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #8a8a8a;
    font-size: 1rem;
    font-family: "avnextmed";
  }
  .left-search /deep/ .el-input__inner::placeholder {
    color: #8a8a8a;
    font-size: 1rem;
    font-family: "avnextmed";
  }
  .left-search /deep/ .el-input__icon:before {
    content: "";
  }
  .left-search /deep/ .el-input__icon {
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    height: 2rem;
    // transform: rotate(45deg);
    /*自定义图片*/
    background: url("../../../assets/arms/icon_search.png") no-repeat left
      center transparent;
    /*自定义图片的大小*/
  }
  .right-search /deep/ .el-input--suffix .el-input__inner {
    background: #36374b;
    border: 1px solid #36374b;
    color: #8a8a8a;
    font-size: 1rem;
    font-family: "avnextmed";
  }
  .serch-bt {
    height: 26px;
    width: 30px;
    margin-left: -30px;
    z-index: 999;
    cursor: pointer;
  }
  .all-angles {
    margin-left: 5rem;
    height: 54rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    overflow: scroll;
  }
  .all-angles::-webkit-scrollbar {
    display: none;
  }
  .angle-item {
    height: 18.3rem;
    width: 18.3rem;
    display: flex;
    flex-direction: row;
    // align-items: center;
    // justify-content: center;
    margin-top: 2rem;
    margin-left: 1.5rem;
    // border: 1px solid rgba(127, 255, 216, 1);
    // border-radius: 2px;
    position: relative;
  }
  .angle-bg {
    height: 18.3rem;
    border-radius: 8px;
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
    // height: 1px;
    // background-color: #a5fcda;
    bottom: -1px;
    left: 0px;
    transition: width 0.3s linear;
    position: absolute;
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

  .pageation {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    color: #999999;
    margin-top: 2rem;
  }
  .page /deep/ .el-input__inner {
    background: #000;
    border: 1px solid #36374b;
    border-radius: 0.45rem;
    width: 4.375rem;
    height: 2.1rem;
    color: #fff;
    margin-left: 1rem;
    text-align: center;
    padding: 0;
  }
  .lastpage {
    border: 1px solid #707070;
    border-radius: 6px;
    width: 2.8rem;
    height: 1.875rem;
    line-height: 1.875rem;
    cursor: pointer;
    color: #707070;
  }
  .pagename {
    color: #8a8a8a;
    margin-left: 2rem;
  }

  .nextpage {
    border: 1px solid #707070;
    border-radius: 6px;
    width: 2.8rem;
    height: 1.875rem;
    line-height: 1.875rem;
    cursor: pointer;
    color: #707070;
    margin-left: 2rem;
  }
  .allpages {
    color: #8a8a8a;
    font-family: "avbook";
    margin-left: 1rem;
  }
  .nextpage:hover {
    background: #36374b;
  }
  .lastpage:hover {
    background: #36374b;
  }
}
.right-search /deep/ .el-popper[x-placement^="bottom"] {
  margin-top: 0.3rem;
}
.right-search /deep/ .el-select-dropdown {
  background: #23273e;
  border: 1px solid#23273e;
  width: 7.375rem;
}
.right-search /deep/ .el-select-dropdown__list {
  background: #23273e;
  /* border: 1px solid #36374b; */
}
.right-search /deep/ .el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  display: none;
}
.right-search /deep/.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: rgba(255, 255, 255, 0.1);
  padding: 0 0.1rem;
}
.right-search /deep/ .el-select-dropdown__item.selected {
  color: #8a8a8a;
  padding: 0 0.1rem;
}
.right-search /deep/.el-select-dropdown__item {
  padding: 0 0.1rem;
}
.right-search /deep/ .el-input__inner {
  background: #36374b;
  border: 1px solid #36374b;
  width: 8.5rem;
  padding: 0;
  padding-left: 0.5rem;
  // margin-left: 3.5rem;
  color: #7fffd8;
  height: 2.2rem;
}
.right-search /deep/ .el-select__caret {
  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  width: 1rem;
  // transform: rotate(45deg);
  /*自定义图片*/
  background: url("../../../assets/skills/pull_up.png") no-repeat left center
    transparent;
  /*自定义图片的大小*/
}
.right-search /deep/ .el-icon-arrow-up:before {
  content: "";
}
.clabox {
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #0f1227;
}
.Parbox {
  padding-bottom: 3rem;
  border-bottom: 1px solid #0f1227;
}
.el-input__inner {
  margin-top: 0.5rem;
}

/deep/ .el-select-dropdown__item {
  font-size: 1rem;
  text-align: left;
}

/deep/ .el-select-dropdown__item.selected {
  font-weight: 0;
}
</style>
