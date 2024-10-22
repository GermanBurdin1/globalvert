<template>
  <div>
    <div class="product-item">
      <img :src="product.image" alt="Product Image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <button @click="showModal = true">Voir</button>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>{{ product.name }}</h3>
        
        <!-- Карусель -->
        <div class="carousel">
          <img :src="product.image" alt="Product Image" class="product-image-modal" />
          <!-- Можно добавить дополнительные изображения, если требуется -->
        </div>
        
        <p>Prix: {{ product.price }} €</p>
        
        <!-- Кнопка для добавления в корзину -->
        <button @click="addToCart(product)">Ajouter dans le panier</button>
        
        <!-- Кнопка закрытия модального окна -->
        <button @click="showModal = false">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      showModal: false, // состояние модального окна
    };
  },
  methods: {
    addToCart(product) {
      console.log('Добавлен в корзину:', product);
      this.showModal = false; // Закрыть модальное окно
    },
  },
};
</script>

<style scoped>
/* Стили карточки продукта */
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

/* Стили изображения продукта на странице */
.product-item > img {
  width: 60%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
  display: block;
}

/* Модальное окно */
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

/* Стили изображения в модальном окне */
.product-image-modal {
  width: 60%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 5px;
}

/* Стили кнопок */
button {
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #e64a19;
}
</style>
