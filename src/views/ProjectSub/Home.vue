<template>
  <div>Current project ID = {{ projectId }}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getCurrentProject } from '../../apis/helpers'
export default {
  setup() {
    let projectId = ref(getCurrentProject())
    return { projectId }
  }
}
</script>
