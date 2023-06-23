import {
  ref
} from 'vue'

import KSwitch from 'vue-komponents/src/components/form/k-switch.vue'
import KForm from 'vue-komponents/src/components/form/k-form.vue'

export default {
  components: {
    'k-form': KForm,
    'k-switch': KSwitch
  },
  setup() {

    const data = ref({
      form: {
        legal: '',
        consent: '',
        days: []
      }
    })

    const weekDays = [
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
      'domingo'
    ]

    const form = ref(null)

    function validateForm() {

      form.value.validateForm()

    }

    return {
      weekDays,
      data,
      form,
      validateForm
    }

  }

}
