<template>
  <div class="blog-pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in numbers" :class="{ active: current === n }" :key="i">{{ n }}</a>
    <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  current: number; // 当前页码
  total: number; // 总条数
  limit: number; // 每页条数
  visibleNumber: number; // 可见的页码数量
}

const { current = 1, total = 0, limit = 10, visibleNumber = 10 } = defineProps<Props>()

// 得到总页数
const pageNumber = computed(() => Math.ceil(total / limit))

// 得到最小的显示数字
const visibleMin = computed(() => {
  let min = current - Math.floor(visibleNumber / 2)
  if (min < 1) {
    min = 1
  }
  return min
})
// 得到最大的显示数字
const visibleMax = computed(() => {
  let max = visibleMin.value + visibleNumber - 1
  if (max > pageNumber.value) {
    max = pageNumber.value
  }
  return max
})
// 得到显示的数字数组
const numbers = computed(() => {
  const nums = []
  for (let i = visibleMin.value; i <= visibleMax.value; i++) {
    nums.push(i)
  }
  return nums
})

const emit = defineEmits<{
  pageChange: [newPage: number]
}>()

//页面变动
const handleClick = (newPage: number) => {
  if(newPage<1) {
    newPage=1
  }
  if(newPage>pageNumber.value) {
    newPage=pageNumber.value
  }
  if (newPage === current.value) {
    return 
  }
  emit("pageChange", newPage)
}
</script>

<style scoped>
.blog-pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.blog-pager-container a {
  color: var(--primary-color);
  margin: 0 6px;
  cursor: pointer;
}

.blog-pager-container .disabled {
  color: var(--neutral-color);
  cursor: not-allowed;
  /* 禁用鼠标指针 */
  /* pointer-events: none; */
  /* 禁用点击事件 */
}

.blog-pager-container .active {
  color: var(--neutral-color-darker);
  font-weight: bold;
  cursor: text;
  /* pointer-events: none; */
  /* 禁用点击事件 */
}
</style>
