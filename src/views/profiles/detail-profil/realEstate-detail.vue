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
          ><span>{{
            !haveRealEstateProfile ? "Créer mon profil" : "Modifier mon profil"
          }}</span></a
        >
      </div>
    </div>
    <div
      class="card card-box mb-5"
      v-if="haveRealEstateProfile && !editingRealEstate"
    >
      <div class="card-indicator bg-warning"></div>
      <div class="card-body px-4 py-3">
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">NOM AGENCE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.raison_social
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° TELEPHONE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.num_telephone
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">ADRESSE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.adresse
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° CARTE PROFESSIONNEL</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.num_carte_professionnel
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">DATE DELIVRANCE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.date_delivrance
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b><span class="d-block">N° IFU</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            realEstateProfile.numero_ifu
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
                label-for="tenant_phone_number"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.phone_numberMsg"
                  >{{ errors.phone_numberMsg }}</span
                >
                <vue-phone-number-input
                  id="phone_number"
                  default-country-code="BJ"
                  :translations="translations"
                  :only-countries="onlyCountries"
                  v-model="realEstate.num_telephone"
                />
              </b-form-group>
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
              <b-form-group label="DATE DELIVRANCE" label-for="numero_ifu">
                <datepicker
                  :bootstrap-styling="true"
                  :format="customFormatter"
                  v-model="realEstate.date_delivrance"
                ></datepicker>
                <!--<b-form-input id="numero_ifu" v-model="realEstate.date_delivrance" trim></b-form-input> -->
              </b-form-group>
            </div>
          </div>
          <a
            href="javascript:void(0);"
            class="btn-block btn btn-primary mt-1"
            @click="saveRealEstate"
            ><span>Sauvegarder</span></a
          >
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
  // props: { tenant: Object },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    alert,
    Datepicker,
  },
  data() {
    return {
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
        num_carte_professionnel: null,
      },
    };
  },
  created: function () {
    this.getBanques();
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
  },
  computed: {
    ...mapGetters("user", [
      "haveLessorProfile",
      "tenantProfile",
      "lessorProfile",
      "realEstateProfile",
    ]),
    ...mapGetters("banque", ["banquesList", "modePaiementList"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("general", ["iceRelation"]),
  },
  methods: {
    ...mapActions("banque", ["getBanquesList"]),
    ...mapActions("user", ["createLessor", "updateLessor"]),

    async getBanques() {
      await this.getBanquesList();
    },

    customFormatter() {
      return moment(this.realEstate.date_delivrance).format("L").toString();
    },
    editLessor(e) {
      this.editingLessor = true;
      if (this.haveLessorProfile) {
        this.lessor = this.lessorProfile;
        this.lessor.banque_id = this.lessorProfile.banque.id;
        console.log(
          "res",
          this.banquesList.find(
            (x) => x.libbanque == this.lessor.banque.libbanque
          )
        );
        this.$forceUpdate();
      }
    },
    onLessorActionSucess(res) {
      let lessor = res.payload;
      let profiles = {
        lessor: lessor,
        tenant: this.tenantProfile,
        real_estate: this.realEstateProfile,
      };
      this.setProfiles(profiles);
      this.editingLessor = false;
      this.$forceUpdate();
    },
    onLessorActionFailure(err) {
      this.errors.lessorMsg = err.response.data.message;
      this.editingLessor = true;
      this.$forceUpdate();
    },
    async saveLessor() {
      this.errors = {};
      this.errors.phone_numberMsg = !this.lessor.phone_number
        ? "Veuillez renseigner votre n° téléphone"
        : null;
      this.errors.pays_residenceMsg = !this.lessor.pays_residence
        ? "Veuillez choisir votre pays de résidence"
        : null;
      this.errors.banque_idMsg = !this.lessor.banque_id
        ? "Veuillez choisir une banque"
        : null;
      this.errors.mode_paiementMsg = !this.lessor.mode_paiement
        ? "Veuillez choisir un mode de paiement"
        : null;
      this.errors.numcompteMsg = !this.lessor.numcompte
        ? "Veuillez renseigner votre numéro de compte"
        : null;

      //return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        vm.editingLessor = true;
        this.$forceUpdate();
        return;
      }

      if (this.lessor.id && this.lessor.id > 0) {
        await this.updateLessor({ ...this.lessor, user_id: this.user.id })
          .then((res) => this.onLessorActionSucess(res))
          .catch((err) => this.onLessorActionFailure(err));
      } else {
        await this.createLessor({
          banque_id: this.lessor.banque_id,
          id: this.lessor.id,
          mode_paiement: this.lessor.mode_paiement,
          numcompte: this.lessor.numcompte,
          phone_number: this.lessor.phone_number,
          pays_residence: this.lessor.pays_residence,
          user_id: this.user.id,
        })
          .then((res) => this.onLessorActionSucess(res))
          .catch((err) => this.onLessorActionFailure(err));
      }
    },
  },
};
</script>

<style>
</style>