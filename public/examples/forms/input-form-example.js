import {
  ref
} from 'vue'

import KForm from '../../../components/web-npm-vue-komponents/src/components/form/k-form.vue'
import KInput from '../../../components/web-npm-vue-komponents/src/components/form/k-input.vue'

export default {
  components: {
    'k-form': KForm,
    'k-input': KInput
  },

  setup() {
    const example = 'pops'
    const form = ref(null)
    const formData = ref({
      name: '',
      email: '',
      password: ''
    })

    function validate() {

      form.value.validateForm()

    }

    return {
      form,
      validate,
      formData,
      example
    }

  }
}