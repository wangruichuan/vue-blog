<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" :src="placeholder" alt="" class="placeholder">
    <img draggable="false" @load="handerLoad" :style="{ opacity: originOpacity, transition: `${duration}ms` }" :src="src" alt=""
      class="origin">

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  src: string,
  placeholder: string,
  duration?: number,
}
const { duration = 500, src, placeholder } = defineProps<Props>()

const emit = defineEmits<{
  load: []
}>()


const everythingDone = ref(false) //是否加载完成

const originLoaded = ref(false) //原图是否加载完成
const originOpacity = computed(() => {
  return originLoaded.value ? 1 : 0
})
function handerLoad() {
  originLoaded.value = true
  setTimeout(() => {
    everythingDone.value = true
    emit('load')
  }, duration)
}

</script>

<style scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  filter: blur(2vw);
}
</style>
