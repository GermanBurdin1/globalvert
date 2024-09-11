<template>
  <div class="product-list-container">
    <div class="product-list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'BBQ Box Good Picnic', description: "La boite à Barbecue innovante, simple, non salissante, prête à l'emploi.", image: require('../assets/images/charbon.webp') },
        { id: 2, name: 'Briquettes', description: "Nous fournissons des briquettes pour les barbecue. Les briquettes permettent un temps de combustion plus long et plus uniforme tous en occupant moins de volume pendant le transport.", image: require('../assets/images/briquettes.webp') },
        { id: 3, name: 'Palettes', description: "Nos palettes à la norme Europalette et sur mesure.", image: require('../assets/images/product3.jpg') },
        { id: 4, name: 'Planches rabotées et profilés en bois', description: "Nous produisons des planches rabotées. Les dimensions peuvent être standard et sur mesure.", image: require('../assets/images/product1.jpg') },
      ],
    };
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


