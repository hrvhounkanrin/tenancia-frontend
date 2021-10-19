<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div class="row no-gutters">
                <!--Start first tab-->
                <div class="col-lg-5" id="leftSide">
                  <div class="min-vh-100">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        class="bg-composed-wrapper--image"
                        :style="{
                          backgroundImage:
                            'url(' +
                            require('@/assets/img/hero-bg/cotonou-3.png') +
                            ')',
                        }"
                      ></div>
                      <div
                        class="
                          bg-composed-wrapper--bg
                          bg-premium-dark
                          opacity-5
                        "
                      ></div>
                      <div class="bg-composed-wrapper--content p-0">
                        <div class="text-white mt-3" style="text-align: center">
                          <!--<h1 class="display-4 my-3 font-weight-bold">
                            Tenancia
                          </h1>
                          <p class="font-size-xxl mb-0 text-white-50 h2">
                            Votre outil de gestion locative
                          </p>-->
                          <div
                            class="
                              divider
                              border-2
                              my-4
                              border-light
                              opacity-2
                              rounded
                              w-25
                            "
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="hero-footer pb-4">
                      <ul class="nav">
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0)"
                            title="Facebook"
                          >
                            <font-awesome-icon
                              :icon="['fab', 'facebook-square']"
                            />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0)"
                            title="Twitter"
                          >
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0)"
                            title="Google+"
                          >
                            <font-awesome-icon :icon="['fab', 'google-plus']" />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0)"
                            title="Instagram"
                          >
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--End of first tab-->
                <!--Start of second tab-->
                <div class="col-lg-7 d-flex align-items-center" id="rightSide">
                  <div class="col-lg-6 mx-auto px-0">
                    <b-tabs pills nav-class="nav-line mx-3 my-5">
                      <b-tab active title="Sign in" id="signin-tab">
                         <div slot="title">
                            Se connecter
                            <div class="divider"></div>
                        </div>
                          <signin-form @local-signin="localSignin" ></signin-form>
                      </b-tab>
                      <b-tab title="Overview" id="signup-tab">
                        <div slot="title">
                          Créer un compte
                          <div class="divider"></div>
                        </div>
                        <alert
                          v-if="errorOccured"
                          variant="danger"
                          v-bind:msg="errorMsg"
                          icon="bell"
                        ></alert>
                        <signup-form @local-signup="localSignup"></signup-form>
                      </b-tab>
                    </b-tabs>
                  </div>
                </div>
                <!--End of second tab-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GoogleLogin from 'vue-google-login'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faQuestionCircle,
  faArrowLeft,
  faAmbulance,
  faEnvelope,
  faUnlockAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGooglePlus,
  faFacebook,
  faInstagram,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

import { alert } from '@/components/shared/'
import  SigninForm  from './signin-form.vue'
import  SignupForm  from './signup-form.vue'
import './register-validation'
import { LS_ROUTE } from '@/constants'
library.add(
  faQuestionCircle,
  faArrowLeft,
  faAmbulance,
  faTwitter,
  faGooglePlus,
  faInstagram,
  faFacebook,
  faEnvelope,
  faUnlockAlt,
  faGoogle,
  faHeadset
)
setInteractionMode('lazy')
export default {
  name: 'Register',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    ValidationObserver,
    ValidationProvider,
    // GoogleLogin,
    'signin-form': SigninForm,
    'signup-form': SignupForm,
    alert
  },
  data () {
    return {
      params: {
        client_id:
          '185957473371-5fp3ntcah051m746ssq71c7raqsif2fl.apps.googleusercontent.com'
      },
     
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
      },
      onlyCountries: ['BJ', 'TG', 'CI', 'NE', 'NG', 'CM', 'BF', 'ML', 'FR'],
      credential: {
        email: '',
        password: ''
      },
      submitted: false,
      selected_tab_name: 'register'
    }
  },

  computed: {
    ...mapState({
      error: (state) => state.alert.message,
      errorOccured: (state) => state.auth.status.errorOccured,
      errorMsg: (state) => state.auth.errors
    }),
    ...mapGetters('user', ['getProfiles'])
  },
  mounted: function () {

  },
  methods: {
    ...mapActions('auth', [
      'register',
      'loginAccount',
      'activedUserAccount',
      'googleExchangeToken',
      'getBackendResponse',
      'googleLoginFailure'
    ]),
    ...mapActions('user', ['myProfiles']),
    ...mapMutations('auth', {
      signupError: 'LOCAL_SIGNUP_FAILURE',
      setUser: 'USER'
    }),
    //   ...mapMutations('user', {
    //   setProfiles: 'PROFILES',
    // }),
    makeToast (msg, variant) {
      this.$toast.open({
        message: msg,
        type: variant,
        duration: 3000,
        dismissible: true,
        queue: false,
        position: 'top-right'
      })
    },
 

    async localSignup (user) {
      this.submitted = true
      await this.register({ ...user })
        .then((res) => {
          console.log('res', res.data)
          this.setUser(res.data)
          this.$router.push({ name: 'activation-mail-sent' })
        })
        .catch((err) => {
          this.signupError(
            'Une erreur est survenue lors de la création de votre compte'
          )
          // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
          console.log('err', err.response)
        })
    },

    async localSignin (credentials) {
      await this.loginAccount(credentials)
        .then((res) => {
          const lastRouteName = sessionStorage.getItem(LS_ROUTE)
          console.log('lastRouteName:', lastRouteName)
          if (lastRouteName && lastRouteName !== 'Register') { this.$router.push({ name: lastRouteName }) } else { this.$router.push({ name: 'Home' }) }
        })
        .catch((error) => {
          if (error) {
            this.makeToast('Une erreur est survenue', 'danger')
          }
        })
    },
    googleConnect () {
      this.getBackendResponse(this)
    },
    onSuccess () {
      console.log('Authentification réussie')
    },
    onFailure () {
      console.log('Authentification échouée')
    },
    async googleSignIn () {
      try {
        await this.$gAuth.signIn()
        const authResponse = this.$gAuth.GoogleAuth.currentUser
          .get()
          .getAuthResponse()
        this.isSignIn = this.$gAuth.isAuthorized
        let googleToken = {
          access_token: authResponse.access_token,
          redirectUri: 'http://localhost:8080/register'
        }
        await this.googleExchangeToken(googleToken).then((res) => {
          console.log('googleSignIn: ', res)
          this.$router.push({ name: 'MyProfiles' })
        })
      } catch (error) {
        console.log('googleSignIn error:', error)
      }
    }
  }
}
</script>
<style lang="scss">

@import "@/assets/bamburgh.scss";
</style>
