<template>
  <div>
    <PageTitle
      heading="Mes profils"
      subheading="Que vous soyez bailleurs, locataire ou agent immobilier, nous vous rendons la vie facile."
      :steps="breadcrumb"
    />
    <div class="row">
      <div class="col-xl-12 col-md-12 col-sm-12">
        <user-profil ></user-profil>
      </div>
      
    </div>
        <div class="row">
      <div class="col-xl-4 col-md-4 col-sm-12">
        <tenant-detail haveTenantProfile></tenant-detail>
      </div>
      <div class="col-xl-4 col-md-4 col-sm-12">
        <lessor-detail></lessor-detail>
      </div>
      <div class="col-xl-4 col-md-4 col-sm-12">
        <realEstate-detail></realEstate-detail>
      </div>
    </div>
    <div class="container">
      <div class="mb-5">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4"></div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { mixin } from "@/mixin/mixin";
import moment from "moment";
import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import UserProfil from './user-profil/user-profil.vue';

library.add(
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
);

export default {
  name: "Profiles",
  components: {UserProfil},
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

  created() {
    this.getBanques();
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
  },
  computed: {
    ...mapGetters("banque", ["banquesList"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["getProfiles"]),
  },
  methods: {
    ...mapActions("user", ["myProfiles"]),
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
