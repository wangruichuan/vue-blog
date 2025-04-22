import request from './request'
export async function getMessages(page = 1, limit = 10) {
  return request.get('/api/message', {
    params: {
      page,
      limit,
    },
  })
}

export async function postMessages(msgInfo:{ nickname: string; content: string }) {
  return request.post('/api/message', msgInfo)
}
