<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ item.createDate}}</div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Avatar from '@/components/Avatar/index.vue'
import type { Comment} from '@/types/response'

interface Props {
  list?:  Comment[]
}
const { list = [] } = defineProps<Props>()

</script>

<style scoped>
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(var(--neutral-color-dark), 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: var(--primary-color);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: var(--neutral-color);
}
</style>
