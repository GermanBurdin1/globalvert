<template>
  <div id="app">
    <SiteHeader />
    <main>
      <router-view></router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
