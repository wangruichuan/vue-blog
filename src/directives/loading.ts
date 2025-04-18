import type { DirectiveBinding } from "vue";
import loadingUrl from "@/assets/svg/loading.svg";
import classes from './loading.module.css'
export default function (el: HTMLElement, binding: DirectiveBinding) {

  const curImg = getLoadingImage(el)
  // 根据binding.value的值来判断是否显示loading
  if (binding.value) {
    if (!curImg) {
      el.appendChild(createLoadingImg())
    }
  }else{
    // 如果已经创建，就移除
    if (curImg) {
      el.removeChild(curImg)
    }

  }
}


function getLoadingImage(el: HTMLElement) {
  // 判断元素是否存在img元素
  return el.querySelector("img[data-role='loading']")
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role ="loading"
  img.src= loadingUrl
  img.className = classes.loading
  return img
}
