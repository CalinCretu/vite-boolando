<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter,

  },
  name: 'App',
  data() {
    return {
      message: "Hello World!"
    }
  }
}
</script>

<template>
  <div class="header">
    <AppHeader />
  </div>
  <div class="main"></div>
  <div class="footer">
    <AppFooter />
  </div>
</template>

<style lang="scss">@use './styles/general.scss';</style>