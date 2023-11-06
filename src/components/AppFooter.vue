<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      title: 'prova',
    }
  }
}
</script>

<template>
  <footer class="page-footer">
    <nav class="container-footer">
      <div class="row-footer justify-between">
        <div class="col">
          <h4>Boolando s.r.l.</h4>
          <ul class="informatives">
            <li><a href="*">Informazioni legali</a></li>
            <li><a href="*">Informativa sulla privacy</a></li>
            <li><a href="*">Diritto di recesso</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Trovaci anche su</h4>
          <ul class="social-footer">
            <li><a href="*"><img id="person-svg" src="/twitter-svgrepo-com.svg" alt=""></a></li>
            <li><a href="*"><img id="heart-svg" src="/facebook-svgrepo-com.svg" alt=""></a></li>
            <li><a href="*"><img id="bag-svg" src="/instagram-social-svgrepo-com.svg" alt=""></a></li>
            <li><a href="*"><img id="bag-svg" src="/pinterest-svgrepo-com.svg" alt=""></a></li>
            <li><a href="*"><img id="bag-svg" src="/youtube-svgrepo-com.svg" alt=""></a></li>
          </ul>
        </div>
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
}
</style>