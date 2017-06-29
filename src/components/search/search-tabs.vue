<template>
  <v-tabs light>
    <v-tabs-bar slot="activators" class="content-container tabs-quicktool">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item
        :href="'#hello-search-cars-for-sale'"
      >
        Search Cars for Sale
      </v-tabs-item>
      <v-tabs-item
        :href="'#hello-read-specs-and-reviews'"
      >
        Read Specs & Reviews
      </v-tabs-item>
      <v-tabs-item
        :href="'#hello-find-service-centers-and-delears'"
      >
        Find Service Centers & Delears
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content
      :id="'hello-search-cars-for-sale'">
      <v-card flat horizontal>
        <v-card-row>
          
        </v-card-row>
      </v-card>
    </v-tabs-content>
    <v-tabs-content
      :id="'hello-read-specs-and-reviews'">
      <v-card flat horizontal>
        <v-card-row>
          
        </v-card-row>
      </v-card>
    </v-tabs-content>
    <v-tabs-content
      :id="'hello-find-service-centers-and-delears'">
      <v-card flat horizontal>
        <v-card-row>
          
        </v-card-row>
      </v-card>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
export default {
  name: 'SearchTabs',
  data () {
    return {
      active: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.tabs-quicktool
 position relative
 max-width 688px!important
 right 226px!important
 padding-left 0
 @media (max-width: 1024px)
  right 10%!important
 top -60px!important
 a
  color #FFFFFF
  font-weight bold
.tabs__item--active
  background-color #532380
.tabs
 overflow initial!important
.tabs__items
 max-width 1140px
 overflow-x hidden
 background-color #532380
 top -60px
 min-width 320px
 width 100%
 margin 0 auto!important
 display flex
 .tabs__content .card
  background-color #532380
  color #FFFFFF
</style>
