<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" :xs="24" :sm="12" :md="8" :lg="6" v-for="i in 20" :key="i">
        <project-tiny-card :projectId="1" :projectName="'Test Project'" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import ProjectTinyCardVue from '@/components/ProjectTinyCard.vue'
export default {
  components: { ProjectTinyCard: ProjectTinyCardVue }
}
</script>
