<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produit 1', price: 100, image: require('../assets/images/product1.jpg') },
        { id: 2, name: 'Produit 2', price: 150, image: require('../assets/images/product2.jpg') },
        { id: 3, name: 'Produit 3', price: 200, image: require('../assets/images/product3.jpg') },
      ],
    };
  },
};

</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
