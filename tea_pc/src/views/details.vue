<template>
  <div class="details">
    <div class="hander-nav">
      <div class="hander-nav-left">
        <div class="allproducts">
          <span>全部商品</span>
        </div>
        <div class="classify">
          <ul>
            <!-- 使用v-for循环得到商品小图 -->
            <li v-for="(classifyText,index) of classify" :key="index">
              <router-link :to="classifyText.url" v-text="classifyText.name"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="centre">
      <div class="centre-left">
        <div class="centre-left-noe">
          <div class="left-noe">
            <div class="left-noe-img">
              <img :src="detailsSS_pic" />
            </div>
            <div class="thumbnail">
              <ul>
                <li v-for="(image_xs,index) of images_xs_url" :key="index">
                  <a href="javascipt:;">
                    <img :src="image_xs" @click="getIndex(image_xs)" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="left-tow">
            <div class="goods_name">
              <h1>{{detailsSS[0].title}}</h1>
            </div>
            <div class="goods_table">
              <ul class="goods_table_price">
                <li>价格：</li>
                <li>运费：</li>
              </ul>
              <ul class="goods_table_price2">
                <li>
                  <p class="price_text">
                    <em>￥</em>
                    <span>{{detailsSS[0].price.toFixed(2)}}</span>
                  </p>
                  <p>
                    <span>免运费&nbsp;&nbsp;卖家承诺48小时内发货</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="goods_xsl">
              <ul class="qita">
                <li>
                  <p>
                    累计销量
                    <span>0</span>
                  </p>
                </li>
                <li>
                  <p>
                    剩余库存
                    <span>{{detailsSS[0].stock}}</span>
                  </p>
                </li>
                <li>
                  <p>
                    累积评价
                    <span>0人评价</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="goods_table_2">
              <ul>
                <li class="count">数量</li>
                <li class="wrap-input">
                  <button @click="muinscount">-</button>
                  <input type="text" v-model="count" />
                  <button @click="addcount">+</button>
                </li>
              </ul>
            </div>
            <div class="goods_goum">
              <button class="gouwc_btn" @click="immediately">立刻购买</button>
              <button class="goum_btn" @click="accession">加入购物车</button>
            </div>
            <div class="det_share">
              <div class="share-platform">
                <div class="share-platform-l">
                  <span>收藏商品：</span>
                </div>
                <div>
                  <a href="javascript:;"></a>
                </div>
              </div>
            </div>
          </div>
          <!-- 商品详情图开始 -->
          <div class="Details-figure">
            <div class="slideTxtBox">
              <div class="Details-figure-hd">
                <ul>
                  <li class="hd-on">商品详情</li>
                  <li>累计评价</li>
                </ul>
              </div>
              <div class="Details-figure-1">
                <img :src="detailsSS[0].details" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="detail_right">
          <h2>
            <a href="javascript:;">相关推荐</a>
          </h2>
          <ul>
            <li v-for="(detailL,index) of saleval" :key="index">
              <a href="javascript:;">
                <img :src="detailL.tpic" alt />
              </a>
              <p class="detail_tit">
                <a href="javascript:;" v-text="detailL.Ttitle2"></a>
              </p>
              <p class="detail_price">
                <em>￥</em>
                {{detailL.tprice.toFixed(2)}}
              </p>
            </li>
          </ul>
        </div>
        <div class="Prompt" v-show="isShow">
          <div class="Prompt_1">
            <span>系统提示</span>
          </div>
          <div class="triumph">
            <ul>
              <li>
                <img src="../assets/images/icon_alert.gif" alt />
              </li>
              <li>
                <span>已成功加入购物车</span>
              </li>
            </ul>
          </div>
          <div class="triumph_2">
            <ul>
              <li>
                <button @click="Clearing">去购物车结算</button>
              </li>
              <li>
                <button class="btn-right" @click="purchase">继续购物</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="Prompt" v-show="isShow2" else>
          <div class="Prompt_1">
            <span>系统提示</span>
          </div>
          <div class="triumph">
            <ul>
              <li>
                <img src="../assets/images/icon_alert.gif" alt />
              </li>
              <li>
                <span>购物车已存在该商品</span>
              </li>
            </ul>
          </div>
          <div class="triumph_2">
            <ul>
              <li>
                <button class="btn-right" @click="queding">确定</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pid"],
  data() {
    return {
      classify: [
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
      saleval: [],
      detailsSS: [],
      detailsSS_pic:'',
      images_xs_url: [],
      count: 1,
      // 控制显示加入成功
      isShow: false,
      isShow2: false,
    };
  },
  methods: {
    addcount() {
      this.count++;
    },
    muinscount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    // 右侧热卖推荐axios请求
    Saleval() {
      this.axios.get("/deta/saleval").then((res) => {
        this.saleval = res.data;
      });
    },
    // 商品详情axios请求
    Detais() {
      this.axios.get("/deta/details?pid=" + this.pid).then((res) => {
        this.images_xs_url = res.data[0].masterpic.split("|");
        this.detailsSS_pic=this.images_xs_url[0];
        this.detailsSS = res.data;
      });
    },
    getIndex(index) {
      this.detailsSS_pic = index;
    },
    // 购物车
    accession() {
      if (this.$store.state.isLogin!=false) {
        this.axios
          .get(
            "/deta/addcart?pid=" +
              this.pid +
              "&count=" +
              this.count +
              "&sid=" +
              this.$store.state.uid
          )
          .then((res) => {
            if (res.data.code == 0) {
              this.isShow2 = true;
            } else {
              this.isShow = true;
            }
          });
      }else{
        this.$router.push('/login')
      }
    },
    // 继续购物
    purchase() {
      this.isShow = false;
    },
    queding() {
      this.isShow2 = false;
    },
    // 去购物车计算
    Clearing() {
      this.$router.push("/shoppcart");
    },
    // 立刻购买
    immediately() {
      this.$router.push("/shoppcart");
    },
  },
  mounted() {
    // 调用右侧热卖推荐axios函数
    this.Saleval();
    // 调用详情axios函数
    this.Detais();
  },
};
</script>

<style>
.details {
  width: 100%;
  margin-top: 10px;
  font-family: Microsoft Yahei, Helvetica Neue, Helvetica, Arial, PingFang SC,
    Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
.details > .hander-nav {
  width: 100%;
  background: #f2f2f2;
}
.details > .hander-nav > .hander-nav-left {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
/* 左侧全部商品 */
.details > .hander-nav > .hander-nav-left > .allproducts {
  width: 126px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  background: #c30000;
  color: #fff;
  text-align: center;
}
/* 右侧分类 */
.details > .hander-nav > .hander-nav-left > .classify > ul {
  display: flex;
}
.details > .hander-nav > .hander-nav-left > .classify > ul > li {
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  padding: 4px 30px 0 25px;
}
.details > .hander-nav > .hander-nav-left > .classify > ul > li > a {
  text-decoration: none;
  color: #333;
  padding-bottom: 10px;
}
.details > .hander-nav > .hander-nav-left > .classify > ul > li > a:hover {
  color: #c30000;
  border-bottom: 2px solid #c30000;
}
/* 中间商品 */
.centre {
  width: 100%;
  margin-top: 25px;
}
.centre-left {
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 970px 212px;
}
.centre-left-noe {
  display: grid;
  grid-template-columns: 410px 540px;
}
/* 左侧图片 */
.left-noe-img img {
  width: 402px;
  height: 402px;
}
.thumbnail ul {
  display: flex;
  margin: 10px 0px 0px 5px;
}
.thumbnail ul li {
  width: 67px;
  height: 74px;
  margin-right: 10px;
  border: 1px solid #ccc;
}
.thumbnail ul li a img {
  width: 65px;
  height: 65px;
}
.success {
  border: 1px solid #f57403;
}
/* 右侧文字详情 */
.left-tow {
  margin-left: 10px;
}
.goods_name h1 {
  padding-bottom: 0.2em;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods_table {
  background: #f5f5f5;
  padding: 15px 0;
  margin-top: 10px;
  display: flex;
}
.goods_table .goods_table_price li {
  width: 96px;
  text-align: left;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 14px;
  color: #666666;
}
.goods_table .goods_table_price2 li {
  width: 400px;
  text-align: left;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 14px;
  color: #666666;
}
.goods_table .goods_table_price2 li .price_text span {
  vertical-align: middle;
  font-size: 24px;
  color: #c40000;
  font-weight: bolder;
  font-family: Microsoft Yahei;
}
.goods_table .goods_table_price2 li .price_text em {
  vertical-align: middle;
  font-size: 18px;
  color: #c40000;
  font-weight: bolder;
  font-family: Microsoft Yahei;
}
.goods_xsl .qita {
  height: 25px;
  display: flex;
  border-top: 1px #e5dfda dotted;
  border-bottom: 1px #e5dfda dotted;
  padding: 10px 0px;
  margin: 20px 0 10px 0;
}
.goods_xsl .qita li:first-child,
.goods_xsl .qita li:nth-child(2) {
  width: 30%;
  height: 25px;
  text-align: left;
  font-size: 14px;
  padding-left: 15px;
  border-right: 1px #e5dfda solid;
}
.goods_xsl .qita li:nth-child(3) {
  width: 30%;
  height: 25px;
  text-align: left;
  font-size: 14px;
  padding-left: 15px;
}
.goods_xsl .qita li p {
  height: 25px;
  line-height: 25px;
  color: #999999;
}
.goods_xsl .qita li span {
  color: #c40000;
  margin-left: 5px;
}
.goods_table_2 {
  padding: 15px 0;
  margin-top: 10px;
}
.goods_table_2 ul {
  display: flex;
}
.goods_table_2 ul .count {
  width: 96px;
  text-align: left;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 14px;
  color: #666666;
}
.wrap-input button {
  margin: 3px 5px 0 5px;
  cursor: pointer;
}
.wrap-input input {
  width: 30px;
  height: 16px;
  padding: 2px;
  border: 1px solid #ddd;
  text-align: center;
  outline: none;
  margin-bottom: 3px;
}
.goods_goum {
  margin-top: 15px;
}
.goods_goum .gouwc_btn {
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  width: 160px;
  cursor: pointer;
  background-color: #c40000;
  border: 1px solid #c40000;
  color: #fff;
  outline: none;
}
.goum_btn {
  width: 160px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background: #fdeac4;
  border: 1px solid #c40000;
  color: #c40000;
  margin-left: 35px;
  outline: none;
}
.det_share {
  height: 50px;
  border-top: 1px dashed #ddd;
  margin-top: 45px;
}
.share-platform {
  margin-top: 10px;
  display: flex;
}
.share-platform .share-platform-l span {
  display: block;
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
}
.share-platform a {
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: url("../assets/images/sprite-arrow.png") no-repeat;
  display: inline-block;
  background-position: 0 -196px;
  margin-top: 5px;
}
.share-platform a:hover {
  background-position: 0 -162px;
}
/* 商品详情图开始 */
.Details-figure {
  width: 100%;
  margin-top: 10px;
}
.Details-figure .slideTxtBox {
  width: 968px;
  border: 1px solid #ddd;
  background: #fff;
  font-family: Microsoft Yahei;
}
.Details-figure-hd {
  height: 42px;
  line-height: 39px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.Details-figure-hd ul {
  display: flex;
}
.Details-figure-hd ul .hd-on {
  height: 39px;
  background: #fff;
  border-top: 3px solid #c40000;
  color: #333;
  width: 162px;
  border-right: 1px solid #ddd;
}
.Details-figure-hd ul li {
  cursor: pointer;
  width: 160px;
  text-align: center;
}
.Details-figure-1 {
  padding: 25px;
}
.Details-figure-1 img {
  width: 100%;
}
/* 右侧相关推荐 */
.detail_right {
  width: 210px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  background: #fff;
  margin-left: 20px;
  height: 1560px;
}
.detail_right h2 {
  border-bottom: 1px solid #ddd;
  background: #f5f5f5;
  color: #333;
  font-size: 16px;
  text-align: center;
  height: 42px;
  line-height: 42px;
}
.detail_right h2 a {
  text-decoration: none;
  font-size: 14px;
  color: #333333;
}
.detail_right ul {
  padding: 10px;
}
.detail_right ul li a img {
  width: 190px;
  height: 190px;
}
.detail_right ul li .detail_tit {
  line-height: 24px;
  height: 24px;
}
.detail_right ul li .detail_tit a {
  text-decoration: none;
  font-size: 14px;
  color: #666666;
}
.detail_right ul li .detail_price em {
  font-size: 14px;
  color: #666666;
}
.detail_right ul li .detail_price {
  height: 26px;
  line-height: 26px;
  color: #ff5120;
  font-size: 16px;
  font-family: Microsoft Yahei;
}
/* 成功加入购物车 */
.Prompt {
  position: fixed;
  top: 380px;
  left: 600px;
  width: 421px;
  height: 197px;
  border: 5px solid #cacaca;
  background: #fff;
}
.Prompt_1 span {
  display: block;
  padding: 5px 0 0 5px;
  color: #666666;
  font-size: 14px;
}
.Prompt_1 {
  border-bottom: 1px solid #cacaca;
}
.triumph img {
  margin-top: 5px;
}
.triumph ul {
  display: flex;
  justify-content: center;
}
.triumph span {
  display: block;
  font-family: "Microsoft YaHei";
  font-size: 12px;
  color: #666666;
  margin-top: 16px;
}
.triumph_2 {
  width: 400px;
  height: 45px;
  margin-top: 85px;
  margin-left: 10px;
  background-color: #f6f6f6;
}
.triumph_2 ul {
  display: flex;
  line-height: 45px;
  justify-content: center;
}
.triumph_2 ul li button {
  background: rgb(233, 233, 233);
  border: 1px solid rgb(164, 164, 164);
  font-size: 12px;
  color: rgb(0, 0, 0);
  width: 100px;
  height: 28px;
  line-height: 22px;
  cursor: pointer;
  outline: none;
}
.triumph_2 ul li .btn-right {
  margin-left: 5px;
}
</style>