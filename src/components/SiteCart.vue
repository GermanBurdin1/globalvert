<template>
  <div class="site-cart">
    <a href="#" @click="toggleCart" class="cart-link">
      <span class="cart-icon">🛒</span> ({{ cartCount }})
    </a>

    <!-- Модальное окно для корзины -->
    <div v-if="showCart" class="modal-overlay">
      <div class="modal-content">
        <h3>Votre Panier</h3>
        <div v-if="cartItems.length > 0">
          <ul class="cart-item-list">
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
              <!-- Увеличенное изображение товара -->
              <img :src="item.image" alt="Product Image" class="cart-item-image" />
              
              <!-- Информация о товаре -->
              <div class="cart-item-info">
                <h4>{{ item.name }}</h4>
                <p>{{ item.price }} €</p>
              </div>
            </li>
          </ul>
          <!-- Кнопка для перехода на страницу оформления заказа -->
          <router-link to="/cart" class="checkout-link">Passer à la commande</router-link>
        </div>
        <div v-else>
          <p>Votre panier est vide</p>
        </div>
        <button @click="toggleCart" class="close-modal-button">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    ...mapGetters(['cartCount', 'cartItems']),
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
/* Стили для корзины */
.cart-link {
  color: white; /* Белый цвет */
  text-decoration: none; /* Убираем подчеркивание */
  display: flex;
  align-items: center;
  font-size: 20px;
}

.cart-link:hover {
  color: #f0f0f0; /* Лёгкий эффект при наведении */
}

.cart-icon {
  font-size: 24px;
  margin-right: 5px;
}

/* Стили для модального окна корзины */
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
  max-width: 800px;
  width: 100%;
}

/* Стили для элементов в корзине */
.cart-item-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item-image {
  width: 150px; /* Увеличим изображение до 150px */
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px; /* Добавим отступ справа */
}

.cart-item-info {
  text-align: left;
}

.cart-item-info h4 {
  margin: 0 0 10px;
}

.cart-item-info p {
  margin: 0;
}

/* Кнопка закрытия модального окна */
.close-modal-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.close-modal-button:hover {
  background-color: #e64a19;
}

/* Ссылка на оформление заказа */
.checkout-link {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

.checkout-link:hover {
  text-decoration: underline;
}
</style>
