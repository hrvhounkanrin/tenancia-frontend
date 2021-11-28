<template>
  <div>
    <PageTitle
      heading="Mes profils"
      subheading="Que vous soyez bailleurs, locataire ou agent immobilier, nous vous rendons la vie facile."
      :steps="breadcrumb"
    />
    <div class="row">
      <div class="col-xl-8 col-md-8 col-sm-12 offset-md-2 offset-xl-2">
        <general-informations v-if="editGeneralInfo" @toogle-edit-general-info="toogleEditGeneralInfo"></general-informations>
        <user-info-generales-detail v-if="!editGeneralInfo" @toogle-edit-general-info="toogleEditGeneralInfo"></user-info-generales-detail>
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
import { mapActions, mapGetters } from "vuex";
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
import GeneralInformations from './user-profil/general-informations.vue';
import UserInfoGeneralesDetail from './user-profil/user-info-generales-detail.vue'
import UserPassForm from './user-profil/user-pass-form.vue'
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
    'user-info-generales-detail': UserInfoGeneralesDetail,
    'user-passs-form': UserPassForm,
    'general-informations':GeneralInformations
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
      editGeneralInfo: false,
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
    toogleEditGeneralInfo: function(value){
        console.log('toogleEditGeneralInfo:', value)
        this.editGeneralInfo=value
    }
  },
};
</script>
