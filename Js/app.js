const productosColeccion = document.getElementById ('productosColeccion')
const imagenCarrito = document.getElementById ('imagenCarrito')
const sumaCompras = document.getElementById ('sumaCompras')
const fabricaCarrito = document.getElementById ('fabricaCarrito')



let Carrito = JSON.parse (localStorage.getItem ("carrito")) || []

const productos = []

const coleccionJson = `productos.json`;
console.log(coleccionJson);

async function muestraCuadros() {
    const respuesta = await fetch(coleccionJson);
    const datosDeProductosJson = await respuesta.json();
    cargarDatosJsonEnLista(datosDeProductosJson);
    cargaDeProductos();

    console.log("la colección se añadió a la app")
}

muestraCuadros () ;
function cargarDatosJsonEnLista (datos) {
    datos.forEach ((producto)=> {
    producto.push(producto);
});
}   




function cargaDeProductos() {
obras.forEach((obra)=>{

    let content = document.createElement('div')
    content.className = "cardColeccion"
    content.innerHTML =
    `<img src="${obra.img}">
    <h2>${obra.titulo}</h2>
    <h4>${obra.medidas}</h4>
    <h4>${obra.tecnica}</h4>
    <h4>${obra.soporte}</h4>
    <h4>${obra.año}</h4>
    <h5>$ ${obra.precio}</h5>
    `;
    productosColeccion.append(content)

    let adquirirObra = document.createElement('button')
    adquirirObra.innerText = "Adquirir obra"
    adquirirObra.className = "adquirir-Obra"
    content.append(adquirirObra)
})

    adquirirObra.addEventListener('click' , () => {
    const repeat = Carrito.some ((repeatObra)=> repeatObra.id === obra.id)

    if(repeat){ 
        Carrito.map((obr)=> {
            if(obr.id===obra.id) {
                obr.cantidad++;
            }
        })
    }
    else {
        Carrito.push ( {
            titulo: obra.titulo,
            medidas: obra.medidas,
            precio: obra.precio,
        });

        carritoEncima ()
        saveLocal ()


    }
});
}




//  CARRITO





const llenarCarrito = ()=>{
    sumaCompras.innerHTML = ""
    sumaCompras.style.display = 'flex'
    const modeladoCarrito = document.createElement ('div')
    modeladoCarrito.className = "modelo-carrito"
    modeladoCarrito.innerHTML = `<h1>Carrito</h1>`;
    sumaCompras.append (modeladoCarrito)


    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click",() => {
    modalContainer.style.display = "none"
    })

    modalHeader.append(modalbutton)


    Carrito.forEach ((obra)=>{
        let contenidoCarrito = document.createElement ('div')
        contenidoCarrito.className = "contenido-carrito"
        contenidoCarrito.innerHTML = `
        <img src= "${obra.img}">
        <h3> ${obra.titulo}</h3>
        <p>$ ${obra.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad:  ${obra.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total $ :  ${orba.cantidad * obra.precio}</p>
        <span class="quitar"> ❌ </span>
        `


        sumaCompras.append (contenidoCarrito)

        let sumar = contenidoCarrito.querySelector (".sumar")

        sumar.addEventListener("click", () => {
            obra.cantidad++
            saveLocal ()
            llenarCarrito ()
        })

        let restar = contenidoCarrito.querySelector (".restar")

        restar.addEventListener("click", () => {
            if(obra.cantidad !== 1) {
                obra.cantidad--
            }
            saveLocal ()
            llenarCarrito ()

        })

        let quitar = contenidoCarrito.querySelector (".quitar")

        quitar.addEventListener("click", () => {
            eliminarProducto (obra.id)

            saveLocal ()
            llenarCarrito ()
        })

});

const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `total a pagar: $${total} `
sumaCompras.append(totalBuying)

const finalizarCompra = document.createElement("div")
finalizarCompra.className = "finalizarCompra"
finalizarCompra.innerHTML = `<button class="finalizarCompra"> FINALIZAR COMPRA </button>`
sumaCompras.append(finalizarCompra)

let finalizar = finalizarCompra.querySelector(".finalizarCompra")
finalizar.addEventListener("click", () => {
    swal("Felicitaciones", "Usted adquirió la obra con éxito", "success")
} )
};

imagenCarrito.addEventListener("click", llenarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find ((element) => element.id === id)
    console.log(foundId)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoEncima ();
    saveLocal ();
    llenarCarrito();
};

    const carritoEncima = () => {
    fabricaCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    fabricaCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    
}

carritoEncima()

    const saveLocal = () =>  {
    localStorage.setItem("carrito",JSON.stringify (carrito))
}
