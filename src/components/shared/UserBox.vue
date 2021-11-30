<template>
  <div class="user-box ml-2">
    <a
      href="javascript:void(0);"
      class="p-0 d-flex align-items-center"
      id="userBoxPopover"
    >
      <div class="d-block p-0 avatar-icon-wrapper">
        <span class="badge badge-circle badge-success p-top-a">Online</span>
        <div class="avatar-icon rounded">
          <img :src="avatar" alt="" />
        </div>
      </div>
      <div class="d-none d-md-block pl-2">
        <div class="font-weight-bold">
          {{ connectedUser }}
        </div>
        <span class="text-black-50"> Tenancia Developer </span>
      </div>
      <span class="pl-3">
        <font-awesome-icon icon="angle-down" class="opacity-5" />
      </span>
    </a>
    <b-popover
      triggers="click blur"
      placement="bottom"
      ref="userBoxPopover"
      target="userBoxPopover"
    >
      <ul class="list-group list-group-flush text-left bg-transparent">
        <li class="list-group-item rounded-top">
          <ul class="nav nav-pills nav-pills-hover flex-column">
            <li
              class="
                nav-header
                d-flex
                text-primary
                pt-1
                pb-2
                font-weight-bold
                align-items-center
              "
            >
              <div>Profile options</div>
              <div class="ml-auto font-size-xs">
                <a href="javascript:void(0);">
                  <font-awesome-icon icon="plus-circle" />
                </a>
              </div>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ChangePassword' }" class="nav-link"
                >Changement mot de passe</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'MyProfiles' }" class="nav-link"
                >Gestion des profils</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="deconnect">
                Déconnexion
              </a>
            </li>
          </ul>
        </li>
        <!--<li class="list-group-item bg-transparent p-0">
                    <div class="grid-menu grid-menu-2col">
                        <div class="py-3">
                            <div class="d-flex justify-content-center">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info" />
                                    </div>
                                    <div class="pl-3 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>-->
        <li class="list-group-item rounded-bottom p-3 text-center">
          <a href="javascript:void(0);" class="btn btn-facebook">
            <span class="btn-wrapper--icon">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </span>
          </a>
          <a href="javascript:void(0);" class="btn btn-dribbble mr-2 ml-2">
            <span class="btn-wrapper--icon">
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </span>
          </a>
          <a href="javascript:void(0);" class="btn btn-twitter">
            <span class="btn-wrapper--icon">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>
          </a>
        </li>
      </ul>
    </b-popover>
  </div>
</template>

<script>
import defaultAvatar from "@/assets/img/avatars/avatar3.jpg";
import serverConf from "@/config/backend";
import { library } from "@fortawesome/fontawesome-svg-core";
import { mapState, mapActions, mapGetters } from "vuex";
import { faPlusCircle, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
library.add(faDribbble, faPlusCircle, faChartBar);

export default {
    data() {
    return {
      serverConf: null,
      avatar: defaultAvatar,
    };
  },

  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
    mounted() {
        this.serverConf = serverConf;
        this.user.photo_url != null || this.user.photo_url != ""
      ? (this.avatar = `${this.serverConf.serverURL}/${this.user.photo_url}`)
      : (this.avatar = defaultAvatar);
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    showTooltip() {
      this.$refs.tooltipSuccess._toolpop
        .getTipElement()
        .classList.add("tooltip-success");
    },
    showPopoverIntegrations() {
      this.$refs.userBoxPopover._toolpop
        .getTipElement()
        .classList.add(
          "popover-custom-wrapper",
          "popover-custom-lg",
          "popover-secondary"
        );
    },
    deconnect() {
      this.logout();
      this.$router.push({ name: "Register" });
    },
  },
  computed: {
        ...mapGetters("auth", ["user"]),

    connectedUser: {
      get() {
        let user =
          this.$store.state.auth.user != null
            ? this.$store.state.auth.user
            : { first_name: "", last_name: "" };
        return `${user.first_name} ${user.last_name}`;
      },
    },
  },
};
</script>
