<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: 'Header'
    }
  }
}
</script>

<template>
  <header class="page-header">
    <nav class="container">
      <div class="row-header justify-between">
        <div class="col">
          <ul class="gender">
            <li><a href="#">Donna</a></li>
            <li><a href="#">Uomo</a></li>
            <li><a href="#">Bambini</a></li>
          </ul>
        </div>
        <div class="col "><a href="#"><img class="logo" src="/boolean-logo.png" alt="Boolean_Logo"></a></div>
        <div class="col">
          <ul class="social-header">
            <li><a href="#">ICON</a></li>
            <li><a href="#">ICON</a></li>
            <li><a href="#">ICON</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.page-header {
  background-color: #FF6900;
  width: 100%;
  padding: 20px 0;
  font-size: 20px;


  .container {
    max-width: 1200px;
    margin: 0 auto;
    color: white;
    font-weight: 700;
  }

  .row-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 10px;
  }

  .logo {
    max-width: 120px;
  }

}
</style>
