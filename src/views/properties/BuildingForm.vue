<template>
        <b-modal id="theForm" body-class="p-0" size="lg" centered>
            <div slot="modal-header">
                <h3>Edition Immeuble</h3>
            </div>
            <div class="row no-gutters">

                <div class="col-lg-7">
                    <div class="p-5">
                        <slot name="modal-content">

                        </slot>
                    </div>

                </div>
                <div class="col-lg-5">
                    <slot name="left-img"><img src="@/assets/img/stock-photos/stock-1.jpg" class="rounded-rigth img-fit-container" alt="..."></slot>
                </div>
            </div>
            <div class="row" slot="modal-footer">

            <b-button class="col mt-2 mb-2 ml-3 mr-3" variant="warning" @click="$emit('hide-modal')">
              Annuler
            </b-button>
            <b-button class="col mt-2 mb-2 ml-2 mr-3" variant="primary" @click="onSave">
              <!-- <font-awesome-icon icon="save" class="mr-2" /> -->
              Enregistrer
              <span
                v-if="loadingSaveBuilding"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </b-button>

          </div>
        </b-modal>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import * as VueGoogleMaps from 'vue2-google-maps'
import {
  faClock,
  faQuestionCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faClock,
  faQuestionCircle,
  faArrowRight
)

export default {
  name: 'BorderlessModal',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data() {
    return {
      loadingSave: false,
      loadingSaveBuilding: false
    }
  },
  computed: {
    structures: () => {
      return []
    }
  },
  mounted () {
    // console.log(this.dependances)
  },
  methods: {
    onSave() {
      this.loadingSaveBuilding = true;
      this.loadingSave = true;
      this.$emit('save-data')
            this.loadingSave = false;
            this.loadingSaveBuilding = false;

    }
  },
  props: {
    id: String,
    hideFooter: Boolean,
    hideHeader: Boolean,
    size: String
  }
}
</script>
