<template>
 <div id='detail' class="content-container">
   <v-layout row class="mt-5 mb-5 detail">
      <v-flex md8>
       <v-card>
         <v-layout md12 row>
          <v-flex md8>
            <img :src="item.listing_vdp.image">
          </v-flex>
          <v-flex md4>
            <img :src="item.listing_vdp.listing_images[1].name">
            <img :src="item.listing_vdp.listing_images[2].name">
          </v-flex>
         </v-layout>
         <div>
           <h1>{{ fullName }}</h1>
           <div>
             <h4>$ {{item.listing_vdp.price}}</h4>
           </div>
         </div>
       </v-card>
      </v-flex>
      <v-flex md4>
       <v-card class="info-container">
         <v-layout class="flex md12" row>
          <v-flex md12>
            <span>{{item.listing_vdp.seller.name}}</span>
            <span>{{item.listing_vdp.seller.address_1 + ', ' + item.listing_vdp.seller.city_name + ', ' + item.listing_vdp.seller.state_name}}</span>
            <v-btn dark :href="'tel:' + item.listing_vdp.seller.phone" tag="a" class="btn--dark-focused">{{item.listing_vdp.seller.phone}}</v-btn>
          </v-flex>
         </v-layout>
       </v-card>
      </v-flex>
   </v-layout>
 </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['itemId'],
  data () {
    return {
      item: {}
    }
  },
  computed: {
    fullName: function () {
      return this.item.listing_vdp.stock_type_name + ' ' + this.item.listing_vdp.year_name + ' ' + this.item.listing_vdp.make_name + ' ' + this.item.listing_vdp.trim_name
    }
  },
  created () {
    this.getItem()
    .then(data => {
      this.item = data
    })
  },
  methods: {
    getItem: function () {
      return this.axios.get('/api/listings/' + this.itemId)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.md8 > img
 max-width 468px
 display block
 margin-left auto
 margin-right auto
.md4 > img
 max-width 213px
 display block
 margin-left auto
 margin-right auto
.layout
 width 100%
.info-container
 span:nth-child(1)
  font-size 18px
  font-weight 600
 span:nth-child(2)
  color #098ae4
  font-size 100%
 span
  display block
  margin 15px 0
 a
  width 100%
  padding 0 176px
  margin-left -12px
#detail
  h1
   font-size 21px
   max-width 85%
   font-weight 600
   margin 20px 0
   color #000
   padding-left 10px
  h4
   font-size 28px
   color #000
   padding-left 10px
   font-weight 600
</style>
