<template>
  <Pager :total="total" :current="current" @page-change="handlePageChange"/>
</template>

<script setup lang="ts">
import Pager from '@/components/Pager/index.vue'
import { ref } from "vue";

const current = ref(1)
const total=ref(302)

function handlePageChange(newPage:number) {
  current.value=newPage
}

</script>

