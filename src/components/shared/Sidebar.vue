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
                <sidebar-menu showOneChild :menu="getUserMenus"/>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>

import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import { SidebarMenu } from 'vue-sidebar-menu'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { SettingsIcon, PlusIcon, FileTextIcon, FolderIcon,
  HomeIcon, UserCheckIcon, CheckCircleIcon, LayoutIcon,
  PaperclipIcon, LayersIcon, ListIcon, BriefcaseIcon,
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
Vue.component('list-icon', ListIcon)
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
  computed: {
    ...mapState({
      api_errors: (state) => state.contrats.errors,
      userProfiles: (state) => state.user.profileList,
    }),
    ...mapGetters("user", ["getUserMenus"]),
    sidebarCollapsed: {
      get () {
        return this.$store.state.shared.sidebarCollapsed
      },
      set (value) {
        this.$store.commit('shared/SET_SIDEBAR_COLLAPSED', value)
      }
    }
  },
  props: {
    sidebarbg: String
  },
  data () {
    return {
      /*initalMenu: [
        {
          header: true,
          title: 'TENANCIA',
          authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE']
        },
        {
          title: 'Biens immobiliers',
          href: '/my-properties',
          icon: {
            element: 'home-icon'
          },
          authorizedProfiles: ['LESSOR', 'REALESTATE']
        },
        {
          title: 'Portefeuille de contrats',
          href: '/my-portfolio',
          icon: {
            element: 'folder-icon'
          },
          authorizedProfiles: ['LESSOR', 'REALESTATE']
        },
        {
          title: 'Contrats de bail',
          href: '/my-contracts',
          icon: {
            element: 'file-text-icon'
          },
          authorizedProfiles: ['TENANT']
        },
        {
          title: 'Quittances de bail',
          href: '/tenant-quittances',
          icon: {
            element: 'clipboard-icon'
          },
          authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE']
        },
        {
          title: 'Quittances bailleur',
          href: '/lessor-quittances',
          authorizedProfiles: ['LESSOR', 'REALESTATE'],
          icon: {
            element: 'list-icon'
          }
        },
        {
          title: 'Services plus',
          icon: {
            element: 'plus-icon'
          },
          authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT'],
          child: [
            {
              href: '#',
              title: 'Réparations locatives',
              authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT']
            },
            {
              href: '#',
              title: 'Déclarations fiscales',
              class: 'pr-2',
              authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT']

            }

          ]
        },
        {
          title: 'Paramètres',
          authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE'],
          icon: {
            element: 'settings-icon'
          }
        }
      ],*/
      //menu: [],
      collapsed: true
    }
  },
  mounted () {
  },
  methods: {
    toggleSidebar () {
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  }

}
</script>
