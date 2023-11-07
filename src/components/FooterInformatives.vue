<script>

export default {
  props: ['title', 'links']
}

</script>

<template>
  <div class="col">
    <h4 class="menu-title">{{ title }}</h4>
    <ul class="informatives">
      <li v-for="(link, i) in links" :key="i">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.menu-title {
  font-size: 20px;
  margin-bottom: 1rem;
}

.informatives {

  li {
    margin: 5px 0;
  }
}

.social-footer,
.informatives {
  margin-top: 20px;
  display: flex;

  li {
    margin-right: 20px;
  }

  li:last-child {
    margin-right: 0;
  }
}
</style>