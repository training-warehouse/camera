<script setup lang="ts">
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import { useConfigStore } from './stores/useConfigStore'

import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import useDrag from './composables/useDrag.ts'

const { drag } = useDrag()

drag.run()
const { config } = useConfigStore()
const quit = () => {
  window.api.quit()
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <SettingIcon
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page === 'camera'"
          @click="config.page = 'setting'"
        />
        <InnerShadowTopLeft
          theme="outline"
          size="24"
          v-if="config.page === 'camera'"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.rounded = !config.rounded"
        ></InnerShadowTopLeft>
        <camera-five
          theme="outline"
          size="24"
          v-else
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
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
