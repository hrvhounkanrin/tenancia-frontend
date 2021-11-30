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
            "
            v-b-toggle.accordion-1
          >
            <span>Informations Personnelles</span>
            <font-awesome-icon icon="angle-up" class="font-size-xl" />
          </b-button>
        </div>
        <b-collapse
          id="accordion-1"
          visible
          accordion="accordion-example"
          role="tabpanel"
        >
          <div class="row p-4">
            <div class="col-xl-8 col-md-8 col-sm-12">
              <div class="row">
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="d-flex align-items-left">
                    <b><span class="d-block">Nom</span></b>
                  </div>
                  <div class="d-flex align-items-left">
                    <span
                      class="text-black-50 d-block"
                      id="locataire_profession"
                      >{{ user.last_name }}</span
                    >
                  </div>
                </b-col>
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="flex-fill">
                    <div class="d-flex align-items-left">
                      <b><span class="d-block">Prénom(s)</span></b>
                    </div>
                    <div class="d-flex align-items-left">
                      <span
                        class="text-black-50 d-block"
                        id="locataire_profession"
                        >{{ user.first_name }}</span
                      >
                    </div>
                  </div>
                </b-col>
              </div>
              <div class="row">
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="d-flex align-items-left">
                    <b><span class="d-block">Email</span></b>
                  </div>
                  <div class="d-flex align-items-left">
                    <span
                      class="text-black-50 d-block"
                      id="locataire_profession"
                      >{{ user.email }}</span
                    >
                  </div>
                </b-col>
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="flex-fill">
                    <div class="d-flex align-items-left">
                      <b><span class="d-block">N° Téléphone</span></b>
                    </div>
                    <div class="d-flex align-items-left">
                      <span
                        class="text-black-50 d-block"
                        id="locataire_profession"
                        >{{ user.phone_number }}</span
                      >
                    </div>
                  </div>
                </b-col>
              </div>
              <div class="row">
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="d-flex align-items-left">
                    <b><span class="d-block">Pays</span></b>
                  </div>
                  <div class="d-flex align-items-left">
                    <span
                      class="text-black-50 d-block"
                      id="locataire_profession"
                      >{{ user.country }}</span
                    >
                  </div>
                </b-col>
                <b-col class="col-xl-6 col-md-6 col-sm-12">
                  <div class="flex-fill">
                    <div class="d-flex align-items-left">
                      <b><span class="d-block">Ville</span></b>
                    </div>
                    <div class="d-flex align-items-left">
                      <span
                        class="text-black-50 d-block"
                        id="locataire_profession"
                        >{{ user.city }}</span
                      >
                    </div>
                  </div>
                </b-col>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 col-sm-12">
              <img
                :src="avatar"
                class="avatar rounded float-right img-fluid"
                alt=""
              />
            </div>
          </div>
          <b-row class="mr-3 mb-3">
            <b-button
              class="col-md-6 offset-md-6"
              variant="primary"
              @click="showUserInfoForm"
            >
              Modifier
            </b-button>
          </b-row>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import serverConf from "@/config/backend";
import { mapGetters , mapActions} from "vuex";
import defaultAvatar from "@/assets/icons/avatar_1.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default {
  name: "UserInfoGeneralesDetail",
  components: {
    name: "GeneralInformations",
    "font-awesome-icon": FontAwesomeIcon,
  },
  data() {
    return {
      serverConf: null,
      avatar: defaultAvatar,
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
    showUserInfoForm: function () {
      this.$emit("toogle-edit-general-info", true);
    },
    async onChangePass() {
      let res = await this.changeUserPass(this.changePassForm);
      if (res.success) {
        this.makeToast("Mot de passe changer avec succès",'success')
        this.logout();
        this.$router.push({ name: "Register" });
      } else
        this.makeToast("Echec lors de la mise à jour de l'image",'danger')
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