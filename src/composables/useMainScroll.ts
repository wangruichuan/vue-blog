import emitter from "@/utils/emitter"
import { onMounted,onBeforeUnmount } from "vue"

export function useMainScroll(dom:HTMLElement) {
// 定义事件类型
function handleScroll() {
  emitter.emit('mainScroll', dom)
}
function handleSetMainScroll(scrollTop:number){
  dom.scrollTop = scrollTop
}
// 注册滚动事件
dom?.addEventListener('scroll', handleScroll)
emitter.on("setMainScroll",handleSetMainScroll)
// 取消注册滚动事件
onBeforeUnmount(() => {
  // 组件卸载之前再触发一次，但这次没传dom，top组件会隐藏
  emitter.emit("mainScroll")
  dom?.removeEventListener('scroll', handleScroll)
  emitter.off("setMainScroll",handleSetMainScroll)
})
}
