<template>
    <div>
        <div class="card-header p-3 pt-0 rounded bg-light">
        <div class="text-black-50 text-center mb-3">
        <small>S'inscrire avec</small>
        </div>
        <div class="text-center">
        <button
            class="btn btn-google-plus mr-2"
            type="button"
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

            <b-row>
                <b-col>
                <div class="form-group vprovider">
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
                        'is-invalid':
                            submitted && errors.length > 0,
                        }"
                    />
                    </ValidationProvider>
                </div>
                </b-col>
                <b-col>
                <div class="form-group vprovider">
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
                        'is-invalid':
                            submitted && errors.length > 0,
                        }"
                    />
                    </ValidationProvider>
                </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>

                <div class="form-group vprovider">
                    <ValidationProvider
                    rules="required"
                    name="phone_number"
                    v-slot="{ errors }"
                    >
                    <vue-tel-input   id="phone_number"
                        v-model="user.phone_number"
                        name="phone_number"
                        class="form-control" 
                        :onlyCountries="['BJ', 'TG', 'CI', 'NE']">
                    </vue-tel-input>
                    </ValidationProvider>
                </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                <div class="form-group vprovider">
                    <ValidationProvider
                    rules="required|email"
                    name="Email"
                    v-slot="{ errors }"
                    >
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        id="signup_email"
                        v-model="user.email"
                        name="email"
                        :class="{
                        'is-invalid':
                            submitted && errors.length > 0,
                        }"
                    />
                    <span
                        v-if="errors.length > 0"
                        class="invalid-feedback d-block"
                        >{{ errors[0] }}</span
                    >
                    </ValidationProvider>
                </div>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
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
                        id="signupPassword"
                        v-model="user.password"
                        name="password"
                        :class="{
                            'is-invalid':
                            submitted && errors.length > 0,
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
                        id="signupPassConfirmation"
                        placeholder="Confirmer mot de passe"
                        type="password"
                        />
                        <span>{{ errors[0] }}</span>
                    </div>
                    </ValidationProvider>
                </ValidationObserver>
                </b-col>
            </b-row>

            <div
                class="
                custom-control
                custom-control-alternative
                custom-checkbox
                "
            >
                <input
                class="custom-control-input"
                id="cgu"
                type="checkbox"
                />
                <label class="custom-control-label" for="cgu">
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
                id="btnSignup"
            >
                S'inscrire
            </button>
            </div>
        </form>
     </div>
</template>
<script>
import GoogleLogin from 'vue-google-login'
import { mapState, mapMutations } from 'vuex'
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
  name: 'SignupForm',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    ValidationObserver,
    ValidationProvider,
    GoogleLogin,
    alert
  },
  data () {
    return {
        user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
      },
      phone: {
        country: '',
        dial_code: ''
      },
      submitted: false,
      onlyCountries: ['BJ', 'TG', 'CI', 'NE', 'NG', 'CM', 'BF', 'ML', 'FR'],
    }
  },

  computed: {
    ...mapState({
      error: (state) => state.alert.message,
      errorOccured: (state) => state.auth.status.errorOccured,
      errorMsg: (state) => state.auth.errors
    }),
  },
  mounted: function () {

  },
  methods: {
    ...mapMutations('auth', {
      signupError: 'LOCAL_SIGNUP_FAILURE',
      setUser: 'USER'
    }),
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
    onSelect ({ name, iso2, dialCode }) {
      this.phone.country = iso2
      this.phone.dial_code = dialCode
      console.log(name, iso2, dialCode)
    },
    localSignup(){
        this.user.phone_number = `${this.phone.dial_code} ${this.user.phone_number}`
        this.user.country = this.phone.country
        this.$emit("local-signup", this.user)
    }
  }
}
</script>

