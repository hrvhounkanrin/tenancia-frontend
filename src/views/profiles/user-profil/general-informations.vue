<template >
  <div>
    <div class="accordion mb-5">
      <div class="card card-box">
        <div class="card-header">
          <b-button
            class="
              btn-link btn-lg
              d-flex
              align-items-center
              justify-content-between
              shadow-none
              font-size-lg
            "
            v-b-toggle.accordion-1
          >
            Edition Informations Personnelles
            <font-awesome-icon icon="angle-up" class="font-size-xl" />
          </b-button>
        </div>
        <b-collapse
          id="accordion-1"
          visible
          accordion="accordion-example"
          role="tabpanel"
        >
          <b-row class="p-4">
            <b-col class="col-xl-8 col-md-8 col-sm-12">
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
                  <b-form-group
                    label="Téléphone:"
                    label-for="user_phone_number"
                  >
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
                <b-button
                  class="col mt-2 mb-2 ml-3 mr-3"
                  variant="danger"
                  @click="hideEditInfoForm()"
                >
                  Annuler
                </b-button>
                <b-button
                  @click="onSaveProfilData"
                  class="col mt-2 mb-2 ml-2 mr-3"
                  variant="primary"
                >
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
            <b-col class="col-xl-4 col-md-4 col-sm-12">
              <img
                :src="avatar"
                class="avatar rounded float-right img-fluid"
                alt=""
              />
            </b-col>
          </b-row>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import serverConf from "@/config/backend";
import { mapActions, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "@/assets/icons/avatar_1.png";
library.add(fas);
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      serverConf: null,
      avatar: defaultAvatar,
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
        photo_url: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  created() {
    this.serverConf = serverConf;

    this.userProfil = { ...this.user };
    this.userProfil.photo_url != null || this.userProfil.photo_url != ""
      ? (this.avatar = `${this.serverConf.serverURL}/${this.userProfil.photo_url}`)
      : (this.avatar = defaultAvatar);
  },
  methods: {
    ...mapActions("auth", ["logout", "updateUserData"]),
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

    setUserAvatar(ev) {
      this.userProfil["photo"] = ev.target.files[0];
      this.getImageUrl(ev);
    },
    async onSaveProfilData() {
      this.loadingSaveProfil = true;
      const fd = new FormData();
      this.userProfil.photo
        ? fd.append("photo", this.userProfil.photo)
        : delete this.userProfil["photo"];
      fd.append("first_name", this.userProfil.first_name);
      fd.append("last_name", this.userProfil.last_name);
      fd.append("phone_number", this.userProfil.phone_number);

      let res = await this.updateUserData(fd);
      if (res.success) {
        this.makeToast(
          "Vos informations ont été mise à jour avec succès",
          "success"
        );
      } else
        this.makeToast(
          "Echec lors de la mise à jour de vos informations",
          "danger"
        );

      this.loadingSaveProfil = false;
      this.hideEditInfoForm();
    },
    getImageUrl(e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.avatar = reader.result;
      };
    },

    // async onChangePass() {
    //   let res = await this.changeUserPass(this.changePassForm);
    //   if (res.success) {
    //     this.logout();
    //     this.$router.push({ name: "Register" });
    //   }
    // },
    hideEditInfoForm: function () {
      (this.userProfil = {
        last_name: "",
        first_name: "",
        phone_number: "",
        email: "",
        photo_url: "",
      }),
        this.$emit("toogle-edit-general-info", false);
    },
  },
};
</script>
<style lang="scss">
.avatar {
  max-width: 100%;
  max-height: 75%;
}
</style>