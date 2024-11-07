<template>
  <div class="container mt-5">
    <h3 class="mb-4">Paiement</h3>

    <!-- Резюме заказа -->
    <div v-if="cartItems.length > 0" class="mb-4">
      <h5>Résumé de votre commande</h5>
      <ul class="list-group mb-4">
        <li
          v-for="(item) in cartItems"
          :key="item.id"
          class="list-group-item d-flex align-items-center justify-content-between"
        >
          <!-- Изображение товара -->
          <div class="d-flex align-items-center">
            <img
              :src="item.image"
              alt="Product Image"
              class="img-thumbnail me-3"
              style="width: 100px"
            />
            <!-- Информация о товаре -->
            <div class="flex-grow-1">
              <h6 class="mb-0">{{ item.name }}</h6>
              <p class="mb-0">Quantité : {{ item.quantity }}</p>
              <p class="mb-0">Prix total : {{ item.totalPrice }} €</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-muted">Votre panier est vide</p>
    </div>

    <!-- Информация о PayPal -->
    <div class="alert alert-info">
      <i class="bi bi-paypal"></i> Vous allez payer via PayPal.
    </div>

    <!-- Контейнер для PayPal кнопки -->
    <div id="paypal-button-container"></div>

    <!-- Кнопка для возврата на главную страницу -->
    <router-link to="/" class="btn btn-secondary mt-4">Retour à la page d'accueil</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems"]),
  },
  mounted() {
    // Инициализация PayPal кнопки (не забудьте добавить скрипт PayPal SDK в index.html вашего проекта)
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // Сумма заказа вычисляется на основе заказанных товаров
          const totalAmount = this.cartItems.reduce((total, item) => {
            return total + item.totalPrice;
          }, 0).toFixed(2);

          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount, // Общая сумма заказа
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction réussie par ' + details.payer.name.given_name);
            // Здесь вы можете обработать успешную транзакцию (например, очистить корзину)
          });
        },
        onError: (err) => {
          console.error(err);
          alert('Une erreur est survenue lors du paiement.');
        },
      }).render('#paypal-button-container');
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
