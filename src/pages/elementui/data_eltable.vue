<template>
  <view class="container">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <view class="table">
      <el-table :data="tableData" stripe border :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2023-05-02",
          name: "刘家辉",
          address: "广东省广州市番禺区",
        },
        {
          date: "2023-06-04",
          name: "张大大",
          address: "江苏省南京市",
        },
        {
          date: "2023-07-10",
          name: "王北",
          address: "北京市天安门广场",
        },
        {
          date: "2023-07-13",
          name: "陈小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
	  
    };
  },
  mounted() {
	
  },
  methods:{
	 tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  .table {
    width: 100%;
    height: 100%;
    margin: 0px 5px 0px 5px;
	.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  }
}
 
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
