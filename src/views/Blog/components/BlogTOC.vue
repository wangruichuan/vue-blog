<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList
      :list="tocWithSelect"
    ></RightList>
  </div>
</template>

<script setup lang="ts">
import RightList from './RightList.vue'
import type { ArticleTocItem } from '@/types/response'
import { computed, ref } from 'vue'
import emitter from '@/utils/emitter'
import debounce from '@/utils/debounce'
interface Props {
  toc: ArticleTocItem[]
}

const { toc } = defineProps<Props>()
const activeAnchar = ref('')

const tocWithSelect = computed(() => {
  function getToc(toc: ArticleTocItem[] = []) {
    const newToc: ArticleTocItem[] = toc.map((item) => {
      return {
        ...item,
        isSelect: activeAnchar.value === item.anchor,
        children: getToc(item.children),
      }
    })
    return newToc
  }
  return getToc(toc)
})

const doms = computed(() => {
  const doms: Array<{
    dom: HTMLElement
    id: string
  }> = []

  function addToDom(toc:ArticleTocItem[]){
    for (const t of toc) {
      // 通过id去拿到对应的dom
      const dom = document.getElementById(t.anchor)
      if (dom) {
        doms.push({
          dom,
          id: t.anchor,
        })
      }
      if (t.children) {
        addToDom(t.children)
      }
    }
  }

  addToDom(toc)

  return doms
})
// 设置activeAnchar为正确的值
// 通过判断 当前视口中是哪个标题的内容 去给activeAnchar赋值
function setSelect(dom:HTMLElement) {
  if(!dom){
    return
  }
  const range = 200
  // 清空之前的激活状态
  activeAnchar.value = ''
  for (const dom of doms.value) {
    if(!dom.dom) {
      continue
    }
    // 如果这个dom在距离顶边(视口)高度200px以内，我们就说这个是被选中的
    const rect = dom.dom.getBoundingClientRect()
    if (rect.top >= 0 && rect.top <= range) {
      activeAnchar.value = dom.id
      return
    }else if (rect.top > range){
      // 在range范围下面，肯定不是激活状态
       return
    }else{
      // 在range范围上面
      activeAnchar.value = dom.id //假设自己是激活的，如果后面还有激活状态，就会被覆盖
    }

  }
}
// 监听滚动事件,但是滚动条不在这个组件，在Detail组件中
// 所以我们需要在BlogDetail组件中监听滚动事件
const setSelectDebounce =  debounce(setSelect, 50)
emitter.on('mainScroll', (dom) => {
  if(!dom){
    return
  }
  setSelectDebounce(dom)
})

</script>

<style scoped>
.blog-toc-container {
  width: 100%;
  padding: 20px;

  position: relative;
  overflow-y: auto;
}

h2 {
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
</style>
