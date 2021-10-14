<template>
    <div>
       
        <alert
            v-if="errorOccured"
            variant="danger"
            v-bind:msg="errorMsg"
            icon="bell"
        ></alert>
    <div class="card m-0 shadow-none border-0">
        <div class="card-header p-3 pt-0 rounded bg-light">
        <div class="text-black-50 text-center mb-3">
            <small>Se connecter avec</small>
        </div>
        <div class="text-center">
            <button
            class="btn btn-google-plus mr-2"
            type="button"
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
            @submit.prevent="localSignin"
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
                id="signin_email"
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
                id="signin_pass"
                />
            </div>
            </div>
            <div
            class="
                form-group
                custom-control
                custom-control-alternative
                custom-checkbox
                text-left
            "
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
                id="btnSignin"
            >
                Se connecter
            </button>
            </div>
        </form>
        </div>
    </div>

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
  name: 'SigninForm',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    ValidationObserver,
    ValidationProvider,
    GoogleLogin,
    alert
  },
  data () {
    return {
      credential: {
        email: '',
        password: ''
      },
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
    localSignin(){
        this.$emit("local-signin", this.credential)
    }
  }
}
</script>

