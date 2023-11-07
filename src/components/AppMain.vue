<script>
export default {
  name: "AppMain",
  props: {

  }
}
</script>

<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="row-main">
          <div v-for="n in 6" :key="n" class="col">
            <div class="card">
              <figure class="card__image">
                <img class="image-main" src="/1.webp" alt="">
                <img class="image-hover" src="/1b.webp" alt="">
                <span class="hearts">&hearts;</span>
                <div class="flags">
                  <span class="flag-red">-50%</span>
                  <span class="flag-green">Sostenibilità</span>
                </div>
              </figure>
            </div>
            <figcaption class="brand-name">Levi's</figcaption>
            <figcaption class="product">RELAXED FIT TEE UNISEX</figcaption>
            <figcaption class="price">14,99 &euro; <span class="last-price">29,99 &euro;</span></figcaption>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.section {
  margin-top: 120px;
  margin-bottom: 120px;

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
    }

    .price {
      color: red;
      font-weight: bold;
    }

    .last-price {
      color: black;
      text-decoration: line-through;
      font-style: italic;
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
      width: 60px;
      text-align: center;
      font-size: 50px;
      position: absolute;
      right: 5px;
      top: 5px;
      background-color: white;
    }
  }
}
</style>