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
      item: {
        'listing_vdp': {
          'id': 2352043,
          'data_source_id': 2,
          'data_source_name': 'cars_com',
          'vin': '3FA6P0H71HR378708',
          'classified_ad_key': '704194435',
          'stock_type_id': 1,
          'stock_type_name': 'New',
          'vehicle_type_id': 1,
          'vehicle_type_name': 'Car',
          'body_style_id': 13,
          'body_style_name': 'Sedan',
          'make_id': 23,
          'make_name': 'Ford',
          'model_id': 521,
          'modelname': 'Fusion',
          'trim_id': 2708,
          'trim_name': 'SE',
          'year_id': 90,
          'year_name': '2017',
          'price': '25170.0',
          'odometer': 7,
          'history_report_url': '',
          'basic_exterior_color_id': 13,
          'basic_exterior_color_name': 'White',
          'basic_interior_color_id': 2,
          'basic_interior_color_name': 'Black',
          'fancy_exterior_color_id': 14978,
          'fancy_exterior_color_name': 'White',
          'fancy_interior_color_id': 1006,
          'fancy_interior_color_name': 'Black',
          'seller_type_id': 1,
          'seller_type_name': 'Dealer',
          'seller': {
            'id': 10486,
            'seller_type_id': 1,
            'seller_type_name': 'Dealer',
            'city_id': 19597,
            'city_name': 'Defiance',
            'state_id': 40,
            'state_name': 'OH',
            'zip_code_id': 18306,
            'zip_code_name': '43512',
            'zip_code_plus_4': '',
            'seller_key': 155032,
            'name': 'Mark Moats Ford',
            'address_1': '20793 County Road 424',
            'address_2': '',
            'lat': '41.275329',
            'lon': '-84.422779',
            'distance': '0.0',
            'phone': '4196154051',
            'fax': '',
            'email': '',
            'url': 'http://www.cars.com/go/dealersearch/logDealerLead.jsp?orgid=155032&dealerid=155032&type=site',
            'logo': 'http://images.cars.com/logo-dealer/155032.gif',
            'tag_line': 'With the purchase of your new vehicle come see our service department and experience all the offers you can receive.',
            'leads_radius': 0,
            'hours_retail': 'SALES HRS: SUN CLOSED,MON OPEN 9:00AM to 7:00PM,TUE OPEN 9:00AM to 6:00PM,WED OPEN 9:00AM to 6:00PM,THU OPEN 9:00AM to 8:00PM,FRI OPEN 9:00AM to 3:00PM,SAT OPEN 9:00AM to 3:00PM',
            'hours_service': 'SERVICE HRS: SUN CLOSED,MON OPEN 8:00AM to 5:00PM,TUE OPEN 8:00AM to 5:00PM,WED OPEN 8:00AM to 5:00PM,THU OPEN 8:00AM to 5:00PM,FRI OPEN 8:00AM to 5:00PM,SAT OPEN 8:00AM to 12:00PM',
            'phone_new': '8664134682',
            'phone_used': '8884541567',
            'dealer_part_stat': 'CUSTOM',
            'email_leads_enabled': 'U',
            'disclaimer': '',
            'notes': '',
            'photos': 'http://images.cars.com/phototab/dealerphotos/155032/1384213014715.jpg,http://images.cars.com/phototab/dealerphotos/155032/1384213016608.jpg,http://images.cars.com/phototab/dealerphotos/155032/1384213017979.jpg,http://images.cars.com/phototab/dealerphotos/155032/1384215392807.JPG,http://images.cars.com/phototab/dealerphotos/155032/1384215393180.JPG,http://images.cars.com/phototab/dealerphotos/155032/1384215394021.JPG,http://images.cars.com/phototab/dealerphotos/155032/1400265883137.jpg,http://images.cars.com/phototab/dealerphotos/155032/1400265888707.jpg',
            'description': 'Mark Moats Ford Inc, a Ford dealer in Defiance, Ohio offers new Ford Cars, Trucks, SUVs and Crossovers online at www.markmoatsford.com. Search for all new Ford, including E-Series Wagon, Edge, Escape, Expedition, Explorer, F-150, F-250 Super Duty, F-350 Super Duty, F-450 Super Duty, Fiesta, Flex, Focus, Focus Sedan, Fusion, Mustang, Ranger, Taurus, Transit Connect. Find your dream car from our Ford showroom of cars, trucks, SUVs and Crossovers or search our new Ford inventory to see what is on our lot, get new car pricing and free Ford price quotes. View our used car inventory, including our pre-owned Ford vehicles.',
            'makes_sellers_count': 0,
            'markets_sellers_count': 0,
            'models_sellers_count': 0,
            'sellers_trims_count': 0,
            'sellers_years_count': 0,
            'listings_count': 102,
            'listings_min_price': '1500.0',
            'listings_avg_price': '26957.36',
            'listings_max_price': '59365.0',
            'listings_sum_price': '2749651.0',
            'listings_min_odometer': '0.0',
            'listings_avg_odometer': '42665.39',
            'listings_max_odometer': '367350.0',
            'listings_sum_odometer': '4351870.0',
            'created_at': '2017-06-28T04:42:11.000Z',
            'updated_at': '2017-06-28T04:42:11.000Z'
          },
          'seller_id': 10486,
          'seller_name': 'Mark Moats Ford',
          'seller_key': '155032',
          'seller_stock_number': 'F8604',
          'address_1': '20793 County Road 424',
          'address_2': '',
          'city_id': 19597,
          'city_name': 'Defiance',
          'state_id': 40,
          'state_name': 'OH',
          'zip_code_id': 18306,
          'zip_code_name': '43512',
          'market_id': 0,
          'market_name': '',
          'lat': '41.275329',
          'lon': '-84.422779',
          'distance': '0.0',
          'phone': '4197858662',
          'fax': '',
          'image': 'http://images.cars.com/phototab/3/c/7/38/0dd3aa556fb99325c6cc533d2.jpg',
          'listing_images': [
            {
              'id': 42969974,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/3/c/7/38/0dd3aa556fb99325c6cc533d2.jpg'
            },
            {
              'id': 42969975,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/7/9/a/40/c5568c7d3c6312f47b350ec5e3b.jpg'
            },
            {
              'id': 42969976,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/5/c/9/e1/3240d30d1bae32ec29fa0037ee6.jpg'
            },
            {
              'id': 42969977,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/1/1/f/41/9950c60201322355dd2547e7571.jpg'
            },
            {
              'id': 42969978,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/e/8/1/ab/ab5bc0bdccbba4d19612e96f8ee.jpg'
            },
            {
              'id': 42969979,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/e/1/5/6d/af386fbfe2f765413b2d407633a.jpg'
            },
            {
              'id': 42969980,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/f/5/e/4e/f4b89026191bb3034c8e4e2b398.jpg'
            },
            {
              'id': 42969981,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/2/0/2/d8/5f78378076b8e37d5c9715a04e4.jpg'
            },
            {
              'id': 42969982,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/c/b/2/dd/68ba3ed286bc38cb09929726771.jpg'
            },
            {
              'id': 42969983,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/1/e/c/94/885a529e06cf3f8573a1138dd18.jpg'
            },
            {
              'id': 42969984,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/f/c/3/bd/248a144095831ef94b87e275c5f.jpg'
            },
            {
              'id': 42969985,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/f/5/c/01/d111fa6df4f0787382a138f0ff4.jpg'
            },
            {
              'id': 42969986,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/b/9/3/6d/3407d1595b5e414c260f1d7f266.jpg'
            },
            {
              'id': 42969987,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/e/e/c/da/e7fd1660da2e5c32767c99f1cc2.jpg'
            },
            {
              'id': 42969988,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/7/a/9/8d/2aeea475e72113ecd3e3e3f7907.jpg'
            },
            {
              'id': 42969989,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/1/5/1/9e/517c7608a29919c783d34eae100.jpg'
            },
            {
              'id': 42969990,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/e/a/0/df/c82ef430ca8ec06028775554bb5.jpg'
            },
            {
              'id': 42969991,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/e/d/7/44/d8ebecefc66d14dbeaa41e4edbc.jpg'
            },
            {
              'id': 42969992,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/c/5/e/df/d99d46874513533a81d4233438.jpg'
            },
            {
              'id': 42969993,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/8/c/d/af/09cad6c8f1cd2aa8b0fde7e0c2.jpg'
            },
            {
              'id': 42969994,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/1/5/1/82/382a524061425bf23ca3229c3c1.jpg'
            },
            {
              'id': 42969995,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/7/4/7/55/31dcbb44e3907700e7724824861.jpg'
            },
            {
              'id': 42969996,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/2/6/e/88/d096ab0f87071543bc3eef0ec40.jpg'
            },
            {
              'id': 42969997,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/c/7/c/0a/0c914d4991b2a6df8d3a7c74542.jpg'
            },
            {
              'id': 42969998,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/3/7/1/b5/912deb756309d73e0967e3e4f8f.jpg'
            },
            {
              'id': 42969999,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/c/5/2/0c/5979be78d6c3babb181bdbf14d2.jpg'
            },
            {
              'id': 42970000,
              'listing_id': 2352043,
              'listing_image_type_id': 0,
              'listing_image_type_name': '',
              'listing_image_path_id': 0,
              'listing_image_path_name': '',
              'name': 'http://images.cars.com/phototab/b/a/f/46/2b7c85cc0e6bb0bddfe31bcf548.jpg'
            }
          ],
          'listing_images_count': 27,
          'stock_images': [
            {
              'id': 174071,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021001.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174072,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021002.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174073,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021003.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174074,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021005.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174075,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021006.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174076,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021011.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174077,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021012.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174078,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021013.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174079,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021018.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174080,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021021.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174081,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021024.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174082,
              'stock_image_type_id': 1,
              'stock_image_type_name': 'Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021025.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174083,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021028.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174084,
              'stock_image_type_id': 5,
              'stock_image_type_name': 'Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=CAC70FOC201B021044.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174085,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01296.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174086,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01300.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174087,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01303.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174088,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01304.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174089,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01309.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174090,
              'stock_image_type_id': 3,
              'stock_image_type_name': 'OEM Exterior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01310.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            },
            {
              'id': 174091,
              'stock_image_type_id': 7,
              'stock_image_type_name': 'OEM Interior Standard',
              'make_id': 23,
              'make_name': 'Ford',
              'model_id': 521,
              'modelname': 'Fusion',
              'trim_id': 2708,
              'trim_name': 'SE',
              'year_id': 90,
              'year_name': '2017',
              'name': 'http://car-pictures.cars.com/images/?IMG=USC70FOC201A01350.jpg',
              'created_at': '2017-06-28T06:03:24.000Z',
              'updated_at': '2017-06-28T06:03:24.000Z'
            }
          ],
          'stock_images_count': 21,
          'video_url': 'https://vid.dmotorworks.com/vid5/?client=CARSCOM&LTVAutoPlay=1&w=100%&h=100%&vid=528403CA67458290E05337824D64A4E7',
          'cpo_program_id': 0,
          'cpo_program_name': '',
          'cylinder_id': 3,
          'cylinder_name': '4',
          'door_id': 5,
          'door_name': '4',
          'driver_assistance_id': 0,
          'driver_assistance_name': '',
          'drivetrain_id': 36,
          'drivetrain_name': 'FWD',
          'engine_id': 924,
          'engine_name': '2.5L I4 16V MPFI DOHC',
          'engine_displacement_id': 17,
          'engine_displacement_name': '2.5',
          'fuel_type_id': 4,
          'mpg': 27,
          'mpg_city': 21,
          'mpg_highway': 32,
          'fuel_type_name': 'Gasoline',
          'navigation_system_id': 1,
          'navigation_system_name': '0',
          'satellite_radio_id': 1,
          'satellite_radio_name': '0',
          'seat_id': 2,
          'seat_name': '0',
          'transmission_id': 1,
          'transmission_name': 'auto',
          'wheelbase_id': 14,
          'wheelbase_name': '112',
          'is_best_offer': false,
          'is_contact_by_email': true,
          'is_nvi': false,
          'is_one_owner': false,
          'listing_text': {
            'id': 2352043,
            'listing_id': 2352043,
            'optional_features': '6 Speakers, AM/FM Radio: Siriusxm, CD Player, Mp3 Decoder, Radio: AM/FM Stereo/Mp3/Single-Cd, Siriusxm Radio, Sync Communications & Entertainment System, Air Conditioning, Rear Window Defroster, Power Driver Seat, Power Steering, Remote Keyless Entry, Steering Wheel Mounted Audio Controls, Four Wheel Independent Suspension, Speed-Sensing Steering, Traction Control, 4-Wheel Disc Brakes, ABS Brakes, Dual Front Impact Airbags, Dual Front Side Impact Airbags, Emergency Communication System, Front Anti-Roll Bar, Knee Airbag, Low Tire Pressure Warning, Occupant Sensing Airbag, Overhead Airbag, Rear Anti-Roll Bar, Brake Assist, Electronic Stability Control, Exterior Parking Camera Rear, Delay-Off Headlights, Fully Automatic Headlights, Panic Alarm, Security System, Speed Control, Bumpers: Body-Color, Power Door Mirrors, Driver Door Bin, Driver Vanity Mirror, Front Reading Lights, Illuminated Entry, Outside Temperature Display, Overhead Console, Passenger Vanity Mirror, Rear Reading Lights, Rear Seat Center Armrest, Telescoping Steering Wheel, Tilt Steering Wheel, Cloth Front Bucket Seats, Front Bucket Seats, Front Center Armrest, Power Passenger Seat, Split Folding Rear Seat, Passenger Door Bin, Alloy Wheels, Speed-Sensitive Wipers, Variably Intermittent Wipers, Bluetooth!, Rear Camera!, Navigation!',
            'standard_features': 'Fuel Consumption: City: 21 mpg, Fuel Consumption: Highway: 32 mpg, Remote, digital keypad power door locks, Power windows, Cruise controls on steering wheel, Cruise control, 4-wheel ABS Brakes, Front Ventilated disc brakes, 1st and 2nd row curtain head airbags, Passenger Airbag, Side airbag, Bluetooth wireless phone connectivity, Digital Audio Input, In-Dash single CD player, SYNC, MP3 player, SiriusXM AM/FM/Satellite Radio, SiriusXM Satellite Radio(TM), Speed Sensitive Audio Volume Control, Total Number of Speakers: 6, Braking Assist, ABS and Driveline Traction Control, Stability control, Privacy glass: Light, Painted aluminum rims, Wheel Diameter: 17, Wheel Width: 7.5, Driver and passenger knee airbags, Urethane steering wheel trim, Metal-look shift knob trim, Metal-look dash trim, Metal-look door trim, Metal-look/piano black center console trim, Video Monitor Location: Front, Trip computer, External temperature display, Tachometer, Manufacturer&#039;s 0-60mph acceleration time (seconds): 8.5 s, Power remote driver mirror adjustment, Power remote passenger mirror adjustment, Dual illuminated vanity mirrors, Compass, Daytime running lights, Remote window operation, Audio controls on steering wheel, 911 Assist, Power remote trunk release, Front and rear reading lights, Anti-theft alarm system, Cloth seat upholstery, Bucket front seats, Rear bench, Fold forward seatback rear seats, Rear seats center armrest, Tilt and telescopic steering wheel, Speed-proportional electric power steering, Suspension class: Regular, Interior air filtration, Manual front air conditioning, Tire Pressure Monitoring System: Tire specific, Remote activated exterior entry lights, Cargo area light, Max cargo capacity: 16 cu.ft., Vehicle Emissions: LEV3-ULEV70, Fuel Type: Regular unleaded, Fuel Capacity: 16.5 gal., Instrumentation: Low fuel level, Clock: In-radio display, Headlights off auto delay, Dusk sensing headlights, Coil front spring, Regular front stabilizer bar, Independent front suspension classification, Strut front suspension, Four-wheel Independent Suspension, Coil rear spring, Rear Stabilizer Bar: Regular, Independent rear suspension, Multi-link rear suspension, Front and rear suspension stabilizer bars, Variable intermittent front wipers, Steel spare wheel rim, Spare Tire Mount Location: Inside under cargo, Chrome grille, Center Console: Full with covered storage, Overhead console: Mini with storage, Curb weight: 3,431 lbs., Overall Length: 191.7/, Overall Width: 72.9/, Overall height: 58.1/, Wheelbase: 112.2/, Front Head Room: 39.2/, Rear Head Room: 37.8/, Front Leg Room: 44.3/, Rear Leg Room: 38.3/, Front Shoulder Room: 57.8/, Rear Shoulder Room: 56.9/, Front Hip Room: 55.0/, Rear Hip Room: 54.4/, Three 12V DC power outlets, Transmission hill holder, Seatbelt pretensioners: Front, Rear center seatbelt: 3-point belt, Door reinforcement: Side-impact door beam, Engine immobilizer, Cargo tie downs, Floor mats: Carpet front and rear, Cupholders: Front and rear, Door pockets: Driver, passenger and rear, Seatback storage: 2, Tires: Width: 235 mm, Tires: Profile: 50, Tires: Speed Rating: V, Diameter of tires: 17.0/, Type of tires: AS, Tires: Prefix: P, Left rear passenger door type: Conventional, Rear door type: Trunk, Right rear passenger door type: Conventional, Body-colored bumpers, Integrated roof antenna, 4 Door, Selective service internet access, Driver airbag, Manual child safety locks',
            'description': 'Bluetooth! Rear camera! Navigation! AM/FM radio: SiriusXM, Outside temperature display, Remote keyless entry, SYNC Communications & Entertainment System. <br><br>Mark Moats Ford. Serving the area since 1916!!!! Call us toll free at 800-783-9363.',
            'created_at': '2017-06-28T05:25:18.000Z',
            'updated_at': '2017-06-28T05:25:18.000Z'
          },
          'listed_at': '2017-06-08T00:00:00.000Z',
          'refreshed_at': '2017-06-22T00:00:00.000Z',
          'ended_at': null,
          'created_at': '2017-06-28T04:42:26.000Z',
          'updated_at': '2017-06-28T04:42:26.000Z'
        }
      }
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
