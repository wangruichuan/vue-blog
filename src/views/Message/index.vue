<template>
  <div
    class="message-container"
    v-loading="isLoading"
    ref="container"
  >
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import MessageArea from '@/components/MessageArea/index.vue'
import { getMessages, postMessages } from '@/api/message'
import { useFetch } from '@/composables/useFetch'
import emitter from '@/utils/emitter'
import { onUnmounted, computed, ref, onMounted } from 'vue'
import type {
  Message,
  DataObject,
  ResponseData,
  CommentData,
} from '@/types/response'
import { useMainScroll } from '@/composables/useMainScroll'


const page = ref(1) // 页码
const limit = ref(10) // 页容量
const { data, isLoading } = useFetch<DataObject<Message>>(async () => {
  return await getMessages(page.value, limit.value)
})
function handleSubmit(
  formData: { nickname: string; content: string },
  callback: (content: string) => void,
) {
  postMessages(formData).then((res) => {
    callback('感谢您的留言')
    data.value!.rows.unshift(res.data)
  })
}
const container = ref<HTMLElement | null>(null)

onMounted(() => {
  useMainScroll(container.value!)
})

// 监听事件总线
emitter.on('mainScroll', handleScroll)

onUnmounted(() => {
  emitter.off('mainScroll', handleScroll)
})
const hasMore = computed(() => {
  return data.value.rows.length < data.value.total
})

function fetchMore() {
  if (!hasMore.value) {
    return
  }
  isLoading.value = true
  page.value++
  getMessages(page.value, limit.value).then((res: unknown) => {
    const result = res as ResponseData<CommentData>
    data.value.rows.push(...result.data.rows)
    data.value.total = result.data.total
    isLoading.value = false
  })
}

function handleScroll(dom?: HTMLElement) {
  if (isLoading.value || !dom) {
    return
  }
  const range = 100
  const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
  if (dec < range) {
    fetchMore()
  }
}
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
