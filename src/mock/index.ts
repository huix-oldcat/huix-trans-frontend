import mock from 'mockjs'

export default function startMock() {
  mock.mock('/api/Documents', 'get', [
    {
      id: 1,
      name: 'Test1',
      sentenceCount: 2,
      progress: null,
      detail: null
    },
    {
      id: 2,
      name: 'Test2',
      sentenceCount: 132,
      progress: null,
      detail: null
    }
  ])
}
