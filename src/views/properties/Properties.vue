<template>
    <div>
        <PageTitle heading="Mes biens"
                   subheading="Ajoutez vos biens, mettez les en location et percevez vos loyer..."/>
        <div class="bg-vicious-stance pt-5 pl-5 pr-5 mb-5 rounded">
            <div class="row">
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">3</b>
                                        <span class="text-black-50">Maisons & Immeubles</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">23</b>
                                        <span class="text-black-50">Appartements</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-warning"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">16</b>
                                        <span class="text-black-50">Contrats en cours</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="newspaper" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">635 0000 XOF</b>
                                        <span class="text-black-50">De loyer mensuel</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <small>Inventaire</small>
                            <b>Immeubles & Maisons</b>
                        </div>
                        <div class="card-header--actions">
                            <b-button variant="primary">
                                    <font-awesome-icon icon="plus" class="mr-2" />
                                    Ajouter une entité
                            </b-button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12 col-xl-12">
                                <div class="card card-box mb-5">
                                    <ul class="list-group list-group-flush">
                                        <building
                                            v-for="(item, index) in properties"
                                            :title="item.title"
                                            :reference="item.reference"
                                            :adresse="item.adresse"
                                            :jour_emission_facture="item.jour_emission_facture"
                                            :isActive="item.isActive"
                                            :index="index"
                                            :key="item.index"
                                            :class="{ 'slack-bg': item.isActive }"
                                            @click.native="selectBuilding(item, index)"
                                            @mouseover.native="hover = true"
                                            @mouseleave.native="hover = false"
                                            
                                        ></building>
                                    </ul>
                                </div>
                            </div>
          
                     </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Inventaires</small>
                            <b>Appartements & Chambres</b>
                        </div>
                        <div class="card-header--actions">
                            <!--<div class="input-group">
                                <input type="search" class="form-control" placeholder="Search terms here..." />
                                <div class="input-group-append">
                                    <b-button variant="primary" class="border-0">
                                        <font-awesome-icon icon="search" />
                                    </b-button>
                                </div>
                            </div>-->
                             <b-button variant="primary">
                                    <font-awesome-icon icon="home" class="mr-2" />
                                    Ajouter appartement
                            </b-button>
                            <!--<b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary shadow-none p-0">
                                <template slot="button-content">
                                    <div class="font-size-xl">
                                        <font-awesome-icon icon="ellipsis-h"/>
                                    </div>
                                </template>
                                <b-dropdown-item>Ajouter un contrat</b-dropdown-item>
                                <b-dropdown-item>Modifier</b-dropdown-item>
                                <b-dropdown-item>Cloner</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Supprimer</b-dropdown-item>
                            </b-dropdown>-->
                        </div>
                    </div>
                    <div class="card-body pb-1">
                        <ul class="list-group list-group-flash">
                            <appartment v-for="(item, index) in appartements"
                            :dependances="getDependencies(item.id)"
                            :index="index"
                            :intitule="item.intitule"
                            :statut="item.statut"
                            :autre_description="item.autre_description"
                            
                            :key="item.index" />
                        </ul>
                    </div>
                 
                    <div class="divider mt-3"></div>
                    <div class="text-center py-4">
                       <div class="p-3">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                    <font-awesome-icon icon="chevron-left"/>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                            <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                    <font-awesome-icon icon="chevron-right"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import Building from './Building.vue'
    import Appartment from './Appartment.vue'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faChevronRight,
        faPlus,
        faEye,
        faArrowUp,
        faNewspaper,
        faLightbulb,
        faUser,
        faEllipsisH,
        faChevronLeft,
        faArrowDown,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faComments,
        faBalanceScale,
        faCarBattery,
        faBinoculars,
        faHourglass,
        faCheckSquare,
        faEdit,
        faFileWord,
        faUnlock,
        faClone,
        faHome
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faPinterest,
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faChevronRight,
        faPlus,
        faEye,
        faArrowUp,
        faNewspaper,
        faLightbulb,
        faUser,
        faEllipsisH,
        faChevronLeft,
        faArrowDown,
        faPinterest,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faComments,
        faBalanceScale,
        faCarBattery,
        faBinoculars,
        faHourglass,
        faCheckSquare,
        faEdit,
        faFileWord,
        faUnlock,
        faClone,
        faHome
    );
    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts,
            'building': Building,
            'appartment': Appartment,
        },
        data: function () {
            return {
                properties:[
                {
                    title: "L'hibiscus (L'hibiscus (Ab-Calavi, Qtier zoundja)",
                    reference: "0987520",
                    adresse: "Calavi zoundja, Carré 787",
                    jour_emission_facture: "05",
                    isActive: false
                },
                {
                    title: "Le frangipanier (Ab-Calavi, Qtier zoca)",
                    reference: "0987521",
                    adresse: "Calavi zoundja, Carré 787",
                    jour_emission_facture: "05",
                    isActive: false
                },
                {
                    title: "Le Flamboyant (Ab-Calavi, Qtier arcon-ville)",
                    reference: "0987522",
                    adresse: "Calavi zoundja, Carré 787",
                    jour_emission_facture: "05",
                    isActive: false
                },
                {
                    title: "Les Bougainvilliers (Ab-Calavi, Qtier tankpè)",
                    reference: "0987523",
                    adresse: "Calavi zoundja, Carré 787",
                    jour_emission_facture: "05",
                    isActive: false
                }
                ],
 
                appartements: [
                    {
                        id: 1,
                        intitule: '1A',
                        statut: 'LIBRE',
                        autre_description: 'Chaque chambre avec sa douche, plus une douche visiteur',
                        dependencies: [
                            {
                                typedependence:{
                                    id: 1,
                                    libelle: 'Séjour'
                                },
                                nbre: 1
                            },
                            {
                                typedependence:{
                                    id: 2,
                                    libelle: 'Chambre à coucher'
                                },
                                nbre: 2
                            },
                            {
                                typedependence:{
                                    id: 3,
                                    libelle: 'Douche'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 4,
                                    libelle: 'Cuisine'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 5,
                                    libelle: 'Débarras'
                                },
                                nbre: 2
                            }
                            
                            
                        ]
                    },
                    {
                        id: 2,
                        intitule: '1B',
                        statut: 'LIBRE',
                        autre_description: 'Chaque chambre avec sa douche',
                        dependencies: [
                            {
                                typedependence:{
                                    id: 1,
                                    libelle: 'Séjour'
                                },
                                nbre: 1
                            },
                            {
                                typedependence:{
                                    id: 2,
                                    libelle: 'Chambre à coucher'
                                },
                                nbre: 2
                            },
                            {
                                typedependence:{
                                    id: 3,
                                    libelle: 'Douche'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 4,
                                    libelle: 'Cuisine'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 5,
                                    libelle: 'Débarras'
                                },
                                nbre: 2
                            }
                            
                            
                        ]
                    },
                    {
                        id: 3,
                        intitule: '1C',
                        statut: 'LIBRE',
                        autre_description: 'Chaque chambre avec sa douche',
                        dependencies: [
                            {
                                typedependence:{
                                    id: 1,
                                    libelle: 'Séjour'
                                },
                                nbre: 1
                            },
                            {
                                typedependence:{
                                    id: 2,
                                    libelle: 'Chambre à coucher'
                                },
                                nbre: 2
                            },
                            {
                                typedependence:{
                                    id: 3,
                                    libelle: 'Douche'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 4,
                                    libelle: 'Cuisine'
                                },
                                nbre: 2
                            },                           
                            {
                                typedependence:{
                                    id: 5,
                                    libelle: 'Débarras'
                                },
                                nbre: 2
                            }
                            
                            
                        ]
                    }
                ]
            }
        },
        methods: {
            getDependencies: function(idAppartment) {
                let appartment = this.$data.appartements.filter(appartment=>appartment.id==idAppartment)[0]
                console.log(appartment)
                let dependencies  =  appartment.dependencies.map(dep=>'0'+dep.nbre + ' '+dep.typedependence.libelle)
                console.log(dependencies)
                return dependencies
            },
            selectBuilding: function (item, index) {
                console.log('Select building: ', item)
                this.properties.map(el=>el.isActive=false)
                this.properties[index].isActive=true

            }
        }
    }
</script>