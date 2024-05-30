<template>
  <div class="page" scroll="no">
    <div>
      <div class="page_banner">
        <div class="swiper_content">
          <div
            class="swiper_item"
            v-for="(item, index) in imgs"
            :key="index"
            v-show="index === mark"
            :style="{
              transform: 'mark(' + translate + 'px)',
              transition: tsion ? 'all 2.5s' : 'none',
            }"
          >
            <a :href="item.link">
              <img :src="item.url" style="width: 1705px" />
            </a>
          </div>
          <div class="swiper_circle">
            <ul>
              <li
                v-for="(item, index) in imgs"
                :class="{ active: index === mark }"
                :key="index"
                @click="change(index)"
              ></li>
            </ul>
          </div>
        </div>
        <div class="menu_content">
          <div class="banner_menu">
            <p class="menu_title">学车流程</p>
            <ul class="menu_list">
              <li class="icon1">
                <p class="p1"><a href="#">科目一</a></p>
                <p classs="p2">2024新题库</p>
              </li>
              <li class="icon2">
                <p class="p1"><a href="#">科目一</a></p>
                <p classs="p2">精选视频，详解考点</p>
              </li>
              <li class="icon3">
                <p class="p1"><a href="#">科目一</a></p>
                <p classs="p2">全方位讲解，攻克难点</p>
              </li>
              <li class="icon4">
                <p class="p1"><a href="#">科目一</a></p>
                <p classs="p2">202新题库</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="test_menu com_part">
        <div class="test_title">
          <hr class="hr" />
          <div class="title_content">北京市2024小车理论考试</div>
        </div>
        <div class="test_content clearfix">
          <div class="leftcard">
            <ul class="item km left">
              <li class="item_right">
                <a
                  class="link"
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >科目一交规</a
                >
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_right btn_bar">
                <a
                  class="btn_link"
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >模拟考试</a
                >
              </li>
            </ul>
          </div>

          <div class="rightcard">
            <ul class="item km left">
              <li class="item_right">
                <a
                  class="link"
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >科目一交规</a
                >
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_left icon1">
                <a
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >顺序练习</a
                >
                <p>按照联系顺序做题</p>
              </li>
              <li class="item_right btn_bar">
                <a
                  class="btn_link"
                  target="_blank"
                  href="https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html"
                  >模拟考试</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page_mid com_part">
        <a
          target=" _blank"
          href="https://saas-shop.jiakaobaodian.com/runtu/cooperate.html"
        >
          <img src="../assets/banner-jxb.png" alt="" />
        </a>
      </div>
    </div>
    <div class="com_side">
      <ul>
        <li class="wx">
          <div class="box"></div>
        </li>
        <li class="wb">
          <div class="box"></div>
        </li>
        <li class="yjfk">
          <span>意见反馈</span>
          <div class="yjfk_menu box">
            <ul>
              <li>
                <span class="title">用户反馈</span>
                <div class="content">400-056-1617(电话)</div>
              </li>
              <li>
                <span class="title">教练反馈</span>
                <div class="content">jiaolian_service@mucang.cn(邮箱)</div>
              </li>
              <li>
                <span class="title">驾校反馈</span>
                <div class="content">jiaxiao_service@mucang.cn(邮箱)</div>
              </li>
              <li>
                <span class="title">学员反馈</span>
                <div class="content">点击提交学员反馈</div>
              </li>
            </ul>
            <div class="jt"></div>
          </div>
        </li>
        <li class="to_top">
          <a href="javascript:scroll(0,0)">返回顶部</a>
          <div class="box"></div>
        </li>
      </ul>
      <button class="btn_close"></button>
    </div>
  </div>
</template>

<script>
import pic1 from "../assets/banner1.png";
import pic2 from "../assets/banner2.jpeg";
import pic3 from "../assets/banner3.jpg";
import pic4 from "../assets/banner4.png";
export default {
  name: "MyArcitle",
  data() {
    return {
      mark: 0,
      imgs: [
        {
          link: "https://www.jiakaobaodian.com/download/",
          url: pic1,
        },
        {
          link: "https://www.jiakaobaodian.com/download/",
          url: pic2,
        },
        {
          link: "https://www.jiakaobaodian.com/download/",
          url: pic3,
        },
        {
          link: "https://www.jiakaobaodian.com/download/",
          url: pic4,
        },
      ],
    };
  },
  computed: {
    translate() {
      return -(this.mark + 1) * 1705;
    },
  },
  methods: {
    play() {
      setInterval(() => {
        this.mark = (this.mark + 1) % this.imgs.length;
      }, 1500);
    },
    change(i) {
      this.mark = i;
    },
  },
  mounted() {
    {
      this.play();
    }
  },
};
</script>

<style >
.page {
  overflow-x: hidden;
  overflow-y: hidden;
}
.swiper_content {
  position: relative;
  height: 380px;
}
.swiper_item {
  width: 1705px;
  margin: 0 auto;
  height: 380px;
  position: relative;
  overflow: hidden;
}
.swiper_item img {
  width: 1705px;
  height: 380px;
}
.swiper_circle {
  position: absolute;
  bottom: 10px;

  width: 100%;
  height: 20px;
}
.swiper_circle ul {
  margin: 0 50px;
  text-align: center;
}
.swiper_circle ul li {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 4px;
  background-color: rgba(125, 125, 125);
}
.active {
  background-color: black !important;
}
.menu_content {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow: visible;
}
.menu_content > .banner_menu {
  position: absolute;
  top: -358px;
  left: 0;

  width: 280px;
  z-index: 1;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
.menu_content > .banner_menu > .menu_title {
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px dotted #ddd;
  text-align: center;
}
.menu_content > .banner_menu > .menu_list .icon1 {
  background: url(../assets/967c5f51b9995b3cea6ac917ccebbd10.png) left center
    no-repeat;
}
.menu_content > .banner_menu > .menu_list .icon2 {
  background: url(../assets/9bfc61e92388bf9d0521dbbc5497172b.png) left center
    no-repeat;
}
.menu_content > .banner_menu > .menu_list .icon3 {
  background: url(../assets/9bfc61e92388bf9d0521dbbc5497172b.png) left center
    no-repeat;
}
.menu_content > .banner_menu > .menu_list .icon4 {
  background: url(../assets/ef73328f70c08beb91f54eae709a05b1.png) left center
    no-repeat;
}
.menu_content > .banner_menu > .menu_list > li {
  padding: 18px 20px 18px 50px;
  height: 71.29px;
}
.menu_content > .banner_menu > .menu_list > li > .p1 {
  color: #37b5f8;
  font-size: 16px;
}
.com_part {
  width: 1200px;
  margin: 60px auto;
}
.test_menu {
  height: 575px;
}
.test_menu .test_title {
  margin-bottom: 40px;
  text-align: center;
  padding-top: 20px;
}
.test_menu .test_title .hr {
  height: 1px;
  border: none;
  border-top: 1px dotted #e9e9e9;
}
.test_menu .test_title .title_content {
  display: inline-block;
  margin-top: -20px;
  line-height: 41px;
  padding: 0 45px;
  background-color: #fff;
  font-size: 30px;
}
.test_menu > .test_content ul .item .left {
  border: 1px solid #e9e9e9;
  width: 580px;
}

.test_menu .test_content .leftcard,
.rightcard {
  /* background-color: pink; */
  width: 580px;
  height: 380px;
  border: 1px solid #e9e9e9;
  display: inline-block;
}
.test_menu .test_content .rightcard {
  margin-left: 40px;
}

.test_content .leftcard ul .item_right,
.test_content .rightcard ul .item_right {
  float: right;
  width: 100%;
  height: 110px;
  line-height: 110px;
  padding-top: 0;
  border: none;
  margin: 0;
  text-align: center;
}
.test_content .leftcard .item_right .link,
.test_content .rightcard .item_right .link {
  padding: 0 0 0 38px;
}
.test_content .leftcard .item_right .link,
.test_content .rightcard .item_right .link {
  background: url(../assets/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png) left center
    no-repeat;
  font-size: 20px;
  display: inline-block;
  text-align: center;
}
.test_content .leftcard ul .item_right .btn-bar,
.test_content .rightcard ul .item_right .btn-bar {
  line-height: 70px;
  height: auto;
}
.test_content
  .leftcard
  ul.item_right
  .btn_link
  .test_content
  .rightcard
  ul.item_right
  .btn_link {
  width: 300px;
  margin: 15px auto 30px;
}
.test_content .leftcard .item_right .btn_link,
.test_content .rightcard .item_right .btn_link {
  display: block;
  height: 46px;
  width: 195px;
  line-height: 44px;
  background-color: #37b5f8;
  color: #fff;
  margin: 20px auto;
  border-radius: 4px;
}
.test_content .leftcard .item_left,
.test_content .rightcard .item_left {
  margin: 0 0 15px 25px;
  float: left;
  width: 250px;
  height: 70px;
  padding: 15px 0 15px 85px;
  background-color: #fafafa !important;
}
.test_content .leftcard .item_left p,
.test_content .rightcard .item_left p {
  color: #999;
  font-size: 14px;
}
.test_content .leftcard .icon1,
.test_content .rightcard .icon1 {
  background: url(../assets/7920c46acf795cfe91990d3bb8c8635c.png) left 50px
    center no-repeat;
}
.test_content .leftcard a:hover,
.test_content .rightcard a:hover {
  color: #37b5f8;
}
.com_part1 {
  width: 1200px;
  margin: 60px auto;
  margin-top: -30px;
}
.com_part1 img {
  width: 1200px;
}
.com_side {
  position: fixed;
  right: 0;
  bottom: 102px;
  z-index: 2;
  width: 117px;
  min-height: 258px;
  background: url(../assets/ddf1aabca9786f509b6d60d167fb0111.png) center top
    no-repeat;
}
.com_side ul {
  margin-top: 158px;
  border: 1px solid #e6e6e6;
  border-top: none;
  color: #999;
  font-size: 12px;
  position: relative;
}
.com_side ul li {
  height: 33px;
  line-height: 33px;
  cursor: pointer;
}

.com_side ul li .box {
  display: none;
  position: absolute;
}
.com_side ul li:hover .box {
  display: block;
}
.com_side ul .wx .box {
  width: 179px;
  height: 195px;
  top: 25px;
  left: -180px;
  background: url(../assets/c4f622fc933083fa8d224db497037fb1.png) center
    no-repeat;
}
.com_side ul .wb .box {
  width: 179px;
  height: 195px;
  top: 62px;
  left: -180px;
  background: url(../assets/8323b7c6a07700c0ea220e49fe814870.png) center
    no-repeat;
}
.com_side ul .yjfk {
  padding-left: 45px;
  background: url(../assets/eec2e6d69f66cc4dd0dc9cb962cc7eea.png) left 15px
    center no-repeat #fff;
  background-size: 20px;
  border-bottom: 1px solid #e6e6e6;
}
.com_side ul .yjfk .yjfk_menu {
  display: none;
  position: absolute;
  top: -165px;
  left: -165px;
  width: 170px;
  cursor: default;
  text-indent: 0;
}
.com_side ul .yjfk .yjfk_menu ul {
  margin-right: 10px;
  padding: 5px 15px;
  border: 1px solid #eee;
  background-color: #fff;
}
.com_side ul .yjfk .yjfk_menu ul li {
  height: 70px;
  text-align: left;
  padding: 8px 0;
}
.com_side > ul > .yjfk > .yjfk_menu > ul > li + li {
  border-top: 1px solid #e9e9e9;
}
.com_side ul .yjfk .yjfk_menu ul li .title {
  display: block;
  line-height: 1.4;
  font-size: 15px;
  color: #000;
}
.com_side ul .yjfk .yjfk_menu ul li .content {
  font-size: 12px;
  color: #999;
  line-height: 1.4;
  word-wrap: break-word;
}
.com_side ul .yjfk .yjfk_menu .jt {
  position: absolute;
  height: 0;
  width: 0;
  top: 140px;
  right: 0;
  border: 5px solid transparent;
  border-left: 5px solid #e6e6e6;
}
.com_side ul .yjfk :hover .yjfk_menu {
  display: block;
}
.com_side ul .to_top {
  padding-left: 45px;
  background: url(../assets/5b170b68eb9edd74ba8cc3d82a945302.png) left 15px
    center no-repeat #fff;
  color: #333;
}
</style>