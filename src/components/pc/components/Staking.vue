<template>
  <div class="pledge">
    <!-- topdata -->
    <div class="topdata">
      <div class="img-box">
        <img src="../../../assets/skills/pic_no data@2x.png" alt="" class="img-nv">
        <p class="img-p">Coming Soon~</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Pledge",
  data() {
    return {
      records: [
        {
          title: "Platform pledge income today",
          val1: 27.2,
          val2: 27.2,
          val3: "14,715.00",
        },
        {
          title: "Platform pledge income yesterday",
          val1: 44.2,
          val2: 273.0,
          val3: "35,715.00",
        },
        {
          title: "Daily average pledge income",
          val1: 31.32,
          val2: 319.5,
          val3: "40,715.00",
        },
        {
          title: "Average annualized return per $SMHA",
          val1: 0.015,
          val2: 0.15,
          val3: "19.61",
        },
      ],
      progWidth: 110,
      month: "",
      options: [
        {
          value: "1",
          label: "1 Month",
        },
        {
          value: "2",
          label: "2 Month",
        },
        {
          value: "3",
          label: "3 Month",
        },
        {
          value: "4",
          label: "5 Month",
        },
      ],
      smha: "",
      heads: [
        "pledge time",
        "Unlock time",
        "lock-in period",
        "$SMHA",
        "SSMHA",
        "Attributes",
      ],
      contents: [
        {
          ptime: "2022.02.12",
          utime: "2022.02.13",
          lock: "1 Month",
          sm: "35,715.00",
          ss: "36,715.00",
          attributes: 1,
        },
        {
          ptime: "2022.01.12",
          utime: "2022.01.23",
          lock: "4 Month",
          sm: "40,715.00",
          ss: "48,715.00",
          attributes: 2,
        },
        {
          ptime: "2022.02.15",
          utime: "2022.02.23",
          lock: "1 Year",
          sm: "19.61",
          ss: "25.36",
          attributes: 0,
        },
      ],
    };
  },
  mounted() {
    this.setRem();
    window.onresize = () => {
      this.$nextTick(() => {
        this.setRem();
      });
    };
  },
  methods: {
    setRem() {
      const baseSize = 130;
      // 当前页面屏幕分辨率相对于 1920宽的缩放比例，可根据自己需要修改
      const scale = document.documentElement.clientWidth / 1920;
      // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      this.progWidth = baseSize * Math.min(scale, 2);
      // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      document.documentElement.style.fontSize = 16 * Math.min(scale, 2) + "px";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pledge {
  height: 100%;
  background: #040923;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  .topdata {
    display: flex;
    flex-direction: row;
    width: 115rem;
    height: 53rem;
    margin-top: 6.875rem;
  }
  .img-box{
    width: 115rem;
height: 54.19rem;
background: #03071C;
border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
opacity: 1;
border: 0.06rem solid #36374B;
position: relative;
  }
  .img-nv{
    width: 22.13rem;
    height: 22.13rem;
    margin-top: 14rem;
  }
  .img-p{
    font-size: 1rem;
    font-family: Avenir LT Std-45 Book, Avenir LT Std;
    font-weight: normal;
    color: #8A8A8A;
    line-height: 0rem;
    position: absolute;
    top: 34rem;
    left: 54rem;
  }
  .top-item {
    height: 7.3rem;
    background: #13162b;
    border: 1px solid #36374b;
    border-radius: 6px;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #36374b;
  }
  .smha {
    color: #ffffff;
    font-size: 1rem;
    font-family: "avbook";
  }
  .smha-value {
    font-size: 1.875rem;
    color: #7fffd8;
    font-family: "avmed";
    padding-top: 0.5rem;
  }
  .ml {
    margin-left: 1rem;
  }
  .seconddata {
    display: flex;
    margin-top: 1rem;
    width: 77rem;
  }
  .sec-left {
    border: 1px solid #36374b;
    border-radius: 11px;
    width: 43.875rem;
    height: 17rem;
  }
  .sec-right {
    border: 1px solid #36374b;
    border-radius: 11px;
    width: 32rem;
    margin-left: 1rem;
  }
  .record-text {
    background: #13162b;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #a0a0a0;
    padding-left: 1.5rem;
    height: 4rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 1px solid #36374b;
    font-size: 1rem;
    font-family: "avmed";
  }
  .record-text1 {
    background: #13162b;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #a0a0a0;
    height: 4rem;
    padding-left: 1.5rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 1px solid #36374b;
    font-size: 1rem;
    font-family: "avmed";
  }
  .ques {
    border: 1px solid #999999;
    border-radius: 100%;
    height: 0.9rem;
    width: 0.9rem;
    line-height: 1.1rem;
    color: #fff;
    margin-left: 0.5rem;
    font-size: 0.7rem;
    color: #a0a0a0;
    font-family: "avmed";
    margin-top: -0.1rem;
  }
  .lf-content {
    font-family: "avbook";
    width: 43.875rem;
    border-bottom: 1px solid #36374b;
    height: 3rem;
    display: flex;
    line-height: 4.5rem;
    font-size: 1rem;
    color: #fff;
  }
  .it-title {
    width: 45%;
    text-align: start;
    padding-left: 1.5rem;
  }
  .it-val {
    width: 16%;
    text-align: end;
  }
  .sd-left /deep/ svg path:first-child {
    stroke: #000;
  }
  .sd-left /deep/.el-progress__text {
    color: #fff;
  }
  .sd-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem;
    margin-top: 1.5rem;
  }
  .all-record {
    display: flex;
    justify-content: space-between;
  }
  .sd-spain {
    color: #fff;
    font-size: 0.75rem;
    padding-top: 1rem;
    font-family: "avmed";
  }
  .sd-right-item {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    justify-content: space-between;
    // width: 20rem;
  }
  .mg-t {
    margin-top: 0.7rem;
    font-family: "avbook";
  }
  .txt-color {
    color: #fff;
    font-size: 1rem;
    padding-right: 2.7rem;
    font-family: "avbook";
  }
  .sd-right-item /deep/ .el-input__inner {
    background: #36374b;
    border: 1px solid #36374b;
    width: 7.5rem;
    padding: 0;
    padding-left: 0.5rem;
    // margin-left: 3.5rem;
    color: #7fffd8;
    height: 2.2rem;
  }
  .sd-right-item /deep/ .el-select__caret {
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-top: 2.3rem;
    height: 0.1rem;
    width: 1.1rem;
    // transform: rotate(45deg);
    /*自定义图片*/
    background: url("../../../assets/skills/arr.png") no-repeat left center
      transparent;
    /*自定义图片的大小*/
  }
  .sd-right-item /deep/ .el-icon-arrow-up:before {
    content: "";
  }
  .sd-right-item /deep/ .el-select-dropdown {
    background: #23273e;
    border: none;
  }
  .sd-right-item /deep/ .el-select-dropdown__list {
    background: #23273e;
    /* border: 1px solid #36374b; */
  }
  .sd-right-item /deep/ .el-popper .popper__arrow,
  .el-popper .popper__arrow::after {
    display: none;
  }
  .sd-right-item /deep/.el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .sd-right-item /deep/ .el-select-dropdown__item.selected {
    color: #8a8a8a;
  }
  .all-text {
    line-height: 2.5rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .all-text:hover {
    color: #7fffd8;
  }
  .count-result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    color: #fff;
  }
  .select-all {
    margin-right: 1.8rem;
  }
  .ple-bt {
    background: rgba(39, 209, 209, 0.21);
    line-height: 2.5rem;
    height: 2.2rem;
    width: 9.75rem;
    border-radius: 4px;
    margin-top: 1.5rem;
    margin-left: 3rem;
    color: #a0a0a0;
    cursor: pointer;
    font-family: "avmed";
  }
  .ple-bt:hover {
    background: rgba(39, 209, 209, 0.15);
  }
  .thirddata {
    display: flex;
    flex-direction: column;
    width: 77rem;
    margin-top: 1rem;
    border: 1px solid #36374b;
    border-radius: 6px;
    height: 15.56rem;
    font-family: "avmed";
  }
  .fourthdata {
    display: flex;
    flex-direction: column;
    width: 77rem;
    margin-top: 1rem;
    border: 1px solid #36374b;
    border-radius: 6px;
    height: 25.56rem;
  }
  .th-top {
    background: #13162b;
    display: flex;
    padding-left: 1.5rem;
    color: #a0a0a0;
    align-items: center;
    border-bottom: 1px solid #36374b;
    height: 4rem;
    font-family: "avmed";
  }
  .fou-top {
    background: #13162b;
    text-align: start;
    padding-left: 1.5rem;
    color: #a0a0a0;
    border-bottom: 1px solid #36374b;
    height: 3.5rem;
    font-family: "avmed";
    line-height: 4rem;
  }
  .th-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.5rem;
    width: 100%;
  }
  .th-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 94%;
    margin-left: 3%;
  }
  .ct-tt {
    color: #fff;
    font-size: 1rem;
    font-family: "avbook";
  }
  .ct-val {
    color: #7fffd8;
    font-size: 1.875rem;
    font-family: "avmed";
  }
  .ct-bt {
    background: rgba(39, 209, 209, 1);
    width: 9.75rem;
    height: 2.1875rem;
    line-height: 2.3rem;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 3px;
    // margin-right: 2.5rem;
    cursor: pointer;
    font-family: "avmed";
  }
  .ct-bt:hover {
    background: rgba(39, 209, 209, 0.5);
  }
  .last-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 10rem;
    padding-right: 10rem;
  }
  .f-top {
    font-size: 1rem;
    color: #fff;
    padding-top: 2rem;
    font-family: "avbook";
  }
  .f-top-value {
    color: #7fffd8;
    font-size: 1.875rem;
    font-family: "avmed";
  }
  .may-val {
    color: #fff;
    font-size: 1rem;
  }
  .tb-title {
    display: flex;
    padding-left: 1.5rem;
    color: #fff;
    color: #a0a0a0;
  }
  .tb-contents {
    width: 71rem;
    border: 1px solid #36374b;
    border-radius: 6px;
    margin-bottom: 2rem;
    margin-left: 1.5rem;
    margin-top: .5rem;
  }
  .tb-head {
    display: flex;
    flex-direction: row;
    color: #999999;
    padding-left: 3rem;
    border-bottom: 1px solid #36374b;
    height: 3.5rem;
    line-height: 3.5rem;
  }
  .head-item {
    // padding-left: 6rem;
    text-align: center;
    width: 14rem;
    font-family: "avmed";
    // text-align: start;
  }
  .tb-content {
    display: flex;
    color: #fff;
    margin-left: 3rem;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #36374b;
  }
  .ct-item {
    width: 14rem;
    text-align: center;
    font-family: "avbook";
  }
  .fourth {
    height: 5rem;
    width: 20rem;
    padding-bottom: 5rem;
    opacity: 0;
  }
}
</style>
