# 组件说明文档

## UserAvatar

头像组件

### 描述

`UserAvatar` 组件用于显示用户的头像。

### 属性

| 属性名 | 类型   | 默认值 | 描述           |
| ------ | ------ | ------ | -------------- |
| size   | number | 30     | 头像的大小     |
| url    | string | 无     | 头像的图片地址 |

## IconItem

图标组件

### 属性

| 属性名 | 类型   | 默认值 | 描述     |
| ------ | ------ | ------ | -------- |
| type   | string |        | 图标类型 |

### 图标对应类型

| 英文         | 中文             |
| ------------ | ---------------- |
| home         | 主页、首页       |
| arrowup      | 向上、到顶部     |
| arrowdown    | 向下、到底部     |
| menu2        | 目录、导航       |
| paper        | 文档、文章       |
| editor       | 编辑             |
| label_fill   | 标签             |
| link         | 链接             |
| sort         | 目录、列表、更多 |
| share        | 分享             |
| schedule     | 时间             |
| chakan       | 查看             |
| print        | 打印机           |
| menu         | 导航、更多       |
| qr_code      | 二维码           |
| stack        | 返回顶部、置顶   |
| timerauto    | 个人中心、人形   |
| off_search   | 关闭、close      |
| speechbubble | 评论、聊天       |
| calendar2    | 日历、日期       |
| arrowleft    | 上一页、后退     |
| arrowright   | 下一页、前进     |
| localoffer   | 书签、标签       |
| nav_search   | 搜索             |
| repeat       | 随机排序         |
| folder       | 文件夹、目录     |
| menu21       | 导航、更多       |

## BlogPager

分页组件

### 属性

| 属性名        | 类型   | 默认值 | 说明               |
| ------------- | ------ | ------ | ------------------ |
| current       | number | 1      | 当前页码           |
| total         | number | 0      | 总数据条数         |
| limit         | number | 10     | 每页显示的数据条数 |
| visibleNumber | number | 10     | 可见的页码数量     |

### 事件

| 事件名     | 回调参数        | 说明                                       |
| ---------- | --------------- | ------------------------------------------ |
| pageChange | newPage: number | 当用户点击页码切换页面时触发，返回新的页码 |

### 注意事项
- 当点击页码时，如果新页码小于 1，则会将新页码设置为 1；如果新页码大于总页数，则会将新页码设置为总页数。
- 如果新页码与当前页码相同，则不会触发 `pageChange` 事件。
