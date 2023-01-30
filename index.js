let hoje = new Date;
let horas = hoje.getHours();
let minutos = hoje.getMinutes();
let divhora = document.getElementById("hora");
let ct = document.getElementById("ct");

if (minutos > 10) {
    divhora.innerHTML = `Agora são ${horas}:${minutos}`;
  
}
else {
    divhora.innerHTML = `Agora são ${horas}:0${minutos}`;
    
}

function mudarcss() {
    if (horas > 6 && horas <= 16) {
        ct.innerHTML += `<img src="imagens/manha.jpg" id="imagem"></img>`
        document.body.style.backgroundColor = "blue";

    }
    else if (horas > 15 && horas <= 19) {
        ct.innerHTML += `<img src="imagens/tarde.jpg" id="imagem"></img>`
        document.body.style.backgroundColor = "orange";

    }
    else {
        ct.innerHTML += `<img src="imagens/noite.png" id="imagem"></img>`
        document.body.style.backgroundColor = "black";

    }
}