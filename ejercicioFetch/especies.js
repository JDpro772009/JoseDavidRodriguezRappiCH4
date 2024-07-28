fetch('https://api-colombia.com/api/v1/Invasivespecie')
    .then(resp => resp.json())
    .then(json => pintarEsp(json))

function pintarEsp(valor){
    let array=  valor.sort(function(a, b) {
        return a.id-b.id;
    });
    let tabla = document.querySelector(".tabla")
    for(let i = 0; i < array.length;i++){
        let linea = document.createElement("tr")
        linea.innerHTML = `
            <td>${array[i].name}</td>
            <td>${array[i].scientificName}</td>
            <td>${array[i].impact}</td>
            <td>${array[i].manage}</td>
            <td>${array[i].riskLevel}</td>
            <td><img src="${array[i].urlImage}"></td>
        `
        if(array[i].riskLevel == 2){
            linea.style = "background-color: rgba(34, 212, 123, 0.303);"
            tabla.appendChild(linea)
        }else{
            linea.style = "background-color:rgba(16, 53, 146, 0.473);"
            tabla.appendChild(linea)
        }
    }

}