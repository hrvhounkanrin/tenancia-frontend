<template>
  <div>
    <PageTitle
      heading="Mes quittances"
      subheading="Liste de vos quittances"
    />
    <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
                      <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
              </div>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
           <quittance-list-item v-for="quittance in quittances" 
           :key="quittance.reference" 
           :quittance="quittance" 
           @select-quittance="selectQuittance(quittance)"
           @share-quittance="triggerShareQuittance(quittance)"
           ></quittance-list-item>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
          <div v-if="activeQuittance">
                <quittance-detail-item :quittance="activeQuittance"></quittance-detail-item>
          </div>
      </div>
    </div>
    <b-modal id="modal-share-quittance" :title="'Quittance n°'+sharedQuittance.reference">
      <div class="d-flex text-center pb-1">
          <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-first p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Share with messenger">
              <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
          </a>
          <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-success p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Share with whatsapp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
          <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-danger p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Share with gmail">
              <font-awesome-icon :icon="['fab', 'google']" />
          </a>
            <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Share with telegram">
              <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>

      </div>
        <div class="form-group row pl-4 pr-3"> 
              <label>Lien de partage <span class="message"></span></label>
                  <div class="input-group">
                      <input class="form-control" type="url" placeholder="https://tenancia.com/acodyseyy" id="myInput" aria-describedby="inputGroup-sizing-default" readonly> 
                      <div class="input-group-append">
                          <b-button
                          variant="primary"
                          class="border-0"
                          >
                          <font-awesome-icon icon="copy" />

                          </b-button>
                      </div>
                  </div>
          </div>
      <div slot="modal-footer">
          
      </div>
    </b-modal>
                            
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import vueSlider from "vue-slider-component"
import paginate, { alert } from "@/components/shared/"
import utils from '@/utils/index'
import Hashids from 'hashids'
import QuittanceListeItem from './quittance-list-item.vue'
import QuittanceDetailItem from './quittance-detail-item.vue'
library.add(fas)
library.add(fab)

export default {
  name: 'TenantQuittance',
  components: {
    vueSlider,
    "font-awesome-icon": FontAwesomeIcon,
    "t-pagination": paginate,
    alert: alert,
    "quittance-list-item": QuittanceListeItem,
    "quittance-detail-item": QuittanceDetailItem,
  },
 data: function(){
      return {
          activeQuittance: null,
          sharedQuittance: {
            reference: ''
          },
          faStyle: null,
      }
  },
  props: {

  },
  computed: {
    ...mapGetters({
      quittances: 'quittances/tenantQuittances',
    }),
    ...mapState({
      api_errors: (state) => state.contrats.errors
    }),
  },
  mounted: function(){
      const contratId= this.$route.query.ref
      const hashids = new Hashids()
      console.log('contrat.id:', contratId, hashids.decode(contratId))
      if(contratId){
        const query = {'contrat_id': hashids.decode(contratId) }
        this.$store.dispatch('quittances/getQuittanceByTenant', query)
      }
      else{
        this.$store.dispatch('quittances/getQuittanceByTenant')
      }
      
  },
  watch: { 
   
  },
  methods: {
      selectQuittance: function(quittance){
          console.log('selectQuittance:', quittance)
          this.activeQuittance=quittance
      },
      triggerShareQuittance(quittance){
        this.sharedQuittance=quittance
        this.$bvModal.show('modal-share-quittance')
      }
  }
}
</script>
