<template>
  <v-app id="app" v-bind:class="{ scrollUp: logoActive }">
    <v-navigation-drawer light right disable-route-watcher :mini-variant.sync="mini" v-model="drawer">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-bind:class="{ pushtotop: logoActive }">
      <div class="content-container">
        <v-toolbar-logo>
          <img src="./assets/logo.svg">
        </v-toolbar-logo>
        <v-toolbar-title class="text-xs-center">
          <div class="toolbar-subheader">
            <div class="subheader-container">
              <a href="">
                <v-icon light>star</v-icon>
                <span light>Enter to Win $300</span>
                <v-icon light>keyboard_arrow_right</v-icon>
              </a>
            </div>
          </div>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-xs">
          <nav-item-menu :menuLeft="true" :menuBottom="true" :menuOrigin="menuOrigin" v-for="menu in navigationMenus" :key="menu.action" :action="menu.action" :contents="menu.contents" :rows="menu.rows" :pra="menu.perRowAmmount"></nav-item-menu>
        </v-toolbar-items>
        <v-btn icon light right @click.native.stop="drawer = !drawer">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <main v-bind:class="{ pushdown: logoActive }">
      <router-view></router-view>
    </main>
    <navigation-footer></navigation-footer>
  </v-app>
</template>

<script>
import NavItemMenu from './components/navigation/nav-item-menu.vue'
import NavigationFooter from './components/navigation/footer.vue'
export default {
  name: 'app',
  components: {
    NavItemMenu,
    NavigationFooter
  },
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' }
      ],
      mini: false,
      menuOrigin: 'top right',
      right: true,
      logoActive: false,
      lastKnownYValue: null,
      navigationMenus: [
        {
          action: 'Buy',
          rows: 3,
          perRowAmmount: [4, 2, 3],
          contents: [
            {
              action: 'Find Cars for Sale'
            },
            {
              action: 'Find Cars for Sale by Owner'
            },
            {
              action: 'Research Car Models'
            },
            {
              action: 'Review a Car'
            },
            {
              action: 'Find a Dealer'
            },
            {
              action: 'Review a Dealer'
            },
            {
              action: 'Estimate Used Car Values'
            },
            {
              action: 'Estimate Your Payments'
            },
            {
              action: 'Certified Pre-Owned Cars'
            }
          ]
        },
        {
          action: 'Sell & Trade',
          rows: 2,
          perRowAmmount: [2],
          contents: [
            {
              action: 'Sell your Car'
            },
            {
              action: "Find Your Car's Value"
            },
            {
              action: 'How to Sell Your Car'
            },
            {
              action: 'My Cars.com listing'
            }
          ]
        },
        {
          action: 'Service & Repair',
          rows: 2,
          perRowAmmount: [2, 3],
          contents: [
            {
              action: 'Get a Service Estimate'
            },
            {
              action: 'Find a Service Center'
            },
            {
              action: 'Service & Repair Advice'
            },
            {
              action: 'Safety & Recall Notices'
            },
            {
              action: 'Car Maintenance 101'
            }
          ]
        },
        {
          action: 'Videos & Reviews',
          rows: 3,
          perRowAmmount: [4],
          contents: [
            {
              action: 'Latest Car News'
            },
            {
              action: 'Latest Car Reviews'
            },
            {
              action: 'Latest Videos'
            },
            {
              action: 'Awards'
            },
            {
              action: 'Multi-Car Comparisons'
            },
            {
              action: 'Updates & Trends'
            },
            {
              action: 'Help for First-Time Buyers'
            },
            {
              action: 'Child Car Seat Checks'
            },
            {
              action: 'Detroit Auto Show'
            },
            {
              action: 'Chicago Auto Show'
            },
            {
              action: 'New York Auto Show'
            },
            {
              action: 'LA Auto Show'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleScroll: function () {
      if (window.scrollY > 87 && this.lastKnownYValue > window.scrollY) {
        this.logoActive = true
      } else {
        this.logoActive = false
      }
      this.lastKnownYValue = window.scrollY
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
@import '../stylus/main'
.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main
 padding-left 0!important
.toolbar
 height 86px
 position relative
 top 0
 transition top 0.2s linear
 .toolbar__logo
  img
   max-width 165px
   transition width 0.2s ease-in-out
   z-index 3
.navigation-drawer--mini-variant
 margin-top 0px
.toolbar__title
 color #FFFFFF!important
.btn--outline, .fab--outline
 border none!important
 font-weight bold
.content-container
 padding 0 20px
 @media (max-width: 1140px)
  max-width 90%
 @media (min-width: 1140px)
  max-width 1170px!important
 min-width 320px
 width 100%
 margin 0 auto!important
 display flex
.subheader-container
 max-width 133px
 height 30px
 font-size 1rem
 font-weight bold
 line-height 2
 width 100%
 margin 0 auto!important
 a
  color #FFFFFF
  text-decoration none
a:hover
 i:nth-child(1)
  color #250858

.toolbar-subheader
 top 56px
 left 0
 right 0
 position absolute
 background-color #7B2B83
.pushtotop
 position fixed
 height 48px
 .content-container
  height inherit
 .toolbar-subheader
  display none
 .toolbar__logo
  img
   max-width 95px
.pushdown
 margin-top 88px
.scrollUp
 .menu__content
  top 50px!important
  position fixed
</style>
