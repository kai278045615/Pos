<template>
  <div class="pos">
    <el-row>
      <el-col :span="7">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="点餐" name="first" class="dcan">
            <el-table :data="tableData3" border>
              <el-table-column prop="goodName" label="商品名称" width="110">
              </el-table-column>
              <el-table-column prop="count" label="数量" width="60">
              </el-table-column>
              <el-table-column prop="money" label="金额" width="110">
              </el-table-column>
              <el-table-column prop="operation" label="操作" width="110">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖" name="third">
            外卖
          </el-tab-pane>
        </el-tabs>

        <div class="btn">
          <el-button type="warning" size="small">挂单</el-button>
          <el-button type="danger" size="small">删除</el-button>
          <el-button type="success" size="small">结账</el-button>
        </div>

      </el-col>

      <el-col :span="17">
        111
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pos",
  data() {
    return {
      activeName: "second",
      tableData3: [
        {
          goodName: "可口可乐",
          count: "1",
          money: "5",
          operation: ""
        },
        {
          goodName: "香辣鸡腿堡",
          count: "1",
          money: "8",
          operation: ""
        },
        {
          goodName: "爱心薯条",
          count: "1",
          money: "10",
          operation: ""
        },
        {
          goodName: "甜筒",
          count: "1",
          money: "10",
          operation: ""
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
.el-tabs__item {
  text-indent: 20px;
}

.el-table .cell {
  text-align: center;
}

.has-gutter {
  background-color: #ccc;
}

.btn {
  padding-top: 15px;
}

// .grid-content {
//   height: 100%;
// }
</style>


