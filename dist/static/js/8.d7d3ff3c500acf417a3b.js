webpackJsonp([8],{"1Ikb":function(t,s,a){t.exports=a.p+"static/media/Ordinary.c588ff8.mp4"},"3ZSv":function(t,s,a){t.exports=a.p+"static/img/frame_Epic.62c463b.png"},"9Y9k":function(t,s){},Nw00:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("XLwt"),e=a("KsUW"),c=a.n(e),l=a("mtWM");const o=a.n(l).a.create();o.interceptors.response.use(function(t){return t},function(t){switch(t.response.status){case 500:break;case 404:console.log(" not found api")}return Promise.reject(t)});var n=a("2Wsv"),r={name:"Box",data:()=>({isShowModal:!1,isShowGold:!1,buySuccess:!1,msgG:"",Price:{ordinary:"",rare:"",epic:""},Pbin:"",balan:{a:"",b:"",c:""},balancc:"",buyboxher:i.b,butoken:"",getAccot:"",tokenid:"",resultt:{},Qualabc:[],Quala:"",Qualb:"",Qualc:""}),mounted(){c.a.chainWeb3.connectMetamask(),setTimeout(()=>{c.a.HeroLogic.getHeroBoxPrice().then(t=>{this.Price.ordinary=t[0],this.Price.rare=t[1],this.Price.epic=t[2],this.Pbin=t,c.a.HeroLogic.getHeroBoxLimit().then(t=>{this.balan.a=t[0],this.balan.b=t[1],this.balan.c=t[2]})})},50)},methods:{play(){window.location.href="https://pancakeswap.finance/swap"},async buyFunc(){c.a.chainWeb3.connectMetamask();let t=await c.a.HeroLogic.buyHeroBox(this.buyboxher);this.tokenid=t,this.buySuccess=!0;let s=await c.a.HeroLogic.decodeEventBuyHero(this.tokenid);this.tokenid=s.tokenid,console.log(this.tokenid)},async openBox(){let t=await c.a.HeroLogic.openHero(this.tokenid);this.resultt=t,console.log("打开箱子-----",this.resultt);let s=await c.a.HeroLogic.decodeEventOpenHero(this.resultt);console.log(s,"rrs---------------")},async fn(){this.isShowGold=!0,this.msgG=this.Price.ordinary,this.balancc=this.balan.a,this.buyboxher=1},async fn2(){this.isShowGold=!0,this.msgG=this.Price.rare,this.balancc=this.balan.b,this.buyboxher=2},async fn5(){this.isShowGold=!0,this.msgG=this.Price.epic,this.balancc=this.balan.c,this.buyboxher=3},proba(){this.isShowModal=!0,Object(n.a)("795976/pet/findByStatus",{status:"3"}).then(t=>{console.log(t)})}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowModal,expression:"isShowModal"}],staticClass:"modal",on:{click:function(s){t.isShowModal=!1}}},[i("div",{staticClass:"salebg"},[i("div",{staticClass:"top-title"},[t._v("Probability:Ten thousandth ratio")]),t._v(" "),i("table",{staticClass:"table",attrs:{border:"1",cellspacing:"0"}},[t._m(0),t._v(" "),i("tr",{staticClass:"bd"},[i("td",{staticClass:"tdstyle"},[t._v("Ordinary")]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[0]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[1]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[2]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[3]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[4]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Quala[5]))])]),t._v(" "),i("tr",{staticClass:"bd"},[i("td",{staticClass:"tdstyle"},[t._v("Rare")]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[0]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[1]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[2]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[3]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[4]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualb[5]))])]),t._v(" "),i("tr",{staticClass:"bd"},[i("td",{staticClass:"tdstyle"},[t._v("Epic")]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[0]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[1]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[2]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[3]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[4]))]),t._v(" "),i("td",{staticClass:"tdstyle"},[t._v(t._s(t.Qualc[5]))])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowGold,expression:"isShowGold"}],staticClass:"modal",on:{click:function(s){t.isShowGold=!1}}},[t.buySuccess?i("div",{staticClass:"buy-gold",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"success-title"},[t._v("Success")]),t._v(" "),i("img",{staticClass:"success-box",attrs:{src:a("m+rF"),alt:""}}),t._v(" "),i("div",{staticClass:"modal-bt1",on:{click:function(s){return s.stopPropagation(),t.openBox.apply(null,arguments)}}},[t._v("Open Now")])]):i("div",{staticClass:"buy-gold",on:{click:function(t){t.stopPropagation()}}},[i("img",{staticClass:"buy-price",attrs:{src:a("nPYt"),alt:""}}),t._v(" "),i("div",{staticClass:"item-price"},[t._v(t._s(t.msgG))]),t._v(" "),i("div",{staticClass:"may-price"},[t._v("$200,000")]),t._v(" "),i("div",{staticClass:"modal-bt",on:{click:function(s){return s.stopPropagation(),t.buyFunc.apply(null,arguments)}}},[t._v("Buy Now")]),t._v(" "),i("div",{staticClass:"modal-bottom"},[i("div",{staticClass:"bt-left",on:{click:function(s){return t.play()}}},[t._v("Buy BNB")]),t._v(" "),i("div",{staticClass:"bt-right"},[t._v("Balance: "+t._s(t.balancc))])])])]),t._v(" "),i("div",{staticClass:"topqus",on:{click:function(s){return t.proba()}}},[t._m(1)]),t._v(" "),i("div",{staticClass:"contents-box"},[i("div",{staticClass:"box-item1 icon-cards__item"},[t._m(2),t._v(" "),i("div",{staticClass:"space-bt"},[i("div",{staticClass:"bt-price"},[i("img",{staticClass:"gold-img",attrs:{src:a("nPYt"),alt:""}}),t._v(" "),i("div",[t._v(t._s(this.Price.ordinary))])]),t._v(" "),i("div",{staticClass:"space-buy",on:{click:function(s){return t.fn()}}},[t._v("Buy Now")])])]),t._v(" "),i("div",{staticClass:"box-item icon-cards__item"},[t._m(3),t._v(" "),i("div",{staticClass:"space-bt"},[i("div",{staticClass:"bt-price"},[i("img",{staticClass:"gold-img",attrs:{src:a("nPYt"),alt:""}}),t._v(" "),i("div",[t._v(t._s(this.Price.rare))])]),t._v(" "),i("div",{staticClass:"space-buy",on:{click:function(s){return t.fn2()}}},[t._v("Buy Now")])])]),t._v(" "),i("div",{staticClass:"box-item3 icon-cards__item"},[t._m(4),t._v(" "),i("div",{staticClass:"space-bt"},[i("div",{staticClass:"bt-price"},[i("img",{staticClass:"gold-img",attrs:{src:a("nPYt"),alt:""}}),t._v(" "),i("div",[t._v(t._s(this.Price.epic))])]),t._v(" "),i("div",{staticClass:"space-buy",on:{click:function(s){return t.fn5()}}},[t._v("Buy Now")])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"head"},[a("td",{staticClass:"tdstyle"},[t._v("Quality")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("N")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("R")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("SR")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("SSR")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("UR")]),t._v(" "),a("td",{staticClass:"tdstyle"},[t._v("EXP")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"rightqus"},[s("div",{staticClass:"question"},[this._v("?")]),this._v(" "),s("div",[this._v("Probability")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-bg1"},[s("video",{staticClass:"box-img",attrs:{loop:"",autoplay:""}},[s("source",{attrs:{src:a("1Ikb"),type:"video/mp4"}})]),this._v(" "),s("img",{staticClass:"lan1",attrs:{src:a("tDyx"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-bg2"},[s("video",{staticClass:"box-img",attrs:{loop:"",autoplay:""}},[s("source",{attrs:{src:a("ZXvD"),type:"video/mp4"}})]),this._v(" "),s("img",{staticClass:"lan2",attrs:{src:a("wraJ"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-bg3"},[s("video",{staticClass:"box-img",attrs:{loop:"",autoplay:""}},[s("source",{attrs:{src:a("oxXt"),type:"video/mp4"}})]),this._v(" "),s("img",{staticClass:"lan3",attrs:{src:a("3ZSv"),alt:""}})])}]};var v=a("VU/8")(r,d,!1,function(t){a("9Y9k")},"data-v-321c6e90",null);s.default=v.exports},ZXvD:function(t,s,a){t.exports=a.p+"static/media/Rare.05e598d.mp4"},"m+rF":function(t,s,a){t.exports=a.p+"static/img/Pre Sale1@2x.f6864e0.png"},nPYt:function(t,s){t.exports="data:image/png;base64,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"},oxXt:function(t,s,a){t.exports=a.p+"static/media/Epic.2f2bcff.mp4"},tDyx:function(t,s,a){t.exports=a.p+"static/img/frame_Ordinary.46d6174.png"},wraJ:function(t,s,a){t.exports=a.p+"static/img/frame_Rare.6e8d5c3.png"}});
//# sourceMappingURL=8.d7d3ff3c500acf417a3b.js.map