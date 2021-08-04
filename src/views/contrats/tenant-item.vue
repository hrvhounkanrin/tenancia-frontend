<template>
    
    <div class="align-box-row">
        <div class="mr-4">
            <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                <div class="dot-badge"></div>
                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
            </a>
        </div>
        <div class="flex-grow-1">
            <div class="d-flex align-items-center">
                <span class="font-size-lg">Business meeting</span>
                <span class="badge badge-neutral-info text-info ml-2">New</span>
            </div>
        </div>
        <div class="line-height-sm text-center ml-4">
            <small class="text-black-50 d-block text-uppercase">Totals</small>
            <b class="font-size-lg text-success"><small class="text-black-50">$</small> 2,345</b>
        </div>
    </div>

</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default {
  name: 'TenantItem',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    item: { required: true },
    searchText: { required: true }
  }
}

</script>

