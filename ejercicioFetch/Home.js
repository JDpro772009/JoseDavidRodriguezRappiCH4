
let cajaTitulo = document.querySelector(".caja")


fetch('https://api-colombia.com/api/v1/Country/Colombia')
    .then (response=>response.json())
    .then (json=>targetaPrincipal(json)

)

function targetaPrincipal(text){
    let testo = document.createElement("div")
    testo.setAttribute("class", "cajaP1")
    testo.innerHTML=`  <h2>${text["name"]}</h2>
                       <p>${text["description"]}</p>`
   
    let img = document.createElement("img")
    img.setAttribute("src", text["flags"][1])
    cajaTitulo.appendChild(testo)
    cajaTitulo.appendChild(img)

     cajaTitulo.innerHTML = `
        <div class="cajaP1">
            <h2>${text["name"]}</h2>
            <p>${text["description"]}</p>
        </div>
        <img src="${text["flags"][1]}" alt="">`
}

fetch('https://api-colombia.com/api/v1/Department')
    .then(response => response.json())
    .then(json => pintarCards(json))

function pintarCards(valor){
    let cajaCartas = document.querySelector(".cartas")
    let array=  valor.sort(function(a, b) {
        return a.id-b.id;
    });
    function filtrarTexto(){
        let caja = document.querySelector(".cartas")
        let maxMunicipios = parseInt(document.querySelector(".numero").value) || Number.MAX_SAFE_INTEGER;
        let buscar = document.querySelector(".buscar").value.toLowerCase();

        caja.innerHTML = ""

        for(let i = 0; i < array.length; i++){
            if(array[i].name.toLowerCase().includes(buscar) && array[i].municipalities <= maxMunicipios){
                let cajita = document.createElement("div")
                cajita.setAttribute("class", "card carta")
                cajita.innerHTML = `<div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <p class="card-text">Municipios: ${array[i].municipalities}</p>
                    <p class="card-text">Poblacion: ${array[i].population}</p>
                    <p class="card-text">Superficie: ${array[i].surface}</p>
                    <a href="./detalles.html?id=${array[i].id}&nombre=${array[i].name}&desc=${array[i].description}&municip=${array[i].municipalities}&surface=${array[i].surface}&population=${array[i].population}" class="btn btn-primary">Detalles</a>
                </div>`
                caja.appendChild(cajita)
            }
        }
        
        if(caja.innerHTML === ""){
            let nada = document.createElement("h4")
            nada.textContent = "Lo sentimos, no hay cartas para mostrar :["
            caja.appendChild(nada)
        }
    }

    document.querySelector(".buscar").addEventListener("keyup", filtrarTexto)
    document.querySelector(".numero").addEventListener("input", filtrarTexto)

    // Inicializa la visualización con todos los datos
    filtrarTexto()
}
    
        for(let i = 0; i<array.length;i++){
            if(valor[i].description.includes("\"")){
                let descp = valor[i].description.replaceAll("\"", " ")
                let cajita = document.createElement("div")
            cajita.setAttribute("class", "card carta")
            cajita.innerHTML = `<div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>

                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface}</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${descp}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)
            }else{
            let cajita = document.createElement("div")
            cajita.setAttribute("class", "card carta")
            cajita.innerHTML = `<div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>

                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface}</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${valor[i].description}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)}
        }


let buscar = document.querySelector(".buscar")



