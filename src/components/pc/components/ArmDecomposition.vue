<template>
  <div class="armsd" id="arms">
    <div v-if="showweapon" class="modal" @click="showweapon = false">
      <div class="md-content" @click.stop>
        <div class="slc-nft">Select NFT</div>
        <div class="wp-head">
          <div class="name">Name</div>
          <div class="level">Level</div>
          <div class="operate">Operate</div>
        </div>
        <div class="wp-item" v-for="(item, index) in weapons" :key="index">
          <div class="i-first">
            <div class="itemimg"></div>
            <span class="item-name-num"
              >&nbsp;{{ item.num }} {{ item.name }}</span
            >
          </div>
          <div class="item-level">{{ item.level }}</div>
          <div class="select-item" @click="selectFunc(item)">Select</div>
        </div>
      </div>
    </div>
    <div v-if="isConfirm" class="c-modal">
      <div
        class="c-content"
        :style="{ width: isSuccess ? '22.5rem' : '' }"
        @click.stop
      >
        <div class="c-title">{{ isSuccess ? "GET" : "CONFIRM" }}</div>
        <div v-if="isSuccess" class="a-style">
          <div class="c-imgs">
            <div class="img-item l-img">
              <img
                class="cir-img"
                src="../../../assets/arms/Pearl@2x.png"
                alt=""
              />
              <div class="img-des">Spirit Pearl</div>
            </div>
            <div class="img-item r-img">
              <img
                class="head-img"
                src="../../../assets/arms/equipment@2x.png"
                alt=""
              />
              <div class="img-des">props</div>
            </div>
          </div>
          <div class="bt-ok" @click="over">OK</div>
        </div>
        <div class="weapon-s" v-else>
          <div class="out-span">
            <img
              class="w-img"
              src="../../../assets/arms/weapon@2x.png"
              alt=""
            />
          </div>
          <div class="wp">Weapon</div>
          <div class="cgl">Your weapon cannot be retrieved</div>
          <div class="cgl1">after the Burn-up</div>
          <div class="bt-butn">
            <div @click="isConfirm = false" class="cancle-bt">Cancel</div>
            <div @click="isSuccess = true" class="confirm-bt">Confirm</div>
          </div>
        </div>
      </div>
    </div>
    <div class="arm-info">
      <div class="left-info">
        <div class="arm">
          <img src="../../../assets/arms/weapon@2x.png" class="wepon" alt="" />
        </div>
        <div v-show="!isSelected" class="shosse-bt" @click="showweapon = true">
          Choose NFT
        </div>
        <div v-show="isSelected" class="clear-bt" @click="isSelected = false">
          Replace Weapon
        </div>
        <div class="bt-info">
          <div class="smha">$SMHA</div>
          <div class="ipt">{{ price }}</div>
          <div v-show="!isSelected" class="sec-bt">Select</div>
          <div v-show="isSelected" @click="isConfirm = true" class="confirm-bt">
            Confirm
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArmDecomposition",
  data() {
    return {
      state: 0,
      weapons: [
        { name: "weapon", num: "#326525", level: 5, price: "0.0000123" },
        { name: "weapon", num: "#326525", level: 5, price: "0.0000124" },
        { name: "weapon", num: "#326525", level: 5, price: "0.0000125" },
        { name: "weapon", num: "#326525", level: 5, price: "0.0000126" },
      ],
      showweapon: false,
      isSelected: false,
      isConfirm: false,
      isSuccess: false,
      price: 0,
    };
  },

  methods: {
    selectFunc(item) {
      console.log(item);
      this.price = item.price;
      this.showweapon = false;
      this.isSelected = true;
    },
    over() {
      (this.showweapon = false),
        (this.isSelected = false),
        (this.isConfirm = false),
        (this.isSuccess = false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.armsd {
  height: 100vh;
  background: #040923;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .arm-info {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    .left-info {
      display: flex;
      flex-direction: column;
      .arm {
        height: 23.4375rem;
        width: 19.625rem;
        background-image: linear-gradient(#1b2144, #040923);
        border-radius: 0.75rem;
        border: 1px solid #36374b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .wepon {
          height: 12.5rem;
        }
        .infos {
          font-size: 0.75rem;
          color: #a0a0a0;
        }
      }
      .shosse-bt {
        color: #fff;
        background: #27d1d1;
        border-radius: 0.45rem;
        height: 2.6875rem;
        width: 19.625rem;
        margin-top: 3.3125rem;
        line-height: 2.6875rem;
        cursor: pointer;
      }
      .clear-bt {
        color: #27d1d1;
        border-radius: 0.45rem;
        height: 2.6875rem;
        width: 19.625rem;
        margin-top: 3.3125rem;
        line-height: 2.6875rem;
        border: 1px solid #27d1d1;
        cursor: pointer;
      }
      .clear-bt:hover {
        background: rgba(39, 209, 209, 1);
        color: #fff;
      }
      .shosse-bt:hover {
        background: rgba(39, 209, 209, 0.8);
      }
      .bt-info {
        display: flex;
        flex-direction: row;
        width: 19.625rem;
        justify-content: space-between;
        height: 2.6875rem;
        margin-top: 1.75rem;
        align-items: center;
      }
      .smha {
        color: #fff;
        font-size: 1rem;
      }
      .ipt {
        width: 10rem;
        height: 2.6875rem;
        background: #000;
        border-radius: 0.45rem;
        border: 1px solid #36374b;
        line-height: 2.6875rem;
        color: #fff;
        font-size: 1rem;
      }
      .sec-bt {
        color: #fff;
        background: rgba(39, 209, 209, 0.24);
        height: 2.6875rem;
        width: 5rem;
        line-height: 2.6875rem;
        border-radius: 0.45rem;
        cursor: pointer;
      }
      .confirm-bt {
        color: #fff;
        background: rgba(39, 209, 209, 1);
        height: 2.6875rem;
        width: 5rem;
        line-height: 2.6875rem;
        border-radius: 0.45rem;
        cursor: pointer;
      }
      .confirm-bt:hover {
        background: rgba(39, 209, 209, 0.8);
      }
    }
    .right-info {
      width: 6.5rem;
      margin-left: 1rem;
      .pearl {
        width: 6.5rem;
        height: 6.375rem;
        background-image: linear-gradient(#1b2144, #040923);
        border-radius: 0.75rem;
        border: 1px solid #36374b;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .circle-img {
        height: 3rem;
      }
      .head-img {
        height: 3.1875rem;
      }
      .tt-s {
        color: #fff;
        font-size: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 1.4rem;
      }
    }
  }
  .modal {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.65);
    z-index: 999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .md-content {
      height: 32.4575rem;
      width: 51rem;
      border-radius: 0.75rem;
      background: #2b2b2b;
      .slc-nft {
        color: #fff;
        padding-top: 1.95rem;
        font-family: "avbook";
      }
      .wp-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #fff;
        height: 3.125rem;
        border-top: 1px solid #000;
        width: 47rem;
        line-height: 3.125rem;
        margin-left: 2rem;
        margin-top: 1.4rem;
        border-bottom: 1px solid #000;
        position: relative;
        .name {
          padding-left: 1rem;
          position: absolute;
        }
        .level {
          position: absolute;
          padding-left: 22rem;
        }
        .operate {
          position: absolute;
          padding-left: 40.68rem;
        }
      }
      .wp-item {
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 47rem;
        line-height: 3.125rem;
        margin-left: 2rem;
        margin-top: 1rem;
        .i-first {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: absolute;
          padding-left: 1rem;
        }
        .itemimg {
          height: 2.25rem;
          width: 2.25rem;
          background: #fff;
          border-radius: 0.25rem;
        }
        .item-level {
          width: 1.5rem;
          text-align: center;
          position: absolute;
          margin-left: 22.4rem;
        }
        .select-item {
          background: #27d1d1;
          border-radius: 0.45rem;
          height: 2.1785rem;
          width: 4.4375rem;
          line-height: 2.1785rem;
          margin-top: 0.5rem;
          margin-left: 40.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .select-item:hover {
          background: rgba(39, 209, 209, 0.8);
        }
      }
    }
  }
  .c-modal {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.65);
    z-index: 999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .c-content {
      //   height: 19.6rem;
      width: 28.7rem;
      border-radius: 0.75rem;
      background: #2b2b2b;
      .bt-ok {
        margin-top: 3.375rem;
        background: #27d1d1;
        color: #fff;
        line-height: 2.68rem;
        height: 2.68rem;
        width: 10.9rem;
        border-radius: 0.45rem;
        margin-bottom: 2rem;
        cursor: pointer;
      }
      .bt-ok:hover {
        background: rgba(39, 209, 209, 0.8);
      }
    }
    .c-title {
      font-family: "avbook";
      padding-top: 2rem;
      color: #fff;
    }
    .a-style{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .c-imgs {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 2.625rem;
    }
    .img-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cir-img {
      height: 3rem;
      margin-top: .15rem;
    }
    .head-img {
      height: 3.1rem;
    }
    .img-des {
      color: #fff;
      padding-top: 0.4rem;
      font-size: 1rem;
    }
    .bt-butn {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 2rem;
      .cancle-bt {
        height: 2.6875rem;
        width: 11rem;
        border-radius: 0.45rem;
        border: 1px solid #27d1d1;
        color: #27d1d1;
        line-height: 2.68rem;
        cursor: pointer;
      }
      .cancle-bt:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      .confirm-bt {
        height: 2.6875rem;
        width: 11rem;
        border-radius: 0.45rem;
        border: 1px solid #27d1d1;
        background: #27d1d1;
        color: #fff;
        line-height: 2.68rem;
        margin-left: 1rem;
        cursor: pointer;
      }
      .confirm-bt:hover {
        background: rgba(39, 209, 209, 0.8);
      }
    }
    .bt-texts {
      font-family: "avbook";
      font-size: 0.9rem;
      padding-top: 1rem;
      color: #fff;
      padding-bottom: 1rem;
    }
  }
  .r-img {
    margin-left: 2rem;
  }
  .weapon-s {
    display: flex;
    flex-direction: column;
    align-items: center;
    .out-span {
      width: 10.9rem;
      height: 11.1rem;
      background: #222222;
      border: 1px solid #36374b;
      border-radius: 0.75rem;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .w-img {
      height: 7.5rem;
    }
    .wp {
      font-size: 0.75rem;
      color: #fff;
      padding-top: 1rem;
    }
    .cgl {
      font-size: 1rem;
      color: #fff;
      padding-top: 2.8rem;
    }
    .cgl1 {
      font-size: 1rem;
      color: #fff;
      padding-top: 0.1rem;
    }
  }
}
</style>
