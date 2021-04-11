<template>
    <div class="app-wrapper bg-light">
        <div class="app-main">
            <!--<a href="javascript:history.back()" class="btn btn-lg btn-success btn-go-back">
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="arrow-left" />
            </span>
                <span class="btn-wrapper--label">Back to previous page</span>
            </a>-->
            <div class="app-content p-0">
                <div class="app-content--inner p-0">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                        <div class="bg-composed-wrapper--content">
                            <div class="hero-wrapper bg-composed-wrapper min-vh-100">
                                <div class="flex-grow-1 w-100 d-flex align-items-center">
                                    <div class="col-lg-6 px-4 mx-auto text-center text-black">
                                        <img src="@/assets/img/illustrations/500.svg" class="w-50 mx-auto d-block my-5 img-fluid" alt="">

                                        <h1 class="display-1 mb-3 px-4 font-weight-bold">
                                             Hello {{user.first_name}},
                                        </h1>
                                        <h3 class="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                                           Nous venons de vous envoyer un mail pour activation de votre compte. Veuillez consulter votre mail et activer votre compte pour débuter votre expérience Tenancia.
                                        </h3>
                                        <p>
                                            
                                        </p>
                                        <a href="javascript:history.back()" class="btn px-5 btn-first mt-4 mb-3 btn-lg">
                                        <span class="btn-wrapper--label">
                                            Retour à la connexion dans {{countDown}} secondes
                                        </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="hero-footer py-4">
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-black-50" v-b-tooltip.hover href="javascript:void(0);" title="Facebook">
                                                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-black-50" v-b-tooltip.hover href="javascript:void(0);" title="Twitter">
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-black-50" v-b-tooltip.hover href="javascript:void(0);" title="Google+">
                                                <font-awesome-icon :icon="['fab', 'google-plus']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-black-50" v-b-tooltip.hover href="javascript:void(0);" title="Instagram">
                                                <font-awesome-icon :icon="['fab', 'instagram']" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import { mapGetters} from "vuex"
    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                countDown : 10
            }
        },
        computed: {
            ...mapGetters('auth', ['user'])
        },
        methods: {
            countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
                else {
                    this.$router.push({name: 'Register'})
                }
            }
        },
        created: function() {
            if(!this.$store.getters['auth/user']){
                this.$router.push({name: 'Register'})
            }
            this.countDownTimer()  
        },
    }
 
</script>