<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: 'Header',
      menu: [
        {
          text: 'Donna',
          href: '#'
        },
        {
          text: 'Uomo',
          href: '#'
        },
        {
          text: 'Bambini',
          href: '#'
        }
      ],
      icons: [
        {
          text: 'ICON-1',
          href: '#'
        },
        {
          text: 'ICON-2',
          href: '#'
        },
        {
          text: 'ICON-3',
          href: '#'
        }
      ]
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
            <li v-for="(link, i) in menu" :key="i">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col "><a href="#"><img class="logo" src="/boolean-logo.png" alt="Boolean_Logo"></a></div>
        <div class="col">
          <ul class="social-header">
            <li v-for="(button, i) in icons" :key="i">
              <a :href="button.href">{{ button.text }}</a>
            </li>

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
  padding: 10px 0;
  font-size: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

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
