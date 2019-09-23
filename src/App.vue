<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/shou">
        <img src="./assets/img/tabbar/2.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/1.png" alt slot="itemiconActive" />
        <div slot="itemtitle">推荐</div>
      </tabbaritem>
      <tabbaritem path="/ge">
        <img src="./assets/img/tabbar/4.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/3.png" alt slot="itemiconActive" />
        <div slot="itemtitle">演出</div>
      </tabbaritem>
      <tabbaritem path="/faxian">
        <img src="./assets/img/tabbar/6.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/5.png" alt slot="itemiconActive" />
        <div slot="itemtitle">发现</div>
      </tabbaritem>
      <tabbaritem path="/shang">
        <img src="./assets/img/tabbar/8.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/7.png" alt slot="itemiconActive" />
        <div slot="itemtitle">消息</div>
      </tabbaritem>
      <tabbaritem path="/wo">
        <img src="./assets/img/tabbar/10.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/9.png" alt slot="itemiconActive" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  components: {
    tabbar,
    tabbaritem
  }
};
</script>
<style>
</style>
