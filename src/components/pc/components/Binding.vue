<template>
  <div class="bind">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      class="dialog-style"
      width="25%"
      :before-close="handleClose"
    >
      <div class="dil">
        <div class="md-title">Bind confirmation</div>
        <div>
          <img
            src="../../../assets/mplace/pic_Bind confirmation@2x.png"
            class="bd-img"
            alt=""
          />
        </div>
        <div class="md-ques">Are you sure to bind your wallet and email？</div>
        <div class="md-func">It cannot be changed after binding</div>
        <div class="md-bottom">
          <div class="cancle-bt" @click="dialogVisible = false">Cancle</div>
          <div class="confirm-bt" @click="dialogVisible = false">Confirm</div>
        </div>
      </div>
    </el-dialog>
    <div class="no-bind" v-if="!isBinding">
      <div class="bd-content">
        <div class="bd-tt">Binding</div>
        <el-input placeholder="Enter email address"></el-input>
        <el-input placeholder="Confirm your email"></el-input>
        <div class="confirm">Confirm</div>
      </div>
    </div>
    <div v-else class="top-content">
      <div class="tt-stle">
        <img
          src="../../../assets/mplace/icon_wallet@2x.png"
          class="zuanshis"
          alt=""
        />
        <div>
          <div class="t-title">Wallet</div>
          <div class="t-value" style="color: #fff">0x9079…cf3a</div>
        </div>
      </div>
      <div class="center"><img src="../../../assets/mplace/ICON_BINDING@2x.png" class="links" alt=""></div>
       <div class="tt-stle cen-rt">
        <img
          src="../../../assets/mplace/icon_email@2x.png"
          class="zuanshis"
          alt=""
        />
        <div>
          <div class="t-title">Email</div>
          <div class="t-value" style="color: #fff">xxxxxx@xxx.com</div>
        </div>
      </div>
      <div class="im-box">
        <img src="../../../assets/mplace/pic_binding@2x.png" class="techo" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "claim",
  data() {
    return {
      isBinding: true,
      dialogVisible: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bind {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-content {
    width: 83.5rem;
    height: 11rem;
    background: #000415;
    border: 1px solid #36374b;
    border-radius: 0.75rem;
    margin-top: 4.375rem;
    display: flex;
    justify-content: space-between;
    .t-title {
      color: #27D1D1;
      font-size: 1rem;
      font-family: "mdem";
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 2.875rem;
    }
    .t-value {
      color: #7fffd8;
      font-size: 1.5rem;
      font-family: "mdem";
      text-align: start;
      padding-left: 2.5rem;
      padding-top: 1rem;
    }
    .im-box {
      margin-left: 1rem;
      width: 15rem;
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
      margin-top: 4.12rem;
      margin-left: 2rem;
    }
  }
  .no-bind {
    width: 83.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 47rem;
  }
  .bd-content {
    height: 19.8rem;
    width: 31.56rem;
    background: #000415;
    border: 1px solid #36374b;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    position: relative;
  }
  .bd-tt {
    font-family: "mdem";
    font-size: 1.5rem;
    padding-top: 2.875rem;
    padding-left: 2.5rem;
    text-align: start;
    color: #fff;
    padding-bottom: 1rem;
  }
  .bd-content /deep/.el-input__inner {
    background: #000415;
    border: 1px solid #36374b;
    width: 26.31rem;
    height: 2.6875rem;
    margin-top: 1rem;
  }
  .bd-content /deep/ .el-input__inner::placeholder {
    color: #a0a0a0;
    font-size: 1rem;
    font-family: "avbook";
  }
  .confirm {
    font-size: 1rem;
    font-family: "avpro";
    color: #fff;
    height: 2.6875rem;
    width: 7.25rem;
    background: rgba(39, 209, 209, 0.24);
    line-height: 2.8rem;
    border-radius: 0.4rem;
    position: absolute;
    margin-top: 15.12rem;
    margin-left: 21.57rem;
    cursor: pointer;
  }
  .confirm:hover {
    background: rgba(39, 209, 209, 1);
  }
  .bd-img {
    height: 3.1rem;
    margin-top: 2.56rem;
  }
  .md-title {
    font-family: "avbook";
    font-size: 1.5rem;
    padding-top: 2.875rem;
    color: #fff;
  }
  .md-ques {
    color: #fff;
    font-family: "mreg";
    padding-top: 2.6rem;
    font-size: 1rem;
  }
  .md-func {
    padding-top: 0.5rem;
    color: #fff;
    font-family: "mreg";
    font-size: 1rem;
  }
  .dil{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .md-bottom{
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content:center;
      margin-top: 2rem;
  }
  .cancle-bt{
      height: 2.6785rem;
      width: 12rem;
      border-radius: .45rem;
      border: 1px solid #27D1D1;
      color: #27D1D1;
      line-height: 2.7rem;
      font-family: "mdem";
      cursor: pointer;
  }
  .cancle-bt:hover{
      background: rgba(255, 255, 255, .2);
  }
  .confirm-bt{
      cursor: pointer;
      color: #fff;
      height: 2.6785rem;
      width: 12rem;
      border-radius: .45rem;
      background: #27D1D1;
      line-height: 2.7rem;
      border: 1px solid #27D1D1;
      font-family: "mdem";
      margin-left: 1rem;
  }
  .confirm-bt:hover{
      background: rgba(39, 209, 209, .6);
      border: 1px solid rgba(39, 209, 209, .6);
  }
  .center{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -8rem;
  }
  .cen-rt{
      margin-left: -10rem;
  }
  .links{
      height: 2.5rem;
  }
}
.bind /deep/.el-dialog__header {
  display: none;
}
.bind /deep/ .el-dialog,
.el-pager li {
  background: none;
}
.bind /deep/ .el-dialog__body {
  background: #2c2c2c;
  border-radius: 0.7rem;
  height: 22.65rem;
  width: 30rem;
}
</style>
