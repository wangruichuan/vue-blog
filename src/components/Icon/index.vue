<template>
  <i class="iconfont icon-container" v-html="iconUnicode"></i>
</template>

<script setup lang="ts">
import { typeMap } from "./iconMap";
import { computed } from 'vue'
interface Props {
  type: string
}

const { type } = defineProps<Props>()

const iconUnicode = computed(() => typeMap[type])


</script>

<style scoped>
@font-face {
  font-family: 'iconfont';
  /* Project id 4892934 */
  src: url('//at.alicdn.com/t/c/font_4892934_ywqonhfzxap.woff2?t=1744709039260') format('woff2'),
    url('//at.alicdn.com/t/c/font_4892934_ywqonhfzxap.woff?t=1744709039260') format('woff'),
    url('//at.alicdn.com/t/c/font_4892934_ywqonhfzxap.ttf?t=1744709039260') format('truetype');
}

.iconfont {
  font-size: inherit;
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
