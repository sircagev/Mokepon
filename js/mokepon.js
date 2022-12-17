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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBack = new Image()
mapaBack.src = './images/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoMapa = 450
let arrayAleatorio = []

if(anchoDelMapa > anchoMaximoMapa){
    anchoDelMapa = anchoMaximoMapa - 20
}

alturaQueBuscamos = anchoDelMapa*600/800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0,mapa.width - this.ancho)
        this.y = aleatorio(0,mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge','./images/Hipodoge.png',5,'./images/Cabezahipodoge.png')
let capipepo = new Mokepon('Capipepo','./images/Capipepo.png',5,'./images/Cabezacapipepo.png')
let ratigueya = new Mokepon('Ratigueya','./images/Ratigueya.png',5,'./images/Cabezaratigueya.png')
let langostelvis = new Mokepon('Langostelvis', './images/Langostelvis.png',5,'./images/Langostelvis.png')
let tucapalma = new Mokepon('Tucapalma','./images/Tucapalma.png',5,'./images/Tucapalma.png')
let pydos = new Mokepon('Pydos', './images/Pydos.png',5, './images/Pydos.png')

let hipodogeEnemigo = new Mokepon('Hipodoge','./images/Hipodoge.png',5,'./images/Cabezahipodoge.png')
let capipepoEnemigo = new Mokepon('Capipepo','./images/Capipepo.png',5,'./images/Cabezacapipepo.png')
let ratigueyaEnemigo = new Mokepon('Ratigueya','./images/Ratigueya.png',5,'./images/Cabezaratigueya.png')
let langostelvisEnemigo = new Mokepon('Langostelvis', './images/Langostelvis.png',5,'./images/Langostelvis.png')
let tucapalmaEnemigo = new Mokepon('Tucapalma','./images/Tucapalma.png',5,'./images/Tucapalma.png')
let pydosEnemigo = new Mokepon('Pydos', './images/Pydos.png',5, './images/Pydos.png')

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

hipodogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
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

langostelvisEnemigo.ataques.push(
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

tucapalmaEnemigo.ataques.push(
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

pydosEnemigo.ataques.push(
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
    sectionVerMapa.style.display = 'none'

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
    seleccionarMas.style.display = 'none'
    sectionVerMapa.style.display = 'flex' 
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
    iniciarMapa()
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
            console.log('ataquesJugador',ataqueJugador)
            if(ataqueJugador.length == 5){
                ataqueAleatorioEnemigo()
                combate()
            }  
            console.log('Ataques enemigo', ataquesMokeponEnemigo,arrayAleatorio,ataqueEnemigo)     
        })
    })
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(enemigo){
    ataquesMokeponEnemigo = enemigo.ataques
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    llenarArrayAleatorio()
    
    for (let i = 0; i < arrayAleatorio.length; i++) {
        if(ataquesMokeponEnemigo[arrayAleatorio[i]].nombre == '🔥'){
            ataqueEnemigo.push("FUEGO")
        }else if(ataquesMokeponEnemigo[arrayAleatorio[i]].nombre == '💧'){
            ataqueEnemigo.push("AGUA")
        }else{
            ataqueEnemigo.push("TIERRA")
        }
   }
}

function llenarArrayAleatorio(){
    while (arrayAleatorio.length<ataquesMokeponEnemigo.length) {
        let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
        let existe = false
        for (let i = 0; i < arrayAleatorio.length; i++) {
            if (arrayAleatorio[i] == ataqueAleatorio) {
                existe = true;
                break;
            }
        }
        if(!existe){
            arrayAleatorio.push(ataqueAleatorio) 
        }
    }
    return arrayAleatorio
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

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0,0,mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBack,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadx !== 0 || mascotaJugadorObjeto.velocidady !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}

function moverArriba(){
    mascotaJugadorObjeto.velocidady = -5
}

function moverArriba2(){
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y -5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadx = -5
}

function moverIzquierda2(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidady = 5
}

function moverAbajo2(){
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + 5
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadx = 5
}

function moverDerecha2(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadx =0
    mascotaJugadorObjeto.velocidady=0
}

function sePresionoTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)

    window.addEventListener('keydown', sePresionoTecla)
    window.addEventListener('keyup',detenerMovimiento)
    
}

function obtenerObjetoMascota(){
    for(let i = 0; i <mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo){
        return 
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('coli');
    seleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)