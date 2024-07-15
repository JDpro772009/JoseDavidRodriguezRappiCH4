// punto 1

let valor1 = document.querySelector(".valor1")
let valor2 = document.querySelector(".valor2")
let resultado = document.querySelector(".resultado")
let medir = document.querySelector(".medir")

medir.addEventListener("click", ()=>{
    let operacion = valor2.value / Math.pow(valor1.value, 2)
    resultado.value = operacion * 10000
})

// punto 2

let moneda1 = document.querySelector(".moneda1")
let moneda2 = document.querySelector(".moneda2")

moneda1.value =  1
moneda2.value = 5087.240

moneda1.addEventListener("keyup", ()=>{
    let op1 = moneda1.value * 5087.24
    moneda2.value = op1.toFixed(2)
})
moneda2.addEventListener("keyup", ()=>{
    let op2 = moneda2.value * 0.00020
    moneda1.value = op2.toFixed(2)
})

// punto 3

let idGlobal = 1

let notas = []
let titulo = document.querySelector(".nombre")
let texto = document.querySelector(".area")
let guardar = document.querySelector(".guardar")
let borrar = document.querySelector(".borrar")

let borrarN = document.querySelector(".borrarN")

let cajaP = document.querySelector(".cartas")
let palabra = document.createElement("h4")
if(notas == ""){ 
    palabra.textContent = "NO HAY CARTAS PARA MOSTRAR"
    cajaP.appendChild(palabra)
}

function crearNota(){
    let caja = document.querySelector(".cartas")
    let carta = document.createElement("div")
    
            
            notas.push({
                id:idGlobal,
                titulo:titulo.value,
                texto:texto.value,
                realizada: false
            })

            carta.setAttribute("class", "card text-center cards")
            carta.innerHTML = `<div class="card-header">
                               <input onClick="marcarRealizada(${notas[notas.length - 1].id})" type="checkbox" ${notas.realizada? "checked": ""} class:"chekear">
                              <label for="chekear">${notas[notas.length - 1].titulo}</label>
                            </div>
                            <div class="card-body">
                              <p class="card-text">${notas[notas.length - 1].texto}</p>
                            </div>
                              <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${notas[notas.length - 1].id})">Borrar</button>`
                              
        
            caja.appendChild(carta)
            
        }

let agregarNota = ()=>{

    
    if(titulo.value=="" ||titulo.value== " " ||titulo.value== "  "){
        titulo.value = ""
        titulo.setAttribute("placeholder", "No has agregado nada en este campo")
        if(texto.value=="" ||texto.value== " " ||texto.value== "  "){
            texto.value = ""
            texto.setAttribute("placeholder", "No has agregado nada en este campo")
        }
    }else if(texto.value=="" ||texto.value== " " ||texto.value== "  "){
        texto.value = ""
        texto.setAttribute("placeholder", "No has agregado nada en este campo")
    }
    else{

        crearNota()
        borrarText()
        console.log(notas)
        idGlobal++
        cajaP.removeChild(palabra)
        
    }

       
}
function borrarNota(id){
    notas[id-1] = ""
    console.log(notas)
    let cajaP = document.querySelector(".cartas")
    cajaP.innerHTML = ""

    for(let i = 0; i < notas.length; i++){
       
    if(notas[i] == ""){
        
    } else{
        let caja = document.querySelector(".cartas")
    let carta = document.createElement("div")
        carta.setAttribute("class", "card text-center cards")
        carta.innerHTML = `<div class="card-header">
                          <input onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada? "checked": ""} class:"chekear">
                          <label for="chekear">${notas[i].titulo}</label>
                        </div>
                        <div class="card-body">
                          <p class="card-text">${notas[i].texto}</p>
                        </div>
                          <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${notas[i].id})">Borrar</button>`
                          
    
        caja.appendChild(carta)
    }

        
   }


  }

let borrarText = ()=>{
    titulo.value = ""
    texto.value = ""
    console.log(notas)
}

borrar.addEventListener("click", ()=>{borrarText()})
guardar.addEventListener("click", ()=>{agregarNota()})


let realizada = document.querySelector(".realizadas")

let completas = []
function marcarRealizada(id){
    if(notas[id-1].realizada){
        notas[id-1].realizada = false
        completas[id-1] = ""
    }else{
        notas[id-1].realizada = true
        completas[id-1] = notas[id-1]
    }
    console.log(completas)
    
}

function filtrar(){
    
    if(realizada.checked){
        console.log(completas)
        cajaP.innerHTML = ""
    for(let i = 0; i < completas.length; i++){
       
        if(completas[i] == ""){
            console.log("nada")
        } else{
            let caja = document.querySelector(".cartas")
        let carta = document.createElement("div")
            carta.setAttribute("class", "card text-center cards")
            carta.innerHTML = `<div class="card-header">
                              <input onClick="marcarRealizada(${completas[i].id})" type="checkbox" ${completas[i].realizada? "checked": ""} class:"chekear">
                              <label for="chekear">${completas[i].titulo}</label>
                            </div>
                            <div class="card-body">
                              <p class="card-text">${completas[i].texto}</p>
                            </div>
                              <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${completas[i].id})">Borrar</button>`
                              
        
            caja.appendChild(carta)
        }
    
    }


}else{
    cajaP.innerHTML = ""
    for(let i = 0; i < notas.length; i++){
       
        if(notas[i] == ""){
            
        } else{
            let caja = document.querySelector(".cartas")
        let carta = document.createElement("div")
            carta.setAttribute("class", "card text-center cards")
            carta.innerHTML = `<div class="card-header">
                              <input onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada? "checked": ""} class:"chekear">
                              <label for="chekear">${notas[i].titulo}</label>
                            </div>
                            <div class="card-body">
                              <p class="card-text">${notas[i].texto}</p>
                            </div>
                              <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${notas[i].id})">Borrar</button>`
                              
        
            caja.appendChild(carta)
        }
    }    
}
}
realizada.addEventListener("click", filtrar)


let buscador = document.querySelector(".buscar")

let incluyen = []

function buscar(){

    for(let i = 0; i < notas.length;i++){
        if(notas[i].titulo.includes(buscador.value)){
            console.log("si esta");
            console.log(notas[i]);
        }
    }

}

buscador.addEventListener("keyup", buscar )