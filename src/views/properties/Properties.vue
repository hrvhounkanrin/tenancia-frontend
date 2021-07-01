<template>
    <div>
        <PageTitle heading="Mes biens"
                   subheading="Ajoutez vos biens, mettez les en location et percevez vos loyer..."/>
        <div class="bg-vicious-stance pt-5 pl-5 pr-5 mb-5 rounded">

            <div class="row">
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">{{componentKey}}</b>
                                        <span class="text-black-50">Maisons & Immeubles</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">23</b>
                                        <span class="text-black-50">Appartements</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-warning"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">16</b>
                                        <span class="text-black-50">Contrats en cours</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="newspaper" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">635 0000 XOF</b>
                                        <span class="text-black-50">De loyer mensuel</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
                <div class="input-group">
                    <input type="search" class="form-control" placeholder="Rechercher..." />
                    <div class="input-group-append">
                        <b-button variant="primary" class="border-0">
                            <font-awesome-icon icon="search" />
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
              <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
            </div>
        </div>
         <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <small>Inventaire</small>
                            <b>Immeubles & Maisons</b>
                        </div>
                        <div class="card-header--actions">
                            <b-button variant="primary"  @click="addImmeuble">
                                    <font-awesome-icon icon="plus" class="mr-2" />
                                    Ajouter une entité
                            </b-button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12 col-xl-12">
                                <div class="card card-box mb-5">
                                    <ul class="list-group list-group-flush" v-if="immeubles.length>0">
                                          <building
                                            v-for="(item, index) in immeubles"
                                            :immeuble_id="item.immeuble_id"
                                            :title="item.intitule"
                                            :reference="item.ref_immeuble"
                                            :city="item.ville"
                                            :adresse="item.adresse"
                                            :jour_emission_facture="item.jour_emission_facture"
                                            :jour_valeur_facture="item.jour_valeur_facture"
                                            :isActive="item.isActive"
                                            :index="index"
                                            :key="item.id"
                                            :class="{ 'slack-bg': item.isActive }"
                                            @click.native="selectBuilding(item, index)"
                                            @mouseover.native="hover = true"
                                            @mouseleave.native="hover = false"
                                            @edit-immeuble="editImmeuble(item)"
                                        ></building>
                                    </ul>
                                </div>
                            </div>

                     </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Inventaires</small>
                            <b>Appartements & Chambres</b>
                        </div>
                        <div class="card-header--actions">

                            <router-link  class="btn btn-primary" :to="{ name: 'EditAppartment', params: { selectedImmeuble: immeuble }}">
                                  <font-awesome-icon icon="home" class="mr-2" />
                            Ajouter
                            </router-link>

                        </div>
                    </div>
                    <div class="card-body pb-1">
                        <ul class="list-group list-group-flash">
                            <appartment v-for="(item, index) in paginatedAppartments"
                            :dependances="getDependencies(item)"
                            :index="index"
                            :intitule="item.intitule"
                            :statut="item.statut"
                            :autre_description="item.autre_description"
                            :surfaceTotale="surfaceTotale(item)"
                            :key="index"
                            @init-cloner="initClonerAppartment(item)"
                            @edit-appartment="editAppartment(item)"
                            />
                        </ul>
                    </div>

                    <div class="divider mt-3"></div>
                    <div class="text-center py-4">
                       <!--paginate component -->
                       <t-pagination
                            :paginationLength="getPageCount()"
                            :perPage="perPage"
                            :selected="selectedPage"
                            @select-page="paginate"
                            @next-page="nextPage"
                            @previous-page="previousPage"
                            ></t-pagination>
                    </div>
                </div>
            </div>
        </div>

        <bulding-form :id="'buildingForm'" :hide-footer="false" :hide-header="false" :size="'lg'"
         @hide-modal="$bvModal.hide('buildingForm')" @save-data="saveImmeuble">
            <template #left-img>
                <GmapMap v-bind="$attrs"
                :center="{lat:immeuble.latitude, lng:immeuble.longitude}"
                :zoom="7"
                style="width:100%; height: 100%">
                </GmapMap>
            </template>
            <template #modal-content>
                <form v-if="immeuble">
                            <div class="form-row" >
                              <div class="form-group col-md-12">
                                  <label for="intitule">Jour émission facture: <b> <span v-if="immeuble.jour_emission_facture < 9">0</span>{{ immeuble.jour_emission_facture }}  <small>du mois. </small></b></label>
                                    <vue-slider ref="slider" v-model="immeuble.jour_emission_facture" :value="immeuble.jour_emission_facture" :min="1" :max="30"></vue-slider>
                                </div>
                                <div class="form-group col-md-12">
                                  <label for="intitule">Jour valeur facture: <b> <span v-if="immeuble.jour_valeur_facture < 9">0</span>{{ immeuble.jour_valeur_facture }}  <small>du mois. </small></b></label>
                                    <vue-slider ref="slider" v-model="immeuble.jour_valeur_facture" :value="immeuble.jour_valeur_facture" :min="1" :max="30"></vue-slider>
                                </div>
                                <div class="form-group col-md-12">

                                </div>
                                <div class="form-group col-md-12">
                                    <label for="intitule">Référence municipale</label>
                                    <input type="text" class="form-control" id="ref_immeuble" placeholder="Référence municipale"  trim v-model="immeuble.ref_immeuble">
                                    <label for="intitule">Nom</label>
                                    <input type="text" class="form-control" id="intitule" placeholder="Nom"  trim v-model="immeuble.intitule">
                                    <label for="adresse">Adresse <span class="required">*</span></label>
                                    <input type="text" class="form-control" id="adresse" placeholder="Quartier & maison de préférence" trim v-model="immeuble.adresse">
                                    <span  class="invalid-feedback d-block" v-if="errors.adresseMsg" >{{errors.adresseMsg}}</span>

                                    <label for="pays">Pays <span class="required">*</span></label>
                                    <input type="text" class="form-control" id="pays" placeholder="Pays" trim v-model="immeuble.pays">
                                    <span  class="invalid-feedback d-block" v-if="errors.paysMsg" >{{errors.paysMsg}}</span >
                                    <label for="ville">Ville <span class="required">*</span></label>
                                    <input type="text" class="form-control" id="ville" placeholder="Ville" trim v-model="immeuble.ville">
                                    <span  class="invalid-feedback d-block" v-if="errors.villeMsg" >{{errors.villeMsg}}</span >

                                  <label for="ville">Latitude</label>
                                    <input type="text" class="form-control" id="lat" placeholder="Latitude" v-model="immeuble.latitude">
                                    <label for="quartier">Longitude</label>
                                    <input type="text" class="form-control" id="lng" placeholder="Longitude" v-model="immeuble.longitude">
                                    <GmapAutocomplete @place_changed='setPlace'  class="form-control" />
                                </div>

                            </div>
                </form>
            </template>
        </bulding-form>

        <b-modal id="clonerAppartment" title="Cloner appartement" centered>
            <div class="w-100 mb-4">
            <div class="d-flex flex-wrap justify-content-between mb-2">
                <small class="line-height-xs text-uppercase text-muted"><h5 class="pt-1 pb-1"><a href="javascript:void(0);" v-if="selectedImmeuble">#{{selectedImmeuble.intitule}}</a></h5></small>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <ul class="list-unstyled card-columns" v-if="selectedAppartement">
                        <li v-for="(dep, index) in selectedAppartement.structures" :key="dep.id"><font-awesome-icon icon="check-square" class="mr-2"/>0{{dep.nbre}}  {{ dep.typedependence.libelle }}</li>
                    </ul>
                    <p><font-awesome-icon icon="comments"/><span class="ml-2">{{selectedAppartement.autre_description}}...</span></p>
                </div>
            </div>
            <div class="divider mt-3 blue-divider mb-3"></div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                      <input type="number" class="form-control" id="nbAppartmentToClone" placeholder="Nombre à cloner" min="1" max="10" v-model="nbAppartmentToClone">
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                      <input type="number" class="form-control" id="nbEtageDest" placeholder="N° Etage" min="0" max="99" v-model="nbEtageDest">
                    </div>
                </div>
            </div>

          </div>
          <div slot="modal-footer">
              <b-button variant="link" class="btn-link-dark" @click="$bvModal.hide('clonerAppartment')">Annuler</b-button>
              <b-button variant="primary" @click="clonerAppartment">Cloner</b-button>
          </div>
        </b-modal>

    </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vueSlider from 'vue-slider-component'
import paginate, { alert } from '@/components/shared/'
import Building from './Building.vue'
import Appartment from './Appartment.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import BuildingForm from './BuildingForm.vue'

import {
  faChevronRight,
  faPlus,
  faEye,
  faArrowUp,
  faNewspaper,
  faLightbulb,
  faUser,
  faEllipsisH,
  faChevronLeft,
  faArrowDown,
  faFileAudio,
  faFileVideo,
  faFileExcel,
  faComments,
  faBalanceScale,
  faCarBattery,
  faBinoculars,
  faHourglass,
  faCheckSquare,
  faEdit,
  faFileWord,
  faUnlock,
  faClone,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import {
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faChevronRight,
  faPlus,
  faEye,
  faArrowUp,
  faNewspaper,
  faLightbulb,
  faUser,
  faEllipsisH,
  faChevronLeft,
  faArrowDown,
  faPinterest,
  faFileAudio,
  faFileVideo,
  faFileExcel,
  faComments,
  faBalanceScale,
  faCarBattery,
  faBinoculars,
  faHourglass,
  faCheckSquare,
  faEdit,
  faFileWord,
  faUnlock,
  faClone,
  faHome
)
export default {
  components: {
    VuePerfectScrollbar,
    vueSlider,
    'font-awesome-icon': FontAwesomeIcon,
    'building': Building,
    'appartment': Appartment,
    't-pagination': paginate,
    'bulding-form': BuildingForm,
    'alert': alert
  },
  data: function () {
    return {
      componentKey: 0,
      errors: {},
      currentPlace: null,
      perPage: 4,
      paginationLength: 3,
      selectedPage: 1,
      buildingApparts: [],
      immeuble: {
        immeuble_id: null,
        title: null,
        reference: null,
        adresse: null,
        jour_emission_facture: '1',
        jour_valeur_facture: '5',
        isActive: false,
        latitude: 0,
        longitude: 0
      },
      properties: [],
      paginatedAppartments: [],
      selectedAppartement: {},
      nbAppartmentToClone: null,
      nbEtageDest: null
    }
  },
  computed: {
    ...mapGetters('user', ['haveTenantProfile', 'haveLessorProfile', 'haveRealEstateProfile', 'tenantProfile', 'lessorProfile', 'realEstateProfile']),
    ...mapGetters({
      immeubles: 'properties/immeubles',
      typedependances: 'properties/immeubles'
    }),
    ...mapState({
      api_errors: (state) => state.properties.errors,
      errorOccured: (state) => state.properties.errorOccured,
      selectedImmeuble: (state) => state.properties.selectedImmeuble
    })
  },
  created () {
    if (this.immeubles.length === 0) {
      this.$store.dispatch('properties/getImmeubles')
    }
    //
    // this.$store.dispatch('properties/getTypedependances')
  },
  mounted () {
    if (this.selectedImmeuble == null || this.selectedImmeuble === undefined) {
      if (this.immeubles.length > 0) {
        this.immeuble = this.immeubles[0]
      }
    } else {
      this.immeuble = this.selectedImmeuble
    }
    this.$store.commit('properties/SELECTED_IMMEUBLE', {})
    this.$store.commit('properties/SELECTED_IMMEUBLE', this.immeuble)
    this.$forceUpdate()
  },
  watch: {
    selectedImmeuble: function (newImmeuble, oldImmeuble) {
      if (newImmeuble === undefined || this.immeubles.length == 0) {
        return
      }
      let index = this.immeubles.findIndex(im => im.id === newImmeuble.id)
      this.immeuble = newImmeuble
      this.buildingApparts = []

      this.selectBuilding(this.immeuble, index)
      this.$forceUpdate()
    }
  },
  methods: {
    ...mapActions('properties', ['createImmeuble', 'updateImmeuble']),
    /**
     * Retourne la surface totale habitable d'un appartement
     */
    surfaceTotale: function (appartement) {
      return appartement.structures.reduce((accumulateur, item) => accumulateur + parseFloat(item.superficie) * parseFloat(item.nbre), 0)
    },
    getPageCount: function () {
      this.paginationLength = Math.round(this.buildingApparts.length / this.perPage)
      return this.paginationLength
    },
    paginate: function (pageNum) {
      if (this.selectedImmeuble === undefined || this.selectedImmeuble === null) {
        return
      }
      let page = pageNum
      let per_page = this.perPage
      let offset = (page - 1) * per_page
      let paginatedItems = this.selectedImmeuble.appartements.slice(offset).slice(0, this.perPage)
      this.selectedPage = pageNum
      console.log('paginatedItems:', paginatedItems)
      this.paginatedAppartments = []
      this.paginatedAppartments = paginatedItems.length > 0 ? paginatedItems : []
    },
    previousPage: function () {
      if (this.selectedPage <= 1) return
      this.paginate(this.selectedPage - 1)
    },
    nextPage: function () {
      if (this.selectedPage >= this.paginationLength) return
      this.paginate(this.selectedPage + 1)
    },
    getDependencies: function (appartment) {
      let dependencies = appartment.structures.map(dep => '0' + dep.nbre + ' ' + dep.typedependence.libelle)
      // console.log(dependencies)
      return dependencies
    },
    selectBuilding: function (item, index) {
      if (this.immeubles.length === 0 || item === undefined) {
        return
      }
      this.immeuble = item
      this.immeubles.map(el => el.isActive = false)
      this.immeubles[index].isActive = true

      this.buildingApparts = item.appartements
      this.$store.commit('properties/SELECTED_IMMEUBLE', item)

      this.paginate(1)
      this.$forceUpdate()
    },
    editImmeuble: function (item) {
      this.immeuble = {
        id: item.id,
        intitule: item.intitule,
        ref_immeuble: item.ref_immeuble,
        adresse: item.adresse,
        ville: item.ville,
        pays: item.pays,
        jour_emission_facture: item.jour_emission_facture,
        jour_valeur_facture: item.jour_valeur_facture,
        latitude: item.latitude,
        longitude: item.longitude
      }
      this.$bvModal.show('buildingForm')
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.immeuble.latitude = position.coords.latitude
        this.immeuble.longitude = position.coords.longitude
      })
    },
    setPlace: function (place) {
      this.currentPlace = place
    },
    addImmeuble: function () {
      this.immeuble = {
        immeuble_id: null,
        title: null,
        reference: null,
        adresse: null,
        jour_emission_facture: '1',
        jour_valeur_facture: '5',
        isActive: false,
        latitude: 0,
        longitude: 0
      }
      this.$bvModal.show('buildingForm')
    },
    saveImmeuble: async function () {
      this.errors = {}
      this.errors.paysMsg = (!this.immeuble.pays) ? 'Veuillez renseigner le pays' : null
      this.errors.villeMsg = (!this.immeuble.ville) ? 'Veuillez renseigner la ville' : null
      this.errors.adresseMsg = (!this.immeuble.adresse) ? 'Veuillez renseigner une adresse' : null

      // return if any error property is not null
      if (!Object.values(this.errors).some(x => (x === null))) {
        this.$forceUpdate()
        return
      }
      if (!this.immeuble.intitule || this.immeuble.intitule.trim() === '') delete this.immeuble.intitule
      this.immeuble.proprietaire_id = this.lessorProfile.id
      if (this.immeuble.id && this.immeuble.id > 0) {
        await this.updateImmeuble(this.immeuble)
      } else {
        await this.createImmeuble(this.immeuble)
      }
      this.$bvModal.hide('buildingForm')
      this.$store.dispatch('properties/getImmeubles')
      this.$forceUpdate()
    },
    forceRerender () {
      this.componentKey = this.componentKey + 1
    },
    editAppartment: function (item) {
      this.$router.push({ name: 'EditAppartment', params: { selectedImmeuble: this.selectedImmeuble, editingAppartment: item } })
    },
    initClonerAppartment: function (item) {
      this.selectedAppartement = item
      this.$bvModal.show('clonerAppartment')
    },
    clonerAppartment: function () {
      let params = {
        nbre: this.nbAppartmentToClone,
        appartement_id: this.selectedAppartement.id,
        immeuble_id: this.selectedImmeuble.id,
        level: (this.nbEtageDest == null) ? 0 : this.nbEtageDest
      }
      this.$bvModal.hide('clonerAppartment')
      this.$store.dispatch('properties/clonerAppartement', params).then(res => {
        if (res.status === 200) {
          let appartements = res.data
          console.log('clonerAppartement:', appartements.payload.appartements)
          this.$store.commit('properties/ADD_APPARTEMENT', appartements.payload.appartements)
          this.paginatedAppartments = []
          this.buildingApparts = this.selectedImmeuble.appartements
          this.paginate(1)
        }
      })
        .catch(errors => {
          this.$store.commit('properties/ERROR_ADD', { key: 'clonerAppartement', message: errors.message })
        })
    }

  }
}
</script>
