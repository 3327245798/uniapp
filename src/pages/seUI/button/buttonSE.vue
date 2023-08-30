<template>
  <div class="hello">
    <se-block>
      <se-block-content>
        <div style="display: flex; flex-wrap: wrap">
          <se-tooltip position="left">
            <se-button option="raised" color="secondary" slot="tooltip">
              Tooltip Left</se-button>
            
            Tooltip Left
          </se-tooltip>
          <se-button option="flat">standard</se-button>
          <se-button option="flat" color="alternative">alternative</se-button>
          <se-button option="flat" color="primary">primary</se-button>
          <se-button option="flat" color="secondary">secondary</se-button>
          <se-button icon="action_resize">Resize</se-button>
          <se-button option="outline">Outline</se-button>
          <se-button option="outline" color="alternative"
            >Outline alternative</se-button
          >
          <se-button option="outline" color="primary"
            >Outline primary</se-button
          >
          <se-button option="outline" color="secondary"
            >Outline secondary</se-button
          >
          <se-button icon="action_resize" icon-only></se-button>
          <se-chip value="Chip 01"></se-chip>
          <se-chip value="Chip 02" can-close></se-chip>
          <se-chip value="with icon" selected> <se-icon slot="start" color="error">notification_critical</se-icon></se-chip> 
          <se-link url="http://google.com">Link to Google</se-link>
          <se-link url="http://google.com" option="external"
            >External Link to Google</se-link
          >
          <se-button option="flat">Flat</se-button>
          <se-button option="flat" color="primary">FlatGreen</se-button>
          <se-button option="raised">Raised</se-button>
          <se-button option="raised" color="primary">RaisedGreen</se-button>
          <se-button option="text">Text</se-button>
          <se-button option="text" color="primary">Primary</se-button>
          <se-radio-group value="left">
            <se-button value="left" icon-only
              ><se-icon slot="icon" size="small" mirror="horizontal"
                >arrow2_right</se-icon
              ></se-button
            >
            <se-button value="right" icon-only
              ><se-icon slot="icon" size="small"
                >arrow2_right</se-icon
              ></se-button
            >
          </se-radio-group>
          <se-radio-group value="second">
            <se-button value="first">Check1</se-button>
            <se-button value="second">Check2</se-button>
            <se-button value="third">Check3</se-button>
          </se-radio-group>
        </div>
        <se-divider></se-divider>
        <se-divider></se-divider>
        <se-button
          onclick="document.getElementById('dialog-simple-notitle').open = true"
          option="raised"
          >Dialog simple</se-button
        >
        <se-button
          onclick="document.getElementById('dialog-simple-title').open = true"
          option="raised"
          >Dialog title icon</se-button
        >
        <se-button
          onclick="document.getElementById('dialog-complex').open = true"
          option="raised"
          >Dialog complex</se-button
        >
      </se-block-content>
      <se-block-footer>
        <se-button
          onclick="document.getElementById('snackbar').open = true"
          option="raised"
          >Open Snackbar</se-button
        >
      </se-block-footer>
    </se-block>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$se-icon-folder: "~@se/icons/fonts";
$se-generate-font-class: "false";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles-technical";

se-block {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }
}
</style>