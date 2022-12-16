const seleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciar = document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-mascota')
const botonReiniciar =document.getElementById('boton-reiniciar')

const seleccionarMas = document.getElementById('seleccionar-mascota')
const spanMascotaJugador =document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador =document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

const seccionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRati
let inputLangos
let inputTuca
let inputPydos
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataqueJugador = []
let indexAtaqueJugador
let indexAtaqueEnemigo 
let spanAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidaJugador = 3
let vidaEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./images/Hipodoge.png',5)
let capipepo = new Mokepon('Capipepo','./images/Capipepo.png',5)
let ratigueya = new Mokepon('Ratigueya','./images/Ratigueya.png',5)
let langostelvis = new Mokepon('Langostelvis', './images/Langostelvis.png',5)
let tucapalma = new Mokepon('Tucapalma','./images/Tucapalma.png',5)
let pydos = new Mokepon('Pydos', './images/Pydos.png',5)

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

langostelvis.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'}
)

tucapalma.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'}
)

pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'}, 
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma,pydos)

function iniciarJuego(){
    
    seleccionarAtaque.style.display = 'none'
    seccionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon)=> {
        opcionDeMokepones =`
        <input type="radio" name="mascota" id=${mokepon.nombre}>
         <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRati = document.getElementById('Ratigueya')
        inputLangos = document.getElementById('Langostelvis')
        inputTuca = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
    })
    
    botonMascota.addEventListener('click', seleccionarMascota)
    botonReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascota(){
    
    seleccionarAtaque.style.display = 'flex'
    
    seleccionarMas.style.display = 'none'
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML= inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML=inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRati.checked){
        spanMascotaJugador.innerHTML=inputRati.id
        mascotaJugador = inputRati.id
    }else if(inputLangos.checked){
        spanMascotaJugador.innerHTML=inputLangos.id
        mascotaJugador = inputLangos.id
    }else if(inputTuca.checked){
        spanMascotaJugador.innerHTML=inputTuca.id
        mascotaJugador = inputTuca.id
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML=inputPydos.id
        mascotaJugador = inputPydos.id
    }else{
        alert('Por favor selecciona tu mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for(let i = 0; i <mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon 
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '🌱'){
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("TIERRA")
    }
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length == 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            indexAmbosOponentes(i,i)
            crearMensaje('EMPATE')
        }else if((ataqueJugador[i] == 'FUEGO' && ataqueEnemigo[i] == 'TIERRA')||(ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO')||(ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'AGUA')){
            indexAmbosOponentes(i,i)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidaJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(i,i)
            crearMensaje('PERDISTE')
            victoriasEnemigo ++
            spanVidaEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas(){
    if(victoriasEnemigo==victoriasJugador){
        crearMensajeFinal('HAS EMPATADO, Mas Esfuerzo para la proxima!!!')
    }else if(victoriasJugador < victoriasEnemigo){
        crearMensajeFinal('Has perdido ¡LO SIENTO! :(')
    }else{
        crearMensajeFinal('HAS GANADO, sigue asi, FELICITACIONES :)')
    }
}

function crearMensaje(resultado){

    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
   
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(final){
    
    seccionReiniciar.style.display = 'block'
    
    seccionMensajes.innerHTML = final
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)