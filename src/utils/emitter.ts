import mitt from "mitt";

// 传递给事件处理函数（回调函数）的参数类型
// 比如 我想触发一个名字叫“mainScroll”的事件，这个事件的参数就是一个srting类型

type Events = {
  mainScroll?:HTMLElement;
  setMainScroll:number;
}
const emitter = mitt<Events>();
export default emitter;
