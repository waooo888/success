<template>
  <div>
    <el-container>
      <el-header style="height: 148px; padding: 0"><Header></Header></el-header>
      <el-main scroll="no" style="padding: 0; margin: 0">
        <Arcitle></Arcitle>
        <mid-page></mid-page>
      </el-main>
      <el-footer style="padding: 0; margin: 0"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Arcitle from "../components/Arcitle.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import MidPage from "../components/MidPage.vue";
export default {
  name: "MyMain",
  components: {
    Header,
    Arcitle,
    MidPage,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}
.w {
  width: 1200px;
}
</style>