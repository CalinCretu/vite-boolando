<script>
import ProductCard from './ProductCard.vue';
import { store } from '../store';
export default {
  components: {
    ProductCard
  },
  name: "AppMain",
  data() {
    return {
      products: store.card
    }
  }
}
</script>

<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="row-main">
          <div v-for="(product, index) in products" :key="index" class="col">
            <ProductCard :prodotto="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>