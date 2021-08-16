import { required, confirmed, length, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
import utils from '@/utils/index'

extend('required', {
  ...required,
  message: 'The {_field_} is required.'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email.'
})

extend('isValidAmount', {
  validate: (value) => utils.currencyToNumber(value) > 0,
  message: 'The {_field_} field must be a positive number.'
})
