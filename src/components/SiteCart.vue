<template>
  <div class="site-cart">
    <!-- Ссылка для перехода на страницу корзины -->
    <router-link to="/cart" class="btn btn-primary">
      <span class="cart-icon">🛒</span> ({{ cartCount }})
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"]),
  },
};
</script>

<style scoped>
.cart-icon {
  font-size: 24px;
}
</style>
