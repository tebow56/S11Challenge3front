const listadoinformacion = document.getElementById('listadoinformacion')


function getusers() {
    const url = 'http://localhost:3000/users'
    fetch(url).then(response =>response.json()).then((data)=>{  
        listadoinformacion.innerHTML = data.map(data =>{return `
        <li class=user>
            <h3> ${data.nombre}</h3>
            <p>Email: ${data.correo}</p>
            <p><strong>Colección:</strong></p>
            <ul class="coleccion">
                ${data.coleccion.map((data)=>{
                    return `<li>${data}</li>`
                }).join ('')}
            </ul>
            <p> <strong>Wishlist:</strong></p>
            <ul class =wishlist>
                ${data.wishlist.map((data)=>{
                    return `<li>${data}</li>`
                }).join ('')}
            </ul>
        </li>
        `
    }).join('' )  
    })
}

function getbooks() {
    const url = 'http://localhost:3000/books'
    fetch(url).then(response =>response.json()).then((data)=>{  
        listadoinformacion.innerHTML = data.map(data =>{return `
        <li class=book>
            <h3> ${data.titulo}</h3>
            <img src="${data.imagen}" alt="foto del libro${data.titulo} width="150" height="200""></img>
            <p><strong>Autor:</strong> ${data.autor}</p>
            <p><strong>Fecha de publicación:</strong> ${data.fechaPublicacion}</p>
        </li>
        `
    }).join('' )  
    })
}

