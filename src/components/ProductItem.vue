<template>
  <div class="product-item">
    <img :src="product.image" alt="Product Image" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <button>Voir</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>
