// Variaveis do Ator 

let xAtor = 200;
let yAtor = 330;
let colisao = false;

// Mostrar o Ator 

 function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35, 55)
   
  }

// Movimento Ator 

function movAtor(){
  
  if(keyIsDown(UP_ARROW)){
   yAtor -= 3; }

 if(keyIsDown(DOWN_ARROW)){
   yAtor += 2; }
  
}

function voltar(){
   yAtor = 330;
}

  
function verificaColisao(){

  for (let i = 0; i < imagemCarros.length; i = i+1){
    
  colisao = collideRectRect(xCarros[i], yCarros[i], lCarros[i]-30, aCarros[i]-35,xAtor, yAtor, 30, 50) 
  
  if(colisao){ voltar();
  sonsColisao.play();
  if (pontosMaiorQueZero()){
      meusPontos = 0;
   }
  }
 }
}

let meusPontos = 0

function mostraPlacar(){

image(imagemDaPlaca, 450, 19, 55, 35);

textAlign(CENTER)
textSize(24);
text( meusPontos , 470, 44);
fill(255);

}

  function marcarPontos(){
if (yAtor < 2){
  meusPontos+= 1;
  voltar();
  sonsPontos.play()
} 
  }
function pontosMaiorQueZero(){
  return meusPontos > 0
}

  