<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
    Top
  </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter';
import {ref } from 'vue'
const show = ref(false)

// 点击事件
function handleClick(){
  emitter.emit("setMainScroll",0)
}

function handleScroll(dom?:HTMLElement){
  if(!dom){
    show.value = false
    return
  }
  //滚动到达500px显示回到顶部按钮
  if(dom.scrollTop > 500){
    show.value = true
  }else{
    show.value = false
  }
}

emitter.on("mainScroll",handleScroll)

</script>

<style scoped>
.to-top-container{
  background-color: var(--primary-color-dark);
  opacity: 0.7;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  color: #ffffff;
  z-index: 9999999;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  font-weight: bold;
}

</style>
