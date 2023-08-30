<template>
<se-block height="400px">
  <se-table>
    <se-table-group-header>
      <se-table-item-header width="53px"></se-table-item-header>
      <se-table-item-header width="53px"></se-table-item-header>
      <se-table-item-header flex="1" min-width="100px" sort="asc"
        >Title</se-table-item-header
      >
      <se-table-item-header flex="3" min-width="600px" clickable="true" resizable="true"
        >Secondary Info</se-table-item-header
      >
      <se-table-item-header flex="1" min-width="100px" resizable="true"
        ><se-icon color="primary">airconditioner_hot_heating</se-icon> - with a
        lot of extra text to make it as long as possible</se-table-item-header
      >
      <se-table-item-header width="54px"></se-table-item-header>
    </se-table-group-header>
    <se-table-group selectable="true">
      <se-table-item width="53px"
        ><se-icon option="button">arrow2_up</se-icon></se-table-item
      >
      <se-table-item width="53px"><se-checkbox></se-checkbox></se-table-item>
      <se-table-item
        flex="30%"
        title="best practice is to provide a title in case all content is not visible"
        >Item with a detail section</se-table-item
      >
      <se-table-item>2nd test</se-table-item>
      <se-table-item
        ><se-icon color="primary">airconditioner_hot_heating</se-icon>Last
        test</se-table-item
      >
      <div slot="detail">
        <div style="padding:12px 24px">
          <h4>You may put any type of content here</h4>
          <p>
            You can format whatever details you want e.g. if each/some rows have
            a + icon to click to expand to expose more info
          </p>
        </div>
      </div>
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
    <se-table-group selectable="true">
      <se-table-item width="53px"
        ><se-icon option="button" rotate="180">arrow2_up</se-icon></se-table-item
      >
      <se-table-item width="53px"><se-checkbox></se-checkbox></se-table-item>
      <se-table-item title="Item with a hided detail section"
        >Item with a hided detail section</se-table-item
      >
      <se-table-item>2nd test</se-table-item>
      <se-table-item
        ><se-icon color="primary">airconditioner_hot_heating</se-icon>Last
        test</se-table-item
      >
      <div slot="detail" style="display:none;padding:12px 24px">
        <h4>You may put any type of content here</h4>
        <p>
          You can format whatever details you want e.g. if each/some rows have a
          + icon to click to expand to expose more info
        </p>
      </div>
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
    <se-table-group>
      <se-table-item width="53px"
        ><se-icon option="button" disabled="true"
           rotate="180">arrow2_up</se-icon
        ></se-table-item
      >
      <se-table-item width="53px"><se-checkbox></se-checkbox></se-table-item>
      <se-table-item
        flex="1"
        min-width="100px"
        title="Item with no hover effect"
        >Item with no hover effect ("selectable=false")</se-table-item
      >
      <se-table-item flex="3" min-width="600px">Test item 2</se-table-item>
      <se-table-item flex="1" min-width="100px"
        >Very last test item</se-table-item
      >
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
    <se-table-group selectable="true">
      <se-table-item width="53px"
        ><se-icon option="button" disabled="true"
           rotate="180">arrow2_up</se-icon
        ></se-table-item
      >
      <se-table-item width="53px"
        ><se-checkbox selected="true"></se-checkbox
      ></se-table-item>
      <se-table-item flex="1" min-width="100px" title="Item selected"
        >Item selected</se-table-item
      >
      <se-table-item flex="3" min-width="600px"
        >Another test item with a lot more content than the other items so that
        we can see what happens when there is multiple lines of information that
        needs to be shown</se-table-item
      >
      <se-table-item flex="1" min-width="100px">Last test item</se-table-item>
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
    <se-table-group selectable="true">
      <se-table-item width="53px"
        ><se-icon option="button" disabled="true"
           rotate="180">arrow2_up</se-icon
        ></se-table-item
      >
      <se-table-item width="53px"><se-checkbox></se-checkbox></se-table-item>
      <se-table-item flex="1" min-width="100px"
        >Last group with some more info</se-table-item
      >
      <se-table-item flex="3" min-width="600px">Test item 2</se-table-item>
      <se-table-item flex="1" min-width="100px"
        >Very last test item</se-table-item
      >
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
    <se-table-group selectable="true">
      <se-table-item width="53px"
        ><se-icon option="button" disabled="true"
           rotate="180">arrow2_up</se-icon
        ></se-table-item
      >
      <se-table-item width="53px"><se-checkbox></se-checkbox></se-table-item>
      <se-table-item flex="1" min-width="100px">Testing 1</se-table-item>
      <se-table-item flex="3" min-width="600px">2nd test</se-table-item>
      <se-table-item flex="1" min-width="100px"
        ><se-icon color="primary">airconditioner_hot_heating</se-icon>Last
        test</se-table-item
      >
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
  这四个属性灭有作用，不过也没关系，用<,>这些符号代替了 -->
  </se-pagination>
</se-block>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    },
  },
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