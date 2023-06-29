<template>
    <div>
        <div id="box-1">
          <div class="box-9">
              <div class="Backboard-box">
                 
                  <img src="../../../assets/time/ino_bg2.png" alt="" class="Backboard-img">
                 <div class="backtext">
                      <p class="backtext-1">NFT PRE-SALE</p>
                      <p class="backtext-2">NFT ANGLES&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;</p>
                      <p class="backtext-2">PRE-SALE OPEN</p>
                  </div>
                  <div class="character-box">
                    <div class="textbox">
                        <p class="textp2">Get ready for the genesis NFT offerings You will find exclusive benefits to presale items &</p>
                        <p class="textp2">your chance to get a head start before game launch.</p>
                    </div>
                    <div>
                        
                    </div>
                    <img src="../../../assets/time/pic_afk angle.png" alt="" class="character-img"> 
                  </div>
              </div>
          </div> 
        </div>
        <Initbox></Initbox>
    </div>
    

</template>

<script>
import Initbox from "./Initbox.vue"
export default{
    name:"Initial",
    data(){
        return{

        }
    },
    components:{
        Initbox
    }
}

</script>



<style scoped>
    #box-1{
        width: 100%;
        z-index: 999;
        position: relative;;
    }
    .box-9{
        width: 100%;
        height: 62rem;
        background-image: url("../../../assets/time/bg_INO.jpg");
        background-size: cover; 
        position: relative;
    }
    .character-img{
        height: 30.5rem;
        position: absolute;
        left: 21rem;
        bottom: -13rem;
    }
    .textbox{
        width: 100%;
        color: #833BED;;
        position: absolute;
        top: 37rem;
        /* left: 28rem; */
        font-size: 16px;
        font-family: "demibold";
        font-weight: bold;
    }
    p{
        margin: 0;
    }
    .Backboard-img{
        width: 81rem;
        height: 24.6rem;
        position: absolute;
        left: 17rem;
        top: 47.4rem;
    }

    .backtext{
        position: absolute;
        top: 54rem;
        left: 47.5rem;

    }

    .backtext-1{
        width: 12.06rem;
        height: 3.5rem;
        font-size: 1.5rem;
        font-family: "demibold";
        font-weight: normal;
        color: #7FFFD8;
        line-height: 0px;
    }

    .backtext-2{
        width: 31.3rem;
        height: 4.25rem;
        font-size: 3.75rem;
        font-family: Avenir Next-Bold, Avenir Next;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0px; 
        }
</style>