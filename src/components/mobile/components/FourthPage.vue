<template>
  <div class="hello">
    <!-- fourthpage -->
    <div class="fourth-style" id="mining">
      <div class="gm-feature">GAME FEATURES</div>

      <section class="orderplay">
        <figure class="icon-cards">
          <div class="icon-cards__content">
            <div class="icon-cards__item feature-left">
              <div class="feature-title tit-1">RECRUIT TO PLAY</div>
              <div class="content">
                <div class="feature-item tit-1">
                  With billions of possible gene combinations, each Angel has
                  her own unique advantages and disadvantages!
                </div>
                <div class="feature-item tit-1">
                  Choose the right angel, match the right skills and select the
                  right equipment.
                </div>
                <div class="feature-item tit-1">
                  Come up with your own strategy to build your Invincible angel
                  team!
                </div>
              </div>
            </div>
            <div class="icon-cards__item feature-center">
              <div class="feature-title tit-2">AFK BATTLE TO WIN</div>
              <div class="content">
                <div class="feature-item tit-2">
                  Your angels will fight automatically even if you’re not
                  online. In this way, you can get massive equipment and gems
                  easily.
                </div>
                <div class="feature-item tit-2">
                  In the unique battle mode, lead your team through adventures
                  and win super rare rewards.
                </div>
              </div>
            </div>
            <div class="icon-cards__item feature-right">
              <div class="feature-title tit-3">WIN TO EARN</div>

              <div class="content">
                <div class="feature-item tit-3">
                  Idle Angels is a new type of game, partially owned and
                  operated by its players.
                </div>
                <div class="feature-item tit-3">
                  Earn MHA token by playing and use them to decide the future of
                  the game!
                </div>
              </div>
            </div>
          </div>
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthPage",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
textarea {-webkit-appearance: none;}

select {-webkit-appearance: none;}
.hello {
  height: 65rem;
  width: 100%;
  overflow: hidden;
}
.fourth-style {
  height: 65rem;
  width: 100%;
  background-image: url("../../../assets/homebg/huaban4.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.gm-feature {
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  padding-top: 4rem;
}
.feature-left {
  background-image: url("../../../assets/img/bg_game feature1@2x.png");
  background-size: cover;
  // height: 32rem;
  margin-top: 20rem;
  // width: 29%;
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.feature-center {
  background-image: url("../../../assets/img/bg_game feature2@2x.png");
  background-size: cover;
  // height: 32rem;
  margin-top: 20rem;
  // width: 29%;
  animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.feature-right {
  background-image: url("../../../assets/img/bg_game feature3@2x.png");
  background-size: cover;
  // height: 32rem;
  margin-top: 20rem;
  // width: 29%;
  animation: fadeInRight 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.feature-title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  width: 100%;
  padding-top: 4rem;
  text-align: center;
}
.feature-item {
  color: #fff;
  width: 80%;
  margin-left: 3rem;
  text-align: start;
  padding-top: 2rem;
  font-size: 1rem;
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.tit-1 {
  animation: fadeInLeft 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.tit-2 {
  animation: fadeInCenter 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
.tit-3 {
  animation: fadeInRight 0.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
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
@keyframes fadeInCenter {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  // 50%{
  //   opacity: 0.5;
  //   transform: translateX(-50px);
  // }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
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
.icon-cards {
  position: absolute;
  width: 38rem;
  height: 57rem;
  -webkit-perspective: 120rem;
  perspective: 120rem;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.icon-cards__content {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-55rem) rotateY(0);
  transform: translateZ(-55rem) rotateY(0);
  -webkit-animation: carousel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225)
    forwards;
  animation: carousel 9s infinite cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
}

.icon-cards__content:hover {
  cursor: pointer;
  animation-play-state: paused;
}

.icon-cards__item {
  position: absolute;
  width: 38rem;
  height: 57rem;
  // border-radius: 6px;
}
.icon-cards__item:nth-child(1) {
  -webkit-transform: rotateY(0) translateZ(55rem);
  transform: rotateY(0) translateZ(55rem);
}

.icon-cards__item:nth-child(2) {
  -webkit-transform: rotateY(120deg) translateZ(55rem);
  transform: rotateY(120deg) translateZ(55rem);
}

.icon-cards__item:nth-child(3) {
  -webkit-transform: rotateY(240deg) translateZ(55rem);
  transform: rotateY(240deg) translateZ(55rem);
}

@-webkit-keyframes carousel {
  0%,
  17.5% {
    -webkit-transform: translateZ(-55rem) rotateY(0);
    transform: translateZ(-55rem) rotateY(0);
  }

  27.5%,
  45% {
    -webkit-transform: translateZ(-55rem) rotateY(-120deg);
    transform: translateZ(-55rem) rotateY(-120deg);
  }

  55%,
  72.5% {
    -webkit-transform: translateZ(-55rem) rotateY(-240deg);
    transform: translateZ(-55rem) rotateY(-240deg);
  }

  82.5%,
  100% {
    -webkit-transform: translateZ(-55rem) rotateY(-360deg);
    transform: translateZ(-55rem) rotateY(-360deg);
  }
}

@keyframes carousel {
  0%,
  17.5% {
    -webkit-transform: translateZ(-55rem) rotateY(0);
    transform: translateZ(-55rem) rotateY(0);
  }

  27.5%,
  45% {
    -webkit-transform: translateZ(-55rem) rotateY(-120deg);
    transform: translateZ(-55rem) rotateY(-120deg);
  }

  55%,
  72.5% {
    -webkit-transform: translateZ(-55rem) rotateY(-240deg);
    transform: translateZ(-55rem) rotateY(-240deg);
  }

  82.5%,
  100% {
    -webkit-transform: translateZ(-55rem) rotateY(-360deg);
    transform: translateZ(-55rem) rotateY(-360deg);
  }
}
.orderplay {
  margin-left: -25rem;
  margin-top: 8rem;
}
.content {
  height: 38rem;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
