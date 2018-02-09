<template>
  <div class="pos">
    <el-row>
      <div class="order-list">
        <el-col :span="7">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="点餐" name="first" class="dcan">
              <el-table :data="tableData" border>
                <el-table-column prop="goodsName" label="商品名称" width="110">
                </el-table-column>
                <el-table-column prop="count" label="数量" width="60">
                </el-table-column>
                <el-table-column prop="price" label="金额" width="110">
                </el-table-column>
                <el-table-column prop="operation" label="操作" width="110">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="second">
              <el-table :data="tableData" border>
                <el-table-column prop="goodsName" label="商品名称" width="110">
                </el-table-column>
                <el-table-column prop="count" label="数量" width="60">
                </el-table-column>
                <el-table-column prop="price" label="金额" width="110">
                </el-table-column>
                <el-table-column prop="operation" label="操作" width="110">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="外卖" name="third">
              外卖
            </el-tab-pane>
            <div class="total_div">
              <small>总数量 : </small>{{ totalCount }} &nbsp;&nbsp;&nbsp;
              <small>总价格 : </small>{{ totalMoney }}元
            </div>
          </el-tabs>

          <div class="btn">
            <el-button type="warning" size="small">挂单</el-button>
            <el-button type="danger" size="small" @click="delAll()">删除</el-button>
            <el-button type="success" size="small" @click="checkOut()">结账</el-button>
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
                <li v-for="goods in oftenGoods" :key="goods.id" @click="addOrderList(goods)">
                  <span>{{ goods.goodsName }}</span>
                  <span>￥{{ goods.price }}</span>
                </li>
              </ul>
            </div>

            <div class="tab_b">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class='cookList'>
                    <li v-for="goods in type0Goods" :key="goods.id" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class='cookList'>
                    <li v-for="goods in type1Goods" :key="goods.id" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class='cookList'>
                    <li v-for="goods in type2Goods" :key="goods.id" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{ goods.goodsName }}</span>
                      <span class="foodPrice">￥{{ goods.price }}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class='cookList'>
                    <li v-for="goods in type3Goods" :key="goods.id" @click="addOrderList(goods)">
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
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0, // 订单总数量
      totalMoney: 0 // 订单总价格
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
      .catch(error => {
        alert("网络错误, 不能访问");
      });
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },

    // 添加订单列表的方法
    addOrderList(goods) {
      this.totalCount = 0; // 数量
      this.totalMoney = 0; // 总价格
      let isHave = false; // 开关, 不存在
      // 判断这个商品是否存在与订单列表中
      for (let i = 0; i < this.tableData.length; i++) {
        // console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; // 存在
        }
      }

      // 根据isHave的值, 判断订单列表中是否已经存在此商品
      if (isHave) {
        // 存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        // 新创建一条数据
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney(); // 调用汇总数量和金额, 之前还没做到这一步是在这里的
    },

    // 删除单个商品
    // 因为删除单个商品, 下面的数量和价格不会清空, 所以要另外处理
    delOrderList(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },

    // 清空全部商品
    delAll(goods) {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    checkOut(goods){
      if(this.totalCount != 0){
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        // vue里自带$message的提示
        this.$message({
          message: "结账成功, 感谢为店里出了一份力",
          type: "success"
        });
      }else {
        this.$message.error("不能空结");
      }
    },
    // 汇总数量和金额
    getAllMoney(goods) {
      this.totalCount = 0;
      this.totalMoney = 0;
      if(this.tableData){
        // 进行数量和价格的汇总机计算
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
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
  cursor: pointer;
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
  cursor: pointer;
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

.total_div {
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
</style>


