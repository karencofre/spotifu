<script></script>
<style>
  .Sidebar{
    background-color: var(--black-1);
    width:14em;
    height:42em; 
  }
  .Sidebar .frame{
    padding-top:2.5em;
    padding-left:1.5em;
  }
  /* start primary menu */
  .lista li,.sections section{ 
    display: flex;
    align-items: center;
    padding: 8px 0;
  }
  .Sidebar .sections section .icons{
    width: 24px;
    height: 24px;
    margin-right: 0.5em;
  }
  
  /* #home-icon:hover{
    background-image: url('../assets/Home-filled.svg');
    background-repeat: no-repeat;
    background-size: 24px;
  }
  #search-icon:hover{
    background-image: url('../assets/Search-big.svg');
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .lista li:hover::before, .home-section:hover::before , .search-section:hover::before, .premium-section:hover::before{
    content: url('../assets/select.svg');
    width: 4px;
    height: 40px;
    position:absolute;
    left:0;
  } */
  .Sidebar div section:hover{
    color:var(--white);
  }
  /* end primary menu */
  /* start library list */
  .lista{
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  .lista li{
    margin-bottom: 0.5em;
    height: 1.875em;
  }

  /* end library list */
</style>
<aside class="Sidebar">
  <!-- logo spotifu -->
  <img src="../assets/logo-spotifu.svg" alt="Spotifu logo" class="frame">
  <!-- /logo spotifu -->
  <!-- sections -->
  <div class="sections frame">
    <section class="home-section"><img src="../assets/Home.svg" alt="Home icon" class="icons" id="home-icon">
      Inicio</section>
      <section class="search-section"><img src="../assets/Search-small.svg" alt="search sidebar icon" class="icons" id="search-icon">Buscar</section>
      <section class="premium-section"><img src="../assets/Credit-card.svg" alt="premium icon" class="icons">Premium</section> 
    </div>
  <!-- /sections -->
    <!-- list-->
    <ul class="frame lista">
      <li>Tu Biiblioteca</li>
      <li>Creada para ti</li>
      <li>Escuchado recientemente</li>
      <li>Tus Me Gusta</li>
      <li>Artistas</li>
      <li>Podcasts</li>
    </ul>
    <!-- /list -->
  </aside>