<template>
  <div v-loading="isLoading" class="home-container" @wheel="handleWheel">
    <ul class="carousel-container" ref="container">
      <li v-for="item in banners" :key="item.id" :style="{
        transform: `translateY(${marginTop})`,
        transition: 'transform 0.5s'
      }" @transitionend="switching = false">
        <CarouselItem :carousel="item" ref="carouselItemRef"/>
      </li>
    </ul>

    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowup" />
    </div>
    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowdown" />
    </div>
    <ul class="indicator">
      <li @click="switchTo(i)" :class="{
        active: index === i
      }" v-for="(item, i) in banners" :key="item.id"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import CarouselItem from './CarouselItem.vue';
import Icon from '@/components/Icon/index.vue';
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import {useBannerStore} from "@/stores/banner"
import { storeToRefs } from 'pinia';

const banner = useBannerStore()

const {data:banners,isLoading} = storeToRefs(banner)
banner.fetchBanner()


const index = ref(0); //当前显示的是第几张轮播图
const containerHeight = ref(0) //整个容器的高度
const switching = ref(false) //是否正在翻页切换中
const marginTop = computed(() => {
  return `-${index.value * containerHeight.value}px`
})
const container = useTemplateRef<HTMLElement>('container')

onMounted(() => {
  if (container.value) {
    containerHeight.value = container.value.clientHeight;
  }
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
type CarouselItemType = InstanceType<typeof CarouselItem>
const carouselItemRef = useTemplateRef<CarouselItemType[]>('carouselItemRef')

//切换轮播图
function switchTo(i: number) {
  index.value = i;
}

function handleWheel(e: WheelEvent) {
  if (switching.value) {
    return
  };
  if (e.deltaY < -5 && index.value > 0) {
    switching.value = true;
    index.value--
    if(carouselItemRef.value){
      carouselItemRef.value[index.value].textDisappears()
    }
  } else if (e.deltaY > 5 && index.value < banners.value.length - 1) {
    switching.value = true;
    index.value++
    if(carouselItemRef.value){
      carouselItemRef.value[index.value].textDisappears()
    }
  }

}


// container重新设置尺寸时
function handleResize() {
  if (container.value) {
    containerHeight.value = container.value.clientHeight;
  }
}


</script>

<style scoped>
.home-container {
  position: relative;
  height: 100%;
  width: 100%;
  --arrow-gap: 20px;
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.carousel-container li {
  width: 100%;
  height: 100%;
}

@keyframes jump-up {
  0% {
    transform: translate(-50%, 10px);
  }

  50% {
    transform: translate(-50%, -10px);
  }

  100% {
    transform: translate(-50%, 10px);
  }
}

@keyframes jump-down {
  0% {
    transform: translate(-50%, -10px);
  }

  50% {
    transform: translate(-50%, 10px);
  }

  100% {
    transform: translate(-50%, -10px);
  }
}

.icon {
  position: absolute;
  font-size: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--neutral-color);
  cursor: pointer;
}

.icon-up {
  top: var(--arrow-gap);
  animation: jump-up 2s infinite;
  z-index: 99999;
}

.icon-down {
  bottom: var(--arrow-gap);
  animation: jump-down 2s infinite;
  z-index: 99999;

}

.indicator {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
}

.indicator li {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--neutral-color);
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #fff;
  transition: all 0.5s;
}

.indicator .active {
  background-color: #fff;
}
</style>
