<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import RightList from '@/views/Blog/components/RightList.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBlogTypes } from '@/api/blog'
import type { Contents } from '@/types/contents'
const route = useRoute()
const router = useRouter()
type BlogType = {
  id: number
  name: string
  articleCount: number
}


const { data, isLoading } = useFetch<BlogType[]>(getBlogTypes)

const categoryId = computed(() => {
  return +route.params.id || -1
})
const limit = computed(() => {
  return +route.params.limit || 10
})
const list = computed(() => {

  let total = 0;
  for (const item of data.value) {
    total += item.articleCount
  }

  const result = [
    { name: "全部", id: -1, articleCount: total },
    ...(data.value),
  ]

  return result.map((item) => {
    return {
      ...item,
      isSelect: item.id === categoryId.value,
      aside:`${item.articleCount}篇`
    }
  })
})

function handleSelect(item: Contents) {
  const query = {
    page: 1,
    limit: limit.value
  }
  if (item.id === -1) {
    // 选中全部
    router.push({
      name: 'Blog',
      query
    })
  } else {
    router.push({
      name: 'BlogCate',
      params: {
        id: item.id
      },
      query
    })
  }
}

</script>

<style scoped>
.blog-category-container {
  width: 300px;
  padding: 20px;
  height: 100%;
  position: relative;
  overflow-y: auto;

}

h2 {
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
}
</style>
