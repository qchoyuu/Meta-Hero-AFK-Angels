<template>
  <div class="equip">
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
            placeholder="Search by Equipment ID"
            @change="search"
            @input="changeValue"
          ></el-input>
          <div class="serch-bt" @click.Enter="search"></div>
        </div>
        <!-- QUALITY -->
        <div>
          <div class="content-title">QUALITY</div>
          <div>
            <el-checkbox-group class="checkdemos" v-model="classList">
              <el-checkbox label="White" class="checkdemo firstcheck"
                ><span style="color: #fff">White</span>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Green" class="checkdemo firstcheck"
                ><span style="color: #00ffce">Green</span>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Blue" class="checkdemo"
                ><span style="color: #3188ff">Blue</span>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Purple" class="checkdemo"
                ><span style="color: #d446ff">Purple</span>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Orange" class="checkdemo"
                ><span style="color: #ff7600">Orange</span>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Red" class="checkdemo"
                ><span style="color: #ff0000">Red</span>
                &nbsp;&nbsp;</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
        <!-- TYPE -->
        <div>
          <div class="content-title">TYPE</div>
          <div>
            <el-checkbox-group class="checkdemos" v-model="classList">
              <el-checkbox label="Weapon" class="checkdemo firstcheck"
                ><div class="tp1">Weapon</div>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Clothes" class="checkdemo firstcheck"
                ><div class="tp2">Clothes</div>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Shoes" class="checkdemo"
                ><div class="tp3">Shoes</div>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Necklace" class="checkdemo"
                ><div class="tp4">Necklace</div>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Ring" class="checkdemo"
                ><div class="tp5">Ring</div>
                &nbsp;&nbsp;</el-checkbox
              >
              <el-checkbox label="Accessory" class="checkdemo"
                ><div class="tp6">Accessory</div>
                &nbsp;&nbsp;</el-checkbox
              >
            </el-checkbox-group>
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
          <div class="angle-count">{{ equipmet }} Equipment</div>
        </div>
        <div class="all-angles">
          <div
            class="angle-item"
            v-for="(item, index) in equipments"
            :key="index"
            :style="{ marginLeft: index % 4 == 0 ? '0' : '' }"
          >
            <div class="item-top">
              <div class="weapon">Weapon</div>
              <img
                src="../../../assets/mplace/zuanshii.png"
                class="hat"
                alt=""
              />
            </div>
            <div class="b-circle">
              <img
                src="../../../assets/mplace/headhat.png"
                class="zuanshii"
                alt=""
              />
            </div>
            <div class="num-style">#{{ item.num }}&nbsp;{{ item.name }}</div>
            <div class="item-bottom">
              <img
                src="../../../assets/skills/组 76@2x.png"
                class="golded"
                alt=""
              />
              <div class="bnb-val">0.128</div>
              <div class="may-val">≈$51.58</div>
            </div>
            <!-- <img
              @click="toDetail(item)"
              :src="item.url"
              class="angle-bg"
              alt=""
            /> -->
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Equipment",
  data() {
    return {
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
      equipmet: 1,
      angleId: null,
      equipments: [
        {
          id: 0,
          name: "Equipment name",
          num: "3575",
          val: "0.128",
          mayVal: "51.58",
          level: 5,
          url: require("../../../assets/mplace/组 191@2x.png"),
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
.equip {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-left: 2.2rem;
  margin-top: 8rem;
  .tp1 {
    background-image: linear-gradient(to right, #49c724, #79d83a);
    width: 4.1rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .tp2 {
    background-image: linear-gradient(to right, #2475c7, #3a8fd8);
    width: 3.76rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .tp3 {
    background-image: linear-gradient(to right, #ffbc14, #ffde59);
    width: 3.2rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .tp4 {
    background-image: linear-gradient(to right, #ff6514, #ff9259);
    width: 4.4rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .tp5 {
    background-image: linear-gradient(to right, #ce74af, #e78eb9);
    width: 2.6rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .tp6 {
    background-image: linear-gradient(to right, #a874ce, #cc8ee7);
    width: 4.85rem;
    height: 1.437rem;
    color: #040923;
    font-size: 0.9rem;
    line-height: 1.5rem;
    border-radius: 0.4rem;
    // font-family: "mdem";
  }
  .left-box {
    color: #fff;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    width: 21rem;
    margin-top: 2.5rem;
    position: fixed;
    height: 49.5rem;
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
    font-family: "avpro";
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
    padding-left: 1.4rem;
    font-size: 1rem;
  }
  .market .checkdemos[data-v-6e1a102e] {

  }
  .checkdemos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-left: 1.4rem;
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
    left: 0.44rem;
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
    left: 0.44rem;
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
    margin-left: 15px;
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
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    border: 1px solid #36374b;
    margin-left: 15px;
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
    font-family: left-search;
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
    margin-top: 1rem;
  }
  .angle-item {
    background: #13162b;
    height: 18.3rem;
    width: 18.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    margin-top: 2rem;
    margin-left: 1.5rem;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    position: relative;
    color: #fff;
  }
  .angle-bg {
    height: 21.3rem;
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

  .item-top {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .weapon {
    background-image: linear-gradient(to right, #49c724, #79d83a);
    height: 1.4375rem;
    width: 4.1rem;
    line-height: 1.5rem;
    border-radius: 0.3rem;
    color: #040923;
    font-family: "mdem";
    margin-left: 1.5rem;
  }
  .hat {
    height: 1.3rem;
    margin-right: 1.5rem;
  }
  .zuanshii {
    height: 5.3rem;
  }
  .b-circle {
    border-radius: 100%;
    height: 7.75rem;
    width: 7.75rem;
    margin-top: 1.5rem;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .num-style {
    color: #fff;
    font-family: "avbook";
    padding-top: 1.8rem;
    font-size: 1rem;
  }
  .golded {
    height: 1.3rem;
    padding-right: .5rem;
    margin-top: -.2rem;
  }
  .item-bottom{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
  }
  .bnb-val{
      color: #fff;
      font-family: "avpro";
      font-size: 1.1rem;
  }
  .may-val{
      color: #fff;
      padding-left: .3rem;
      font-size: .9rem;
  }
}
</style>
