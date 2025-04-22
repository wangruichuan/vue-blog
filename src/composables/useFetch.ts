
import { ref } from "vue";
import axios from '@/api/request.ts'
export function useFetch<T>(reqFun: (parm?:{
  [key: string]: unknown;
}) => Promise<{ data: T }>) {
  const isLoading = ref(true);
  const data = ref<T>([] as T);

  // 发送请求获取banner数据
(async () =>{
  const res  = await reqFun();
  data.value = res.data
  isLoading.value = false
})();
  return {
    isLoading,
    data,
  };
}
