<template>
    <div>
         <tr :class="statut">
                                        <td style="">
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    {{appartement}} - {{immeuble}}
                                                    <small class="d-block text-black-50"><font-awesome-icon icon="map-marked" class="mr-1" />({{adresse}})</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                            <div class="badge badge-warning px-3">{{reference}}</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        {{locataire.nomprenom}}
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> {{locataire.phone_number}}
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> {{locataire.email}}
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            {{dateeffet}}
                                        </td>
                                        <td class="text-left">
                                            {{montantBail}}
                                        </td>
                                        <td>
                                            {{prochaineEcheance}}
                                        </td>
                                        <td class="text-center" width="5%">
                                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                                                <template slot="button-content">
                                                    <div class="font-size-xl">
                                                        <font-awesome-icon icon="ellipsis-h"/>
                                                    </div>
                                                </template>
                                                <b-dropdown-item>Voir détails</b-dropdown-item>
                                                <b-dropdown-item>Voir règlements</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item active>Résilier</b-dropdown-item>
                                            </b-dropdown>
                                        </td>
         </tr>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default {
  name: 'ContratRow',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    statut: {
        type: String,
        validator: s => ['proposition', 'encours', 'resilie'].includes(s)
    },
    appartement: String,
    immeuble: String,
    adresse: String,
    reference: String,
    locataire: Object,
    dateEffet: String,
    prochaineEcheance: String,
    montantBail: String

  }
}
</script>

<style scoped>
.proposition > td:first-child{
    border-left-style:solid;
    border-width:1px !important;
    border-left-color:#4191ff !important
}
.encours > td:first-child{
    border-left-style:solid;
    border-width:1px !important;
    border-left-color:#1bc943 !important;
}
.resilie > td:first-child{
    border-left-style:solid;
    border-width:1px !important;
    border-left-color:#f4772e !important;
}
</style>
