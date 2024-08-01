fetch('https://api-colombia.com/api/v1/Invasivespecie')
    .then(resp => resp.json())
    .then(json => pintarEsp(json));

function pintarEsp(valor) {
    let array = valor.sort((a, b) => a.id - b.id);
    const rowsPerPage = 7;
    const numPages = Math.ceil(array.length / rowsPerPage);
    let pagina = 1;

    const tablaBody = document.querySelector(".tabla tbody");
    const pagination = document.getElementById("pagination");

    function actualizar(page) {
        tablaBody.innerHTML = ""; // Limpiar la tabla
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const currentItems = array.slice(start, end);

        currentItems.forEach(item => {
            const linea = document.createElement("tr");
            linea.innerHTML = `
                <td>${item.name}</td>
                <td>${item.scientificName}</td>
                <td>${item.impact}</td>
                <td>${item.manage}</td>
                <td>${item.riskLevel}</td>
                <td><img src="${item.urlImage}" alt="Imagen de ${item.name}" style="width: 250px; height: auto;"></td>
            `;
            if (item.riskLevel == 2) {
                linea.style = "background-color: rgba(34, 212, 123, 0.303);";
            } else {
                linea.style = "background-color: rgba(16, 53, 146, 0.473);";
            }
            tablaBody.appendChild(linea);
        });
    }

    function actpagina() {
        pagination.innerHTML = ""; // Limpiar paginación

        for (let i = 1; i <= numPages; i++) {
            const button = document.createElement("button");
            button.innerText = i;
            button.className = "btn btn-primary mx-1";
            button.addEventListener("click", () => {
                pagina = i;
                actualizar(pagina);
            });
            pagination.appendChild(button);
        }
    }

    actualizar(pagina);
    actpagina();
}