import KForm from 'vue-komponents/src/components/form/k-form.vue'
import KTextarea from 'vue-komponents/src/components/form/k-textarea.vue'

import {
  ref
} from 'vue'

export default {
  components: {
    'k-form': KForm,
    'k-textarea': KTextarea
  },

  setup() {
    const form = ref('null')

    const data = ref({
      comments: ''
    })

    return {
      form,
      data
    }
  }
}
