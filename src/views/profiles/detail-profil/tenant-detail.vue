<template>
  <div>
    <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
      <div class="card-indicator bg-success"></div>
      <div class="card-body">
        <div
          class="
            bg-deep-blue
            text-white
            display-4
            card-icon-wrapper
            rounded-circle
          "
        >
          <img src="@/assets/icons/home-a.png" height="50" width="50" />
        </div>
        <h3 class="heading-6 mt-4 mb-4">Locataire</h3>
        <p class="card-text mb-4">
          Nous vous aidons à faire un meilleur suivi de vos contrats de bails...
        </p>
        <a
          href="javascript:void(0);"
          class="btn-block btn btn-primary mt-1"
          @click="editTenant"
          title="Editer mon profil locataire"
        >
                   <span>{{(getProfiles && !getProfiles.tenant) ? 'Créer mon profil' : 'Modifier mon profil' }}</span>

        </a>
      </div>
    </div>
    <div class="card card-box mb-5" v-if="getProfiles && getProfiles.tenant && !editingTenant">
      <div class="card-indicator bg-success"></div>
      <div class="card-body px-4 py-3">
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° TELEPHONE</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.tenant.phone_number
          }}</span>
        </div>

        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">PROFESSION</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.tenant.profession
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° IFU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="numero_ifu">{{
            getProfiles.tenant.numero_ifu
          }}</span>$
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">CONTACT ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_ice_contact">{{
            getProfiles.tenant.ice_contact
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° TELEPHONE ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_ice_number"
            >+{{ getProfiles.tenant.ice_number }}</span
          >
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">RELATION ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_relation">{{
            getProfiles.tenant.ice_relation
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <div class="pl-2">
            <font-awesome-icon class="text-danger" icon="question-circle" />
          </div>
          <div class="text-center">
            <span class="d-block">ECU: En cas d'urgence</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-box mb-5" v-if="editingTenant">
      <div class="card-indicator bg-success"></div>
      <div class="card-body px-4 py-3">
        <form>
          <div class="row">
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
                  v-model="tenant.phone_number"
                />
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="PROFESSION" label-for="profession">
                <span class="invalid-feedback d-block">{{
                  errors.professionMsg
                }}</span>
                <b-form-input
                  id="profession"
                  trim
                  v-model="tenant.profession"
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
                  v-model="tenant.numero_ifu"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="PERSONNE A CONTACTER ECU"
                label-for="ice_contact"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_contactMsg"
                  >{{ errors.ice_contactMsg }}</span
                >
                <b-form-input
                  id="ice_contact-2"
                  trim
                  v-model="tenant.ice_contact"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="TELEPHONE ECU" label-for="ice_number">
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_numberMsg"
                  >{{ errors.ice_numberMsg }}</span
                >
                <vue-phone-number-input
                  id="ice_number"
                  default-country-code="BJ"
                  :translations="translations"
                  :only-countries="onlyCountries"
                  v-model="tenant.ice_number"
                />
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="LIEN DE PARENTE ECU"
                label-for="ice_relation"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_relationMsg"
                  >{{ errors.ice_relationMsg }}</span
                >
                <autocomplete-input
                  class="form-input"
                  v-model="tenant.ice_relation"
                  :list="iceRelation"
                  :filter-by-query="true"
                ></autocomplete-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <alert
                v-if="errors.tenantMsg"
                variant="danger"
                v-bind:msg="errors.tenantMsg"
                icon="bell"
              ></alert>
            </div>
          </div>
          <div class="align-box-row">
            <div class="pl-2">
              <font-awesome-icon icon="question-circle" />
            </div>
            <div class="text-center">
              <span class="d-block">ECU: En cas d'urgence</span>
            </div>
          </div>

           <div style="display:flex; flex-direction:row;"> 
            <a
            href="javascript:void(0);"
            class="btn-block btn btn-primary m-1"
            title="Save Lessor"
            @click="saveTenant"
          >
            <span>Sauvegarder</span>
          </a>
          <a
            href="javascript:void(0);"
            class="btn-block btn btn-danger m-1"
            title="Save Lessor"
            @click="editingTenant = false"
          >
            <span>Annuler</span>
          </a>
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
  name: "tenant-detail",
  // props: { tenant: Object },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    alert,
    Datepicker,
  },
  data() {
    return {
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
      editingTenant: false,
      errors: {},
      tenant: {
        id: null,
        profession: null,
        ice_contact: null,
        ice_number: null,
        ice_relation: null,
        phone_number: null,
        numero_ifu: null,
        profile_type: 'tenant',
      },
    };
  },
  computed: {
    ...mapGetters("user", ["getProfiles"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("general", ["iceRelation"]),
  },
  methods: {
    ...mapActions("user", ["createUserProfil", "updateUserProfil"]),

    editTenant(e) {
      this.editingTenant = true;
      if (this.getProfiles && this.getProfiles.tenant) {
        this.tenant = {...this.getProfiles.tenant, profile_type: 'tenant',};
      }
    },

    onTenantActionSucess(res) {
      // let tenant = res.payload;
      // let profiles = {
      //   tenant: tenant,
      //   lessor: this.lessorProfile,
      //   real_estate: this.realEstateProfile,
      // };

      // this.setProfiles(profiles);
      // this.$forceUpdate();
            this.editingTenant = false;

    },
    onTenantActionFailure(err) {
      this.errors.tenantMsg = err.response.data.message;
            this.editingTenant = true;
    },

    async saveTenant() {
      this.errors = {};
      this.errors.phone_numberMsg = !this.tenant.phone_number
        ? "Veuillez renseigner votre n° téléphone"
        : null;
      this.errors.professionMsg = !this.tenant.profession
        ? "Veuillez renseigner votre profession"
        : null;
      this.errors.ice_contactMsg = !this.tenant.ice_contact
        ? "Veuillez renseigner une personne à contacter ECU"
        : null;
      this.errors.ice_numberMsg = !this.tenant.ice_number
        ? "Veuillez renseigner le numéro de la personne à contacter ECU"
        : null;
      this.errors.ice_relationMsg = !this.tenant.ice_relation
        ? "Veuillez renseigner votre lien de parenté"
        : null;
      this.errors.numero_ifuMsg = !this.tenant.numero_ifu
        ? "Veuillez renseigner votre N° IFU"
        : null;

      //return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        console.log(this.errors);
        vm.editingTenant = true;
        return;
      }

      if (this.tenant.id && this.tenant.id > 0) {
        await this.updateUserProfil({...this.tenant, profile_type: 'tenant'})
          .then((res) => this.onTenantActionSucess(res))
          .catch((err) => this.onTenantActionFailure(err));
      } else {
        await this.createUserProfil(this.tenant)
          .then((res) => this.onTenantActionSucess(res))
          .catch((err) => this.onTenantActionFailure(err));
      }
    },
  },
};
</script>

<style>
</style>

