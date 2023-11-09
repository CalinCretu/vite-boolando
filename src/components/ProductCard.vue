<script>
import { store } from '../store'
export default {
  props: {
    prodotto: Object
  },
  data() {
    return {
      products: store.card
    }
  }
}
</script>

<template>
  <div class="card">
    <figure class="card__image">
      <img class="image-main" :src="`/imgs/${prodotto.frontImage}`" alt="">
      <img class="image-hover" :src="`/imgs/${prodotto.backImage}`" alt="">
      <span class="hearts" :style="{ color: prodotto.isInFavorites ? 'red' : 'black' }"><a href="#"><font-awesome-icon
            icon="fa-regular fa-heart" /></a></span>
      <div class="flags">
        <template v-if="prodotto.badges && prodotto.badges.some((badge) => badge.type === 'discount')">
          <span class="flag-red">{{ prodotto.badges.find(badge => badge.type === 'discount').value }}</span>
        </template>
        <template v-if="prodotto.badges && prodotto.badges.some((badge) => badge.type === 'tag')">
          <span class="flag-green">{{ prodotto.badges.find(badge => badge.type === 'tag').value }}</span>
        </template>
      </div>
    </figure>
    <figcaption class="brand-name">{{ prodotto.brand }}</figcaption>
    <figcaption class="product">{{ prodotto.name }}</figcaption>
    <figcaption class="price">{{ prodotto.price }}</figcaption>
  </div>
</template>

<style lang="scss">
.section {
  margin-top: 120px;
  margin-bottom: 80px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .row-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
  }

  .col {
    max-width: calc((100% / 12) * 4);
    padding: 0 5px;

    .brand-name {
      font-style: italic;
      font-size: 15px;
    }

    .product {
      font-weight: bold;
      text-transform: uppercase;
    }

    .price {
      font-weight: bold;
    }
  }

  .card__image {
    .image-hover {
      display: none;
    }

    &:hover {
      .image-main {
        display: none;
      }

      .image-hover {
        display: block;
      }
    }

    position: relative;

    .flags {
      position: absolute;
      bottom: 10%;

      .flag-red {
        background-color: red;
        color: white;
        padding: 5px 10px;
        margin-right: 5px;
      }

      .flag-green {
        background-color: green;
        color: white;
        padding: 5px 10px;
      }
    }

    .hearts {
      text-align: center;
      font-size: 50px;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}
</style>