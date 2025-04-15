<template>
  <i class="iconfont" v-html="iconUnicode"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  type: string
}

const { type } = defineProps<Props>()
const typeMap :{[key: string]: string} = {
  "home": "&#xe611;", // 主页、首页
  "arrowup": "&#xe606;", // 向上、到顶部
  "arrowdown": "&#xe608;", // 向下、到底部
  "menu2": "&#xe609;", // 目录、导航
  "paper": "&#xe60a;", // 文档、文章
  "editor": "&#xe60b;", // 编辑
  "label_fill": "&#xe60c;", // 标签
  "link": "&#xe60d;", // 链接
  "sort": "&#xe60e;", // 目录、列表、更多
  "share": "&#xe60f;", // 分享
  "schedule": "&#xe610;", // 时间
  "chakan": "&#xe612;", // 查看
  "print": "&#xe613;", // 打印机
  "menu": "&#xe614;", // 导航、更多
  "qr_code": "&#xe615;", // 二维码
  "stack": "&#xe616;", // 返回顶部、置顶
  "timerauto": "&#xe617;", // 个人中心、人形
  "off_search": "&#xe618;", // 关闭、close
  "speechbubble": "&#xe619;", // 评论、聊天
  "calendar2": "&#xe61a;", // 日历、日期
  "arrowleft": "&#xe61b;", // 上一页、后退
  "arrowright": "&#xe61c;", // 下一页、前进
  "localoffer": "&#xe61d;", // 书签、标签
  "nav_search": "&#xe61e;", // 搜索
  "repeat": "&#xe61f;", // 随机排序
  "folder": "&#xe620;", // 文件夹、目录
  "menu21": "&#xe622;" // 导航、更多
};
const iconUnicode = computed(() => typeMap[type])


</script>

<style scoped>
@font-face {
  font-family: 'iconfont';
  /* Project id 4892934 */
  src: url('//at.alicdn.com/t/c/font_4892934_s8epswn812f.woff2?t=1744648686552') format('woff2'),
    url('//at.alicdn.com/t/c/font_4892934_s8epswn812f.woff?t=1744648686552') format('woff'),
    url('//at.alicdn.com/t/c/font_4892934_s8epswn812f.ttf?t=1744648686552') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>

