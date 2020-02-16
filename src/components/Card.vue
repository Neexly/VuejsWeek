
<template>
<div>
    <div class="container">
        <div class="row">
            <div class="article-preview-box col-lg-5" v-for="film in films"
                    :key="film.id">
                    <div class="art-img-preview"> <img :src='film.Poster' alt="">  </div>
                        <div class="art-description-preview">
                            <h1 class="title"> {{film.Title}} <br> {{film.Year}} </h1>
                                <p> </p>
                            <button class="fav-btn2">Ajouter aux favoris
                            </button>
                        </div>
                    </div>
            </div>
        </div>
</div>
</template>

<script>

import axios from 'axios';
require('axios').default;

export default {
  name: 'Card',
  props: [{
    Title: String,
    Desc: String,
    Poster: String
  }],
  data() {
    return{
    film: null
    }
  },
    mounted () {
    axios
      .get('http://www.omdbapi.com/?s=Batman&apikey=d1b4f18f')
      
      
      .then(response => (this.films = response.data.Search))
  
    
  },
}
</script>
<style>
    .article-preview-box {
    height:600px ;
    
    background-color:#333A41;
    border-radius: 20px;
    margin: 0 6px 70px 6px;
}

.art-img-preview {
    height:45%;
    /* background-color: aquamarine; */
    border-radius: 20px 20px 0px 0 ;
}

.art-img-preview img{
    height:400px;
    
}


.art-description-preview {
    margin: 20px;
    padding-top: 140px;
}

.art-description-preview .title {
    color: #fff;
    font-size: 20px;

}
.art-description-preview p {
    color: #BABABA;
    font-size: 15px;

}

.fav-btn2{ 
    background: none;
    background-color:#fff  ;
    height: 40px;
    width: 170px;
    margin-top:3px ;
    border-radius: 10px ;
    float: right;
}
</style>
