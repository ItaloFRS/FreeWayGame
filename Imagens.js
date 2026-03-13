// Variaveis Imagens e Sons

let sonsTrilha 
let sonsAmbiente 
let sonsPontos
let sonsColisao

let imagemDaEstrada;
let imagemDoAtor;
let imagemDaMoto;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

// Funções 

function preload(){
  
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoAtor = loadImage("Imagens/Ator-1.png")
  imagemDaMoto = loadImage("Imagens/Moto.png")
  imagemDoCarro1 = loadImage("Imagens/Caminhão.png")
  imagemDoCarro2 = loadImage("Imagens/Car_Vermelho.png")
  imagemDoCarro3 = loadImage("Imagens/Carreta.png")
  imagemDaPlaca = loadImage("Imagens/placarr-PhotoRoom.png")
  sonsTrilha = loadSound("Sons/trilha.mp3" )
  sonsAmbiente = loadSound("Sons/ambiente.mp3")
  sonsPontos = loadSound("Sons/ponto.wav" )
  sonsColisao = loadSound("Sons/erro.wav" )

  
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDaMoto]
}