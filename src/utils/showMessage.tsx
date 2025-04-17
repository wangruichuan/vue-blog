import { createApp, defineComponent } from 'vue'
import { styled } from '@styils/vue'
import Icon from '@/components/Icon/index.vue'
type MessageType = 'error' | 'info' | 'success' | 'warn'

const colorMap = {
  error: '#f5222d',
  info: '#1890ff',
  success: '#52c41a',
  warn: '#faad14',
}

export type ShowMessageFunction = (
  options: {
    content: string
    type?: MessageType
    duration?: number
    container?: HTMLElement
  },
  callback?: () => void,
) => void
/**
 * 弹出消息
 * @param content 消息内容
 * @param type 消息类型
 * @param duration 持续时间，默认2000ms
 * @param container 容器，消息会显示到该容器的正中，如果不传，显示到页面正中
 */
const showMessage: ShowMessageFunction = (
  { content, type = 'info', duration = 2000, container },
  callback,
) => {
  const DivModal = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    minWidth: '200px',
    maxWidth: '80%',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: `${colorMap[type]}`,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxHeight: '50%',
    overflow: 'hidden',
    fontSize: '15px',
    display: 'flex',
    color: `white`,
    alignItems: 'center',
    '& p': {
      marginLeft: '10px',
    },
  })
  // 创建消息元素
  const div = document.createElement('div')
  div.id = 'message'
  div.style.opacity = '1'
  div.style.transition = 'opacity 0.3s'
  if (container) {
    // 如果传入了容器
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative' // 修改定位
    }
  } else {
    container = document.body
  }
  container.appendChild(div)

  // 定义MessageBox组件
  const MessageBox = defineComponent({
    components: {
      Icon,
    },
    render() {
      return (
        <DivModal>
          <Icon type={type}></Icon>
          <p>{content}</p>
        </DivModal>
      )
    },
  })
  const app = createApp(MessageBox)
  app.mount(div)

  setTimeout(() => {
    div.style.opacity = '0'
    div.addEventListener('transitionend', () => {
      app.unmount()
      div.remove()
      // 运行回调
      if(callback) {
        callback()
      }
    })
  }, duration)
}

export default showMessage
