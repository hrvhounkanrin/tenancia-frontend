<template>
    <div>
        <b-alert show class="d-flex align-items-center pl-2 align-content-center" v-bind:variant="variant" >
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon v-bind:icon="icon" />
            </span>
            <span>
                <strong class="d-block">{{title}}</strong> {{msg}}
            </span>
        </b-alert>

        <!--<b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
            ></b-progress>
        </b-alert>-->

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
  props: ['title', 'variant', 'icon', 'msg', 'icon']

}
</script>
