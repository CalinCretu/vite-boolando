import { reactive } from 'vue'
import prodottoJSON from './db.json'
export const store = reactive({
  card: prodottoJSON.products,
})
