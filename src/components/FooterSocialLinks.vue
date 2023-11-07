<script>

export default {
  props: ['title', 'links']
}

</script>

<template>
  <div class="col">
    <h4 class="menu-title">{{ title }}</h4>
    <ul class="social-footer">
      <li v-for="(link, i) in links" :key="i">
        <a :href="link.href"><img :src="link.src" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.menu-title {
  font-size: 20px;
  margin-bottom: 1rem;
}

img {
  max-width: 25px;
}
</style>