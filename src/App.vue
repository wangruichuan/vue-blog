<template>
  <UserAvatar class="rounded-full object-cover block"
    url="https://himg.bdimg.com/sys/portrait/item/public.1.66d8b906.uVmiVzu_09wYPrca9tuG-g.jpg" />

  <IconItem type="arrowup" />
  <BlogPager :total="total" :current="current" @page-change="handlePageChange"/>
</template>

<script setup lang="ts">
import UserAvatar from '@/components/UserAvatar.vue';
import IconItem from "@/components/IconItem.vue";
import BlogPager from '@/components/BlogPager.vue'
import { ref } from "vue";

const current = ref(1)
const total=ref(302)

function handlePageChange(newPage:number) {
  current.value=newPage
}

</script>

<style scoped>
.iconfont {
  font-size: 25px;
}
</style>
