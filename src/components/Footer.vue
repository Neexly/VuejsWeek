
<template>
    
<footer class="page-footer font-small blue">

  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href=""> Marvin Mensah</a>
  </div>
  

</footer>

      
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    Title: String,
    Desc: String
  },
  data() {
    return {

    };
  },
}
</script>
<style>
    .navBar {
        width: 10px;
        background-color: aqua;
        
    }

    .lightBorder{
        border:1px solid black;
    }
</style>
