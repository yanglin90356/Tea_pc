<template>
  <div class="regis">
    <div class="register">
      <!-- 去登录 -->
      <div class="go_login">
        欢迎来到语茶商城
        <span class="pl50">
          我已经注册，现在就
          <router-link to="/login">登录</router-link>
        </span>
      </div>
      <div class="reg">
        <div class="switchLoad">
          <!-- 个人会员注册 -->
          <div class="hd1">
            <span class="on">
              <a href="javacript:;">个人会员注册</a>
            </span>
          </div>
          <!-- 基本信息 -->
          <div class="bdd">
            <ul>
              <li>
                <span class="phone">*手机号：</span>
                <input type="text" v-model="phone" @blur="checkPhone" @focus="checkph" />
                <span>{{phmsg}}</span>
              </li>
              <li>
                <span>*请设置密码：</span>
                <input type="password" v-model="password" @blur="cheeckupwd" @focus="tipkupwd" />
                <span>{{passmsg}}</span>
              </li>
              <li>
                <span>*请确认密码：</span>
                <input type="password" v-model="password2" @blur="Vpassword" @focus="Vpassword2" />
                <span>{{passmsg2}}</span>
              </li>
              <li>
                <span>推荐人编码：</span>
                <input type="text" />
              </li>
              <li>
                <input type="checkbox" v-model="isAgree" />
                <span>我已经认真阅读并同意</span>
                <a href="javascript:;">&lt;&lt;商城用户注册协议&gt;&gt;</a>
              </li>
              <span class="agree">{{isAgreemsg}}</span>
              <li>
                <button @click="handle">提交</button>
              </li>
            </ul>
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
      phone: "", //定义一个变量接页面手机号框传入的手机号
      phmsg: "", //保存将来可能的错误提示信息，但是初始未验证之前没有任何提示
      password: "", //定义一个变量接页面上密码框传入的密码
      passmsg: "", //保存将来可能的错误提示信息，但是初始未验证之前没有任何提示
      password2: "", //保存确认密码
      passmsg2: "", //保存将来可能的错误提示信息，但是初始未验证之前没有任何提示
      isAgree: false,
      isAgreemsg: "",
    };
  },
  methods: {
    // 验证手机号:
    // 失去焦点时用正则表达式验证手机号码是否正确
    checkPhone() {
      // 定义正则
      let phoneReg = /^1[3-9]\d{9}$/;
      // 用正则验证phone变量中的手机号
      let result = phoneReg.test(this.phone);
      // 如果验证通过就提示正确
      if (result == true) {
        this.axios
          .get("/user/searchPh", {
            params: {
              phone: this.phone,
            },
          })
          .then((res) => {
            if (res.data.code == 1) {
              this.phmsg = "用户已存在";
            }
          });
        // 如果验证通过就提示格式正确
        this.phmsg = "手机号格式正确";
        return true;
      } else {
        // 如果验证不通过就提示格式不正确
        this.phmsg = "手机号格式不正确";
      }
    },
    // 获得焦点是提示用户输入
    checkph() {
      this.phmsg = "请输入手机号";
    },
    // 验证密码：
    cheeckupwd() {
      // 定义正则
      let passReg = /^[0-9A-Za-z]{6,12}$/;
      // 用正则验证密码是否正确
      let result = passReg.test(this.password);
      // 如果验证通过就提示格式正确,否则提示密码不正确
      if (result == true) {
        this.passmsg = "密码格式正确";
        return true;
      } else {
        this.passmsg = "密码格式不正确";
      }
    },
    // 获取焦点时,提示用户
    tipkupwd() {
      this.passmsg = "6-10位字符可使用字母数字组合";
    },
    // 验证两次输入的密码是否一致
    Vpassword() {
      // 如果输入一致就提示两次输入一致,否则提示两次输入不一致
      let password2 = this.password2;
      if (password2 == this.password) {
        this.passmsg2 = "两次输入一致";
        return true;
      } else {
        this.passmsg2 = "两次输入不一致";
      }
    },
    Vpassword2() {
      this.passmsg2 = "请再次输入密码";
    },
    // 封装注册函数
    reg() {
      this.axios
        .post(
          "/user/reg",
          qs.stringify({
            //因为是post请求,所以需要将数据转为字符串格式
            phone: this.phone,
            upwd: this.password,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          // 用后端返回来的res.data.code判断用户是否已经存在
          if (res.data.code == 0) {
            // 如果注册失败就提示用户注册失败,该用户已存在
            this.phmsg = "注册失败,用户已存在";
          } else {
            // 如果注册成功就跳转到首页
            this.$router.push("/");
          }
        });
    },
    // 点击请求按钮时,调用封装的axios注册函数
    handle() {
      if (
        this.checkPhone() &&
        this.cheeckupwd() &&
        this.Vpassword() &&
        this.isAgree
      ) {
        this.reg();
        this.isAgreemsg = "";
      } else {
        this.isAgreemsg = "请阅读/勾选/同意商城用户注册协议";
      }
    },
  },
};
</script>

<style>
.regis {
  width: 100%;
  background: #f2f2f2;
}
.register {
  width: 1200px;
  border: 1px solid #f2f2f2;
  font-size: 14px;
  color: #666;
  margin: 0 auto;
}
/* 头部去登录 */
.register > .go_login {
  width: 500px;
  margin: 10px auto 0 auto;
}
.register > .go_login > .pl50 {
  padding-left: 50px;
}
.register > .go_login > .pl50 > a {
  text-decoration: none;
  margin-left: 5px;
  font-size: 16px;
}
/* 注册模块 */
.register > .reg {
  width: 860px;
  margin: 20px auto 10px auto;
  padding: 20px;
  background: #fff;
}
.register > .reg > .switchLoad {
  width: 100%;
  text-align: left;
  margin: auto;
}
/* 个人会员注册 */
.register > .reg > .switchLoad > .hd1 {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #dddddd;
}
.register > .reg > .switchLoad > .hd1 > .on > a {
  color: #666;
  background: #fff;
  font: 500 24px/60px "Microsoft YaHei";
  text-decoration: none;
}
/* 基本信息 */
.register > .reg > .switchLoad > .bdd {
  background: #fff;
  margin: 40px 75px;
}
.register > .reg > .switchLoad > .bdd > ul > li > span {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #757474;
  padding: 12px 5px;
  margin-top: 15px;
}
.register > .reg > .switchLoad > .bdd > ul > li {
  position: relative;
  display: flex;
  text-align: right;
}
.register > .reg > .switchLoad > .bdd > ul > li > input {
  width: 350px;
  height: 36px;
  border: 1px solid #ccc;
  font: 500 14px/36px "Microsoft YaHei";
  color: #666;
  padding: 0 12px 0 30px;
  margin: 15px 0px;
  outline: none;
  background: url(../assets/images/zh_ce_ico.png) 5px -140px no-repeat;
}
button {
  outline: none;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(2) > input {
  background-position: 5px -84px;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(3) > input {
  background-position: 5px -84px;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(4) > input {
  background-position: 5px 7px;
  margin-left: 3px;
}
.register > .reg > .switchLoad > .bdd > ul > li > .phone {
  margin-left: 27px;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(4) > span {
  margin-left: 4px;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(5) > input {
  width: 13px;
  height: 13px;
  margin: 13px 0 0 104px;
}
.register > .reg > .switchLoad > .bdd > ul > li:nth-child(5) > span {
  margin: 0 0 0 0;
}
.register > .reg > .switchLoad > .bdd > ul > li > a {
  color: #0654bf;
  text-decoration: none;
  font-weight: 600;
  margin-top: 11px;
}
.register > .reg > .switchLoad > .bdd > ul > li > button {
  width: 390px;
  border-radius: 3px;
  height: 45px;
  cursor: pointer;
  background: #2a80cf;
  border: 0px;
  font: 400 18px/45px "Microsoft YaHei";
  color: #ffffff;
  margin: 20px 0 0 98px;
}
.agree {
  color: red;
  height: 10px;
  display: block;
  margin-left: 187px;
}
</style>