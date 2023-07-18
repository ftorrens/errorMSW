<template>
  <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid">
     
    </div>
  </nav>

  <div class="page-content">
    <div class="container-fluid">
      <div class="flex-column flex-sm-row d-lg-flex">
        <div class="flex-lg-grow-2">
          <div class="row">
            <div class="col-12 col-lg-10">
              <div class="p-3">
                <RouterView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useValidation } from './composables/use-validation'
import { setLocale } from '@vee-validate/i18n'

import {
  ref,
  defineComponent
} from 'vue'


export default {
  name: 'App',
  
  setup(props, context) {

    useValidation()
    setLocale("es")
  }
}

</script>
