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

      onlyCountries: ["BJ", "TG", "CI", "NE", "NG", "CM", "BF", "ML", "FR"],
      countries: [],
  striped: false,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: false, 
      fixed: false,
      footClone: false,

    };
  },

  created(){
    this.getBanques();

    this.countries = mixin.methods.getAllCountry(this.onlyCountries);

    this.myProfiles()
      .then((res) => {
        // let profiles = res.data.payload;
        // this.setProfiles(profiles);
      })
      .catch((err) => {
        //this.signupError('Une erreur est survenue lors de la création de votre compte')
        // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
        console.log("err", err.response);
      });
  },
  computed: {

    ...mapGetters("banque", ["banquesList"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["getProfiles"]),
  },
  methods: {

    ...mapActions("user", [
      "myProfiles",
    ]),
    ...mapActions("banque", ["getBanquesList"]),
    // ...mapMutations("user", {
    //   setProfiles: "PROFILES",
    // }),
    async getBanques() {
     await this.getBanquesList();
    },

     },
};
</script>
