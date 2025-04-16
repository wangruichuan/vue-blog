<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
          <RouterView></RouterView>
      </template>
      <template #right>

      </template>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout/index.vue'
import SiteAside from '@/components/SiteAside/index.vue'


</script>

<style scoped>
.app-container{
  width: 100%;
  height: 100%;
}
.aside{
  width: 250px;

}
</style>
