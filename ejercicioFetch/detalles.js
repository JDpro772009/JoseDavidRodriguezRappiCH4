let cajaP1 = document.querySelector(".cajaP1")
let url = new URLSearchParams(window.location.search)
let ciudades = `https://api-colombia.com/api/v1/Department/${url.get("id")}/cities`
let areasNat = `https://api-colombia.com/api/v1/NaturalArea`



cajaP1.innerHTML = `<h2>${url.get("nombre")}</h2>
                <p>${url.get("desc")}</p>
                <h4>Municipios:${url.get("municip")}</h4>
                <h4>Superficie:${url.get("surface")}</h4>
                <h4>Poblacion:${url.get("population")}</h4>`

                fetch(ciudades)
                    .then(response => response.json())
                    .then(json => pintarCiudades(json))

                    
               
                function pintarCiudades(valor){
                    let cajaCartas = document.querySelector(".cartas")
                    let array=  valor.sort(function(a, b) {
                        return a.id-b.id;
                    });  
                        for(let i = 0; i<array.length;i++){
                            let cajita = document.createElement("div")
                            cajita.setAttribute("class", "card carta")
                            cajita.innerHTML = `<div class="card-body">
                                  <h5 class="card-title">${array[i].name}</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary valCiudad">Ciudad</h6>
                                </div>`
                            cajaCartas.appendChild(cajita)
                        }
                        
            

                    }
                    
                
                fetch(areasNat)
                    .then(response => response.json())
                    .then(json => pintarNat(json))
               
                function pintarNat(valor){
                    let cajaCartas = document.querySelector(".cartas")
                    // let array=  valor.sort(function(a, b) {
                    //     return a.id-b.id;
                    // });
                    console.log(valor.length);

                        for(let i = 0; i < valor.length;i++){
                            if( valor[i].departmentId == url.get("id") && valor[i].name != valor[i+1].name){
                                let cajita = document.createElement("div")
                            cajita.setAttribute("class", "card carta")
                            cajita.innerHTML = `<div class="card-body">
                                  <h5 class="card-title">${valor[i].name}</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary valNat">Area Natural</h6>
                                </div>`
                            cajaCartas.appendChild(cajita)
                            }else{
                                console.log("no hay nada");
                            }
                        }
                    
                   
                }

                document.querySelector('.buscar').addEventListener('input', function() {
                    let searchTerm = this.value.toLowerCase();
                    let cards = document.querySelectorAll('.carta');
                    
                    cards.forEach(card => {
                        let cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
                        if (cardTitle.includes(searchTerm)) {
                            card.style.display = '';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });

