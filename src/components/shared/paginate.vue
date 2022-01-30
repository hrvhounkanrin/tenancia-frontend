<template>
   <div class="p-3">
        <ul class="pagination justify-content-center mb-0">
           <li class="page-item" >
                <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                    <font-awesome-icon icon="chevron-left"/>
                </a>
            </li>
            <li  v-for="i in pageCount" :key="i" class="page-item" :class="[(activePage==i) ? 'active' : '']">
                <a class="page-link" href="javascript:void(0)" @click="setActivePage(i)">{{i}}</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                    <font-awesome-icon icon="chevron-right"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight, faChevronLeft,} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight, faChevronLeft,);
import { paginator, getPageCount } from '@/utils/index'

export default {
  name: 'paginate',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    dataLength: Number,
    nbItemPerPage: Number,
    activePage: Number,
  },
  computed: {
    pageCount: function(){
        return getPageCount(this.dataLength, this.nbItemPerPage)
    }
  },
  methods: {
    setActivePage: function(numPage){
      this.$emit('set-active-page', numPage)
    }
  }
}
</script>
