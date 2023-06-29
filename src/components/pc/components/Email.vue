<template>
  <div class="dil">
    <div class="foor" v-if="Conf">
      <div class="pbind">Binding</div>
      <input
        type="text"
        class="inem"
        placeholder="Enter email address"
        v-model="msg"
      />
      <input
        type="password"
        class="inem2"
        placeholder="Confirm you email"
        v-model="word"
      />
      <el-button class="btncon" type="text" @click="open()"
        ><span class="spcn">Confirm</span>
      </el-button>
    </div>

    <div class="eml-box" v-else>
      <div>
        <img
          src="../../../assets/email/icon_wallet.png"
          alt=""
          class="img-emem"
        />
        <p class="emwa-p1">Wallet</p>
        <p class="emwa-p2">{{ token }}</p>
      </div>

      <img
        src="../../../assets/email/2022-04-08 012452.png"
        alt=""
        class="img-emem2"
      />

      <div>
        <img
          src="../../../assets/email/icon_email.png"
          alt=""
          class="img-emem3"
        />
        <p class="emwa-p3">Email</p>
        <p class="emwa-p4">{{ ress }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import bus from "../../../utils/bus";
import sdk from "../../../utils/chanjssdk";
import { post } from "../../../request/http";

export default {
  name: "claim",
  data() {
    return {
      Gold: true,
      Conf: true,
      msg: "",
      word: "",
      token: "",
      ress: "",
    };
  },

  mounted() {
    sdk.chainWeb3.connectMetamask();
    let user = sdk.chainWeb3.getAccount(); //查自己
    this.token = user;

    let res = sessionStorage.getItem("age");

    console.log(res, "---------");
    this.ress = res;

    if (sessionStorage.getItem("age").length != 0) {
      this.Conf = false;
    }
  },

  methods: {
    open() {
      sessionStorage.setItem("age", this.msg);

      let res = sessionStorage.getItem("age");
      this.ress = res;

      sdk.chainWeb3.connectMetamask();
      let user = sdk.chainWeb3.getAccount(); //查自己

      this.token = user;
      bus.$emit("eclick", this.Gold);
      post("/client/api/wallet/bindWallet", {
        email: this.msg,
        password: this.word,
        address: this.token,
      }).then((res) => {
        console.log(res);
        bus.$emit("eclick", this.Gold);
        // this.Conf = false
      });
    },
  },
  created() {
    bus.$on("clear", (boole) => {
      this.Conf = false;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.foor {
  width: 505px;
  height: 317px;
  background: #000415;
  border-radius: 16px 16px 16px 16px;
  opacity: 1;
  border: 1px solid #36374b;
  margin-top: 11.625rem;
  margin-left: 30rem;
  // position: relative;
}

.pbind {
  width: 5.18rem;
  height: 2rem;
  font-size: 1.5rem;
  font-family: "Avenir-Medium, Avenir";
  font-weight: 500;
  color: #ffffff;
  margin-top: 2.87rem;
  margin-left: 18.5rem;
}

.inem {
  width: 421px;
  height: 43px;
  background: #000415;
  border-radius: 9px 9px 9px 9px;
  border: 0px;
  outline: none;
  opacity: 1;
  border: 1px solid #36374b;
  margin-top: 2rem;
  color: #ffffff;
  font-size: 1rem;
}

.inem2 {
  width: 421px;
  height: 43px;
  background: #000415;
  border-radius: 9px 9px 9px 9px;
  border: 0px;
  outline: none;
  opacity: 1;
  border: 1px solid #36374b;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 1rem;
}

.btncon {
  width: 116px;
  height: 43px;
  background-color: rgba(39, 209, 209, 0.24);
  border-radius: 6px 6px 6px 6px;
  margin-left: 20rem;
  margin-top: 2rem;
}

.spcn {
  width: 5rem;
  height: 1.37rem;
  font-size: 1rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
}

.eml-box {
  width: 86.5rem;
  height: 9.38rem;
  background: #000000;
  border-radius: 1rem 1rem 1rem 1rem;
  opacity: 1;
  border: 0.06rem solid #36374b;
  margin-left: 2rem;
  margin-top: 2rem;
  position: relative;
}

.emwa-p1 {
  width: 2.5rem;
  height: 1.19rem;
  font-size: 0.88rem;
  font-family: Avenir-Medium, Avenir;
  font-weight: 500;
  color: #27d1d1;
  line-height: 0rem;
  position: absolute;
  left: 9.6rem;
  top: 2.5rem;
}

.emwa-p2 {
  width: 10.31rem;
  height: 2.06rem;
  font-size: 1.5rem;
  font-family: Avenir-Medium, Avenir;
  font-weight: 500;
  color: #ffffff;
  line-height: 2.06rem;
  position: absolute;
  left: 9.4rem;
  top: 3rem;
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字超出的部分显示为省略号 */
  text-overflow: ellipsis;
}

.img-emem {
  position: absolute;
  left: 4rem;
  top: 3rem;
}

.img-emem2 {
  width: 3rem;
  height: 2rem;
  opacity: 1;
  position: absolute;
  top: 3.8rem;
  left: 26rem;
}

.img-emem3 {
  margin-top: 3rem;
  position: absolute;
  left: 36rem;
}

.emwa-p3 {
  width: 2.13rem;
  height: 1.19rem;
  font-size: 0.88rem;
  font-family: Avenir-Medium, Avenir;
  font-weight: 500;
  color: #27d1d1;
  line-height: 0rem;
  position: absolute;
  top: 2.5rem;
  left: 42rem;
}

.emwa-p4 {
  width: 11.5rem;
  height: 2.06rem;
  font-size: 1.5rem;
  font-family: Avenir-Medium, Avenir;
  font-weight: 500;
  color: #ffffff;
  line-height: 0rem;
  position: absolute;
  top: 4rem;
  left: 42rem;
}
</style>
