let ataqueJugador
let ataqueEnemigo
let spanAtaqueJugador
let vidaJugador = 5
let vidaEnemigo = 5

function iniciarJuego(){
    let seleccionarAtaque = document.getElementById('seleccionar-ataque')
    seleccionarAtaque.style.display = 'none'
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascota)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar =document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascota(){
    let seleccionarAtaque = document.getElementById('seleccionar-ataque')
    seleccionarAtaque.style.display = 'flex'
    let seleccionarMas = document.getElementById('seleccionar-mascota')
    seleccionarMas.style.display = 'none'
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRati = document.getElementById('ratigueya')
    let inputLangos = document.getElementById('langostelvis')
    let inputTuca = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador =document.getElementById('mascota-jugador')
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML="Hipodoge"
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML="Capipepo"
    }else if(inputRati.checked){
        spanMascotaJugador.innerHTML="Ratigueya"
    }else if(inputLangos.checked){
        spanMascotaJugador.innerHTML="Langostelvis"
    }else if(inputTuca.checked){
        spanMascotaJugador.innerHTML="Tucapalma"
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML="Pydos"
    }else{
        alert('Por favor selecciona tu mascota')
    }

    seleccionarMascotaEnemigo()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    }else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML="Ratigueya"
    }else if(mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML="Langostelvis"
    }else if(mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML="Tucapalma"
    }else{
        spanMascotaEnemigo.innerHTML="Pydos"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate(){
    let spanVidaJugador =document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    if(ataqueJugador==ataqueEnemigo){
        crearMensaje('EMPATE')
    }else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA')||(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO')||(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')){
        crearMensaje('GANASTE')
        vidaEnemigo --
        spanVidaEnemigo.innerHTML = vidaEnemigo
    }else {
        crearMensaje('PERDISTE')
        vidaJugador --
        spanVidaJugador.innerHTML = vidaJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidaEnemigo==0){
        crearMensajeFinal('Has Ganado :) !FELICITACIONES!')
    }else if(vidaJugador == 0){
        crearMensajeFinal('Has perdido ¡LO SIENTO! :(')
    }
}

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

    
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(final){
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'
    let mensaje = document.getElementById('resultado')
    mensaje.innerHTML = final
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)