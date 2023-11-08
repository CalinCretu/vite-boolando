import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faOpencart } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faUser, faHeart, faOpencart)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
