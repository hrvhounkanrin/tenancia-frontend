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
                    <b class="font-size-xm">{{ (jour_valeur_facture <= 9) ? '0' : '' }}{{jour_valeur_facture}}</b> du mois
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
import {library} from '@fortawesome/fontawesome-svg-core'
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
        faHourglass
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
  name: 'Building',
  components: {
      'font-awesome-icon': FontAwesomeIcon,
  },
  props: {
    index: Number,
    title: String,
    reference: String,
    adresse: String,
    city: String,
    jour_emission_facture: Number,
    jour_valeur_facture: Number,
    selected: Boolean
  }

}
</script>

