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
            <div class="col-6 col-md-2">
                <div class="text-center">
                    <span class="text-black-50 d-block">Rérérence</span>
                    <b class="font-size-xm">{{reference}}</b>
                </div>
            </div>
            <div class="col-6 col-md-5">
                <div class="text-center">
                    <span class="text-black-50 d-block">Adresse</span>
                    <b class="font-size-xm">{{city}}, {{adresse}}</b>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="text-center">
                    <span class="text-black-50 d-block">Jour facture</span>
                    <b class="font-size-xm">{{ cpJourValeurFacture }}</b>
                </div>
            </div>
            <div class="text-center col-6 col-md-2">
                <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                    <template slot="button-content">
                        <div class="font-size-xl">
                            <font-awesome-icon icon="ellipsis-h"/>
                        </div>
                    </template>
                    <b-dropdown-item  @click="$emit('edit-immeuble')" >Modifier</b-dropdown-item>
                    <b-dropdown-item @click="$emit('cloner-immeuble')">Cloner</b-dropdown-item>
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
    // left pad 0 if jourValeurFacture less than 9
    cpJourValeurFacture: function () {
      if (this.jourValeurFacture < 9) { return '0' + this.jourValeurFacture + ' du mois' } else { return this.jourValeurFacture + ' du mois' }
    },
    // left pad 0 if jourEmissionFacture less than 9
    cpJourEmissionFacture: function () {
      if (this.jourEmissionFacture < 9) { return '0' + this.jourEmissionFacture + ' du mois' } else { return this.jourEmissionFacture + ' du mois' }
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
