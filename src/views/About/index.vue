<template>
  <div
    class="about-container"
    v-loading="isLoading"
  >
    <iframe
      ref="iframe"
      class="about-content"
      src="https://www.strml.net"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isLoading = ref(true)
const iframe = ref<HTMLIFrameElement | null>(null)
onMounted(() => {
  if (iframe.value) {
    iframe.value.addEventListener('load', () => {
      isLoading.value = false
    })
  }
})
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .about-content {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
