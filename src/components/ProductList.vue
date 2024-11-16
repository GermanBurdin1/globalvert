<template>
  <div class="product-list-container">
    <div class="product-list row row-cols-1 row-cols-md-2 g-4">
      <!-- Выводим список продуктов -->
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>

    <!-- Модальное окно для корзины -->
    <div v-if="showCart" class="modal fade show d-block" style="background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Votre Panier</h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="toggleCart"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="cartItems.length > 0">
              <ul class="list-group">
                <li v-for="item in cartItems" :key="item.id" class="list-group-item d-flex align-items-center">
                  <img :src="item.image" alt="Product Image" class="img-thumbnail me-3" style="width: 50px;" />
                  <div>
                    <h6 class="mb-0">{{ item.name }}</h6>
                    <small>{{ item.price }} €</small>
                  </div>
                </li>
              </ul>
              <router-link to="/cart" class="btn btn-primary mt-3">Passer à la commande</router-link>
            </div>
            <div v-else>
              <p class="text-muted">Votre panier est vide</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="toggleCart">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'BBQ Box Good Picnic', description: "La boite à Barbecue innovante, simple, non salissante, prête à l'emploi.", image: require('../assets/images/boxhome.jpg'), price: 25 },
        { id: 2, name: 'Briquettes', description: "Nous fournissons des briquettes pour les barbecue. Les briquettes permettent un temps de combustion plus long et plus uniforme tous en occupant moins de volume pendant le transport.", image: require('../assets/images/boxhome.jpg'), price: 10 },
        { id: 3, name: 'Palettes', description: "Nos palettes à la norme Europalette et sur mesure.", image: require('../assets/images/BBQ-Box-Profil-red.jpg'), price: 15 },
        { id: 4, name: 'Planches rabotées et profilés en bois', description: "Nous produisons des planches rabotées. Les dimensions peuvent être standard et sur mesure.", image: require('../assets/images/BBQ-Box-Profil.jpg'), price: 20 },
      ],
      cartItems: [], // Список товаров в корзине
      showCart: false, // Состояние для модального окна корзины
    };
  },
  methods: {
    ...mapMutations(['addToCart']),
  },
};
</script>

<style scoped>
/* Центрирование контейнера для карточек */
.product-list-container {
  padding: 20px;
}

/* Применение стилей Bootstrap для карточек */
.product-item {
  display: flex;
  border: 1px solid #ddd;
  padding: 20px;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.product-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
}

.product-info {
  text-align: left;
}

.product-info h3 {
  font-size: 20px;
}

.product-info p {
  font-size: 16px;
}

.product-info button {
  width: 100%;
  padding: 10px;
}
</style>
