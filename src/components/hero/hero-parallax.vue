<template>
 <v-parallax :src="imageUrl" :height="imageHeight" class="heroParallax">
    <v-layout column align-left justify-left class="content-container">
      <h2 class="white--text parallax-title">For Every</h2>
      <h2 class="white--text parallax-title">Turn</h2>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'HeroParallax',
  props: ['imageUrl', 'imageHeight'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.parallax-title
 font-weight bold
 font-size 72px
 line-height 60px
</style>
