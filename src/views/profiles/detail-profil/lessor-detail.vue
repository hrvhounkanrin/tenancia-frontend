<template>
  <div>
    <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
      <div class="card-indicator bg-first"></div>
      <div class="card-body">
        <div
          class="
            bg-sunny-morning
            text-white
            display-4
            card-icon-wrapper
            rounded-circle
          "
        >
          <img src="@/assets/icons/key-a.png" height="50" width="50" />
        </div>
        <h3 class="heading-6 mt-4 mb-4">Bailleur</h3>
        <p class="card-text mb-4">
          Tenancia vous aide à mieux gérer vos bien immobiliers...
        </p>
        <a
          href="javascript:void(0);"
          class="btn-block btn btn-primary mt-1"
          @click="editLessor"
          title="Editer mon profil bailleur"
        >
          <!-- {{(getProfiles && !getProfiles.lessor)?'true':'false'}} -->
          <span>{{
            getProfiles && !getProfiles.lessor
              ? "Créer mon profil"
              : "Modifier mon profil"
          }}</span>
        </a>
      </div>
    </div>
    <div
      class="card card-box mb-5"
      v-if="getProfiles && getProfiles.lessor && !editingLessor"
    >
      <div class="card-indicator bg-first"></div>
      <div class="card-body px-4 py-3">
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">PAYS DE RESIDENCE</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            countries.find(
              (pays) => pays.id == getProfiles.lessor.pays_residence
            )
              ? countries.find(
                  (pays) => pays.id == getProfiles.lessor.pays_residence
                ).label
              : ""
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° TELEPHONE</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.lessor.phone_number
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">MODE DE PAIEMENT</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.lessor.mode_paiement
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">BANQUE/EME</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.lessor.banque != null
              ? getProfiles.lessor.banque.libbanque
              : "-"
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° COMPTE</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.lessor.numcompte
          }}</span>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <b>
            <span class="d-block">N° IFU</span>
          </b>
        </div>
        <div class="d-flex align-items-left justify-content-start">
          <span class="text-black-50 d-block" id="locataire_profession">{{
            getProfiles.lessor.numero_ifu
          }}</span>
        </div>
        <div class="d-flex align-items-left">
          <font-awesome-icon class="text-danger" icon="question-circle" />
          <div>
            <span class="d-block">
              <b>EME:</b> Emetteur de Monnaie Electronique
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-box mb-5" v-if="editingLessor">
      <div class="card-indicator bg-first"></div>
      <div class="card-body px-4 py-3">
        <form>
          <div class="row">
            <div class="col-md-12 mb-12">
              <b-form-group
                label="PAYS DE RESIDENCE"
                label-for="pays_residence"
              ></b-form-group>
              <b-form-select
                v-model="lessor.pays_residence"
                id="pays_residence"
                text-field="label"
                value-field="id"
                :options="countries"
              ></b-form-select>
            </div>
            <div class="col-md-12 mb-12 mt-3">
              <b-form-group label="N° TELEPHONE" label-for="ice_number">
                <span
                  class="invalid-feedback d-block"
                  v-if="errors.ice_numberMsg"
                  >{{ errors.ice_numberMsg }}</span
                >
                <!-- <vue-phone-number-input
                  id="ice_number"
                  default-country-code="BJ"
                  :translations="translations"
                  v-model="lessor.phone_number"
                  :only-countries="onlyCountries"
                /> -->
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
                    v-model="lessor.phone_number"
                    name="ice_number"
                  />
                </div>
              </b-form-group>
            </div>

            <div class="col-md-12 mb-12">
              <b-form-group
                label="MODE DE PAIEMENT"
                label-for="mode_paiement"
              ></b-form-group>
              <b-form-select
                id="mode_paiement"
                v-model="lessor.mode_paiement"
                text-field="label"
                value-field="id"
                :options="modePaiementList"
              ></b-form-select>
            </div>
            <div class="col-md-12 mb-12 mt-3">
              <b-form-group
                label="BANQUE OU EME"
                label-for="banque"
              ></b-form-group>
              <b-form-select
                id="banque"
                v-model="lessor.banque_id"
                text-field="libbanque"
                value-field="id"
                :options="banquesList"
              ></b-form-select>
            </div>
            <div class="col-md-12 mb-12 mt-3">
              <b-form-group label="N° COMPTE" label-for="numero_compte">
                <b-form-input
                  id="numero_compte"
                  v-model="lessor.numcompte"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 mb-12">
              <b-form-group label="N° IFU" label-for="num_ifu">
                <b-form-input
                  id="num_ifu"
                  v-model="lessor.numero_ifu"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <!-- <a
            href="javascript:void(0);"
            class="btn-block btn btn-danger m-1"
            title="Save Lessor"
            @click="editingLessor = false"
          >
            <span>Annuler</span>
          </a> -->
            <b-button class="col mt-2 mb-2 ml-3 mr-3" variant="danger" @click="editingLessor = false">
              Annuler
            </b-button>
            <b-button class="col mt-2 mb-2 ml-2 mr-3" variant="primary" @click="saveLessor">
              <!-- <font-awesome-icon icon="save" class="mr-2" /> -->
              {{ lessor.id && lessor.id > 0 ? "Enregistrer" : "Créer" }}
              <span
                v-if="loadingSaveLessor"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </b-button>
            <!-- <a
            href="javascript:void(0);"
            class="btn-block btn btn-primary m-1"
            title="Save Lessor"
            @click="saveLessor"
          >
          
            <span>{{lessor.id && lessor.id > 0? 'Enregistrer' : 'Créer'}}</span>
          </a> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { alert } from "@/components/shared/";
import { library } from "@fortawesome/fontawesome-svg-core";
import Datepicker from "vuejs-datepicker";
import { mixin } from "@/mixin/mixin";
import moment from "moment";
import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "lessor-detail",
  // props: { tenant: Object },
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
      editingLessor: false,
      phone: {
        country: "",
        dial_code: "",
      },
      errors: {},
      loadingSaveLessor: false,
      lessor: {
        id: null,
        pays_residence: null,
        phone_number: null,
        banque_id: null,
        numcompte: null,
        numero_ifu: null,
        mode_paiement: null,
        profile_type: "lessor",
      },
    };
  },
  created: function () {
    // console.log("user", this.getProfiles)
    this.lessor.phone_number = this.getProfiles.phone_number.split(" ")[1]
    this.countries = mixin.methods.getAllCountry(this.onlyCountries);
  },
  computed: {
    ...mapGetters("user", ["getProfiles"]),
    ...mapGetters("banque", ["banquesList", "modePaiementList"]),
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    ...mapActions("user", ["createUserProfil", "updateUserProfil"]),
    onSelect({ name, iso2, dialCode }) {
      this.phone.country = iso2;
      this.phone.dial_code = dialCode;
    },
    editLessor(e) {
      this.editingLessor = true;
      if (this.getProfiles && this.getProfiles.lessor) {
        this.lessor = {
          ...this.getProfiles.lessor,
          phone_number: this.getProfiles.lessor.phone_number.split(" ")[1],
          profile_type: "lessor",
        };
        this.lessor.banque_id = this.getProfiles.lessor.banque.id;
        console.log(
          "res",
          this.banquesList.find(
            (x) => x.libbanque == this.lessor.banque.libbanque
          )
        );
        // this.$forceUpdate();
      }
    },
    onLessorActionSucess(res) {
      // let lessor = res.payload;
      // let profiles = {
      //   lessor: lessor,
      //   tenant: this.tenantProfile,
      //   real_estate: this.realEstateProfile
      // };
      // this.setProfiles(profiles);
      this.editingLessor = false;
      // this.$forceUpdate();
    },
    onLessorActionFailure(err) {
      this.errors.lessorMsg = err.response.data.message;
      this.editingLessor = true;
      // this.$forceUpdate();
    },
    async saveLessor() {
      this.loadingSaveLessor = true;
      this.errors = {};
      this.errors.phone_numberMsg = !this.lessor.phone_number
        ? "Veuillez renseigner votre n° téléphone"
        : null;
      this.errors.pays_residenceMsg = !this.lessor.pays_residence
        ? "Veuillez choisir votre pays de résidence"
        : null;
      this.errors.banque_idMsg = !this.lessor.banque_id
        ? "Veuillez choisir une banque"
        : null;
      this.errors.mode_paiementMsg = !this.lessor.mode_paiement
        ? "Veuillez choisir un mode de paiement"
        : null;
      this.errors.numcompteMsg = !this.lessor.numcompte
        ? "Veuillez renseigner votre numéro de compte"
        : null;

      this.errors.numifuMsg = !this.lessor.numero_ifu
        ? "Veuillez renseigner votre numéro IFU"
        : null;

      //return if any error property is not null
      if (!Object.values(this.errors).some((x) => x === null)) {
        vm.editingLessor = true;
        // this.$forceUpdate();
        return;
      }

      if (this.lessor.id && this.lessor.id > 0) {
        await this.updateUserProfil({
          ...this.lessor,
          user_id: this.user.id,
          profile_type: "lessor",
          phone_number: `${this.phone.dial_code} ${this.lessor.phone_number}`,
          country: this.phone.country,
        })
          .then((res) => this.onLessorActionSucess(res))
          .catch((err) => this.onLessorActionFailure(err));
      } else {
        await this.createUserProfil({
          banque_id: this.lessor.banque_id,
          id: this.lessor.id,
          mode_paiement: this.lessor.mode_paiement,
          numcompte: this.lessor.numcompte,
          numero_ifu: this.lessor.numero_ifu,
          // phone_number: this.lessor.phone_number,
          pays_residence: this.lessor.pays_residence,
          user_id: this.user.id,
          profile_type: "lessor",
          phone_number: `${this.phone.dial_code} ${this.lessor.phone_number}`,
          country: this.phone.country,
        })
          .then((res) => this.onLessorActionSucess(res))
          .catch((err) => this.onLessorActionFailure(err));
      }

            this.loadingSaveLessor = false;

    },
  },
};
</script>

<style>
</style>