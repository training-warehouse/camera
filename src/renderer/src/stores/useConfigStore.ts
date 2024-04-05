import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '6px',
      borderColor: '#f39c12',
      rounded: false
    })
    return { config }
  },
  {
    persist: true
  }
)
