<template>
  
   
 <div id="app">
  
   <Card/> 
    <div v-for="film in films"
        :key="film.id">
        
       
       </div>
          <div v-for="film in films"
              :key="film.name">
              <MonComposant
              :key="film.name">
              </MonComposant>
    

</div>

 </div>

</template>

<script>

// import boxes
 import Card from '../components/Card.vue'
import axios from 'axios'

require('axios').default;


export default {
  name: 'HomePage',
  components: {
  Card
  },
  data(){
    return{
    films: null
    }
  },
    mounted () {
    axios
      .get('http://www.omdbapi.com/?s=Batman&apikey=d1b4f18f')

      
      .then(response => (this.films = response.data.Search))
  
    
  }}
  
  

</script>

<style>
</style>
