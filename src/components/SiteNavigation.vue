<template>
  <nav class="site-navigation">
    <ul>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
    </ul>
  </nav>
</template>

<style>
.site-navigation ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.site-navigation a {
  color: white;
  text-decoration: none;
}

.site-navigation a:hover {
  text-decoration: underline;
}
</style>
