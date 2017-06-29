<template>
  <div class="content-container">
    <v-card class="browseListing">
      <v-card-title>
        Browse new Models
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :pagination.sync="pagination"
          :loading="loading"
          :total-items="pagination.totalItems"
          :rows-per-page-items="rowsPerPage"
        >
        <template slot="items" scope="props">
          <td class="text-xs-right listing-container" v-on:click="goToDetails(props.item.listing.vin)"><img class="item-image" :src="props.item.listing.image"></td>
          <td class="text-xs-right listing-container" v-on:click="goToDetails(props.item.listing.vin)">
            <table>
              <tr>
                <h4>{{ props.item.listing.stock_type_name + ' ' + props.item.listing.year_name + ' ' + props.item.listing.make_name + ' ' + props.item.listing.trim_name }}</h4>
              </tr>
              <tr>
                  <h5>$ {{ props.item.listing.price }}</h5>
              </tr>
              <tr>
                  <td>
                    Exterior Color: {{ props.item.listing.basic_exterior_color_name }}
                  </td>
                  <td>
                    Interior Color: {{ props.item.listing.basic_interior_color_name }}
                  </td>
              </tr>
              <tr>
                  <td>
                    Transmission: {{ props.item.listing.transmission_name }}
                  </td>
              </tr>
            </table>
          </td>
          <td class="text-xs-right listing-container">
            <tr>{{props.item.listing.seller_name}}</tr>
            <tr>
              {{ props.item.listing.city_name + ', ' + props.item.listing.state_name }}
            </tr>
            <tr>
              {{ props.item.listing.phone }}
            </tr>
          </td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'browseListing',
    data () {
      return {
        search: '',
        loading: false,
        rowsPerPage: [20, 30, 50, 100],
        pagination: {totalItems: 4570742, rowsPerPage: 20},
        headers: [
          { text: '', value: '', sortable: false },
          { text: 'Price', value: 'listing.price' },
          { text: 'Manufacturer', value: 'listing.make_name' }
        ],
        items: [
          {
            'listing': {
              'vin': '3FA6P0H71HR378708',
              'classified_ad_key': '704194435',
              'year_name': '2017',
              'make_name': 'Ford',
              'modelname': 'Fusion',
              'trim_name': 'SE',
              'image': 'http://images.cars.com/phototab/3/c/7/38/0dd3aa556fb99325c6cc533d2.jpg',
              'price': '25170.0',
              'odometer': 7,
              'transmission_name': 'auto',
              'body_style_name': 'Sedan',
              'basic_exterior_color_name': 'White',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Mark Moats Ford',
              'seller_id': 10486,
              'seller_key': '155032',
              'phone': '4197858662',
              'listed_at': '2017-06-08T00:00:00.000Z',
              'listing_images_count': 27,
              'stock_images_count': 21,
              'stock_type_name': 'New',
              'city_name': 'Defiance',
              'state_name': 'OH',
              'zip_code_name': '43512',
              'mpg': 27
            }
          },
          {
            'listing': {
              'vin': '1FA6P8CF2F5351174',
              'classified_ad_key': '703561011',
              'year_name': '2015',
              'make_name': 'Ford',
              'modelname': 'Mustang',
              'trim_name': 'GT',
              'image': 'http://images.cars.com/phototab/c/5/a/e5/3bc9d646d18824267dba0a7f529.jpg',
              'price': '30998.0',
              'odometer': 7702,
              'transmission_name': 'auto',
              'body_style_name': 'Coupe',
              'basic_exterior_color_name': 'Black',
              'basic_interior_color_name': 'Black',
              'seller_name': 'CarMax Las Vegas',
              'seller_id': 10048,
              'seller_key': '172881',
              'phone': '8886205197',
              'listed_at': '2017-06-23T00:00:00.000Z',
              'listing_images_count': 28,
              'stock_images_count': 22,
              'stock_type_name': 'Used',
              'city_name': 'Henderson',
              'state_name': 'NV',
              'zip_code_name': '89014',
              'mpg': 0
            }
          },
          {
            'listing': {
              'vin': '5XYKT3A63CG198074',
              'classified_ad_key': '703130051',
              'year_name': '2012',
              'make_name': 'KIA',
              'modelname': 'Sorento',
              'trim_name': 'LX',
              'image': 'http://images.cars.com/phototab/5/8/8/70/1b9208e41b4ebab4f8d647dd497.jpg',
              'price': '9993.0',
              'odometer': 96961,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Gold',
              'basic_interior_color_name': '',
              'seller_name': 'Crown Chrysler Dodge Jeep Ram Greensboro',
              'seller_id': 7017,
              'seller_key': '106482',
              'phone': '8882546170',
              'listed_at': '2017-05-28T00:00:00.000Z',
              'listing_images_count': 32,
              'stock_images_count': 26,
              'stock_type_name': 'Used',
              'city_name': 'Greensboro',
              'state_name': 'NC',
              'zip_code_name': '27407',
              'mpg': 26
            }
          },
          {
            'listing': {
              'vin': '5TFRY5F17HX223961',
              'classified_ad_key': '700432816',
              'year_name': '2017',
              'make_name': 'Toyota',
              'modelname': 'Tundra',
              'trim_name': 'SR5',
              'image': 'http://car-pictures.cars.com/images/?IMG=USC40TOT105A01305.jpg',
              'price': '36822.0',
              'odometer': 5,
              'transmission_name': 'auto',
              'body_style_name': 'Crew Cab Pickup',
              'basic_exterior_color_name': 'Silver',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Keyes Toyota',
              'seller_id': 5068,
              'seller_key': '24551',
              'phone': '8778349087',
              'listed_at': '2017-04-28T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 38,
              'stock_type_name': 'New',
              'city_name': 'Los Angeles',
              'state_name': 'CA',
              'zip_code_name': '91401',
              'mpg': 16
            }
          },
          {
            'listing': {
              'vin': '1N4AA6APXHC405914',
              'classified_ad_key': '696033003',
              'year_name': '2017',
              'make_name': 'Nissan',
              'modelname': 'Maxima',
              'trim_name': '3.5 SL',
              'image': 'http://images.cars.com/phototab/7/7/1/c0/db34e84a6dc2d7c6850b93a6e68.jpg',
              'price': '39575.0',
              'odometer': 0,
              'transmission_name': 'auto',
              'body_style_name': 'Sedan',
              'basic_exterior_color_name': 'White',
              'basic_interior_color_name': 'Gray',
              'seller_name': 'Nissan of Turnersville',
              'seller_id': 13988,
              'seller_key': '186853',
              'phone': '8888923379',
              'listed_at': '2017-03-11T00:00:00.000Z',
              'listing_images_count': 8,
              'stock_images_count': 15,
              'stock_type_name': 'New',
              'city_name': 'Blackwood',
              'state_name': 'NJ',
              'zip_code_name': '08012',
              'mpg': 26
            }
          },
          {
            'listing': {
              'vin': '2GNALBEK1H1518286',
              'classified_ad_key': '682842616',
              'year_name': '2017',
              'make_name': 'Chevrolet',
              'modelname': 'Equinox',
              'trim_name': 'LS',
              'image': 'http://images.cars.com/phototab/b/7/8/2c/b60f409780e4b152998ba080767.jpg',
              'price': '26540.0',
              'odometer': 62,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'White',
              'basic_interior_color_name': '',
              'seller_name': 'Chatom Motor Company',
              'seller_id': 13273,
              'seller_key': '181466',
              'phone': '8668489328',
              'listed_at': '2016-10-14T00:00:00.000Z',
              'listing_images_count': 16,
              'stock_images_count': 19,
              'stock_type_name': 'New',
              'city_name': 'Chatom',
              'state_name': 'AL',
              'zip_code_name': '36518',
              'mpg': 26
            }
          },
          {
            'listing': {
              'vin': 'LRBFXASA5HD016649',
              'classified_ad_key': '682656687',
              'year_name': '2017',
              'make_name': 'Buick',
              'modelname': 'Envision',
              'trim_name': 'Preferred',
              'image': 'http://images.cars.com/phototab/1/b/9/42/5970e755006acabdbdbd116e766.jpg',
              'price': '34500.0',
              'odometer': 2340,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Brown',
              'basic_interior_color_name': 'Beige',
              'seller_name': 'Lavery Automotive Sales and Service',
              'seller_id': 3437,
              'seller_key': '14362',
              'phone': '8666853340',
              'listed_at': '2016-10-12T00:00:00.000Z',
              'listing_images_count': 15,
              'stock_images_count': 20,
              'stock_type_name': 'New',
              'city_name': 'Alliance',
              'state_name': 'OH',
              'zip_code_name': '44601',
              'mpg': 26
            }
          },
          {
            'listing': {
              'vin': '3GTU2PEJ4HG457746',
              'classified_ad_key': '703471524',
              'year_name': '2017',
              'make_name': 'GMC',
              'modelname': 'Sierra 1500',
              'trim_name': 'Denali',
              'image': 'http://images.cars.com/phototab/7/f/9/f1/63c030431658ffd923b7d3b6d99.jpg',
              'price': '65865.0',
              'odometer': 15,
              'transmission_name': 'auto',
              'body_style_name': 'Crew Cab Pickup',
              'basic_exterior_color_name': 'Silver',
              'basic_interior_color_name': '',
              'seller_name': 'Larry Fannin Chevrolet Buick GMC',
              'seller_id': 3180,
              'seller_key': '13434',
              'phone': '8772095639',
              'listed_at': '2017-06-01T00:00:00.000Z',
              'listing_images_count': 30,
              'stock_images_count': 18,
              'stock_type_name': 'New',
              'city_name': 'Morehead',
              'state_name': 'KY',
              'zip_code_name': '40351',
              'mpg': 18
            }
          },
          {
            'listing': {
              'vin': '1G1ZE5ST6HF116432',
              'classified_ad_key': '704014737',
              'year_name': '2017',
              'make_name': 'Chevrolet',
              'modelname': 'Malibu',
              'trim_name': '1LT',
              'image': 'http://images.cars.com/phototab/2/2/1/5d/1d6fe6b5faafc7b1adeca845be9.jpg',
              'price': '24783.0',
              'odometer': 3263,
              'transmission_name': 'auto',
              'body_style_name': 'Sedan',
              'basic_exterior_color_name': 'Gray',
              'basic_interior_color_name': '',
              'seller_name': 'Feldman Chevrolet of Novi',
              'seller_id': 534,
              'seller_key': '1417',
              'phone': '8889043568',
              'listed_at': '2017-06-07T00:00:00.000Z',
              'listing_images_count': 14,
              'stock_images_count': 20,
              'stock_type_name': 'New',
              'city_name': 'Novi',
              'state_name': 'MI',
              'zip_code_name': '48375',
              'mpg': 32
            }
          },
          {
            'listing': {
              'vin': '1C4PJMCB0HW615608',
              'classified_ad_key': '693644274',
              'year_name': '2017',
              'make_name': 'Jeep',
              'modelname': 'Cherokee',
              'trim_name': 'Latitude',
              'image': 'http://images.cars.com/phototab/d/5/1/cf/d1918f3b2da1cfe90d61a064f68.jpg',
              'price': '25928.0',
              'odometer': 1,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Red',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Salem Chrysler Jeep Dodge RAM',
              'seller_id': 10317,
              'seller_key': '154597',
              'phone': '8669394087',
              'listed_at': '2017-02-15T00:00:00.000Z',
              'listing_images_count': 23,
              'stock_images_count': 21,
              'stock_type_name': 'New',
              'city_name': 'Salem',
              'state_name': 'OH',
              'zip_code_name': '44460',
              'mpg': 25
            }
          },
          {
            'listing': {
              'vin': '1FTEW1EPXHFB89586',
              'classified_ad_key': '699309267',
              'year_name': '2017',
              'make_name': 'Ford',
              'modelname': 'F-150',
              'trim_name': '',
              'image': 'http://car-pictures.cars.com/images/?IMG=C6FOGLA1.JPG',
              'price': '57425.0',
              'odometer': 3,
              'transmission_name': 'auto',
              'body_style_name': 'Crew Cab Pickup',
              'basic_exterior_color_name': 'Gray',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Ford of Montebello',
              'seller_id': 3411,
              'seller_key': '85986',
              'phone': '8665038159',
              'listed_at': '2017-04-16T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 0,
              'stock_type_name': 'New',
              'city_name': 'Montebello',
              'state_name': 'CA',
              'zip_code_name': '90640',
              'mpg': 13
            }
          },
          {
            'listing': {
              'vin': 'WDCGG5HB2EG182046',
              'classified_ad_key': '703039351',
              'year_name': '2014',
              'make_name': 'Mercedes-Benz',
              'modelname': 'GLK-Class',
              'trim_name': 'GLK 350',
              'image': 'http://images.cars.com/phototab/7/4/e/3f/aae09874518d57107f1fe780bb.jpg',
              'price': '29000.0',
              'odometer': 27536,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Silver',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Audi Gainesville',
              'seller_id': 22847,
              'seller_key': '5371406',
              'phone': '8887511078',
              'listed_at': '2017-05-27T00:00:00.000Z',
              'listing_images_count': 27,
              'stock_images_count': 22,
              'stock_type_name': 'Used',
              'city_name': 'Gainesville',
              'state_name': 'FL',
              'zip_code_name': '32609',
              'mpg': 23
            }
          },
          {
            'listing': {
              'vin': '4S4BRBCC0E3228758',
              'classified_ad_key': '703024582',
              'year_name': '2014',
              'make_name': 'Subaru',
              'modelname': 'Outback',
              'trim_name': '2.5i Premium',
              'image': 'http://images.cars.com/phototab/d/f/d/f2/4858744618087ab5baa8de684be.jpg',
              'price': '16949.0',
              'odometer': 83533,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Gray',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Chrysler Winona',
              'seller_id': 11526,
              'seller_key': '157624',
              'phone': '8888122325',
              'listed_at': '2017-05-27T00:00:00.000Z',
              'listing_images_count': 31,
              'stock_images_count': 21,
              'stock_type_name': 'Used',
              'city_name': 'Winona',
              'state_name': 'MN',
              'zip_code_name': '55987',
              'mpg': 27
            }
          },
          {
            'listing': {
              'vin': '2T2BZMCA0HC099216',
              'classified_ad_key': '702564139',
              'year_name': '2017',
              'make_name': 'Lexus',
              'modelname': 'RX 350',
              'trim_name': 'F Sport',
              'image': 'http://car-pictures.cars.com/images/?IMG=USC60LES122B01295.jpg',
              'price': '60459.0',
              'odometer': 0,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Gray',
              'basic_interior_color_name': 'Red',
              'seller_name': 'Sewell Lexus of Dallas',
              'seller_id': 4611,
              'seller_key': '21669',
              'phone': '8665851716',
              'listed_at': '2017-05-23T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 22,
              'stock_type_name': 'New',
              'city_name': 'Dallas',
              'state_name': 'TX',
              'zip_code_name': '75209',
              'mpg': 23
            }
          },
          {
            'listing': {
              'vin': '1C6RR7KG3HS781569',
              'classified_ad_key': '702327945',
              'year_name': '2017',
              'make_name': 'RAM',
              'modelname': '1500',
              'trim_name': 'Tradesman',
              'image': 'http://images.cars.com/phototab/8/e/a/32/44386f655a8bc553e2829cbd51a.jpg',
              'price': '41380.0',
              'odometer': 13,
              'transmission_name': 'auto',
              'body_style_name': 'Crew Cab Pickup',
              'basic_exterior_color_name': 'Black',
              'basic_interior_color_name': 'Gray',
              'seller_name': 'Lithia Dodge of Las Cruces',
              'seller_id': 17491,
              'seller_key': '2278461',
              'phone': '5758883643',
              'listed_at': '2017-05-19T00:00:00.000Z',
              'listing_images_count': 20,
              'stock_images_count': 35,
              'stock_type_name': 'New',
              'city_name': 'Las Cruces',
              'state_name': 'NM',
              'zip_code_name': '88011',
              'mpg': 20
            }
          },
          {
            'listing': {
              'vin': '2LMPJ8LR1HBL10656',
              'classified_ad_key': '686372993',
              'year_name': '2017',
              'make_name': 'Lincoln',
              'modelname': 'MKX',
              'trim_name': 'Reserve',
              'image': 'http://images.cars.com/phototab/e/0/6/62/d07d486ed4e54ea2f5c7b68b8d8.jpg',
              'price': '50845.0',
              'odometer': 5,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'White',
              'basic_interior_color_name': 'Beige',
              'seller_name': 'Ganley Lincoln',
              'seller_id': 8190,
              'seller_key': '155152',
              'phone': '8885729169',
              'listed_at': '2016-11-23T00:00:00.000Z',
              'listing_images_count': 3,
              'stock_images_count': 21,
              'stock_type_name': 'New',
              'city_name': 'Cleveland',
              'state_name': 'OH',
              'zip_code_name': '44130',
              'mpg': 20
            }
          },
          {
            'listing': {
              'vin': '3KPFK4A73HE030832',
              'classified_ad_key': '705001823',
              'year_name': '2017',
              'make_name': 'KIA',
              'modelname': 'Forte',
              'trim_name': 'LX',
              'image': 'http://car-pictures.cars.com/images/?IMG=USC70KIC111A01300.jpg',
              'price': '13769.0',
              'odometer': 0,
              'transmission_name': 'manual',
              'body_style_name': 'Sedan',
              'basic_exterior_color_name': 'Gray',
              'basic_interior_color_name': 'Gray',
              'seller_name': 'Moritz Kia Hurst',
              'seller_id': 14946,
              'seller_key': '197755',
              'phone': '8774380798',
              'listed_at': '2017-06-17T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 39,
              'stock_type_name': 'New',
              'city_name': 'Hurst',
              'state_name': 'TX',
              'zip_code_name': '76053',
              'mpg': 30
            }
          },
          {
            'listing': {
              'vin': '5TDBZRFH7HS435199',
              'classified_ad_key': '704097130',
              'year_name': '2017',
              'make_name': 'Toyota',
              'modelname': 'Highlander',
              'trim_name': 'LE',
              'image': 'http://car-pictures.cars.com/images/?IMG=CAC70TOS141A01300.jpg',
              'price': '32917.0',
              'odometer': 5,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Silver',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Freeman Toyota',
              'seller_id': 5297,
              'seller_key': '25866',
              'phone': '7072067974',
              'listed_at': '2017-06-08T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 19,
              'stock_type_name': 'New',
              'city_name': 'Santa Rosa',
              'state_name': 'CA',
              'zip_code_name': '95407',
              'mpg': 0
            }
          },
          {
            'listing': {
              'vin': '2GNAXJEV9J6156337',
              'classified_ad_key': '705637015',
              'year_name': '2018',
              'make_name': 'Chevrolet',
              'modelname': 'Equinox',
              'trim_name': 'LT',
              'image': 'http://images.cars.com/phototab/d/b/1/85/8bf4400c8f8bf039e6c81a4126a.jpg',
              'price': '30246.0',
              'odometer': 0,
              'transmission_name': 'auto',
              'body_style_name': 'SUV',
              'basic_exterior_color_name': 'Orange',
              'basic_interior_color_name': 'Black',
              'seller_name': 'Holiday Chevrolet',
              'seller_id': 12455,
              'seller_key': '173299',
              'phone': '8884840881',
              'listed_at': '2017-06-23T00:00:00.000Z',
              'listing_images_count': 1,
              'stock_images_count': 19,
              'stock_type_name': 'New',
              'city_name': 'Whitesboro',
              'state_name': 'TX',
              'zip_code_name': '76273',
              'mpg': 0
            }
          },
          {
            'listing': {
              'vin': '4T1BF1FK7HU391749',
              'classified_ad_key': '701986503',
              'year_name': '2017',
              'make_name': 'Toyota',
              'modelname': 'Camry',
              'trim_name': 'LE',
              'image': 'http://car-pictures.cars.com/images/?IMG=USC50TOC021D01296.jpg',
              'price': '24204.0',
              'odometer': 0,
              'transmission_name': 'auto',
              'body_style_name': 'Sedan',
              'basic_exterior_color_name': 'White',
              'basic_interior_color_name': 'Gray',
              'seller_name': 'Cabe Toyota',
              'seller_id': 2357,
              'seller_key': '24397',
              'phone': '8556890907',
              'listed_at': '2017-05-16T00:00:00.000Z',
              'listing_images_count': 0,
              'stock_images_count': 21,
              'stock_type_name': 'New',
              'city_name': 'Long Beach',
              'state_name': 'CA',
              'zip_code_name': '90806',
              'mpg': 0
            }
          }
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getList()
            .then(data => {
              this.loading = false
              this.items = data.listings
              this.pagination = {totalItems: data.total, rowsPerPage: 20}
            })
        },
        deep: true
      }
    },
    methods: {
      // Populate the items list and pagination
      getList: function (sortBy, ascending) {
        this.loading = true
        return this.axios.get('/api/listings', {
          params: {
            page: 1,
            per_page: 20
            // sort_by: sortBy,
            // ascending: true
          }
        })
      },
      goToDetails: function (id) {
        this.$router.push({
          name: 'Details',
          params: { itemId: id }
        })
      }
    }
  }
</script>

<style lang="stylus">
.browseListing
 width inherit
 margin 0 auto
.item-image
 cursor pointer
 max-width 300px
.listing-container tr:hover
 background inherit!important
.listing-container tr h4, .listing-container tr h5
 color #000
 cursor pointer
</style>
