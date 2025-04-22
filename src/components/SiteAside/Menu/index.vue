<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      :class="{ active: $route.path.startsWith('/blog') && item.name === 'Blog' }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.text }}</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/index.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const items = ref([
  {
    name: 'Home',
    icon: 'home',
    text: '主页',
    link: '/',
  },
  {
    name: 'Blog',
    icon: 'paper',
    text: '文章',
    link: '/blog',
  },
  {
    name: 'About',
    icon: 'timerauto',
    text: '关于我',
    link: '/about',
  },
  {
    name: 'Project',
    icon: 'code',
    text: '项目&效果',
    link: '/project',
  },
  {
    name: 'Message',
    icon: 'speechbubble',
    text: '留言板',
    link: '/message',
  },
])
</script>

<style scoped>
.menu-container {
  margin: 24px 0;
}
.menu-container a {
  display: flex;
  align-items: center;
  padding: 0 50px;
  height: 45px;
  color: white;
  cursor: pointer;
}
a {
  transition: all 1.5s;
}
a .icon {
  width: 24px;
}
.active {
  background-color: #8385883c;
}

.router-link-active {
  background-color: #8385883c;
}
</style>
