// 存放所有的接口返回类型
export interface Banner {
  id: number
  title: string
  description: string
  bigImg: string
  midImg: string
}

export interface ArticleCategory {
  id: number
  name: string
}

export interface ArticleTocItem {
  name: string
  anchor: string
  children?: ArticleTocItem[],
  isSelect?: boolean
}



export interface Article {
  id: string
  title: string
  category: ArticleCategory
  description: string
  scanNumber: number
  commentNumber: number
  createDate: string
  toc: ArticleTocItem[]
  thumb: string
  htmlContent: string
}


// 定义单个数据项的类型
export interface Comment {
  id: string;
  nickname: string;
  content: string;
  createDate: string;
  avatar: string;
}

// 定义包含所有数据的对象的类型
export interface CommentData {
  total: number;
  rows: Comment[];
}

// 评论后返回的新评论的信息
export interface NewCommentResp {
  id: string;
  nickname: string;
  content: string;
  createDate: string;
  avatar: string;
}

export interface ResponseData<T> {
  code: number
  data: T
  msg: string
}
