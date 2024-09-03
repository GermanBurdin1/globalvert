<template>
  <div>
    <h1>Votre Panier</h1>
    <p>Voici les articles dans votre panier:</p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }} €
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
    }),
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
