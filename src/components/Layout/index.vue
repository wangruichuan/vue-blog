<template>
  <div class="layout-container">
    <div class="layout-left">
      <slot name="left"></slot>
    </div>
    <div class="layout-main">
      <slot></slot>
    </div>
    <div class="layout-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

}
.layout-left,
.layout-right,
.layout-main
 {
  height: 100%;
}
.layout-left,.layout-right{
  flex: 0 0 auto;
  overflow: hidden;
}
.layout-main{
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
}
</style>
