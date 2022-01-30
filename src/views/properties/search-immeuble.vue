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
                <b-collapse id="accordion-1"  accordion="accordion-example" role="tabpanel" class="m-2">
                    <form>
                        <div class="form-row">
                        
                        </div>
                        <div class="form-row">

                        </div>
                    </form>
                </b-collapse>
                    
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
library.add(fas)


export default {
  name: 'SearchImmeuble',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    InputFacade
  },
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

