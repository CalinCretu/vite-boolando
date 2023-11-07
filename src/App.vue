<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  name: 'App',
  data() {
    return {

    }
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