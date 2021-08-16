/**
 * Call different external API from here
 */

 import api from '@/api/index'
 import config from '@/config/backend'
 import axios from 'axios'
 
 export default class Util {
   $serveur = api(axios, config)
 
   reverseGeocoding (bodyParams) {
     let apiKey = 'AIzaSyBAkNKNluUXWFnVbxi-81lrdojzLx5MOyY'
     let  headers = { 'Content-Type': 'text/plain' }
     let url ='https://maps.googleapis.com/maps/api/geocode/json?latlng='+bodyParams.latitude+','+bodyParams.longitude+'&key='+apiKey
     return axios.get(url, headers)
   }

   decodeLatLong (position) {
    this.$gmapApiPromiseLazy().then(() => {
      // eslint-disable-next-line no-undef
      const geocoder = new google.maps.Geocoder()

      geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude } }, (results, status) => {
        if (status === 'OK') {
          this.getFromAutocomplete(results[0])
        }
      })
    })
  }
 
  }