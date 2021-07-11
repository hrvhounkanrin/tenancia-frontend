<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div class="row no-gutters">
                <!--Start first tab-->
                <div class="col-lg-5">
                  <div class="min-vh-100">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        class="bg-composed-wrapper--image"
                        :style="{
                          backgroundImage:
                            'url(' +
                            require('@/assets/img/hero-bg/cotonou.jpg') +
                            ')'
                        }"
                      ></div>
                      <div
                        class="bg-composed-wrapper--bg bg-premium-dark opacity-5"
                      ></div>
                      <div class="bg-composed-wrapper--content p-0">
                        <div class="text-white mt-3" style="text-align: center">
                          <h1 class="display-4 my-3 font-weight-bold">
                            Tenancia
                          </h1>
                          <p class="font-size-xxl mb-0 text-white-50 h2">
                            Votre outil de gestion locative
                          </p>
                          <div
                            class="divider border-2 my-4 border-light opacity-2 rounded w-25"
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
                <div class="col-lg-7 d-flex align-items-center">
                  <div class="col-lg-6 mx-auto px-0">
                    <b-tabs pills nav-class="nav-line mx-3 my-5">
                       <b-tab title="Sign in" :active="selected_tab_name === 'login'">
                        <div slot="title">
                          Se connecter
                          <div class="divider"></div>
                        </div>
                        <alert v-if="errorOccured" variant="danger" v-bind:msg="errorMsg" icon="bell"></alert>
                        <div class="card m-0 shadow-none border-0">
                          <div class="card-header p-3 pt-0 rounded bg-light">
                            <div class="text-black-50 text-center mb-3">
                              <small>Se connecter avec</small>
                            </div>
                            <div class="text-center">
                              <button
                                class="btn btn-google-plus mr-2"
                                type="button"
                                @click="googleSignIn"
                              >
                                <span class="btn-wrapper--icon">
                                  <font-awesome-icon
                                    :icon="['fab', 'google']"
                                  />
                                </span>
                                <span class="btn-wrapper--label">
                                  Mon compte Google
                                </span>
                              </button>
                            </div>

                          </div>
                          <div class="card-body">
                            <div class="text-center text-black-50 mb-3">
                              <small
                                >Ou connectez-vous avec vos identifiants</small
                              >
                            </div>
                            <form
                              role="formConnection"
                              @submit.prevent="handleLogin"
                            >
                              <div class="form-group mb-3">
                                <div
                                  class="input-group input-group-alternative"
                                >
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <font-awesome-icon icon="envelope" />
                                    </span>
                                  </div>
                                  <input
                                    v-model="credential.email"
                                    class="form-control"
                                    placeholder="Email"
                                    type="email"
                                    id="connecting_email"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <div
                                  class="input-group input-group-alternative"
                                >
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <font-awesome-icon icon="unlock-alt" />
                                    </span>
                                  </div>
                                  <input
                                    v-model="credential.password"
                                    class="form-control"
                                    placeholder="Password"
                                    type="password"
                                    id="connection_pass"
                                  />
                                </div>
                              </div>
                              <div
                                class="form-group custom-control custom-control-alternative custom-checkbox text-left"
                              >
                                <input
                                  class="custom-control-input"
                                  id="stayConnected"
                                  type="checkbox"
                                />
                                <label
                                  class="custom-control-label"
                                  for="stayConnected"
                                >
                                  <span
                                    ><strong>Rester connecté.</strong>
                                  </span>
                                </label>
                              </div>
                              <div></div>
                              <div class="text-center">
                                <button
                                  type="submit"
                                  class="btn btn-primary btn-lg btn-block"
                                >
                                  Se connecter
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </b-tab>
                      <b-tab title="Overview" :active="selected_tab_name === 'register'">
                        <div slot="title">
                          Créer un compte
                          <div class="divider"></div>
                        </div>
                        <alert v-if="errorOccured" variant="danger" v-bind:msg="errorMsg" icon="bell"></alert>
                        <div class="card-header p-3 pt-0 rounded bg-light">
                          <div class="text-black-50 text-center mb-3">
                            <small>S'inscrire avec</small>
                          </div>
                          <div class="text-center">
                            <button
                              class="btn btn-google-plus mr-2"
                              type="button"
                              @click="googleSignIn"
                            >
                              <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'google']" />
                              </span>
                              <span class="btn-wrapper--label">
                                Mon compte Google
                              </span>
                            </button>
                          </div>
                        </div>
                        <form @submit.prevent="localSignup">

                          <div class="px-4 py-2">
                            <div class="form-group">
                              <ValidationProvider
                                rules="required"
                                name="last_name"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Nom"
                                  id="last_name"
                                  v-model="user.last_name"
                                  name="last_name"
                                  :class="{
                                    'is-invalid': submitted && errors.length > 0
                                  }"
                                />
                              </ValidationProvider>
                            </div>
                             <div class="form-group">
                              <ValidationProvider
                                rules="required"
                                name="first_name"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Prénoms"
                                  id="first_name"
                                  v-model="user.first_name"
                                  name="first_name"
                                  :class="{
                                    'is-invalid': submitted && errors.length > 0
                                  }"
                                />
                              </ValidationProvider>
                            </div>
                            <div class="form-group">
                              <ValidationProvider
                                rules="required|email"
                                name="Email"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Email"
                                  id="registering_email"
                                  v-model="user.email"
                                  name="email"
                                  :class="{
                                    'is-invalid': submitted && errors.length > 0
                                  }"
                                />
                                <span
                                  v-if="errors.length > 0"
                                  class="invalid-feedback d-block"
                                  >{{ errors[0] }}</span
                                >
                              </ValidationProvider>
                            </div>

                            <ValidationObserver>
                              <ValidationProvider
                                rules="required|password:confirmation"
                                v-slot="{ errors }"
                                name="password"
                              >
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Mot de passe"
                                    id="registering_pas"
                                    v-model="user.password"
                                    name="password"
                                    :class="{
                                      'is-invalid':
                                        submitted && errors.length > 0
                                    }"
                                  />
                                  <span
                                    v-if="errors.length > 0"
                                    class="invalid-feedback d-block"
                                    >{{ errors[0] }}</span
                                  >
                                </div>
                              </ValidationProvider>

                              <ValidationProvider
                                name="confirmation"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <div class="form-group">
                                  <input
                                    v-model="user.confirm"
                                    class="form-control"
                                    placeholder="Confirmer mot de passe"
                                    type="password"
                                  />
                                  <span>{{ errors[0] }}</span>
                                </div>
                              </ValidationProvider>
                            </ValidationObserver>

                            <div
                              class="custom-control custom-control-alternative custom-checkbox"
                            >
                               <input
                                  class="custom-control-input"
                                  id="cgu"
                                  type="checkbox"
                                />
                                <label
                                  class="custom-control-label"
                                  for="cgu"
                                >
                                <span
                                  >En <strong>cochant,</strong> j'accepte les
                                  <a href="#">
                                    Conditions Générales d'Utilisation</a
                                  >
                                  de Tenancia.
                                </span>
                              </label>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg btn-block"
                            >
                              S'inscrire
                            </button>
                          </div>
                        </form>
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
import GoogleLogin from 'vue-google-login'
import { mapState, mapGetters,mapActions, mapMutations } from 'vuex'
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
import { ErrorBoundary } from '@/app/shared/components'
import { ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

import { alert } from '@/components/shared/'
import './register-validation'

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
    ErrorBoundary,
    ValidationObserver,
    ValidationProvider,
    GoogleLogin,
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
        password: ''
      },
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
      error: state => state.alert.message,
      errorOccured: state => state.auth.status.errorOccured,
      errorMsg: state => state.auth.errors
    }),
        ...mapGetters("user", ["getProfiles"]),

  },
  created: function () {
    const c_type = this.$route.params.c_type
    console.log('c_type', this.$route.params)
    this.selected_tab_name = c_type
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
     ...mapActions('user', [
      'myProfiles'
    ]),
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

    async localSignup (e) {
      this.submitted = true
      await this.register(this.user)
        .then(res => {
          console.log('res', res.data)
          this.setUser(res.data)
          this.$router.push({ name: 'activation-mail-sent' })
        })
        .catch(err => {
          this.signupError('Une erreur est survenue lors de la création de votre compte')
          // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
          console.log('err', err.response)
        })
    },

    async handleLogin (e) {
      this.submitted = true
      await this.loginAccount(this.credential)
        .then(res => {
             this.myProfiles().then(res_profiles =>{
              //  this.setProfiles(res_profiles.data.payload)
               this.$router.push({ name: 'Home' })
              //  console.log('Profile data:', res_profiles.data.payload)
          }
        ).catch(error=>{
              console.log(error, 'Une erreur est survenue lors de la récupération de vos profiles')
            })
        })
        .catch(error => {
          console.log('handleLogin', error)
          this.makeToast('Une erreur est survenue', 'danger')
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
        const authResponse = this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        this.isSignIn = this.$gAuth.isAuthorized
        let googleToken = { access_token: authResponse.access_token, redirectUri: 'http://localhost:8080/register' }
        await this.googleExchangeToken(googleToken).then(res => {
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
@import "@/assets/bamburgh.scss"
 </style>
