<script>
import FooterInformatives from './FooterInformatives.vue';
import FooterSocialLinks from './FooterSocialLinks.vue';
export default {
  components: {
    FooterInformatives,
    FooterSocialLinks,
  },
  name: 'AppFooter',
  data() {
    return {
      title: 'Footer',
      footerInformatives: {
        title: 'Booleando s.r.l.',
        links: [
          {
            text: 'Informazioni legali',
            herf: '#'
          },
          {
            text: 'Informativa sulla privacy',
            herf: '#'
          },
          {
            text: 'Diritto di recesso',
            herf: '#'
          }
        ]
      },
      footerSocialLinks: {
        title: 'Trovaci anche su',
        links: [
          {
            src: '/twitter-svgrepo-com.svg',
            href: '#'
          },
          {
            src: '/facebook-svgrepo-com.svg',
            href: '#'
          },
          {
            src: '/instagram-social-svgrepo-com.svg',
            href: '#'
          },
          {
            src: '/pinterest-svgrepo-com.svg',
            href: '#'
          },
          {
            src: '/youtube-svgrepo-com.svg',
            href: '#'
          }
        ]
      }
    }
  }
}
</script>

<template>
  <footer class="page-footer">
    <nav class="container-footer">
      <div class="row-footer justify-between">
        <FooterInformatives :title="footerInformatives.title" :links="footerInformatives.links" />
        <FooterSocialLinks :title="footerSocialLinks.title" :links="footerSocialLinks.links" />
      </div>
    </nav>
  </footer>
</template>

<style scoped>
.page-footer {
  background-color: #1A1A1A;
  padding: 15px 0;
  font-size: 15px;
  color: white;


  .container-footer {
    max-width: 1200px;
    margin: 0 auto;
  }

  img {
    max-width: 25px;
  }

  .row-footer {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    font-size: 20px;
  }
}
</style>