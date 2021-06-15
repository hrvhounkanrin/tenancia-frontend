<template>
   <div class="building">
        <div class="card-header bg-light" >
        <div class="font-size-lg d-block text-truncate">
            <span class="text-black-50 pr-2">#{{index+1}}</span> {{title}}
        </div>
        <div class="ml-auto d-flex align-items-center align-content-center">
        
            <a href="javascript:void(0);" v-b-tooltip title="Localisation map">
                <img height="32" width="32" src="@/assets/icons/location.png" alt="">
            </a>
        </div>
    </div>
    <div class="card-body" style="cursor: pointer;">
        <div class="row">
            <div class="col-6 col-md-3">
                <div class="text-center">
                    <span class="text-black-50 d-block">Rérérence</span>
                    <b class="font-size-xl">{{reference}}</b>
                </div>
            </div>
            <div class="col-6 col-md-6">
                <div class="text-center">
                    <span class="text-black-50 d-block">Adresse</span>
                    <b class="font-size-xl">{{adresse}}</b>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="text-center">
                    <span class="text-black-50 d-block">Jour facture</span>
                    <b class="font-size-xl">{{jour_emission_facture}}</b> du mois
                </div>
            </div>
        
        </div>
    </div>
   </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
  name: 'Building',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    index: Number,
    title: String,
    reference: String,
    adresse: String,
    jour_emission_facture: String,
    selected: Boolean
    },
   
}
</script>
