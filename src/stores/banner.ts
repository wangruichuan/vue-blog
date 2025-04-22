import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getBanners } from '@/api/banner'
import type { Banner } from '@/types/response'
export const useBannerStore = defineStore('banner', () => {
  const isLoading = ref(false)
  const data = ref<Banner[]>([])

  function setLoading(val: boolean) {
    isLoading.value = val
  }

  function setData(val: Banner[]) {
    data.value = val
  }

  async function fetchBanner() {
    if (data.value.length) return
    setLoading(true)
    const res = await getBanners()
    setData(res.data)
    setLoading(false)
  }

  return { isLoading, data, setLoading,fetchBanner }
})
