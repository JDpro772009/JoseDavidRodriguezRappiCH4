
let cajaTitulo = document.querySelector(".caja")
let depaColombia = [
    {
        nombre: "Amazonas",
        enlaceImagen: "../recursos/Colombia-Amazonas-departamentos.png"
      },
      {
        nombre: "Antioquia",
        enlaceImagen: "../recursos/antioquia.jpeg"
      },
      {
        nombre: "Arauca",
        enlaceImagen: "../recursos/250px-Arauca_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Atlántico",
        enlaceImagen: "../recursos/Colombia-Atlántico-departamentos.png"
      },{
        nombre: "Bogota",
        enlaceImagen: "../recursos/bogota.jpeg"
      },
      {
        nombre: "Bolívar",
        enlaceImagen: "../recursos/Colombia-Bolívar-departamentos.png"
      },
      {
        nombre: "Boyacá",
        enlaceImagen: "../recursos/250px-Boyaca_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Caldas",
        enlaceImagen: "../recursos/1420px-Caldas_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Caquetá",
        enlaceImagen: "../recursos/250px-Caqueta_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Casanare",
        enlaceImagen: "../recursos/casanare.jpeg"
      },
      {
        nombre: "Cauca",
        enlaceImagen: "../recursos/250px-Cauca_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Cesar",
        enlaceImagen: "../recursos/cesar.jpeg"
      },
      {
        nombre: "Chocó",
        enlaceImagen: "../recursos/Choco_in_Colombia_(mainland).svg"
      },
      {
        nombre: "Córdoba",
        enlaceImagen: "../recursos/Colombia-Córdoba-departamentos.png"
      },
      {
        nombre: "Cundinamarca",
        enlaceImagen: "../recursos/Colombia-Cundinamarca-departamentos.png"
      },
      {
        nombre: "Guainía",
        enlaceImagen: "../recursos/Colombia-Guainía-departamentos.png"
      },
      {
        nombre: "Guaviare",
        enlaceImagen: "../recursos/Colombia-Guaviare-departamentos.png"
      },
      {
        nombre: "Huila",
        enlaceImagen: "../recursos/250px-Huila_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "La Guajira",
        enlaceImagen: "../recursos/Colombia-La_Guajira-departamentos.png"
      },
      {
        nombre: "Magdalena",
        enlaceImagen: "../recursos/Colombia-Magdalena-departamentos.png"
      },
      {
        nombre: "Meta",
        enlaceImagen: "../recursos/Colombia-Meta-departamentos.png"
      },
      {
        nombre: "Nariño",
        enlaceImagen: "../recursos/Colombia-Nariño-departamentos.png"
      },
      {
        nombre: "Norte de Santander",
        enlaceImagen: "../recursos/250px-Norte_de_Santander_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Putumayo",
        enlaceImagen: "../recursos/Colombia-Putumayo-departamentos.png"
      },
      {
        nombre: "Quindío",
        enlaceImagen: "../recursos/quindio.jpeg"
      },
      {
        nombre: "Risaralda",
        enlaceImagen: "../recursos/Colombia-Risaralda-departamentos.png"
      },
      {
        nombre: "San Andrés y Providencia",
        enlaceImagen: "../recursos/Colombia-San_Andrés_y_Providencia-departamentos.png"
      },
      {
        nombre: "Santander",
        enlaceImagen: "../recursos/Colombia-Santander-departamentos.png"
      },
      {
        nombre: "Sucre",
        enlaceImagen: "../recursos/250px-Sucre_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Tolima",
        enlaceImagen: "../recursos/tolima.jpeg"
      },
      {
        nombre: "Valle del Cauca",
        enlaceImagen: "../recursos/250px-Valle_del_Cauca_in_Colombia_(mainland).svg.png"
      },
      {
        nombre: "Vaupés",
        enlaceImagen: "../recursos/Colombia-Vaupés-departamentos.png"
      },
      {
        nombre: "Vichada",
        enlaceImagen: "../recursos/Colombia-Vichada-departamentos.png"
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
    console.log(array);
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
                    <img src="${depaColombia[i]["enlaceImagen"]}" class="depa">
                    <p class="card-text">Municipios: ${array[i].municipalities}</p>
                    <p class="card-text">Poblacion: ${array[i].population}</p>
                    <p class="card-text">Superficie: ${array[i].surface} Km</p>
                    <a href="./detalles.html?id=${array[i].id}&nombre=${array[i].name}&desc=${array[i].description}&municip=${array[i].municipalities}&surface=${array[i].surface}&population=${array[i].population}&imagen=${depaColombia[i]["enlaceImagen"]}" class="btn btn-primary">Detalles</a>
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
                  <img src="${depaColombia[i]["enlaceImagen"]}" class="depa">
                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface} Km</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${descp}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}&imagen=${depaColombia[i]["enlaceImagen"]}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)
            }else{
            let cajita = document.createElement("div")
            cajita.setAttribute("class", "card carta anim")
            cajita.innerHTML = `<div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>
                  <img src="${depaColombia[i]["enlaceImagen"]}" class="depa">
                  <p class="card-text">Municipios:${array[i].municipalities}</p>
                  <p class="card-text">Poblacion:${array[i].population}</p>
                  <p class="card-text">Superficie:${array[i].surface} Km</p>
                  <a href="./detalles.html?id=${valor[i].id}&nombre=${valor[i].name}&desc=${valor[i].description}&municip=${valor[i].municipalities}&surface=${valor[i].surface}&population=${valor[i].population}&imagen=${depaColombia[i]["enlaceImagen"]}" class="btn btn-primary">Detalles</a>
                </div>`
            cajaCartas.appendChild(cajita)}
            
        }


let buscar = document.querySelector(".buscar")



