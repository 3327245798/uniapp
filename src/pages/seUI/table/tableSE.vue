<template>
<se-block height="400px">
  <se-table>
    <se-table-group-header>
      <se-table-item-header flex="1" resizable="true">姓名</se-table-item-header>
      <se-table-item-header flex="1" resizable="true">性别</se-table-item-header>
      <se-table-item-header flex="3" min-width="100px"  resizable="true">地址</se-table-item-header>
      <se-table-item-header flex="1" min-width="100px" clickable="true" resizable="true" >电话</se-table-item-header>
      <se-table-item-header flex="1" min-width="100px" resizable="true">年龄</se-table-item-header>
      <se-table-item-header  flex="1" resizable="true">操作</se-table-item-header>
    </se-table-group-header>

    <se-table-group selectable="true" v-for="item in setabledata" :key="item.id">
      <se-table-item width="53px">{{item.name}}</se-table-item>
      <se-table-item width="53px">{{item.sex}}</se-table-item>
      <se-table-item flex="30%" title="best practice">{{item.address}}</se-table-item>
      <se-table-item>{{item.phone}}</se-table-item>
      <se-table-item>{{item.age}}</se-table-item>
    <!--   <div slot="detail">
        <div style="padding:12px 24px">
          <h4>You may put any type of content here</h4>
          <p>
            You can format whatever details you want e.g. if each/some rows have
            a + icon to click to expand to expose more info
          </p>
        </div>
      </div> -->
      <se-table-item width="54px" option="dropdown">
        <se-dropdown alignment="right">
          <se-icon slot="trigger" option="button">
            other_vertical
          </se-icon>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-list-item item="My Site 3"></se-list-item>
          </se-list>
        </se-dropdown>
      </se-table-item>
    </se-table-group>

  </se-table>
  <se-pagination 
  total="10" 
  value="1" 
  per-page="11" 
  per-page-list="10;20;50;100;" 
  label-value="当前页"
  label-per-page="每页条数"
  >
  <!-- label-first="第一页"  
  label-last="最后一页"
  label-next="下一页"
  label-prev="上一页"
  这四个属性没有作用，不过也没关系，用<,>这些符号代替了 -->
  </se-pagination>
</se-block>
</template>
<script>
import userInfoList from '@/mock/userInfo.json'
export default {
  data() {
    return {
      setabledata:userInfoList.userList
      /* [{id:1,name:"张三",sex:"男",address:"上海市张江",phone:"15203838847",age:"18",action:"" },
   {id:1,name:"李四",sex:"女",address:"上海市北蔡",phone:"15856218472",age:"19",action:"" },
   {id:1,name:"网球",sex:"女",address:"上海市浦东新区",phone:"15167820383",age:"20",action:"" }] */
    
    };
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    },
   
  },
  created(){
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped  >
$se-icon-folder: "~@se/icons/fonts";
$se-generate-font-class: "false";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles-technical";
// OR
// @import "~@se/fonts/scss/styles-website";

</style>