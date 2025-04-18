
import { ref } from "vue";
import axios from '@/api/request.ts'
export function useFetch<T>(url: string) {
  const isLoading = ref(true);
  const data = ref<T>([] as T);

  // 发送请求获取banner数据
(async () =>{
  const res  = await axios.get<T>(url);
  data.value = res.data
  isLoading.value = false
})();
  return {
    isLoading,
    data,
  };
}
