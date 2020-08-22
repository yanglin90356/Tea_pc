<template>
  <div class="shoppCart">
    <div class="cart">
      <div class="cartTitle">
        <span>我的购物车</span>
      </div>
      <div class="supply_cart">
        <div class="abstract">
          <ul>
            <li>商品信息</li>
            <li>单价（元）</li>
            <li>数量</li>
            <li>金额（元）</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="commodity">
          <input type="checkbox" />
          <span>全选</span>
          <span>QQ客服: ---</span>
        </div>
        <div>
          <div class="buy_car_tab" v-for="(item,index) of cart" :key="index" @click="handler">
            <ul>
              <li>
                <input type="checkbox" class="quanxuan" />
              </li>
              <li>
                <router-link to>
                  <img :src="item.pic" alt />
                </router-link>
              </li>
              <li>
                <router-link to class="title">{{item.title}}</router-link>
              </li>
              <li>
                <span class="price_1">{{item.price}}</span>
              </li>
              <li>
                <button data-n="-1" :data-i="index" class="minus">-</button>
                <input type="text" class="value" v-model="item.shoppcount" :data-i="index" />
                <button class="add" :data-i="index" data-n="+1">+</button>
              </li>
              <li>
                <span class="price_2">{{item.price*item.shoppcount}}</span>
              </li>
              <li>
                <button class="del" :data-i="index">删除</button>
              </li>
            </ul>
          </div>
          <div class="zong_he">
            <div class="zong_he1">
              <span class="fl">合计(不包含运费):</span>
              <font>￥</font>
              <strong>{{total.toFixed(2)}}</strong>
              <button>结 算</button>
            </div>
          </div>
        </div>
      </div>
      <div class="deldel">
        <div>信息确认</div>
        <div>确定将该商品从购物车中删除吗？</div>
        <div @click="deleteok($event)">
          <button>确定</button>
          <button>取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      price: 388,
      kucun: 50,
      cart: [],
      pid: "",
    };
  },
  methods: {
    // 无论点击的是×还是+ -,都触发handler
    handler(e) {
      // 只有点击的是按钮时,才执行后续操作
      if (e.target.nodeName == "BUTTON") {
        // 如果点击的按钮的内容是删除,说明想删除当前行
        if (e.target.innerHTML == "删除") {
          // 从当前按钮的自定义扩展属性上获得i属性中绑定的下标值,作为删除的位置
          // console.log(this.cart[e.target.dataset.i].pid)
          let dis = document.getElementsByClassName("deldel")[0];
          // console.log(dis);
          let pid = this.cart[e.target.dataset.i].pid;
          console.log(pid);
          this.pid = pid;
          dis.style.display = "block";
        } else {
          //否则如果点的不是+,则执行数量加减操作
          // 因为提前在每个按钮上缓存了序号i和增量(-1和+1)
          // 就先从自定义扩展属性i获得要修改数量的商品的序号i
          var i = e.target.dataset.i;
          // 再从自定义扩展属性n中获得增量
          if (
            this.cart[i].shoppcount < this.cart[i].stock ||
            e.target.innerHTML == "-"
          ) {
            this.cart[i].shoppcount =
              parseInt(this.cart[i].shoppcount) + parseInt(e.target.dataset.n);
          }
          if (this.cart[i].shoppcount == 0) {
            this.cart.splice(i, 1);
          }
        }
      }
    },
    // axios函数
    shopcart() {

      this.axios.get("/cart/shoppcart?sid="+this.$store.state.uid).then((res) => {
        this.cart = res.data;
        console.log(this.cart);
      });
    },
    // 删除函数
    delete(pid) {
      this.axios.get("/cart/delete?pid=" + pid+'&sid='+this.$store.state.uid).then((res) => {
        res.data;
        let i = 0;
        while (true) {
          if (this.cart[i].pid == pid) {
            break;
          }
          i++;
        }
        this.cart.splice(i, 1);
      });
    },
    deleteok(e) {
      let pid = this.pid;
      console.log(e.target, pid);
      console.log(1);
      if (e.target.nodeName == "BUTTON") {
        if (e.target.innerHTML == "确定") {
          this.delete(pid);
        }
        e.target.parentNode.parentNode.style.display = "none";
      }
    },
  },
  mounted() {
    this.shopcart();
  },
  computed: {
    total() {
      var sum = 0;
      for (let p of this.cart) {
        sum += p.price * p.shoppcount;
      }
      return sum;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.shoppCart {
  width: 100%;
}
.cart {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 20px 0;
}
.cartTitle {
  width: 100%;
  margin: auto;
  padding: 10px 0;
  color: #666666;
}
.cartTitle span {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: 600;
  padding-left: 20px;
}
.supply_cart {
  width: 1160px;
  margin: 0 auto;
  min-height: 500px;
  padding: 10px;
}
.supply_cart .abstract {
  display: flex;
  width: 100%;
  height: 30px;
  line-height: 50px;
  border: 1px solid #ddd;
  border-bottom: none;
  background: #f0f0f0;
}
.supply_cart .abstract ul {
  display: flex;
}
.supply_cart .abstract ul li {
  border-bottom: 1px solid #dadada;
  font-size: 13px;
  word-break: break-all;
  line-height: 30px;
  color: #666666;
  text-align: center;
}
.supply_cart .abstract ul li:first-child {
  width: 585px;
  height: 28px;
  margin-left: 5px;
}
.supply_cart .abstract ul li:nth-child(2) {
  width: 128px;
  height: 28px;
}
.supply_cart .abstract ul li:nth-child(3) {
  width: 200px;
  height: 28px;
}
.supply_cart .abstract ul li:nth-child(4) {
  width: 140px;
  height: 28px;
}
.supply_cart .abstract ul li:last-child {
  width: 90px;
  height: 28px;
}
.commodity {
  margin-top: 10px;
}
.commodity span:nth-child(2) {
  margin-top: 10px;
  color: #333333;
  font-size: 12px;
}
.commodity span:last-child {
  margin-left: 555px;
  font-size: 14px;
  color: #666666;
}
.commodity input {
  margin-left: 234px;
}
.buy_car_tab {
  width: 1160px;
  border: 1px solid #dfdfdf;
  background: #fcfcfc;
  margin-top: 10px;
  height: 111px;
  position: relative;
}
.buy_car_tab ul {
  display: flex;
}
.buy_car_tab ul li a img {
  width: 80px;
  height: 77px;
  border: 1px solid #ccc;
}
.buy_car_tab ul li .quanxuan {
  margin: 50px 0 0 15px;
}
.buy_car_tab ul li a img {
  margin: 17px 0 0 100px;
}
.buy_car_tab ul li .title {
  display: block;
  font-size: 14px;
  color: #666666;
  text-decoration: none;
  margin: 22px 0 0 7px;
}
.buy_car_tab ul .price_1 {
  width: 60px;
  display: block;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
  font-family: "Microsoft YaHei";
  margin: 50px 0 0 238px;
}
.buy_car_tab ul .value {
  width: 45px;
  height: 22px;
  text-align: center;
  color: #666;
  border: 1px solid #ccc;
  font-family: "verdana";
  outline: none;
  margin-top: -2px;
}
.buy_car_tab ul li .minus {
  cursor: pointer;
  width: 20px;
  font: 400 12px/25px "Microsoft YaHei";
  font-size: 18px;
  color: #666;
  border: none;
  outline: none;
  font-family: "verdana";
  margin: 44px 0 0 150px;
}
.buy_car_tab ul li .add {
  cursor: pointer;
  width: 20px;
  font: 400 12px/25px "Microsoft YaHei";
  font-size: 18px;
  color: #666;
  border: none;
  outline: none;
  font-family: "verdana";
}
.buy_car_tab ul li .price_2 {
  display: block;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
  font-family: "Microsoft YaHei";
  margin: 50px 0 0 100px;
}
.buy_car_tab ul li .del {
  background: #ff2150;
  width: 48px;
  border: 1px #ff2150 solid;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font: 12px/22px "";
  outline: none;
  position: absolute;
  top: 45px;
  right: 50px;
}
.buy_car_tab ul li .del:hover {
  background: #666;
  color: #fff;
}
.zong_he {
  height: 40px;
  border: 2px solid #c40000;
  text-align: right;
  line-height: 40px;
  margin-top: 30px;
}
.zong_he1 {
  float: right;
}
.zong_he1 .fl {
  margin-left: 40px;
  display: block;
  float: left;
  font-size: 14px;
  color: #666666;
}
.zong_he1 font {
  font: 600 22px/40px "arial";
  color: #c40000;
  padding-left: 10px;
}
.zong_he1 strong {
  font: 600 22px/40px "arial";
  color: #c40000;
  padding-left: 10px;
}
.zong_he1 button {
  width: 120px;
  height: 40px;
  text-align: center;
  color: #fff;
  background: #c40000;
  font: 400 20px/40px "Microsoft YaHei";
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 40px;
}
.deldel {
  width: 320px;
  height: 207px;
  border: 5px solid #cacaca;
  background: #fff;
  position: fixed;
  top: 350px;
  left: 800px;
  display: none;
}
.deldel div:first-child {
  background: #f5fafe;
  padding: 5px;
  font-size: 14px;
  color: #666666;
}
.deldel div:nth-child(2) {
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 12px;
  color: #666666;
}
.deldel div:nth-child(3) {
  margin-top: 50px;
  text-align: center;
}
.deldel div button {
  background: #e9e9e9;
  border: 1px solid #a4a4a4;
  font-size: 12px;
  color: #000000;
  width: 75px;
  height: 28px;
  line-height: 22px;
  cursor: pointer;
  outline: none;
}
</style>