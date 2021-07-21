<template>
    <div>
        <PageTitle heading="Mes contrats de bail" subheading="Advanced interaction controls to your HTML tables the free & easy way"/>
        <div>
            <contract-dashboard></contract-dashboard>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-8 col-sm-12 col-xl-8">
                    <div class="card card-box mb-5">
                    <div class="card-header pr-2">
                        <div class="card-header--title">
                            <small>Vue bailleur</small>
                            <b>Liste des contrats</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0)" class="btn btn-sm text-primary btn-link" v-b-tooltip.hover title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div>
                            <div class="table-responsive-md">
                                <table class="table table-striped table-hover mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Appartement</th>
                                        <th scope="col">N° Contrat</th>
                                        <th scope="col">Locataire</th>
                                        <th scope="col">Date effet</th>
                                        <th scope="col" class="text-left">Loyer</th>
                                        <th scope="col">Proch. échéance</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="list">
                                    <tr class="resilie">
                                        <td style="">
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    0-C - Les cocotiers
                                                    <small class="d-block text-black-50"><font-awesome-icon icon="map-marked" class="mr-1" />(Agla Fignonhou)</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                            <div class="badge badge-warning px-3">F0929203</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        HOUNKKPONOU JONAS
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> 98 67 45 90
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> jonas.hounkponou@gmail.com
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            01/01/2021
                                        </td>
                                        <td class="text-left">
                                            50000 XOF
                                        </td>
                                        <td>
                                            05/08/2021
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
                                    <tr class="proposition">
                                        <td>
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    0-C - Les cocotiers
                                                    <small class="d-block text-black-50">(Agla Fignonhou)</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                             <div class="badge badge-first px-3">F0929203</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        HOUNKKPONOU JONAS
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> 98 67 45 90
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> jonas.hounkponou@gmail.com
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            01/01/2021
                                        </td>
                                        <td class="text-left">
                                            50000 XOF
                                        </td>
                                        <td>
                                            05/08/2021
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
                                     <tr class="encours">
                                        <td>
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    0-C - Les cocotiers
                                                    <small class="d-block text-black-50">(Agla Fignonhou)</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                             <div class="badge badge-success px-3">F0929203</div>

                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        HOUNKKPONOU JONAS
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> 98 67 45 90
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> jonas.hounkponou@gmail.com
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            01/01/2021
                                        </td>
                                        <td class="text-left">
                                            50000 XOF
                                        </td>
                                        <td>
                                            05/08/2021
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
                                     <tr class="proposition">
                                        <td>
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    0-C - Les cocotiers
                                                    <small class="d-block text-black-50">(Agla Fignonhou)</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                            <div class="badge badge-first px-3">F0929203</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        HOUNKKPONOU JONAS
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> 98 67 45 90
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> jonas.hounkponou@gmail.com
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            01/01/2021
                                        </td>
                                        <td class="text-left">
                                            50000 XOF
                                        </td>
                                        <td>
                                            05/08/2021
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
                                     <tr class="proposition">
                                        <td>
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    0-C - Les cocotiers
                                                    <small class="d-block text-black-50">(Agla Fignonhou)</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                             <div class="badge badge-first px-3">F0929203</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        HOUNKKPONOU JONAS
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']" /> 98 67 45 90
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> jonas.hounkponou@gmail.com
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            01/01/2021
                                        </td>
                                        <td class="text-left">
                                            50000 XOF
                                        </td>
                                        <td>
                                            05/08/2021
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
                                    </tbody>
                                </table>
                            </div>
                            <div class="divider"></div>
                            <div class="divider"></div>
                            <div class="p-3">
                                <ul class="pagination justify-content-center mb-0">
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                            <font-awesome-icon icon="chevron-left"/>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                            <font-awesome-icon icon="chevron-right"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
             <div class="col-lg-12 col-xl-4">
                 <contract-detail></contract-detail>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ContractDetail from './contract-detail.vue'
import ContractDashboard from './contract-dashboard.vue'
library.add(fas)
export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    'contract-detail': ContractDetail,
    'contract-dashboard': ContractDashboard
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
