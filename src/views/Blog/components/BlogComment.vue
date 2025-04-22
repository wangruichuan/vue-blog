<template>
  <div class="blog-comment-container">
    <MessageArea
      @submit="handleSubmit"
      :list="data.rows"
      :is-list-loading="isLoading"
      title="评论列表"
      :sub-title="`${data.total}`"
    />
  </div>
</template>

<script setup lang="ts">
import MessageArea from '@/components/MessageArea/index.vue'
import { useFetch } from '@/composables/useFetch'
import { getComments, postComment } from '@/api/blog'
import type { CommentData } from '@/types/response'
import { computed, onUnmounted, ref } from 'vue'
import type { ResponseData } from '@/types/response'
import { useRoute } from 'vue-router'
import emitter from '@/utils/emitter'
const route = useRoute()

const page = ref(1) // 页码
const limit = ref(10) // 页容量

const hasMore = computed(() => {
  return data.value.rows.length < data.value.total
})

const { data, isLoading } = useFetch<CommentData>(async () => {
  return await getComments(route.params.id as string, page.value, limit.value)
})

function fetchMore() {
  if (!hasMore.value) {
    return
  }
  isLoading.value = true
  page.value++
  getComments(route.params.id as string, page.value, limit.value).then(
    (res: unknown) => {
      const result = res as ResponseData<CommentData>
      data.value.rows.push(...result.data.rows)
      data.value.total = result.data.total
      isLoading.value = false
    },
  )
}

function handleScroll(dom?: HTMLElement) {
  if(isLoading.value || !dom){
    return
  }
  const range = 100
  // scrollTop : 元素的垂直滚动位置 :元素内容顶部到元素视口顶部的距离
  // clientHeight : 元素的可见高度
  // scrollHeight : 元素的总高度
  const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
  if (dec < range) {
    fetchMore()
  }
}

// 监听事件总线
emitter.on('mainScroll', handleScroll)

onUnmounted(() => {
  emitter.off('mainScroll', handleScroll)
})

async function handleSubmit(
  formData: { nickname: string; content: string },
  callback: () => void,
) {
  // 提交评论
  const { data: newComment } = await postComment({
    blogId: route.params.id as string,
    nickName: formData.nickname,
    content: formData.content,
  })
  // 添加新的评论
  data.value.rows.unshift(newComment)
  data.value.total++
  callback()
}
</script>

<style scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>
