<template>

  <h1>Switch using Vee-Validate</h1>

  <k-switch
    id="legal-integer"
    v-model="data.form.legal_integer"
    label="Accept Integer"
    name="legal"
    response-format="Integer"
    rules="required"
  />

  <k-switch
    id="legal-boolean"
    v-model="data.form.legal_boolean"
    label="Accept Boolean"
    name="legal"
    rules="required"
  />


</template>

<script>

import { ref } from "vue";
import Package from '/package.json'
import KSwitch from '../components/switch.vue'

export default {

  name: 'IndexPage',

  components: {
    'k-switch': KSwitch
  },

  setup() {

    const data = ref({
      form: {
        legal_integer: 0,
        legal_boolean: false,
      }
    })

    return {
      Package,
      data
    }
  }
}

</script>
