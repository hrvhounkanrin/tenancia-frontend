<template>
     <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
            <div class="accordion mb-5">
                <div class="card card-box">
                    <div class="card-header">
                        <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none font-size-lg" v-b-toggle.accordion-1>
                            Panel de recherche
                            <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                        </b-button>
                    </div>
                    <!--<div class="card-body m-2">-->
          <b-collapse id="accordion-1"  accordion="accordion-example" role="tabpanel" class="m-2">
              <form>
                  <div class="form-row">
                      <div class="form-group col-md-3">
                          <label for="immeuble_id">Immeuble</label>
                          <select  class="form-control" v-model="queryModel.immeuble_id" @change="onImmeubleChoosen()">
                              <b-form-select-option :value="null" disabled>Choisir un immeuble</b-form-select-option>
                              <b-form-select-option 
                                  :value="immeuble.id" v-for="immeuble in immeubles" 
                                  :key="immeuble.id">
                              {{immeuble.intitule+'('+immeuble.adresse+')'}}
                              </b-form-select-option>
                          </select>
                          </div>
                          <div class="form-group col-md-3">
                          <label for="appartement_id">Appartement</label>
                          <select id="appartement_id" class="form-control" v-model="queryModel.appartement_id">
                              <b-form-select-option :value="null" disabled>Choisir un appartement</b-form-select-option>
                              <b-form-select-option 
                                  :value="appart.id" v-for="appart in appartements" 
                                  :key="appart.id">
                              {{appart.intitule}}
                              </b-form-select-option>
                          </select>
                      </div>
                      <div class="form-group col-md-3">
                          <label for="date_effet_start">Date d'effet</label>
                          
                          <div class="input-group">
                              <input-facade id="date_effet_start" mask="##/##/####" 
                                  v-model="queryModel.date_effet_start"  
                                  class="form-control"  
                                  placeholder="DD/MM/YYYY"/>
                              <input-facade id="date_effet_end" mask="##/##/####" 
                                  v-model="queryModel.date_effet_end"  
                                  class="form-control"  
                                  placeholder="DD/MM/YYYY"/>
                          </div>
                      </div>
                      <div class="form-group col-md-3">
                          <label for="prochaine_echeance_start">Prochaine échéance</label>
                          <div class="input-group">
                              <input-facade id="prochaine_echeance_start"  
                                  v-model="queryModel.prochaine_echeance_start"
                                  mask="##/##/####"  
                                  class="form-control"  
                                  placeholder="DD/MM/YYYY"/>
                              <input-facade id="prochaine_echeance_end" 
                                  v-model="queryModel.prochaine_echeance_end" 
                                  mask="##/##/####"  
                                  class="form-control"  
                                  placeholder="DD/MM/YYYY"/>
                          </div>
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="form-group col-md-3">
                          <label for="tenant">Locataire</label>
                          <input type="text" v-model="queryModel.tenant" class="form-control" id="tenant">
                      </div>
                      <div class="form-group col-md-3">
                          <label for="lessor">Proprietaire</label>
                          <input type="text" v-model="queryModel.lessor"  class="form-control" id="lessor">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="montant_loyer_start">Montant loyer</label>
                        <div class="input-group">
                          <input type="text" class="form-control" 
                              v-money="money" id="montant_loyer_start"
                              v-model="queryModel.montant_loyer_start" 
                              placeholder="Min">
                          <input type="text" class="form-control" 
                              v-money="money" id="montant_loyer_end" 
                              v-model="queryModel.montant_loyer_end" 
                              placeholder="Max">
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                          <label for="statut_contrat">Statut</label>
                          <select id="statut_contrat" class="form-control" v-model="queryModel.statut">
                              <b-form-select-option :value="null" disabled>Sélectionner statut...</b-form-select-option>
                              <b-form-select-option :value="'ANNULE'">ANNULE</b-form-select-option>
                              <b-form-select-option :value="'CONTRAT ACCEPTE'">CONTRAT ACCEPTE</b-form-select-option>
                              <b-form-select-option :value="'EN COURS'">EN COURS</b-form-select-option>
                              <b-form-select-option :value="'PROPOSITION'">PROPOSITION</b-form-select-option>
                              <b-form-select-option :value="'RESILIE'">RESILIE</b-form-select-option>
                              <b-form-select-option :value="'TERME'">TERME</b-form-select-option>
                          </select>
                      </div>
                  </div>
              </form>
          </b-collapse>
                    <!--</div>-->
                    
          <div class="card-footer d-flex flex-row-reverse">
              
              <b-button variant="primary" @click="$emit('search-contrat', queryModel)" >
                  <font-awesome-icon icon="search" class="mr-2" />
                  RECHERCHER 
              </b-button>
                <b-button variant="danger" class="mr-2" @click="resetSearchPanel">
                  <font-awesome-icon icon="undo" class="mr-2" />
                  REINITIALISER 
              </b-button>
          </div>
    </div>
</div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { InputFacade, facade, filter } from 'vue-input-facade'
import { VMoney } from 'v-money'
library.add(fas)

const currencyMask = {
    decimal: '.',
    thousands: ' ',
    prefix: '',
    suffix: '',
    precision: 0,
}
export default {
  name: 'SearchContrat',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    InputFacade
  },
  directives: { facade, money: VMoney },
  filters: { facade: filter },
  props: {
    immeubles: Array,
  },
  data: function () {
      return {
          money: currencyMask,
          queryModel:{
            immeuble_id: null,
            appartement_id: null,
            date_effet_start: null,
            date_effet_end: null,
            prochaine_echeance_start: null,
            prochaine_echeance_end:  null,
            montant_loyer_start: null,
            montant_loyer_end: null,
            tenant: null,
            lessor: null,
            statut: null,
          },
          appartements: null
      }
  },
  watch: {
      
  },
  mounted(){
    console.log('component prop immeubles: ', this.immeubles)
  },
  methods: {
    onImmeubleChoosen: function () {
        const immeuble = this.immeubles.find(immeuble => immeuble.id === this.queryModel.immeuble_id)   
        this.appartements = (immeuble === null || immeuble === undefined) ? [] : immeuble.appartements
    },
    resetSearchPanel: function () {
      Object.keys(this.queryModel).forEach((k) => this.queryModel[k] = null)
      this.$store.dispatch('contrats/getContrats')
    }
  }
}

</script>

