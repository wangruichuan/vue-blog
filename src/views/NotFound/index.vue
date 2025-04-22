<template>
  <div class="not-found-container">
    <h1 class="404">404</h1>
    <span>Not Found</span>
    <button @click="handlePrevPage">返回上页</button>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()


function handlePrevPage() {
  router.go(-1)
}

</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

h1 {

  font-size: 100px;
  color: #000;
  font-weight: 700;

}
button{
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
