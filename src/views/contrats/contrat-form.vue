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
                       <b> Contrat de bail n° : </b>
                        <small>Immeuble: Hibiscus, appartement: 0-C</small>
                    </div>
                      <div class="card-header--actions">
                        <b-badge pill variant="success">{{Number(totalBail).toLocaleString()}} F CFA</b-badge>
                    </div>
                </div>
                <div class="card-body">
                    <!--<VuePerfectScrollbar class="scroll-area-lg"> -->
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="date_effet">Date d'effet</label>
                            <input type="text" class="form-control" id="date_effet" placeholder="dd/mm/yyyy" v-mask="'##/##/####'" v-model="contrat.date_effet">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="date_signature">Date signature</label>
                            <input type="text" class="form-control" id="date_signature"  placeholder="dd/mm/yyyy"  v-mask="'##/##/####'"  v-model="contrat.date_signature">
                        </div>
                         <div class="form-group col-md-3">
                            <label for="inputState">Périodicité du loyer</label>
                            <select id="inputState" class="form-control">
                                <option value="12">MENSUELLE</option>
                                <option value="4">TRIMESTRIELLE</option>
                                <option value="2">SEMESTRIELLE</option>
                                <option value="1">ANNUELLE</option>
                            </select>
                         </div>
                         <div class="form-group col-md-3">
                            <label for="duree">Durée (en année)</label>
                            <input type="text" class="form-control" id="duree">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="montant_bail">Montant bail</label>
                            <input type="text" class="form-control" id="montant_bail" v-money="money" v-model="contrat.montant_bail" >
                        </div>
                        <div class="form-group col-md-3">
                            <label for="montant_bail">Nbre d'avance</label>
                            <input type="number" class="form-control" id="nb_avance" min="0" max="9">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="montant_bail">Nbre de prépayé</label>
                            <input type="number" class="form-control" id="nb_prepaye" min="0" max="9">
                        </div>
                    </div>
                     <div class="row">
                          <div class="form-group col-md-6">
                            <label for="inputState">Statut contrat</label>
                            <select id="inputState" class="form-control">
                                <option value="PROPOSITION">PROPOSITION</option>
                                <option value="EN COURS">EN COURS</option>
                                <option value="RESILIE">RESILIE</option>
                                <option value="TERME">TERME</option>
                            </select>
                           
                         </div>
                         <div class="col-md-6">
                            <b-form-group>
                              <label for="montant_bail">Email locataire</label>
                              <b-input-group>
                                  <b-form-input placeholder="Rechercher locataire par email"></b-form-input>
                                  <b-input-group-text slot="prepend" v-model="contrat.locataire">
                                      <font-awesome-icon icon="search" class="search-icon w-auto" />
                                  </b-input-group-text>
                              </b-input-group>
                        </b-form-group>
                      </div>
                      
                   
                    </div>
                    <div class="row">
                            <div class="col-md-12">
                            <a href="javascript:void(0);" class="card card-box mb-2 card-box-border-bottom border-first">
                                <div class="card-body">
                                    <div class="align-box-row align-items-start">
                                        <div>
                                            <div class="font-weight-bold">
                                                <small class="text-black-50 d-block mb-1 text-uppercase">Locataire</small>
                                                <span class="font-size-sm  mt-1">REBBY MUNDAYI</span>
                                            </div>
                                            <div class="mt-2">
                                                <font-awesome-icon icon="phone-alt" class="mr-1"/>
                                                <span class="pr-1">97873407</span>
                                            </div>
                                             <div class="mt-2">
                                                <font-awesome-icon icon="envelope" class="mr-1"/>
                                                <span class="pr-1">rebby-mundayi@gmail.com</span>
                                            </div>
                                        </div>
                                        <div class="ml-auto card-hover-indicator align-self-center">
                                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                     <div class="row">
                        <div class="form-group col-md-12">
                            <label for="montant_bail">Observations</label>
                             <b-form-textarea
                                id="textarea"
                                v-model="contrat.observations"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                              ></b-form-textarea>
                        </div>
                    </div>
                     <b-list-group id="contrat-accessoires" >
                        <b-list-group-item class="d-flex justify-content-between align-items-center bg-light" v-for="item in selectedAccessoires" :key="item.id">
                            <div class="w-100 ">
                                <div class="d-flex">
                                <div class="p-2 pr-1"># {{item.libelle}} -  </div>
                                <div class="p-2">{{item.montant}} ({{(item.is_peridic)? 'PERIODIQUE': 'PONCTUEL'}} )</div>
                                <div class="ml-auto p-2">
                                    <b-button variant="danger" size="sm" @click="removeAccessoire(item)">
                                        <font-awesome-icon icon="trash"  />
                                    </b-button>
                                </div>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group >
                   <!--</VuePerfectScrollbar>-->
                    
                   
                    
                </div>
                <div class="card-footer bg-light p-4">
                    <div class="align-box-row mt-3">
                        <div class="align-items-center">

                        </div>
                        <div class="ml-auto">
                            <b-button variant="primary">
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
                        <b>Frais accessoires au loyer</b>
                        <small>Choisissez un type de frais accessoire, renseigner le montant puis ajouter au contrat, ou créer un nouveau..</small>
                    </div>
                       <div class="card-header--actions">
                            {{filterValue}}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-2" >
                            <input type="search" class="form-control" placeholder="Filtrer type d'accessoires sur loyer" v-model="filterValue" />
                            <div class="input-group-append">
                                <b-button variant="primary" class="border-0">
                                    <font-awesome-icon icon="search" />
                                </b-button>
                            </div>
                        </div>
                        <b-list-group id="type-dependances-list" >
                            <VuePerfectScrollbar class="scrollbar-container scroll-area-md">
                              
                                <b-list-group-item  class="d-flex bg-light justify-content-between align-items-center"  v-for="item in notSelectedAccessories" :key="item.id">{{item.libelle}}
                                <span class="">        
                                    <div class="input-group">
                                      <label :for="'chk_' + item.id" >Périodique</label>
                                      <input type="checkbox" class="form-control" aria-describedby="basic-addon2" v-model="item.is_peridic" :id="'chk_' + item.id">
                                      <input type="text" class="form-control" placeholder="Montant (F CFA)" aria-label="Montant (F CFA)" aria-describedby="basic-addon2"  v-model="item.montant" :id="'montant_' + item.id" v-money="money">
                                      <div class="input-group-append">
                                          <b-button variant="primary" sclass="border-0" @click="addAccessoires(item)"><font-awesome-icon icon="plus"/></b-button >
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
                                    Créer un nouveau type dépendance
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {VMoney} from 'v-money'
import utils from '@/utils/index'
library.add(fas)
const currencyMask = {
    decimal: '.',
    thousands: ' ',
    prefix: '',
    suffix: ' F CFA',
    precision: 0,
}
export default {
  components: {
    alert,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },
  directives: {money: VMoney},
  data: function () {
    return {
      money: currencyMask,
      componentKey: 0,
      filterValue: '',
      selectedAccessoires: [], // liste des accessoires sélectionnées
      contrat: {
        reference_bail: null,
        date_signature: null,
        date_effet: null,
        periodicite: 0,
        duree: 0,
        montant_bail: 0,
        nb_avance: 0,
        nb_prepaye: 0,
        statut: null,
        observation: null,
        tacite_reconduction: null,
        client_id: 0,
        appartement_id: 0,
        accessoires: []
        }
    }
  },
  props: {
    selectedAppartement: Object,
    editingContrat: Object
  },
  computed: {
    ...mapGetters({
      typeAccessoires: 'contrats/typeAccessoireLoyer',
      contrats: 'contrats/contrats'
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
      console.log('this.typeAccessoires:', this.typeAccessoires)
        if (!Array.isArray(this.typeAccessoires)) return []
        let selectedId = this.selectedAccessoires.map(item => item.id)
        let allNotSelected = this.typeAccessoires.filter(item => selectedId.includes(item.id) === false)
        return (this.filterValue.trim() === '')
          ? allNotSelected
          : allNotSelected.filter(item => item.libelle.toLowerCase().startsWith(this.filterValue.toLowerCase()))
    },
    /**
     * Retourne la surface totale habitable
     */
    totalBail: function () {
      if (this.selectedAccessoires.length===0) return 0
      console.log('addAccessoires:', )
      return this.selectedAccessoires.reduce((accumulateur, item) => accumulateur + utils.currencyToNumber(item.montant), 0)
    }
  },
  created () {
    /*if (!this.selectedAppartement) {
      this.$store.commit('contrats/ERROR_ADD', 'Aucun appartement sélectionné.')
      this.$router.push({ name: 'Myproperties' })
    }*/
    this.$store.dispatch('contrats/getAccessoireLoyer')
  },
  mounted () {
    /**
     * Si contrat en édition, reconstruire le dom par rapport aux accessoires sur le contrat
     */
    if (this.editingContrat) {
      this.contrat = this.editingAppartment
      this.contrat.accessoires.forEach(item => {
        this.selectedAccessoires.push({
          ...item.accessoire
        })
      })
    }
  },
  watch: {

  },
  methods: {
    ...mapActions('contrat', ['createContrat']),
    addAccessoires: function (accessoire) {
      
      if (accessoire.montant === 0 || accessoire.montant === null) {
        return
      }

      this.selectedAccessoires.push(accessoire)
      this.filterValue = ''
    },
    removeAccessoire: function (accessoire) {
      let index = this.selectedAccessoires.findIndex(item => item.id === accessoire.id)
      this.selectedAccessoires.splice(index, 1)
      console.log('this.selectedDependance:', this.selectedAccessoires)
    },
    saveAppartment: async function () {
      this.appartement.immeuble_id = this.selectedAppartement.id
      console.log('this.selectedAppartement:', this.selectedAppartement)
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
