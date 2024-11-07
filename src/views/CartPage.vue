<template>
  <div class="site-cart container mt-4">
    <h3 class="mb-4">Votre Panier</h3>
    <div v-if="cartItems.length > 0">
      <ul class="list-group mb-4">
        <li
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="list-group-item d-flex align-items-center justify-content-between"
        >
          <!-- Изображение товара -->
          <div class="d-flex align-items-center">
            <img
              :src="item.image"
              alt="Product Image"
              class="img-thumbnail me-3"
              style="width: 150px"
            />
            <!-- Информация о товаре -->
            <div class="flex-grow-1">
              <h4 class="h6">{{ item.name }}</h4>
              <!-- Поле для изменения количества -->
              <div class="input-group mb-3" style="max-width: 150px">
                <label class="input-group-text" for="quantity"
                  >Quantité :</label
                >
                <input
                  type="number"
                  v-model.number="item.quantity"
                  @change="updatePrice(index)"
                  min="1"
                  class="form-control"
                />
              </div>
              <!-- Пересчитанная цена -->
              <p class="mb-0">Prix total: {{ item.totalPrice }} €</p>
            </div>
          </div>
          <!-- Кнопка удаления -->
          <button
            class="btn btn-danger btn-sm"
            @click="removeItem(index)"
          >
            Supprimer
          </button>
        </li>
      </ul>
      <!-- Кнопка для перехода к оплате -->
      <router-link to="/checkout" class="btn btn-success">
        Passer à la commande
      </router-link>
    </div>
    <div v-else>
      <p class="text-muted">Votre panier est vide</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount", "cartItems"]),
  },
  methods: {
    updatePrice(index) {
      // Обновляем цену товара в зависимости от количества
      const item = this.cartItems[index];
      item.totalPrice = item.quantity * item.price;
    },
    removeItem(index) {
      // Удаляем товар из корзины
      this.cartItems.splice(index, 1);
    },
  },
  mounted() {
    // Инициализация totalPrice для каждого товара при монтировании
    this.cartItems.forEach((item) => {
      if (!item.totalPrice) {
        item.totalPrice = item.quantity * item.price;
      }
    });
  },
};
</script>

<style scoped>
.cart-icon {
  font-size: 24px;
}
</style>
