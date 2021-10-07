<template>
    <portal to="payment">
        <b-modal id="modal-bbb4" body-class="p-0" :hide-footer="true" :hide-header="true" size="lg" centered>
            <div class="row no-gutters">
                
                <div class="col-lg-12" id="mtn-momo-card"> 
                    <div class="pl-5 pr-5 pt-5">
                        <label>
                            <input type="radio" name="payment-method" class="card-input-element d-none" id="mtn-momo" checked @click="selectPaymentMethod('mtn-momo')">
                            <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                                
                                 <div class="d-flex align-items-center flex-column flex-sm-row">
                            <div>
                                <div class="avatar-icon">
                                    <img src="@/assets/img/mtn momo.png" class="rounded" alt="...">
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-4">
                                <div class="d-flex align-items-center">
                                    <span class="font-size-lg"><b>MTN MOMO</b></span>
                                </div>
                            </div>
                        </div>
                            </div>
                        </label>
                        <label class="mt-1">
                            <input type="radio" name="payment-method" class="card-input-element d-none" value="moov-money" @click="selectPaymentMethod('moov-money')"> 
                            <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                                
                                 <div class="d-flex align-items-center flex-column flex-sm-row">
                            <div>
                                <div class="avatar-icon">
                                    <img src="@/assets/img/moov money.png" class="rounded" alt="...">
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-4">
                                <div class="d-flex align-items-center">
                                    <span class="font-size-lg"><b>MOOV MONEY</b></span>
                                </div>
                            </div>
                        </div>
                            </div>
                        </label>
                        <label class="mt-1">
                            <input type="radio" name="payment-method" class="card-input-element d-none" value="visa-card" @click="selectPaymentMethod('visa-card')">
                              <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                                
                                 <div class="d-flex align-items-center flex-column flex-sm-row">
                            <div>
                                <div class="avatar-icon"><img src="@/assets/img/mastercard-logo.png" alt=""></div>
                        </div>
                        <div class="pl-0 pl-sm-4">
                            <div class="d-flex align-items-center">
                                <span class="font-size-lg"><b>CARTES BANCAIRES</b></span>
                                <span class="badge badge-neutral-info text-info ml-2"></span>
                            </div>
                        </div>
                        </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-12 pl-5 pr-5 pb-2">
                    <div class="card card-box bg-midnight-bloom text-light">
                        <div class="card-body">
                            <div class="align-box-row align-items-start">
                                <div class="font-weight-bold">
                                    <small class="text-white-50 d-block mb-1 text-uppercase">TOTAL A PAYER</small>
                                    <span class="font-size-xxl mt-1">{{montant}} XOF</span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters" v-show="showMobile">
                <div class="col-md-12">
                    <div class="pl-5 pr-5">
                      <div class="form-group">
                             <input type="text" class="form-control mb-2" placeholder="Nom & PRENOMS" id="last_name" />
                             <vue-tel-input  class="form-control" :onlyCountries="['BJ', 'TG', 'CI', 'NE']"></vue-tel-input>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters" v-show="!showMobile">
                
                 <div class="col-lg-12">
                     <form>
                         <div class="pl-5 pr-5">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Nom & Prénoms</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder="NOMS & PRENOMS">
                            </div>
                            <div class="form-group col-md-12">
                                <label for="numcard">Numéro Carte</label>
                                <input-facade id="numcard" mask="#### #### #### ####" class="form-control" placeholder="0000-0000-0000-0000" />
                            </div>
                            <div class="form-group col-md-8">
                                <label for="yearmonth">MOIS/ANNEE</label>
                                <input-facade id="date_effet_start" mask="##/####" class="form-control" placeholder="MM/YYYY" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="cvv">CVV</label>
                                <input-facade id="cvv" mask="###" class="form-control" placeholder="CVV" />
                            </div>
                        </div>
                       
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="row no-gutters">             
                 <div class="col-md-12 pl-5 pr-5 pb-2">
                     <button type="button" class="btn btn-primary btn-lg btn-block">PROCEDER AU PAIEMENT</button>
                </div>
            </div>
        </b-modal>
    </portal>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faClock,
        faQuestionCircle,
        faArrowRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import { InputFacade } from 'vue-input-facade'
    library.add(
        faClock,
        faQuestionCircle,
        faArrowRight
    );

    export default {
        name: 'PaymentCard',
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            InputFacade
        },
        props: {
            montant: { required: true },
        },
        data: function () {
            return {
                paymentMethod: 'mtn-momo',
                showMobile: true
            }
        },
        mounted() {
        },
        methods: {
            selectPaymentMethod: function(payment){
                this.paymentMethod = payment
                const mobiles = ['mtn-momo', 'moov-money']
                const bankCards = ['visa-card']
                this.showMobile = mobiles.includes(payment)
            }
           
        }
    }
</script>
<style scoped>
label {
  width: 100%;
  font-size: 1rem;
}

.card-input-element+.card {
  height: calc(36px + 2*1rem);
  color: var(--primary);
  -webkit-box-shadow: none;
  box-shadow: none;
  border: px solid transparent;
  border-radius: 4px;
}

.card-input-element+.card:hover {
  cursor: pointer;
}

.card-input-element:checked+.card {
  border: 2px solid var(--primary);
  -webkit-transition: border .3s;
  -o-transition: border .3s;
  transition: border .3s;
}

.card-input-element:checked+.card::after {
  content: '\e5ca';
  color: #AFB8EA;
  font-family: 'Material Icons';
  font-size: 24px;
  -webkit-animation-name: fadeInCheckbox;
  animation-name: fadeInCheckbox;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@-webkit-keyframes fadeInCheckbox {
  from {
    opacity: 0;
    -webkit-transform: rotateZ(-20deg);
  }
  to {
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
  }
}

@keyframes fadeInCheckbox {
  from {
    opacity: 0;
    transform: rotateZ(-20deg);
  }
  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}
.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}
</style>