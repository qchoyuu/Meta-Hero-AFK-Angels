<template>
  <div class="helloth" ref="helloth">
    <!-- thirdpage -->
    <div class="third-style" id="marketplace">
      <div class="out-style">
        <div v-if="showFirst && state === 0" :class="isAdd?'im5s':'ims0'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>

        <div v-if="showFirst && state === 1"  :class="isAdd?'im5s':'ims'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>
        <div v-if="state === 2" :class="isAdd?'im5s':'ims1'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>
        <div v-if="state === 3" :class="isAdd?'im5s':'ims2'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>
        <div v-if="state === 4" :class="isAdd?'im5s':'ims3'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>
        <div v-if="state === 5" :class="isAdd?'im5s':'ims4'">
          <img :src="dataSource[state].urls" class="item-style" alt="" />
        </div>
        <div class="detail-content">
          <div v-if="state === 0 && showFirst" class="item-name imn0">
            {{ dataSource && dataSource[state].name }}
          </div>
          <div v-if="state === 1" class="item-name imn1">
            {{ dataSource && dataSource[state].name }}
          </div>
          <div v-if="state === 2" class="item-name imn2">
            {{ dataSource && dataSource[state].name }}
          </div>
          <div v-if="state === 3" class="item-name imn3">
            {{ dataSource && dataSource[state].name }}
          </div>
          <div v-if="state === 4" class="item-name imn4">
            {{ dataSource && dataSource[state].name }}
          </div>
          <div v-if="state === 5" class="item-name imn5">
            {{ dataSource && dataSource[state].name }}
          </div>

          <img
            src="../../../assets/img/thirdouts.png"
            class="outs"
            :class="state===0?'imn0':state===1?'imn1':state===2?'imn2':state===3?'imn3':state===4?'imn4':'imn5'"
            alt=""
          />
          <div  :class="state===0?'imn0':state===1?'imn1':state===2?'imn2':state===3?'imn3':state===4?'imn4':'imn5'" class="item-stats" >
            Stats
          </div>
          <div
           v-if="showFirst"
            class="item-props"
             :class="state===0?'imn0':state===1?'imn1':state===2?'imn2':state===3?'imn3':state===4?'imn4':'imn5'"
          >
            <div class="line-props">
              <div class="item-space">
                <div>HP</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 26@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].HP }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Physical Attack</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 22@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].PA }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Physical Defense</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 23@2x.png"
                    class="prop-img"
                    style="width: 1rem"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].PD }}
                  </div>
                </div>
              </div>
            </div>
            <div class="line-props">
              <div class="item-space">
                <div>Magic Attack</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 24@2x.png"
                    class="prop-img"
                    style="height: 1.2rem"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].MA }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Magic Defence</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 25@2x.png"
                    class="prop-img"
                    style="width: 1rem"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].MD }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Accuracy</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 27@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].Accuracy }}
                  </div>
                </div>
              </div>
            </div>
            <div class="line-props">
              <div class="item-space">
                <div>Evasion</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 28@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].Evasion }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Crit</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 30@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].Crit }}
                  </div>
                </div>
              </div>
              <div class="item-space">
                <div>Crit Resist</div>
                <div class="prop-style">
                  <img
                    src="../../../assets/img/组 29@2x.png"
                    class="prop-img"
                    alt=""
                  />
                  <div class="prop-value">
                    {{ dataSource && dataSource[state].CR }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lunbo">
        <div @click="leftClick" class="left-click"></div>
        <div class="data-source" v-if="showFirst">
          <div
            v-for="(item, index) in dataSource"
            @click="state = index"
            :key="index"
            :style="{
              marginTop:
                index === 2
                  ? '1rem'
                  : index == 3
                  ? '-.5rem'
                  : index === 5
                  ? ''
                  : '',
            }"
          >
            <img
              class="data-item"
              :class="
                index === 0
                  ? 'im1'
                  : index === 1
                  ? 'im2'
                  : index === 2
                  ? 'im3'
                  : index === 3
                  ? 'im4'
                  : index === 4
                  ? 'im5'
                  : 'im6'
              "
              :style="{
                marginLeft: index === 0 ? '' : '-9rem',
                marginTop: index === state ? '-10px' : '',
                height:
                  index === 2
                    ? '10.5rem'
                    : index == 3
                    ? '12rem'
                    : index === 5
                    ? ''
                    : '',
              }"
              :src="
                state === index
                  ? dataSource[state].light
                  : dataSource[index].dark
              "
            />
          </div>
        </div>
        <div @click="rightClick" class="right-click"></div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/bus";
export default {
  name: "ThirdPage",
  data() {
    return {
      gif: require("../../../assets/xuliezhen/1.png"),
      dataSource: [
        {
          id: 1,
          name: "TAKASHA",
          url: require("../../../assets/img/pic_token angle@2x.png"),
          light: require("../../../assets/people/card_1_sel@2x.png"),
          dark: require("../../../assets/people/card_1_nor@2x.png"),
          HP: "644",
          PA: "89",
          PD: "61",
          MA: "6",
          MD: "41",
          Accuracy: "0.1%",
          Evasion: "6.1%",
          Crit: "10.1%",
          CR: "10.1%",
          urls: require("../../../assets/xuliezhen/1.png"),
        },
        {
          id: 2,
          name: "XIAOEYU",
          url: require("../../../assets/img/PIC_GAME introduction@2x.png"),
          light: require("../../../assets/people/card_2_sel@2x.png"),
          dark: require("../../../assets/people/card_2_nor@2x.png"),
          HP: "645",
          PA: "88",
          PD: "62",
          MA: "7",
          MD: "44",
          Accuracy: "0.2%",
          Evasion: "6.2%",
          Crit: "10.2%",
          CR: "10.2%",
          urls: require("../../../assets/xuliezhen/2.png"),
        },
        {
          id: 3,
          name: "NATASHA",
          url: require("../../../assets/img/pic_token angle@2x.png"),
          light: require("../../../assets/people/card_3_sel@2x.png"),
          dark: require("../../../assets/people/card_3_nor@2x.png"),
          HP: "646",
          PA: "87",
          PD: "63",
          MA: "8",
          MD: "45",
          Accuracy: "0.3%",
          Evasion: "6.3%",
          Crit: "10.3%",
          CR: "10.3%",
          urls: require("../../../assets/xuliezhen/3.png"),
        },
        {
          id: 4,
          name: "JINKESI",
          url: require("../../../assets/img/PIC_GAME introduction@2x.png"),
          light: require("../../../assets/people/card_4_sel@2x.png"),
          dark: require("../../../assets/people/card_4_nor@2x.png"),
          HP: "647",
          PA: "86",
          PD: "64",
          MA: "9",
          MD: "43",
          Accuracy: "0.4%",
          Evasion: "6.4%",
          Crit: "10.4%",
          CR: "10.4%",
          urls: require("../../../assets/xuliezhen/4.png"),
        },
        {
          id: 5,
          name: "LAOBAIGAN",
          url: require("../../../assets/img/pic_token angle@2x.png"),
          light: require("../../../assets/people/card_5_sel@2x.png"),
          dark: require("../../../assets/people/card_5_nor@2x.png"),
          HP: "648",
          PA: "85",
          PD: "65",
          MA: "5",
          MD: "42",
          Accuracy: "0.5%",
          Evasion: "6.5%",
          Crit: "10.5%",
          CR: "10.5%",
          urls: require("../../../assets/xuliezhen/5.png"),
        },
        {
          id: 6,
          name: "ROMATIC",
          url: require("../../../assets/img/PIC_GAME introduction@2x.png"),
          light: require("../../../assets/people/card_6_sel@2x.png"),
          dark: require("../../../assets/people/card_6_nor@2x.png"),
          HP: "649",
          PA: "84",
          PD: "66",
          MA: "4",
          MD: "46",
          Accuracy: "0.6%",
          Evasion: "6.6%",
          Crit: "10.6%",
          CR: "10.6%",
          urls: require("../../../assets/xuliezhen/6.png"),
        },
      ],
      state: 0,
      showFirst: false,
      isAdd: true,
    };
  },
  props: {
    thirdState: {
      type: Number,
      require: true,
      default: null,
    },
  },
  watch: {
    thirdState: function () {
      if (this.thirdState === 2) {
        setTimeout(() => {
          this.showFirst = true;
        }, 200);
      } else {
        setTimeout(() => {
          this.showFirst = false;
        }, 500);
      }
    },
  },
  mounted() {
    bus.$on("ismargin", (e) => {
      if (e > 0.2 && e < 0.25) {
        if (this.$refs.helloth.getBoundingClientRect().top < 0) {
          this.showFirst = true;
        }
      }else if(e>0.25&&e<0.3){
        if (this.$refs.helloth.getBoundingClientRect().top < 50) {
          this.showFirst = true;
        }
      }
      else if(e>0.3&&e<0.35){
        if (this.$refs.helloth.getBoundingClientRect().top < 100) {
          this.showFirst = true;
        }
      }else if(e>0.35&&e<0.4){
        if (this.$refs.helloth.getBoundingClientRect().top < 150) {
          this.showFirst = true;
        }
      }else if(e>0.4&&e<0.45){
        if (this.$refs.helloth.getBoundingClientRect().top < 300) {
          this.showFirst = true;
        }
      }else if(e>0.45&&e<0.5){
        if (this.$refs.helloth.getBoundingClientRect().top < 420) {
          this.showFirst = true;
        }
      }else {
        if (this.$refs.helloth.getBoundingClientRect().top < 450) {
          this.showFirst = true;
        }
      }
    });
  },
  destroyed() {},
  methods: {
    leftClick() {
      if (this.state === 0) {
        this.state = 0;
      } else {
        this.state = this.state - 1;
        this.isAdd = false;
      }
    },
    rightClick() {
      if (this.state === this.dataSource.length - 1) {
        this.state = this.dataSource.length - 1;
      } else {
        this.state = this.state + 1;
        this.isAdd = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.helloth {
  width: 100%;
  height: 61rem;
  overflow: hidden;
  position: relative;
}
.third-style {
  height: 61rem;
  width: 100%;
  background-image: url("../../../assets//homebg/huaban3.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.out-style {
  display: flex;
  flex-direction: row;
  margin-top: 16rem;
}
.item-style {
  height: 70rem;
  width: 70rem;
  margin-top: -40rem;
  margin-left: -47rem;
  position: absolute;
  z-index: 999;
}
.item-style:hover {
  -webkit-animation: bounce-down 1.5s linear infinite;
  animation: bounce-down 1.5s linear infinite;
}
.detail-content {
  background-image: url("../../../assets/img/thirdout.png");
  background-size: cover;
  // margin-top: -10rem;
  height: 23.69rem;
  width: 36.44rem;
  margin-left: 2rem;
  z-index: 998;
  position: absolute;
  margin-top: -22rem;
}
@keyframes bounce-down {
  25% {
    transform: translate3d(4px, 4px, 0px);
    // transform: translateX(-3px);
  }
  50%,
  100% {
    transform: translateY(0);
    // transform: translateX(-3px);
  }
  75% {
    transform: translate3d(-4px, 4px, 0px);
    // transform: translateX(3px);
  }
}
.item-name {
  font-family: "osb";
  color: #fff;
  font-weight: bold;
  font-size: 1.875rem;
  position: absolute;
  padding-left: 11rem;
  padding-top: 2rem;
}
.item-stats {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  position: absolute;
  padding-left: 11.4rem;
  padding-top: 7.7rem;
  font-size: 1rem;
  z-index: 9999;
}
.item-props {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 9rem;
  width: 22rem;
  margin-left: 11rem;
  color: #999999;
  z-index: 9999;
  position: absolute;
  // background-image: url("../../../assets/img/thirdoutss") ;
}
.outs {
  height: 24rem;
  position: absolute;
  z-index: 2;
  margin-left: -18rem;
}
.prop-style {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}
.prop-img {
  height: 1rem;
  width: 1.2rem;
}
.line-props {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  text-align: start;
  margin-top: 1.5rem;
}
.prop-value {
  padding-left: 0.3rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.875rem;
}
.item-space {
  font-family: "avbook";
  width: 8rem;
  font-size: 0.875rem;
  // font-size: 1.1rem;
}
.lunbo {
  display: flex;
  flex-direction: row;
  margin-top: 46rem;
  width: 65rem;
  align-items: center;
  z-index: 999;
  margin-left: 4rem;
  position: absolute;
}
.left-click {
  background-image: url("../../../assets/people/btn_choose_nor@2x.png");
  background-size: cover;
  height: 3.5rem;
  width: 2.5rem;
  -moz-transform: rotate(-180deg);
  transform: rotate(-180deg);
  // margin-top: 1rem;
  // margin-left: 2rem;
  cursor: pointer;
}
.left-click:hover {
  background-image: url("../../../assets/people/btn_choose_sel@2x.png");
}
.right-click:hover {
  background-image: url("../../../assets/people/btn_choose_sel@2x.png");
}
.right-click {
  background-image: url("../../../assets/people/btn_choose_nor@2x.png");
  background-size: cover;
  height: 3.5rem;
  width: 2.5rem;
  cursor: pointer;
}
.data-source {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
}
.data-item {
  height: 11.5rem;
  transition-duration: 800ms;
}
.data-item:hover {
  margin-top: -10px;
  transition-duration: 800ms;
}
//动画效果
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLefts {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.im1 {
  animation: fadeInLeft 0.3s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.im2 {
  animation: fadeInLeft 0.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.im3 {
  animation: fadeInLeft 0.9s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.im4 {
  animation: fadeInLeft 1.2s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.im5 {
  animation: fadeInLeft 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
  position: absolute;
}
.im5s {
  animation: fadeInLeftsss 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
  position: absolute;
}
@keyframes fadeInLeftsss {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.im6 {
  animation: fadeInLeft 1.8s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;
}
.ims {
  animation: fadeInLefts 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ims1{
  animation: fadeInLefts1 1.4s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ims2{
  animation: fadeInLefts2 1.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ims3{
  animation: fadeInLefts3 1.6s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ims4{
  animation: fadeInLefts4 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ims0{
  animation: fadeInLefts0 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes fadeInLefts0 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLefts1 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLefts2 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLefts3 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLefts4 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.imn0{
  animation: fade0 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.imn1{
  animation: fade1 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.imn2{
  animation: fade2 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.imn3{
  animation: fade3 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.imn4{
  animation: fade4 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.imn5{
  animation: fade5 1.7s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes fade0 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade1 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade2 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade3 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade4 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade5 {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
