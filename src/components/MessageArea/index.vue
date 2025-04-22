<template>
  <div class="message-area-container">
    <DataForm @submit="handleSubmit" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div
      class="loading"
      v-loading="isListLoading"
    ></div>
  </div>
</template>

<script setup lang="ts">
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'
import type { Comment } from '@/types/response'
interface Props {
  title?: string
  subTitle?: string
  list?: Array<Comment>
  isListLoading?: boolean
}

const {
  title = '',
  subTitle = '',
  list = [],
  isListLoading = false,
} = defineProps<Props>()

const emit = defineEmits<{
  submit: [
    comment: {
      nickname: string
      content: string
    },
    callback: (content:string) => void,
  ]
}>()

function handleSubmit(
  formData: { nickname: string; content: string },
  callback: (content:string) => void,
) {
  emit('submit', formData,callback)
}
</script>

<style scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>
