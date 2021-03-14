import { required, confirmed, length, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'The {_field_} is required.'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email.'
})

extend('confirmed', {
  ...confirmed,
  message: 'The confirmation password does not match.'
})

extend('length', {
  ...length,
  message: 'This {_field_}  length is incorrect.'
})
extend('password', {
  validate: (value, { other }) => value === other,
  message: 'The password confirmation does not match.',
  params: [{ name: 'other', isTarget: true }]
})
