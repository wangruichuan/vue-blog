<template>
  <div
    class="project-container"
  >

    <ProjectItem
      v-bind="i"
      v-for="(i, index) in data"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">

import ProjectItem from './ProjectItem.vue'
import type { Project } from '@/types/response'

import { getProjectsApi } from '@/api/project'
import { useFetch } from '@/composables/useFetch'

const { data } = useFetch<Project[]>(getProjectsApi)
setTimeout(() => {
  console.log(data.value)
}, 2000)
</script>

<style scoped>
.project-container {
  background-color: #141928;
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  overflow: auto;
}
</style>
