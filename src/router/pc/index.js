import Vue from "vue";
import Router from "vue-router";
import "../../utils/rem.js";
import "../../assets/style/font.css";

Vue.use(Router);
let router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: (resolve) => require(["@/framework/pc/App"], resolve),
      meta: { title: "首页" },
      redirect: "/Home"
    },
    {
      path: "/Home",
      component: (resolve) => require(["@/components/pc/Home"], resolve),
      meta: { title: "Homepage" }
    },
    {
      path: "/Marketplace",
      component: (resolve) => require(["@/components/pc/Marketplace"], resolve),
      redirect: "/Marketplace/hero",
      meta: { title: "Store" },
      children: [
        {
          path: "hero",
          meta: {
            keepAlive: true //此页面需要缓存
          },
          component: (resolve) =>
            require(["@//components/pc/components/hero"], resolve)
        },
        {
          path: "euipino",
          component: (resolve) =>
            require(["@//components/pc/components/euipino"], resolve)
        },
        {
          path: "cardDetails",
          component: (resolve) =>
            require(["@//components/pc/components/CardDetails"], resolve)
        },

        {
          path: "Unsalable",
          component: (resolve) =>
            require(["@//components/pc/components/Unsalable"], resolve)
        }
      ]
    },
    {
      path: "/Wallet",
      component: (resolve) => require(["@/components/pc/Wallet"], resolve),
      redirect: "/Wallet/asset",
      meta: { title: "商城" },
      children: [
        {
          path: "asset",
          component: (resolve) =>
            require(["@//components/pc/components/Asset"], resolve)
        },
        {
          path: "nft",
          name: "Wallet",
          component: (resolve) =>
            require(["@//components/pc/components/Nft"], resolve)
        },
        {
          path: "claim",
          component: (resolve) =>
            require(["@//components/pc/components/Claim"], resolve)
        },
        {
          path: "email",
          component: (resolve) =>
            require(["@//components/pc/components/Email"], resolve)
        },
        {
          path: "withdraw",
          component: (resolve) =>
            require(["@//components/pc/components/Withdraw"], resolve)
        }
      ]
    },
    {
      path: "/cardDetails",
      component: (resolve) =>
        require(["@//components/pc/components/CardDetails"], resolve)
    },
    {
      path: "/Unsalable",
      component: (resolve) =>
        require(["@//components/pc/components/Unsalable"], resolve)
    },
    {
      path: "/Staking",
      component: (resolve) =>
        require(["@//components/pc/components/Staking"], resolve)
    },

    {
      path: "/box",
      component: (resolve) =>
        require(["@//components/pc/components/Box"], resolve)
    },
    {
      path: "/dash",
      component: (resolve) =>
        require(["@//components/pc/components/Dash"], resolve)
    },

    {
      path: "/armupdate",
      component: (resolve) =>
        require(["@//components/pc/components/ArmUpdate"], resolve)
    },
    {
      path: "/armdecomposition",
      component: (resolve) =>
        require(["@//components/pc/components/ArmDecomposition"], resolve)
    },
    {
      path: "/PreSale",
      component: (resolve) =>
        require(["@//components/pc/components/PreSale"], resolve)
    },
    {
      path: "/ino",
      component: (resolve) =>
        require(["@//components/pc/components/ino"], resolve)
    },
    {
      path: "Soon",
      component: (resolve) =>
        require(["@//components/pc/components/Soon"], resolve)
    },
    {
      path: "/Equipmentblindbox",
      component: (resolve) =>
        require(["@//components/pc/components/Equipmentblindbox"], resolve)
    }
  ],
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      //解决页面从列表页跳转到详情页返回,初始在原来位置
      return savePosition;
    } else {
      //解决页面跳转后页面高度和前一个页面高度一样
      return { x: 0, y: 0 };
    }
  }
});
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "/m.html#/";
    return;
  }
  next();
});
export default router;
