const seleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciar = document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar =document.getElementById('boton-reiniciar')

const seleccionarMas = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRati = document.getElementById('ratigueya')
const inputLangos = document.getElementById('langostelvis')
const inputTuca = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador =document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador =document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

const seccionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let spanAtaqueJugador
let vidaJugador = 5
let vidaEnemigo = 5

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','images/Hipodoge.png',5)
let capipepo = new Mokepon('Capipepo','images/Capipepo.png',5)
let ratigueya = new Mokepon('Ratigueya','images/Ratigueya.png',5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
    
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'}, 
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

function iniciarJuego(){
    
    seleccionarAtaque.style.display = 'none'
    seccionReiniciar.style.display = 'none'
    
    botonMascota.addEventListener('click', seleccionarMascota)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascota(){
    
    seleccionarAtaque.style.display = 'flex'
    
    seleccionarMas.style.display = 'none'
    
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

    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(final){
    
    seccionReiniciar.style.display = 'block'
    
    seccionMensajes.innerHTML = final
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)