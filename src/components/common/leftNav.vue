<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-wodezichan"></i><br>
        <a href="javascript;">收银</a>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i><br>
        <a href="javascript;">店铺</a>
      </li>
      <li>
        <i class="icon iconfont icon-liwuhuodong"></i><br>
        <a href="javascript;">商品</a>
      </li>
      <li>
        <i class="icon iconfont icon-31huiyuanqia"></i><br>
        <a href="javascript;">会员</a>
      </li>
      <li>
        <i class="icon iconfont icon-zuanshi"></i><br>
        <a href="javascript;">统计</a>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i><br>
        <a href="javascript;">设置</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      msg: "leftNav"
    };
  }
};
</script>
<style lang="less">
.left-nav {
  float: left;
  height: 100%;
}
.icon {
  font-size: 24px;
  color: #fff;
}

.left-nav ul {
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #1386e5;
}

.left-nav ul li {
  padding: 10px;
  border-bottom: 1px solid #ffd;
}

.left-nav ul li a {
  color: #fff;
  text-align: center;
  text-decoration: none;
}
</style>
