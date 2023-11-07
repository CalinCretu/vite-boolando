<script>

export default {
  props: ['title', 'links']
}

</script>

<template>
  <div v-for="n in 6" :key="n" class="col">
    <div class="card">
      <figure class="card__image">
        <img class="image-main" src="/1.webp" alt="">
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
</template>

<style></style>