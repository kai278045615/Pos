<template>
  <div class="pos">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="点餐" name="first">点餐</el-tab-pane>
      <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
      <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Pos",
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
s
