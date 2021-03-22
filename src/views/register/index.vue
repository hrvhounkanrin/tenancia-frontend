<template>
  <div class="app-wrapper bg-white">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="app-content--inner p-0">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="bg-composed-wrapper--content">
              <div class="row no-gutters">
                <div class="col-lg-5">
                  <div class="min-vh-100">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        class="bg-composed-wrapper--image"
                        :style="{
                          backgroundImage:
                            'url(' +
                            require('@/assets/img/hero-bg/tenancia-2.jpg') +
                            ')'
                        }"
                      ></div>
                      <div
                        class="bg-composed-wrapper--bg bg-premium-dark opacity-5"
                      ></div>
                      <div class="bg-composed-wrapper--content p-0">
                        <div class="text-white mt-3">
                          <h1 class="display-4 my-3 font-weight-bold">
                            Tenancia
                          </h1>
                          <p class="font-size-md mb-0 text-white-50">
                            L'immobilier autrement!
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
                            href="javascript:void(0);"
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
                            href="javascript:void(0);"
                            title="Twitter"
                          >
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0);"
                            title="Google+"
                          >
                            <font-awesome-icon :icon="['fab', 'google-plus']" />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link font-size-lg text-white-50"
                            v-b-tooltip.hover
                            href="javascript:void(0);"
                            title="Instagram"
                          >
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 d-flex align-items-center">
                  <div class="col-lg-6 mx-auto px-0">
                    <b-tabs pills nav-class="nav-line mx-3 my-5">
                      <b-tab title="Overview" active>
                        <div slot="title">
                          Créer un compte
                          <div class="divider"></div>
                        </div>
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
                        <!-- <form @submit.prevent="handleSubmit"> -->
                        <form @submit.prevent="handleSubmit">
                          <div class="px-4 py-2">
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
                                id="customCheckLogin"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for=" customCheckLogin"
                              >
                                <span
                                  >En <strong>cochant</strong> j'accepte les
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
                      <b-tab title="Sign in">
                        <div slot="title">
                          Se connecter
                          <div class="divider"></div>
                        </div>
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
                    </b-tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import { mapState, mapActions, mapMutations } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faQuestionCircle,
  faArrowLeft,
  faAmbulance,
  faEnvelope,
  faUnlockAlt,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGooglePlus,
  faFacebook,
  faInstagram,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ErrorBoundary } from "@/app/shared/components";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { setInteractionMode } from "vee-validate";

import "./register-validation";

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
);
setInteractionMode("lazy");
export default {
  name: "Register",
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    ErrorBoundary,
    ValidationObserver,
    ValidationProvider,
    GoogleLogin
  },
  data() {
    return {
      params: {
        client_id:
          "185957473371-5fp3ntcah051m746ssq71c7raqsif2fl.apps.googleusercontent.com"
      },
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirm: "",
        profile: {
          title: "M.",
          dob: "1999-06-25",
          address: "UNKOWN",
          country: "BJ",
          zip: "093",
          city: "COTONOU"
        }
      },
      credential: {
        email: "",
        password: ""
      },
      submitted: false,
      activeTab: "register"
    };
  },
  computed: {
    ...mapState({
      error: state => state.alert.message
    })
  },
  created: function() {
    // const parameters = this.$route.params
    const c_type = this.$route.query.c_type;
    this.activeTab = c_type;
  },
  mounted: function() {
    // let that = this
    console.log(this.$route.query.uid);
    console.log(this.$route.query.token);
    this.checkAccountVerification();

    // let checkGauthLoad = setInterval(function(){
    //     that.isLoaded = that.$gAuth.isInit
    //     if(that.isLoaded) clearInterval(checkGauthLoad)
    // }, 1000)
  },
  methods: {
    ...mapActions("auth", [
      "register",
      "loginAccount",
      "activedUserAccount",
      "googleExchangeToken",
      "getBackendResponse",
      "googleLoginFailure"
    ]),

    makeToast(msg, variant) {
      this.$toast.open({
        message: msg,
        type: variant,
        duration: 3000,
        dismissible: true,
        queue: false,
        position: "top-right"
      });
    },
    async handleSubmit(e) {
      this.submitted = true;
      await this.register(this.user)
        .then(res => {
          console.log(res, "res");

          this.makeToast(
            "Compte utilisateur créer avec succès merci de bien vouloir vérifier votre boîte mail pour activer votre compte",
            "success"
          );
        })
        .catch(err => {
          console.log("err", err.response);
          this.makeToast("Une erreur est survenue", "danger");
        });
    },
    checkAccountVerification() {
      if (this.$route.query.uid && this.$route.query.token) {
        this.activedUserAccount({
          uidb64: this.$route.query.uid,
          token: this.$route.query.token
        })
          .then(res => {
            console.log(res, "res");

            this.makeToast("Compte vérifié", "success");
          })
          .catch(err => {
            console.log("err", err.response);
            this.makeToast("Une erreur est survenue", "danger");
          });
      }
    },
    async handleLogin(e) {
      this.submitted = true;
      await this.loginAccount(this.credential)
        .then(res => {
          this.makeToast("Salut", "success");
          setTimeout(() => {
            this.$router.push(this.$route.query.redirect || { name: "Home" });
          }, 500);
        })
        .catch(err => {
          console.log("err", err.response);
          this.makeToast("Une erreur est survenue", "danger");
        });
    },
    googleConnect() {
      this.getBackendResponse(this);
    },
    onSuccess() {
      console.log("Authentification réussie");
    },
    onFailure() {
      console.log("Authentification échouée");
    },
    async googleSignIn() {
      try {
        //const googleUser =
        await this.$gAuth.signIn();
        const authResponse = this.$gAuth.GoogleAuth.currentUser
          .get()
          .getAuthResponse();
        console.log("authResponse", authResponse);
        this.isSignIn = this.$gAuth.isAuthorized;
        let googleToken = {
          access_token: authResponse.access_token,
          redirectUri: ""
        };
        await this.googleExchangeToken(googleToken).then(res => {
          console.log("res googleExchange", res);
        });
      } catch (error) {
        // this.googleLoginFailure('Une erreur est survenue, merci de reessayer dans un moment.')
        console.log("googleSignIn error:", error);
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/bamburgh.scss";
</style>
