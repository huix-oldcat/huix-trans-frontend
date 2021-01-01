<template>
  <router-link :to="to">
    <el-card class="box-card" shadow="hover">{{ name }}</el-card>
  </router-link>
</template>

<script lang="ts">
interface ProjectTinyCardProps {
  projectId: number
  projectName: string
}

export default {
  props: {
    projectId: {
      type: Number,
      required: true
    },
    projectName: {
      type: String,
      required: true
    }
  },
  setup(prop: ProjectTinyCardProps) {
    return { id: prop.projectId, name: prop.projectName, to: `/p/${prop.projectId}` }
  }
}
</script>
