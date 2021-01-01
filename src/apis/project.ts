import axios from 'axios'

export interface DocumentInfo {
  id: number
  name: string
  sentenceCount: number
}

export async function getDocumentList(): Promise<DocumentInfo[]> {
  return await (await axios.get('/api/Documents')).data
}
