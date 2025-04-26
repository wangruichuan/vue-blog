<template>
  <Layout>
    <div
      class="main-container"
      ref="container"
    >
      <BlogDetail
        :blog="data"
        v-loading="isLoading"
      ></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
      <div
        class="right-container"
        v-loading="isLoading"
      >
        <BlogTOC
          :toc="data.toc"
          v-if="data"
        ></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import BlogDetail from './components/BlogDetail.vue'
import BlogTOC from './components/BlogTOC.vue'
import BlogComment from './components/BlogComment.vue'
import { getBlog } from '@/api/blog'
import { useRoute,useRouter } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import { watch, ref, onMounted } from 'vue'
import { useMainScroll } from '@/composables/useMainScroll'

const route = useRoute()
const router = useRouter()

const data = ref()
const isLoading = ref(true)
getBlog(route.params.id + '').then((res) => {
  if (!res.data) {
    //文章不存在,跳转到404
    router.push({
      name: '404',
    })
    return
  }
  console.log('res', res);
  document.title = res.data.title
  data.value = res.data
  isLoading.value = false
})
const container = ref<HTMLElement>()

watch(
  () => route.params.id,
  () => {
    // 重新获取数据
    isLoading.value = true
    if (container.value) {
      container.value.scrollTop = 0
    }
    getBlog(route.params.id + '').then((res) => {
      data.value = res
      isLoading.value = false
    })
  },
)

onMounted(() => {
  useMainScroll(container.value!)
})
</script>

<style scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  padding: 20px;
  scroll-behavior: smooth;
  position: relative;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
</style>
