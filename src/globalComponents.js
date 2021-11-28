import Vue from 'vue'

Vue.component('tenant-detail', () => import('@/views/profiles/detail-profil/tenant-detail.vue'))
Vue.component('lessor-detail', () => import('@/views/profiles/detail-profil/lessor-detail.vue'))
Vue.component('realEstate-detail', () => import('@/views/profiles/detail-profil/realEstate-detail.vue'))
Vue.component('general-informations', () => import('@/views/profiles/user-profil/general-informations.vue'))
