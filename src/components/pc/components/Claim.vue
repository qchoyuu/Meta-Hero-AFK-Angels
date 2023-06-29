<template>
  <div class="claim">
    <div class="top-content">
      <div class="tt-stle">
        <img
          src="../../../assets/mplace/zuanshii.png"
          class="zuanshis"
          alt=""
        />
        <div>
          <div class="t-title">$MHA Balance</div>
          <div class="t-value" style="color: #fff">0</div>
        </div>
      </div>
      <div>
        <div class="t-title">$MHA to be Claim</div>
        <div class="t-value">
          0
          <div class="t-valuebut">Requet to Claim</div>
        </div>
      </div>
      <div class="im-box">
        <img src="../../../assets/skills/pic_mha@2x.png" class="techo" alt="" />
      </div>
    </div>
    <div class="od-list">Order List</div>
    <div v-if="list.length === 0" class="nodata">
      <img
        class="empty-data"
        src="../../../assets/skills/pic_no data@2x.png"
        alt=""
        v-if="imgblack == '1'"
      />
      <div class="no-data" v-if="imgblack == '1'">no data~</div>

      <div class="list-box" v-else-if="imgblack == '2'">
        <div class="table-box">
          <ul class="ui-box">
            <li>Order Number</li>

            <li>Date</li>

            <li class="amost">Amount</li>

            <li class="winthst">WithdrawalAddress</li>

            <li>Status</li>
          </ul>
        </div>

        <table class="tab-box">
          <tr class="tab-tr" v-for="(unden, index) in tbalists" :key="index">
            <td>{{ unden.order }}</td>
            <td>{{ unden.date }}</td>
            <td>{{ unden.amount }}</td>
            <td>{{ unden.Withdrawaladdress }}</td>
            <td class="stacl">{{ unden.status }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "claim",
  data() {
    return {
      isShowModal: false,
      isShowGold: false,
      buySuccess: false,
      imgblack: "",
      list: [],
      tbalists: [
        // {
        //   order:564738,
        //   date:"2022-02-02",
        //   amount:"$5000",
        //   Withdrawaladdress:"0x9079…cf3a",
        //   status:"under approval"
        // },
      ],
    };
  },
  mounted() {
    if (this.tbalists.length == 0) {
      this.imgblack = "1";
    } else if (this.tbalists.length > 0) {
      this.imgblack = "2";
    }
  },
  methods: {
    buyFunc() {
      this.buySuccess = true;
      console.log("购买成功");
    },
    openBox() {
      console.log("打开箱子");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.claim {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-content {
    width: 88rem;
    height: 11rem;
    background: #000415;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    margin-top: 4.375rem;
    display: flex;
    justify-content: space-between;
    .t-title {
      color: #fff;
      font-size: 1rem;
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 2.875rem;
      color: #a0a0a0;
      font-family: "mreg";
    }
    .t-value {
      color: #7fffd8;
      font-size: 1.875rem;
      font-family: "mdem";
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 1rem;
    }
    .im-box {
      margin-left: 1rem;
      width: 16.5rem;
    }
    .techo {
      height: 16rem;
      margin-top: -5rem;
    }
    .tt-stle {
      display: flex;
      flex-direction: row;
    }
    .zuanshis {
      height: 2.75rem;
      margin-top: 3.12rem;
      margin-left: 3rem;
    }
  }
  .od-list {
    color: #fff;
    padding-top: 2rem;
    text-align: start;
    width: 83.5rem;
    font-size: 1.5rem;
    font-family: "mdem";
    padding-right: 4rem;
  }
  .nodata {
    color: #fff;
    width: 83.5rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .empty-data {
      height: 22.125rem;
    }
    .no-data {
      color: #8a8a8a;
      font-size: 1rem;
      font-family: "avbook";
      margin-top: -2.5rem;
    }
  }
}

.list-box {
  width: 88rem;
  height: 31.38rem;
  background: #000000;
  border-radius: 1rem 1rem 1rem 1rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-top: 2rem;
  overflow: scroll;
}
.list-box::-webkit-scrollbar {
  display: none;
}

.table-box {
  width: 88rem;
  height: 3.5rem;
  background: #000000;
  border-radius: 1rem 1rem 0rem 0rem;
  opacity: 1;
  border: 0.06rem solid #2c2d40;
  margin: 0;
  position: fixed;
  // top: 0;
}

.ui-box {
  display: flex;
  width: 90rem;
  display: flex;
  padding: 0;
}

.ui-box li {
  list-style: none;
  width: 17rem;
  height: 1.19rem;
  font-size: 0.88rem;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #27d1d1;
  line-height: 0rem;
  justify-items: center;
  padding: 0;
}

.tab-box {
  // border: 1px solid red;
  width: 87rem;
  height: 3rem;
}

tr {
  height: 3rem;
  font-size: 12px;
}

td {
  // border: 1PX solid red;
  width: 5rem;
  height: 3.5rem;
}
.stacl {
  color: #6097ff;
}

.winthst {
  margin-left: 1.2rem;
}

.amost {
  margin-left: 0.5rem;
}

.t-valuebut {
  width: 9.625rem;
  height: 2.312rem;
  background: linear-gradient(180deg, #1b2144 0%, #040923 100%);
  border-radius: 7px 7px 7px 7px;
  opacity: 1;
  border: 1px solid #36374b;
  font-size: 0.8rem;
  color: #ffffff;
  line-height: 2.2rem;
  text-align: center;
  font-family: " mreg";
  display: inline-block;
  position: absolute;
  left: 69rem;
  top: 16rem;
  cursor: pointer;
}
</style>
