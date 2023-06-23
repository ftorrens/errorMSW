import KForm from 'vue-komponents/src/components/form/k-form.vue'
import KRadio from 'vue-komponents/src/components/form/k-radio.vue'

import {
  ref
} from 'vue'

export default {
  components: {
    'k-form': KForm,
    'k-radio': KRadio
  },
  props: {},
  setup() {

    const form = ref(null)
    const formData = ref({
      rol: ''
    })

    function send() {
      form.value.validateForm()
    }

    return {
      form,
      formData,
      send
    }
  }
}
