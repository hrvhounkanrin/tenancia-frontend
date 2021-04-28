<template>
   <div class="p-3">
        <ul class="pagination justify-content-center mb-0">
            <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="$emit('previous-page')">
                    <font-awesome-icon icon="chevron-left"/>
                </a>
            </li>
            <li class="page-item " v-bind:class="{ active: selected==n }" v-for="n in paginationLength" :key="n"><a class="page-link" href="javascript:void(0)" @click="$emit('select-page', n)">{{n}}</a></li>
            <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Next" @click="$emit('next-page')">
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

export default {
  name: 'paginate',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    perPage: Number,
    paginationLength: Number,
    selected: true //nbre d'élément par page
  },
   
}
</script>
