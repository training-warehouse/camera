<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 py-10">
    <h2 class="text-gray-50 text-center text-sm mb-5 opacity-70">参数设置</h2>
    <div class="flex flex-col gap-5">
      <el-select v-model="config.deviceId" palceholder="请选择摄像头" fit-input-width>
        <el-option
          v-for="item in cameras"
          :key="item.deviceId"
          :label="item.label"
          :value="item.deviceId"
        ></el-option>
      </el-select>

      <el-input v-model="config.borderWidth" placeholder="边框宽度"></el-input>
      <el-input v-model="config.borderColor" placeholder="边框颜色"></el-input>
      <a
        href="https://github.com/liaokongVFX"
        target="_blank"
        class="text-center opacity-70 text-xs text-teal-100 hover:text-yellow-400"
      >
        我的GitHub
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((item) => item.kind.includes('video'))

const { config } = useConfigStore()
</script>

<style lang="scss" scoped></style>
