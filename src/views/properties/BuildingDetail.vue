<template>
   <div class="building">
    <!--<div class="card-header bg-light" >
        <div class="font-size-lg d-block text-truncate">
            <span class="text-black-50 pr-2">#{{index+1}}</span> {{title}}
        </div>
        <div class="ml-auto d-flex align-items-center align-content-center">

            <a href="javascript:void(0);" v-b-tooltip title="Localisation map">
                <img height="32" width="32" src="@/assets/icons/location.png" alt="">
            </a>
        </div>
    </div>-->
    <div class="card-body" style="cursor: pointer;">
        <div class="row">
            <div class="col-6 col-md-2">
                    {{reference}}
            </div>
            <div class="col-6 col-md-5">
                    {{title}} / {{city}}, {{adresse}}
            </div>
            <div class="col-6 col-md-3 text-right">
                    {{ cpJourValeurFacture }}
            </div>
            <div class="text-right col-6 col-md-2">
                <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                    <template slot="button-content">
                        <div class="font-size-xl">
                            <font-awesome-icon icon="ellipsis-h"/>
                        </div>
                    </template>
                    <b-dropdown-item  @click="$emit('edit-immeuble')" >Détails</b-dropdown-item>
                    <b-dropdown-item  @click="$emit('edit-immeuble')" >Modifier</b-dropdown-item>
                    <b-dropdown-item   >Ajouter mandat</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item >Supprimer</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export default {
  name: 'BuildingDetail',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {
    cpJourValeurFacture: function () {
      if (this.jourValeurFacture < 9) { return '0' + this.jourValeurFacture } else { return this.jourValeurFacture }
    },
    cpJourEmissionFacture: function () {
      if (this.jourEmissionFacture < 9) { return '0' + this.jourEmissionFacture } else { return this.jourEmissionFacture}
    }
  },
  props: {
    index: Number,
    title: String,
    reference: String,
    adresse: String,
    city: String,
    jourEmissionFacture: Number,
    jourValeurFacture: Number,
    selected: Boolean
  }

}
</script>
