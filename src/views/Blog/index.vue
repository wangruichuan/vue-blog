<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout/index.vue'
import BlogCategory from './components/BlogCategory.vue'
import BlogList from './components/BlogList.vue'


</script>

<style scoped>
.blog-container{
  width: 100%;
  height: 100%;
}
</style>
