// Listas para variaveis dos veiculos 

let yCarros = [ 258, 200, 138, 80]
let velocidadeCarros = [4, 6, 2, 7.5]
let xCarros = [-100, 605, -200, 605]
let lCarros = [ 105, 100, 180, 95]
let aCarros = [ 70, 60, 60,55]

// Funções

function mostraVeiculos(){
  
  for (let i = 0; i < imagemCarros.length; i = i+1){
  image(imagemCarros[i], xCarros[i] , yCarros[i], lCarros[i], aCarros[i])}
  
}

function velocidadeVeiculos(){
  
  xCarros[0] += velocidadeCarros [0]
  xCarros[1] -= velocidadeCarros [1]
  xCarros[2] += velocidadeCarros [2]
  xCarros[3] -= velocidadeCarros [3]
  
  }

function loopVeiculos(){
  
  if (xCarros[0] > 700){ xCarros[0] = -100 }
  if (xCarros[1] <-100){ xCarros[1] = 605 }
  if (xCarros[2] > 700){ xCarros[2] = - 200 }
  if (xCarros[3] <-100){ xCarros[3] = 605 }
  
}
  