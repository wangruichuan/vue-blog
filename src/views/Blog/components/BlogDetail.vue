<template>
  <div class="blog-detail-container" v-if="blog">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ blog.createTime }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink
      :to="{ name: 'BlogCate', params: { id: blog.category?.id } }"
      >{{ blog.category?.name }}</RouterLink>
    </div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/markdown.css"
import "highlight.js/styles/github.css";
import type { Article } from '@/types/response';
import { onMounted } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
interface Props {
  blog: Article
}

const { blog } = defineProps<Props>()

onMounted(() => {
  const hash = route.hash
  location.hash = "";
  setTimeout(() => {
    location.hash = hash;
  }, 500);
})
</script>

<style scoped>

h1{
  font-size: 1.7em;
  font-weight: bold;
  margin-bottom: 20px;
}
.aside{
  font-size: 12px;
  color: var(--neutral-color-dark);
  margin-bottom: 2em;

}
.aside span,a{
  margin-right: 15px;
}
</style>

