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
      store: store,
      open: false,
      selectedCard: {},
    }
  },
  methods: {
    showModal(prodotto) {
      console.log('show modal');
      this.selectedCard = prodotto;
      this.open = true;
    },
    closeModal() {
      this.open = false;
      this.selectedCard = {};
    }
  }
}
</script>

<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="row-main">
          <div v-for="(product, index) in store.card" :key="index" class="col">
            <ProductCard @showCard="showModal" :prodotto="product" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="open" class="modal">
      <div class="card">
        <div class="card__header">
          <div class="modal-col">Product Name: {{ selectedCard.name }}</div>
          <a href="#"><font-awesome-icon @click="closeModal" icon="fa-solid fa-circle-xmark" /></a>
        </div>
        <div class="card__body">
          <div>
            <div class="image-col">
              <img class="image" :src="`/imgs/${selectedCard.frontImage}`" alt="">
            </div>
          </div>
          <div class="specs-col">
            <div>
              Product Brand: {{ selectedCard.brand }}
            </div>
            <div>
              Product Price: {{ selectedCard.price }} &euro;
            </div>
            <div>
              <template v-if="selectedCard.badges && selectedCard.badges.some((badge) => badge.type === 'tag')">
                <span class="flag-green">{{ 'Nature Lover' }}</span>
              </template>
            </div>
            <div>
              <template v-if="selectedCard.badges && selectedCard.badges.some((badge) => badge.type === 'discount')">
                <span class="flag-green">{{ 'Special Offer' }}: {{ selectedCard.badges.find(badge => badge.type ===
                  'discount').value }}</span>
                <div>Other Photos:</div>
              </template>
            </div>
            <div class="other-foto">

              <img class="other-image" :src="`/imgs/${selectedCard.backImage}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.modal::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal .card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
  }

  .card__body {
    margin: 20px;
    display: flex;

    .image-col {
      margin-right: 10px;

      .image {
        border-radius: 20px;
        width: 400px;
      }
    }

    .other-foto {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 400px;

      .other-image {
        width: 200px;
      }
    }



    .specs-col {
      margin-left: 20px;
      line-height: 1.5rem;
    }

    .specs-col::before {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      width: 1px;
      height: 120px;
      position: fixed;
      right: 43%;
      top: 11%;
    }

    .specs-col::after {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      width: 750px;
      height: 1px;
      position: fixed;
      right: 3%;
      top: 8%;
    }
  }
}
</style>