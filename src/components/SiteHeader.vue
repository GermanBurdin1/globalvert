<template>
  <header class="site-header">
    <LanguageSelector />
    <SiteNavigation />
    <div class="auth-controls">
      <UserRegistration />
      <SiteCart />
    </div>
  </header>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';
import SiteNavigation from './SiteNavigation.vue';
import UserRegistration from './UserRegistration.vue';
import SiteCart from './SiteCart.vue';

export default {
  components: {
    LanguageSelector,
    SiteNavigation,
    UserRegistration,
    SiteCart,
  },
};
</script>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo {
  height: 50px;
}

.auth-controls {
  display: flex;
  align-items: center;
}
</style>
