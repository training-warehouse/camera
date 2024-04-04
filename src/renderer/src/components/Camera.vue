<template>
  <main class="w-screen h-screen overflow-hidden">
    <video class="object-cover h-full"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()
onMounted(() => {
  const constrants = {
    audio: false,
    video: { deviceId: config.deviceId }
  }

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constrants).then((steam) => {
    video.srcObject = steam
    video.play()
  })
})
</script>
