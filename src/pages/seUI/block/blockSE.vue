<template>
  <div class="hello">
    <se-block divider>
      <se-block-header> <el-tag type="success">se-block</el-tag>的使用说明 </se-block-header>
      <se-block-content>
        <h4>
          <el-tag type="success">se-block</el-tag>是内容的容器。应用程序中的任何内容都应该添加到块中。
          该块可以有多种样式（card、widget等），必要时可以在其中托管一个容器。<el-tag type="success">se-block</el-tag>块由<el-tag type="success">se-block-header</el-tag>页眉、
          <el-tag type="success">se-block-content</el-tag>内容和<el-tag type="success">se-block-footer</el-tag>页脚组成。
        </h4>
        <se-divider></se-divider>
        <h4>se-block</h4> 
        <p>内容的容器。任何内容都应该添加到块中。
          该块可以有多种样式（卡、小部件等），并且可以在必要时托管一个容器。块由页眉、内容和页脚组成。</p>
        <se-divider></se-divider>
        <h4>se-block-header</h4>
        <p>定义se-block-header参数</p>
        <se-divider></se-divider>
        <h4>se-block-content</h4>
        <p>定义se-block-content的参数</p>
        <se-divider></se-divider>
        <h4>se-block-footer</h4>
        <p>定义se-block-content的参数</p>
        <se-divider></se-divider>
        <h4>为了适应不同你给的样式块，有三个选项，分别为basic、card、widget三种</h4>
        <p>Basic(option="Basic")：默认样式。用于没有特定样式或间距的普通内容。</p>
         <pre v-highlight="card"><code></code></pre>
         <p>Widget（option="Widget"）：在小部件周围创建一个8px的边距，并在se-block-header(页眉)、se-block-content(内容)和se-block-footer(页脚)之间添加一个分隔符。</p>
         <pre v-highlight="card"><code></code></pre>
         <p>Card (option="card"):卡片（option=“Card”）：间距比option为widget时的大，（16px），块有超浅灰色边框，se-block-header(页眉)、se-block-content(内容)和se-block-footer(页脚)之间没有明显的分隔。</p>
         <pre v-highlight="widget"><code></code></pre>
        <se-divider></se-divider>
        

      </se-block-content>
    </se-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
     basic:` <se-container direction="row">
    <se-container option="basic">
      <se-block option="basic">
        <se-block-header>
          Block Header Title
          <div slot="end">
            <se-icon option="button" color="alternative">
              other_vertical
            </se-icon>
          </div>
        </se-block-header>
        <se-block-content>Block Content</se-block-content>
        <se-block-footer>
          <se-button>Block Footer Button</se-button>
        </se-block-footer>
      </se-block>
    </se-container>
  </se-container>`,
     card:` <se-container direction="row">
    <se-container option="widget">
      <se-block option="widget">
        <se-block-header>
          Block Header Title
          <div slot="end">
            <se-icon option="button" color="alternative">
              other_vertical
            </se-icon>
          </div>
        </se-block-header>
        <se-block-content>Block Content</se-block-content>
        <se-block-footer>
          <se-button>Block Footer Button</se-button>
        </se-block-footer>
      </se-block>
    </se-container>
  </se-container>`,
     widget:`  <se-container direction="row">
    <se-container option="card">
      <se-block option="card">
        <se-block-header>
          Block Header Title
          <div slot="end">
            <se-icon option="button" color="alternative">
              other_vertical
            </se-icon>
          </div>
        </se-block-header>
        <se-block-content>Block Content</se-block-content>
        <se-block-footer>
          <se-button>Block Footer Button</se-button>
        </se-block-footer>
      </se-block>
    </se-container>
  </se-container>` ,
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
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}
</style>
