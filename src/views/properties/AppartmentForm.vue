<template>
  <div>
        <PageTitle heading="Appartement"
                   subheading="Edition appartement & dépendances..."/>
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
                        <small>Immeuble/Maison :  {{selectedImmeuble.ref_immeuble}}({{selectedImmeuble.intitule}})</small>
                        <b>Appartement</b>
                    </div>
                    <div class="card-header--actions">
                        <b-badge pill variant="success">{{surfaceTotale}}m² de surface habitable</b-badge>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-row">
            <div class="form-group col-md-6">
                <label for="intitule">Intitulé</label>
                <input type="text" class="form-control" id="intitule" placeholder="Si non renseigné, Tenancia génère" v-model="appartement.intitule">
            </div>
            <div class="form-group col-md-3">
                <label for="inputCity">Etage</label>
                <input type="number" class="form-control" id="inputCity" placeholder="0" v-model="appartement.level">
            </div>
            <div class="form-group col-md-3">
                <label for="inputState">Statut</label>
                <select id="inputState" class="form-control" v-model="appartement.statut">
                    <option value="LIBRE">LIBRE</option>
                    <option value="RESERVE">RESERVE</option>
                    <option value="OCCUPE">OCCUPE</option>
                    <option value="BIENTOT_LIBRE">BIENTOT LIBRE</option>
                </select>
            </div>
            <div class="form-group col-md-12">
                <label for="inputZip">Description</label>
                <input type="text" class="form-control" id="autre_description" v-model="appartement.autre_description">
            </div>
                    </div>
                    <b-list-group id="appartment-dependencies" >
                    <!--<VuePerfectScrollbar class="scrollbar-container scroll-area-md" v-once>-->
                        <b-list-group-item class="d-flex justify-content-between align-items-center bg-light" v-for="item in selectedDependance" :key="item.id">
                            <div class="w-100 ">
                                <div class="d-flex">
                                <div class="p-2 pr-1">0{{item.nbre}} -</div>
                                <div class="p-2">{{item.libelle}} ({{item.superficie}} m²)</div>
                                <div class="ml-auto p-2">
                                    <b-button variant="danger" size="sm" @click="removeDependance(item)">
                                        <font-awesome-icon icon="trash"  />
                                    </b-button>
                                </div>
                                </div>
                            </div>
                        </b-list-group-item>
                    <!--</VuePerfectScrollbar>-->
                    </b-list-group >
                </div>
                <div class="card-footer bg-light p-4">
                    <div class="align-box-row mt-3">
                        <div class="align-items-center">

                        </div>
                        <div class="ml-auto">
                            <b-button variant="primary" @click="saveAppartment">
                                <font-awesome-icon icon="save" class="mr-2" />
                                Enregistrer
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <small>Liste des types de dépendances-</small>
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xl-8 ">

                            </div>
                        </div>
                       <div class="card-header--actions">
                            {{filterValue}}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-2" >
                            <input type="search" class="form-control"  v-model="filterValue" />
                            <div class="input-group-append">
                                <b-button variant="primary" class="border-0">
                                    <font-awesome-icon icon="search" />
                                </b-button>
                            </div>
                        </div>
                        <b-list-group id="type-dependances-list" >
                            <VuePerfectScrollbar class="scrollbar-container scroll-area-md">
                                <b-list-group-item  class="d-flex bg-light justify-content-between align-items-center"  v-for="item in typedependances" :key="item.id">{{item.libelle}}
                                        <span class="">
                                    <div class="input-group">
                                    <input type="number" class="form-control" placeholder="Nombre (1 par défaut)" aria-label="Nombre (1 par défaut)" aria-describedby="basic-addon2"  v-model="item.nbre">
                                    <input type="number" class="form-control" placeholder="Superficie(m²)" aria-label="Superficie(m²)" aria-describedby="basic-addon2" v-model="item.superficie">
                                    <div class="input-group-append">
                                        <b-button variant="primary" @click="addDependance(item)" class="border-0"><font-awesome-icon icon="plus"/></b-button >
                                    </div>
                                    </div>
                                </span>
                                </b-list-group-item>
                            </VuePerfectScrollbar>
                        </b-list-group>

                    </div>
                    <div class="card-footer bg-light p-4">
                        <div class="align-box-row mt-3">
                            <div class="align-items-center">

                            </div>
                            <div class="ml-auto">
                                <b-button variant="primary">
                                    <font-awesome-icon icon="plus" class="mr-2" />
                                    Créer type dépendance
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { alert } from '@/components/shared/'
import { library } from '@fortawesome/fontawesome-svg-core'
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
  faTrash,
  faSave
} from '@fortawesome/free-solid-svg-icons'
import {
  faPinterest
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  faTrash,
  faSave
)
export default {
  components: {
    alert,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },
  data: function () {
    return {
      componentKey: 0,
      filterValue: '',
      selectedDependance: [],
      appartement: {
        intitule: null,
        level: null,
        autre_description: '',
        statut: 'LIBRE',
        immeuble_id: 0,
        structures: []
      }
    }
  },
  props: {
    selectedImmeuble: Object,
    editingAppartment: Object
  },
  computed: {
    ...mapGetters({
      dependances: 'properties/dependances',
      immeubles: 'properties/immeubles'
    }),
    ...mapState({
      api_errors: (state) => state.properties.errors
    }),
    /**
     * Retourne les types de dépendances disponibles non sélectionnés
     * dans l'appartement et qui correspondent au critère de filtre si spécifié
     * ...
     */
    typedependances: function () {
      if (!Array.isArray(this.dependances)) return []
      let selectedId = this.selectedDependance.map(item => item.id)
      let allNotSelected = this.dependances.filter(item => selectedId.includes(item.id) === false)
      return (this.filterValue.trim() === '')
        ? allNotSelected
        : allNotSelected.filter(item => item.libelle.toLowerCase().startsWith(this.filterValue.toLowerCase()))
    },
    /**
     * Retourne la surface totale habitable
     */
    surfaceTotale: function () {
      console.log(this.selectedDependance)
      return this.selectedDependance.reduce((accumulateur, item) => accumulateur + parseFloat(item.superficie) * parseFloat(item.nbre), 0)
    }
  },
  created () {
    console.log('selected immeuble:', this.selectedImmeuble)
    if (!this.selectedImmeuble) {
      this.$store.commit('properties/ERROR_MSG', 'Aucun élément Immeuble ou Maison sélectionné.')
      this.$router.push({ name: 'Myproperties' })
    }
    this.$store.dispatch('properties/getTypedependances')
  },
  mounted () {
    /**
     * Si appartement en édition, reconstruire le dom par rapport aux dépendances de l'appartement
     */
    if (this.editingAppartment) {
      this.appartement = this.editingAppartment
      this.editingAppartment.structures.forEach(item => {
        this.selectedDependance.push({
          ...item.typedependence,
          nbre: item.nbre,
          superficie: item.superficie
        })
      })
    }
  },
  watch: {

  },
  methods: {
    ...mapActions('properties', ['createAppartement', ]),
    addDependance: function (typeDependance) {
      console.log('typeDependance:', typeDependance)
      if (typeDependance.nbre === 0 || typeDependance.nbre === null) {
        typeDependance.nbre = 1
      }
      if (typeDependance.superficie === null) {
        typeDependance.superficie = 0
      }
      this.selectedDependance.push(typeDependance)
      this.filterValue = ''
    },
    removeDependance: function (typeDependance) {
      let index = this.selectedDependance.findIndex(item => item.id === typeDependance.id)
      this.selectedDependance.splice(index, 1)
      console.log('this.selectedDependance:', this.selectedDependance)
    },
    saveAppartment: async function () {
      this.appartement.immeuble_id = this.selectedImmeuble.id
      console.log('this.selectedImmeuble:', this.selectedImmeuble)
      let structures = []
      this.selectedDependance.forEach(function (item) {
        let dep = {
          typeDependence_id: item.id,
          nbre: item.nbre,
          superficie: item.superficie,
          appartement: 0
        }
        structures.push(dep)
      })
      this.appartement.structures = structures
      let actionToTrigger = (this.appartement && this.appartement.id > 0) ? 'properties/updateAppartement' : 'properties/createAppartement'
      this.$store.dispatch(actionToTrigger, this.appartement).then(() => {
        if (!this.api_errors.find((e) => e.key === 'createAppartement') && !this.api_errors.find((e) => e.key === 'updateAppartement')) {
          this.$router.push({ name: 'Myproperties' })
        }
      })
    }
  }
}
</script>
