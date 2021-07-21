<template>
  <div>
    <PageTitle
      heading="Mes profils"
      subheading="Que vous soyez bailleurs, locataire ou agent immobilier, nous vous rendons la vie facile."
      :steps="breadcrumb"
    />

    <div class="container">
      <div class="mb-5">
        <div class="row">
          <div class="col-lg-4">
            <tenant-detail haveTenantProfile></tenant-detail>
          </div>
          <div class="col-lg-4">
            <lessor-detail></lessor-detail>
          </div>
          <div class="col-lg-4">
            <realEstate-detail></realEstate-detail>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { mixin } from '@/mixin/mixin'
import moment from 'moment'
import {
  faArrowRight,
  faArrowUp,
  faBinoculars,
  faTrashAlt,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

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
  },
  data () {
    return {
      testB: '',
      breadcrumb: [
        {
          libelle: 'Tenancia',
          link: '#'
        }
      ],

      onlyCountries: ['BJ', 'TG', 'CI', 'NE', 'NG', 'CM', 'BF', 'ML', 'FR'],
      countries: [],
      striped: false,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      fixed: false,
      footClone: false

    }
  },

  created () {
    console.log(this)
    // this.getBanques();
    this.$store.dispatch('banque/getBanquesList')
    this.$store.dispatch('user/myProfiles')

    this.countries = mixin.methods.getAllCountry(this.onlyCountries)

    /* this.myProfiles()
      .then((res) => {
        // let profiles = res.data.payload;
        // this.setProfiles(profiles);
      })
      .catch((err) => {
        // this.signupError('Une erreur est survenue lors de la création de votre compte')
        // this.$store.commit('AUTH/LOCAL_SIGNUP_FAILURE', 'Une erreur est survenue lors de la création de votre compte')
        console.log('err', err.response)
      }) */
  },
  computed: {

    ...mapGetters('banque', ['banquesList']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('user', ['getProfiles'])
  },
  methods: {
    /*
    ...mapActions("user", ["myProfiles",]),
    ...mapActions("banque", ["getBanquesList"]),
    */
    async getBanques () {
      await this.getBanquesList()
    }

  }
}
</script>
