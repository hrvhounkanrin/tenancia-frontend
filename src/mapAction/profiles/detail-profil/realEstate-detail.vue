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
                    <span>{{(getProfiles && !getProfiles.real_estate) ? 'Créer mon profil' : 'Modifier mon profil' }}</span>

          </a
        >
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
          <b><span class="d-block">DATE DELIVRANCE</span></b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.real_estate.date_delivrance
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

           <div style="display:flex; flex-direction:row;">
            
          <a
            href="javascript:void(0);"
            class="btn-block btn btn-danger m-1"
            title="Save Lessor"
            @click="editingRealEstate = false"
          >
            <span>Annuler</span>
          </a>
          <a
            href="javascript:void(0);"
            class="btn-block btn btn-primary m-1"
            title="Save Lessor"
            @click="saveRealEstate"
          >
            <span>{{realEstate.id && realEstate.id > 0? 'Enregistrer' : 'Créer'}}</span>
          </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { alert } from '@/components/shared/'
import { library } from '@fortawesome/fontawesome-svg-core'
import Datepicker from 'vuejs-datepicker'
import { mixin } from '@/mixin/mixin'
import moment from 'moment'
import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'lessor-detail',
  // props: { tenant: Object },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    alert,
    Datepicker
  },
  data () {
    return {
      testB: '',
      breadcrumb: [
        {
          libelle: 'Tenancia',
          link: '#'
        }
      ],
      // Start  vue-phone-number-input config
      translations: {
        countrySelectorLabel: 'Code pays',
        countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: 'Numéro de téléphone',
        example: 'Exemple :'
      },
      onlyCountries: ['BJ', 'TG', 'CI', 'NE', 'NG', 'CM', 'BF', 'ML', 'FR'],
      countries: [],
      // End  vue-phone-number-input config
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      phone: {
                country: "",
        dial_code: "",
      },
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
        num_carte_professionnel: null

      }
    }
  },
  created: function () {
    this.countries = mixin.methods.getAllCountry(this.onlyCountries)
  },
  computed: {
    ...mapGetters('user', ['getProfiles']),

    ...mapGetters('banque', ['banquesList']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('general', ['iceRelation'])
  },
  methods: {
    ...mapActions('user', ['createUserProfil', 'updateUserProfil']),
 onSelect({name, iso2, dialCode}) {
    this.phone.country= iso2
    this.phone.dial_code= dialCode
     console.log(name, iso2, dialCode);
   },
    customFormatter () {
      return moment(this.realEstate.date_delivrance).format('L').toString()
    },
    editRealEstate (e) {
      this.editingRealEstate = true
      if (this.getProfiles && this.getProfiles.real_estate) {
        this.realEstate = this.getProfiles.real_estate
      }
    },

    onRealEstateActionSucess (res) {
      this.editingRealEstate = false
    },
    onRealEstateActionFailure (err) {
      this.errors.tenantMsg = err.response.data.message
      this.editingRealEstate = true
    },

    async saveRealEstate () {
      this.errors = {}
      this.errors.raisonSocialMsg = !this.realEstate.raison_sociale
        ? "Veuillez renseigner le nom de l'agence"
        : null
      this.errors.phone_numberMsg = !this.realEstate.num_telephone
        ? 'Veuillez renseigner le numéro de téléphone'
        : null
      this.errors.adresse = !this.tenant.adresseMsg
        ? "Veuillez renseigner l'adresse de l'agence"
        : null

      // return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        vm.editingRealEstate = true
        return
      }
      if (this.realEstate.id && this.realEstate.id > 0) {
        this.realEstate.date_delivrance = moment(
          this.realEstate.date_delivrance,
          'L'
        )
          .format('YYYY-MM-DD')
          .toString()
        console.log(this.realEstate)
        await this.updateUserProfil(this.realEstate)
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err))
      } else {
        await this.createUserProfil(this.realEstate)
          .then((res) => this.onRealEstateActionSucess(res))
          .catch((err) => this.onRealEstateActionFailure(err))
      }
    }
  }
}
</script>

<style>
</style>
