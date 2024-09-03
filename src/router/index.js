import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: ProductDetailPage },
  { path: '/about', component: AboutPage },
  { path: '/news', component: NewsPage },
  { path: '/contact', component: ContactPage },
  { path: '/cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
