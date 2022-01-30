<template>
  <div>
    <PageTitle
      heading="Mes biens"
      subheading="Ajoutez vos biens, mettez les en location et percevez vos loyer..."
    />
    <!--<search-contrat :immeubles="immeubles" @search-contrat="searchContract"></search-contrat>-->
    <div class="row" >
          <div class="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xl-6">
              <input type="text" class="form-control" placeholder="Rechercher dans mes immeubles" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <font-awesome-icon icon="search"/>
                </span>
              </div>
          </div>
          <div class="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xl-6">
              <input type="text" class="form-control" placeholder="Rechercher dans mes appartements" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <font-awesome-icon icon="search"/>
                </span>
              </div>
          </div>
          
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
        <div class="card card-box mb-5">
          <div class="card-header">
            <div class="card-header--title">

              <b>Mes immeubles ({{filteredImmeuble.length}}/{{immeubles.length}})</b>
            </div>
            <div class="card-header--actions">
              <b-button variant="primary" @click="addImmeuble">
                <font-awesome-icon icon="plus" class="mr-2" />
                Ajouter immeuble
              </b-button>
            </div>
        
             
          </div>
          <div class="card-body p-0">
            <div class="card-body">
            <div class="row mt-2">
                    
                      <div class="col-6 col-md-2">
                            <b class="font-size-xm">Rérérence</b>
                      </div>
                      <div class="col-6 col-md-5">
                              <b class="font-size-xm">Noms / Adresse</b>
                      </div>
                      <div class="col-6 col-md-3 text-right">
                              <b class="font-size-xm ">Jour facture</b>
                      </div>
                      <div class="col-6 col-md-2 text-right">
                          <b class="font-size-xm">Actions</b>
                      </div>
                    </div>
              </div>
              <!-- -->
            <ul
                class="list-group list-group-flush"
                v-if="immeubles.length > 0"
              >
                    <building-detail
                      v-for="(item, index) in filteredImmeuble"
                      :immeuble_id="item.immeuble_id"
                      :title="item.intitule"
                      :reference="item.ref_immeuble"
                      :city="item.ville"
                      :adresse="item.adresse"
                      :jour-emission-facture="item.jour_emission_facture"
                      :jour-valeur-facture="item.jour_valeur_facture"
                      :isActive="item.isActive"
                      :index="index"
                      :key="item.id"
                      :class="{ 'slack-bg': item.isActive }"
                      @click.native="selectBuilding(item, index)"
                      @mouseover.native="hover = true"
                      @mouseleave.native="hover = false"
                      @edit-immeuble="editImmeuble(item)"
                    ></building-detail>
                  </ul>
          </div>
          <div class="card-footer">
               <t-pagination 
                        
                        :activePage="immeubleActivePage" 
                        :data-length="immeubles.length" 
                        :nb-item-per-page="nbImmeublePerPage" 
                        @set-active-page="setImmeubleActivePage"
                        >
                    </t-pagination>
          </div>
        </div>
      </div>
      <div v-if="immeubles.length > 0" class="col-lg-4 col-md-4 col-sm-12 col-xl-6">
        <div class="card card-box mb-5">
          <div class="card-header bg-light">
            <div class="card-header--title">
              <b>Appartements de: {{selectedImmeuble.intitule != null ?selectedImmeuble.intitule : '' }}
                ({{paginatedAppartments.length}}/{{selectedImmeuble.appartements.length}})
              </b>
            </div>
            <div class="card-header--actions">
              <b-button variant="primary" @click="addAppartement">
                <font-awesome-icon icon="plus" class="mr-2" />
                Ajouter Appartement
              </b-button>
            </div>
          </div>
          <div class="card-body pb-1">
            <ul class="list-group list-group-flash">
              <appartment
                v-for="(item, index) in paginatedAppartments"
                :dependances="getDependencies(item)"
                :id="item.id"
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
          <div class="card-footer">
            <t-pagination 
                
                  :activePage="appartementActivePage" 
                  :data-length="selectedImmeuble.appartements.length" 
                  :nb-item-per-page="nbAppartmentPerPage" 
                  @set-active-page="setAppartementActivePage"></t-pagination>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="clonerAppartment" title="Cloner appartement" centered>
      <div class="w-100 mb-4">
        <div class="d-flex flex-wrap justify-content-between mb-2">
          <small class="line-height-xs text-uppercase text-muted"
            ><h5 class="pt-1 pb-1">
              <a href="javascript:void(0)" v-if="selectedImmeuble"
                >#{{selectedAppartement.intitule }}/{{ selectedImmeuble.intitule }}</a
              >
            </h5></small
          >
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-unstyled card-columns" v-if="selectedAppartement">
              <li v-for="dep in selectedAppartement.structures" :key="dep.id">
                <font-awesome-icon icon="check-square" class="mr-2" />0{{
                  dep.nbre
                }}
                {{ dep.typedependence.libelle }}
              </li>
            </ul>
            <p>
              <font-awesome-icon icon="comments" /><span class="ml-2"
                >{{ selectedAppartement.autre_description }}...</span
              >
            </p>
          </div>
        </div>
        <div class="divider mt-3 blue-divider mb-3"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                id="nbAppartmentToClone"
                placeholder="Nombre à cloner"
                min="1"
                max="10"
                v-model="nbAppartmentToClone"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                id="nbEtageDest"
                placeholder="N° Etage"
                min="0"
                max="99"
                v-model="nbEtageDest"
              />
            </div>
          </div>
        </div>
      </div>
      <div slot="modal-footer">
        <b-button
          variant="warning"
          class="btn-link-dark mr-1"
          @click="$bvModal.hide('clonerAppartment')"
          >
          <font-awesome-icon icon="undo" class="mr-2" />
          Annuler</b-button
        >
        <b-button variant="primary" @click="clonerAppartment"><font-awesome-icon icon="clone" class="mr-2" />Cloner</b-button>
      </div>
    </b-modal>

    <b-modal id="modalImmeuble" body-class="p-0" size="lg" centered>
            <div slot="modal-header">
                <h3>Edition Immeuble</h3>
            </div>
            <div class="row no-gutters">

                <div class="col-lg-7">
                    <div class="p-5">
                      <form v-if="immeuble">
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <label for="intitule"
                              >Jour émission facture:
                              <b>
                                <span v-if="immeuble.jour_emission_facture < 9">0</span
                                >{{ immeuble.jour_emission_facture }}
                                <small>du mois. </small></b
                              ></label
                            >
                            <vue-slider
                              ref="slider"
                              v-model="immeuble.jour_emission_facture"
                              :value="immeuble.jour_emission_facture"
                              :min="1"
                              :max="30"
                            ></vue-slider>
                          </div>
                          <div class="form-group col-md-12">
                            <label for="intitule"
                              >Jour valeur facture:
                              <b>
                                <span v-if="immeuble.jour_valeur_facture < 9">0</span
                                >{{ immeuble.jour_valeur_facture }}
                                <small>du mois. </small></b
                              ></label
                            >
                            <vue-slider
                              ref="slider"
                              v-model="immeuble.jour_valeur_facture"
                              :value="immeuble.jour_valeur_facture"
                              :min="1"
                              :max="30"
                            ></vue-slider>
                          </div>
                          <div class="form-group col-md-12"></div>
                          <div class="form-group col-md-12">
                            <label for="intitule">Référence municipale</label>
                            <input
                              type="text"
                              class="form-control"
                              id="ref_immeuble"
                              placeholder="Référence municipale"
                              trim
                              v-model="immeuble.ref_immeuble"
                            />
                            <label for="intitule">Nom</label>
                            <input
                              type="text"
                              class="form-control"
                              id="intitule"
                              placeholder="Nom"
                              trim
                              v-model="immeuble.intitule"
                            />

                            <label for="pays">Pays <span class="required">*</span></label>

                            <b-form-select
                              v-model="immeuble.pays"
                              id="pays"
                              text-field="label"
                              value-field="id"
                              :options="countries"
                            ></b-form-select>
                            <span class="invalid-feedback d-block" v-if="errors.paysMsg">{{
                              errors.paysMsg
                            }}</span>

                            <!-- <label for="pays">Pays <span class="required">*</span></label>
                                                  <input type="text" class="form-control" id="pays" placeholder="Pays" trim v-model="immeuble.pays">
                                                  <span  class="invalid-feedback d-block" v-if="errors.paysMsg" >{{errors.paysMsg}}</span > -->
                            <label for="ville">Ville <span class="required">*</span></label>
                            <input
                              type="text"
                              class="form-control"
                              id="ville"
                              placeholder="Ville"
                              trim
                              v-model="immeuble.ville"
                            />
                            <span class="invalid-feedback d-block" v-if="errors.villeMsg">{{
                              errors.villeMsg
                            }}</span>
                            <label for="adresse">Adresse <span class="required">*</span></label>
                            <input
                              type="text"
                              class="form-control"
                              id="adresse"
                              placeholder="Quartier & maison de préférence"
                              trim
                              v-model="immeuble.adresse"
                            />
                            <span class="invalid-feedback d-block" v-if="errors.adresseMsg">{{
                              errors.adresseMsg
                            }}</span>

                            <!--  <label for="ville">Latitude</label>
                                                  <input type="text" class="form-control" id="lat" placeholder="Latitude" v-model="immeuble.latitude">
                                                  <label for="quartier">Longitude</label>
                                                  <input type="text" class="form-control" id="lng" placeholder="Longitude" v-model="immeuble.longitude">
                                                  <GmapAutocomplete @place_changed='setPlace'  class="form-control" />-->
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
                <div class="col-lg-5">
                    <GmapMap
                      v-bind="$attrs"
                      :center="center"
                      :zoom="12"
                      style="width: 100% height: 100%"
                    >
                    </GmapMap>
                </div>
            </div>
            <div slot="modal-footer">
                <b-button variant="warning"  @click="$bvModal.hide('modalImmeuble')" class="mr-1">Annuler</b-button>
                <b-button variant="first" class="ml-auto" @click="saveImmeuble">Enregistrer</b-button>
            </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vueSlider from 'vue-slider-component'
import paginate, { alert } from '@/components/shared/'
import BuildingDetail from './BuildingDetail.vue'
import Appartment from './Appartment.vue'
import BuildingForm from './BuildingForm.vue'
import { paginator } from '@/utils/index'
import { mixin } from '@/mixin/mixin'
library.add(fas)

export default {
  components: {
    // VuePerfectScrollbar,
    vueSlider,
    'font-awesome-icon': FontAwesomeIcon,
    'building-detail': BuildingDetail,
     appartment: Appartment,
    't-pagination': paginate,
    alert: alert
  },
  data: function () {
    return {
      gettingLocation: false,
      componentKey: 0,
      errors: {},
      currentPlace: null,
      perPage: 4,
      paginationLength: 3,
      selectedPage: 1,
      immeubleActivePage: 1,
      appartementActivePage:1,
      nbAppartmentPerPage: 2,
      nbImmeublePerPage: 5,
      filteredImmeuble: [],
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
      onlyCountries: ['BJ', 'TG', 'CI', 'NE', 'NG', 'CM', 'BF', 'ML', 'FR'],
      countries: [],
      center: null,
      paginatedAppartments: [],
      selectedAppartement: {},
      nbAppartmentToClone: null,
      nbEtageDest: null
    }
  },
  computed: {
    ...mapGetters('user', [
      'getProfiles',
      'haveTenantProfile',
      'haveLessorProfile',
      'haveRealEstateProfile',
      'tenantProfile',
      'lessorProfile',
      'realEstateProfile'
    ]),
    ...mapGetters({
      immeubles: ['properties/immeubles'],
      buildingApparts: ['properties/currentAppartments'],
      typedependances: 'properties/immeubles'
    }),
    ...mapState({
      api_errors: (state) => state.properties.errors,
      errorOccured: (state) => state.properties.errorOccured,
      selectedImmeuble: (state) => state.properties.selectedImmeuble
    }),
    isVisibleImmeublePaginator: (state) => state.properties.immeubles && state.properties.immeubles.length > 0,
    isVisibleAppartementPaginator: (state) => state.properties.selectedImmeuble && state.properties.selectedImmeuble.appartements > 0
  },
  created () {
    this.countries = mixin.methods.getAllCountry(this.onlyCountries)
  },
  mounted () {
    this.locateMe()
    this.getImmeubles()
 
  },
  watch: {
    selectedImmeuble: function (newImmeuble, oldImmeuble) {
      if (newImmeuble === undefined || this.immeubles.length === 0) {
        return
      }
      this.setAppartementActivePage(1)
    },
    center: function (newCenter, oldCenter) {
      this.$store.dispatch('properties/reverseGeocoding', newCenter)
    }
  },
  methods: {
    ...mapActions('properties', [
      'createImmeuble',
      'updateImmeuble',
      'reverseGeocoding'
    ]),
    async getLocation () {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(
            new Error(
              "La géolocalisation n'est pas disponible dans votre navigator."
            )
          )
        }
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos)
          },
          (err) => {
            reject(err)
          }
        )
      })
    },
    async locateMe () {
      this.gettingLocation = true
      try {
        this.gettingLocation = false
        const location = await this.getLocation()
        this.center = {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
      } catch (e) {
        this.gettingLocation = false
        this.$toast.open({
          message: e.message,
          type: 'error',
          duration: 3000,
          pauseOnHover: true
        })
      }
    },
    /**
     * Retourne la surface totale habitable d'un appartement
     */
    surfaceTotale: function (appartement) {
      return appartement.structures.reduce(
        (accumulateur, item) =>
          accumulateur + parseFloat(item.superficie) * parseFloat(item.nbre),
        0
      )
    },
    getDependencies: function (appartment) {
      let dependencies = appartment.structures.map(
        (dep) =>  `0 ${dep.nbre} ${dep.typedependence.libelle}` 
      )
      return dependencies
    },
    setImmeubleActivePage: function(numPage){
        const paginationObject = paginator(this.immeubles, numPage, this.nbImmeublePerPage)
        this.filteredImmeuble = paginationObject.data
        this.immeubleActivePage = numPage
        this.selectBuilding(this.filteredImmeuble[0], 0)
    },
    setAppartementActivePage: function(numPage){
        if(!this.selectedImmeuble || !this.selectedImmeuble.appartements){
          return
        }
        const paginationObject = paginator(this.selectedImmeuble.appartements, numPage, this.nbAppartmentPerPage)
        this.paginatedAppartments= paginationObject.data
        this.appartementActivePage = numPage
    },
    selectBuilding: function (item, index) {
      if (this.filteredImmeuble.length === 0 || item === undefined) {
        return
      }
      this.immeuble = item
      this.filteredImmeuble.forEach((el) => (el.isActive = false))
      this.filteredImmeuble[index].isActive = true
      this.$store.commit('properties/SELECTED_IMMEUBLE', item)
      this.setAppartementActivePage(1)
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
      this.$bvModal.show('modalImmeuble')
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
      this.$bvModal.show('modalImmeuble')
    },
    addAppartement: function () {
      this.$router.push({ name: 'EditAppartment' })
    },
    saveImmeuble: async function () {
      this.errors = {}
      this.errors.paysMsg = !this.immeuble.pays
        ? 'Veuillez renseigner le pays'
        : null
      this.errors.villeMsg = !this.immeuble.ville
        ? 'Veuillez renseigner la ville'
        : null
      this.errors.adresseMsg = !this.immeuble.adresse
        ? 'Veuillez renseigner une adresse'
        : null

      // return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        this.$forceUpdate()
        return
      }
      if (!this.immeuble.intitule || this.immeuble.intitule.trim() === '') { delete this.immeuble.intitule }

      if (this.getProfiles.real_estate) {
        this.immeuble.realestate_id = this.getProfiles.real_estate.id
      } else {
        this.immeuble.proprietaire_id = this.getProfiles.lessor.id
      }

      if (this.immeuble.id && this.immeuble.id > 0) {
        this.immeuble = await this.updateImmeuble(this.immeuble)
      } else {
        this.immeuble = await this.createImmeuble(this.immeuble)
        this.selectBuilding(this.immeuble, 0)
      }
      this.$bvModal.hide('modalImmeuble')
    },
    editAppartment: function (item) {
      this.$router.push({
        name: 'EditAppartment',
        params: {
          selectedImmeuble: this.selectedImmeuble,
          editingAppartment: item
        }
      })
    },
    initClonerAppartment: function (item) {
      this.selectedAppartement = item
      this.$bvModal.show('clonerAppartment')
    },
    clonerAppartment: function () {
      if (this.nbAppartmentToClone === null || this.nbAppartmentToClone === 0) {
        this.$toast.open({
          message: 'Vous devez indiquer un nombre à cloner.',
          type: 'error',
          duration: 3000,
          pauseOnHover: true
        })
        return
      }
      let params = {
        nbre: this.nbAppartmentToClone,
        appartement_id: this.selectedAppartement.id,
        immeuble_id: this.selectedImmeuble.id,
        level: this.nbEtageDest == null ? 0 : this.nbEtageDest
      }
      this.$bvModal.hide('clonerAppartment')
      this.$store
        .dispatch('properties/clonerAppartement', params)
        .then((res) => {
          if (res.status === 200) {
            let appartements = res.data
            this.$store.commit(
              'properties/ADD_APPARTEMENT',
              appartements.payload.appartements
            )
            this.paginatedAppartments = []
            this.buildingApparts = this.selectedImmeuble.appartements
            this.setAppartementActivePage(1)
          }
        })
        .catch((errors) => {
          this.$store.commit('properties/ERROR_ADD', {
            key: 'clonerAppartement',
            message: errors.message
          })
        })
    },
    getImmeubles: async function(){
      await this.$store.dispatch('properties/getImmeubles')
      this.setImmeubleActivePage(1)
      //this.setAppartementActivePage(1)
    }
  }
}
</script>
