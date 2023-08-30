<template>
  <div class="hello">
    <se-block divider>
      <se-block-header> se-stepper的使用说明 </se-block-header>
      <se-block-content >
        <h4 >
          <el-tag type="success">se-stepper</el-tag>组件是一个将数据分解为逻辑步骤的工具。
          如果应用程序要求用户按特定顺序提交多个表单，这将非常有用。
        </h4>
        <se-divider></se-divider>
        <se-stepper id="se-stepper1" color="lternative">
          <se-stepper-item label="Step 1" >
            <se-block option="card">
              <se-button onclick="document.getElementById('se-stepper1').next(true);" option="flat" color="primary">验证步骤1并进行下一步</se-button>
            </se-block>
          </se-stepper-item>
          <se-stepper-item label="Step 2">
            <se-block option="card">
              <se-button onclick="document.getElementById('se-stepper1').next(true);" option="flat" color="primary">验证步骤2并进行下一步</se-button>
            </se-block>
          </se-stepper-item>
          <se-stepper-item label="Step 3">
            <se-block option="card">
              <se-button onclick="document.getElementById('se-stepper1').next(true);" option="flat" color="primary">验证3并进行下一步</se-button>
            </se-block>
          </se-stepper-item>
          <se-stepper-item label="Step 4">
            <se-block option="card">
              <se-button onclick="document.getElementById('se-stepper1').next(true);" option="flat" color="primary">验证步骤4并进行下一步</se-button>
            </se-block>
          </se-stepper-item>
          <se-stepper-item label="Step 5">
            <se-block option="card">
              <se-button onclick="document.getElementById('se-stepper1').reset();"  option="flat" color="primary">重置</se-button>
            </se-block>
          </se-stepper-item>
        </se-stepper>     
      </se-block-content>
    </se-block>
  </div>
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
<style lang="scss" scoped >
se-button{
  background: #10d23a;
  color: white;
}
se-block{
  h4{
    text-align: left;
  }
}
</style>
