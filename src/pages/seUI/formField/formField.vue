<template>
 <div class="hello">
     <se-block divider>
      <se-block-header> SE中的表单域 </se-block-header>
      <se-block-content>
        <!-- 在se-form-field加上option="stacked"，会使不在居中 -->
        <h4>第一种表单域，不加stacked属性，是居中的</h4>
        <p>class="with-icon"是<el-tag type="success"
            >se-from-field</el-tag>组件的一部分，并影响与其直接关联的输入框，
            以便在输入框本身中添加图标。如果需要，<el-tag type="success"
            >se-icon</el-tag>也可用作按钮</p>
<se-form-field
  label="This is my custom Checkbox.  It is unique."
  type="checkbox"
  required="true"
>
  <se-checkbox value="checkbox-value"></se-checkbox>
</se-form-field>
<se-form-field label="Input" required="true">
  <input type="text" />
</se-form-field>
<se-form-field label="Select" required="true" type="select">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</se-form-field>
<se-form-field label="Input with icon">
  <div class="with-icon">
    <input type="search" />
    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
  </div>
</se-form-field>
<se-form-field label="Autocomplete">
  <input list="marketSegmentList" />
  <datalist id="marketSegmentList">
    <option value="react"></option>
    <option value="stenciljs"></option>
    <option value="angular"></option>
    <option value="vuejs"></option>
  </datalist>
</se-form-field>

<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="展开代码" name="1" style="background:black">
     <pre v-highlight="formField1"><code></code></pre> 
  </el-collapse-item>
  </el-collapse>
 <se-divider></se-divider>
 <h4>第二种</h4>
 <se-form-field id="input-stacked-form" label="Input" required="true" option="stacked">
  <input type="text" />
</se-form-field>
<se-form-field id="select-form" label="Select" required="true" type="select" option="stacked">
  <select>
    <option>Stacked Option 1</option>
    <option>Stacked Option 2</option>
    <option>Stacked Option 3</option>
  </select>
</se-form-field>
<se-form-field label="Input with icon" option="stacked">
  <div class="with-icon">
    <input type="search" />
    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
  </div>
</se-form-field>
<se-form-field label="Autocomplete" option="stacked">
  <input list="marketSegmentList" />
  <datalist id="marketSegmentList">
    <option value="react"></option>
    <option value="stenciljs"></option>
    <option value="angular"></option>
    <option value="vuejs"></option>
  </datalist>
</se-form-field>

<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="展开代码" name="1" style="background:black">
     <pre v-highlight="formField2"><code></code></pre> 
  </el-collapse-item>
  </el-collapse>
 <se-divider></se-divider>
 <h4>第三种block</h4>
<se-form-field id="input-stacked-form" block label="Input inlined" required="true">
  <input type="text" />
</se-form-field>
<se-form-field id="input-stacked-form" block label="Input stacked" required="true" option="stacked" >
  <input type="text" />
</se-form-field>

<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="展开代码" name="1" style="background:black">
     <pre v-highlight="formField3"><code></code></pre> 
  </el-collapse-item>
  </el-collapse>
 <se-divider></se-divider>
        </se-block-content>
    </se-block>
 </div>
</template>

<script>
export default {
    data(){
        return{
            formField1:`<se-form-field
  label="This is my custom Checkbox.  It is unique."
  type="checkbox"
  required="true"
>
  <se-checkbox value="checkbox-value"></se-checkbox>
</se-form-field>
<se-form-field label="Input" required="true">
  <input type="text" />
</se-form-field>
<se-form-field label="Select" required="true" type="select">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</se-form-field>
<se-form-field label="Input with icon">
  <div class="with-icon">
    <input type="search" />
    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
  </div>
</se-form-field>
<se-form-field label="Autocomplete">
  <input list="marketSegmentList" />
  <datalist id="marketSegmentList">
    <option value="react"></option>
    <option value="stenciljs"></option>
    <option value="angular"></option>
    <option value="vuejs"></option>
  </datalist>
</se-form-field>`,
formField2:`<se-form-field id="input-stacked-form" label="Input" required="true" option="stacked">
  <input type="text" />
</se-form-field>
<se-form-field id="select-form" label="Select" required="true" type="select" option="stacked">
  <select>
    <option>Stacked Option 1</option>
    <option>Stacked Option 2</option>
    <option>Stacked Option 3</option>
  </select>
</se-form-field>
<se-form-field label="Input with icon" option="stacked">
  <div class="with-icon">
    <input type="search" />
    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
  </div>
</se-form-field>
<se-form-field label="Autocomplete" option="stacked">
  <input list="marketSegmentList" />
  <datalist id="marketSegmentList">
    <option value="react"></option>
    <option value="stenciljs"></option>
    <option value="angular"></option>
    <option value="vuejs"></option>
  </datalist>
</se-form-field>`,
formField3:`<se-form-field id="input-stacked-form" block label="Input inlined" required="true">
  <input type="text" />
</se-form-field>
<se-form-field id="input-stacked-form" block label="Input stacked" required="true" option="stacked" >
  <input type="text" />
</se-form-field>`

    }
   
    },
    methods:{
    
}
}
</script>

<style lang="scss" scoped>
$se-icon-folder: "~@se/icons/fonts";
$se-generate-font-class: "false";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles-technical";
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
  input{
    border: 1px solid #9fa0a4 ;
  }

}
</style>