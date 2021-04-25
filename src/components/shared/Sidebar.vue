<template>
    <div class="app-sidebar app-sidebar--dark" :class="sidebarbg">
        <div class="app-sidebar--header">
            <div class="nav-logo w-100 text-center">
                <router-link tag="a" class="d-block" active-class="active" to="/" exact v-b-tooltip.bottom title="Fully built and powered by Vue.js 🚀">
                    <img src="@/assets/img/Lg_Tenancia_test_CC.png" alt=""  height="60" width="200">
                </router-link>
            </div>
            <button class="toggle-sidebar rounded-circle btn btn-sm bg-white shadow-sm-dark text-primary" v-b-tooltip.right title="Expand Sidebar" v-bind:class="{'is-active': sidebarCollapsed}" type="button" v-on:click="toggleSidebar">
                <font-awesome-icon icon="arrows-alt-h"/>
            </button>
        </div>
        <VuePerfectScrollbar class="app-sidebar--content">
            <div class="sidebar-navigation">
                <sidebar-menu showOneChild :menu="menu"/>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>

import Vue from 'vue'

import { SidebarMenu } from 'vue-sidebar-menu'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { SettingsIcon, PlusIcon, FileTextIcon, FolderIcon,
  HomeIcon, UserCheckIcon, CheckCircleIcon, LayoutIcon,
  PaperclipIcon, LayersIcon, DatabaseIcon, BriefcaseIcon,
  MapPinIcon, PieChartIcon, ClipboardIcon } from 'vue-feather-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowsAltH, faHome, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('home-icon', HomeIcon)
Vue.component('user-check-icon', UserCheckIcon)
Vue.component('check-circle-icon', CheckCircleIcon)
Vue.component('layout-icon', LayoutIcon)
Vue.component('paper-clip-icon', PaperclipIcon)
Vue.component('layers-icon', LayersIcon)
Vue.component('database-icon', DatabaseIcon)
Vue.component('briefcase-icon', BriefcaseIcon)
Vue.component('map-pin-icon', MapPinIcon)
Vue.component('pie-chart-icon', PieChartIcon)
Vue.component('folder-icon', FolderIcon)
Vue.component('file-text-icon', FileTextIcon)
Vue.component('plus-icon', PlusIcon)
Vue.component('settings-icon', SettingsIcon)
Vue.component('clipboard-icon', ClipboardIcon)

library.add(
  faArrowsAltH, faHome, faFileInvoiceDollar
)

export default {
  components: {
    SidebarMenu,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    sidebarbg: String
  },
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'TENANCIA'
        },
        {
          title: 'Mes biens',
          icon: {
            element: 'home-icon'
          }
        },
        {
          title: 'Mon portefeuille',
          icon: {
            element: 'folder-icon'
          }
        },
        {
          title: 'Mes contrats',
          icon: {
            element: 'file-text-icon'
          }
        },
        {
          title: 'Mes quittances',
          icon: {
            element: 'clipboard-icon'
          }
        },
        {
          title: 'Services plus',
          icon: {
            element: 'plus-icon'
          }
        },
        {
          title: 'Paramètres',
          icon: {
            element: 'settings-icon'
          }
        }
      ],
      collapsed: true
    }
  },
  computed: {
    sidebarCollapsed: {
      get () {
        return this.$store.state.shared.sidebarCollapsed
      },
      set (value) {
        this.$store.commit('shared/SET_SIDEBAR_COLLAPSED', value)
      }
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  }
}
</script>
