<script></script>
<style>
  .Inicio{
    width: 68.25em;
    /* height:37.8125em; */
    height: 100%;
    color: white;
    padding-left:2em ;
  }
  .Inicio h2{
    padding-bottom:0.125em ;
  }
  .Inicio .heading{
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5em;
    padding-top: 1em;
  }
  .control-arrow a  img{
    width: 16px;
    height: 16px;
  }
  hr{
    border: 1px solid var(--grey);
  }
  .avatar{
    width: 10.375em;
    height: 10.375em;
  }
  #page-2,#page-1{
    display: flex;
  }
  .card{
    width: 10.375em;
    margin-top: 1.5em;
    margin-right: 1em;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p{
    font-size:13px;
  }
  nav, scroll-container{
    display:flex;
    text-align: center;
  }
  scroll-container{
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
  
  
</style>
<div class="Inicio">
  <h2>Inicio</h2>
  <nav class="heading">
    <h4>Top playlists</h4>
    <div class="control-arrow">
    <a href="#page-1"><img src="../assets/Chevron-left.svg" alt="flecha left"></a>
    <a href="#page-2"><img src="../assets/Chevron-right.svg" alt="flecha right"></a>
    </div>
  </nav>
  <hr>
  <scroll-container>
    <scroll-page id="page-1">
      <!-- primer imagen -->
      <div class="card">
        <img src="../assets/cover.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Mansion reggaetón</b></h4> 
          <p>Los exitos del reggaeton<br> del momento.<br>
            2,611,830 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- segunda imagen -->
      <div class="card">
        <img src="../assets/cover-2.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Éxitos</b></h4> 
          <p>aqui estan los hits mas grandes<br> del momento.<br>
            23,720,224 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- tercera imagen -->
      <div class="card">
        <img src="../assets/cover-3.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Hits Urbanos</b></h4> 
          <p>Éxitos urbanos de<br> Latinoamerica.<br>
            1,131,650 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- cuarta imagen -->
      <div class="card">
        <img src="../assets/cover-4.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Dame Salsa</b></h4> 
          <p>Quiero Salsa Dame Salsa<br> Josimar y Su Yambu<br>
            175,315 SEGUIDORES
          </p> 
         </div>
      </div>
    </scroll-page>
    <scroll-page id="page-2">
      <!-- quinta imagen -->
      <div class="card">
        <img src="../assets/cover-5.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Dame Flow</b></h4> 
          <p>Lo mejor del reggaeton y<br> flow actual<br>
            257,277 SEGUIDORES
          </p> 
         </div>
      </div>      
      <!-- sexta imagen -->
      <div class="card">
        <img src="../assets/cover-6.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>FuNketon</b></h4> 
          <p>Funk + reggaetón<br> Cover Bad Bunny<br>
            36,593 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- septima imagen -->
      <div class="card">
        <img src="../assets/cover-7.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Bachateame!</b></h4> 
          <p>Esto si es bachata!<br> Natti Natasha y Romeo<br>
            120,721 SEGUIDORES
          </p> 
         </div>
      </div>      
    </scroll-page>
  </scroll-container>
<!-- SEGUNDA FILA -->
 <nav class="heading">
    <h4>Escuchado Recientemente</h4>
    <div class="control-arrow">
    </div>
  </nav>
  <hr>
  <scroll-container>
    <scroll-page id="page-1">
      <!-- primer imagen -->
      <div class="card">
        <img src="../assets/cover.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Mansion reggaetón</b></h4> 
          <p>Los exitos del reggaeton<br> del momento.<br>
            2,611,830 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- segunda imagen -->
      <div class="card">
        <img src="../assets/cover-2.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Éxitos</b></h4> 
          <p>aqui estan los hits mas grandes<br> del momento.<br>
            23,720,224 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- tercera imagen -->
      <div class="card">
        <img src="../assets/cover-3.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Hits Urbanos</b></h4> 
          <p>Éxitos urbanos de<br> Latinoamerica.<br>
            1,131,650 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- cuarta imagen -->
      <div class="card">
        <img src="../assets/cover-4.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Dame Salsa</b></h4> 
          <p>Quiero Salsa Dame Salsa<br> Josimar y Su Yambu<br>
            175,315 SEGUIDORES
          </p> 
         </div>
      </div>
    </scroll-page>
    <scroll-page id="page-2">
      <!-- quinta imagen -->
      <div class="card">
        <img src="../assets/cover-5.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Dame Flow</b></h4> 
          <p>Lo mejor del reggaeton y<br> flow actual<br>
            257,277 SEGUIDORES
          </p> 
         </div>
      </div>      
      <!-- sexta imagen -->
      <div class="card">
        <img src="../assets/cover-6.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>FuNketon</b></h4> 
          <p>Funk + reggaetón<br> Cover Bad Bunny<br>
            36,593 SEGUIDORES
          </p> 
         </div>
      </div>
      <!-- septima imagen -->
      <div class="card">
        <img src="../assets/cover-7.png" alt="Avatar" class="avatar">
         <div class="container">
          <h4><b>Bachateame!</b></h4> 
          <p>Esto si es bachata!<br> Natti Natasha y Romeo<br>
            120,721 SEGUIDORES
          </p> 
         </div>
      </div>      
    </scroll-page>
  </scroll-container>
</div>