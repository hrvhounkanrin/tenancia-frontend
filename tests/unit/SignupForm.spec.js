import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import SignupForm from '../../src/views/register/signup-form.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('signup-form test suite', () => {
  let route
  let store
  beforeEach(() => {
    localVue.use(Vuex)
    route = { c_type: 'login' }
    store = new Vuex.Store({
      state: {
        credential: {
          email: '',
          password: ''
        },
        authenticated: false,
        status: {
          loggingIn: true
        },
        errors: null,
        connectedUser: null,
        token: null
      }
    })
  })
  const wrapper = shallowMount(SignupForm, {
    localVue,
    computed: {
      error: () => '',
      errorOccured: () => false,
      errorMsg: () => ''
    },
    mocks: {
      $route: route,
      $store: store
    }
  })
  

  //signup form
  /*
  it('check if signup last name render', () => {
    const lastName = wrapper.find('#last_name')
    expect(lastName.exists()).toBe(true)
  })
  it('check  if signup first name render', () => {
    const lastName = wrapper.find('#first_name')
    expect(lastName.exists()).toBe(true)
  })
  it('check  if signup signupEmail render', () => {
    const signupEmail = wrapper.find('#signup_email')
    expect(signupEmail.exists()).toBe(true)
  })
  it('check  if signup signupPassword render', () => {
    const signupPassword = wrapper.find('#signupPassword')
    expect(signupPassword.exists()).toBe(true)
  })
  it('check  if signup signupPassConfirmation render', () => {
    const signupPassConfirmation = wrapper.find('#signupPassConfirmation')
    expect(signupPassConfirmation.exists()).toBe(true)
  }) 
  */
})
