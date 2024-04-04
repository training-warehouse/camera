import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: ''
    })
    return { config }
  },
  {
    persist: true
  }
)
