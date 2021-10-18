<template>
  <div>
    <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
      <div class="card-indicator bg-warning"></div>
      <div class="card-body">
        <div
          class="
            bg-grow-early
            text-white
            display-4
            card-icon-wrapper
            rounded-circle
          "
        >
          <img src="@/assets/icons/landlord-b.png" height="50" width="50" />
        </div>
        <h3 class="heading-6 mt-4 mb-4">Agent immobilier</h3>
        <p class="card-text mb-4">
          La gestion de votre portefeuille mandat n'a jamais été aussi facile
          qu'avec Tenancia...
        </p>
        <a
          href="javascript:void(0);"
          class="btn-block btn btn-primary mt-1"
          @click="editRealEstate"
          title="Learn more"
        >
          <span>{{
            getProfiles && !getProfiles.real_estate
              ? "Créer mon profil"
              : "Modifier mon profil"
          }}</span>
        </a>
      </div>
    </div>
    <div
      class="card card-box mb-5"
      v-if="getProfiles && getProfiles.real_estate && !editingRealEstate"
    >
      <div class="card-indicator bg-warning"></div>
      <div class="card-body px-4 py-3">
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">NOM AGENCE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.raison_social
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° TELEPHONE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.num_telephone
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">MODE DE RECOUVREMENT</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.mode_paiement
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">ADRESSE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.adresse
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° CARTE PROFESSIONNEL</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.num_carte_professionnel
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="numero_ifu">{{
            getProfiles.real_estate.numero_ifu
          }}</span
          >$
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">DATE DELIVRANCE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            formatDelivranceDate(getProfiles.real_estate.date_delivrance)
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° IFU</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.numero_ifu
          }}</span>
        </div>
      </div>
    </div>
    <div class="card card-box mb-5" v-if="editingRealEstate">
      <div class="card-indicator bg-warning"></div>
      <div class="card-body px-4 py-3">
        <form>
          <div class="row">
            <div class="col-md-12 mb-12">
              <b-img
                v-if="logo_real_estate"
                class="logo_real_estate"
                rounded
                center
                alt="Rounded image"
                :src="logo_real_estate"
              ></b-img>
              <b-form-group label="LOGO AGENCE" label-for="logo_company">
                <b-form-file
                  accept="image/*"
                  browse-text="Choisir une image"
                  placeholder=''
                  id="logo_company"
                  @change="getImageUrl"
                  size="sm"
                ></b-form-file>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="NOM AGENCE" label-for="raison_sociale">
                <b-form-input
                  id="raison_sociale"
                  v-model="realEstate.raison_social"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="N° TELEPHONE"
                label-for="realEstate_phone_number"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.phone_numberMsg"
                  >{{ errors.phone_numberMsg }}</span
                >
                <vue-tel-input
                  id="ice_number"
                  v-model="realEstate.num_telephone"
                  name="ice_number"
                  class="form-control"
                  mode="international"
                  :autoFormat="true"
                  :autoDefaultCountry="true"
                  :onlyCountries="['BJ', 'TG', 'CI', 'NE']"
                  v-on:country-changed="countryChanged"
                >
                </vue-tel-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="MODE DE RECOUVREMENT"
                label-for="mode_paiement"
              ></b-form-group>
              <b-form-select
                id="mode_paiement"
                v-model="realEstate.mode_paiement"
                text-field="label"
                value-field="id"
                :options="modePaiementList"
              ></b-form-select>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="ADRESSE" label-for="adresse">
                <b-form-input
                  id="adresse"
                  v-model="realEstate.adresse"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="N° CARTE PROFESSIONNEL"
                label-for="numero_carte"
              >
                <b-form-input
                  id="numero_carte"
                  v-model="realEstate.num_carte_professionnel"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="N° IFU" label-for="numero_ifu">
                <span class="invalid-feedback d-block">{{
                  errors.numero_ifuMsg
                }}</span>
                <b-form-input
                  id="numero_ifu"
                  trim
                  v-model="realEstate.numero_ifu"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="DATE DELIVRANCE" label-for="numero_ifu">
                <datepicker
                  :bootstrap-styling="true"
                  :format="customFormatter"
                  v-model="realEstate.date_delivrance"
                ></datepicker>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <b-button
              class="col mt-2 mb-2 ml-3 mr-3"
              variant="danger"
              @click="editingRealEstate = false"
            >
              Annuler
            </b-button>
            <b-button
              class="col mt-2 mb-2 ml-2 mr-3"
              variant="primary"
              @click="saveRealEstate"
            >
              {{ realEstate.id && realEstate.id > 0 ? "Enregistrer" : "Créer" }}
              <span
                v-if="loadingSaveRealEstate"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { alert } from "@/components/shared/";
import { library } from "@fortawesome/fontawesome-svg-core";
import Datepicker from "vuejs-datepicker";
import { mixin } from "@/mixin/mixin";
import moment from "moment";

import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "lessor-detail",
  // props: { realEstate: Object },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    alert,
    Datepicker,
  },
  data() {
    return {
      logo_real_estate: null,
      testB: "",
      breadcrumb: [
        {
          libelle: "Tenancia",
          link: "#",
        },
      ],
      //Start  vue-phone-number-input config
      translations: {
        countrySelectorLabel: "Code pays",
        countrySelectorError: "Choisir un pays",
        phoneNumberLabel: "Numéro de téléphone",
        example: "Exemple :",
      },
      loadingSaveRealEstate: false,
      phone: {
        country: "",
        dial_code: "",
      },
      onlyCountries: ["BJ", "TG", "CI", "NE", "NG", "CM", "BF", "ML", "FR"],
      countries: [],
      //End  vue-phone-number-input config
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      striped: false,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      fixed: false,
      footClone: false,
      editingRealEstate: false,
      errors: {},

      realEstate: {
        id: null,
        raison_social: null,
        num_telephone: null,
        adresse: null,
        numero_ifu: null,
        mode_paiement: null,
        num_carte_professionnel: null,
        logo: null,
        profile_type: "real_estate",
      },
    };
  },
  created: function () {
    this.realEstate.num_telephone = this.getProfiles.phone_number;
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
  },
  computed: {
    ...mapGetters("user", ["getProfiles"]),
    ...mapGetters("banque", ["banquesList", "modePaiementList"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("general", ["iceRelation"]),
  },
  methods: {
    ...mapActions("user", ["createUserProfil", "updateUserProfil"]),

    getImageUrl(e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.logo_real_estate = reader.result;
      };
    },
    countryChanged({ name, iso2, dialCode }) {
      this.phone.country = iso2;
    },
    formatDelivranceDate(dte) {
      return moment(dte).format("DD/MM/YYYY").toString();
    },
    customFormatter() {
      return moment(this.realEstate.date_delivrance).format("L").toString();
    },
    editRealEstate(e) {
      this.editingRealEstate = true;
      if (this.getProfiles && this.getProfiles.real_estate) {
        this.logo_real_estate = this.getProfiles.real_estate.logo_real_estate;
        this.realEstate = {
          ...this.getProfiles.real_estate,
          num_telephone: this.getProfiles.real_estate.num_telephone,
          profile_type: "real_estate",
        };
      }
    },

    onRealEstateActionSucess(res) {
      this.editingRealEstate = false;
    },
    onRealEstateActionFailure(err) {
      this.errors.realEstateMsg = err.response.data.message;
      this.editingRealEstate = true;
    },

    async saveRealEstate() {
      this.loadingSaveRealEstate = true;

      this.errors = {};
      this.errors.raisonSocialMsg = !this.realEstate.raison_sociale
        ? "Veuillez renseigner le nom de l'agence"
        : null;
      this.errors.phone_numberMsg = !this.realEstate.num_telephone
        ? "Veuillez renseigner le numéro de téléphone"
        : null;
      this.errors.adresse = !this.realEstate.adresseMsg
        ? "Veuillez renseigner l'adresse de l'agence"
        : null;
      this.errors.numero_ifuMsg = !this.realEstate.numero_ifu
        ? "Veuillez renseigner votre N° IFU"
        : null;

      //return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        vm.editingRealEstate = true;
        return;
      }
      if (this.realEstate.id && this.realEstate.id > 0) {
        this.realEstate.date_delivrance = moment(
          this.realEstate.date_delivrance
        )
          .format("YYYY-MM-DD")
          .toString();
        console.log(this.realEstate, "REAL");
        await this.updateUserProfil({
          ...this.realEstate,
          logo_real_estate: this.logo_real_estate,
          num_telephone: `${this.realEstate.num_telephone}`,
          country: this.phone.country,
        })
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err));
      } else {
        this.realEstate.date_delivrance = moment(
          this.realEstate.date_delivrance
        )
          .format("YYYY-MM-DD")
          .toString();
        await this.createUserProfil({
          ...this.realEstate,
          logo_real_estate: this.logo_real_estate,
          num_telephone: `${this.realEstate.num_telephone}`,
          country: this.phone.country,
        })
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err));
      }
      this.loadingSaveRealEstate = false;
    },
  },
};
</script>

<style lang="scss">
.logo_real_estate {
  width: 50%;
}
</style>