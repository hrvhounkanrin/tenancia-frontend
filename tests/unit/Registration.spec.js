import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
// import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Register from '../../src/views/register/index.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('index.vue Test', () => {
  let route
  let store
  beforeEach(() => {
    localVue.use(Vuex)
    route = { c_type: 'login' }
    store = new Vuex.Store({
      state: {
        user: null,
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
  const wrapper = shallowMount(Register, {
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

  it('check signin-tab render', () => {
    const singinTab = wrapper.find('#signin-tab')
    expect(singinTab.exists()).toBe(true)
  })

  it('check signup-tab render', () => {
    const singnupTab = wrapper.find('#signup-tab')
    expect(singnupTab.exists()).toBe(true)
  })
  /*
  it('check singin email input exist', () => {
    const singninEmailInput = wrapper.find('#connecting_email')
    expect(singninEmailInput.exists()).toBe(true)
  })

  it('check singing password input exist', () => {
    const singninPassInput = wrapper.find('#connection_pass')
    expect(singninPassInput.exists()).toBe(false)
  })
  it('check singing password button exist', () => {
    const singninButton = wrapper.find('#btn-connect')
    expect(singninButton.exists()).toBe(true)
  })
  it('check last name render', () => {
    const lastName = wrapper.find('#last_name')
    expect(lastName.exists()).toBe(false)
  })
  it('check first name render', () => {
    const lastName = wrapper.find('#first_name')
    expect(lastName.exists()).toBe(false)
  })
  it('check signupEmail render', () => {
    const signupEmail = wrapper.find('#registering_email')
    expect(signupEmail.exists()).toBe(false)
  })
  it('check signupPassword render', () => {
    const signupPassword = wrapper.find('#signupPassword')
    expect(signupPassword.exists()).toBe(false)
  })
  it('check signupPassConfirmation render', () => {
    const signupPassConfirmation = wrapper.find('#signupPassConfirmation')
    expect(signupPassConfirmation.exists()).toBe(false)
  }) */
})
