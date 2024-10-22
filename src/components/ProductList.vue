<template>
  <div class="product-list-container">
    <div class="product-list">
      <!-- Выводим список продуктов -->
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"  
      />
    </div>

    <!-- Модальное окно для корзины -->
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
          <router-link to="/cart">Passer à la commande</router-link> <!-- Ссылка на CartPage.vue -->
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
import ProductItem from './ProductItem.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'BBQ Box Good Picnic', description: "La boite à Barbecue innovante, simple, non salissante, prête à l'emploi.", image: require('../assets/images/charbon.webp'), price: 25 },
        { id: 2, name: 'Briquettes', description: "Nous fournissons des briquettes pour les barbecue. Les briquettes permettent un temps de combustion plus long et plus uniforme tous en occupant moins de volume pendant le transport.", image: require('../assets/images/briquettes.webp'), price: 10 },
        { id: 3, name: 'Palettes', description: "Nos palettes à la norme Europalette et sur mesure.", image: require('../assets/images/product3.jpg'), price: 15 },
        { id: 4, name: 'Planches rabotées et profilés en bois', description: "Nous produisons des planches rabotées. Les dimensions peuvent être standard et sur mesure.", image: require('../assets/images/product1.jpg'), price: 20 },
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

<style>
/* Центрирование контейнера для карточек */
.product-list-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

/* Контейнер для карточек */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Стиль для карточек */
.product-item {
  display: flex;
  max-width: 800px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Изображение продукта */
.product-item > img {
  width: 60%; /* Изображение занимает 60% ширины карточки */
  height: auto;
  max-height: 300px; /* Ограничиваем высоту для прямоугольной формы */
  object-fit: cover; /* Обеспечиваем равномерное заполнение */
  margin-right: 20px;
  border-radius: 5px;
  display: block;
}

/* Текстовое описание */
.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; /* Растягиваем элементы по всей ширине */
  text-align: left; /* Выравниваем текст по левому краю */
}

.product-info h3 {
  margin: 0;
  font-size: 20px;
}

.product-info p {
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.4;
  flex-grow: 1; /* Позволяет абзацу занимать больше места */
}

/* Кнопка действия */
.product-info button {
  width: 100%; /* Кнопка занимает всю ширину текстовой области */
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.product-info button:hover {
  background-color: #e64a19;
}
</style>


