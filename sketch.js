
function setup() {
  createCanvas(600, 400);
  sonsAmbiente.loop();
  sonsTrilha.loop();
}

function draw() {
  
  background(imagemDaEstrada);
  
  //-------------------- Exibir elementos 
 
  mostraAtor();
  mostraVeiculos();
  mostraPlacar();
  marcarPontos();
  
  //-------------------- Movimentação
  
  movAtor();
  velocidadeVeiculos();
  loopVeiculos();
  verificaColisao();
  
}


  