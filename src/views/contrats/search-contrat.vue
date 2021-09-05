<template>
     <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
            <div class="accordion mb-5">
                <div class="card card-box">
                    <div class="card-header">
                        <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none" v-b-toggle.accordion-1>
                            <span>Critères de recherche</span>
                            <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                        </b-button>
                    </div>
                    <!--<div class="card-body m-2">-->
                    <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel" class="m-2">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputEmail4">Immeuble</label>
                                     <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                 <div class="form-group col-md-3">
                                    <label for="inputEmail4">Appartement</label>
                                     <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputPassword46">Date d'effet</label>
                                     <input class="form-control" id="time-and-date-ex" type="text" placeholder="DD/MM/YYYY"
                                            v-mask="'##/##/####'"/>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputPassword4">Prochaine échéance</label>
                                      <input class="form-control" id="time-and-date-ex" type="text" placeholder="DD/MM/YYYY"
                                            v-mask="'##/##/####'"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputCity">Locataire</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputState">Proprietaire</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputZip">Loyer tranhe min</label>
                                    <input type="text" class="form-control" id="inputZip">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputZip">Loyer tranhe max</label>
                                    <input type="text" class="form-control" id="inputZip">
                                </div>
                            </div>
                        </form>
                    </b-collapse>
                    <!--</div>-->
                    
                     <div class="card-footer d-flex flex-row-reverse">
                       
                        <b-button variant="primary">
                            <font-awesome-icon icon="search" class="mr-2" />
                            RECHERCHER 
                        </b-button>
                         <b-button variant="danger" class="mr-2" >
                            <font-awesome-icon icon="undo" class="mr-2" />
                            REINITIALISER 
                        </b-button>
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
  name: 'SearchContrat',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  }
}

</script>

