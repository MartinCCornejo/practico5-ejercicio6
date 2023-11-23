const temporizador = document.querySelector('h3');
const pausa = document.getElementById('pausa');
const iniciar = document.getElementById('iniciar');
const resetear = document.getElementById('resetear');
const form = document.getElementById('form-container');

let segundos;
let intervalo;

// Funcion que muestra los segundos en el temporizador
const prepararTemporizador = (e) => {
    e.preventDefault();
    segundos = parseInt(document.querySelector('input').value);
    mostrarTiempo(segundos);
};

// Intervalo que se ejecuatara cada segundo una vez que lo iniciemos
const intervaloTemporizador = () => {
    if (segundos > 0) {
        segundos--;
        mostrarTiempo(segundos);
    } else {
        clearInterval(intervalo);
        iniciar.disabled = false;
    }
};

// Funcion que inicia el temporizador 
const iniciarTemporizador = () => {
    intervalo = setInterval(intervaloTemporizador, 1000);
    iniciar.disabled = true;

    pausa.addEventListener('click',() =>{
        iniciar.disabled = false;
        clearInterval(intervalo);
    });

    resetear.addEventListener('click',() =>{
        iniciar.disabled = false;
        clearInterval(intervalo);
        mostrarTiempo(0);
    });
};

// Función que escribe los segundos dentro del temporizador 
const mostrarTiempo = (segundos) => {
    temporizador.innerHTML = (segundos < 10) ? `0${segundos}` : segundos;
};

form.addEventListener('submit',prepararTemporizador);
iniciar.addEventListener('click',iniciarTemporizador);
