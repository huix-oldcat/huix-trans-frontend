<template>
  <el-row :gutter="20">
    <el-col :span="4" :xs="24" :sm="12" :md="8" :lg="6" v-for="i in documents" :key="i.id">
      <document-tiny-card :projectId="projectId" :documentId="i.id" :documentName="i.name" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { getCurrentInstance, inject, onBeforeMount, onMounted, ref } from 'vue'
import { DocumentInfo, getDocumentList } from '@/apis/project'
import DocumentTinyCard from '../../components/DocumentTinyCard.vue'
import { getCurrentProject } from '@/apis/helpers'

export default {
  components: {
    DocumentTinyCard
  },
  async setup() {
    const documents = ref([] as DocumentInfo[])
    const projectId = ref(0)
    onBeforeMount(() => {
      projectId.value = getCurrentProject()
    })
    documents.value = await getDocumentList()
    return { documents, projectId }
  }
}
</script>
