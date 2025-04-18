<template>
  <div class="carousel-item-container" ref="container"
  @mousemove="handleMouseMove"
  @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="showWords" :duration="2000">{{
        carousel.id }}</ImageLoader>
      <h1 class="title" ref="titleRef">{{ carousel.title }}</h1>
      <p class="desc" ref="descRef">{{ carousel.description }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
// 定义 data 数组中元素的类型
import type { Banner } from '@/types/response'
import ImageLoader from '@/components/ImageLoader/index.vue'
import { computed, onMounted, onUnmounted } from 'vue';
interface Props {
  carousel: Banner
}
interface Size{
  width:number;
  height:number;
}

import { ref } from 'vue'
const { } = defineProps<Props>()
const titleWidth = ref(0)
const descWidth = ref(0)

const containerSize = ref<Size>()
const innerSize = ref<Size>()
const mouseX = ref(0) // 鼠标在容器中的横坐标
const mouseY = ref(0) // 鼠标在容器中的纵坐标

const container = ref<HTMLElement | null>(null)
const image = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)

onMounted(() => {
  titleWidth.value = titleRef.value!.clientWidth
  descWidth.value = descRef.value!.clientWidth
  setSize()
  mouseX.value = center.value!.x
  mouseY.value = center.value!.y
  window.addEventListener('resize', setSize)
})
onUnmounted(() => {
  window.removeEventListener('resize', setSize)
})

const imagePosition = computed(() => {
  if (!containerSize.value || !innerSize.value) {
    return
  }

  const extraWidth = innerSize.value!.width - containerSize.value!.width
  const extraHeight = innerSize.value!.height - containerSize.value!.height
  const left = -extraWidth / containerSize.value.width * mouseX.value
  const top = -extraHeight / containerSize.value.height * mouseY.value
  return {
    transform: `translate(${left}px, ${top}px)`,
  }
})

const center = computed(() => {
  if (!containerSize.value) {
    return
  }
  return {
    x: containerSize.value.width / 2,
    y: containerSize.value.height / 2
  }
})

function setSize() {
  containerSize.value = {
    width: container.value!.clientWidth,
    height: container.value!.clientHeight
  }
  innerSize.value = {
    width: image.value!.clientWidth,
    height: image.value!.clientHeight
  }
}

function showWords() {
  titleRef.value!.style.opacity = '1'
  titleRef.value!.style.width = '0'
  titleRef.value!.style.transition = '1s'
  void titleRef.value!.clientHeight // 触发重排
  titleRef.value!.style.width = titleWidth.value + 'px'

  descRef.value!.style.opacity = '1'
  descRef.value!.style.width = '0'
  descRef.value!.style.transition = '2s 1s'
  void descRef.value!.clientHeight // 触发重排
  descRef.value!.style.width = descWidth.value + 'px'
}

function textDisappears() {
  titleRef.value!.style.transition = '0s'
  titleRef.value!.style.opacity = '0'
  titleRef.value!.style.width = '0'
  void titleRef.value!.clientHeight // 触发重排

  descRef.value!.style.transition = '0s'
  descRef.value!.style.opacity = '0'
  descRef.value!.style.width = '0'
  void descRef.value!.clientHeight // 触发重排
  showWords()
}

function handleMouseMove(e: MouseEvent) {
  const rect = container.value!.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}
function handleMouseLeave() {
  mouseX.value = center.value!.x
  mouseY.value = center.value!.y
}

defineExpose({
  showWords,
  textDisappears
})
</script>

<style scoped>
.carousel-item-container {
  width: 100%;
  height: 101vh;
  position: relative;
  overflow: hidden;

}

.carousel-img {
  width: 110%;
  height: 110%;
  transition: all 0.3s;
}

.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 10%;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, .5),
    -1px 0 0 rgba(0, 0, 0, .5),
    0px 1px 0 rgba(0, 0, 0, .5),
    0px -1px 0 rgba(0, 0, 0, .5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;

}

.title {
  top: calc(50% - 40px);
  font-size: 2em;

}

.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: var(--neutral-color);
}
</style>
