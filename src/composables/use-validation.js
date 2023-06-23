import {localize} from '@vee-validate/i18n'

import {
  defineRule,
  configure
} from 'vee-validate';

import {
  required,
  email
} from '@vee-validate/rules'

export function useValidation (){
  defineRule('required', required)
  defineRule('email', email)

  configure({
    // Generates an English message locale generator
    generateMessage: localize({
      es: {
        messages: {
          required: 'Este campo es obligatorio',
          email: 'Por favor, escribe un email válido'
        }
      },
      en: {
        messages: {
          required: 'This field is required',
          email: 'Please, enter a valid email'
        }
      }
    })
  });
}