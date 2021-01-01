<template>
  <router-link :to="to">
    <el-card class="box-card" shadow="hover">{{ dname }}</el-card>
  </router-link>
</template>

<script lang="ts">
interface DocumentTinyCardProps {
  projectId: number
  documentId: number
  documentName: string
}

export default {
  props: {
    projectId: {
      type: Number,
      required: true
    },
    documentId: {
      type: Number,
      required: true
    },
    documentName: {
      type: String,
      required: true
    }
  },
  setup(prop: DocumentTinyCardProps) {
    return { pid: prop.projectId, did: prop.documentId, dname: prop.documentName, to: `/p/${prop.projectId}/d/${prop.documentId}` }
  }
}
</script>
