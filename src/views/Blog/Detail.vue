<template>
  <Layout>
    <div
      class="main-container"
      ref="container"
    >
      <BlogDetail :blog="data" v-loading="isLoading" ></BlogDetail>
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
import { useFetch } from '@/composables/useFetch'
import { useRoute } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import { watch, ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'


const route = useRoute()

const { data, isLoading } = useFetch(async () => {
  return await getBlog(route.params.id + '')
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

// 定义事件类型


function handleScroll() {
  emitter.emit('mainScroll', container.value! as HTMLElement)
}

// 注册滚动事件
onMounted(() => {
  if (container.value) {
    container.value.addEventListener('scroll', handleScroll)
  }
})

function handleSetMainScroll(scrollTop:number){
  container.value!.scrollTop = scrollTop
}
emitter.on("setMainScroll",handleSetMainScroll)

// 取消注册滚动事件
onBeforeUnmount(() => {
  emitter.emit("mainScroll")
  if (container.value) {
    container.value.removeEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  emitter.off("setMainScroll",handleSetMainScroll)
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
