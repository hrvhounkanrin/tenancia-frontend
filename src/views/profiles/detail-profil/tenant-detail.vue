<template>
  <div>
    <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
      <div class="card-indicator bg-success"></div>
      <div class="card-body">
        <div
          class="
            bg-deep-blue
            text-white
            display-4
            card-icon-wrapper
            rounded-circle
          "
        >
          <img src="@/assets/icons/home-a.png" height="50" width="50" />
        </div>
        <h3 class="heading-6 mt-4 mb-4">Locataire</h3>
        <p class="card-text mb-4">
          Nous vous aidons à faire un meilleur suivi de vos contrats de bails...
        </p>
        <a
          href="javascript:void(0)"
          class="btn-block btn btn-primary mt-1"
          @click="editTenant"
          title="Editer mon profil locataire"
        >
          <span>{{
            getProfiles && !getProfiles.tenant
              ? "Créer mon profil"
              : "Modifier mon profil"
          }}</span>
        </a>
      </div>
    </div>
    <div
      class="card card-box mb-5"
      v-if="getProfiles && getProfiles.tenant && !editingTenant"
    >
      <div class="card-indicator bg-success"></div>
      <div class="card-body px-4 py-3">
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° TELEPHONE</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.tenant.phone_number
          }}</span>
        </div>

        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">PROFESSION</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.tenant.profession
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° IFU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="numero_ifu">{{
            getProfiles.tenant.numero_ifu
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">CONTACT ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_ice_contact">{{
            getProfiles.tenant.ice_contact
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° TELEPHONE ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_ice_number"
            >+{{ getProfiles.tenant.ice_number }}</span
          >
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">RELATION ECU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_relation">{{
            getProfiles.tenant.ice_relation
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <div class="pl-2">
            <font-awesome-icon class="text-danger" icon="question-circle" />
          </div>
          <div class="text-center">
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
              <b-form-group
                label="N° TELEPHONE"
                label-for="tenant_phone_number"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.phone_numberMsg"
                  >{{ errors.phone_numberMsg }}</span
                >
                <div class="tenancia-country-code">
                  <vue-country-code
                    @onSelect="onSelect"
                    :preferredCountries="onlyCountries"
                  >
                  </vue-country-code>
                  <input
                    type="text"
                    class="form-control"
                    id="ice_number"
                    v-model="tenant.phone_number"
                    name="ice_number"
                  />
                </div>
                <!-- <vue-phone-number-input
                  id="phone_number"
                  default-country-code="BJ"
                  :translations="translations"
                  :only-countries="onlyCountries"
                  v-model="tenant.phone_number"
                /> -->
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="PROFESSION" label-for="profession">
                <span class="invalid-feedback d-block">{{
                  errors.professionMsg
                }}</span>
                <b-form-input
                  id="profession"
                  trim
                  v-model="tenant.profession"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="N° IFU" label-for="numero_ifu">
                <span class="invalid-feedback d-block">{{
                  errors.numero_ifuMsg
                }}</span>
                <b-form-input
                  id="numero_ifu"
                  trim
                  v-model="tenant.numero_ifu"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group
                label="PERSONNE A CONTACTER ECU"
                label-for="ice_contact"
              >
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_contactMsg"
                  >{{ errors.ice_contactMsg }}</span
                >
                <b-form-input
                  id="ice_contact-2"
                  trim
                  v-model="tenant.ice_contact"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="TELEPHONE ECU" label-for="ice_number">
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_numberMsg"
                  >{{ errors.ice_numberMsg }}</span
                >
                <!-- <vue-phone-number-input
                  id="ice_number"
                  default-country-code="BJ"
                  :translations="translations"
                  :only-countries="onlyCountries"
                  v-model="tenant.ice_number"
                /> -->
                <div class="tenancia-country-code">
                  <vue-country-code
                    @onSelect="onSelectIce"
                    :preferredCountries="onlyCountries"
                  >
                  </vue-country-code>
                  <input
                    type="text"
                    class="form-control"
                    id="ice_number"
                    v-model="tenant.ice_number"
                    name="ice_number"
                  />
                </div>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="LIEN DE PARENTE ECU" label-for="ice_relation">
                <span class="invalid-feedback d-block" v-if="errors.ice_relationMsg">{{ errors.ice_relationMsg }}</span>
                <b-form-select  v-model="tenant.ice_relation" :options="iceRelation"></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <alert
                v-if="errors.tenantMsg"
                variant="danger"
                v-bind:msg="errors.tenantMsg"
                icon="bell"
              ></alert>
            </div>
          </div>
          <div class="align-box-row">
            <div class="pl-2">
              <font-awesome-icon icon="question-circle" />
            </div>
            <div class="text-center">
              <span class="d-block">ECU: En cas d'urgence</span>
            </div>
          </div>
  <div class="row">

            <b-button class="col mt-2 mb-2 ml-3 mr-3" variant="danger" @click="editingTenant = false">
              Annuler
            </b-button>
            <b-button class="col mt-2 mb-2 ml-2 mr-3" variant="primary" @click="saveTenant">
              <!-- <font-awesome-icon icon="save" class="mr-2" /> -->
              {{ tenant.id && tenant.id > 0 ? "Enregistrer" : "Créer" }}
              <span
                v-if="loadingSaveTenant"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </b-button>

          </div>
          <!-- <div style="display: flex flex-direction: row">
            <a
              href="javascript:void(0)"
              class="btn-block btn btn-danger m-1"
              title="Save Lessor"
              @click="editingTenant = false"
            >
              <span>Annuler</span>
            </a>
            <a
              href="javascript:void(0)"
              class="btn-block btn btn-primary m-1"
              title="Save Tenant"
              @click="saveTenant"
            >
              <span>{{
                tenant.id && tenant.id > 0 ? "Enregistrer" : "Créer"
              }}</span>
            </a>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { alert } from "@/components/shared/"
import Datepicker from "vuejs-datepicker"


export default {
  name: "tenant-detail",
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    alert,
    Datepicker,
  },
  data() {
    return {
      //Start  vue-phone-number-input config
      translations: {
        countrySelectorLabel: "Code pays",
        countrySelectorError: "Choisir un pays",
        phoneNumberLabel: "Numéro de téléphone",
        example: "Exemple :",
      },
      onlyCountries: ["BJ", "TG", "CI", "NE", "NG", "CM", "BF", "ML", "FR"],
      countries: [],
      //End  vue-phone-number-input config
      editingTenant: false,
      errors: {},
      phone: {
        country: "",
        dial_code: "",
      },
      ice_phone: {
        country: "",
        dial_code: "",
      },
      loadingSaveTenant:false,
      tenant: {
        id: null,
        profession: null,
        ice_contact: null,
        ice_number: null,
        ice_relation: null,
        phone_number: null,
        numero_ifu: null,
        profile_type: "tenant",
      },
    }
  },
  computed: {
    ...mapGetters("user", ["getProfiles"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("general", ["iceRelation"]),
  },
    created: function () {
    this.tenant.phone_number = this.getProfiles.phone_number.split(" ")[1]
  },
  methods: {
    ...mapActions("user", ["createUserProfil", "updateUserProfil"]),

    editTenant(e) {
      this.editingTenant = true
      if (this.getProfiles && this.getProfiles.tenant) {
        this.tenant = { ...this.getProfiles.tenant, 
                phone_number: this.getProfiles.tenant.phone_number.split(' ')[1],
                ice_number: this.getProfiles.tenant.ice_number.split(' ')[1],
profile_type: "tenant" }
      }
    },
    onSelectIce({ name, iso2, dialCode }) {
      this.ice_phone.country = iso2
      this.ice_phone.dial_code = dialCode
    },
    onSelect({ name, iso2, dialCode }) {
      this.phone.country = iso2
      this.phone.dial_code = dialCode
    },
    onTenantActionSucess(res) {
      this.editingTenant = false
    },
    onTenantActionFailure(err) {
      this.errors.tenantMsg = err.response.data.message
      this.editingTenant = true
    },

    async saveTenant() {
      
      this.loadingSaveTenant = true
      this.errors = {}
      this.errors.phone_numberMsg = !this.tenant.phone_number
        ? "Veuillez renseigner votre n° téléphone"
        : null
      this.errors.professionMsg = !this.tenant.profession
        ? "Veuillez renseigner votre profession"
        : null
      this.errors.ice_contactMsg = !this.tenant.ice_contact
        ? "Veuillez renseigner une personne à contacter ECU"
        : null
      this.errors.ice_numberMsg = !this.tenant.ice_number
        ? "Veuillez renseigner le numéro de la personne à contacter ECU"
        : null
      this.errors.ice_relationMsg = !this.tenant.ice_relation
        ? "Veuillez renseigner votre lien de parenté"
        : null
      this.errors.numero_ifuMsg = !this.tenant.numero_ifu
        ? "Veuillez renseigner votre N° IFU"
        : null

      if (!Object.values(this.errors).some((x) => x === null)) {
        console.log(this.errors)
        vm.editingTenant = true
        return
      }

      if (this.tenant.id && this.tenant.id > 0) {
        const profileToUpdate = { 
          ...this.tenant,
          phone_number:`${this.phone.dial_code} ${this.tenant.phone_number}`, 
          ice_number:`${this.ice_phone.dial_code} ${this.tenant.ice_number}`, 
          profile_type: "tenant" 
        }
        await this.updateUserProfil(profileToUpdate)
          .then((res) => this.onTenantActionSucess(res))
          .catch((err) => this.onTenantActionFailure(err))
      } 
      const profileToCreate = {
        ...this.tenant,
        phone_number:`${this.phone.dial_code} ${this.tenant.phone_number}`, 
        ice_number:`${this.ice_phone.dial_code} ${this.tenant.ice_number}`,
        profile_type: "tenant" 
      }
      await this.createUserProfil(profileToCreate)
        .then((res) => this.onTenantActionSucess(res))
        .catch((err) => this.onTenantActionFailure(err))
  
      this.loadingSaveTenant = false

    },
  },
}
</script>

<style>
</style>

