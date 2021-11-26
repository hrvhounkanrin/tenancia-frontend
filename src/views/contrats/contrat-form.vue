<template>
  <div>
        <PageTitle heading="Contrat de bail"
                   subheading="Configurer votre contrat de bail avec les frais accessoires..."/>
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
                      <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
              </div>
          </div>
       <div class="row">
        <div class="col-md-6">
            <div class="card card-box mb-5">
                <div class="card-header">
                    <div class="card-header--title">
                       <b> {{title}}</b>
                    </div>
                      <div class="card-header--actions">
                        <b-badge pill variant="success">{{Number(totalBail).toLocaleString('fr-FR')}} F CFA</b-badge>
                    </div>
                </div>
                <div class="card-body">
                    <!--<VuePerfectScrollbar class="scroll-area-lg"> -->
                    <div class="row">
                            <div class="col-md-6">
                                <label for="montant_bail">Email locataire</label>
                                <vue-typeahead-bootstrap
                                        class="mb-4"
                                        v-model="filterTenantQuery"
                                        :data="retrievedTenants"
                                        :serializer="item => item.user.email"
                                        :screen-reader-text-serializer="item => `Github user ${item.user.first_name}`"
                                        highlightClass="special-highlight-class"

                                        :minMatchingChars="1"
                                        placeholder="Rechercher locataire par email"
                                        inputClass="special-input-class"
                                        @input="searchTenants"
                                        @hit="selectedTenant = $event"
                                      >
                                        <template slot="suggestion" slot-scope="{ data, htmlText }">

                                          <div class="align-box-row">
                                              <div class="mr-2">
                                                  <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                                      <div class="dot-badge"></div>
                                                      <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                                  </a>
                                              </div>
                                              <div class="flex-grow-1">
                                                  <div class="d-flex align-items-left">
                                                      <span class="font-size-lg">{{data.user.last_name +' '+data.user.first_name}}</span>
                                                  </div>
                                                  <div class="mt-2  align-items-left">
                                                    <font-awesome-icon icon="envelope" class="mr-1"/>
                                                    <span class="pr-1" v-html="htmlText"></span>
                                                  </div>
                                                  <div class="mt-2  align-items-left">
                                                    <font-awesome-icon icon="phone-alt" class="mr-1"/>
                                                    <span class="pr-1">{{data.phone_number}}</span>
                                                  </div>

                                              </div>
                                          </div>
                                        </template>
                                </vue-typeahead-bootstrap>

                              </div>
                              <div class="col-md-6">
                                  <label for="montant_bail">Appartement</label>
                                  <vue-typeahead-bootstrap
                                          class="mb-4"
                                          v-model="filterAppartmentQuery"
                                          :data="retrievedAppartments"
                                          :serializer="item => item.intitule"
                                          :screen-reader-text-serializer="item => `Github user ${item.intitule}`"
                                          highlightClass="special-highlight-class"

                                          :minMatchingChars="1"
                                          placeholder="Rechercher appartement (ex: 0-C)"
                                          inputClass="special-input-class"
                                          @input="getAppartments"
                                          @hit="selectedAppartement = $event"
                                        >
                                        <!--  @hit="selectedTenant = $event" :disabledValues="(selecteduser ? [selecteduser.login] : [])" -->
                                          <template slot="suggestion" slot-scope="{ data, htmlText }">

                                            <div class="align-box-row">
                                                <div class="mr-2">
                                                    <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                                        <div class="dot-badge"></div>
                                                        <div class="avatar-icon"><img src="@/assets/img/tenancia_logo_resume.png" alt=""></div>
                                                    </a>
                                                </div>
                                                <div class="flex-grow-1">
                                                  <div class="d-flex align-items-left">
                                                      <span class="font-size-lg">{{data.immeuble_intitule}}</span>
                                                  </div>
                                                  <div class="align-items-left">
                                                    <font-awesome-icon icon="home" class="mr-1"/>
                                                    <span class="pr-1" v-html="htmlText"></span>
                                                  </div>
                                                  <div class="align-items-left">
                                                    <font-awesome-icon icon="map-marker-alt" class="mr-1"/>
                                                    <span class="pr-1">{{data.ville}}</span>
                                                  </div>

                                              </div>
                                            </div>
                                          </template>
                                  </vue-typeahead-bootstrap>
                              </div>

                    </div>
                    <div class="row" >
                        <div class="col-md-6">
                            <div  v-if="selectedTenant">
                                    <a href="javascript:void(0);" class="card card-box mb-2 card-box-border-bottom border-first">
                              <div class="card-body">
                                  <div class="align-box-row align-items-start">
                                      <div>
                                          <div class="font-weight-bold">
                                              <small class="text-black-50 d-block mb-1 text-uppercase">Locataire</small>
                                              <span class="font-size-sm  mt-1">{{selectedTenant.user.last_name +' '+selectedTenant.user.first_name}}</span>
                                          </div>
                                          <div class="mt-2">
                                              <font-awesome-icon icon="phone-alt" class="mr-1"/>
                                              <span class="pr-1">{{selectedTenant.phone_number}}</span>
                                          </div>
                                            <div class="mt-2">
                                              <font-awesome-icon icon="envelope" class="mr-1"/>
                                              <span class="pr-1">{{selectedTenant.user.email}}</span>
                                          </div>
                                      </div>
                                      <div class="ml-auto card-hover-indicator align-self-center" @click="removeTenant">
                                          <font-awesome-icon icon="trash" class="font-size-xl danger" style="color: red;"/>
                                      </div>
                                  </div>
                              </div>
                          </a>
                            </div>
                        </div>
                        <div class="col-md-6">
                           <div  v-if="selectedAppartement">
                                 <a href="javascript:void(0);" class="card card-box mb-2 card-box-border-bottom border-first">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div>
                                                <div class="font-weight-bold">
                                                    <small class="text-black-50 d-block mb-1 text-uppercase">Appartement</small>
                                                    <span class="font-size-sm  mt-1">{{selectedAppartement.intitule}} (Immeuble: {{selectedAppartement.immeuble_intitule}})</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="map-marker-alt" class="mr-1"/>
                                                    <span class="pr-1">{{selectedAppartement.ville}}</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="user-tag" class="mr-1"/>
                                                    <span class="pr-1">{{selectedAppartement.proprietaire }}</span>
                                                </div>
                                            </div>
                                            <div class="ml-auto card-hover-indicator align-self-center" @click="removeAppartment">
                                                <font-awesome-icon icon="trash" class="font-size-xl danger" style="color: red;"/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                           </div>
                        </div>
                    </div>
                    <div class="form-row">
                          <div class="form-group col-md-3">
                            <label for="jour_emission">Jour émission facture</label>
                            <input type="number" class="form-control" id="jour_emission" min="1" max="30"
                              :class="{'is-invalid': validations.jour_emission }"  v-model="contrat.jour_emission"
                            >
                             <span v-if="validations.jour_emission" class="invalid-feedback d-block">Jour d'émission incorrect.</span>
                          </div>
                           <div class="form-group col-md-3">
                            <label for="jour_valeur">Jour valeur facture</label>
                            <input type="number" class="form-control" id="jour_valeur" min="1" max="30"
                            :class="{'is-invalid': validations.jour_valeur }"
                            v-model="contrat.jour_valeur">
                            <span v-if="validations.jour_valeur" class="invalid-feedback d-block">Jour valeur incorrect.</span>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputState">Statut contrat</label>
                            <select id="inputState" class="form-control"  v-model="contrat.statut">
                                <option value="PROPOSITION">PROPOSITION DE CONTRAT</option>
                                <option value="EN COURS">CONTRAT EN COURS</option>
                                <option value="RESILIE">CONTRAT RESILIE</option>
                                <option value="TERME">CONTRAT A TERME</option>
                            </select>

                         </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="date_signature">Date signature</label>
                            <datepicker  id="date_signature"  placeholder="Select Date" format="yyyy-MM-dd"
                                  calendar-class="datepicker datepicker-dropdown dropdown-menu is-invalid"
                                  :bootstrap-styling="true"  v-model="contrat.date_signature"
                                  :input-class="{'is-invalid': validations.date_signature }">
                            </datepicker>
                            <span v-if="validations.date_signature" class="invalid-feedback d-block">Date signature incorrect.</span>
                        </div>
                         <div class="form-group col-md-3">
                            <label for="date_effet">Date d'effet</label>
                            <datepicker id="date_effet"  placeholder="Select Date"  :input-class="{'is-invalid': validations.date_effet }"
                                format="yyyy-MM-dd" calendar-class="datepicker datepicker-dropdown dropdown-menu" :bootstrap-styling="true"
                                v-model="contrat.date_effet">
                            </datepicker>
                            <span v-if="validations.date_effet" class="invalid-feedback d-block">Date d'effet incorrect.</span>
                        </div>
                         <div class="form-group col-md-3">
                            <label for="inputState">Périodicité du loyer</label>
                            <select id="inputState" class="form-control" v-model="contrat.periodicite">
                                <option value="12">MENSUELLE</option>
                                <option value="4">TRIMESTRIELLE</option>
                                <option value="2">SEMESTRIELLE</option>
                                <option value="1">ANNUELLE</option>
                            </select>
                         </div>
                         <div class="form-group col-md-3">
                            <label for="duree">Durée (en mois)</label>
                            <input type="text" class="form-control" id="duree" v-model="contrat.duree">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="montant_bail">Montant bail</label>
                            <input type="text" class="form-control" id="montant_bail"
                              :class="{'is-invalid': validations.montant_bail }"
                              v-money="money" v-model="contrat.montant_bail">
                              <span v-if="validations.montant_bail" class="invalid-feedback d-block">Montant bail incorrect.</span>

                        </div>
                        <div class="form-group col-md-3">
                            <label for="nb_avance">Nbre d'avance</label>
                            <input type="number" class="form-control" id="nb_avance" min="0" max="9"
                              :class="{'is-invalid': validations.nb_avance }"
                            v-model="contrat.nb_avance">
                            <span v-if="validations.nb_avance" class="invalid-feedback d-block">Nbre d'avance incorrect.</span>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="nb_prepaye">Nbre de prépayé</label>
                            <input type="number" class="form-control" id="nb_prepaye" min="0" max="9"
                                :class="{'is-invalid': validations.jour_emission }"
                                v-model="contrat.nb_prepaye" @blur="infoAccessoires">
                            <span v-if="validations.nb_prepaye" class="invalid-feedback d-block">Nbre de prépayé incorrect.</span>
                        </div>
                    </div>

                     <div class="row">
                        <div class="form-group col-md-12">
                            <label for="observation">Observations</label>
                             <b-form-textarea
                                id="observation"
                                v-model="contrat.observation"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                              ></b-form-textarea>
                        </div>
                    </div>
                     <b-list-group id="contrat-accessoires" >
                        <b-list-group-item class="d-flex justify-content-between align-items-center bg-light" v-for="(item, i) in contrat.accessoires" :key="item.id">
                            <div class="w-100 ">
                                <div class="d-flex">
                                <div class="pr-1"><b>{{i+1}}</b> - {{item.libelle}}</div>
                                <div class="">{{Number(item.montant).toLocaleString('fr-FR')}} {{item.devise}} [{{(item.is_peridic)? 'PERIODIQUE': 'PONCTUEL'}}]</div>
                                <div class="ml-auto">
                                    <b-button variant="danger" size="sm" @click="removeAccessoire(item)">
                                        <font-awesome-icon icon="trash"  />
                                    </b-button>
                                </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                        </b-list-group-item>
                    </b-list-group >
                   <!--</VuePerfectScrollbar>-->
                </div>
                <div class="card-footer bg-light p-4">
                    <div class="align-box-row mt-3">
                        <div class="align-items-center">

                        </div>
                        <div class="ml-auto">
                          <router-link :to="{name: 'MyContracts'}">
                          <b-button variant="warning" class="mr-1">
                            <font-awesome-icon icon="undo" class="mr-2"/>
                            ANNULER
                          </b-button>
                          </router-link>

                          <b-button variant="primary"  @click="saveContrat" >

                              ENREGISTRER
                          </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
          <accessoire-loyer :filterValue="filterValue" 
          :notSelectedAccessories="notSelectedAccessories"
          @add-accessoire="addAccessoires"></accessoire-loyer>
        </div>

       </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { alert } from '@/components/shared/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import { VMoney } from 'v-money'
import utils from '@/utils/index'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import Datepicker from 'vuejs-datepicker'
import { debounce } from 'lodash'
import './contrat-validation'
import AccessoireLoyer from './accessoire-loyer.vue'
import Hashids from 'hashids'

library.add(fas)
const currencyMask = {
  decimal: '.',
  thousands: ' ',
  prefix: '',
  suffix: ' F CFA',
  precision: 0
}
export default {
  components: {
    'vue-typeahead-bootstrap': VueBootstrapTypeahead,
    'font-awesome-icon': FontAwesomeIcon,
    'accessoire-loyer': AccessoireLoyer,
    alert,
    VuePerfectScrollbar,
    Datepicker,
    
  },
  directives: { money: VMoney },
  data: function () {
    return {
      errors: null,
      defaultAvatar: require('@/assets/img/hero-bg/hero-1.jpg'),
      filterTenantQuery: '',
      filterAppartmentQuery: '',
      title: 'Nouveau contrat de bail',
      money: currencyMask,
      componentKey: 0,
      filterValue: '',
      selectedAccessoires: [], // liste des accessoires sélectionnées
      selectedTenant: null,
      selectedAppartement: null,
      contrat: {
        date_signature: null,
        date_effet: null,
        periodicite: 12,
        duree: 0,
        montant_bail: 0,
        nb_avance: 0,
        nb_prepaye: 0,
        statut: 'PROPOSITION',
        observation: null,
        tacite_reconduction: true,
        client_id: 0,
        appartement_id: 0,
        jour_emission: 1,
        jour_valeur: 5,
        accessoires: []
      },
      validations: {
        date_effet: false,
        date_signature: false,
        montant_bail: false,
        appartement_id: false,
        client_id: false,
        jour_emission: false,
        jour_valeur: false,
        nb_avance: false,
        nb_prepaye: false,
        tenantError: false,
        appartement_id: false,
        appartementError: false
      }
    }
  },
  watch: {
    selectedAppartement: function (newAppartement, oldAppartement) {
      if(this.editingContrat) return
      this.contrat.jour_emission = newAppartement.jour_emission_facture
      this.contrat.jour_valeur = newAppartement.jour_valeur_facture
    }
  },
  props: {
  },
  computed: {
    ...mapGetters({
      immeubles: 'properties/immeubles',
      typeAccessoires: 'contrats/typeAccessoireLoyer',
      contrats: 'contrats/contrats',
      retrievedTenants: 'contrats/retrievedTenants',
      searchTenantRequest: 'contrats/searchTenantRequest',
      retrievedAppartments: 'contrats/retrievedAppartments',
      getFreeAppartmentRequest: 'contrats/getFreeAppartmentRequest',
      editingContrat: 'contrats/getContratToUpdate'
    }),
    ...mapState({
      api_errors: (state) => state.contrats.errors
    }),
    /**
     * Retourne les types de dépendances disponibles non sélectionnés
     * dans l'appartement et qui correspondent au critère de filtre si spécifié
     * ...
     */
    notSelectedAccessories: function () {
      if (!this.contrat.accessoires) {
        return this.typeAccessoires
      }
      if (!Array.isArray(this.typeAccessoires)) return []
      let selectedId = this.contrat.accessoires.map(item => item.id)
      let allNotSelected = this.typeAccessoires.filter(item => selectedId.includes(item.id) === false)
      return (this.filterValue.trim() === '')
        ? allNotSelected
        : allNotSelected.filter(item => item.libelle.toLowerCase().startsWith(this.filterValue.toLowerCase()))
    },
    /**
     * Retourne la surface totale habitable
     */
    totalBail: function () {
      if (this.contrat === undefined || !this.contrat.accessoires || this.contrat.accessoires.length === 0) {
        return 0
      }
      let montant_bail = isNaN(this.contrat.montant_bail) ? utils.currencyToNumber(this.contrat.montant_bail) : this.contrat.montant_bail
      let totalLoyer = (montant_bail * this.contrat.nb_avance) + (montant_bail * this.contrat.nb_prepaye)
      return totalLoyer + this.contrat.accessoires.reduce((accumulateur, item) => accumulateur + utils.currencyToNumber(item.montant), 0)
    }
  },
  created () {
    this.$store.dispatch('contrats/getAccessoireLoyer')
    this.loadObjectIfEditing()
  },
  mounted () {

  },
  methods: {
    ...mapActions('contrats', ['createContrat', 'searchTenantsByEmail', 'getFreeAppartment']),
    removeTenant: function () {
      this.selectedTenant = null
    },
    removeAppartment: function () {
      this.selectedAppartement = null
    },
    searchTenants: debounce(function () {
      if (this.filterTenantQuery.trim() === '') {
        return []
      }
      let that = this
      let params = { q: this.filterTenantQuery }
      let res = this.searchTenantsByEmail(params)
      res.then(function (response) {
        console.log('searchTenants response: ', response)
        that.$store.commit('contrats/TENANTS', response.data.payload)
        return response.data.payload
      }).catch(function (error) {
        console.log('retrievedTenants error: ', error)
      })
    }, 500),
    getAppartments: debounce(function () {
      if (this.filterAppartmentQuery.trim() === '') {
        return []
      }
      let that = this
      // statut_appartement=LIBRE&query=0-C
      let params = { query: this.filterAppartmentQuery, statut_appartement: 'LIBRE' }
      let res = this.getFreeAppartment(params)
      res.then(function (response) {
        console.log('getAppartments response: ', response)
        let appartments = response.data.payload
        that.$store.commit('contrats/GETFREEAPPARTMENT', appartments)
        // appartments.map(obj=> ({ ...obj, immeuble: this.getImmeubleById(obj.immeuble) }))
        that.$store.commit('contrats/GETFREEAPPARTMENT', appartments)
        return response.data.payload
      }).catch(function (error) {
        console.log('retrieved ppartments error: ', error)
      })
    }, 500),
    addAccessoires: function (accessoire) {
      if (utils.currencyToNumber(accessoire.montant) === 0 || accessoire.montant === null) {
        this.$toast.open({
          message: 'Vous devez renseigner le montant associé.',
          type: 'error',

          pauseOnHover: true
        })
        return
      }
      this.contrat.accessoires.push(accessoire)
      this.filterValue = ''
    },
    infoAccessoires: function () {
      if (this.contrat.accessoires.length > 0) return
      this.$toast.open({
        message: 'Pour une bonne gestion vous devez ajouter les frais accessoires au contrat. Regardez dans le panneau à votre droite pour le faire...',
        type: 'info',
        duration: 6000,
        pauseOnHover: true
      })
    },
    removeAccessoire: function (accessoire) {
      let index = this.contrat.accessoires.findIndex(item => item.id === accessoire.id)
      this.contrat.accessoires.splice(index, 1)
    },
    validate: function () {
      this.validations.date_effet = this.contrat.date_effet === null
      this.validations.date_signature = this.contrat.date_signature === null
      this.validations.montant_bail = !((utils.currencyToNumber(this.contrat.montant_bail) > 0))
      this.validations.jour_emission = !((this.contrat.jour_emission !== null && this.contrat.jour_emission > 0))
      this.validations.jour_valeur = !((this.contrat.jour_valeur !== null && this.contrat.jour_valeur > 0))
      this.validations.nb_avance = this.contrat.nb_avance === null
      this.validations.nb_prepaye = this.contrat.nb_prepaye === null
      this.tenantError = this.selectedTenant === null
      this.appartementError = this.selectedAppartement === null

      if (!this.selectedTenant) {
        this.tenantError = true
        this.$toast.open({
          message: 'Vous devez ajouter un locataire. Recherchez le par son email...',
          type: 'error',
          position: 'top',
          duration: 6000,
          pauseOnHover: true
        })
      }
      if (!this.selectedAppartement) {
        this.appartementError = true
        this.$toast.open({
          message: 'Vous devez ajouter un appartement. Recherchez le par son nom (ex: 0-A)',
          type: 'error',
          position: 'top',
          duration: 6000,
          pauseOnHover: true
        })
      }
      // when no error,  the right value in validation field is false, so we check for the opposite value
      return !this.validations.date_effet &&
                !this.validations.date_signature &&
                !this.montant_bail &&
                !this.validations.jour_emission &&
                !this.validations.jour_valeur &&
                !this.validations.nb_avance &&
                !this.validations.nb_prepaye &&
                !this.tenantError &&
                !this.appartementError
    },
    saveContrat: async function () {
      console.log('this.validate():', this.validations)
      if (!this.validate()) {
        return
      }
      this.contrat.appartement_id = this.selectedAppartement.id
      this.contrat.client_id = this.selectedTenant.id
      const contratToSave = { ...this.contrat }
      contratToSave.montant_bail = utils.currencyToNumber(contratToSave.montant_bail)
      contratToSave.accessoires.map(item => item.montant = utils.currencyToNumber(item.montant))
      contratToSave.date_effet = moment(contratToSave.date_effet).format('YYYY-MM-DD').toString()
      contratToSave.date_signature = moment(contratToSave.date_signature).format('YYYY-MM-DD').toString()

      let actionToTrigger = (contratToSave && contratToSave.id > 0) ? 'contrats/updateContrat' : 'contrats/createContrat'
      this.$store.dispatch(actionToTrigger, contratToSave).then(() => {
        if (!this.api_errors.find((e) => e.key === 'createContrat') && !this.api_errors.find((e) => e.key === 'updateContrat')) {
          this.$router.push({ name: 'MyContracts' })
        }
      })
    },
    loadObjectIfEditing: async function () {
      if(!this.$route.query.ref){
        console.log('Nouveau')
        return
      }
      const contratId = this.$route.query.ref
      // I wonderce_bail
      const hashids = new Hashids()
      let id = hashids.decode(contratId)[0]

      // I wonder if it wouldn't be more safe to load object from 
      // the backend instead from the state
      this.$store.commit('contrats/CONTRATTOUPDATE', null)
      await this.$store.dispatch('contrats/getOneContrat', {id: id})
      if (!this.editingContrat) {
        return
      }

      let contratData = (({ id, 
        date_signature,
        reference_bail, 
        date_effet,
        periodicite, 
        duree, 
        montant_bail, 
        nb_avance, 
        nb_prepaye,
        observation, 
        tacite_reconduction, 
        jour_emission, 
        jour_valeur,
        statut }) => ({ id,
        date_signature,
        reference_bail,
        date_effet,
        periodicite,
        duree,
        montant_bail,
        nb_avance,
        nb_prepaye,
        observation,
        tacite_reconduction,
        jour_emission,
        jour_valeur,
        statut }))(this.editingContrat)
      // Une erreur de conversion dans v-money
      contratData.montant_bail = parseInt(contratData.montant_bail)
      let accessoires = []
      this.editingContrat.accessoires.forEach(function (item) {
        accessoires.push({
          id: item.accesoireloyer.id,
          libelle: item.accesoireloyer.libelle,
          montant: item.montant,
          is_peridic: item.is_peridic,
          devise: item.devise
        })
      })
      
      contratData.accessoires = accessoires
      this.contrat = contratData
      this.title = 'Edition contrat de bail n°: '+this.contrat.reference_bail
      this.selectedAppartement = this.editingContrat.appartement
      this.selectedTenant = this.editingContrat.client
    }
  }
}
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';

  .special-input-class{
    background-color:#0056b3 !important;
    color: white !important;
  }
  .special-highlight-class{
    font-weight: 900;
    color: #585656;
  }
</style>
