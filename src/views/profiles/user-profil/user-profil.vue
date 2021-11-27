<template >
  <div>
    <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
      <div class="card-indicator bg-danger"></div>
      <div class="card-body">
        <b-row>
          <b-col class="col-xl-3 col-md-3 col-sm-12">
            <div class="text-left">
              <b-img
                v-if="
                  userProfil.photo_url != null || userProfil.photo_url != ''
                "
                class="avatar"
                :src="avatar"
              />

              <b-img
                v-else
                width="200"
                class="rounded-circle"
                src="@/assets/icons/avatar_1.png"
              />
            </div>
            <div class="p-3 text-left">
              <p>{{ userProfil.first_name }} {{ userProfil.last_name }}</p>
              <p>{{ userProfil.phone_number }}</p>
              <p>{{ userProfil.email }}</p>
            </div>
          </b-col>
          <b-col class="col-xl-6 col-md-6 col-sm-12">
            <b-row>
              <b-col>
                <b-form-group label="Nom:" label-for="user_lastname">
                  <b-form-input
                    v-model="userProfil.last_name"
                    id="user_lastname"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Prénom(s):" label-for="user_firstname">
                  <b-form-input
                    v-model="userProfil.first_name"
                    id="user_firstname"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group label="Email:" label-for="user_eamail">
                  <b-form-input
                    readonly
                    v-model="userProfil.email"
                    id="user_eamail"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Téléphone:" label-for="user_phone_number">
                  <b-form-input
                    v-model="userProfil.phone_number"
                    id="user_phone_number"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-file
                    accept="image/*"
                    browse-text="Remplacer l'avatar"
                    placeholder=""
                    id="avatar"
                    size="sm"
                    @change="setUserAvatar"
                  ></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-button class="col mt-2 mb-2 ml-3 mr-3" variant="danger">
                Annuler
              </b-button>
              <b-button class="col mt-2 mb-2 ml-2 mr-3" variant="primary">
                Enregistrer
                <span
                  v-if="loadingSaveProfil"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </b-button>
            </b-row>
          </b-col>
          <b-col class="col-xl-3 col-md-3 col-sm-12">
            <b-form-group
              v-if="!changePass"
              label="Mot De Passe:"
              label-for="user_password"
            >
              <b-button
                id="user_password"
                class="col p-2"
                variant="danger"
                @click="changePass = true"
              >
                Changer
              </b-button>
            </b-form-group>

            <b-form-group
              v-else
              label="Changement Mot De Passe:"
              label-for="user_password"
            >
              <b-form-group v-if="changePass">
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
            <b-row v-if="changePass">
              <b-button
                class="col mt-2 mb-2 ml-3 mr-3"
                variant="danger"
                @click="changePass = false"
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

import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

export default {
    components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      avatar: null,
      loadingSaveProfil: false,
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

    console.log(this.userProfil.photo_url , "this.userProfil.photo_url ")
    this.userProfil.photo_url != null || this.userProfil.photo_url != ""
      ? (this.avatar = `http://tenancia.com/${this.userProfil.photo_url}`)
      : (this.avatar = null);

  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("user", [
      "updateUserProfil",
      "updateUserAvatar",
      "changeUserPass",
    ]),

    async setUserAvatar(ev) {
      const fd = new FormData();
      fd.append("photo", ev.target.files[0]);
      let res = await this.updateUserAvatar(fd);
      if (res.success) {
        this.getImageUrl(ev);
      }
    },

    getImageUrl(e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.avatar = reader.result;
      };
    },

    async onChangePass() {
      let res = await this.changeUserPass(this.changePassForm);
      if (res.success) {
        this.logout();
        this.$router.push({ name: "Register" });
      }
    },
  },
};
</script>
<style lang="scss">
.avatar {
  width: 50%;
}
</style>