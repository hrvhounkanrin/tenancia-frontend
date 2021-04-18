<template>
    <div>
        <PageTitle heading="Mes profils" subheading="Que vous soyez bailleurs, locataire ou agent immobilier, nous vous rendons la vie facile." :steps="breadcrumb"/>
        
        
        <div class="container">
            <div class="mb-5">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                            <div class="card-indicator bg-success"></div>
                            <div class="card-body">
                                <div class="bg-deep-blue text-white display-4 card-icon-wrapper rounded-circle">
                                    <img src="@/assets/icons/home-a.png" height="50" width="50"/>
                                </div>
                                <h3 class="heading-6 mt-4 mb-4">Locataire</h3>
                                <p class="card-text mb-4">
                                Nous vous aidons à faire un meilleur suivi de vos contrats de bails...
                                </p>
                                <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" @click="editTenant" title="Editer mon profil locataire"><span>{{(!haveTenantProfile) ? 'Créer mon profil' : 'Modifier mon profil' }}</span></a>
                            </div>
                        </div>
                        <div class="card card-box mb-5"  v-if="haveTenantProfile && !editingTenant">
                            <div class="card-indicator bg-success"></div>
                            <div class="card-body px-4 py-3">
                                 <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block">N° TELEPHONE</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" id="locataire_profession" >{{tenantProfile.phone_number}}</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" >PROFESSION</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50  d-block" id="locataire_profession" >{{tenantProfile.profession}}</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" >CONTACT ECU</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50  d-block"  id="locataire_ice_contact">{{tenantProfile.ice_contact}}</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" >TN° ELEPHONE ECU</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50  d-block" id="locataire_ice_number">+{{tenantProfile.ice_number}}</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" >RELATION ECU</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50  d-block" id="locataire_relation">{{tenantProfile.ice_relation}}</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                        <div class="pl-2" >
                                                <font-awesome-icon icon="question-circle"/>
                                        </div>
                                        <div class="text-center" >
                                            <span class="d-block">ECU: En cas d'urgence</span>
                                        </div>
                                        
                                    </div>
                               
                            </div>
                        </div>
                        <div class="card card-box mb-5" v-if="editingTenant">
                            <div class="card-indicator bg-success"></div>
                            <div class="card-body px-4 py-3">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="N° TELEPHONE"  label-for="tenant_phone_number" >
                                            <span  class="invalid-feedback d-block" v-if="errors.phone_numberMsg" >{{errors.phone_numberMsg}}</span >
                                            <vue-phone-number-input id="phone_number" default-country-code="BJ" 
                                                    :translations="translations" 
                                                    :only-countries="onlyCountries" 
                                                    v-model="tenant.phone_number" />
                                            </b-form-group>
                                            
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="PROFESSION"  label-for="profession" >
                                            <span  class="invalid-feedback d-block" >{{errors.professionMsg}}</span >
                                            <b-form-input id="profession"  trim  v-model="tenant.profession"></b-form-input> </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">

                                            <b-form-group label="PERSONNE A CONTACTER ECU" label-for="ice_contact" >
                                            <span  class="invalid-feedback d-block" v-if="errors.ice_contactMsg" >{{errors.ice_contactMsg}}</span >
                                            <b-form-input id="ice_contact-2"  trim v-model="tenant.ice_contact"></b-form-input> </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="TELEPHONE ECU" label-for="ice_number" >
                                            <span  class="invalid-feedback d-block" v-if="errors.ice_numberMsg" >{{errors.ice_numberMsg}}</span>
                                            <vue-phone-number-input id="ice_number" default-country-code="BJ" 
                                                    :translations="translations" 
                                                    :only-countries="onlyCountries" 
                                                    v-model="tenant.ice_number" />
                                            </b-form-group>
                                        </div>
                                       <div class="col-md-12 mb-12">
                                            <b-form-group label="LIEN DE PARENTE ECU" label-for="ice_relation" >
                                            <span  class="invalid-feedback d-block" v-if="errors.ice_relationMsg" >{{errors.ice_relationMsg}}</span> 
                                            <autocomplete-input class="form-input"
                                                    v-model="tenant.ice_relation"
                                                    :list="iceRelation"
                                                    :filter-by-query="true">
                                                </autocomplete-input>
                                            </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <alert v-if="errors.tenantMsg" variant="danger" v-bind:msg="errors.tenantMsg" icon="bell"></alert>
                                        </div>
                                    </div>
                                    <div class="align-box-row">
                                        <div class="pl-2" >
                                                <font-awesome-icon icon="question-circle"/>
                                        </div>
                                        <div class="text-center" >
                                            <span class="d-block">ECU: En cas d'urgence</span>
                                        </div>
                                        
                                    </div>
                                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1"  title="Save tenant" @click="saveTenant"><span>Sauvegarder</span></a>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                            <div class="card-indicator bg-first"></div>
                            <div class="card-body">
                                <div class="bg-sunny-morning text-white display-4 card-icon-wrapper rounded-circle">
                                    <img src="@/assets/icons/key-a.png" height="50" width="50"/>
                                </div>
                                <h3 class="heading-6 mt-4 mb-4">Bailleur</h3>
                                <p class="card-text mb-4">
                                    Tenancia vous aide à mieux gérer vos bien immobiliers...
                                </p>
                                <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" @click="editLessor" title="Learn more"><span>{{(!haveLessorProfile) ? 'Créer mon profil' : 'Modifier mon profil' }}</span></a>
                            </div>
                        </div>
                        <div class="card card-box mb-5" v-if="haveLessorProfile" >
                            <div class="card-indicator bg-first"></div>
                            <div class="card-body px-4 py-3">
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >PAYS DE RESIDENCE</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="bailleur_pays">BENIN</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >MODE DE PAIEMENT</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="bailleur_mode_paiement">Momo, Cash</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >N° IFU</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="bailleur_numero_ifu">090980980298309283</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >BANQUE DE RECEPTION</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="bailleur_banque">ECOBANK</span></b>
                                </div>

                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block"  >N° COMPTE</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="bailleur_numcompte">00954058045092</span></b>
                                </div>
                                
                            </div>
                        </div>
                         <div class="card card-box mb-5" v-if="editingLessor">
                            <div class="card-indicator bg-first"></div>
                            <div class="card-body px-4 py-3">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="PAYS DE RESIDENCE"   label-for="pays_residence" ></b-form-group>
                                            <b-form-select  v-model="lessor.pays_residence"  id="pays_residence" text-field="label" value-field="id"  :options="countries"></b-form-select>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="TELEPHONE " label-for="ice_number" >
                                            <span  class="invalid-feedback d-block" v-if="errors.ice_numberMsg" >{{errors.ice_numberMsg}}</span>
                                            <vue-phone-number-input id="ice_number" default-country-code="BJ" 
                                                    :translations="translations" 
                                                     v-model="lessor.phone_number" 
                                                    :only-countries="onlyCountries"  />
                                            </b-form-group>
                                        </div>
                                        <!-- <div class="col-md-12 mb-12">
                                            <b-form-group label="RELATION ECU" label-for="ice_relation" >
                                            <b-form-input id="ice_relation"  trim></b-form-input> </b-form-group>
                                        </div> -->
                                        <!-- <div class="col-md-12 mb-12">
                                            <b-form-group label="MODE DE PAIEMENT" label-for="mode_paiement" >
                                            <b-form-input id="mode_paiement"  trim></b-form-input> </b-form-group>
                                        </div> -->
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="MODE DE PAIEMENT" label-for="mode_paiement" ></b-form-group>
                                            <b-form-select id="mode_paiement"  v-model="lessor.mode_paiement"  text-field="label" value-field="id"  :options="virementList"></b-form-select>
                                        </div>

                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="BANQUE" label-for="banque" ></b-form-group>
                                            <b-form-select id="banque"  v-model="lessor.banque"  text-field="libbanque" value-field="id"  :options="banquesList"></b-form-select>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="N° COMPTE" label-for="numero_compte" >
                                            <b-form-input id="numero_compte" v-model="lessor.num_compte" trim></b-form-input> </b-form-group>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" target="_blank" title="Learn more" @click="saveLessor"><span>Sauvegarder</span></a>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" >
                        <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                            <div class="card-indicator bg-warning"></div>
                            <div class="card-body">
                                <div class="bg-grow-early text-white display-4 card-icon-wrapper rounded-circle">
                                    <img src="@/assets/icons/landlord-b.png" height="50" width="50"/>
                                </div>
                                <h3 class="heading-6 mt-4 mb-4">Agent immobilier</h3>
                                <p class="card-text mb-4">
                                    La gestion de votre portefeuille mandat n'a jamais été aussi facile qu'avec Tenancia...
                                </p>
                                <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" @click="editSociety"  title="Learn more"><span>Créer mon profil</span></a>
                            </div>
                        </div>
                        <div class="card card-box mb-5" v-if="haveRealEstateProfile">
                            <div class="card-indicator bg-warning"></div>
                            <div class="card-body px-4 py-3">
                                 <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >Raison sociale</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="agence_raison_sociale" >RESIDENCES GK</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >N° TELEPHONE</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="agence_numero_tel">090230954094</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >ADRESSE</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="agence_adresse" >SIKE NORD</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >N° IFU</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" agence_numeroifu >09093403940343</span></b>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <span class="text-black-50 d-block" >N° CARTE PROFESSIONNEL</span>
                                </div>
                                <div class="d-flex align-items-left justify-content-start">
                                     <b><span class="d-block" id="agence_numcarte">9080676</span></b>
                                </div>
                            </div>
                        </div>
                         <div class="card card-box mb-5" v-if="editingRealEstate">
                            <div class="card-indicator bg-warning" ></div>
                            <div class="card-body px-4 py-3" >
                                <form>
                                    <div class="row">
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="RAISON SOCIALE"  label-for="raison_sociale" >
                                            <b-form-input id="raison_sociale"  trim></b-form-input> </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="NUMERO TELEPHONE" label-for="numero_telephone" >
                                            <b-form-input id="numero_telephone"  trim></b-form-input> </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="ADRESSE" label-for="adresse" >
                                            <b-form-input id="ice_relation"  trim></b-form-input> </b-form-group>
                                        </div>

                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="NUMERO IFU" label-for="numero_ifu" ></b-form-group>
                                            <b-form-input id="numero_ifu"  trim></b-form-input> </b-form-group>
                                        </div>
                                        <div class="col-md-12 mb-12">
                                            <b-form-group label="N° CARTE PROFESSIONNEL" label-for="numero_carte" >
                                            <b-form-input id="numero_carte"  trim></b-form-input> </b-form-group>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" target="_blank" title="Learn more"><span>Sauvegarder</span></a>
                                </form>

                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { mixin } from "@/mixin/mixin";

import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { alert } from '@/components/shared/'

library.add(
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
)

export default {
  name: 'Profiles',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    alert
  },
  data () {
    return {
      breadcrumb:[{
          libelle: 'Tenancia',
          link: '#'
      }],
      //Start  vue-phone-number-input config
      translations:{
        countrySelectorLabel: 'Code pays',
        countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: 'Numéro de téléphone',
        example: 'Exemple :'
      },
      onlyCountries: ['BJ','TG','CI','NE','NG','CM','BF','ML', 'FR'],
      countries: [],
      //End  vue-phone-number-input config
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      striped: false,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      fixed: false,
      footClone: false,
      editingTenant: false,
      editingLessor: false,
      editingRealEstate: false,
      errors: {},
      tenant:{
          id: null,
          profession: null,
          ice_contact: null,
          ice_number: null,
          ice_relation: null,
          phone_number: null,
      },
      lessor:{
          id: null,
          pays_residence: null,
          phone_number: null,
          banque: null,
          num_compte: null,
          mode_paiement: null,
      }

    }
  },
  created: function () {
    this.getBanques();
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
    this.myProfiles().then(res => {
          console.log('res', res.data)
          let profiles = res.data.payload.profiles
          this.setProfiles(profiles)
          console.log('profiles: ', profiles)
    })
    .catch(err => {
        //this.signupError('Une erreur est survenue lors de la création de votre compte')
        // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
        console.log('err', err.response)
    })
  },
  computed: {
    ...mapGetters('user', ['haveTenantProfile', 'haveLessorProfile', 'haveRealEstateProfile', 'tenantProfile', 'lessorProfile', 'realEstateProfile']),
        ...mapGetters('banque', ['banquesList', 'virementList']),

  },
  methods: {
    ...mapActions('user', ['myProfiles', 'createTenant', 'updateTenant']),
    ...mapActions('banque', ['getBanquesList']),
    ...mapMutations('user', {
      setProfiles: 'PROFILES'
    }),
    async getBanques() {
        await this.getBanquesList();
        console.log(this.banquesList, "viral")
    },
    iceRelation(){
        return [
            'Cousin(e)', 'Grand-père','Grande-mère','Père','Mère','Tante','Oncle','Grande tante',
            'Soeur','Fère','Conjoint(e)','Beau-père','Belle-mère','Enfant','Parent éloigné','Neveu','Nièce'
        ].sort()
    },
    editTenant (e) {
      this.editingTenant = true
      if(this.haveTenantProfile){
          this.tenant = this.tenantProfile
          this.$forceUpdate()
      }
    },
    editLessor (e) {
      this.editingLessor = true
    },
    editSociety (e) {
      this.editingRealEstate = true
    },
    onTenantActionSucess(res){
        console.log('res', res.data.payload.client)
         
          let tenant = res.data.payload.client
          let profiles = {
              tenant: tenant,
              lessor: this.lessorProfile,
              realEstate: this.realEstateProfile
          }
          this.setProfiles(profiles)
          this.editingTenant = false
          this.$forceUpdate()
    },
    onTenantActionFailure(err){
         this.errors.tenantMsg = err.response.data.message
          this.$forceUpdate()
          console.log('err', err.response)
    },

      onLessorActionSucess(res){
        console.log('res', res.data.payload.client)
         
          let lessor = res.data.payload.client
          let profiles = {
              lessor: lessor,
              tenant: this.tenant,
              realEstate: this.realEstateProfile
          }
          this.setProfiles(profiles)
          this.editingLessor = false
          this.$forceUpdate()
    },
    onLessorActionFailure(err){
         this.errors.lessorMsg = err.response.data.message
          this.$forceUpdate()
          console.log('err', err.response)
    },
    async saveTenant(){
        this.errors = {}
        this.errors.phone_numberMsg = (!this.tenant.phone_number) ? 'Veuillez renseigner votre n° téléphone' : null
        this.errors.professionMsg = (!this.tenant.profession) ? 'Veuillez renseigner votre profession' : null
        this.errors.ice_contactMsg = (!this.tenant.ice_contact) ? 'Veuillez renseigner une personne à contacter ECU': null
        this.errors.ice_numberMsg = (!this.tenant.ice_number) ? 'Veuillez renseigner le numéro de la personne à contacter ECU': null
        this.errors.ice_relationMsg = (!this.tenant.ice_relation) ? 'Veuillez renseigner votre lien de parenté': null
        console.log(Object.values(this.errors).some(x => (x === null )))
        
        //return if any error property is not null
        if(!Object.values(this.errors).some(x => (x === null ))){
            console.log(this.errors)
             vm.editingTenant = true
             this.$forceUpdate()
             return
        }

        if (this.tenant.id && this.tenant.id > 0){
                await this.updateTenant(this.tenant).then(res => this.onTenantActionSucess(res)).catch(err => this.onTenantActionFailure(err))
        }
        else{
            await this.createTenant(this.tenant).then(res => this.onTenantActionSucess(res)).catch(err => this.onTenantActionFailure(err))
        }
        
        
    },
        async saveLessor(){
        this.errors = {}
        this.errors.phone_numberMsg = (!this.lessor.phone_number) ? 'Veuillez renseigner votre n° téléphone' : null
        this.errors.pays_residenceMsg = (!this.lessor.pays_residence) ? 'Veuillez choisir votre pays de résidence' : null
        this.errors.banqueMsg = (!this.lessor.banque) ? 'Veuillez choisir une banque' : null
        this.errors.mode_paiementMsg = (!this.lessor.mode_paiement) ? 'Veuillez choisir un mode de paiement' : null
        this.errors.num_compteMsg = (!this.lessor.num_compte) ? 'Veuillez renseigner votre numéro de compte' : null
        console.log(Object.values(this.errors).some(x => (x === null )))
        
        //return if any error property is not null
        if(!Object.values(this.errors).some(x => (x === null ))){
            console.log(this.errors)
             vm.editingLessor = true
             this.$forceUpdate()
             return
        }

        if (this.lessor.id && this.lessor.id > 0){
                await this.updateLessor(this.lessor).then(res => this.onLessorActionSucess(res)).catch(err => this.onLessorActionFailure(err))
        }
        else{
            await this.createLessor(this.lessor).then(res => this.onLessorActionSucess(res)).catch(err => this.onLessorActionFailure(err))
        }
        
        
    }
    
  }
}
</script>
