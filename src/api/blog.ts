import request from './request'
import type { CommentInfo } from '@/types/request'
import type { NewCommentResp } from '@/types/response'
// 获取博客列表
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return request.get('/api/blog/list', {
    params: {
      page,
      limit,
      categoryId,
    },
  })
}
// 获取博客类型列表
export async function getBlogTypes() {
  return request.get('/api/blog/types')
}

// 获取单个博客详情
export async function getBlog(id: string) {
  return request.get(`/api/blog/${id}`)
}

// 提交评论
export async function postComment(commentInfo: CommentInfo) {
  return request.post<NewCommentResp>('/api/blog/comment', {
    params: commentInfo,
  })
}

export async function getComments(blogId: string, page = 1, limit = 10) {
  return request.get('/api/blog/comment', {
    params: {
      blogId,
      page,
      limit,
    },
  })
}
