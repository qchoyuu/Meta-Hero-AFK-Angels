<template>
  <div class="pledge">
    <!-- topdata -->
    <div class="topdata" id="hezi">
      <div class="top-item">
        <div class="smha">Total $SMHA</div>
        <div class="smha-value">938,541,000</div>
      </div>
      <div class="top-item ml">
        <div class="smha">Total $SMHA</div>
        <div class="smha-value">938,541,000</div>
      </div>
      <div class="top-item ml">
        <div class="smha">Average pledge period</div>
        <div class="smha-value">3.21 years</div>
      </div>
    </div>
    <!-- seconddata -->
    <div class="seconddata">
      <div class="sec-left">
        <div class="record-text">
          <div>Income Record</div>
          <div class="ques">?</div>
        </div>
        <div
          :style="{ border: index === 3 ? 'none' : '' }"
          class="lf-content"
          v-for="(item, index) in records"
          :key="index"
        >
          <div class="it-title">{{ item.title }}</div>
          <div class="it-val">{{ item.val1 }}</div>
          <div class="it-val">{{ item.val2 }}</div>
          <div class="it-val">{{ item.val3 }}</div>
        </div>
      </div>
      <div class="sec-right">
        <div class="record-text1">Pledge $SMHA</div>
        <div class="all-record">
          <!-- schedule -->
          <div class="sd-left">
            <el-progress
              :width="progWidth"
              color="#B102FF"
              :stroke-width="15"
              type="circle"
              :percentage="78.02"
            ></el-progress>
            <div class="sd-spain">Dynamic Annualized Yield</div>
          </div>
          <!-- choose -->
          <div>
            <div class="sd-right-item">
              <div class="txt-color">lock-in period</div>
              <div class="select-all">
                <el-select  :popper-append-to-body="false" size="mini" v-model="month" placeholder="select">
                  <el-option
                    v-for="(item, index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="sd-right-item mg-t">
              <div class="txt-color">$SMHA</div>
              <div class="select-all">
                <el-input size="mini" v-model="smha"
                  ><i slot="suffix" class="all-text"> ALL </i></el-input
                >
              </div>
            </div>
            <div class="sd-right-item mg-t">
              <div class="txt-color">SSMHA</div>
              <div class="select-all">
                <div class="count-result">
                  <div>0</div>
                  <div>≈0%</div>
                </div>
              </div>
            </div>
            <div class="ple-bt">Pledge $SMHA</div>
          </div>
        </div>
      </div>
    </div>
    <!-- thirddata -->
    <div class="thirddata">
      <div class="th-top">Rewards to be claimed</div>
      <div class="th-contents">
        <div class="th-content">
          <div>
            <div class="ct-tt">BNB</div>
            <div class="ct-val">13</div>
          </div>
          <div style="margin-left: 2.5rem">
            <div class="ct-tt">$SMHA</div>
            <div class="ct-val">1,000</div>
          </div>
          <div>
            <div class="ct-tt">SSMHA</div>
            <div class="ct-val">8,800</div>
          </div>
        </div>
        <div class="ct-bt">Claim Now</div>
      </div>
    </div>
    <!-- fourthdata -->
    <div class="fourthdata">
      <div class="th-top">My Pledge</div>
      <div class="last-top">
        <div>
          <div class="f-top">Pledge $SMHA</div>
          <div class="f-top-value">0</div>
        </div>
        <div>
          <div class="f-top">Pledge $SMHA</div>
          <div class="f-top-value">
            0 <span class="may-val">&nbsp;≈0%</span>
          </div>
        </div>
      </div>
      <div class="tb-title">A total of 3 transactions</div>
      <div class="tb-contents">
        <div class="tb-head">
          <div
            :style="{ 'padding-left': index === 0 ? '0px' : '' }"
            class="head-item"
            v-for="(item, index) in heads"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="tb-content"
          :style="{
            'border-bottom': index === contents.length - 1 ? 'none' : '',
          }"
          v-for="(item, index) in contents"
          :key="index"
        >
          <div class="ct-item">{{ item.ptime }}</div>
          <div class="ct-item">{{ item.utime }}</div>
          <div class="ct-item">{{ item.lock }}</div>
          <div class="ct-item">{{ item.sm }}</div>
          <div class="ct-item">{{ item.ss }}</div>
          <div
            class="ct-item"
            :style="{
              color:
                item.attributes === 0
                  ? '#6097FF'
                  : item.attributes === 1
                  ? '#84FF74'
                  : '#FF6E6E',
            }"
          >
            {{
              item.attributes === 0
                ? "Pledging"
                : item.attributes === 1
                ? "Unlocked"
                : "Rejected"
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="fourth">1</div>
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
  .topdata  {
    display: flex;
    flex-direction: row;
    width: 77rem;
    margin-top: 6.4rem;
  }

  .top-item {
    // height: 7.3rem;
    // background: #13162B;
    // border: 1px solid #36374b;
    // border-radius: 6px;
    // width: 25rem;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // border: 1px solid #36374b;

    width: 400px;
height: 117px;
background: #13162B;
border-radius: 12px 12px 12px 12px;
opacity: 1;
border: 1px solid #36374B;
  }
  .smha {
    color: #999999;
    font-size: 1rem;
  }
  .smha-value {
    font-size: 1.875rem;
    color: #7fffd8;
  }
  .ml {
    margin-left: 1.5rem;
  }
  .seconddata {
    display: flex;
    margin-top: 1.5rem;
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
    margin-left: 1.5rem;
  }
  .record-text {
    background-image: linear-gradient(#36374b, #040923);
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
    background-image: linear-gradient(#36374b, #040923);
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
  }
  .ques {
    border: 1px solid #999999;
    border-radius: 100%;
    height: .75rem;
    width: .75rem;
    line-height: .75rem;
    color: #fff;
    margin-left: 0.5rem;
    font-size: .7rem;
    color: #a0a0a0;
  }
  .lf-content {
    font-family: "avbook";
    width: 43.875rem;
    border-bottom: 1px solid #36374b;
    height: 3rem;
    display: flex;
    line-height: 3rem;
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
    stroke: #040923;
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
    font-family: "avbook";
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
  .all-text:hover{
    color: #7FFFD8;
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
    line-height: 2.2rem;
    height: 2.2rem;
    width: 9.75rem;
    border-radius: 4px;
    margin-top: 1.5rem;
    margin-left: 3rem;
    color: #A0A0A0;
    cursor: pointer;
  }
  .ple-bt:hover {
    background: rgba(39, 209, 209, 0.15);
  }
  .thirddata {
    display: flex;
    flex-direction: column;
    width: 77rem;
    margin-top: 1.5rem;
    border: 1px solid #36374b;
    border-radius: 6px;
    height: 15.56rem;
  }
  .fourthdata {
    display: flex;
    flex-direction: column;
    width: 77rem;
    margin-top: 1.5rem;
    border: 1px solid #36374b;
    border-radius: 6px;
  }
  .th-top {
    background-image: linear-gradient(#36374b, #040923);
    display: flex;
    padding-left: 1.5rem;
    color: #a0a0a0;
    align-items: center;
    border-bottom: 1px solid #36374b;
    height: 4rem;
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
  }
  .ct-val {
    color: #7fffd8;
    font-size: 1.875rem;
  }
  .ct-bt {
    background: rgba(39, 209, 209, 1);
    width: 9.75rem;
    height: 2.1875rem;
    line-height: 2.18rem;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 3px;
    // margin-right: 2.5rem;
    cursor: pointer;
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
  }
  .f-top-value {
    color: #7fffd8;
    font-size: 1.875rem;
  }
  .may-val {
    color: #fff;
    font-size: 1rem;
  }
  .tb-title {
    display: flex;
    padding-left: 1.5rem;
    color: #fff;
    padding-top: 2rem;
    color: #a0a0a0;
  }
  .tb-contents {
    width: 71rem;
    border: 1px solid #36374b;
    border-radius: 6px;
    margin-bottom: 2rem;
    margin-left: 1.5rem;
    margin-top: 1rem;
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
    // text-align: start;
  }
  .tb-content {
    display: flex;
    color: #fff;
    margin-left: 3rem;
    height: 5rem;
    line-height: 6rem;
    border-bottom: 1px solid #36374b;
  }
  .ct-item {
    width: 14rem;
    text-align: center;
  }
  .fourth {
    height: 5rem;
    width: 20rem;
    padding-bottom: 5rem;
    opacity: 0;
  }
}


</style>
