import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import SigninForm from '../../src/views/register/signin-form.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('signin-form test suite', () => {
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
  const wrapper = shallowMount(SigninForm, {
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
  /*
  it('check if signin email input render', () => {
    const singninEmailInput = wrapper.find('#signin_email')
    expect(singninEmailInput.exists()).toBe(true)
  })

  it('check if singing password input render', () => {
    const singninPassInput = wrapper.find('#signin_pass')
    expect(singninPassInput.exists()).toBe(true)
  })
  it('check if signing password button render', () => {
    const singninButton = wrapper.find('#btnSignin')
    expect(singninButton.exists()).toBe(true)
  })
  */
})
