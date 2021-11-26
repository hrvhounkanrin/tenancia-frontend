<template>
   <div class="w-100 mb-4">
        <div class="d-flex flex-wrap justify-content-between mb-2">
            <small class="line-height-xs text-uppercase text-muted"><h5 class="pt-1 pb-1"><a href="javascript:void(0);">#{{index+1}} - {{intitule}}</a></h5></small>
            <small class="line-height-xs text-uppercase"><a href="javascript:void(0);" class="badge badge-pill pl-3 pr-3" :class="getAppartmentStatutClass(statut)">{{statut}}</a></small>
        </div>
        <div class="row">
            <div class="col-md-2">
                <img height="100" width="100" src="@/assets/icons/green-house.png"/>
                <small class="line-height-xs"><a href="javascript:void(0);" class="badge badge-pill badge-success pl-3 pr-3">Surface habitable: {{surfaceTotale}}m²</a></small>

            </div>
            <div class="col-md-8">
                <ul class="list-unstyled card-columns">
                    <li v-for="(typedependence, index) in dependances" :key="index"><font-awesome-icon icon="check-square" class="mr-2"/>{{ typedependence }}</li>
                </ul>
                <p><font-awesome-icon icon="comments"/><span class="ml-2">{{autre_description}}...</span></p>
            </div>
             <div class="col-md-8 offset-md-2">

            </div>
        </div>
        <div class="row d-flex flex-row-reverse">
                <b-button variant="primary" class="mr-2" @click="$emit('edit-appartment')">
                <span class="btn-wrapper--icon">
                    <font-awesome-icon icon="edit"/>
                </span>
                <span class="btn-wrapper--label">Modifier</span>
            </b-button>
              <b-button variant="primary" class="mr-2" @click="triggerAddContrat">
                  <span class="btn-wrapper--icon">
                      <font-awesome-icon icon="file-word"/>
                  </span>
                  Ajouter un contrat
              </b-button>
            <b-button variant="primary" class="mr-2" @click="$emit('init-cloner')">
                <span class="btn-wrapper--icon">
                    <font-awesome-icon icon="clone"/>
                </span>
                Cloner
            </b-button>
        </div>
        <div class="divider mt-3 blue-divider"></div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import utils from '@/utils/index'
export default {
  name: 'Appartment',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {
    structures: () => {
      return []
    }
  },
  mounted () {
    // console.log(this.dependances)
  },
  props: {
    index: Number,
    intitule: String,
    statut: String,
    autre_description: String,
    dependances: Array,
    surfaceTotale: Number
  },
  methods: {
     initCloner: function(){
        this.$swal({
          title: 'Clonage appartment',
          input: 'number',
          inputPlaceholder: 'Saisir le nombre',
          showCloseButton: true,
        })
    },
    getAppartmentStatutClass: function(statutAppartment){
        if (statutAppartment==='RESERVE'){
            return 'badge-warning'
        }
        if (statutAppartment==='LIBRE'){
            return 'badge-success'
        }
        return 'badge-danger'
    },
    triggerAddContrat: function(){
        this.$store.commit('contrats/CONTRATTOUPDATE', null)
        this.$router.push({name: 'EditContrat'})
    }
  }

}
</script>
