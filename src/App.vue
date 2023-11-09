<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  name: 'App',
  data() {
    return {
      store: store,
    }
  },
  created() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        const card = res.data
        this.store.card = card;
      })
  }
}
</script>

<template>
  <div class="header">
    <AppHeader />
  </div>
  <div class="main">
    <AppMain />
  </div>
  <div class="footer">
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>