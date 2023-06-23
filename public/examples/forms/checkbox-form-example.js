import {
  ref
} from 'vue'

import KForm from 'vue-komponents/src/components/form/k-form.vue'
import KCheckbox from 'vue-komponents/src/components/form/k-checkbox.vue'

export default {
  components: {
    'k-form': KForm,
    'k-checkbox': KCheckbox
  },

  setup() {

    const form = ref(null)
    const formData = ref({
      legal: false,
      puesto: [],
      consent: false
    })

    function validate() {

      form.value.validateForm()

    }

    return {
      form,
      validate,
      formData
    }

  }
}
