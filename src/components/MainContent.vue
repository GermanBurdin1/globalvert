<template>
  <main class="main-content">
    <Banner />
    <ProductList />
  </main>
</template>

<script>
import Banner from './Banner.vue';
import ProductList from './ProductList.vue';

export default {
  components: {
    Banner,
    ProductList,
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}
</style>
