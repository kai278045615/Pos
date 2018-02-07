<template>
  <div class="pos">
    <el-row>
      <div class="order-list">
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
      </div>

      <el-col :span="17">
        <div class="main_right_bos">
          <div class="main_right">
            <div class="title">
              常用商品
            </div>
            <div class="menu">
              <ul>
                <li v-for="item in oftenGoods" :key="item.id">
                  <span>{{ item.goodsName }}</span>
                  <span>￥{{ item.price }}</span>
                </li>
              </ul>
            </div>

            <div class="tab_b">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class='cookList'>
                    <li v-for="goods in type0Goods" :key="goods.id">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class='cookList'>
                    <li v-for="goods in type1Goods" :key="goods.id">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class='cookList'>
                    <li v-for="goods in type2Goods" :key="goods.id">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class='cookList'>
                    <li v-for="goods in type3Goods" :key="goods.id">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
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
      ],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  created() {
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(rep => {
        this.oftenGoods = rep.data;
      })
      .catch(error => {
        alert("网络错误, 不能访问");
      });

    axios
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(rep => {
        this.type0Goods = rep.data[0];
        this.type1Goods = rep.data[1];
        this.type2Goods = rep.data[2];
        this.type3Goods = rep.data[3];
      })
      .catch(error=> {
        alert("网络错误, 不能访问");
      });
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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

.main_right_bos {
  clear: both;
}

.main_right {
  float: left;
  width: 100%;
}

.main_right .title {
  margin: 10px 0 10px 0;
  font-weight: 600;
  border-bottom: 2px solid #ccc;
}

.menu li {
  float: left;
  padding: 5px;
  list-style: none;
  border: 1px solid #ccc;
  margin: 0 10px 10px 0;
  background-color: #fff;
}

.menu li span:last-child {
  color: #409eff;
}

.tab_b {
  clear: both;
  float: left;
  width: 100%;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>


