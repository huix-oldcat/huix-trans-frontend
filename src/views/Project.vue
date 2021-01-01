<template>
  <el-row style="margin-left: auto; margin-right: auto; max-width: 1200px; width: 100%" :gutter="10">
    <el-col :span="4">
      <div>
        <el-menu default-active="1" class="el-menu-vertical-demo" style="height: 85vh" :router="true">
          <el-menu-item index="1" :route="`/p/${projectId}`">
            <i class="el-icon-setting"></i>
            <template #title>简介</template>
          </el-menu-item>
          <el-menu-item index="2" :route="`/p/${projectId}/d`">
            <i class="el-icon-setting"></i>
            <template #title>文档</template>
          </el-menu-item>
          <el-menu-item index="3" :route="`/p/${projectId}/upload-document`">
            <i class="el-icon-setting"></i>
            <template #title>上传</template>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20"><router-view /></el-col>
  </el-row>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getCurrentProject } from '../apis/helpers'
export default {
  setup() {
    let projectId = ref(getCurrentProject())
    return { projectId }
  }
}
</script>
