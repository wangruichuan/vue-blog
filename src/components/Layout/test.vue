<template>
  <div class="test-container">
    <Test>
      <template #left>
        <div class="left">
        </div>
      </template>
      <div class="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum laboriosam fuga placeat quaerat, ullam eos dolorum impedit assumenda incidunt ex autem aliquam ipsa dolorem, ad dolor molestiae culpa officia?
        Dolores quam iste officia, quia incidunt cumque voluptas id, voluptatem nesciunt exercitationem distinctio velit itaque illo eum dolorem tempore quasi aspernatur non dicta eaque consequatur qui. Quaerat sit repellendus vel.
        Error iusto, ad cum, id fuga quod ex reiciendis deleniti voluptatum, non ab quibusdam. Molestias laboriosam, voluptas exercitationem quo assumenda, sunt impedit at temporibus ipsum nulla a, provident vel pariatur.
        Officia temporibus ipsa mollitia beatae quisquam aliquid repellendus eveniet eum hic nulla aspernatur, ad iusto quis natus eligendi, ipsum maiores provident molestiae? Assumenda sint excepturi libero laboriosam perspiciatis dolore sapiente!
      </div>
      <template #right>
        <div class="right"></div>
      </template>
    </Test>
  </div>
</template>

<script setup lang="ts">
import Test from './index.vue'
import { ref } from 'vue'

</script>


<style scoped>
.test-container{
  width: 80vw;
  height: 600px;
  border: 2px solid;
  margin: 20px auto;
}
.left{
  width: 200px;
  height: 100%;
  background-color: lightcoral;
}
.main{
  width: 100%;
  height: 100%;
  background-color: lightgreen;

}
.right{
  width: 150px;
  height: 100%;
  background-color: lightblue;
}
</style>
