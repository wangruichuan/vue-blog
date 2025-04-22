// 防抖三要素
// 1. 函数高频调用
// 2. 这个函数是一个耗时的操作
// 3. 以最后一次调用为准
// 类比为电梯关门：你一个人进来了，等三秒，这三秒内没人进，就关门
// 这三秒内有人进，就把之前的等待取消了，重新开始计时
// 直到没人进来三秒后，电梯关门，这里就把 关门 想象为耗时的操作

/**
 *
 * @param func 待执行的函数
 * @param wait 等待多久时间
 * @returns 新的函数，新的函数就有防抖的功能
 */
export default function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number = 100,
): (...args: Parameters<T>) => void {
  let timerId: number | undefined

  return function (this:T,...args: Parameters<T>){
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      func.apply(this,args)
    }, wait)
  }
}
