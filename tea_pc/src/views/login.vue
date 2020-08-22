<template>
  <div class="Login">
    <div class="login_1">
      <!-- 登录图片 -->
      <div class="rc_adv">
        <img src="../assets/images/rc_adv.png" alt />
      </div>
      <!-- 登录输入 -->
      <div class="user_login">
        <div class="con">
          <p></p>
          <!-- 手机号 -->
          <div class="user"></div>
          <input type="text" placeholder="请输入手机号/账号" class="useraccount" v-model="phone" />
          <p></p>
          <p></p>
          <!-- 登录密码 -->
          <div class="pass"></div>
          <input type="password" placeholder="请输入登录密码" class="password" v-model="password" />
          <p></p>
          <!-- 验证码 -->
          <p>
            <input type="text" placeholder="看不清楚？换一张" class="maskcode" />
            <img class="maskimg" src="../assets/images/captcha.png" alt />
          </p>
          <!-- 提交按钮 -->
          <p>
            <button class="btn" @click="loginclick"></button>
          </p>
          <!-- 注册跳转/忘记密码 -->
          <div class="moo">
            <router-link to="/register">注册账号</router-link>
            <router-link to class="forget_password">忘记密码？</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      // 手机号变量:
      phone: "", //定义一个变量接页面上传入的手机号
      phonemsg: "", //保存将来可能的错误提示信息，但是初始未验证之前没有任何提示
      // 密码变量
      password: "", //定义一个变量接上面密码框传入的密码
      passwordmsg: "", //保存将来可能的错误提示信息，但是初始未验证之前没有任何提示
    };
  },
  methods: {
    // 封装axios登录函数
    login() {
      this.axios
        .post(
          "/user/login",
          qs.stringify({
            phone: this.phone,
            upwd: this.password,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          if (res.data.code == 1) {
            this.$store.commit("login_mutation", res.data.result.phone);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("uid", res.data.result.uid);
            localStorage.setItem("phone", res.data.result.phone);
            this.$router.push("/");
          } else {
            alert("登录失败");
          }
        });
    },
    loginclick() {
      this.login();
    },
  },
};
</script>

<style>
/* 登录 */
.Login {
  height: 500px;
  border: 1px solid #fff;
  background: #f2f2f2;
}
.Login > .login_1 {
  display: flex;
  width: 950px;
  height: 336px;
  margin: 50px auto 50px auto;
  border: 1px solid #f2f2f2;
  background: #fff;
}
/* 左侧登录图片 */
.Login > .login_1 > .rc_adv {
  width: 550px;
  height: 336px;
}
/* 右侧登录框 */
.Login > .login_1 > .user_login {
  width: 350px;
  height: 315px;
  margin: 20px 0 0 47px;
  /* border: 1px solid #000; */
}
.Login > .login_1 > .user_login > .con {
  position: relative;
}
.Login > .login_1 > .user_login > .con > p {
  margin: 20px 5px 4px 0;
}
/* 手机号框 */
.Login > .login_1 > .user_login > .con > .user {
  width: 40px;
  height: 35px;
  background: url(../assets/images/user_name.png) no-repeat 10px 5px;
  position: absolute;
}
.Login > .login_1 > .user_login > .con > .useraccount {
  height: 35px;
  width: 250px;
  border: 1px solid #ddd;
  padding-left: 40px;
  color: #666;
}
/* 密码框 */
.Login > .login_1 > .user_login > .con > .pass {
  width: 40px;
  height: 35px;
  background: url(../assets/images/user_pws.png) no-repeat 10px 5px;
  position: absolute;
}
.Login > .login_1 > .user_login > .con > .password {
  height: 35px;
  width: 250px;
  border: 1px solid #ddd;
  padding-left: 40px;
  color: #bbb;
}
.Login > .login_1 > .user_login > .con > p > .maskcode {
  height: 35px;
  width: 160px;
  border: 1px solid #ddd;
  background: url(../assets/images/user_pws.png) no-repeat 10px 5px;
  padding-left: 40px;
}
.Login > .login_1 > .user_login > .con > p > .maskimg {
  height: 38px;
  margin-bottom: -15px;
  width: 88px;
}
.Login > .login_1 > .user_login > .con > p > .btn {
  width: 316px;
  height: 40px;
  background: url(../assets/images/user_btn0.png);
  border-radius: 2px;
  border: none;
  cursor: pointer;
}
.Login > .login_1 > .user_login > .con > .moo {
  font-size: 14px;
  width: 316px;
  text-align: center;
  margin-top: 20px;
}
.Login > .login_1 > .user_login > .con > .moo > a {
  text-decoration: none;
}
.Login > .login_1 > .user_login > .con > .moo > .forget_password {
  margin-left: 25px;
}
input,
button:focus {
  outline: none;
}
* {
  margin: 0;
  padding: 0;
}
</style>