<template>
     <div class="card card-box mb-5">
                    <div class="card-header">
                         <div class="card-header--title">
                        <b>Frais accessoires au loyer</b>
                        <!--<small>Choisi et ajoute au contrat</small>-->
                    </div>
                       <div class="card-header--actions">
                            {{filterValue}}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-2" >
                            <input type="search" class="form-control" placeholder="Filtrer type d'accessoires sur loyer" v-model="filterValue" />
                            <div class="input-group-append">
                                <b-button variant="primary" class="border-0">
                                    <font-awesome-icon icon="search" />
                                </b-button>
                            </div>
                        </div>
                        <b-list-group id="type-dependances-list" >
                            <VuePerfectScrollbar class="scrollbar-container scroll-area-md">

                                <b-list-group-item  class="d-flex bg-light justify-content-between align-items-center"  v-for="item in notSelectedAccessories" :key="item.id">{{item.libelle}}
                                <span class="">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <label class="input-group-text" :for="'chk_' + item.id" >Périodique</label>
                                      </div>
                                      <div class="input-group-prepend">
                                        <div class="input-group-text">
                                          <b-form-checkbox size="lg" v-model="item.is_peridic" :id="'chk_' + item.id">{{(item.is_peridic) ? 'OUI' : 'NON'}}</b-form-checkbox>
                                        </div>
                                      </div>
                                      <input type="text" class="form-control" placeholder="Montant (F CFA)" aria-label="Montant (F CFA)" aria-describedby="basic-addon2" size="sm" v-model="item.montant" :id="'montant_' + item.id" v-money="money">
                                      <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary btn-sm" type="button"  @click="$emit('add-accessoire', item)" ><font-awesome-icon icon="plus"/></button>
                                      </div>

                                    </div>
                                </span>

                                </b-list-group-item>
                            </VuePerfectScrollbar>
                        </b-list-group>

                    </div>
                    <div class="card-footer bg-light p-4">
                        <div class="align-box-row mt-3">
                            <div class="align-items-center">

                            </div>
                            <div class="ml-auto">
                                <b-button variant="primary" @click="showAddAccessoireForm()">
                                    <font-awesome-icon icon="plus" class="mr-2" />
                                    Créer un nouveau type de frais
                                </b-button>
                            </div>
                        </div>
                    </div>
           <div>
                  <b-modal
                    hide-footer
                    title="Accessoire de loyer"
                    v-model="addNewAccessoireForm"
                  >
                    <div>
                      <b-form @submit.prevent="addTypeAccessoire">
                        <b-row >
                          <b-col sm="12" md="12" lg="12" xl="12"
                            ><b-form-group label="Saissez l'intitulé de l'accessoire">
                              <b-form-input
                                v-model="typeAccessoire"
                                class="mb-2"
                                label="Accessoire de loyer"
                                name="Accessoire de loyer"
                              >
                              </b-form-input>
                            
                            </b-form-group></b-col
                          >
                        </b-row>

                        <b-button
                          class="m-1"
                          type="reset"
                          @click="addNewAccessoireForm = false"
                          variant="danger"
                          >Annuler</b-button
                        >

                        <b-button
                          :disabled="!addNewAccessoireForm || typeAccessoire == ''|| typeAccessoire == null"
                          class="m-1"
                          type="submit"
                          variant="primary"
                          >
                          <!--<span  v-if="addNewAccessoireForm" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>-->
                          Créer
                          </b-button
                        >

                      </b-form>
                    </div>

                  </b-modal>
                </div>
      </div>
</template>
<script>
import { mapActions } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { VMoney } from 'v-money'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

library.add(fas)
const currencyMask = {
  decimal: '.',
  thousands: ' ',
  prefix: '',
  suffix: ' F CFA',
  precision: 0
}
export default {
  name: 'AccessoireLoyer',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
     VuePerfectScrollbar,
  },
  directives: { money: VMoney },
  data: function(){
    return {
      money: currencyMask,
      addNewAccessoireForm: false,
      typeAccessoire: null,
      savingAccessoire: false,
    }
  },
  props: {
    filterValue: { required: true },
    notSelectedAccessories: Array
  },
  methods: {
    ...mapActions("contrats", ["createAccessoireLoyer",]),
    makeToast(title, msg, variant) {
      this.$bvToast.toast(`${msg}`, {
        title: `${title}`,
        variant: variant,
        autoHideDelay: 2000,
        solid: true,
      });
    },
    showAddAccessoireForm: function() {
      this.addNewAccessoireForm = true
      console.log('showAddAccessoireForm ok')
    },
    async addTypeAccessoire() {
      console.log(' start addTypeAccessoire ok')
      try {
        
        this.savingAccessoire = true;
        await this.createAccessoireLoyer({
          libelle:this.typeAccessoire,
          utilite:this.typeAccessoire,
        }).then((res) => {
          this.savingAccessoire = false;
          this.addNewAccessoireForm=false;
          this.makeToast("Accessoire Loyer", "Type d'accessoire loyer créer avec success.", "success");
        });
      } catch (error) {
        console.log('Error occurred: ', error)  
        this.makeToast("Accessoire Loyer", "Une erreur est survenue.", "error");

      }

    },
  }
}

</script>

