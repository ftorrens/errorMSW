import KForm from 'vue-komponents/src/components/form/k-form.vue'
import KSelect from 'vue-komponents/src/components/form/k-select.vue'

import {
  ref
} from 'vue'

export default {
  name: 'FormSelect',

  components: {
    'k-select': KSelect,
    'k-form': KForm
  },
  setup() {

    const formData = ref({
      passion: ''
    })

    const form = ref(null)

    function validate() {

      form.value.validateForm()

    }

    return {
      formData,
      form,
      validate
    }

  }
}
