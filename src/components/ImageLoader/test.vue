<template>
  <div class="test-container">
    <ImageLoader src="https://pic1.imgdb.cn/item/67fdc5ec88c538a9b5d13920.webp"
    placeholder="https://himg.bdimg.com/sys/portrait/item/public.1.66d8b906.uVmiVzu_09wYPrca9tuG-g.jpg"
      @load="handleLoaded" />
  </div>
</template>

<script setup lang="ts">
import ImageLoader from '@/components/ImageLoader/index.vue'

const handleLoaded = () => {
  console.log('图片加载完成')
}
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid #ddd;
  margin: 20px auto;

}
</style>
