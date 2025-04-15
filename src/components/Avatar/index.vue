<template>
  <img class="avatar-container" :src="url" alt="" :style="{
    width: size + 'px',
    height: size + 'px'
  }">
</template>

<script setup lang="ts">
interface Props {
  url: string,
  size?: number,
}
const { size = 150}=defineProps<Props>()

</script>

<style scoped>
</style>

