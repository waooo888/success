<template>
  <div class="navigation">
    <div class="top w">
      <div class="logo_w">
        <img src="../assets/8db7d0f8978fcfd464f665b2ed7a54a2.png" alt="" />
      </div>
      <div class="search_w">
        <form action="">
          <input type="text" placeholder="请输入关键字" />
          <input type="submit" class="button" value="搜索" />
        </form>
      </div>
    </div>
    <div class="content">
      <ul class="nav_w clearfix">
        <li>
          <a
            class="active1"
            href="https://www.jiakaobaodian.com/"
            target="_blank"
            >首页</a
          >
        </li>
        <li class="menu-jx">
          <a href="https://www.jiakaobaodian.com/beijing/" target="_blank"
            >模拟考试</a
          >
          <div class="drop-w">
            <a
              href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
              target="_blank"
              >科目一</a
            >
            <a
              href="https://www.jiakaobaodian.com/mnks/kemu2/car-beijing.html"
              target="_blank"
              >科目二</a
            >
            <a
              href="https://www.jiakaobaodian.com/mnks/kemu3/car-beijing.html"
              target="_blank"
              >科目三</a
            >
            <a
              href="https://www.jiakaobaodian.com/mnks/kemu4/car-beijing.html"
              target="_blank"
              >科目四</a
            >
          </div>
        </li>
        <li class="menu-jx">
          <a
            href="https://www.jiakaobaodian.com/beijing/school/"
            target="_blank"
            >找驾校</a
          >
          <div class="drop-w">
            <a
              href="https://www.jiakaobaodian.com/beijing/school/"
              target="_blank"
              >找驾校</a
            >
            <a
              href="https://www.jiakaobaodian.com/beijing/coach/"
              target="_blank"
              >找教练</a
            >
            <a
              href="https://www.jiakaobaodian.com/beijing/peilian/"
              target="_blank"
              >找陪练</a
            >
          </div>
        </li>
        <li>
          <a href="https://www.jiakaobaodian.com/bbs/" target="_blank"
            >驾考圈</a
          >
        </li>
        <li>
          <a href="https://www.jiakaobaodian.com/sign/" target="_blank"
            >交通标志</a
          >
        </li>
        <li>
          <a href="https://www.jiakaobaodian.com/download/" target="_blank"
            >软件下载</a
          >
        </li>
        <li class="qiye">
          <a href="https://qiye.jiakaobaodian.com" target="_blank"
            >驾考宝典企业版</a
          >
        </li>
        <li>
          <a href="https://qiye.jiakaobaodian.com" target="_blank">智慧驾校</a>
        </li>
        <li class="menu-jx">
          <a href="https://www.maiche.com/rank/?from=jiakao_web" target="_blank"
            >买新车</a
          >
          <div class="drop-w">
            <a
              href="https://www.maiche.com/rank/?from=jiakao_web"
              target="_blank"
              >买新车</a
            >
            <a href="http://www.pingxing.cn" target="_blank">平行之家</a>
          </div>
        </li>
        <li>
          <a href="http://www.xiaozhu2.com/?from=jiakao_web" target="_blank"
            >二手车</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
@font-face {
  font-family: "iconfont"; /* Project id 4563584 */
  src: url("iconfont.woff2?t=1716803597039") format("woff2"),
    url("iconfont.woff?t=1716803597039") format("woff"),
    url("iconfont.ttf?t=1716803597039") format("truetype");
}

.top {
  margin: 28px auto;
  height: 42px;
  width: 1200px;
  overflow: hidden;
}
.logo_w {
  float: left;
}
.search_w {
  overflow: hidden;
  position: relative;
  float: right;
  height: 42px;
  width: 300px;
}
.search_w input {
  height: 40px;
  width: 100%;
  border: 1px solid #e9e9e9;
  line-height: 40px;
  font-size: 14px;
  outline-color: #007aff;
}
.search_w .button {
  position: absolute;
  right: 0 !important;
  top: 0 !important;
  width: 18% !important;
}
.navigation .content {
  height: 50px;
  padding: 0;
  width: 100%;
  background-color: #37b5f8;
  color: #fff;
}
.nav_w {
  width: 1200px;
  margin: auto;
  height: 50px;
  line-height: 50px;
  font-style: 16px;
  text-align: left;
}
.nav_w li {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  width: 108px;

  text-align: center;
}
.nav_w .qiye {
  width: 148px;
}
.nav_w li a {
  display: block;
  width: 100%;
  height: 100%;
}
.nav_w li .active1 {
  background-color: #258fc7;
}
.nav_w > .menu-jx {
  position: relative;
  overflow: visible;
}
.nav_w > li:hover {
  background-color: #7ec8f0;
}
.nav_w > .menu-jx:hover .drop-w {
  display: block;
}
.nav_w > .menu-jx a::after {
  position: absolute;
  font-family: iconfont;
  content: "\e62b";
  color: #fff;
  font-size: 11px;
  padding-left: 3px;
  padding-top: 1px;
}
.nav_w .menu-jx .drop-w {
  font-size: 14px;
  display: none;
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  line-height: 40px;
  padding: 0 8px;
  color: #666;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.nav_w .menu-jx .drop-w a {
  display: block;
  padding: 0;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
  color: #666;
}
</style>