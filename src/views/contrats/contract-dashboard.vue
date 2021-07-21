<template>
    <div>
          <div class="bg-vicious-stance pt-5 pl-5 pr-5 mb-5 rounded">
            <div class="row">
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">{{componentKey}}</b>
                                        <span class="text-black-50">Maisons & Immeubles</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">23</b>
                                        <span class="text-black-50">Appartements</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-warning"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">16</b>
                                        <span class="text-black-50">Contrats en cours</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="newspaper" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">635 0000 XOF</b>
                                        <span class="text-black-50">De loyer mensuel</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
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
  name: 'ContractDashboard',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
}
</script>
