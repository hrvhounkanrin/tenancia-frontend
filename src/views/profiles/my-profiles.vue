<template>
  <div>
    <PageTitle
      heading="Mes profils"
      subheading="Que vous soyez bailleurs, locataire ou agent immobilier, nous vous rendons la vie facile."
      :steps="breadcrumb"
    />

    <div class="container">
      <div class="mb-5">
        <div class="row">
          <div class="col-lg-4">
            <tenant-detail haveTenantProfile></tenant-detail>
          </div>
          <div class="col-lg-4">
            <lessor-detail></lessor-detail>
          </div>
          <div class="col-lg-4">
            <realEstate-detail></realEstate-detail>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
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

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { alert } from "@/components/shared/";

library.add(
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
);

export default {
  name: "Profiles",
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
  
  created(){
    this.getBanques();
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
    this.myProfiles()
      .then((res) => {
        let profiles = res.data.payload;
        this.setProfiles(profiles);
      })
      .catch((err) => {
        //this.signupError('Une erreur est survenue lors de la création de votre compte')
        // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
        console.log("err", err.response);
      });
  },
  computed: {
    ...mapGetters("user", [
      "haveTenantProfile",
      "haveLessorProfile",
      "haveRealEstateProfile",
      "tenantProfile",
      "lessorProfile",
      "realEstateProfile",
    ]),
    ...mapGetters("banque", ["banquesList", "modePaiementList"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["getProfiles"]),
    ...mapGetters("general", ["iceRelation"]),
  },
  methods: {
    ...mapActions("user", [
      "myProfiles",
      "createTenant",
      "updateTenant",
      "createLessor",
      "updateLessor",
      "createRealEstate",
      "updateRealEstate",
    ]),
    ...mapActions("banque", ["getBanquesList"]),
    ...mapMutations("user", {
      setProfiles: "PROFILES",
    }),
    async getBanques() {
      await this.getBanquesList();
    },

    customFormatter() {
      return moment(this.realEstate.date_delivrance).format("L").toString();
    },

    editRealEstate(e) {
      this.editingRealEstate = true;
      if (this.haveRealEstateProfile) {
        this.realEstate = this.realEstateProfile;
        this.$forceUpdate();
      }
    },

    onRealEstateActionSucess(res) {
      console.log("res.data:", res.data.payload);
      let realEstate = res.data.payload;
      console.log("realEstate:", realEstate);
      let profiles = {
        tenant: this.tenantProfile,
        lessor: this.lessorProfile,
        real_estate: realEstate,
      };

      this.setProfiles(profiles);
      this.editingRealEstate = false;
      this.$forceUpdate();
    },
    onRealEstateActionFailure(err) {
      this.errors.tenantMsg = err.response.data.message;
      this.$forceUpdate();
      console.log("err", err.response);
    },

    async saveRealEstate() {
      this.errors = {};
      this.errors.raisonSocialMsg = !this.realEstate.raison_sociale
        ? "Veuillez renseigner le nom de l'agence"
        : null;
      this.errors.phone_numberMsg = !this.realEstate.num_telephone
        ? "Veuillez renseigner le numéro de téléphone"
        : null;
      this.errors.adresse = !this.tenant.adresseMsg
        ? "Veuillez renseigner l'adresse de l'agence"
        : null;

      //return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        vm.editingRealEstate = true;
        this.$forceUpdate();
        return;
      }
      if (this.realEstate.id && this.realEstate.id > 0) {
        this.realEstate.date_delivrance = moment(
          this.realEstate.date_delivrance,
          "L"
        )
          .format("YYYY-MM-DD")
          .toString();
        console.log(this.realEstate);
        await this.updateRealEstate(this.realEstate)
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err));
      } else {
        console.log(this.realEstate);
        await this.createRealEstate(this.realEstate)
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err));
      }
    },
  },
};
</script>
