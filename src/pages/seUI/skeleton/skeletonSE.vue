<template>
  <div class="hello">
    <se-block divider>
      <se-block-header> se-skeleton的使用说明 </se-block-header>
      <se-block-content >
        <h4 >
          当信息需要长时间处理并显示在屏幕上时，
          会使用加载模式。骨架状态和加载组件是两个视觉指示器，
          用于表示数据正在加载和屏幕未冻结。
        </h4>
        <se-divider></se-divider>
        <p>简单示例</p>
       <se-list option="dropdown">
  <se-list-item>
    <se-skeleton slot="item" width="100%"></se-skeleton>
    <se-skeleton slot="description" width="40%"></se-skeleton>
  </se-list-item>
  <se-list-item>
    <se-skeleton slot="item" width="100%"></se-skeleton>
    <se-skeleton slot="description" width="40%"></se-skeleton>
  </se-list-item>
  <se-list-item>
    <se-skeleton slot="item" width="100%"></se-skeleton>
    <se-skeleton slot="description" width="40%"></se-skeleton>
  </se-list-item>
</se-list>
        <se-divider></se-divider>
        
      </se-block-content>
    </se-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
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
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}
</style>
