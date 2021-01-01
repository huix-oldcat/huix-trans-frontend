import { useRoute } from 'vue-router'

export function getCurrentProject(): number {
  const route = useRoute()
  if (route === undefined) {
    throw new Error('Cannot get route')
  }
  const idStr = route.params['projectId']
  if (typeof idStr !== 'string') {
    throw new Error('Cannot find projectId in route param')
  }
  return parseInt(idStr)
}
