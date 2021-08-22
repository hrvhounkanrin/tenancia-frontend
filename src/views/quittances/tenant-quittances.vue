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
           <quittance-list-item v-for="quittance in quittances" :key="quittance.reference" :quittance="quittance" @select-quittance="selectQuittance(quittance)"></quittance-list-item>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
          <div v-if="activeQuittance">
                <quittance-detail-item :quittance="activeQuittance"></quittance-detail-item>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import vueSlider from "vue-slider-component"
import paginate, { alert } from "@/components/shared/"
import utils from '@/utils/index'
import QuittanceListeItem from './quittance-list-item.vue'
import QuittanceDetailItem from './quittance-detail-item.vue'
library.add(fas)

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
      this.$store.dispatch('quittances/getQuittanceByTenant')
  },
  watch: { 
   
  },
  methods: {
      selectQuittance: function(quittance){
          console.log('selectQuittance:', quittance)
          this.activeQuittance=quittance
      }
  }
}
</script>
