<template >
  <div>
        <PageTitle
      heading="Changement Mot De Passe"
      subheading=""
    />
    <div class="card mb-5">
      <div class="card-body">
        <b-row>
          <b-col class="col-xl-12 col-md-12 col-sm-12">

            <b-form-group
              label-for="user_password"
            >
              <b-form-group >
                <b-form-input
                  v-model="changePassForm.old_password"
                  placeholder="Ancien Mot De Passe:"
                  id="user_oldPass"
                ></b-form-input>
              </b-form-group>
              <div>
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
                        placeholder="Nouveau Mot de passe"
                        id="changePassword"
                        v-model="changePassForm.new_password1"
                        name="password"
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
                        v-model="changePassForm.new_password2"
                        class="form-control"
                        id="signupPassConfirmation"
                        placeholder="Confirmer mot de passe"
                        type="password"
                      />
                      <span>{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </ValidationObserver>
              </div>
            </b-form-group>
            <b-row >
              <b-button
                class="col mt-2 mb-2 ml-3 mr-3"
                variant="danger"
                @click="onReset"
              >
                Annuler
              </b-button>
              <b-button
                id="changePass"
                @click="onChangePass"
                class="col mt-2 mb-2 ml-2 mr-3"
                variant="primary"
              >
                Enregistrer
                <span
                  v-if="loadingPass"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </b-button>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import defaultAvatar from "@/assets/icons/avatar_1.png";
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

export default {
  name: "UserPassForm",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loadingPass: false,
      changePass: false,
      changePassForm: {
        old_password: null,
        new_password1: null,
        new_password2: null,
      },
      userProfil: {
        last_name: "",
        first_name: "",
        phone_number: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  created() {
    this.userProfil = { ...this.user };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("user", ["changeUserPass"]),
        makeToast(msg, variant) {
      this.$toast.open({
        message: msg,
        type: variant,
        duration: 3000,
        dismissible: true,
        queue: false,
        position: "top-right",
      });
    },
    async onChangePass() {
      this.loadingPass = true
      let res = await this.changeUserPass(this.changePassForm);
      if (res.success) {
        this.makeToast("Mot de passe changer avec succès",'success')
        this.logout();
        this.$router.push({ name: "Register" });
      } else {
        this.makeToast("Echec lors du changement de votre mot de passe",'danger')
      }

      this.loadingPass = false;
    },
    onReset() {
      this.changePassForm = {
        old_password: null,
        new_password1: null,
        new_password2: null,
      }
    }
  },
};
</script>
<style lang="scss">
.avatar {
  max-width: 100%;
  max-height: 75%;
}
</style>