<template>
  <div class="site-cart">
    <a href="#" @click="toggleCart">
      <span class="cart-icon">🛒</span> ({{ cartCount }})
    </a>

    <!-- Модальное окно корзины -->
    <div v-if="showCart" class="modal-overlay">
      <div class="modal-content">
        <h3>Votre Panier</h3>
        <div v-if="cartItems.length > 0">
          <ul>
            <li v-for="item in cartItems" :key="item.id">
              <img :src="item.image" alt="Product Image" style="width: 50px;" />
              {{ item.name }} - {{ item.price }} €
            </li>
          </ul>
          <button @click="checkout">Passer à la commande</button>
        </div>
        <div v-else>
          <p>Votre panier est vide</p>
        </div>
        <button @click="toggleCart">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCart: false,
    };
  },
  props: {
    cartItems: Array,
  },
  computed: {
    cartCount() {
      return this.cartItems.length;
    },
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    checkout() {
      console.log("Commande passée!", this.cartItems);
      this.showCart = false;
    },
  },
};
</script>

<style scoped>
.cart {
  margin-left: 20px;
}

.cart-icon {
  font-size: 24px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  width: 100%;
}
</style>
