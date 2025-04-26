<template>
  <ul class="right-list-container">
    <li
      v-for="(item, index) in list"
      :key="index"
    >
      <span
        :class="{ active: item!.isSelect }"
        :style="{ height: `40px`, lineHeight: `40px`, minHeight: `40px` }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </span>
      <span
        class="aside"
        :class="{ active: item!.isSelect }"
        v-if="item.aside"
        @click="handleClick(item)"
        style=""
      >
        {{ item.aside }}
      </span>
      <RightList :list="item.children"></RightList>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Contents } from '@/types/contents'
import {useRouter } from 'vue-router'
const router = useRouter()

interface Props {
  list: Contents[] | undefined
}
const {} = defineProps<Props>()

function handleClick(item: Contents) {
  // console.log(item)
  if (!item.isSelect) {
    if(item.anchor){
      location.hash = item.anchor!
    }else{
      router.push({
      name: 'BlogCate',
      params: {
        id: item.id,
      }
    })
    }

  }
}
</script>

<style scoped>
.right-list-container .right-list-container {
  margin-left: 1em;
}
.active {
  color: var(--secondary-color-dark);
}

.aside {
  margin-left: 2em;
  font-size: 0.8em;
}
.aside:hover {
  cursor: pointer;
  color: var(--secondary-color-dark);
}
li:hover {
  cursor: pointer;
}
span:hover {
  color: var(--secondary-color-dark);
}
</style>
