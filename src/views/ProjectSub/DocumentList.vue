<template>
  <el-row :gutter="20">
    <!-- <el-col :span="4" :xs="24" :sm="12" :md="8" :lg="6" v-for="i in documents" :key="i.id">
      <document-tiny-card :projectId="projectId" :documentId="i.id" :documentName="i.name" />
    </el-col> -->
  </el-row>
</template>

<script lang="ts">
// import { inject, ref } from 'vue'
// import { DocumentInfo, getDocumentList } from '@/apis/project'
// import DocumentTinyCard from '../../components/DocumentTinyCard.vue'

export default {
  components: {
    // DocumentTinyCard
  },
  async setup() {
    // const documents = ref([] as DocumentInfo[])
    // documents.value = await getDocumentList()
    // const projectId = inject('projectId')
    return { documents: [], projectId: 1 }
  }
}
</script>
