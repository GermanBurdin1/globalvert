import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import CartPage from '@/views/CartPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue'; 

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  {
    path: '/products/:id',
    name: 'ProductDetail', 
    component: ProductDetailPage,
  },
  { path: '/about', component: AboutPage },
  { path: '/news', component: NewsPage },
  { path: '/contact', component: ContactPage },
  { path: '/cart', component: CartPage },
	{ path: '/checkout', component: CheckoutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
