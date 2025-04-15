<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/index.vue'
interface Props {
  text?:string
}

const { text = '无数据'} = defineProps<Props>()

</script>

<style scoped>
.empty-container{
  /* 设置子元素居中 */
  color: var(--neutral-color-dark);
  text-align: center;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon-container{
  font-size: 72px;

}
</style>

