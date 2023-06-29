<template>
  <div class="market">
    <!-- left -->
    <div class="left-box">
      <!-- left-top -->
      <div class="left-t-style">
        <div class="filters">Filter</div>
        <div class="clean">Clearn</div>
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
          <div class="content-title">CLASSES</div>
          <div>
            <el-checkbox-group class="checkdemos" v-model="classList">
              <el-checkbox label="Mage" class="checkdemo firstcheck"
                ><img
                  src="../../../assets/mplace/组 23@2x.png"
                  class="grading-imgs"
                  alt=""
                />Mage&nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Ranger" class="checkdemo firstcheck"
                ><img
                  src="../../../assets/mplace/路径 234@2x.png"
                  class="grading-imgs"
                  alt=""
                />Ranger&nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Warrior" class="checkdemo"
                ><img
                  src="../../../assets/mplace/组 26@2x.png"
                  class="grading-imgs"
                  alt=""
                />Warrior</el-checkbox
              >
              <el-checkbox label="Assassin" class="checkdemo"
                ><img
                  src="../../../assets/mplace/组 27@2x.png"
                  class="grading-imgs"
                  alt=""
                />Assassin</el-checkbox
              >
              <el-checkbox label="Priest" class="checkdemo"
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
        <div>
          <div class="content-title">PARITIES</div>
          <div class="left-slider">
            <el-slider
              :show-tooltip="false"
              v-model="value2"
              :max="6"
              :marks="peMarks"
              input-size="small"
            >
            </el-slider>
          </div>
        </div>
        <!-- stars -->
        <div>
          <div class="content-title">STARS</div>
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
              <div class="val">{{ totalSales }}</div>
              <div class="val-money"></div>
            </div>
          </div>
        </div>
        <div class="rt-item">
          <img
            class="rt-img2"
            src="../../../assets/market/组 43@2x.png"
            alt=""
          />
          <div class="rt-content">
            <div class="rt-title">Total Volume (BNB)</div>
            <div class="rt-count">
              <div class="val">{{ totalVols }}</div>
              <div class="val-money">≈$13,254,201</div>
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
              <div class="val">{{ hightestPrices }}</div>
              <div class="val-money">≈$50,202</div>
            </div>
          </div>
        </div>
      </div>
      <!-- rightcontent -->
      <div class="right-content">
        <div class="content-top">
          <div class="angle-count">{{ angleCount }} angle</div>
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
              <img src="../../../assets/newimg/Logo_Binance@2x.png" class="cd-gold" alt="" />
              <div>{{ item.val }}</div>
            </div>
            <div class="may-val">≈{{item.mayVal}}</div>
          </div>
        </div>
        <!-- 分页按钮 -->
        <div class="pageation">
          <div class="lastpage">←</div>
          <div class="pagename">Page</div>
          <div class="page">
            <el-input v-model="pageIndex"></el-input>
          </div>
          <div class="allpages">of {{ pages }}</div>
          <div class="nextpage">→</div>
        </div>
      </div>
      <div class="bt-bt">1</div>
    </div>
  </div>
</template>

<script>
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
          label: this.$createElement("strong", "N"),
        },
        2: {
          style: {
            color: "#3188FF",
            fontSize: ".9rem",
          },
          label: this.$createElement("strong", "R"),
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
      angleCount: "7,285",
      angleId: null,
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
        {
          id: 3,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 4,
          url: require("../../../assets/newimg/Angle4@2x.png"),
        },
        {
          id: 4,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 5,
          url: require("../../../assets/newimg/Angle1@2x.png"),
        },
        {
          id: 5,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 6,
          url: require("../../../assets/newimg/Angle2@2x.png"),
        },
        {
          id: 6,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 2,
          url: require("../../../assets/newimg/Angle3@2x.png"),
        },
        {
          id: 7,
          name: "TAKASHA",
          num: "0084",
          val: "0.128",
          mayVal: "51.58",
          level: 4,
          url: require("../../../assets/newimg/Angle4@2x.png"),
        },
      ],
      tim: null,
      number: 0,
      tweenedNumber: 0,
      pages: 100,
      pageIndex: 1,
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
  mounted() {
    gsap.to(this.$data, { duration: 0.5, totalSale: 60361 });
    gsap.to(this.$data, { duration: 0.5, totalVol: 35497 });
    gsap.to(this.$data, { duration: 0.5, hightestPrice: 104 });
  },
  methods: {
    //模糊查询
    search(e) {
      console.log("搜索");
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
    //input值改变
    changeValue(e) {
      console.log("e==", e);
    },
    toDetail(item) {
      let param = {
        obj: item,
        from: 1,
      };
      this.$router.push({ path: "./cardDetails", query: param });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.market {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-left: 2.2rem;
  margin-top: 8rem;
  .left-box {
    color: #fff;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    width: 21rem;
    height: 49.5rem;
    margin-top: 2.5rem;
    position: fixed;
  }
  .right-box{
    margin-left: 21.5rem;
  }
  .left-t-style {
    height: 5.25rem;
    border-bottom: 1px solid #36374b;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .filters {
    font-family: "avbook";
    font-size: 1.5rem;
    padding-left: 2rem;
    font-weight: 900;
  }
  .clean {
    font-family: "avbook";
    color: #a5fcda;
    padding-right: 2.875rem;
    font-size: 1rem;
  }
  .content-title {
    color: #808080;
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-left: 2rem;
    font-size: 1rem;
  }
  .checkdemos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-left: 2rem;
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
    top: .1rem;
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
    height: .7rem;
    width: 0.28rem;
    top: .1rem;
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
  }
  .checkdemo /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
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

  .left-slider {
    width: 80%;
    margin-left: 10%;
  }

  .left-slider /deep/ .el-slider__button {
    border: none;
    background: rgba(255, 255, 255, 1);
    height: 1rem;
    width: 1rem;
    background-clip: padding-box;
  }
  .left-slider /deep/ .el-slider__bar {
    background: #01000e;
  }
  .left-slider /deep/ .el-slider__runway {
    background: #01000e;
  }

  .left-slider /deep/ .el-slider__stop {
    background: #01000e;
  }
  .slider-style {
    width: 80%;
    margin-left: 10%;
  }
  .slider-style /deep/ .el-slider__button {
    border: 2px solid rgba(127, 255, 216, 0.3);
    background: rgba(127, 255, 216, 1);
    height: 1rem;
    width: 1rem;
    background-clip: padding-box;
  }
  .slider-style /deep/ .el-slider__bar {
    background: #7fffd8;
  }
  .slider-style /deep/ .el-slider__runway {
    background: #01000e;
  }
  .slider-style /deep/ .el-slider__stop {
    background: #01000e;
  }
.bt-bt{

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
    width: 91.5rem;
    margin-top: 1rem;
    border-radius: .75rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #36374b;
    margin-left: 1rem;
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
  }
  .right-search {
    margin-right: 4rem;
    margin-top: 1.5rem;
    display: flex;
  }
  .left-search {
    margin-top: 1.5rem;
    display: flex;
    width: 17.7rem;
    margin-left: 1.5rem;
  }
  .left-search /deep/ .el-input--suffix .el-input__inner {
    background: #36374b;
    border: 1px solid #36374b;
    color: #8a8a8a;
    font-size: 1rem;
  }
  .right-search /deep/ .el-input--suffix .el-input__inner {
    background: #36374b;
    border: 1px solid #36374b;
    color: #8a8a8a;
    font-size: 1rem;
  }
  .serch-bt {
    height: 26px;
    width: 30px;
    margin-left: -30px;
    z-index: 999;
    cursor: pointer;
  }
  .all-angles {
    margin-left: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
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
.bt-gold{
  position: absolute;
  display: flex;
  margin-top:15.4rem;
  color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  text-shadow: 0px 0px 3px #000000;
}
.cd-gold{
  height: 1.25rem;
  margin-right: .3rem;
}
.may-val{
  position: absolute;
  color: #fff;
  margin-top: 16.7rem;
  width: 100%;
  text-align: center;
  font-size: .6rem;
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
    margin-top: 3rem;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    color: #999999;
  }
  .page /deep/ .el-input__inner {
    background: #000;
    border: 1px solid #36374B;
    border-radius: .45rem;
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
  .pagename{
    color: #8A8A8A;
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
  .allpages{
    color: #8A8A8A;
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
.right-search /deep/ .el-select-dropdown {
  background: #23273e;
  border: none;
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
}
.right-search /deep/ .el-select-dropdown__item.selected {
  color: #8a8a8a;
}
.right-search /deep/ .el-input__inner {
  background: #36374b;
  border: 1px solid #36374b;
  width: 7.5rem;
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
</style>
