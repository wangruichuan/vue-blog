import emitter from '@/utils/emitter'
import debounce from '@/utils/debounce'
import type {DirectiveBinding} from 'vue'
import defaultGif from '@/assets/default.gif'

type Img = {
  dom:HTMLImageElement,
  src:string
}

let imgs:Img[]  = []

function setImage(img:Img){
  img.dom.src=defaultGif
  // 处理图片
  // 该图片是否在视口范围内:
  //  bottom值小于0 -> 不在视口范围内
  //  top值大于视口高度 -> 不在视口范围内
  const rect = img.dom.getBoundingClientRect()
  const clientHeight = document.documentElement.clientHeight //视口高度
  if(!(rect.bottom < 0 || rect.top > clientHeight)){
    // 在视口范围内
    const tempImg = new Image()
    tempImg.onload = () => {
      img.dom.style.transition = 'opacity .5s'
      img.dom.style.opacity = '0'

      void img.dom.clientHeight

      setTimeout(() => {
        img.dom.style.opacity = '1'
        img.dom.src = img.src
      }, 300)
    }
    tempImg.src = img.src
    // 处理完后从数组中删除该图片
    imgs=imgs.filter((item) => item !== img)
  }
}

const setImagesDebounce = debounce(()=>{
  for(const img of imgs){
    setImage(img)
  }
}, 500)


const handleMainScroll = (dom?: HTMLElement) => {
  setImagesDebounce()
}


emitter.on('mainScroll', handleMainScroll)
export default {
  mounted: (el:HTMLImageElement,binding:DirectiveBinding) => {
    const img = {
      dom:el,
      src:binding.value,
      handle:false
    }
    imgs.push(img)
    setImage(img)
  },
  unmounted: (el:HTMLImageElement) => {
    imgs = imgs.filter((item) => item.dom !== el)
  }
}
