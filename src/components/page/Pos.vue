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
                <el-tab-pane label="小食">小食</el-tab-pane>
                <el-tab-pane label="饮料">饮料</el-tab-pane>
                <el-tab-pane label="套餐">套餐</el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
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
      ],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      type0Goods: [
        {
          goodsId: 1,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "香脆鸡柳",
          price: 17
        }
      ]
    };
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


