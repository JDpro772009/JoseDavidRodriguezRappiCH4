
let url = new URLSearchParams(window.location.search)


let detalles = document.querySelector(".info")
let imagenes = document.querySelector(".imagenes")

if(url.get("date")>url.get("currentDate")){
    imagenes.setAttribute("src", url.get("image"))
    detalles.innerHTML = `
                <p><strong>Name:</strong> ${url.get("name")}</p>
                <p><strong>Date:</strong> ${url.get("date")}</p>
                <p><strong>Description:</strong>${url.get("description")}</p>
                <p><strong>Category:</strong> ${url.get("category")}</p>
                <p><strong>Place:</strong> ${url.get("place")}</p>
                <p><strong>Capacity:</strong> ${url.get("capacity")}</p>
                <p><strong>Estimate:</strong> ${url.get("estimate")}</p>
                <p><strong>Price:</strong> ${url.get("price")}$</p>`
}else{
    imagenes.setAttribute("src", url.get("image"))
    detalles.innerHTML = `
                <p><strong>Name:</strong> ${url.get("name")}</p>
                <p><strong>Date:</strong> ${url.get("date")}</p>
                <p><strong>Description:</strong>${url.get("description")}</p>
                <p><strong>Category:</strong> ${url.get("category")}</p>
                <p><strong>Place:</strong> ${url.get("place")}</p>
                <p><strong>Capacity:</strong> ${url.get("capacity")}</p>
                <p><strong>Assistance:</strong> ${url.get("assistance")}</p>
                <p><strong>Price:</strong> ${url.get("price")}$</p>`
}