<script>
  function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
</script>
<style>
  .BottomPlayer{
    height:6em;
    background-color:#242424;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-left:1.5em;
    padding-top:1.5em;
    justify-items: center;
    position:relative;
    bottom: 0;
  }

  .BottomPlayer .info-song{
    line-height: 1.375em;
    justify-self: flex-start;
  }
  #heart-icon{
    width:1em;
    height:1em;
  }
  .controls-container{
    width:496px;
    margin-bottom: 6px;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .play-control, .control{
    width: 14px;
    height:14px;
    justify-self: center;
    align-self: center;
  }
  .play-control{
    width:36px;
    height:36px;
    margin: 0 32px;
  }
  #skip-left{
    margin-left: 170px;
  }
  #myBar{
    height:5px;
    width:496px;
    border: var(--grey) 1px solid;
    background-color: var(--grey);
  }
  /* responsive */
 
</style>
<div class="BottomPlayer">
  <div class="info-song">
    <p >Dákiti 
      <img src="../assets/Heart.svg" alt="heart icon" id="heart-icon">
    </p>
    <p>Bad Bunny,Jhay Cortez</p>
  </div>
  <!-- progress bar -->
  <div class="progress-bar">
    <div class="controls-container">
      <img src="../assets/Skip-left.svg" class="control" alt="skip left" id="skip-left">
      <img src="../assets/Play.svg" class="play-control" on:click={move} alt="play">
      <img src="../assets/Skip-rigth.svg" class="control" alt="skip rigth">
    </div>
    <div id="myBar" style="width:35%"></div>
  </div>
  <!-- /progress-bar -->
<div></div>
</div>