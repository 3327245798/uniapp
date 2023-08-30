<template>
  <div class="hello">
        <se-block divider>
      <se-block-header>
       ContainSE的使用说明 
      </se-block-header>
      <se-block-content>
        <h4>
          为了构造任意类型的layout，需要使用以下两种布局<el-tag type="success">se-container</el-tag>
          和<el-tag type="success">se-block</el-tag>。
        </h4>
        <h4><el-tag type="success">se-container:</el-tag>使用灵活的元素、居中的内容甚至网格布局构建和构建整体布局</h4>
        <h4><el-tag type="success">se-block:</el-tag>
内容的容器。任何内容都应该添加到块中。该块可以有多种样式（卡、小部件..），
并且可以在必要时托管一个容器。块由页眉、内容和页脚组成。</h4>
<p>Cards使用css flexbox功能（默认情况下，se容器也是如此），因此内容非常适合容器。</p>
        <se-divider></se-divider>       
      </se-block-content>
      <se-block-footer>
        <se-button onclick="document.getElementById('snackbar').open = true" option="raised">Open Snackbar</se-button>
      </se-block-footer>
      </se-block>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    goto(url){
this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}



</style>
