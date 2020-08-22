<template>
  <div class="index">
    <div class="nav_first">
      <div class="nav_first_1">
        <div class="category">
          <span>全部商品</span>
        </div>
        <div class="first_center">
          <ul>
            <li v-for="(dnf,i) of precinct" :key="i">
              <router-link :to="dnf.url" v-text="dnf.name">}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="toolbar">
      <ul>
        <li class="toolbar_item toolbar_item_feedback">
          <span class="toolbar_layer">
            <div class="tootext">
              <p>扫描二维码关注我们</p>
              <img src="../assets/images/fwh_ewm.png" alt />
            </div>
          </span>
        </li>
        <li class="toolbar_item toolbar_item_weixin">
          <span class="toolbar_layer">
            <div class="tootphone">
              <p class="mt3">
                QQ服务时间：
                <br />08:30-11:30 13:30-18:00
              </p>
              <p class="toocolor">
                <a href>QQ:1969909953</a>
              </p>
            </div>
          </span>
        </li>
        <li class="toolbar_item toolbar_item_app">
          <span class="toolbar_layer">
            <div class="tootphone">
              <p class="mt3">
                上班时间：
                <br />9：00-17：00
              </p>
              <p class="toocolor">400-070-2680</p>
            </div>
          </span>
        </li>
        <li>
          <a href class="toolbar_item toolbar_item_top"></a>
        </li>
      </ul>
    </div>

    <div class="nav_tow">
      <div class="nav_towleft">
        <ul>
          <li
            v-for="(nav_left,index) of nav_lefts"
            :key="index"
            @mouseenter="show"
            @mouseleave="hidn"
          >
            <span>{{nav_left}}</span>
          </li>
        </ul>
      </div>
      <div class="sub" v-show="isShow" @mouseenter="show" @mouseleave="hidn">
        <dl v-for="(nav_right,index) of nav_rights" :key="index" class="nav_right">
          <dt>
            <a href>{{nav_right.title}}</a>
          </dt>
          <dd v-for="(item,index) of nav_right.cont" :key="index">
            <a href>{{item}}</a>
          </dd>
        </dl>
      </div>
      <!-- banner -->
      <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
          <swiper-slide v-for="(i,k) in imgList" :key="k">
            <img :src="i.path" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="wudi">
        <div class="wudi_1">
          <div class="first_right">
            <ul>
              <li class="notice">公告</li>
              <li class="windzxsh">资讯</li>
            </ul>
          </div>
        </div>
        <div class="bd">
          <ul>
            <li v-for="(affiches_text,affiche) of affiches" :key="affiche">
              <a href>{{affiches_text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="adv">
      <div class="adv_item">
        <ul>
          <li v-for="(j,p) of adv" :key="p">
            <a href>
              <img :src="j.advimg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="fool_1">
      <div class="fbt">
        <h1>岁月知味</h1>
        <div class="pro_more">
          <router-link to="/product/全部">更多>></router-link>
        </div>
      </div>
    </div>
    <div class="product_1">
      <div class="product_2">
        <ul>
          <li v-for="(prod,index) of arr2" :key="index">
            <router-link :to="`/details/${prod.pid}`">
              <div class="f_img">
                <a href>
                  <img :src="prod.pic" />
                </a>
              </div>
              <div class="f_name">
                <a href>{{prod.title2}}</a>
              </div>
              <div class="f_price">
                价格：
                <span>{{prod.price.toFixed(2)}}</span>元
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="fool_1">
      <div class="fbt">
        <h1>高顶茶叶</h1>
        <div class="pro_more">
          <!-- <a href>>></a> -->
          <router-link to="/product/全部">更多>></router-link>
        </div>
      </div>
    </div>
    <div class="product_1">
      <div class="product_2">
        <ul>
          <li v-for="(prod,index) of arr1" :key="index">
            <router-link :to="`/details/${prod.pid}`">
              <div class="f_img">
                <a href>
                  <img :src="prod.pic" />
                </a>
              </div>
              <div class="f_name">
                <a href>{{prod.title2}}</a>
              </div>
              <div class="f_price">
                价格：
                <span>{{prod.price.toFixed(2)}}</span>元
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css"; // 组件引入
import { swiper, swiperSlide } from "vue-awesome-swiper"; // 组件样式
export default {
  data() {
    props: ["pid"];
    return {
      imgList: [],
      adv: [],
      product: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000, // 3秒时长切换
        },
        loop: true,
      },
      affiches: [
        "语茶商城支付通道升级公告",
        "《岁月知味•明春》在茶多...",
        "《岁月知味•明春》上线公...",
        "《岁月知味•中山》上线公...",
        "《斗记•融》上线公告",
        "茶多分兑换时间说明",
        "活动申明",
        "浙江电视台报道茶文化研讨...",
      ],
      precinct: [
        {
          name: "首 页",
          url: "/",
        },
        {
          name: "茶客专区",
          url: "/product/全部",
        },
        {
          name: "活动专区",
          url: "/product/全部",
        },
        {
          name: "茶多分专区",
          url: "/product/全部",
        },
        {
          name: "集贸市场",
          url: "/product/全部",
        },
        {
          name: "通知公告",
          url: "/product/全部",
        },
        {
          name: "用户中心",
          url: "/product/全部",
        },
      ],
      nav_lefts: ["茶客专区", "活动专区", "兑换专区", "集贸市场"],
      nav_rights: [
        {
          title: "普洱茶",
          cont: ["岁月知味", "高顶古茶", "陈普", "侨一", "国皓", "斗记"],
        },
        {
          title: "绿茶",
          cont: ["义源祥", "粟香茶叶", "红崖天书", "黔茗韵", "蕴楚", "柑事"],
        },
        {
          title: "乌龙茶",
          cont: ["北在蓝", "幕兰"],
        },
        {
          title: "红茶",
          cont: [
            "粟香茶叶 ",
            "大摆田",
            "国畅",
            "上茗轩",
            "蕴楚",
            "柑事",
            "国皓",
            "金帆",
          ],
        },
        {
          title: "白茶",
          cont: ["杆事"],
        },
        {
          title: "黑茶",
          cont: ["冠隆誉"],
        },
        {
          title: "黄茶",
          cont: [],
        },
        {
          title: "花果",
          cont: [],
        },
        {
          title: "茶具",
          cont: [
            "小姐姐茶具",
            "俊德",
            "绑田",
            "范氏建盏",
            "品德坊",
            "吉谷",
            "顺福窑",
          ],
        },
      ],
      isShow: false,
      arr1: [],
      arr2: [],
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hidn() {
      this.isShow = false;
    },
    getBannerList() {
      this.axios.get("/index/index").then((res) => {
        console.log(res.data);
        this.imgList = res.data;
      });
    },
    // 从服务器获取广告为图片
    advImg() {
      this.axios.get("/index/adv").then((res) => {
        // console.log(res.data);
        this.adv = res.data;
      });
    },
    // 获取商品渲染到页面上
    produc() {
      this.axios.get("/index/produ").then((res) => {
        this.product = res.data;
        this.arr2 = res.data.slice(0, 5);
        this.arr1 = res.data.slice(5, 10);
      });
    },
  },
  created() {
    this.getBannerList();
    // 从服务器获取广告位图片
    this.advImg();
    this.produc();
  },
};
</script>

<style>
.index {
  width: 100%;
  margin-top: 10px;
}
.index .nav_first {
  width: 100%;
  background: #f2f2f2;
}
.index .nav_first .nav_first_1 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.index .nav_first .nav_first_1 .category {
  width: 126px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  background: #c30000;
  color: #fff;
  text-align: center;
}
.index .nav_first .nav_first_1 .first_center ul {
  display: flex;
}
.index .nav_first .nav_first_1 .first_center ul li {
  text-align: center;
  line-height: 40px;
  padding: 4px 30px 0 29px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
}

.index .nav_first .nav_first_1 .first_center ul li a {
  text-decoration: none;
  color: #000;
  padding-bottom: 12px;
}
.index .nav_first .nav_first_1 .first_center ul li a:hover {
  color: #c30000;
  border-bottom: 2px solid #c30000;
}

.nav_tow {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  position: relative;
}
.nav_right {
  display: flex;
}
.nav_tow .nav_towleft {
  width: 126px;
  height: 500px;
  background: #353e3b;
  z-index: 998;
}
.nav_tow .nav_towleft span {
  padding-left: 20px;
  height: 58px;
  line-height: 58px;
  display: block;
  background: #353e3b;
  color: #fff;
  cursor: pointer;
}
.sub {
  width: 800px;
  height: 480px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  float: left;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 126px;
}
.sub dt {
  margin-bottom: 30px;
  width: 100px;
}
.sub dt a {
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding-left: 20px;
  text-decoration: none;
  cursor: pointer;
}
.sub dd a {
  font-size: 12px;
  color: #666;
  padding: 0 10px;
  margin: 4px 0px 10px 0px;
  text-decoration: none;
  cursor: pointer;
  border-left: 1px solid #e3e3e3;
}
.sub dd a:hover {
  color: red;
}

.nav_towleft > ul > li > span:hover {
  background: #fff;
  color: red;
}
.nav_tow .banner {
  flex: 1;
  background: pink;
  overflow: hidden;
}
.nav_tow .banner .swiper {
  width: 100%;
  height: 500px;
}
.nav_tow .banner .swiper img {
  width: 100%;
}
.wudi {
  right: 40px;
  width: 220px;
}
.wudi .wudi_1 {
  display: flex;
  margin-top: -45px;
}
.wudi .wudi_1 .first_right {
  width: 220x;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
}

.wudi .wudi_1 .first_right ul {
  list-style: none;
  display: flex;
}
.wudi .wudi_1 .first_right ul .notice,
.wudi .wudi_1 .first_right ul .windzxsh {
  width: 110px;
  height: 46px;
  line-height: 46px;
}
.wudi .wudi_1 .first_right ul .windzxsh {
  background-color: #f2f2f2;
  color: #000;
}
.wudi_1 .first_right ul .windzxsh:hover {
  background: #c30000;
  color: #fff;
}
.wudi_1 .first_right ul .windzxsh:hover .wudi .wudi_1 .first_right ul .notice {
  background: #f2f2f2;
}
.wudi .wudi_1 .first_right ul .notice {
  background: #c30000;
  color: #fff;
}
.wudi .bd {
  width: 220px;
  height: 500px;
  background: #353e3b;
}
.wudi .bd ul {
  padding: 15px;
  height: 468px;
}
.wudi .bd ul li {
  height: 36px;
  line-height: 36px;
}
.wudi .bd ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}
.adv {
  width: 100%;
}
.adv_item {
  width: 1200px;
  margin: 20px auto;
}
.adv_item ul {
  display: flex;
}
.adv_item img {
  width: 386px;
  height: 226px;
  margin-right: 20px;
}
.fool_1 {
  width: 100%;
}
.fool_1 .fbt {
  width: 1200px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
}
.fool_1 .fbt h1 {
  width: 144px;
  font-size: 18px;
  background: #353e3b;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
.fool_1 .fbt a {
  font-size: 16px;
  color: #666;
  line-height: 46px;
  text-decoration: none;
  font-family: "宋体";
}
.product_1 {
  width: 100%;
}
.product_1 .product_2 {
  width: 1200px;
  margin: 0 auto;
  /* display: flex; */
}
.product_2 ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.product_2 li a {
  text-decoration: none;
}
.product_2 li {
  width: 224px;
  min-height: 292px;
  background: #fff;
  margin: 0 16px 0 0;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
}
.product_2 li .f_img img {
  width: 224px;
  height: 224px;
}
.product_2 li .f_name {
  font: 14px/28px "Microsoft YaHei";
  text-align: left;
  height: 28px;
  padding: 10px 10px 0 10px;
}
.product_2 li .f_name a {
  text-decoration: none;
  color: #000;
}
.product_2 li .f_name a:hover {
  color: #c30000;
  text-decoration: underline;
}
.product_2 li .f_price {
  color: #666;
  font: 14px/20px "Microsoft Yahei";
  padding: 0 10px;
  text-align: right;
}
.product_2 li .f_price span {
  color: #c30000;
  padding: 0 5px 0 0;
}

/* 固定 */
.toolbar {
  position: fixed;
  right: 0px;
  bottom: 90px;
  z-index: 999;
}
.toolbar .toolbar_item {
  display: block;
  cursor: pointer;
  width: 52px;
  height: 52px;
  margin-top: 1px;
  position: relative;
  background: url(../assets/images/toolbar.png) no-repeat;
}
.toolbar .toolbar_item_feedback {
  background-position: 0 -426px;
}
.toolbar_layer {
  position: absolute;
  height: 212px;
  right: 50px;
  width: 172px;
  opacity: 0;
  bottom: -1px;
  background-position: 0 0;
  display: block;
  background: url(../assets/images/toolbar.png) no-repeat;
  z-index: 999;
}
.tootext {
  width: 145px;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  color: #333;
  margin: 15px auto auto;
}
.tootext img {
  width: 136px;
  height: 136px;
}
.toolbar .toolbar_item_weixin {
  background-position: 0 -798px;
}
.tootphone {
  width: 175px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #333;
  margin: auto;
}
.toolbar .toolbar_item_weixin .toolbar_layer .tootphone .mt3 {
  margin-top: 70px;
}
.toolbar .toolbar_item_weixin .toolbar_layer .tootphone .toocolor {
  color: #c40000;
  font-size: 16px;
  font-weight: 500;
}
.toolbar .toolbar_item_app {
  background-position: 0 -550px;
}
.toolbar .toolbar_item_top {
  background-position: 0 -674px;
}
.toolbar_layer .tootext:hover > .toolbar_layer {
  display: block;
}
</style>