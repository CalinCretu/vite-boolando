<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader
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
  <AppHeader />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>