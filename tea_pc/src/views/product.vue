<template>
  <div class="product">
    <div class="pronav">
      <div class="pronav_1">
        <div class="category">
          <span>全部商品</span>
        </div>
        <div class="pronav_2">
          <ul>
            <li v-for="(pronavText,paro) of precinct" :key="paro">
              <router-link :to='pronavText.url' v-text="pronavText.name"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 左 -->
      <div class="content_left">
        <!-- 热卖推荐 -->
        <div class="content_tj">
          <div class="tj_title">
            <span>热卖推荐</span>
          </div>
          <div class="con">
            <ul>
              <li v-for="(para,index) of Parameter" :key="index">
                <img :src="para.tpic" />
                <p>{{`￥${para.tprice.toFixed(2)}`}}</p>
                <P>
                  <a href>{{para.Ttitle2}}</a>
                </P>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content_right">
        <div class="contentRing">
          <div class="right_1">
            <ul>
              <li>
                <dl>
                  <dt>商品大类：</dt>
                  <dd v-for="(ddtext,index) of precinct1" :key="index">
                    <a href>{{ddtext}}</a>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <div class="right_1">
            <ul>
              <li>
                <dl>
                  <dt>二级分类：</dt>
                  <dd v-for="(ddtext,index) of precinct2" :key="index">
                    <a href>{{ddtext}}</a>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <div class="right_1">
            <ul>
              <li>
                <dl>
                  <dt class="pinpai">品牌：</dt>
                  <dd v-for="(ddtext,index) of precinct3" :key="index">
                    <a href>{{ddtext}}</a>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div class="optionn">
          <ul>
            <li>
              <a href="javascript:;">默认排序</a>
            </li>
            <li>
              <a href="javascript:;" class="down">价格</a>
            </li>
            <li>
              <a href="javascript:;" class="down">销量</a>
            </li>
            <li>
              <a href="javascript:;" class="up">人气</a>
            </li>
            <li>
              <a href="javascript:;" class="down">最新</a>
            </li>
            <li>
              <table>
                <tbody>
                  <tr>
                    <td>价格：</td>
                    <td>
                      <input class="price1" type="text" />--
                      <input class="price2" type="text" />
                    </td>
                    <td>名称：</td>
                    <td>
                      <input type="text" class="name1" />
                      <input type="button" class="search" value="搜索" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <!-- 商品 -->
        <div class="prolist_1">
          <div class="pro_list">
            <ul>
              <li v-for="(prolidt,index) of producList" :key="index">
                <router-link :to="`/details/${prolidt.pid}`">
                  <img :src="prolidt.pic" />
                  <p class="title1" v-text="prolidt.title2"></p>
                  <div class="pricearea">
                    <div class="price_1">￥{{prolidt.price.toFixed(2)}}元</div>
                  </div>
                  <div class="pinglunnum">
                    销售量：
                    <span class="bs">{{prolidt.salesvolume}}</span>
                    <h3>
                      剩余库存：
                      <span class="pj">{{prolidt.stock}}</span>
                    </h3>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <div>
        <ul>
          <li :class="{disabled:page==0}">
            <a href="javascript:;" @click="change">上一页</a>
          </li>
          <li v-for="i of pagecount" :key="i">
            <a href="javascript:;" class="pcon" v-text="i" @click="changepage(i)"></a>
          </li>
          <li :class="{disabled:page==pagecount-1}">
            <a href="javascript:;" @click="change2">下一页</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 把上个页面路由传参得到的参数获取变为自己的值
  props: ["kw"],
  data() {
    return {
      // 存储当前页码
      page: 1,
      // 存储服务器返回来的总页数
      pagecount: 0,
      producList: [],
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
      precinct1: ["全部", "茶客专区", "活动专区", "兑换专区", "集贸市场"],
      precinct2: [
        "全部",
        "普洱茶",
        "绿茶",
        "乌龙茶",
        "红茶",
        "白茶",
        "黑茶",
        "黄茶",
        "花果",
        "茶具",
      ],
      precinct3: [
        "全部",
        "岁月知味",
        "栗香",
        "高顶古茶",
        "義源祥",
        "北在蓝",
        "陈普",
        "大摆田",
        "国畅",
        "红崖天书",
        "俊德",
      ],
      Parameter: [],
    };
  },
  methods: {
    // 热卖推荐
    Parameters() {
      this.axios.get("/pro/nominate").then((res) => {
        this.Parameter = res.data;
      });
    },
    // 上一页
    change() {
      // 判断page是否大于当前页码,如果大于当前页码
      if (this.page > 1) {
        // 就让page--,然后再调用axios函数
        this.page--;
        this.producli();
      }
    },
    // 下一页
    change2() {
      // 判断page是否小于等于当前页码数,如果小于等于当前页码数,就this.page++,然后再调用axios请求函数
      if (this.page < this.pagecount) {
        this.page++;
        this.producli();
      }
    },
    changepage(i) {
      this.page = i;
      this.producli();
    },
    // 从服务器获取商品加载到商品列表页
    producli() {
      this.axios
        .get("/pro/productlist", {
          params: {
            ptype: this.kw,
            page: this.page, //参数:就是当前父组件传递过来的参数值
          },
        })
        .then((res) => {
          this.producList = res.data.result;
          this.pagecount = res.data.pageCount;
          // console.log(res.data)
        });
    },
  },
  created() {
    // 创建时,就请求一下axios
    this.kw = this.$route.params.kw;
    this.Parameters();
  },
  mounted() {
    this.producli();
  },
  watch: {
    $route() {
      this.kw = this.$route.params.kw;
    },
    // 并且监听地址栏,如果一旦改变,就需要重新请求axios
    kw() {
      this.producli();
    },
  },
};
</script>

<style>
.product {
  width: 100%;
  margin-top: 10px;
  font-family: Microsoft Yahei, Helvetica Neue, Helvetica, Arial, PingFang SC,
    Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
.product .pronav {
  width: 100%;
  background: #f2f2f2;
}
.product .pronav .pronav_1 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.product .pronav .pronav_1 .category {
  width: 126px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  background: #c30000;
  color: #fff;
  text-align: center;
}
.product .pronav .pronav_1 .pronav_2 ul {
  display: flex;
}
.product .pronav .pronav_1 .pronav_2 ul li {
  text-align: center;
  font-size: 16px;
  padding: 4px 30px 0 25px;
}
.product .pronav .pronav_1 .pronav_2 ul li a:hover {
  color: #c30000;
  border-bottom: 2px solid #c30000;
}
.product .pronav .pronav_1 .pronav_2 ul li a {
  display: block;
  line-height: 38px;
  text-decoration: none;
  color: #333;
}
input{
  outline: none;
}
/* 中部 */
.product .content {
  width: 1200px;
  margin: 25px auto;
  display: flex;
}
.product .content .content_left {
  width: 212px;
  background: #fff;
  margin-top: 10px;
}
/* 热卖推荐 */
.product .content .content_left .content_tj {
  padding-bottom: 10px;
  border: 1px solid #ddd;
}
.product .content .content_left .content_tj .tj_title {
  height: 40px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  color: #444444;
  text-align: left;
}
.product .content .content_left .content_tj .tj_title span {
  display: block;
  padding: 10px 0 0 15px;
}
.product .content .content_left .content_tj .con {
  padding: 10px 10px;
  text-align: left;
}
.product .content .content_left .content_tj .con ul li {
  height: 270px;
  cursor: pointer;
  text-align: center;
}
.product .content .content_left .content_tj .con ul li img {
  height: 180px;
  width: 180px;
}
.product .content .content_left .content_tj .con ul li p {
  font: 400 14px/30px "Microsoft YaHei";
  color: #cc0000;
  text-align: center;
}
.product .content .content_left .content_tj .con ul li a {
  text-decoration: none;
  color: #666;
}
.product .content .content_left .content_tj .con ul li a:hover {
  text-decoration: underline;
  color: #c30000;
}
/* 右边 */
.content_right {
  /* flex: 1; */
  margin: 10px 0 0 10px;
}
.content_right .right_1 {
  width: 99%;
  margin-left: 5px;
}
.content_right .right_1 ul li dl dd a {
  height: 24px;
  padding: 3px 10px;
  text-decoration: none;
  color: #666;
  border-radius: 2px;
  font-size: 14px;
  margin-left: 10px;
}
.content_right .right_1 ul li dl dd a:hover {
  text-decoration: underline;
}
.content_right .right_1 ul li dl {
  font-size: 14px;
  color: #666;
}
.content_right .right_1 dl {
  display: flex;
}
.content_right .right_1 ul li {
  padding: 16px 2px 15px 19px;
  border-bottom: #dedede 1px dashed;
}
.right_1 .pinpai {
  margin-left: 27px;
}
.contentRing {
  width: 980px;
  border: 1px solid #ddd;
}
/* 默认排序开始 */
.optionn {
  width: 980px;
  height: 40px;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  margin-top: 20px;
}
.optionn ul {
  display: flex;
}
.optionn ul li a {
  color: #666;
  width: 70px;
  border-right: 1px solid #ddd;
  padding-left: 30px;
  font: 14px/40px "Microsoft Yahei";
  display: block;
  text-decoration: none;
}
.optionn ul li .down {
  background: url(../assets/images/don.jpg) no-repeat 70px 17px;
}
.optionn ul li .up {
  background: url(../assets/images/don.jpg) no-repeat 70px -14px;
}
.optionn li table {
  height: 40px;
  border: 0;
}
.optionn li table tr td {
  font: 14px/40px "Microsoft Yahei";
  color: #666;
  padding: 0 5px;
}
.optionn li table tr td .price1,
.optionn li table tr td .price2 {
  width: 65px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #d4d4d4;
}
.optionn li table tr td .price1 {
  padding-left: 5px;
}
.optionn li table tr td .name1 {
  width: 126px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #d4d4d4;
  padding-left: 5px;
}
.optionn li table tr td .search {
  width: 40px;
  height: 29px;
  border: 1px solid #d4d4d4;
  border-left: 0px;
  cursor: pointer;
  padding-left: 5px;
  color: #666;
}
/* 默认排序结束 */
/* 商品显示开始 */
* {
  margin: 0;
  padding: 0;
}
.pro_list {
  width: 1000px;
}
.pro_list ul {
  display: flex;
  flex-wrap: wrap;
}
.pro_list ul li {
  width: 235px;
  height: 336px;
  background: #fff;
  margin: 16px 13px 0px 0px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
}
.pro_list li img {
  width: 235px;
  height: 235px;
}
.pro_list li .title1 {
  font: 14px/28px "Microsoft Yahei";
  text-align: left;
  padding: 0 10px;
  display: block;
  height: 28px;
  margin-top: 10px;
}
.pro_list li .pricearea .price_1 {
  padding: 0 10px;
  font: 16px/28px "΢���ź�";
  color: #c30000;
}
.pro_list li .pinglunnum {
  text-align: left;
  font: 14px/26px "Microsoft Yahei";
  padding: 0 10px;
  color: #666666;
  display: flex;
}
.pro_list li .pinglunnum .bs {
  color: #c30000;
}
.pro_list li .pinglunnum h3 .pj {
  color: #c30000;
}
.pro_list li .pinglunnum h3 {
  margin-left: 43px;
}
.pro_list a {
  text-decoration: none;
  color: #000;
}
/* 商品显示结束 */
/* 分页开始 */
.page {
  width: 100%;
}
.page div {
  width: 1200px;
  margin: 0 auto;
}
.page div ul {
  display: flex;
  width: 250px;
  margin: 0 auto;
  justify-content: space-around;
}
.page div ul li:first-child a,
.page div ul li:last-child a {
  width: 72px;
  height: 30px;
  cursor: pointer;
  outline: none;
  border: 1px solid #dddddd;
  background: #fff;
  color: #000;
  text-decoration: none;
  display: block;
  text-align: center;
  line-height: 30px;
}
.page div ul li .pcon {
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  border: 1px solid #dddddd;
  background: #fff;
  text-align: center;
  text-decoration: none;
  color: #000;
  line-height: 30px;
}
/* 分页结束 */
.page div ul li a:hover {
  background-color: #ddd;
}
</style>
