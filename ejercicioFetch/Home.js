
let cajaTitulo = document.querySelector(".caja")
let depaColombia = [
    {
        nombre: "Amazonas",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Colombia-Amazonas-departamentos.png"
      },
      {
        nombre: "Antioquia",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/d/df/Antioquia_in_Colombia_%28special%29.jpg"
      },
      {
        nombre: "Arauca",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/2/25/Arauca_in_Colombia.jpg"
      },
      {
        nombre: "Atlántico",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Atlantico_in_Colombia_%28special%29.jpg"
      },
      {
        nombre: "Bolívar",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bolivar_in_Colombia_%28special%29.jpg"
      },
      {
        nombre: "Boyacá",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Boyaca_in_Colombia.jpg"
      },
      {
        nombre: "Caldas",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Caldas_in_Colombia.jpg"
      },
      {
        nombre: "Caquetá",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Caqueta_in_Colombia.jpg"
      },
      {
        nombre: "Casanare",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Casanare_in_Colombia.jpg"
      },
      {
        nombre: "Cauca",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Cauca_in_Colombia.jpg"
      },
      {
        nombre: "Cesar",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/7/76/Cesar_in_Colombia.jpg"
      },
      {
        nombre: "Chocó",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Choco_in_Colombia.jpg"
      },
      {
        nombre: "Córdoba",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Cordoba_in_Colombia.jpg"
      },
      {
        nombre: "Cundinamarca",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/8/88/Cundinamarca_in_Colombia.jpg"
      },
      {
        nombre: "Guainía",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/8/84/Guainia_in_Colombia.jpg"
      },
      {
        nombre: "Guaviare",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/1/14/Guaviare_in_Colombia.jpg"
      },
      {
        nombre: "Huila",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Huila_in_Colombia.jpg"
      },
      {
        nombre: "La Guajira",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/5/5c/La_Guajira_in_Colombia.jpg"
      },
      {
        nombre: "Magdalena",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Magdalena_in_Colombia.jpg"
      },
      {
        nombre: "Meta",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meta_in_Colombia.jpg"
      },
      {
        nombre: "Nariño",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Narino_in_Colombia.jpg"
      },
      {
        nombre: "Norte de Santander",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Norte_de_Santander_in_Colombia.jpg"
      },
      {
        nombre: "Putumayo",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/8/82/Putumayo_in_Colombia.jpg"
      },
      {
        nombre: "Quindío",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Quindio_in_Colombia.jpg"
      },
      {
        nombre: "Risaralda",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/5/52/Risaralda_in_Colombia.jpg"
      },
      {
        nombre: "San Andrés y Providencia",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/San_Andres_y_Providencia_in_Colombia.jpg"
      },
      {
        nombre: "Santander",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Santander_in_Colombia.jpg"
      },
      {
        nombre: "Sucre",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/7/76/Sucre_in_Colombia.jpg"
      },
      {
        nombre: "Tolima",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/3/30/Tolima_in_Colombia.jpg"
      },
      {
        nombre: "Valle del Cauca",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/4/42/Valle_del_Cauca_in_Colombia.jpg"
      },
      {
        nombre: "Vaupés",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Vaupes_in_Colombia.jpg"
      },
      {
        nombre: "Vichada",
        enlaceImagen: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Vichada_in_Colombia.jpg"
      }
  ];

  

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
                cajita.setAttribute("class", "card carta anim")
                cajita.innerHTML = `<div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <img src="../recursos/Colombia-Amazonas-departamentos.png" id="depa">
                    <p class="card-text">Municipios: ${array[i].municipalities}</p>
                    <p class="card-text">Poblacion: ${array[i].population}</p>
                    <p class="card-text">Superficie: ${array[i].surface} Km</p>
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
            cajita.setAttribute("class", "card carta anim")
            cajita.innerHTML = `<div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>

                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface} Km</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${descp}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)
            }else{
            let cajita = document.createElement("div")
            cajita.setAttribute("class", "card carta anim")
            cajita.innerHTML = `<div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>

                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface} Km</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${valor[i].description}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)}
        }


let buscar = document.querySelector(".buscar")



