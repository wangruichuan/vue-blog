<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{
            name: 'BlogDetail',
            params: {
              id: item.id
            }
          }" >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name: 'BlogDetail',
            params: {
              id: item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ item.createTime }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink :to="{
              name: 'BlogCate',
              params: {
                id: item.category.id
              }
            }">{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
    :current="routeInfo.page"
    :limit="routeInfo.limit"
    :total="data.total"
    :visible-number="10"
    @page-change="handlePageChange"
      v-if="data.total" />
  </div>
</template>

<script setup lang="ts">
import Pager from '@/components/Pager/index.vue'
import { useFetch } from '@/composables/useFetch';
import { getBlogs } from '@/api/blog'
import { computed,watch,ref, onMounted,onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import emitter from '@/utils/emitter';
const router = useRouter()
const route = useRoute()

// 路由信息
const routeInfo = computed(() => {
  const categoryId = (+route.params.id || -1) as number
  const page = (+route.query.page! || 1) as number
  const limit = (+route.query.limit! || 10) as number
  return {
    categoryId,
    page,
    limit
  }
})

async function fetchBlogs() {
  return await getBlogs(routeInfo.value.page, routeInfo.value.limit, routeInfo.value.categoryId)
}
const { data, isLoading } = useFetch(fetchBlogs);

function handlePageChange(newPage:number) {
  // 要跳转到当前的分类id 当前的页容量 newPage的页码
  if(routeInfo.value.categoryId === -1) {
    // 当前没有分类
    router.push({
      name: 'Blog',
      query: {
        page: newPage,
        limit: routeInfo.value.limit
      }
    })
  }else{
    router.push({
      name: 'BlogCate',
      params: {
        id: routeInfo.value.categoryId
      },
      query: {
        page: newPage,
        limit: routeInfo.value.limit
      }
    })
  }
}
const container = ref<HTMLElement>()
watch(routeInfo,()=>{
  isLoading.value = true
  fetchBlogs().then((res)=>{
    // 滚动高度为0
    if(container.value) {
      container.value.scrollTop = 0
    }
    data.value = res.data
    isLoading.value = false
  })
})
function handleScroll() {
  emitter.emit('mainScroll', container.value! as HTMLElement)
}
function handleSetMainScroll(scrollTop:number){
  container.value!.scrollTop = scrollTop
}
onMounted(()=>{
  if(container.value) {
    emitter.on("setMainScroll",handleSetMainScroll)
    container.value.addEventListener('scroll', handleScroll)
  }
})
onBeforeUnmount(() => {
  emitter.emit("mainScroll")
  if (container.value) {
    container.value.removeEventListener('scroll', handleScroll)
  }
})

</script>

<style scoped>
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow: auto;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
}

.main h2 {
  font-size: 1.7em;
  font-weight: bold;
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid var(--neutral-color);
}

.thumb {
  flex: 0 0 auto;
  margin-right: 15px;
}

.thumb img {
  display: block;
  max-width: 200px;
  border-radius: 5px;
}

.main {
  flex: 1 1 auto;
}

.aside {
  font-size: 12px;
  color: var(--neutral-color);
}

.aside span {
  margin-right: 15px;
}

.desc {
  margin: 15px 0;
  font-size: 14px;
}
</style>
