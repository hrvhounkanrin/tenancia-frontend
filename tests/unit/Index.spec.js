import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import Index from '../../src/views/register/index.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('index test suite', () => {
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
  const wrapper = shallowMount(Index, {
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
  // signin form
  it('check signin-tab render', () => {
    const singinTab = wrapper.find('#signin-tab')
    expect(singinTab.exists()).toBe(true)
  })

  it('check signup-tab render', () => {
    const singnupTab = wrapper.find('#signup-tab')
    expect(singnupTab.exists()).toBe(true)
  })
})
