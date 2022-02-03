function setRelogio(){
  function criaHoraDosSegundos(segundos){
    const tempo = new Date(segundos * 1000);
    return tempo.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

function iniciarRelogio (){

  timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  },1000)
}

document.addEventListener("click",function(e){
  const el = e.target;

  if (el.classList.contains("iniciar")){
    relogio.classList.remove("pausado");
    document.querySelector("#clock-hand").classList.add("girar")
    clearInterval(timer);
    iniciarRelogio();

  }

  if (el.classList.contains("pausar")){
    if (relogio.innerHTML != "00:00:00"){
    document.querySelector("#clock-hand").classList.remove("girar")
    clearInterval(timer);
    relogio.classList.add("pausado");}
  
  }

  if (el.classList.contains("zerar")){
    segundos = 0;
    relogio.classList.remove("pausado");
    document.querySelector("#clock-hand").classList.remove("girar")
    relogio.innerHTML = "00:00:00";
    clearInterval(timer);}


})
}

setRelogio();