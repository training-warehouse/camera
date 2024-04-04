<script setup lang="ts">
import { Setting as SettingIcon, CameraFive } from '@icon-park/vue-next'
import { useConfigStore } from './stores/useConfigStore'

import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'

const { config } = useConfigStore()
</script>

<template>
  <Suspense>
    <main class="relative">
      <section>
        <SettingIcon
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 no-drag"
          v-if="config.page === 'camera'"
          @click="config.page = 'setting'"
        />
        <camera-five
          theme="outline"
          size="24"
          v-else
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 no-drag"
          @click="config.page = 'camera'"
        ></camera-five>
      </section>
      <section>
        <Camera v-if="config.page === 'camera'" />
        <Setting v-else></Setting>
      </section>
    </main>
  </Suspense>
</template>
