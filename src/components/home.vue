<template>
  <div id="home">
    <hero-parallax :imageUrl="heroImage" :imageHeight="300"></hero-parallax>
    <search-tabs></search-tabs>
    <browse-listing></browse-listing>
  </div>
</template>

<script>
import SearchTabs from './search/search-tabs.vue'
import HeroParallax from './hero/hero-parallax.vue'
import BrowseListing from './datatable/browse-listing.vue'
export default {
  name: 'home',
  components: {
    SearchTabs,
    HeroParallax,
    BrowseListing
  },
  data () {
    return {
      heroImage: 'https://www.cstatic-images.com/stock/1680x1680/18/img114934516-1497030016018.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
