<template>
  <div class="head">
    <div class="head_user">
      <div class="head_left">
        <i></i>
        <a href class="home_page">首页</a>
        <div class="denglu" v-if="!$store.state.isLogin">
          <span>您好，欢迎您使用语茶商城！</span>
          <router-link to="/login" class="login_1">请登录</router-link>
          <router-link to="/register" class="login_2">注册账号</router-link>
        </div>
        <div class="islogin" v-else>
          <span>您好！</span>
          <span>{{$store.state.phone}}</span>
          <span @click="logout">[退出]</span>
          <span>用户中心</span>
          <span @click="shopC">购物车</span>
        </div>
        <div class="head_right">
          <a href>我的语茶</a>
          <a href>我的订单</a>
          <a href>帮助中心</a>
        </div>
      </div>
    </div>
    <div class="head_main">
      <div class="mian_log">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt />
        </router-link>
      </div>
      <div class="head_search">
        <div class="search">
          <div class="pull_down">
            <div class="search_text" @click="show">商品</div>
            <ul class="select_option" v-show="isShow">
              <li class="selected">商品</li>
              <li>店铺</li>
              <li>新闻</li>
            </ul>
          </div>
          <input
            class="inp_srh"
            type="text"
            placeholder="请输入您要搜索的内容"
            v-model="kw"
            @keydown.13="search"
          />
          <input class="inp_but" type="button" value="搜  索" @click="search" />
        </div>
        <div class="head_phone">400-070-2680</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      kw: "",
      timer: null, //保存定时器的序号
    };
  },
  methods: {
    shopC() {
      this.$router.push("/shoppcart");
    },
    show() {
      this.isShow == false ? (this.isShow = true) : (this.isShow = false);
    },
    // 搜素商品
    search() {
      // 使用防抖:只要用户还在操作,就什么都不执行,而是关闭前一个等待,重新启动一个新的等待
      // 直到用户长时间未操作才发生请求
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.kw.trim() !== "") {
          // 点击查询时,让路由把参数带过去
          this.$router.push("/product/" + this.kw);
        }
      }, 1000);
    },
    logout() {
      this.$store.commit("login_out");
      this.$router.push("/");
    },
  },
  watch: {
    $route() {
      this.kw = this.$route.params.kw;
    },
  },
};
</script>

<style>
.head {
  width: 100%;
}
.head .head_user {
  min-width: 1200px;
  height: 31px;
  line-height: 31px;
  background: #fafafa;
  border-bottom: 1px solid #ededed;
  padding: 4px 0 0 0;
  font-size: 14px;
}
.head_left {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.head_left .home_page {
  margin-left: 2px;
  text-decoration: none;
  color: #787878;
}
.head_left i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url(../assets/images/biao.png) 0 0 no-repeat;
  position: relative;
  top: 7px;
}
.head_left span {
  margin-left: 2%;
  font-size: 12px;
  color: #787878;
}
.head_left .login_1 {
  font-size: 14px;
  text-decoration: none;
  color: #666;
  padding: 0 0 0 10px;
}
.head_left .login_2 {
  font-size: 14px;
  text-decoration: none;
  color: #666;
  padding: 0 0 0 10px;
}
.head_left .login_2:hover {
  text-decoration: underline;
}
.head_right {
  position: absolute;
  right: 0;
}
.head_right a {
  color: #787878;
  text-decoration: none;
  padding-right: 20px;
}
.head_main {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  display: flex;
}
.head_main .mian_log img {
  height: 80px;
  padding-top: 20px;
}
.head_main .head_search .search {
  height: 36px;
  width: 506px;
  border: 2px solid #c30000;
  margin: 10px auto 0 auto;
  display: inline-block;
  display: flex;
}
.head_main .head_search {
  margin: 2.8% 0 0 22%;
  display: flex;
}
.search .search_text {
  width: 100px;
  height: 36px;
  text-indent: 1.3rem;
  font-size: 14px;
  line-height: 36px;
  color: #666;
  background: url(../assets/images/search_ico.png) 80px center no-repeat;
  cursor: pointer;
}
.head_main .head_search .search .inp_srh {
  outline: none;
  width: 307px;
  border: none;
}
.head_main .head_search .search .inp_but {
  width: 99px;
  height: 36px;
  background: #c30000;
  font-family: "Microsoft Yahei";
  color: #ffffff;
  border: none;
  cursor: pointer;
  line-height: 36px;
  font-size: 16px;
}
.search .pull_down {
  position: relative;
}
.search .pull_down .select_option {
  border: 2px solid #c30000;
  border-top: none;
  list-style: none;
  position: absolute;
  left: -2px;
  top: 36px;
  background: #fff;
}
.selected {
  background-color: #f3f3f3;
  color: #999;
}

.search .pull_down .select_option li {
  text-indent: 1.3rem;
  width: 90px;
  cursor: pointer;
  line-height: 35px;
  font-size: 14px;
}
.search .pull_down .select_option li:hover {
  background-color: #bebebe;
  color: #fff;
}
.head_phone {
  display: inline-block;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding-left: 42px;
  background: url(../assets/images/phone.png) no-repeat left center;
  vertical-align: top;
  margin: 12px 0 0 13px;
}
.head_right a:hover {
  color: red;
}
.denglu {
  width: 280px;
}
.islogin {
  width: 800px;
}
.islogin span:first-child {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}
.islogin span:nth-child(2) {
  max-width: 400px;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  font-size: 14px;
  font-style: normal;
  color: #ec381c;
  vertical-align: bottom;
  word-break: break-all;
}
.islogin span:nth-child(3),
.islogin span:nth-child(4),
.islogin span:nth-child(5) {
  color: #ec381c;
  text-decoration: none;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>