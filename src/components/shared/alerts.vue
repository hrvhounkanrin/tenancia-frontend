<template>
    <div>
        <b-alert v-if="!dismissible"  show class="d-flex align-items-center pl-2 align-content-center mt-2" :variant="variant" >
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon v-bind:icon="icon" />
            </span>
            <span>
                <strong class="d-block">{{title}}</strong> {{msg}}
            </span>
        </b-alert>
       
        <b-alert v-if="dismissible" class="d-flex align-items-center pl-2 align-content-center mt-2"
                :show="dismissCountDown"
                :dismissible="dismissible"
                :variant="variant"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon v-bind:icon="icon" />
            </span>
            <span>
                <strong class="d-block">{{title}}</strong> {{msg}}
            </span>
        </b-alert> 

    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeadset,
  faQuestionCircle,
  faMedkit,
  faLifeRing,
  faBell
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeadset,
  faQuestionCircle,
  faMedkit,
  faLifeRing,
  faBell
)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data() {
      return {
          dismissCountDown: 0,
          showDismissibleAlert: true
      }
  },
  props: ['title', 'variant', 'icon', 'msg', 'icon','dismissSecs', 'dismissible'],
  created() {
    console.log('Alert created', this.dismissSecs)
    this.dismissCountDown =  (!this.dismissible) ? 1 : this.dismissSecs
  },
  methods: {
          countDownChanged(dismissCountDown) {
              if(!this.dismissible){
                  return
              }
              this.dismissCountDown = dismissCountDown
          },
          showAlert() {
              if(!this.dismissible){
                  return
              }
              this.dismissCountDown = this.dismissSecs
          }
      }

}
</script>