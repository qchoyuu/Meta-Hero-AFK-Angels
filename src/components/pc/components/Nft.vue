<template>
  <div class="nft">
    <div class="content-top" v-if="isNTFNO">
      <div class="angle-count">{{ angleCount }} Angels</div>
      <div class="right-search">
        <el-select :popper-append-to-body="false" v-model="val">
          <el-option label="Latest Sale" value="Latest Sale">All NFT</el-option>
          <el-option label="Lowest Price" value="Lowest Price"
            >On Sale</el-option
          >
          <el-option label="Highest Price" value="Highest Price"
            >Not For Sale</el-option
          >
        </el-select>
      </div>
    </div>
    <div class="all-angles" v-if="isNTFNO">
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
          :src="
            require('../../../assets/hero/' + item.appearanceCode + '_y.png')
          "
          class="angle-bg"
          alt=""
        />
        <div class="card-num">#{{ item.number }}</div>
        <img class="lev-img" :src="getLevel(item.heroQuality)" alt="" />
        <div class="cd-name">{{ item.type }}</div>
        <div class="bt-gold"></div>
      </div>
    </div>

    <div class="img-boxx" v-else>
      <p class="img-angle">7,285 angle</p>
      <img
        src="../../../assets/skills/pic_no data@2x.png"
        alt=""
        id="img-new"
      />
      <p class="img-p">No data~</p>
    </div>
  </div>
</template>

<script>
import sdk from "../../../utils/chanjssdk";
import { get, post } from "../../../request/http";
export default {
  name: "Nft",
  data() {
    return {
      isNTFNO: true,
      mm: "3",
      angleList: [],
      angleCount: 4,
      getAccot: "",
      metas: [],
      nickarr: [],
      arr: [],
      val: "Latest Sale",
    };
  },

  async mounted() {
    sdk.chainWeb3.connectMetamask();

    //装备tokenid
    let Account = sdk.chainWeb3.getAccount();
    let arr = await sdk.Equip721.getMetas(Account);

    //NTF列表
    setTimeout(() => {
      post("client/api/wallet/accountNftInfo", {
        address: Account,
      }).then((res) => {
        res.data.rows.forEach((item, index) => {
          this.angleList.push(item);
        });
        this.$forceUpdate();
        for (let i = 0; i < this.angleList.length; i++) {
          get("client/api/blindBox/getHeroName", {
            nick: this.angleList[i].name,
          }).then((res) => {
            this.angleList[i].type = res.data.msg;
          });
        }
      });
    }, 80);
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
    //模糊查询
    search(e) {
      console.log("搜索");
    },
    //input值改变
    changeValue(e) {
      console.log("e==", e);
    },
    async toDetail(item) {
      let param = {
        obj: item,
        from: 0,
      };
      //console.log(item, "----------------");  NTF详情传参
      this.$router.push({ path: "/Marketplace/Unsalable", query: param });
      let meta = await sdk.Hero721.getMeta(this.metas[item.id]);
    },
  },
};
</script>

<style scoped lang="less">
.nft {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  .content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 91.5rem;
  }
  .angle-count {
    color: #fff;
    font-size: 1.5rem;
    padding-left: 3rem;
    padding-top: 1rem;
  }
  .right-search {
    margin-right: 4rem;
    margin-top: 1.5rem;
    display: flex;
  }
  .right-search /deep/ .el-input--suffix .el-input__inner {
    background: #36374b;
    border: 1px solid #36374b;
    color: #8a8a8a;
    font-size: 1rem;
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
    width: 8.5rem;
    padding: 0;
    padding-left: 0.5rem;
    color: #7fffd8;
    height: 2.2rem;
  }
  .right-search /deep/ .el-select__caret {
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    width: 1.2rem;
    // transform: rotate(45deg);
    /*自定义图片*/
    background: url("../../../assets/skills/arr.png") no-repeat left center
      transparent;
    /*自定义图片的大小*/
  }
  .right-search /deep/ .el-icon-arrow-up:before {
    content: "";
  }
  .all-angles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 91.5rem;
    height: 48rem;
    margin-left: 2rem;
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
    margin-top: 2rem;
    position: relative;
    margin-left: 1.5rem;
    overflow: scroll;
  }
  .angle-item::-webkit-scrollbar {
    display: none;
  }

  .angle-bg {
    width: 18.3rem;
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
    justify-content: space-around;
    color: #999999;
    font-size: 1.5rem;
    width: 26%;
    margin-left: 37%;
  }
  .page /deep/ .el-input__inner {
    background: #000;
    border: 1px solid #000;
    color: #8a8a8a;
    width: 5rem;
    height: 2.5rem;
    color: #fff;
  }
  .lastpage {
    border: 1px solid #999999;
    border-radius: 6px;
    width: 3rem;
    cursor: pointer;
  }

  .nextpage {
    border: 1px solid #999999;
    border-radius: 6px;
    width: 3rem;
    cursor: pointer;
  }
  .nextpage:hover {
    background: #36374b;
  }
  .lastpage:hover {
    background: #36374b;
  }
}

.img-boxx {
  width: 100%;
  height: 100%;
  position: relative;
}

#img-new {
  width: 30rem;
  height: 30rem;
  position: absolute;
  top: 10rem;
  left: 32rem;
}

.img-p {
  width: 7rem;
  height: 1rem;
  font-size: 1rem;
  font-family: Avenir LT Std-45 Book, Avenir LT Std;
  font-weight: normal;
  color: #8a8a8a;
  line-height: 0rem;
  position: absolute;
  top: 36rem;
  left: 44rem;
}
.img-angle {
  width: 7.63rem;
  height: 1.88rem;
  font-size: 1.38rem;
  font-family: Avenir Next-Demi Bold, Avenir Next;
  font-weight: normal;
  color: #ffffff;
  line-height: 0rem;
  position: absolute;
  top: 2rem;
  left: 4rem;
}

.ceshi {
  font-size: 4rem;
  color: #ffffff;
}

/deep/ .el-scrollbar__view {
  text-align: left;
}

/deep/ .el-scrollbar__wrap {
  margin-left: -13px;
  margin-bottom: 0;
}

/deep/ .el-select-dropdown {
  position: absolute;
  top: 1px;
}
</style>
