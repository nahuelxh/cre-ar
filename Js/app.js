const productosColeccion = document.getElementById ('productosColeccion')
const imagenCarrito = document.getElementById ('imagenCarrito')
const sumaCompras = document.getElementById ('sumaCompras')
const fabricaCarrito = document.getElementById ('fabricaCarrito')



let Carrito = JSON.parse (localStorage.getItem ('carrito')) || []

const coleccionJson = `productos.json`


async function muestraCuadros() {
    const respuesta = await fetch(coleccionJson);
    const datosDeProductosJson = await respuesta.json();
    cargarDatosJsonEnLista(datosDeProductosJson);

    cargaDeProductos();
    console.log("asdasdasd")
}

muestraCuadros () ;
function cargarDatosJsonEnLista (datos) {
    datos.forEach ((producto)=>
    producto.push(producto))
}   




function cargaDeProductos() {
obras.forEach((obra)=>{
    let content = document.createElement('div')
    content.className = 'cardColeccion'
    content.innerHTML = `
    <img src="${obra.img}">
    <h2>${obra.titulo}</h2>
    <h4>${obra.medidas}</h4>
    <h4>${obra.tecnica}</h4>
    <h4>${obra.soporte}</h4>
    <h4>${obra.año}</h4>
    <h5>$ ${obra.precio}</h5>
    `
    productosColeccion.appendChild(content)

    let adquirirObra = document.createElement('button')
    adquirirObra.innerText = "Adquirir obra"
    adquirirObra.className = "adquirir-Obra"
    content.appendChild(adquirirObra)
})

adquirirObra.addEventListener('click' , () => {
    const repeat = Carrito.some ((repeatObra)=> repeatObra.id === obra.id)
    if(repeat){ 
        Carrito.map((obr)=> {
            if(obr.id===obra.id) {
                obr.cantidad++
            }
        })
    }
    else {
        Carrito.push ( {
            titulo:obra.titulo,
            medidas:obra.medidas,
            precio:obra.precio,
        })
    }
})
}




//  CARRITO


const llenarCarrito = ()=>{
    fabricaCarrito.innerHTML = ""
    fabricaCarrito.style.display = 'flex'
    const modeladoCarrito = document.createElement ('div')
    modeladoCarrito.className = "modelo-carrito"
    modeladoCarrito.innerHTML = `<h1>Carrito</h1>`
    fabricaCarrito.append (modeladoCarrito)

    Carrito.forEach ((obra)=>{
        let contenidoCarrito = document.createElement ('div')
        contenidoCarrito.className = "contenido-carrito"
        contenidoCarrito.innerHTML = `<h3> ${obra.titulo}</h3><p>$ ${obra.precio}</p>`
        fabricaCarrito.appendChild ('contenidoCarrito')
    })
}