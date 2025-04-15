<template>
  <div class="site-aside-container">

    <div class="avatar-container">
      <Avatar style="border-radius: 50%;" url="https://pic1.imgdb.cn/item/67fdc5ec88c538a9b5d13920.webp"></Avatar>

    </div>
    <h1>wangruichuan</h1>
    <Menu></Menu>
    <Contact></Contact>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/Avatar/index.vue'
import Menu from './Menu/index.vue'
import Contact from './Contact/index.vue'
</script>

<style scoped>
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: var(--aside-back-color);
  padding: 20px 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.avatar-container {
  margin: 0 auto;
}

h1 {
  font-size: 1.2em;
  text-align: center;
  margin-top: 10px;
  color: white;
  margin-bottom: -10px;
}
</style>
