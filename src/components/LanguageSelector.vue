<template>
  <div class="language-selector">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'fr',
    };
  },
  methods: {
    changeLanguage() {
      // Логика для смены языка
      console.log('Selected language:', this.selectedLanguage);
    },
  },
};
</script>

<style scoped>
.language-selector select {
  padding: 5px;
  font-size: 14px;
}
</style>
