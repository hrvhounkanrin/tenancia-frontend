<template>
        <b-modal :id="id" body-class="p-0" :hide-footer="hideFooter" :hide-header="hideHeader" :size="size" centered>
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
            <div slot="modal-footer">
                <b-button variant="warning"  @click="$emit('hide-modal')" class="mr-1">Annuler</b-button>
                <b-button variant="first" class="ml-auto" @click="$emit('save-data')">Enregistrer</b-button>
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
  computed: {
    structures: () => {
      return []
    }
  },
  mounted () {
    // console.log(this.dependances)
  },
  props: {
    id: String,
    hideFooter: Boolean,
    hideHeader: Boolean,
    size: String
  }
}
</script>
