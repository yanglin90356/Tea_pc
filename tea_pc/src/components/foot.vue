<template>
  <div class="foot">
    <div class="foot_fwbz">
      <div class="foot_first">
        <ul>
          <li>
            <img src="../assets/images/footer_message01.jpg" alt />
            <div class="footFirst_text">
              <h3>正品保障</h3>
              <p>品牌授权，官方保障</p>
            </div>
          </li>
          <li>
            <img src="../assets/images/footer_message02.jpg" alt />
            <div class="footFirst_text">
              <h3>闪电发货</h3>
              <p>专柜直邮或到店自提</p>
            </div>
          </li>
          <li>
            <img src="../assets/images/footer_message03.jpg" alt />
            <div class="footFirst_text">
              <h3>无忧售后</h3>
              <p>7天无理由退货</p>
            </div>
          </li>
          <li>
            <img src="../assets/images/footer_message04.jpg" alt />
            <div class="footFirst_text">
              <h3>VIP服务</h3>
              <p>会员服务，尊享特权</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot_last">
      <div class="footcont">
        <div class="footlast_text">
          <dl>
            <dt>
              <a href>购物指南</a>
            </dt>
            <dd>
              <a href>用户须知</a>
            </dd>
            <dd>
              <a href>用户使用协议</a>
            </dd>
            <dd>
              <a href>配送说明</a>
            </dd>
            <dd>
              <a href>购物流程</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href>支付方式</a>
            </dt>
            <dd>
              <a href>在线支付</a>
            </dd>
            <dd>
              <a href>货到付款</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href>售后服务</a>
            </dt>
            <dd>
              <a href>常见问题</a>
            </dd>
            <dd>
              <a href>退换货政策</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href>关于我们</a>
            </dt>
            <dd>
              <a href>商城介绍</a>
            </dd>
            <dd>
              <a href>商城公告</a>
            </dd>
            <dd>
              <a href>新闻资讯</a>
            </dd>
          </dl>
        </div>
        <div class="footlast_img">
          <div class="wcode">
            <img src="../assets/images/dyh_ewm.png" alt />
            <p>微信服务号</p>
          </div>
          <div class="wcode">
            <img src="../assets/images/fwh_ewm.png" alt />
            <p>微信订阅号</p>
          </div>
        </div>
      </div>
    </div>

    <div class="foot_bot">
      <div class="footboot_last">
        Copyright © 2018 All rights reserved 语茶商城
        <a href>浙ICP备18041388号</a>
        <a href>快递查询</a>
      </div>
    </div>
  </div>
</template>

<style>
.foot {
  width: 100%;
}
.foot .foot_fwbz {
  width: 100%;
  border-top: 1px solid #ddd;
  background: #fff;
  padding: 20px 0 10px 0;
  font-family: "Microsoft Yahei";
  margin-top: 20px;
}
.foot .foot_fwbz .foot_first {
  width: 1200px;
  margin: 0 auto;
}
.foot .foot_fwbz .foot_first ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  list-style: none;
}
.foot .foot_fwbz .foot_first ul li h3 {
  color: #cc0000;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
}
.foot .foot_fwbz .foot_first ul li p {
  font-size: 14px;
  color: #666;
}
.foot .foot_fwbz .foot_first .footFirst_text {
  display: inline-block;
  margin: 7px 0 0 10px;
  vertical-align: top;
}
.foot .foot_last {
  width: 100%;
  padding: 15px 0;
  background: #353e3b;
  color: #fff;
}
.foot .foot_last .footcont {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.foot .foot_last .footcont .footlast_text {
  width: 825px;
  height: 135px;
  display: flex;
}
.foot .foot_last .footcont .footlast_text a {
  text-decoration: none;
}
.foot .foot_last .footcont .footlast_text dl {
  width: 160px;
  margin-left: 40px;
}

.foot .foot_last .footcont .footlast_text dl dt a {
  color: #ddd;
  font-size: 16px;
  line-height: 46px;
  font-family: "Microsoft Yahei";
}
.foot .foot_last .footcont .footlast_text dl dd a {
  font-size: 14px;
  color: #999;
  line-height: 22px;
  margin-left: 2px;
  font-family: "Microsoft Yahei";
}
.foot .foot_last .footcont .footlast_text dl dd a:hover {
  color: #fff;
}
.foot .foot_last .footcont .footlast_text dl dt a:hover {
  color: #fff;
}
.footlast_img img {
  width: 124px;
  height: 124px;
}
.footlast_img {
  display: flex;
}
.footlast_img .wcode {
  width: 128px;
  margin-left: 15px;
  text-align: center;
}
.footlast_img .wcode p {
  margin-bottom: 15px;
  color: #aaa;
  font-size: 12px;
}
.foot_bot {
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #999;
  background: #353e3b;
}
.footboot_last {
  width: 1200px;
  margin: 0 auto;
  color: #999;
  text-align: center;
  line-height: 26px;
  font: 14px/40px "Microsoft Yahei";
}
.footboot_last a {
  text-decoration: none;
  color: #999;
}
</style>